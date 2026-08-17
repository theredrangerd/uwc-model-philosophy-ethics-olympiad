/**
 * Model Philosophy Ethics Olympiad (MPEO) — Past Competition Cases Logic
 * 
 * Features:
 * 1. Comprehensive Database of 8 Tournament Cases & Moral Dilemmas
 * 2. Real-time Search and Category Filtering
 * 3. Interactive Case Dossier Modal with Tabbed Breakdown
 * 4. Deep-linking via URL hash (#case-1 to #case-8)
 * 5. Random Case Deliberation Selector
 * 6. Responsive Mobile Navigation
 */

// ==========================================================================
// CASE DATABASE
// ==========================================================================
const CASES_DATA = [
  {
    id: 'case-1',
    number: 'CASE 01',
    origin: '✦ Senior Olympiad 2025',
    category: 'ai',
    categoryLabel: '🤖 AI & Biomedical Ethics',
    title: 'The Autonomous Triage Protocol',
    tags: ['Utility vs. Human Dignity', 'Algorithmic Bias', 'Distributive Justice'],
    summary: 'When an intensive care unit faces severe ventilator shortages, a neural network prioritizes patients by maximizing Quality-Adjusted Life Years (QALYs), creating deep tension between utilitarian efficiency and deontological duties of non-discrimination.',
    scenario: 'During a severe regional respiratory epidemic, Saint Jude Memorial Hospital experiences a catastrophic surge in critical care admissions. With 42 patients facing imminent respiratory arrest and only 14 mechanical ventilators and ECMO circuits remaining, the clinical ethics committee deploys "Aegis-Triage"—an algorithmic clinical decision support system trained on multi-decade longitudinal survival data.',
    dilemma: 'Aegis-Triage computes an objective survivability coefficient and allocates ventilators strictly to maximize net Quality-Adjusted Life Years (QALYs) saved. Under this protocol, patients with chronic conditions (such as diabetes, hypertension, and asthma) and elderly patients are scored lower and denied equipment. However, community representatives demonstrate that systemic inequalities and environmental redlining have produced disproportionately high baseline rates of chronic disease in historically disadvantaged minority neighborhoods. Consequently, the algorithm’s mathematically neutral utility maximization systematically deprioritizes marginalized demographics.',
    questions: [
      'Is maximizing total quality life-years morally defensible when doing so compounds pre-existing social and environmental injustice?',
      'Should clinical resource triage ever use randomized lotteries instead of utilitarian efficiency scoring to uphold equal moral worth?',
      'Does handing life-or-death decisions to an algorithm violate the Kantian prohibition against treating human beings as mere statistical instruments?'
    ],
    stakeholders: [
      {
        name: 'Critical Care Patients & Families',
        role: 'Direct Vulnerability',
        desc: 'Patients requiring life-support whose moral right to life is subject to statistical algorithm calculation.'
      },
      {
        name: 'Attending ICU Physicians',
        role: 'Moral Agency & Duty of Care',
        desc: 'Bound by the Hippocratic obligation of unconditional individual beneficence, now forced to deny care based on software outputs.'
      },
      {
        name: 'Disadvantaged Community Demographics',
        role: 'Systemic Equity',
        desc: 'Groups experiencing compounded health vulnerabilities who face algorithmic exclusion from life-saving care.'
      },
      {
        name: 'Hospital Administration & Public Health',
        role: 'Resource Stewardship',
        desc: 'Charged with managing acute municipal shortages to achieve the greatest net societal survival.'
      }
    ],
    frameworks: [
      {
        name: 'Utilitarianism (Bentham / Mill)',
        stance: 'Pro-Algorithmic Allocation',
        desc: 'Argues that in catastrophic triage, the only rational moral objective is minimizing total net mortality and maximizing cumulative QALYs saved across the aggregate population.'
      },
      {
        name: 'Kantian Deontology (Categorical Imperative)',
        stance: 'Critique of Pure Utility',
        desc: 'Emphasizes that every person possesses inviolable intrinsic dignity. Deprioritizing an individual because of their demographic life expectancy treats them as a mere statistical means rather than an end in themselves.'
      },
      {
        name: 'Rawlsian Distributive Justice (Difference Principle)',
        stance: 'Priority for the Least Advantaged',
        desc: 'Requires that any triage protocol must be acceptable from behind a "Veil of Ignorance" and must not worsen the condition of historically vulnerable populations.'
      },
      {
        name: 'Care Ethics (Virginia Held / Carol Gilligan)',
        stance: 'Relational Responsibility',
        desc: 'Rejects detached mathematical algorithms in favor of contextualized relational care, human physician empathy, and institutional accompaniment.'
      }
    ],
    dialogue: {
      teamA: 'Our team proposes a Hybrid Tri-Tier Protocol. While aggregate survival cannot be ignored during public health emergencies, a purely unconstrained QALY algorithm directly encodes structural inequality. We argue for an initial clinical viability threshold, followed by an egalitarian lottery among all viable candidates, paired with an affirmative vulnerability adjustment that offsets baseline social determinants of health.',
      teamB: 'We commend Team A for acknowledging systemic bias. However, we ask Team A to consider the moral cost of their lottery mechanism: if a randomized lottery allocates a ventilator to a patient with a 15% survival probability over a patient with a 90% survival probability, multiple preventable deaths occur. We propose refining their model by replacing the lottery with sequential prognostic re-evaluations every 48 hours rather than random chance.',
      judgesQ: 'Judge: "If two patients have identical clinical viability, but one is an ICU nurse whose recovery could enable her to treat dozens more patients next week, does utilitarian instrumental value override strict egalitarian neutrality?"',
      modelResponse: 'MPEO Model Response: "Under standard deontology, all lives have equal moral worth. However, under a Rule-Utilitarian and Social Contract framework, prioritizing healthcare workers is justified not because their personal life is inherently more valuable, but because doing so creates the systemic capacity necessary to protect the moral rights of all future patients."'
    }
  },
  {
    id: 'case-2',
    number: 'CASE 02',
    origin: '✦ Grand Finals Prep',
    category: 'environment',
    categoryLabel: '🌿 Environmental & Climate Ethics',
    title: 'De-Extinction and Ecological Hubris',
    tags: ['Anthropocentrism vs. Ecocentrism', 'Technofix Moral Hazard', 'Indigenous Sovereignty'],
    summary: 'A synthetic biology consortium resurrects a woolly mammoth proxy to combat Arctic permafrost thaw. While proponents cite carbon mitigation, indigenous councils and conservationists fear unpredictable ecological disruption and moral hazard.',
    scenario: 'Revive-Bio, an international biotechnology consortium funded by climate venture capital, successfully synthesizes a cold-adapted Asian elephant hybrid with genetic traits of the extinct woolly mammoth. Field simulations suggest that reintroducing large megaherbivores to the Siberian and Canadian tundra can trample insulating snow, expose soil to sub-zero temperatures, and preserve permafrost—preventing the release of billions of tons of sequestered greenhouse gases.',
    dilemma: 'Conservation biologists and indigenous Arctic councils raise urgent ethical objections. First, releasing synthetic species into complex, shifting ecosystems risks catastrophic trophic cascades. Second, relying on high-tech genetic 'fixes' creates a dangerous moral hazard, encouraging industrial nations to continue fossil fuel extraction under the false illusion that future biotechnology will reverse climate damage. Finally, indigenous governance over traditional lands is sidelined in favor of billionaire-backed techno-optimism.',
    questions: [
      'Does humanity possess an affirmative moral duty of restorative justice to bring back species driven extinct by human activity?',
      'Does prioritizing technological mega-projects over binding emission reductions represent a failure of virtue ethics and collective responsibility?',
      'How should indigenous sovereignty and ecological self-determination weigh against global geoengineering climate interventions?'
    ],
    stakeholders: [
      {
        name: 'Indigenous Arctic Communities',
        role: 'Territorial Sovereignty',
        desc: 'Populations whose ancestral hunting, reindeer herding, and cultural ecosystems would be reshaped without full prior informed consent.'
      },
      {
        name: 'Future Generations',
        role: 'Intergenerational Beneficiaries',
        desc: 'Billions of future humans who will endure the worst impacts of runaway permafrost carbon release.'
      },
      {
        name: 'Biotech Developers & Investors',
        role: 'Technological Innovators',
        desc: 'Proponents arguing that existing climate tipping points demand radical biological interventions.'
      },
      {
        name: 'Existing Arctic Fauna & Flora',
        role: 'Non-Human Ecological Community',
        desc: 'Species that have adapted over ten millennia to the post-Pleistocene environment.'
      }
    ],
    frameworks: [
      {
        name: 'Leopold’s Land Ethic (Biocentrism)',
        stance: 'Ecological Integrity',
        desc: '“A thing is right when it tends to preserve the integrity, stability, and beauty of the biotic community. It is wrong when it tends otherwise.” Re-engineering extinct organisms is viewed as anthropocentric interference.'
      },
      {
        name: 'Intergenerational Utilitarianism',
        stance: 'Net Climate Risk Reduction',
        desc: 'Argues that the catastrophic planetary harm of irreversible permafrost collapse outweighs local ecological disruptions, making biological mitigation an ethical imperative.'
      },
      {
        name: 'Virtue Ethics (Humility vs. Hubris)',
        stance: 'Critique of Technological Mastery',
        desc: 'Cultivates the virtue of ecological humility—recognizing human epistemic limits rather than indulging in Promethean mastery over living genomes.'
      },
      {
        name: 'Post-Colonial Justice',
        stance: 'Procedural Consent',
        desc: 'Affirms that no international consortium may conduct experimental ecological interventions on indigenous lands without unconditional free, prior, and informed consent.'
      }
    ],
    dialogue: {
      teamA: 'We argue that de-extinction geoengineering should only be permitted under an internationally governed moratorium that requires mandatory indigenous co-management and guarantees that funding cannot be counted toward national emissions offset quotas, eliminating moral hazard.',
      teamB: 'We support Team A’s governance framework, but emphasize an overlooked dimension: animal welfare. The cloned mammoths would be raised in artificial captivity without natural social herd structures, effectively turning sentient animals into ecological utility tools.',
      judgesQ: 'Judge: "If Arctic permafrost thaw reaches an irreversible tipping point next year, does planetary urgency override the need for global consensus?"',
      modelResponse: 'MPEO Model Response: "Urgency heightens the stakes, but bypassing local consent and animal welfare does not solve the ethical dilemma—it merely externalizes risk onto vulnerable populations. Emergency action must pair targeted pilot trials with binding legal protections."'
    }
  },
  {
    id: 'case-3',
    number: 'CASE 03',
    origin: '✦ TKEthics Invitational 2025',
    category: 'governance',
    categoryLabel: '🏛️ Law & Digital Human Rights',
    title: 'The Right to Forget vs. The Public Record',
    tags: ['Rehabilitation vs. Historical Truth', 'Informational Privacy', 'Freedom of Expression'],
    summary: 'A reformed activist convicted of civil disobedience ten years ago petitions search engines to delist arrest records to rebuild her professional livelihood, sparking a constitutional debate against journalists preserving public integrity.',
    scenario: 'At age 19, Elena Vance participated in a disruptive non-violent protest that blocked an energy terminal, resulting in a misdemeanor trespass conviction. Ten years later, Elena has completed community service, earned a degree in environmental urban planning, and is applying for municipal government positions. However, every prospective employer searching her name immediately encounters sensationalized local news headlines and mugshots from a decade ago, leading to recurring job rejections.',
    dilemma: 'Elena petitions major search engines under the "Right to be Forgotten" framework to delist links connecting her legal name to the ten-year-old misdemeanor. Journalists, freedom-of-information advocates, and local historians counter-petition, arguing that search engine delisting constitutes privatized censorship and historical erasure, undermining the public’s fundamental right to truthful civic records.',
    questions: [
      'Should an individual’s right to personal rehabilitation and moral reinvention take precedence over the public’s access to historical records?',
      'Is search engine delisting equivalent to censorship, or does it merely restore the natural "practical obscurity" that existed before digital search engines?',
      'How should societies distinguish between minor youthful infractions and matters of enduring public interest?'
    ],
    stakeholders: [
      {
        name: 'The Reformed Individual (Elena)',
        role: 'Personal Autonomy & Livelihood',
        desc: 'Seeking economic reintegration and freedom from perpetual digital stigmatization.'
      },
      {
        name: 'The Public & Prospective Employers',
        role: 'Information Consumers',
        desc: 'Desiring accurate background context to make informed hiring and civic decisions.'
      },
      {
        name: 'Journalists & Historical Archivists',
        role: 'Guardians of Public Record',
        desc: 'Defending against the weaponization of privacy laws to sanitize public history.'
      },
      {
        name: 'Commercial Search Engine Monopolies',
        role: 'Private Arbiters of Truth',
        desc: 'Corporations thrust into the unelected role of adjudicating global public memory.'
      }
    ],
    frameworks: [
      {
        name: 'John Stuart Mill (Harm Principle & Free Speech)',
        stance: 'Tension between Speech and Liberty',
        desc: 'While Mill champions open access to truth, he also defends individual self-determination where actions cause no direct ongoing harm to others.'
      },
      {
        name: 'Restorative & Retributive Justice',
        stance: 'Pro-Rehabilitation',
        desc: 'Once a legal sentence has been fulfilled, continuing punitive digital consequences constitutes double jeopardy without formal due process.'
      },
      {
        name: 'Kantian Autonomy & Moral Growth',
        stance: 'Respect for Human Development',
        desc: 'Treating a person as forever defined by their past mistakes denies their capacity for moral reason, growth, and renewed agency.'
      },
      {
        name: 'Democratic Accountability Theory',
        stance: 'Pro-Transparency',
        desc: 'Asserts that democratic governance requires an unmanipulated historical archive to verify public claims and maintain institutional integrity.'
      }
    ],
    dialogue: {
      teamA: 'We argue for a contextual "proportionality standard": delisting from name-based queries should be granted for spent non-violent offenses after a designated sunset period, while preserving the raw historical articles in public archives and specialized journalistic databases.',
      teamB: 'Team A provides a balanced compromise. We suggest expanding their policy by removing commercial search engines from the decision-making role and instead establishing independent, publicly accountable judicial ombudsmen to review delisting claims.',
      judgesQ: 'Judge: "What if the person in question is now running for elected public office—should the delisting be instantly revoked?"',
      modelResponse: 'MPEO Model Response: "Yes. Entering the public ballot changes the moral calculation: voters require comprehensive knowledge of a candidate’s civic history. The right to digital privacy diminishes as voluntary public authority increases."'
    }
  },
  {
    id: 'case-4',
    number: 'CASE 04',
    origin: '✦ Senior Olympiad Podium Round',
    category: 'bioethics',
    categoryLabel: '🧬 Bioethics & Genetics',
    title: 'CRISPR Germline Enhancement & Meritocracy',
    tags: ['Therapy vs. Enhancement', 'Intergenerational Consent', 'Genetic Stratification'],
    summary: 'A bioethics council debates approving heritable embryonic gene edits for cognitive longevity and environmental resilience. Wealthy families move to purchase enhancements, threatening to encode social stratification directly into biology.',
    scenario: 'The Global Bioethics Advisory Body convenes to evaluate commercial applications of CRISPR-Prime germline editing. Clinical trials have proven the ability not only to eliminate heritable monogenic disorders like Huntington’s disease and cystic fibrosis, but also to insert allele variants associated with exceptional synaptic plasticity, enhanced working memory, and biological resistance to industrial carcinogens.',
    dilemma: 'The dividing line between curative medical therapy and selective cognitive enhancement has evaporated. If germline edits are made available on private healthcare markets, wealthy families will genetically endow their offspring with cognitive and physiological advantages. Over generations, economic inequality could transform into immutable biological caste divisions, shattering the foundation of democratic egalitarianism and meritocracy.',
    questions: [
      'Can a meaningful ethical boundary be maintained between treating medical disease and enhancing human capacities?',
      'Does modifying the human germline violate the rights of future generations who cannot consent to their altered genetic legacy?',
      'If genetic enhancement cannot be made universally accessible, should it be prohibited entirely, even if doing so prevents cognitive disease?'
    ],
    stakeholders: [
      {
        name: 'Future Unborn Children',
        role: 'Non-Consenting Subjects',
        desc: 'Individuals whose entire biological constitution and open future are determined by parental genetic choices.'
      },
      {
        name: 'Socioeconomically Disadvantaged Populations',
        role: 'Risk of Biological Marginalization',
        desc: 'Communities unable to afford genetic procedures, risking permanent competitive disadvantage.'
      },
      {
        name: 'Parents with Genetic Disorders',
        role: 'Procreative Beneficence',
        desc: 'Seeking the healthiest and most flourishing biological foundation for their descendants.'
      },
      {
        name: 'Democratic Society at Large',
        role: 'Egalitarian Foundation',
        desc: 'Relying on the premise that all humans are born with equal inherent moral standing.'
      }
    ],
    frameworks: [
      {
        name: 'Michael Sandel (The Case Against Perfection)',
        stance: 'Virtue of Giftedness',
        desc: 'Warns that genetic mastery erodes our appreciation for the gifted character of human life and undermines social solidarity.'
      },
      {
        name: 'Jürgen Habermas (Future of Human Nature)',
        stance: 'Intergenerational Autonomy',
        desc: 'Argues that engineered individuals may feel programmed by their parents, destroying the symmetrical equality between generations.'
      },
      {
        name: 'Julian Savulescu (Principle of Procreative Beneficence)',
        stance: 'Moral Duty to Enhance',
        desc: 'Contends that parents have a moral obligation to select the child who is expected to have the best and most flourishing life.'
      },
      {
        name: 'Rawlsian Justice & Genetic Equality',
        stance: 'Universal Access or Prohibition',
        desc: 'Insists that if enhancements exist, they must be publicly subsidized and distributed to the least advantaged first, or banned completely.'
      }
    ],
    dialogue: {
      teamA: 'Our team advocates for a strict international regulatory bifurcation: full authorization for therapeutic germline gene correction for recognized severe pathological disorders, coupled with a total moratorium on cognitive and cosmetic enhancement until global equity guarantees exist.',
      teamB: 'We commend Team A, but note that the concept of "pathology" is socially constructed and continually shifting. For instance, is high baseline genetic susceptibility to dementia a disease or a trait? We suggest replacing arbitrary semantic categories with an open-access public health benefit registry.',
      judgesQ: 'Judge: "If a rival nation approves genetic enhancement for all its citizens, can our country ethically afford to remain unenhanced?"',
      modelResponse: 'MPEO Model Response: "A geopolitical genetic arms race represents a classic collective action trap. National survival cannot justify abandoning fundamental human rights; instead, strong multilateral diplomatic treaties modeled on the Nuclear Non-Proliferation Treaty must be forged."'
    }
  },
  {
    id: 'case-5',
    number: 'CASE 05',
    origin: '✦ Ethics Olympiad Case Pack',
    category: 'ai',
    categoryLabel: '🤖 AI & Social Justice',
    title: 'Predictive Policing and Feedback Loops',
    tags: ['Collective Security vs. Liberty', 'Feedback Bias Loops', 'Epistemic Injustice'],
    summary: 'City authorities deploy machine-learning models to forecast neighborhood crime hotspots. While property theft drops citywide, minority neighborhoods experience compounding surveillance loops and disproportionate stop-and-frisk encounters.',
    scenario: 'The Metropolis Municipal Police Department deploys "PredicStat," an AI system that processes historical arrest logs, emergency dispatch records, and surveillance video feeds to dynamically dispatch patrol cars to designated 500-meter grid squares where crime is predicted to occur within the next four hours.',
    dilemma: 'Over twelve months, violent robbery declines by 18% across the city. However, civil liberties groups uncover that because the model was trained on decades of racially skewed historical arrest data, it consistently sends more police to low-income minority neighborhoods. Increased officer presence inevitably leads to more low-level infractions (e.g. loitering, jaywalking) being recorded in those exact grids, which the algorithm feeds back into its model as confirmation—creating an inescapable, algorithmic feedback loop of discriminatory surveillance.',
    questions: [
      'Does an aggregate drop in citywide crime justify concentrating intensive police surveillance on specific historically disadvantaged neighborhoods?',
      'Can an algorithm ever be truly unbiased if it is trained on empirical data generated by human institutions with historical prejudices?',
      'How should municipalities weigh procedural justice and community trust against predictive statistical efficiency?'
    ],
    stakeholders: [
      {
        name: 'Residents in Predicted High-Risk Grids',
        role: 'Targeted Citizens',
        desc: 'Experiencing continuous police surveillance, loss of privacy, and disproportionate stop encounters.'
      },
      {
        name: 'Citywide Public & Crime Victims',
        role: 'Beneficiaries of Deterrence',
        desc: 'Experiencing measurable decreases in violent property crimes and increased urban safety.'
      },
      {
        name: 'Frontline Police Officers',
        role: 'Algorithmic Implementers',
        desc: 'Directed to patrol high-stress zones based on opaque mathematical probability matrices.'
      },
      {
        name: 'Civic Leaders & Municipal Lawmakers',
        role: 'Democratic Accountability',
        desc: 'Balancing public safety demands with constitutional equal protection guarantees.'
      }
    ],
    frameworks: [
      {
        name: 'Miranda Fricker (Epistemic Injustice)',
        stance: 'Prejudice in Knowledge Systems',
        desc: 'Analyzes how historical biases systematically devalue the credibility and civil standing of marginalized groups within algorithmic knowledge systems.'
      },
      {
        name: 'Act vs. Rule Utilitarianism',
        stance: 'Systemic Harm vs. Immediate Crime Drops',
        desc: 'While Act Utilitarianism celebrates the short-term crime reduction, Rule Utilitarianism recognizes that destroying civic trust and institutional legitimacy creates greater long-term societal harm.'
      },
      {
        name: 'Procedural Justice Theory (Tom Tyler)',
        stance: 'Fairness of Process',
        desc: 'Demonstrates that compliance with the law is driven primarily by whether citizens perceive legal authority to be fair, respectful, and unbiased.'
      },
      {
        name: 'Kantian Rights & Fourth Amendment Duties',
        stance: 'Presumption of Innocence',
        desc: 'Treating individuals as potential criminals based on geographic statistical probabilities violates their fundamental moral right to individual assessment.'
      }
    ],
    dialogue: {
      teamA: 'We argue that PredicStat should be banned for individual dispatch. Instead, predictive analytics should only be used to direct non-punitive municipal resources—such as street lighting, community mental health workers, and youth centers—to underserved areas.',
      teamB: 'Team A’s reallocation of analytics to social support is insightful. However, we ask: what immediate measures protect residents from actual violent crime while long-term social programs develop? We propose coupling independent community oversight boards with strict algorithmic auditing.',
      judgesQ: 'Judge: "If human officers are demonstrably more biased than the algorithm, isn’t flawed AI still the lesser of two evils?"',
      modelResponse: 'MPEO Model Response: "The comparison presents a false dichotomy. Algorithmic bias is uniquely dangerous because it launders human prejudice behind a facade of mathematical objectivity, scaling discrimination at machine speed. True progress requires addressing root biases in both humans and systems."'
    }
  },
  {
    id: 'case-6',
    number: 'CASE 06',
    origin: '✦ Grand Finals Roster',
    category: 'environment',
    categoryLabel: '🌿 Environmental & Geopolitical Ethics',
    title: 'Sovereign Stratospheric Geoengineering',
    tags: ['National Self-Defense vs. Planetary Consent', 'Precautionary Principle', 'Intergenerational Equity'],
    summary: 'A sinking Pacific island nation prepares unilateral stratospheric aerosol injection to halt thermal expansion of oceans after global climate treaties stall, raising profound questions of planetary consent and emergency self-defense.',
    scenario: 'The low-lying Pacific island nation of Tuvalu-Vanuatu Alliance faces total territorial submersion within 15 years due to accelerating polar ice melt. After three consecutive United Nations climate summits fail to achieve binding emission reductions or provide promised adaptation funds, the island coalition partners with private philanthropic funders to deploy high-altitude balloon arrays capable of releasing sulfur dioxide aerosols into the stratosphere to cool regional oceans.',
    dilemma: 'Climate scientists model that while the aerosol injection will successfully halt coral bleaching and sea-level rise in the South Pacific, it could alter the Asian monsoon cycle, threatening the agricultural food supply of 400 million people across South Asia. The island nation asserts its sovereign right to self-defense against existential destruction, arguing that major emitting nations have left them with no other option for survival.',
    questions: [
      'Does a nation facing imminent physical erasure possess the moral right to unilaterally deploy geoengineering without planetary consensus?',
      'How should the international community evaluate the ethics of self-defense when self-preservation creates severe collateral risks for neighboring nations?',
      'Who possesses legitimate moral authority to govern the Earth’s atmosphere?'
    ],
    stakeholders: [
      {
        name: 'Island Nation Citizens',
        role: 'Existential Threat',
        desc: 'Facing cultural and physical extinction as sovereign lands disappear beneath rising oceans.'
      },
      {
        name: 'South Asian Agricultural Populations',
        role: 'Collateral Climate Vulnerability',
        desc: 'Millions of smallholder farmers whose monsoonal rainfall could be disrupted by atmospheric aerosols.'
      },
      {
        name: 'Major Industrialized Emitting Nations',
        role: 'Historical Responsibility',
        desc: 'Countries whose historical greenhouse gas emissions created the existential crisis.'
      },
      {
        name: 'Global Governance Institutions (UN)',
        role: 'Multilateral Stewardship',
        desc: 'Struggling to maintain international law in the absence of enforceable global climate enforcement.'
      }
    ],
    frameworks: [
      {
        name: 'Doctrine of Double Effect (Thomas Aquinas)',
        stance: 'Permissibility of Collateral Harm',
        desc: 'Examines whether causing unintended but foreseen harm to monsoons is permissible when the intended direct aim is national survival.'
      },
      {
        name: 'Cosmopolitanism & Global Justice',
        stance: 'Equal Moral Worth of All Global Citizens',
        desc: 'Argues that national borders cannot justify saving one population at the catastrophic expense of another equally vulnerable population.'
      },
      {
        name: 'Just War & Self-Defense Theory (Walzer)',
        stance: 'Emergency Exemption',
        desc: 'Explores whether unilateral technological intervention satisfies the criteria of proportionality, necessity, and last resort against environmental aggression.'
      },
      {
        name: 'The Precautionary Principle',
        stance: 'Prohibition on Irreversible Risks',
        desc: 'Mandates that in the face of possible catastrophic disruption to global weather systems, lack of full scientific certainty requires restraint.'
      }
    ],
    dialogue: {
      teamA: 'We argue that unilateral geoengineering cannot be morally validated due to catastrophic transboundary risks. However, major emitting nations are ethically culpable for this dilemma and must immediately offer sovereign relocation territory, unconditional climate reparations, and funded managed retreat.',
      teamB: 'We agree that relocation is necessary, but emphasize that forcing indigenous islanders off their ancestral lands constitutes cultural genocide. We propose an emergency UN Atmospheric Governance Mandate that funds localized marine cloud brightening instead of global stratospheric aerosol dispersal.',
      judgesQ: 'Judge: "If international courts cannot enforce emissions cuts, why should the island nation obey international bans on geoengineering?"',
      modelResponse: 'MPEO Model Response: "Moral obligations do not dissolve simply because international enforcement is weak. The duty not to endanger millions of innocent farmers in neighboring countries is an absolute moral duty derived from universal human dignity, independent of diplomatic reciprocity."'
    }
  },
  {
    id: 'case-7',
    number: 'CASE 07',
    origin: '✦ Regional Invitational',
    category: 'bioethics',
    categoryLabel: '🧬 Bioethics & Professional Autonomy',
    title: 'Cognitive Enhancement in High-Stakes Surgery',
    tags: ['Voluntary Choice vs. Subtle Coercion', 'Patient Safety vs. Bodily Integrity', 'Professional Fiduciary Duty'],
    summary: 'Hospitals offer voluntary pharmacological nootropics to surgical teams that reduce fatigue errors by 70%. When malpractice insurance rates drop for medicated surgeons, unmedicated physicians face coercive institutional pressures.',
    scenario: 'A state-of-the-art synthetic nootropic, "SynaptiDura," eliminates the physical and cognitive effects of sleep deprivation for 36 hours without euphoria or addiction. General surgical departments face chronic staffing shortages and lengthy emergency trauma procedures. Hospital trials demonstrate that surgeons taking SynaptiDura achieve a 70% reduction in surgical error rates during overnight shifts.',
    dilemma: 'The hospital network introduces an optional "Enhanced Performance Protocol" with higher pay for medicated on-call surgeons. Soon, malpractice insurers slash premiums for hospitals with 100% medication compliance, and residency program directors begin favoring applicants willing to use the drug. Unenhanced surgeons argue that while officially voluntary, the policy constitutes profound economic coercion, undermines bodily autonomy, and ignores the systemic staffing crises that caused surgical burnout in the first place.',
    questions: [
      'Does a physician’s fiduciary duty of care toward vulnerable patients override their personal right to refuse pharmacological bodily enhancement?',
      'When an optional performance enhancer becomes standard in high-stakes industries, does it remain truly voluntary?',
      'Is medical burnout an individual physiological flaw to be medicated, or an institutional failure requiring labor reform?'
    ],
    stakeholders: [
      {
        name: 'Surgical Patients on the Operating Table',
        role: 'Beneficiaries of Reduced Error',
        desc: 'Vulnerable individuals whose survival depends on the absolute alertness of the surgical team.'
      },
      {
        name: 'Practicing Surgeons & Medical Residents',
        role: 'Workers Facing Coercion',
        desc: 'Professionals pressured to ingest chemical enhancers to maintain career standing and employment.'
      },
      {
        name: 'Healthcare Systems & Insurers',
        role: 'Risk & Cost Optimization',
        desc: 'Incentivized to maximize operating room throughput and minimize multimillion-dollar malpractice payouts.'
      },
      {
        name: 'Future Medical Trainees',
        role: 'Cultural Norm Setting',
        desc: 'Entering a profession where chemical cognitive modification is the de facto prerequisite for entry.'
      }
    ],
    frameworks: [
      {
        name: 'Kantian Autonomy & Bodily Integrity',
        stance: 'Right to Refusal',
        desc: 'Every autonomous agent possesses an inviolable right over their own biological body; conditioning professional livelihood on pharmaceutical ingestion is an attack on moral agency.'
      },
      {
        name: 'Utilitarian Patient-First Maximization',
        stance: 'Net Harm Minimization',
        desc: 'If pharmacological enhancers save hundreds of surgical lives each year with minimal acute side effects, patient utility outweighs surgeon preference.'
      },
      {
        name: 'Virtue Ethics & Professional Phronesis',
        stance: 'Holistic Medical Excellence',
        desc: 'True surgical excellence stems from holistic wisdom, proper rest, and moral balance—not chemically induced endurance that masks physical exhaustion.'
      },
      {
        name: 'Marxist / Structural Labor Critique',
        stance: 'Commodification of Human Labor',
        desc: 'Frames chemical enhancement as a capitalist tool to extract excessive labor from workers rather than hiring adequate staff.'
      }
    ],
    dialogue: {
      teamA: 'We argue that mandatory or financially incentivized chemical enhancement must be strictly prohibited. Hospitals must address patient safety through enforceable mandatory maximum shift lengths, mandatory rest cycles, and expanded surgical hiring.',
      teamB: 'Team A correctly diagnoses systemic labor exploitation. However, during acute disaster emergencies with unavoidable mass casualties, we argue that nootropic use should be ethically permissible as an emergency exception under strict medical supervision.',
      judgesQ: 'Judge: "If airline pilots take medication to prevent fatal plane crashes, why shouldn’t surgeons be required to do the exact same thing?"',
      modelResponse: 'MPEO Model Response: "Aviation regulations enforce strict mandatory rest periods rather than demanding chemical stimulants. Patient safety and worker dignity are not mutually exclusive; the sustainable solution is reforming dangerous shift structures, not medicating exhaustion."'
    }
  },
  {
    id: 'case-8',
    number: 'CASE 08',
    origin: '✦ Senior Olympiad Case Pack',
    category: 'media',
    categoryLabel: '🎭 Media, Truth & Autonomy',
    title: 'AI Parody and Democratic Epistemic Integrity',
    tags: ['Satirical Free Speech vs. Epistemic Truth', 'Democratic Integrity', 'Virtue Ethics & Truthfulness'],
    summary: 'A satirical political candidate releases hyper-realistic synthetic audio of rivals confessing to corporate influence. Though labeled as parody in small text, millions believe the clips, destabilizing the voting public\'s trust in authentic evidence.',
    scenario: 'During a competitive municipal election, third-party candidate and performance artist Julian Cruz launches an AI-powered campaign. Cruz deploys hyper-realistic generative voice synthesis to create podcast episodes where clones of his political opponents frankly admit to taking corporate donations, laughing at voter concerns, and confessing to political hypocrisy. Cruz includes a rapid audio disclaimer at the end stating "The preceding audio is synthetic political satire."',
    dilemma: 'The synthetic audio clips go viral on social media, with millions of voters sharing short segments stripped of the disclaimer. Exit polls indicate that 35% of voters believed the audio was genuine. Cruz defends the project under constitutional protections for political satire and artistic parody, arguing that exaggeration is the classical core of political discourse. The opposing candidates file emergency injunctions, alleging defamation and election interference.',
    questions: [
      'Does the societal value of satirical critique protect the use of hyper-realistic generative deception during elections?',
      'How does the rise of deepfakes threaten the "Epistemic Commons"—the shared factual reality required for democratic deliberation?',
      'Should digital platforms be legally liable for distributing synthetic media that damages public trust?'
    ],
    stakeholders: [
      {
        name: 'The Voting Electorate',
        role: 'Democratic Epistemic Sovereignty',
        desc: 'Citizens needing accurate, authentic information to exercise their democratic mandate.'
      },
      {
        name: 'The Satirical Artist / Candidate (Cruz)',
        role: 'Free Speech & Artistic Critique',
        desc: 'Claiming the historic right of satirists to lampoon powerful political figures.'
      },
      {
        name: 'The Target Politicians',
        role: 'Reputational Rights',
        desc: 'Subject to fabricated recordings that mimic their genuine voice and persona.'
      },
      {
        name: 'Democratic Institutions',
        role: 'Institutional Legitimacy',
        desc: 'Relying on public confidence in electoral fairness and verified evidence.'
      }
    ],
    frameworks: [
      {
        name: 'Virtue Ethics (Aristotle - Epistemic Parrhesia)',
        stance: 'Virtue of Truthfulness',
        desc: 'Examines truthfulness as the golden mean between falsehood and boastfulness. Corrupting the public’s ability to recognize truth is a vice that corrodes civic virtue.'
      },
      {
        name: 'John Stuart Mill (On Liberty)',
        stance: 'Marketplace of Ideas & Satire',
        desc: 'Protects unorthodox political critique, but Mill notes that deliberate fraud and immediate incitement of irreparable error falls outside legitimate debate.'
      },
      {
        name: 'Habermas (Communicative Action Theory)',
        stance: 'Validity Claims in Public Sphere',
        desc: 'Democratic legitimacy requires that speech acts make sincere claims to truth. Synthetic deception destroys the shared background consensus necessary for communication.'
      },
      {
        name: 'Digital Rights & Freedom of Expression',
        stance: 'Protection of Parody',
        desc: 'Warns that banning satirical synthesis creates dangerous censorship precedents that authoritarian regimes will exploit to stifle dissent.'
      }
    ],
    dialogue: {
      teamA: 'Our team proposes a mandatory Cryptographic Provenance Standard: all generative political satire must embed permanent visual and auditory watermarks directly into the media stream, accompanied by civil liability for deceptive dissemination.',
      teamB: 'We support watermarking, but point out that watermarks can be easily cropped or re-encoded by malicious third parties. We propose supplementing technological fixes with public school digital media literacy curriculum and rapid verification hotlines.',
      judgesQ: 'Judge: "If political cartoonists have caricatured politicians for centuries, why is synthetic audio ethically different?"',
      modelResponse: 'MPEO Model Response: "Traditional caricature relies on obvious, self-evident distortion that invites conscious cognitive interpretation. Generative audio hacks our involuntary sensory perception, bypassing rational scrutiny and polluting the epistemic trust required for democracy."'
    }
  }
];

