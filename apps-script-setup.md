# MPEO Express Interest Form — Google Apps Script Backend Setup

> **Purpose of this document:** Standalone setup + integration reference for the "Express Your Interest" email capture form (see `content-design.md` §13 and `aesthetic-design.md` §5.9). Written so either the site owner (non-developer) or a future Claude Code session (post context-clear) can pick this up independently — includes both the *why* and the *how*.

---

## 1. Why This Exists (Context)

The MPEO site is a **static site** (deployed on GitHub Pages) with no server of its own. It has a lightweight "Express Interest" email form — separate from and secondary to official CIMS registration — meant to let a visitor leave their email for a follow-up nudge before the next Wednesday meeting.

An earlier draft of this feature stored submissions in the browser's `localStorage`. That was rejected: `localStorage` is scoped **per device, per browser** and is never transmitted anywhere. Since most visitors will reach the site by scanning a QR code **on their own phone**, a `localStorage`-only form would silently fail to ever reach MPEO leadership — every submission would be trapped on the visitor's own phone.

**The fix:** a small **Google Apps Script Web App**, bound to a Google Sheet, that the static site calls via `fetch(POST)`. This gives a real (if minimal) backend without needing to host or pay for one — appropriate since the school already runs Google Workspace (`@gapps.uwcsea.edu.sg`), so this stays inside infrastructure the school already trusts, rather than routing student email addresses through a third-party SaaS.

**Division of responsibility:**
- **The site owner** (not Claude) must do the one-time setup in Steps 2–4 below — this requires signing into the owner's own Google account interactively (OAuth consent screens), which an agent cannot do on someone else's behalf.
- **Claude Code**, once handed the resulting Web App URL, wires up the actual fetch call in the site's JS (Step 5) and can also write/refine the Apps Script code itself (Step 2's code lives in this doc precisely so an agent can regenerate or modify it without re-deriving the design from scratch).

---

## 2. One-Time Setup (Site Owner Does This — ~10 Minutes)

### 2.1 Create the Sheet
1. Go to [sheets.google.com](https://sheets.google.com) → create a new sheet.
2. Name it **`MPEO Interest List`**.
3. Row 1 headers: `A1 = Timestamp`, `B1 = Email`.

### 2.2 Open the Script Editor
In the Sheet: **Extensions → Apps Script**. This binds the script to this specific spreadsheet, so `getActiveSpreadsheet()` always resolves correctly with no config needed.

### 2.3 Paste the Script
Delete the placeholder `myFunction() {}` and replace the file contents with:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  var email = '';

  try {
    // Handles JSON body: { "email": "student@example.com" }
    var data = JSON.parse(e.postData.contents);
    email = data.email;
  } catch (err) {
    // Fallback: handles a plain form-encoded POST (e.parameter.email)
    email = e.parameter.email;
  }

  if (!email || email.indexOf('@') === -1) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', message: 'Invalid email' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([new Date(), email]);

  // Optional: uncomment to notify a leadership alias on every submission
  // MailApp.sendEmail('yourleadershipalias@gapps.uwcsea.edu.sg',
  //   'New MPEO Interest Signup', 'New email: ' + email);

  return ContentService.createTextOutput(
    JSON.stringify({ result: 'success' })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

Rename the project (top-left "Untitled project") to `MPEO Interest Form Backend`. Save (Ctrl+S).

### 2.4 Deploy as a Web App
1. **Deploy → New deployment** → gear icon next to "Select type" → **Web app**.
2. Settings:
   - **Description**: `MPEO interest form endpoint`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone` *(required — the static site is loaded by anonymous visitors and must be able to reach this endpoint without their own Google login)*
3. **Deploy**.
4. Google will show an OAuth consent flow since the script writes to Sheets/sends Mail: **Authorize access → your account → "Advanced" → "Go to [project name] (unsafe)" → Allow.** The "unsafe" label is standard for any personal/unverified Apps Script project — expected here, not a red flag.
5. Copy the resulting **Web app URL**:
   `https://script.google.com/macros/s/AKfycb.../exec`
   **This URL is the one thing to hand to Claude Code (or paste into the site config) to complete the integration.**

### 2.5 Test Before Wiring Up the Site
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}' \
  "YOUR_SCRIPT_URL_HERE"
```
A new row should appear in the Sheet within a couple seconds. Delete the test row once confirmed.

---

## 3. Integration Into the Site (Claude Code Does This, Once the URL Exists)

### 3.1 Config placement
Keep the URL in exactly one place — a top-level constant in the site's JS, e.g.:
```javascript
const INTEREST_FORM_ENDPOINT = ""; // <-- paste the Apps Script /exec URL here once deployed
```
Until this is filled in, the form should fail gracefully (see 3.3), not throw or silently no-op.

### 3.2 The fetch call
Apps Script Web Apps don't return standard CORS headers the way a normal API would. The reliable client-side pattern is to send the body as `text/plain` (even though the payload is JSON) to avoid triggering a CORS preflight `OPTIONS` request that Apps Script doesn't handle:
```javascript
fetch(INTEREST_FORM_ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'text/plain;charset=utf-8' },
  body: JSON.stringify({ email })
})
  .then(res => res.json())
  .then(data => {
    if (data.result === 'success') {
      showConfirmationState(); // "Got it — added to our interest list. See you Wednesday!"
    } else {
      showErrorState(); // "That didn't go through — try again, or email a leader directly."
    }
  })
  .catch(() => showErrorState());
```

### 3.3 Placeholder / not-yet-configured behavior
If `INTEREST_FORM_ENDPOINT` is empty (site being built before the script is deployed), the form should not attempt the fetch — show the same error/fallback state pointing to leadership emails, so nothing looks broken during development or if setup is delayed. This lets the rest of the site be built and shipped independently of this step's completion (see §1 division of responsibility).

### 3.4 QR code note (related placeholder, same pattern)
The QR code panel (`content-design.md` §3.3, `aesthetic-design.md` §5.4a) follows the identical "build now, drop in later" pattern: it encodes the live site's own URL, which doesn't exist until the site is deployed (e.g. to GitHub Pages). Ship a styled placeholder graphic now; swap in the real QR image asset once a URL exists — no layout or code change needed, just a file swap.

---

## 4. Operational Notes (Both Owner & Claude Should Know)

- **Redeploying after script edits**: Editing the Apps Script code alone does **not** update the live `/exec` URL's behavior. You must **Deploy → Manage deployments → pencil icon → New version → Deploy**. Easy to forget, and the classic "why isn't my fix working" trap.
- **Quota**: Free-tier Apps Script allows on the order of 20,000 URL Fetch calls/day — far beyond what a school club recruitment form will ever see.
- **Security surface**: The `/exec` URL is technically public (has to be, for an anonymous static site to POST to it), but it's not listed anywhere discoverable — only someone reading the site's JS source would find it. The script only accepts an email string and writes one row; worst-case abuse is spam rows in the Sheet, not a real security hole.
- **Recommended pre-LifeCon check**: Do one real test submission the morning of the event to confirm the deployment is still live and authorized (Google occasionally requires re-authorization if permissions lapse).

---

## 5. Cross-References
- Full form copy, placement rationale, and UX states: `content-design.md` §3.4 and §13
- Visual/component spec for the form and QR panel: `aesthetic-design.md` §5.4a and §5.9