// ==========================================================================
// APPLICATION CONTROLLER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('case-search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const filterBtns = document.querySelectorAll('.case-filter-btn');
  const casesGrid = document.getElementById('cases-grid');
  const casesCountLabel = document.getElementById('cases-count-label');
  const randomCaseBtn = document.getElementById('btn-random-case');

  // Modal elements
  const caseModal = document.getElementById('case-modal');
  const modalCloseBtn = document.getElementById('case-modal-close-btn');
  const modalCloseActionBtn = document.getElementById('modal-close-action-btn');
  const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
  const modalTabPanes = document.querySelectorAll('.modal-tab-pane');
  const modalPrevBtn = document.getElementById('modal-prev-case-btn');
  const modalNextBtn = document.getElementById('modal-next-case-btn');

  let currentCaseIndex = 0;
  let activeFilter = 'all';
  let activeSearch = '';

  // ==========================================================================
  // 1. FILTERING & SEARCH LOGIC
  // ==========================================================================
  function applyFilters() {
    const query = activeSearch.trim().toLowerCase();
    const caseCards = document.querySelectorAll('.case-card');
    let visibleCount = 0;

    caseCards.forEach(card => {
      const cardId = card.getAttribute('data-id');
      const caseData = CASES_DATA.find(c => c.id === cardId);
      if (!caseData) return;

      const matchesFilter = (activeFilter === 'all') || 
        (activeFilter === 'ai' && (caseData.category.includes('ai') || caseData.tags.some(t => t.toLowerCase().includes('algorithm') || t.toLowerCase().includes('ai')))) ||
        (activeFilter === 'bioethics' && caseData.category.includes('bioethics')) ||
        (activeFilter === 'environment' && caseData.category.includes('environment')) ||
        (activeFilter === 'governance' && caseData.category.includes('governance')) ||
        (activeFilter === 'media' && caseData.category.includes('media'));

      const searchableText = `${caseData.title} ${caseData.summary} ${caseData.scenario} ${caseData.dilemma} ${caseData.tags.join(' ')} ${caseData.frameworks.map(f => f.name + ' ' + f.desc).join(' ')}`.toLowerCase();
      const matchesSearch = !query || searchableText.includes(query);

      if (matchesFilter && matchesSearch) {
        card.style.display = 'flex';
        card.style.opacity = '1';
        visibleCount++;
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });

    // Update count label
    if (casesCountLabel) {
      if (visibleCount === CASES_DATA.length) {
        casesCountLabel.textContent = `Showing all ${CASES_DATA.length} tournament cases`;
      } else if (visibleCount === 0) {
        casesCountLabel.innerHTML = `No cases found matching your criteria. <button type="button" id="reset-filter-link" style="background:none; border:none; color:var(--color-gold-hover); text-decoration:underline; cursor:pointer; font-family:inherit;">Reset Filters</button>`;
        const resetBtn = document.getElementById('reset-filter-link');
        if (resetBtn) {
          resetBtn.addEventListener('click', resetFilters);
        }
      } else {
        casesCountLabel.textContent = `Showing ${visibleCount} of ${CASES_DATA.length} cases`;
      }
    }
  }

  function resetFilters() {
    activeFilter = 'all';
    activeSearch = '';
    if (searchInput) searchInput.value = '';
    if (searchClearBtn) searchClearBtn.style.display = 'none';
    filterBtns.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
      b.setAttribute('aria-selected', b.getAttribute('data-filter') === 'all');
    });
    applyFilters();
  }

  // Filter Button Clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeFilter = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearch = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = activeSearch ? 'block' : 'none';
      }
      applyFilters();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      activeSearch = '';
      searchClearBtn.style.display = 'none';
      searchInput.focus();
      applyFilters();
    });
  }

  // Random Case Button
  if (randomCaseBtn) {
    randomCaseBtn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * CASES_DATA.length);
      openCaseModal(randomIndex);
    });
  }

  // ==========================================================================
  // 2. MODAL & CASE DOSSIER INSPECTOR
  // ==========================================================================
  function populateModal(caseIndex) {
    const caseData = CASES_DATA[caseIndex];
    if (!caseData) return;

    currentCaseIndex = caseIndex;

    // Header info
    document.getElementById('modal-case-code').textContent = caseData.number;
    document.getElementById('modal-case-origin').textContent = caseData.origin;
    document.getElementById('modal-case-category').textContent = caseData.categoryLabel;
    document.getElementById('modal-case-title').textContent = caseData.title;

    // Tab 1: Scenario
    document.getElementById('modal-scenario-text').textContent = caseData.scenario;
    document.getElementById('modal-dilemma-details').textContent = caseData.dilemma;

    const questionsList = document.getElementById('modal-questions-list');
    questionsList.innerHTML = '';
    caseData.questions.forEach(q => {
      const li = document.createElement('li');
      li.textContent = q;
      questionsList.appendChild(li);
    });

    // Tab 2: Stakeholders
    const stakeholdersGrid = document.getElementById('modal-stakeholders-grid');
    stakeholdersGrid.innerHTML = '';
    caseData.stakeholders.forEach(s => {
      const card = document.createElement('div');
      card.className = 'stakeholder-card';
      card.innerHTML = `
        <div class="stakeholder-card-role">${s.role}</div>
        <h4 class="stakeholder-card-name">${s.name}</h4>
        <p class="stakeholder-card-desc">${s.desc}</p>
      `;
      stakeholdersGrid.appendChild(card);
    });

    // Tab 3: Frameworks
    const frameworksGrid = document.getElementById('modal-frameworks-grid');
    frameworksGrid.innerHTML = '';
    caseData.frameworks.forEach(f => {
      const card = document.createElement('div');
      card.className = 'framework-card';
      card.innerHTML = `
        <div class="framework-stance-badge">${f.stance}</div>
        <h4 class="framework-name">${f.name}</h4>
        <p class="framework-desc">${f.desc}</p>
      `;
      frameworksGrid.appendChild(card);
    });

    // Tab 4: Socratic Dialogue
    const dialogueContent = document.getElementById('modal-dialogue-content');
    dialogueContent.innerHTML = `
      <div class="socratic-exchange-box team-a">
        <div class="exchange-header">
          <span class="exchange-speaker-pill gold">✦ Team A Presentation (5 Mins)</span>
          <span class="exchange-role-tag">Initial Ethical Framework</span>
        </div>
        <p class="exchange-body">"${caseData.dialogue.teamA}"</p>
      </div>

      <div class="socratic-exchange-box team-b">
        <div class="exchange-header">
          <span class="exchange-speaker-pill blue">✦ Team B Response (3 Mins)</span>
          <span class="exchange-role-tag">Constructive Collaborative Critique</span>
        </div>
        <p class="exchange-body">"${caseData.dialogue.teamB}"</p>
      </div>

      <div class="socratic-exchange-box judges">
        <div class="exchange-header">
          <span class="exchange-speaker-pill purple">⚖️ Judge Socratic Probe & MPEO Synthesis</span>
          <span class="exchange-role-tag">Depth & Nuance Evaluation</span>
        </div>
        <p class="exchange-probe-question">${caseData.dialogue.judgesQ}</p>
        <p class="exchange-model-answer">${caseData.dialogue.modelResponse}</p>
      </div>
    `;

    // Indicator
    document.getElementById('modal-case-indicator').textContent = `${caseIndex + 1} of ${CASES_DATA.length}`;

    // Update URL hash without jumping page
    history.replaceState(null, null, `#${caseData.id}`);
  }

  function openCaseModal(caseIndex) {
    populateModal(caseIndex);
    if (caseModal) {
      caseModal.classList.add('active');
      caseModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  }

  function closeCaseModal() {
    if (caseModal) {
      caseModal.classList.remove('active');
      caseModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      history.replaceState(null, null, 'cases.html');
    }
  }

  // Attach card inspect button handlers
  document.querySelectorAll('.btn-inspect-case').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('data-case-target');
      const idx = CASES_DATA.findIndex(c => c.id === targetId);
      if (idx !== -1) {
        openCaseModal(idx);
      }
    });
  });

  // Modal navigation (Prev / Next)
  if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', () => {
      let newIdx = currentCaseIndex - 1;
      if (newIdx < 0) newIdx = CASES_DATA.length - 1;
      populateModal(newIdx);
    });
  }

  if (modalNextBtn) {
    modalNextBtn.addEventListener('click', () => {
      let newIdx = (currentCaseIndex + 1) % CASES_DATA.length;
      populateModal(newIdx);
    });
  }

  // Modal close events
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCaseModal);
  if (modalCloseActionBtn) modalCloseActionBtn.addEventListener('click', closeCaseModal);

  // Close on backdrop click
  if (caseModal) {
    caseModal.addEventListener('click', (e) => {
      if (e.target === caseModal) {
        closeCaseModal();
      }
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!caseModal || !caseModal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeCaseModal();
    } else if (e.key === 'ArrowRight') {
      let newIdx = (currentCaseIndex + 1) % CASES_DATA.length;
      populateModal(newIdx);
    } else if (e.key === 'ArrowLeft') {
      let newIdx = currentCaseIndex - 1;
      if (newIdx < 0) newIdx = CASES_DATA.length - 1;
      populateModal(newIdx);
    }
  });

  // Tab switching inside modal
  modalTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      modalTabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      modalTabPanes.forEach(pane => pane.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const targetPane = document.getElementById(`tab-${targetTab}`);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // ==========================================================================
  // 3. DEEP LINKING SUPPORT (HASH IN URL)
  // ==========================================================================
  if (window.location.hash) {
    const hashId = window.location.hash.replace('#', '');
    const idx = CASES_DATA.findIndex(c => c.id === hashId);
    if (idx !== -1) {
      openCaseModal(idx);
    }
  }

  // ==========================================================================
  // 4. MOBILE MENU TOGGLE
  // ==========================================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.textContent = isOpen ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
  }
});
