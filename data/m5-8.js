window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m5",
 "order": 5,
 "code": "Data",
 "title": "Data Governance and Privacy for AI",
 "subtitle": "Quality, provenance, lawful use and protection of the data that AI learns from and acts on",
 "outcomes": [
  "Govern data quality, provenance and lineage for AI datasets",
  "Apply lawful basis, transparency and individual rights to AI processing",
  "Select minimisation and privacy-enhancing techniques proportionate to the risk",
  "Govern training data rights, retrieval permissions, prompt logs and cross-border flows for generative AI"
 ],
 "lessons": [
  {
   "id": "m5-l1",
   "title": "Data Governance Foundations for AI",
   "subtitle": "Quality, provenance, lineage and stewardship of the data AI learns from",
   "minutes": 30,
   "objectives": [
    "Apply data quality dimensions to AI training, test and operational data",
    "Record data provenance and lineage so AI decisions can be traced",
    "Assign data ownership and stewardship roles for AI datasets"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every AI system inherits the strengths and flaws of its data. Data governance for AI extends traditional data management in three ways: it asks whether data is **fit for a specific model purpose** (not just accurate in general), whether the organisation has the **rights** to use it for AI, and whether its **history** can be traced from source to model to decision."
    },
    {
     "type": "table",
     "head": [
      "Dimension",
      "Question for AI",
      "Example failure"
     ],
     "rows": [
      [
       "Accuracy",
       "Are values and labels correct?",
       "Mislabelled X-rays teach a model wrong patterns"
      ],
      [
       "Completeness",
       "Are key fields and groups present?",
       "Missing income data for informal workers"
      ],
      [
       "Representativeness",
       "Does the data reflect the population the model will serve?",
       "Training only on urban customers"
      ],
      [
       "Timeliness",
       "Is the data recent enough for current conditions?",
       "Pre-pandemic travel data used for 2026 demand"
      ],
      [
       "Consistency",
       "Are definitions stable across sources and time?",
       "'Active customer' defined differently by two systems"
      ],
      [
       "Lawfulness and rights",
       "Was it collected lawfully, and may it be used for this purpose?",
       "Scraped data with prohibitive licence terms"
      ]
     ],
     "title": "Data quality dimensions for AI"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "**Provenance** is where data came from and under what conditions it was collected, including consent and licence terms. **Lineage** is the path data takes through transformations, from source systems to training sets, features, models and outputs. Together they let you answer the auditor's question: 'Which data produced this decision, and were you allowed to use it?'",
     "title": "Provenance and lineage"
    },
    {
     "type": "flow",
     "title": "Data lineage for a credit model",
     "items": [
      {
       "label": "Sources",
       "text": "Wallet transactions, KYC records, bureau data"
      },
      {
       "label": "Ingestion",
       "text": "Extracted under data-sharing agreement"
      },
      {
       "label": "Preparation",
       "text": "Cleaned, joined, features engineered"
      },
      {
       "label": "Training set",
       "text": "Versioned snapshot with documentation"
      },
      {
       "label": "Model",
       "text": "Trained and validated version 3.2"
      },
      {
       "label": "Decision",
       "text": "Score used in loan approval"
      }
     ]
    },
    {
     "type": "framework",
     "title": "Data roles for AI",
     "items": [
      {
       "label": "DO",
       "title": "Data owner",
       "text": "Senior business person accountable for a data domain, its use and access decisions."
      },
      {
       "label": "DS",
       "title": "Data steward",
       "text": "Maintains definitions, quality rules and documentation day to day."
      },
      {
       "label": "DC",
       "title": "Data custodian",
       "text": "Technical team operating storage, security and backups."
      },
      {
       "label": "PO",
       "title": "Privacy officer",
       "text": "Advises on lawful basis, notices, rights and impact assessments."
      },
      {
       "label": "MO",
       "title": "Model owner",
       "text": "Accountable for how data is used in a specific model and its outcomes."
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Write clear labelling guidelines with examples, including edge cases.",
      "Measure agreement between labellers and resolve disagreements.",
      "Check whether labeller backgrounds or instructions introduce bias.",
      "Protect annotators from harmful content and pay them fairly, including through outsourcing vendors.",
      "Record who labelled what, when and under which guideline version."
     ],
     "title": "Labelling and annotation governance"
    },
    {
     "type": "template",
     "title": "Dataset provenance record",
     "purpose": "Document a dataset used for AI so its origin, rights and limits are clear.",
     "columns": [
      "Dataset and version",
      "Source and collection method",
      "Legal basis or licence",
      "Personal data included",
      "Known gaps and biases",
      "Permitted uses",
      "Owner"
     ],
     "example": [
      [
       "Wallet transactions 2023-2025 v4",
       "Internal payment platform, automated",
       "Contract with customers; privacy notice updated 2024",
       "Yes: wallet ID, amounts, merchant category",
       "Few records for users under 21; rural agents under-represented",
       "Fraud and credit risk models only",
       "Head of Data, Payments"
      ]
     ],
     "rows": 6
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Keep immutable, versioned snapshots of training and test datasets and link each model version to the exact data versions it used. Without this, you cannot reproduce results, investigate complaints or honour a request to retrain without a person's data.",
     "title": "Version everything"
    },
    {
     "type": "scenario",
     "title": "A dataset with no history",
     "situation": "A data scientist finds a well-labelled dataset of customer complaints on a shared drive and wants to use it to train a classifier. Nobody knows where it came from or whether customers were told. What should happen?",
     "options": [
      {
       "text": "Use it, because it is already inside the company.",
       "feedback": "Internal location says nothing about lawful basis, consent or quality. Unknown provenance is a risk.",
       "best": false
      },
      {
       "text": "Quarantine it from model training until provenance, legal basis and quality are established, and record the outcome.",
       "feedback": "Best. Unknown provenance means unknown rights and quality. Establishing them first protects customers and the model.",
       "best": true
      },
      {
       "text": "Delete it immediately.",
       "feedback": "Deletion may destroy records needed for other purposes or legal holds. Investigate first.",
       "best": false
      },
      {
       "text": "Use it but do not document that you did.",
       "feedback": "Concealment compounds the risk and breaks traceability.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "For one AI system you know, could you trace a single decision back to the exact data version and source that influenced it? Where would the trail break?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Data provenance",
       "def": "The origin of data and the conditions, such as consent or licence terms, under which it was collected."
      },
      {
       "term": "Data lineage",
       "def": "The record of how data moves and is transformed from source systems to models and decisions."
      },
      {
       "term": "Representativeness",
       "def": "The degree to which data reflects the population and conditions a model will serve."
      },
      {
       "term": "Data steward",
       "def": "The person responsible for day-to-day quality, definitions and documentation of a data domain."
      },
      {
       "term": "Data owner",
       "def": "The senior person accountable for a data domain and decisions about its use."
      },
      {
       "term": "Annotation",
       "def": "Adding labels or tags to data so it can be used for supervised learning."
      },
      {
       "term": "Inter-annotator agreement",
       "def": "A measure of how consistently different labellers label the same items."
      },
      {
       "term": "Dataset versioning",
       "def": "Keeping identifiable, unchangeable snapshots of datasets linked to the models trained on them."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which data quality dimension asks whether data reflects the people a model will serve?",
       "options": [
        "Representativeness",
        "Timeliness",
        "Consistency",
        "Encryption"
       ],
       "answer": 0,
       "explain": "Representativeness checks fit between data and the target population."
      },
      {
       "q": "What does data lineage let you do?",
       "options": [
        "Trace how data moved from sources to models and decisions",
        "Encrypt data at rest",
        "Delete data automatically",
        "Increase model accuracy directly"
       ],
       "answer": 0,
       "explain": "Lineage records the path of data, which supports audit and investigation."
      },
      {
       "q": "Who is accountable for decisions about the use of a data domain?",
       "options": [
        "Data custodian",
        "Annotator",
        "Data owner",
        "Cloud provider"
       ],
       "answer": 2,
       "explain": "The owner is accountable; stewards and custodians support."
      },
      {
       "q": "Why link each model version to exact dataset versions?",
       "options": [
        "To reduce storage costs",
        "To speed up inference",
        "To avoid documentation",
        "To reproduce results, investigate complaints and retrain without specific data"
       ],
       "answer": 3,
       "explain": "Versioned links enable reproducibility and response to rights requests."
      },
      {
       "q": "A labelled dataset of unknown origin should be:",
       "options": [
        "Used immediately",
        "Quarantined from training until provenance and rights are established",
        "Shared publicly",
        "Merged into all datasets"
       ],
       "answer": 1,
       "explain": "Unknown provenance means unknown legality and quality."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l2",
   "title": "Privacy Law Principles Applied to AI",
   "subtitle": "Lawful basis, notice, rights and automated decisions in AI systems",
   "minutes": 35,
   "objectives": [
    "Identify an appropriate lawful basis for AI processing in different contexts",
    "Write transparent notices for AI uses of personal data",
    "Handle individual rights, including rights about automated decisions, in AI systems",
    "Apply extra care to sensitive data and children's data"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Data protection laws were not written for AI, but they apply to it with full force. The EU's GDPR, India's DPDP Act, Sri Lanka's PDPA and the newer laws across South Asia share a common core: process personal data lawfully, transparently and for specified purposes; minimise it; keep it accurate and secure; and respect people's rights. AI stresses each principle because models are hungry for data, reuse it in new ways and can infer things people never disclosed. As with all regulatory content in this track, this is general education, not legal advice."
    },
    {
     "type": "table",
     "head": [
      "Basis (varies by law)",
      "Fits when",
      "Watch out for"
     ],
     "rows": [
      [
       "Consent",
       "People freely choose an optional AI feature, such as voice biometrics",
       "Must be specific, informed and withdrawable; hard to honour once data is in a trained model"
      ],
      [
       "Contract",
       "AI is genuinely needed to deliver the service requested",
       "Training a general model is rarely 'necessary' for one contract"
      ],
      [
       "Legal obligation",
       "Law requires the processing, such as anti-money-laundering screening",
       "Limited to what the law requires"
      ],
      [
       "Legitimate interests or legitimate uses",
       "Reasonable, expected uses balanced against individuals' rights, such as fraud prevention",
       "Not all laws offer it in the same form; requires a documented balancing test"
      ],
      [
       "Public task",
       "Public bodies performing official functions",
       "Needs a clear legal mandate"
      ]
     ],
     "title": "Common lawful bases and how they fit AI"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "India's DPDP Act relies mainly on consent plus a defined list of 'legitimate uses', rather than the broader legitimate-interests basis of the GDPR. Other South Asian laws differ again. Map the lawful basis per jurisdiction rather than copying a European analysis.",
     "title": "Laws differ in important ways"
    },
    {
     "type": "keypoints",
     "items": [
      "That AI or automated processing is used, and for what purpose.",
      "What personal data is used, including data inferred about the person.",
      "Whether the data is used to train or improve models, and how to object where possible.",
      "Whether decisions are made automatically and their significance.",
      "How to obtain human review, correct data or complain.",
      "Who receives the data, including AI vendors, and where it is processed."
     ],
     "title": "What an AI privacy notice should explain"
    },
    {
     "type": "framework",
     "title": "Individual rights in AI systems",
     "items": [
      {
       "label": "RT1",
       "title": "Access",
       "text": "People can learn what data is held and, under some laws, meaningful information about automated decision logic."
      },
      {
       "label": "RT2",
       "title": "Correction",
       "text": "Wrong input data must be corrected, and decisions based on it reviewed."
      },
      {
       "label": "RT3",
       "title": "Erasure",
       "text": "Data may need to be deleted from datasets; models may need retraining or other measures where deletion from the model is required."
      },
      {
       "label": "RT4",
       "title": "Objection and opt-out",
       "text": "People may object to some processing, such as profiling for marketing."
      },
      {
       "label": "RT5",
       "title": "Automated decisions",
       "text": "Some laws, such as the GDPR, restrict solely automated decisions with legal or similarly significant effects and require safeguards such as human intervention."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "Techniques that aim to remove the influence of specific training data from a trained model without full retraining. They are still maturing. In practice, organisations honour erasure by deleting data from datasets, excluding it from future training cycles and, where justified by risk, retraining on schedule.",
     "title": "Machine unlearning"
    },
    {
     "type": "compare",
     "title": "Sensitive data and children",
     "columns": [
      {
       "title": "Sensitive (special category) data",
       "items": [
        "Health, biometrics, religion, ethnicity, sexual life, political views and similar",
        "Stricter conditions for processing",
        "AI can infer sensitive traits from ordinary data, which may itself be sensitive processing"
       ]
      },
      {
       "title": "Children's data",
       "items": [
        "Many laws require parental consent and prohibit tracking or targeted advertising to children",
        "India's DPDP Act sets specific duties for children's data",
        "Design AI products used by students with these limits from the start"
       ]
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A voice-biometrics rollout",
     "situation": "A mobile financial services provider in Bangladesh wants to replace PIN reset by voice biometrics for all customers. The vendor says consent is unnecessary because it improves security. What is the BEST governance position?",
     "options": [
      {
       "text": "Proceed for all customers, because security is a legitimate goal.",
       "feedback": "Biometric data is sensitive. A security goal does not automatically justify mandatory processing without an appropriate basis and safeguards.",
       "best": false
      },
      {
       "text": "Offer voice biometrics as an optional method with clear notice and consent, keep a non-biometric alternative, assess the processing in a DPIA and check accuracy across accents and age groups.",
       "feedback": "Best. It respects choice, applies extra care to sensitive data and tests for performance gaps that could lock out some customers.",
       "best": true
      },
      {
       "text": "Use voice biometrics but delete recordings after one day.",
       "feedback": "Short retention helps but does not resolve basis, choice or fairness issues.",
       "best": false
      },
      {
       "text": "Cancel the project because biometrics are illegal.",
       "feedback": "Biometrics are not generally illegal; they require stronger justification and safeguards.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Lawful basis register for AI processing",
     "purpose": "Record the lawful basis for each AI processing purpose in each jurisdiction.",
     "columns": [
      "AI system and purpose",
      "Personal data used",
      "Jurisdiction",
      "Lawful basis",
      "Notice location",
      "Rights handling",
      "Reviewed by"
     ],
     "example": [
      [
       "Fraud model: transaction monitoring",
       "Transactions, device data",
       "Bangladesh; India",
       "Legal obligation and fraud-prevention purposes per local law",
       "Privacy notice section 4",
       "Human review on request; correction process",
       "Privacy Officer, March 2026"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Read your organisation's privacy notice. Would a customer understand from it that AI is used, what data it uses and how to challenge a decision? Rewrite one sentence to make it clearer."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Lawful basis",
       "def": "The legal ground that permits processing of personal data, such as consent or legal obligation."
      },
      {
       "term": "Legitimate interests",
       "def": "Under the GDPR and similar laws, a lawful basis requiring a documented balance between the organisation's interests and individuals' rights."
      },
      {
       "term": "Special category data",
       "def": "Sensitive personal data, such as health, biometric or religious data, that receives extra legal protection."
      },
      {
       "term": "Solely automated decision",
       "def": "A decision made without meaningful human involvement, which some laws restrict where it has significant effects."
      },
      {
       "term": "Machine unlearning",
       "def": "Techniques for removing the influence of specific data from a trained model."
      },
      {
       "term": "Privacy notice",
       "def": "Information given to people about how their personal data is processed and their rights."
      },
      {
       "term": "Data principal",
       "def": "Under India's DPDP Act, the individual to whom personal data relates."
      },
      {
       "term": "Inferred data",
       "def": "New personal information derived by analysis or AI, such as predicted income or health status."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Why is consent hard to rely on for training data?",
       "options": [
        "Withdrawal is difficult to honour once data has shaped a trained model",
        "Consent is never valid for AI",
        "Consent cannot be recorded",
        "Consent applies only to children"
       ],
       "answer": 0,
       "explain": "Consent must be withdrawable, which creates practical challenges after training."
      },
      {
       "q": "Which statement about India's DPDP Act is most accurate?",
       "options": [
        "It copies the GDPR's legitimate-interests basis exactly",
        "It does not apply to companies",
        "It relies mainly on consent and a defined list of legitimate uses",
        "It has no rules on children's data"
       ],
       "answer": 2,
       "explain": "The DPDP Act has its own structure of consent and specified legitimate uses, including duties for children's data."
      },
      {
       "q": "An AI system infers customers' religion from shopping patterns. This is:",
       "options": [
        "Not personal data because it was inferred",
        "Always lawful if the model is accurate",
        "Processing that may itself count as sensitive data processing",
        "Exempt because it is statistical"
       ],
       "answer": 2,
       "explain": "Inferences about sensitive traits can be sensitive personal data."
      },
      {
       "q": "How do organisations usually honour erasure when data was used to train a model?",
       "options": [
        "Ignore the request because models are exempt",
        "Delete the entire model immediately in every case",
        "Ask the person to pay for retraining",
        "Delete it from datasets, exclude it from future training and retrain where justified"
       ],
       "answer": 3,
       "explain": "Practical measures combine dataset deletion, exclusion and proportionate retraining."
      },
      {
       "q": "Which belongs in an AI privacy notice?",
       "options": [
        "The model's source code",
        "Whether data is used to train models and how to object where possible",
        "Employees' salaries",
        "The vendor's share price"
       ],
       "answer": 1,
       "explain": "People need to know about training use and their options."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l3",
   "title": "Privacy-Enhancing Techniques and Data Minimisation",
   "subtitle": "Using less data, and protecting the data you must use",
   "minutes": 30,
   "objectives": [
    "Distinguish anonymisation, pseudonymisation and de-identification",
    "Explain how privacy-enhancing technologies reduce risk in AI",
    "Choose proportionate minimisation and protection techniques for a use case"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The best way to protect personal data in AI is not to use it. The second best is to use less of it, in a less identifiable form, with strong protection. **Privacy-enhancing technologies (PETs)** make this practical. None is a silver bullet; each reduces certain risks at a cost in accuracy, complexity or performance, so governance must choose deliberately."
    },
    {
     "type": "compare",
     "title": "Anonymised, pseudonymised and de-identified data",
     "columns": [
      {
       "title": "Anonymised",
       "items": [
        "Individuals can no longer be identified by any means reasonably likely to be used",
        "Usually falls outside data protection law",
        "Very hard to achieve with rich behavioural data"
       ]
      },
      {
       "title": "Pseudonymised",
       "items": [
        "Direct identifiers replaced with codes; a key exists elsewhere",
        "Still personal data under most laws",
        "Reduces risk and supports security"
       ]
      },
      {
       "title": "De-identified (generic term)",
       "items": [
        "Some identifiers removed or masked",
        "Legal status depends on residual risk",
        "Must be tested for re-identification"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Technique",
      "How it helps",
      "Trade-off"
     ],
     "rows": [
      [
       "Masking and redaction",
       "Removes names, IDs and numbers before data reaches a model or prompt",
       "May miss context-specific identifiers"
      ],
      [
       "Aggregation and generalisation",
       "Replaces precise values with ranges or groups",
       "Loses detail that may matter for accuracy"
      ],
      [
       "Differential privacy",
       "Adds calibrated noise so results reveal little about any one person",
       "Reduced accuracy, especially for small groups"
      ],
      [
       "Federated learning",
       "Trains across devices or sites without centralising raw data",
       "Complex; model updates can still leak information"
      ],
      [
       "Synthetic data",
       "Generates artificial records that mimic statistical patterns",
       "May leak real records if poorly made; may miss rare cases"
      ],
      [
       "Secure enclaves and confidential computing",
       "Processes data in protected hardware environments",
       "Depends on hardware trust; added cost"
      ],
      [
       "Homomorphic encryption and secure multi-party computation",
       "Computes on encrypted or split data",
       "Slow and specialised for many AI tasks"
      ]
     ],
     "title": "Privacy-enhancing technologies for AI"
    },
    {
     "type": "formula",
     "title": "Measures of privacy protection",
     "items": [
      {
       "name": "k-anonymity",
       "expr": "Each record shares its quasi-identifiers with at least k − 1 other records",
       "meaning": "Larger k makes it harder to single out a person; it does not stop inference about sensitive attributes on its own."
      },
      {
       "name": "Differential privacy (epsilon)",
       "expr": "P[M(D) ∈ S] ≤ e^ε × P[M(D′) ∈ S]",
       "meaning": "For datasets D and D′ differing by one person, outputs are nearly as likely; smaller ε means stronger privacy and more noise."
      },
      {
       "name": "Re-identification risk (simple)",
       "expr": "Risk ≈ 1 / size of smallest matching group",
       "meaning": "If only 3 people share a combination of age, area and job, each has about a one-in-three risk of being identified."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "Studies of mobile and card data have shown that a handful of time-and-place points can uniquely identify most people in large datasets. A telecom's 'anonymised' location dataset for a city transport model may therefore still be personal data unless it is aggregated, for example to trips between zones per hour with small counts suppressed.",
     "title": "Four data points are enough"
    },
    {
     "type": "steps",
     "title": "Minimisation by design for an AI project",
     "items": [
      {
       "title": "Define the purpose precisely",
       "text": "A precise purpose makes it easier to decide what data is truly needed."
      },
      {
       "title": "Start with the least data",
       "text": "Begin with aggregated or de-identified data and add detail only when testing shows it is needed."
      },
      {
       "title": "Drop direct identifiers early",
       "text": "Remove or pseudonymise identifiers at ingestion and keep the key separately."
      },
      {
       "title": "Test feature necessity",
       "text": "Remove features that add little accuracy, especially sensitive or proxy features."
      },
      {
       "title": "Limit retention",
       "text": "Delete raw data, prompts and intermediate files on a schedule."
      },
      {
       "title": "Review re-identification risk",
       "text": "Test released datasets and model outputs for re-identification and memorisation."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Fewer features means fewer proxies for protected traits, a smaller attack surface and less damage if a breach occurs. Minimisation is often good engineering, not only compliance.",
     "title": "Minimisation can improve fairness and security"
    },
    {
     "type": "scenario",
     "title": "Sharing data with a research partner",
     "situation": "A Dhaka hospital wants to share three years of patient records with a university to develop a diabetes-risk model. What is the MOST appropriate approach?",
     "options": [
      {
       "text": "Share the full records under a confidentiality agreement.",
       "feedback": "Confidentiality helps but full identifiable records exceed what is needed and increase risk.",
       "best": false
      },
      {
       "text": "Share pseudonymised, minimised fields needed for the research, under an agreement with security and use limits, after ethics and privacy review, and test re-identification risk.",
       "feedback": "Best. It combines minimisation, pseudonymisation, contractual and ethical controls, and a re-identification check.",
       "best": true
      },
      {
       "text": "Remove names only and publish the dataset openly to help other researchers.",
       "feedback": "Removing names rarely anonymises health records, and open publication multiplies risk.",
       "best": false
      },
      {
       "text": "Refuse, because health data can never be used for research.",
       "feedback": "Health research is often possible with proper basis, ethics approval and safeguards.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "PET selection checklist",
     "items": [
      "Purpose and minimum data defined",
      "Direct identifiers removed or pseudonymised at ingestion",
      "Re-identification risk assessed for any shared or released data",
      "Appropriate PET chosen and accuracy impact measured",
      "Small groups protected from disproportionate accuracy loss",
      "Keys and mapping tables stored separately with restricted access",
      "Retention limits set for raw data, prompts and logs",
      "Decisions and trade-offs documented"
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which AI project in your organisation uses more personal data than it needs? What is one field you could remove or generalise without losing much value?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Anonymisation",
       "def": "Processing data so individuals can no longer be identified by any reasonably likely means."
      },
      {
       "term": "Pseudonymisation",
       "def": "Replacing direct identifiers with codes so data cannot be linked to a person without separately held information."
      },
      {
       "term": "Privacy-enhancing technology (PET)",
       "def": "A technique that reduces privacy risk while allowing data to be used, such as differential privacy or federated learning."
      },
      {
       "term": "Differential privacy",
       "def": "A mathematical framework that adds calibrated noise so outputs reveal little about any individual."
      },
      {
       "term": "Federated learning",
       "def": "Training a model across multiple devices or sites without centralising the raw data."
      },
      {
       "term": "Synthetic data",
       "def": "Artificially generated data that mimics the statistical properties of real data."
      },
      {
       "term": "k-anonymity",
       "def": "A property where each record is indistinguishable from at least k − 1 others on quasi-identifiers."
      },
      {
       "term": "Quasi-identifier",
       "def": "An attribute, such as age, area or job, that is not identifying alone but can identify people in combination."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Pseudonymised data is usually:",
       "options": [
        "Still personal data under most laws",
        "Outside all data protection law",
        "Equivalent to public data",
        "The same as encrypted backups"
       ],
       "answer": 0,
       "explain": "A key exists that allows re-linking, so the data remains personal."
      },
      {
       "q": "In differential privacy, a smaller epsilon means:",
       "options": [
        "Weaker privacy",
        "No effect on accuracy",
        "Stronger privacy and more noise",
        "Faster training only"
       ],
       "answer": 2,
       "explain": "Epsilon bounds how much one person's data can change outputs; smaller is more private."
      },
      {
       "q": "Which technique trains across hospitals without pooling raw records?",
       "options": [
        "Masking",
        "k-anonymity",
        "Data poisoning",
        "Federated learning"
       ],
       "answer": 3,
       "explain": "Federated learning keeps data local and shares model updates."
      },
      {
       "q": "Only two people in a dataset share a combination of age, district and job. Each has roughly what re-identification risk?",
       "options": [
        "About one in a million",
        "About one in two",
        "Zero",
        "About one in twenty"
       ],
       "answer": 1,
       "explain": "With a matching group of two, the simple risk is about 1/2."
      },
      {
       "q": "Why can minimisation improve fairness?",
       "options": [
        "It always increases accuracy",
        "Fewer features means fewer proxies for protected traits",
        "It removes the need to test",
        "It hides results from regulators"
       ],
       "answer": 1,
       "explain": "Removing unnecessary features can reduce proxy discrimination."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l4",
   "title": "Data for Generative AI: Training, Retrieval, Rights and Retention",
   "subtitle": "Copyright, scraping, retrieval permissions, prompt logs and cross-border flows",
   "minutes": 35,
   "objectives": [
    "Assess rights and risks in data used to train or fine-tune generative models",
    "Govern retrieval-augmented generation so assistants only reveal what users may see",
    "Set retention and vendor data-use rules for prompts and outputs",
    "Address cross-border transfer and localisation requirements"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Generative AI raises data questions at every turn. What was the model trained on, and did anyone have the right to use it? What happens to the prompts staff type? When an assistant searches company documents, does it respect who is allowed to see what? Where are the data and logs stored? Governance must answer these for every generative-AI deployment, whether the model is built in-house or accessed through a vendor."
    },
    {
     "type": "table",
     "head": [
      "Issue",
      "State of play",
      "Governance response"
     ],
     "rows": [
      [
       "Training on copyrighted works",
       "Contested in courts in several countries; some decisions favour fair use or exceptions, others find infringement in specific circumstances",
       "Know your model provider's position; prefer providers offering documentation and IP indemnities"
      ],
      [
       "Text and data mining opt-outs",
       "EU law lets rights holders reserve rights; general-purpose model providers must respect reservations and summarise training content",
       "Check providers' copyright policies and summaries"
      ],
      [
       "Ownership of outputs",
       "Many jurisdictions require human authorship for copyright; purely machine-generated output may not be protected",
       "Do not assume exclusive rights in AI-generated assets; keep human creative input records"
      ],
      [
       "Outputs resembling protected works",
       "Risk of reproducing logos, characters, code or text",
       "Output filters, human review for public-facing content, licence checks for code"
      ]
     ],
     "title": "Intellectual property and training data (as of 2026)"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Data visible on the internet is not automatically free to use. Website terms, copyright, database rights and data protection law may all apply, and several data protection authorities have warned that scraping personal data for AI training needs a lawful basis and safeguards.",
     "title": "Scraping is not a free pass"
    },
    {
     "type": "layers",
     "title": "Retrieval-augmented generation: where data controls sit (top layer first)",
     "items": [
      {
       "label": "Answer",
       "parts": [
        "Citations to source documents",
        "Output filters for sensitive data"
       ]
      },
      {
       "label": "Retrieval",
       "parts": [
        "Search limited to documents the user is permitted to see",
        "Permission check at query time"
       ]
      },
      {
       "label": "Index",
       "parts": [
        "Only approved sources ingested",
        "Labels for confidentiality and personal data"
       ]
      },
      {
       "label": "Sources",
       "parts": [
        "Document owners approve inclusion",
        "Stale and duplicate documents removed"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A company connected an internal assistant to its entire file-sharing system. Within a week, an intern asked about 'salary bands' and received a summary of the confidential pay review. The documents had been shared too widely years earlier; the assistant simply made the over-sharing easy to exploit. The fix was to clean up permissions, exclude HR folders from the index and enforce user-level permission checks at retrieval.",
     "title": "The assistant that knew too much"
    },
    {
     "type": "keypoints",
     "items": [
      "Classify what data may be entered into each approved tool (public, internal, confidential, personal, sensitive).",
      "Confirm in the contract whether the vendor uses prompts and outputs to train models, and opt out where needed.",
      "Set retention for prompts, outputs and logs that balances investigation needs with minimisation.",
      "Restrict access to logs, which can contain the most sensitive data in the system.",
      "Mask or redact personal identifiers before prompts reach external models where feasible."
     ],
     "title": "Prompt, output and log governance"
    },
    {
     "type": "table",
     "head": [
      "Question",
      "Why it matters"
     ],
     "rows": [
      [
       "Where is the model hosted and where are logs stored?",
       "Determines which transfer and localisation rules apply"
      ],
      [
       "Does local law restrict transfers or require local copies?",
       "Some laws and sector regulators in South Asia restrict transfers or require certain data to stay in-country"
      ],
      [
       "Which transfer mechanism applies?",
       "Adequacy, contracts, consent or approved destinations depending on law"
      ],
      [
       "Can the vendor offer in-region hosting?",
       "May simplify compliance for regulated sectors such as banking and health"
      ],
      [
       "Who can access data from abroad, including for support?",
       "Remote access can itself be a transfer"
      ]
     ],
     "title": "Cross-border data: questions to answer"
    },
    {
     "type": "template",
     "title": "Generative-AI data-use assessment",
     "purpose": "Record the key data decisions for a generative-AI deployment.",
     "columns": [
      "Tool and use case",
      "Data classes allowed in prompts",
      "Vendor training on our data?",
      "Retention of prompts and logs",
      "Hosting location",
      "Retrieval sources and permissions",
      "Owner"
     ],
     "example": [
      [
       "Enterprise assistant for policy drafting",
       "Public and internal; no customer personal data",
       "No (contractual opt-out confirmed)",
       "30 days, then deleted",
       "Vendor region in Asia; transfer assessed",
       "Policy library only; user permissions enforced",
       "Head of Governance"
      ]
     ],
     "rows": 6
    },
    {
     "type": "case",
     "title": "A university's research assistant",
     "context": "A university in Dhaka plans a generative-AI assistant for students that searches lecture notes, past exam papers, the library catalogue and faculty research drafts. It will use an external model through an API. Students will be able to upload their own assignments for feedback.",
     "questions": [
      "What data risks arise?",
      "Which controls should be in place before launch?",
      "What should students be told?"
     ],
     "answer": "Risks: unpublished research drafts and future exam papers exposed through retrieval; student assignments (personal data and intellectual property) sent to an external vendor and possibly used for training; copyright issues with library material; cross-border transfer of student data; retention of prompts revealing personal circumstances. Controls: ingest only approved sources, with exam papers and drafts excluded or permission-controlled; enforce user permissions at retrieval; a contract confirming no vendor training on prompts, defined retention and hosting region; redaction of student IDs; clear acceptable-use rules; and logs with restricted access. Students should be told that an AI assistant is used, which model provider processes their data and where, how long prompts are kept, that uploaded work is not used for training, the limits of AI feedback and how to raise concerns."
    },
    {
     "type": "scenario",
     "title": "The free tier",
     "situation": "A bank's operations team wants to use the free version of a public chat assistant to summarise customer complaints because the enterprise licence is still in procurement. The free tier's terms allow the provider to use inputs to improve its models. What should the governance lead decide?",
     "options": [
      {
       "text": "Allow it, because summarising complaints is low risk.",
       "feedback": "The task may be low risk, but the data is customer personal data sent to a provider that may train on it.",
       "best": false
      },
      {
       "text": "Allow it if staff remove customer names first.",
       "feedback": "Removing names helps but complaints often contain account details and stories that identify people, and the training terms remain.",
       "best": false
      },
      {
       "text": "Do not use the free tier for customer data; speed up the enterprise procurement and, meanwhile, allow only non-customer content or an approved internal tool.",
       "feedback": "Best. It prevents customer data from reaching a provider that may train on it, while supporting the team's need through a governed path.",
       "best": true
      },
      {
       "text": "Ban AI summarisation permanently.",
       "feedback": "The use case is reasonable; the issue is the tool's terms, not the purpose.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Retrieval-augmented generation (RAG)",
       "def": "A design in which a generative model answers using documents retrieved from a knowledge source at query time."
      },
      {
       "term": "Text and data mining (TDM)",
       "def": "Automated analysis of large amounts of text and data, including for AI training, subject to copyright exceptions and opt-outs in some laws."
      },
      {
       "term": "Rights reservation (opt-out)",
       "def": "A rights holder's statement that their content may not be used for text and data mining or AI training."
      },
      {
       "term": "Permission-aware retrieval",
       "def": "Retrieval that checks a user's access rights before using documents to generate an answer."
      },
      {
       "term": "Data localisation",
       "def": "A legal requirement to store or process certain data within a country's borders."
      },
      {
       "term": "Cross-border transfer",
       "def": "Moving personal data, or allowing access to it, from one country to another."
      },
      {
       "term": "IP indemnity",
       "def": "A contractual promise by a vendor to cover certain costs if its product infringes intellectual property rights."
      },
      {
       "term": "Prompt log",
       "def": "A record of inputs and outputs of a generative-AI system, which may contain sensitive data."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "An internal assistant reveals confidential pay data to an intern. What is the root cause most likely to be?",
       "options": [
        "The model is too small",
        "Over-shared documents combined with retrieval that does not enforce permissions",
        "The intern used the wrong language",
        "The output was too long"
       ],
       "answer": 1,
       "explain": "The assistant surfaces whatever it can retrieve; permission hygiene and checks are the control."
      },
      {
       "q": "Which contract term matters most before staff enter personal data into a vendor's assistant?",
       "options": [
        "The colour scheme of the interface",
        "The vendor's office location",
        "Whether the vendor uses prompts and outputs to train its models",
        "The number of languages supported"
       ],
       "answer": 2,
       "explain": "Training on inputs could expose data and conflicts with purpose limitation."
      },
      {
       "q": "Is purely machine-generated output always protected by copyright?",
       "options": [
        "Yes, everywhere",
        "Only in South Asia",
        "Only for images",
        "No; many jurisdictions require human authorship"
       ],
       "answer": 3,
       "explain": "Human authorship requirements mean protection may be absent or limited."
      },
      {
       "q": "Why can remote support access by a foreign vendor matter?",
       "options": [
        "Access from abroad can itself count as a cross-border transfer",
        "It never matters if data is encrypted",
        "It only matters for public data",
        "Vendors are exempt from transfer rules"
       ],
       "answer": 0,
       "explain": "Many laws treat access from another country as a transfer."
      },
      {
       "q": "What is the main data risk of scraping public websites for training?",
       "options": [
        "Public data is always free to use",
        "Terms, copyright and data protection may still apply to publicly visible data",
        "Scraped data is always accurate",
        "Scraping makes models smaller"
       ],
       "answer": 1,
       "explain": "Visibility does not equal permission to use."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m6",
 "order": 6,
 "code": "Lifecycle",
 "title": "Model Lifecycle Governance, Testing and Explainability",
 "subtitle": "Stage gates, documentation, evaluation, bias testing and explanations that hold up to scrutiny",
 "outcomes": [
  "Design lifecycle stage gates with clear evidence, approvers and independent validation",
  "Produce and maintain model cards, datasheets and system documentation",
  "Specify evaluation, red-teaming and regression testing that match the harm",
  "Plan and interpret bias tests using group fairness metrics, and choose mitigations",
  "Select and test explanation methods for each audience"
 ],
 "lessons": [
  {
   "id": "m6-l1",
   "title": "Lifecycle Governance and Stage Gates",
   "subtitle": "Building control points into how AI is designed, built, released and retired",
   "minutes": 30,
   "objectives": [
    "Describe the AI lifecycle and the governance questions at each stage",
    "Design stage gates with clear criteria, evidence and approvers",
    "Apply independent validation and effective challenge to high-risk models"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Policies and risk registers mean little unless they shape what happens when a team designs, builds and releases an AI system. **Lifecycle governance** places control points, called stage gates, at the moments when decisions are cheapest to change. A design flaw caught at the idea stage costs a conversation; the same flaw caught after launch can cost a regulatory investigation."
    },
    {
     "type": "flow",
     "title": "The AI lifecycle",
     "items": [
      {
       "label": "Plan",
       "text": "Problem, purpose, success measures, risk tier"
      },
      {
       "label": "Data",
       "text": "Sourcing, rights, quality, preparation"
      },
      {
       "label": "Build",
       "text": "Model selection, training or configuration"
      },
      {
       "label": "Validate",
       "text": "Testing, bias checks, independent review"
      },
      {
       "label": "Deploy",
       "text": "Release, oversight, transparency"
      },
      {
       "label": "Operate",
       "text": "Monitoring, drift, incidents, change"
      },
      {
       "label": "Retire",
       "text": "Decommission, data disposal, records"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Gate",
      "Question",
      "Evidence required (high tier)",
      "Approver"
     ],
     "rows": [
      [
       "G1 Concept",
       "Should we pursue this use of AI?",
       "Intake form, tier, necessity statement, initial risks",
       "Business owner + AI governance office"
      ],
      [
       "G2 Design and data",
       "Is the design and data fit and lawful?",
       "Impact assessment draft, data provenance, lawful basis, oversight design",
       "AI governance office, privacy, security"
      ],
      [
       "G3 Pre-deployment",
       "Does the system meet its requirements?",
       "Validation report, bias and robustness tests, model card, red-team results",
       "Independent validator + risk committee"
      ],
      [
       "G4 Go-live",
       "Are we ready to operate it safely?",
       "Monitoring plan, runbooks, user training, notices, rollback tested",
       "Accountable executive"
      ],
      [
       "G5 Post-launch review",
       "Is it working as intended in reality?",
       "Early monitoring results, complaints, override rates",
       "Business owner + AI governance office"
      ]
     ],
     "title": "Stage gates and their evidence"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Publish gate criteria and templates in advance so teams can prepare. A gate that holds evidence to a clear standard is quick; a gate that invents requirements at the meeting is slow and resented.",
     "title": "Gates should be fast when the evidence is ready"
    },
    {
     "type": "compare",
     "title": "First-line testing vs independent validation",
     "columns": [
      {
       "title": "Development team testing",
       "items": [
        "Performed by the builders",
        "Checks the model works as they intended",
        "Essential but not independent"
       ]
      },
      {
       "title": "Independent validation",
       "items": [
        "Performed by people not involved in building",
        "Challenges assumptions, data, methods and limits",
        "Required for high-risk models in many sectors, such as banking model-risk practice"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "Critical, informed review of a model by people with the competence, independence and authority to question it and to have their concerns acted upon. It is a long-standing idea in banking model-risk management that applies well to all high-risk AI.",
     "title": "Effective challenge"
    },
    {
     "type": "keypoints",
     "items": [
      "Decide what replaces the system's function and communicate the change.",
      "Archive model versions, documentation and decision logs for the required retention period.",
      "Dispose of training data and logs that are no longer justified.",
      "Revoke credentials, API keys and integrations.",
      "Update the AI inventory and close related risks."
     ],
     "title": "Retirement is a lifecycle stage too"
    },
    {
     "type": "scenario",
     "title": "Skipping a gate",
     "situation": "A bank's data science team has a new fraud model ready. Validation is booked for three weeks' time, but the business wants to launch now because fraud losses are rising. What should the governance lead recommend?",
     "options": [
      {
       "text": "Launch now and validate later, because the losses are real.",
       "feedback": "Launching a high-impact model without validation risks wrongly blocking legitimate customers at scale.",
       "best": false
      },
      {
       "text": "Agree a time-boxed, risk-based expedited validation of the critical tests, launch in shadow or limited mode if needed, and record the exception with an owner and expiry.",
       "feedback": "Best. It responds to the business need while keeping essential checks, limits exposure and documents a controlled exception.",
       "best": true
      },
      {
       "text": "Refuse any change to the validation schedule.",
       "feedback": "Rigid refusal ignores a real business risk and can encourage teams to bypass governance next time.",
       "best": false
      },
      {
       "text": "Let the data scientists validate their own model to save time.",
       "feedback": "Self-validation lacks independence, which is the point of the gate.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Stage-gate record",
     "purpose": "Record each gate decision so the history of approvals is auditable.",
     "columns": [
      "System and version",
      "Gate",
      "Evidence reviewed",
      "Decision",
      "Conditions",
      "Approver and date"
     ],
     "example": [
      [
       "Fraud model v2.1",
       "G3 Pre-deployment",
       "Validation report, bias test, red-team summary, model card",
       "Approved with conditions",
       "Shadow mode for 2 weeks; false-positive rate by region reported weekly",
       "Chief Risk Officer, 12 May 2026"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Which stage of the AI lifecycle receives the least governance attention in your organisation? What is one control you could add there?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "AI lifecycle",
       "def": "The stages an AI system passes through from planning and data to build, validation, deployment, operation and retirement."
      },
      {
       "term": "Stage gate",
       "def": "A defined decision point where evidence is reviewed before a system proceeds to the next stage."
      },
      {
       "term": "Independent validation",
       "def": "Review and testing of a model by people independent of its development."
      },
      {
       "term": "Effective challenge",
       "def": "Critical review by competent, independent people with authority to have concerns addressed."
      },
      {
       "term": "Shadow mode",
       "def": "Running a new model alongside the existing process without its outputs affecting decisions."
      },
      {
       "term": "Decommissioning",
       "def": "The controlled retirement of an AI system, including records, data and access."
      },
      {
       "term": "Go-live readiness",
       "def": "Having monitoring, runbooks, user training, notices and a tested rollback in place before a system goes live."
      },
      {
       "term": "Model risk management",
       "def": "The discipline, long established in banking, of governing the risks of models through inventory, validation and oversight."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Why place stage gates early in the lifecycle?",
       "options": [
        "Regulators forbid late gates",
        "Early gates remove the need for monitoring",
        "Design flaws are cheapest to fix before build and launch",
        "Data is always perfect early on"
       ],
       "answer": 2,
       "explain": "Early decisions are easier and cheaper to change."
      },
      {
       "q": "Who should perform independent validation of a high-risk model?",
       "options": [
        "The model's developers",
        "The vendor's sales team",
        "The end customer",
        "People not involved in building it, with authority to challenge"
       ],
       "answer": 3,
       "explain": "Independence is the essential feature of validation."
      },
      {
       "q": "Running a new model alongside the current process without affecting decisions is called:",
       "options": [
        "Red teaming",
        "Shadow mode",
        "Data poisoning",
        "Fine-tuning"
       ],
       "answer": 1,
       "explain": "Shadow mode compares outputs safely before go-live."
      },
      {
       "q": "Which belongs in retirement?",
       "options": [
        "Revoking keys and disposing of data no longer justified",
        "Doubling the training data",
        "Removing it from records without archive",
        "Raising its risk tier"
       ],
       "answer": 0,
       "explain": "Retirement closes access, archives records and disposes of unneeded data."
      },
      {
       "q": "An urgent launch needs a gate exception. What makes it controlled?",
       "options": [
        "Verbal agreement in a corridor",
        "No record to avoid blame",
        "Permanent waiver",
        "A documented owner, conditions and an expiry date"
       ],
       "answer": 3,
       "explain": "Exceptions must be recorded, conditional and time-limited."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l2",
   "title": "Documentation: Model Cards, Datasheets and Technical Files",
   "subtitle": "Writing down what a system is, what it is for and where it fails",
   "minutes": 30,
   "objectives": [
    "Explain the purpose of model cards, datasheets and system cards",
    "Write documentation suited to different audiences",
    "Keep documentation current as systems change"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Documentation is how AI governance becomes **evidence**. It lets a validator test a model, a deployer use it correctly, an auditor reconstruct decisions and a regulator assess compliance. The EU AI Act requires technical documentation for high-risk systems, ISO/IEC 42001 requires documented information, and good practice across sectors expects model and dataset documentation. The trick is to document what matters, in the right depth, and keep it current."
    },
    {
     "type": "table",
     "head": [
      "Artefact",
      "Describes",
      "Main audience"
     ],
     "rows": [
      [
       "Model card",
       "A model's purpose, performance, limits, evaluation across groups and intended use",
       "Validators, deployers, governance"
      ],
      [
       "Datasheet for datasets",
       "How a dataset was created, its composition, collection process, uses and limits",
       "Data scientists, privacy, auditors"
      ],
      [
       "System card",
       "A whole AI system: models, components, safeguards, evaluations and residual risks",
       "Deployers, risk committees, regulators"
      ],
      [
       "Technical documentation",
       "Formal file demonstrating compliance with legal requirements",
       "Regulators, notified bodies"
      ],
      [
       "Instructions for use",
       "How deployers should operate, oversee and monitor the system",
       "Deployers and operators"
      ],
      [
       "Decision log",
       "Key design choices, trade-offs and approvals with reasons",
       "Auditors, future maintainers"
      ]
     ],
     "title": "Common documentation artefacts"
    },
    {
     "type": "framework",
     "title": "What a good model card contains",
     "items": [
      {
       "label": "MC1",
       "title": "Overview",
       "text": "Name, version, owner, date, model type."
      },
      {
       "label": "MC2",
       "title": "Intended use",
       "text": "Purpose, users, and uses that are out of scope."
      },
      {
       "label": "MC3",
       "title": "Data",
       "text": "Training and evaluation data, with links to datasheets."
      },
      {
       "label": "MC4",
       "title": "Performance",
       "text": "Metrics overall and by relevant groups, with confidence intervals."
      },
      {
       "label": "MC5",
       "title": "Limitations and risks",
       "text": "Known failure modes, conditions where it should not be relied on."
      },
      {
       "label": "MC6",
       "title": "Fairness and explainability",
       "text": "Bias tests performed, results and explanation methods available."
      },
      {
       "label": "MC7",
       "title": "Oversight and monitoring",
       "text": "Human oversight design, monitoring metrics and thresholds."
      },
      {
       "label": "MC8",
       "title": "Change history",
       "text": "Versions, what changed and approvals."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A 200-page technical file that a deployer never reads does not protect anyone. Layer documentation: a one-page summary for decision-makers, a model card for practitioners and the full technical file for regulators and auditors, all consistent with each other.",
     "title": "Documentation that nobody can use"
    },
    {
     "type": "template",
     "title": "Model card (summary)",
     "purpose": "Capture the essential facts about a model in a consistent format.",
     "columns": [
      "Field",
      "Content"
     ],
     "example": [
      [
       "Intended use",
       "Rank nano-loan applications for approval; not for setting interest rates or collections"
      ],
      [
       "Performance",
       "AUC 0.81 overall; 0.78 for rural applicants; 0.80 for women"
      ]
     ],
     "rows": 8
    },
    {
     "type": "keypoints",
     "items": [
      "Generate parts automatically from pipelines: data versions, metrics, test results.",
      "Make documentation updates a condition of every release gate.",
      "Assign a named owner for each document.",
      "Review documentation when the model, data, use or law changes.",
      "Keep superseded versions for audit, clearly marked."
     ],
     "title": "Keeping documentation alive"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A hospital deploying a vendor's AI scheduling tool cannot write the vendor's model card, but it can and should require one in the contract, then add its own deployment record: configuration, local validation results, oversight arrangements, staff training and monitoring plan.",
     "title": "Documentation for a bought system"
    },
    {
     "type": "compare",
     "title": "Provider documentation vs deployer documentation",
     "columns": [
      {
       "title": "Provider documents",
       "items": [
        "Model design, training data, evaluation",
        "Intended purpose and limits",
        "Instructions for use",
        "Conformity evidence where required"
       ]
      },
      {
       "title": "Deployer documents",
       "items": [
        "Why and how the system is used locally",
        "Local testing on own population",
        "Oversight roles and training",
        "Monitoring, incidents, impact assessment"
       ]
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A model card with only good news",
     "situation": "A vendor's model card for a CV-screening tool reports 92% accuracy but no results by gender, age or disability and no limitations section. Your organisation is about to sign the contract. What should you do?",
     "options": [
      {
       "text": "Sign, because 92% accuracy is high.",
       "feedback": "Overall accuracy says nothing about performance for different groups or known failure modes.",
       "best": false
      },
      {
       "text": "Request group-level results, limitations and intended-use details before signing, and make them a contract deliverable; plan local testing.",
       "feedback": "Best. Missing group results and limitations are red flags for a high-risk hiring tool. Making them contractual and testing locally protects candidates and the organisation.",
       "best": true
      },
      {
       "text": "Write the missing sections yourself from the vendor's marketing material.",
       "feedback": "Marketing material is not evidence, and you would be inventing claims you cannot support.",
       "best": false
      },
      {
       "text": "Reject all vendors that publish model cards.",
       "feedback": "Model cards are good practice; the problem is that this one is incomplete.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Documentation readiness checklist (high-risk system)",
     "items": [
      "Model card complete, including group-level performance and limitations",
      "Datasheets for training and evaluation data",
      "System card or architecture description including safeguards",
      "Impact assessment linked",
      "Instructions for use and oversight design",
      "Decision log of key trade-offs and approvals",
      "Version history and change records",
      "Owner named for each document"
     ]
    },
    {
     "type": "reflection",
     "prompt": "If an auditor asked tomorrow for the documentation of your highest-risk AI system, what could you hand over within an hour? What is missing?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Model card",
       "def": "A short structured document describing a model's intended use, performance, limits and evaluation."
      },
      {
       "term": "Datasheet for datasets",
       "def": "A structured document describing a dataset's motivation, composition, collection, uses and limitations."
      },
      {
       "term": "System card",
       "def": "Documentation describing a whole AI system, including models, safeguards, evaluations and residual risks."
      },
      {
       "term": "Technical documentation",
       "def": "The formal record demonstrating that an AI system meets legal and technical requirements."
      },
      {
       "term": "Instructions for use",
       "def": "Information from a provider telling deployers how to operate, oversee and monitor a system properly."
      },
      {
       "term": "Decision log",
       "def": "A record of significant design decisions, alternatives considered and reasons."
      },
      {
       "term": "Out-of-scope use",
       "def": "A use that the provider has stated the system is not designed or validated for."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which document describes how a dataset was created and its limits?",
       "options": [
        "Privacy notice",
        "Datasheet for datasets",
        "Board minutes",
        "Penetration test report"
       ],
       "answer": 1,
       "explain": "Datasheets record dataset motivation, composition, collection and limits."
      },
      {
       "q": "What is the main weakness of a model card showing only overall accuracy?",
       "options": [
        "It is too short to print",
        "It uses technical terms",
        "It includes a version number",
        "It hides performance differences between groups and known failure modes"
       ],
       "answer": 3,
       "explain": "Group-level results and limitations are essential for judging fairness and fitness."
      },
      {
       "q": "Which is a deployer, rather than provider, document?",
       "options": [
        "Local validation results and oversight arrangements",
        "Training data description",
        "Model architecture",
        "Conformity evidence for the model"
       ],
       "answer": 0,
       "explain": "Deployers document how they use and oversee the system locally."
      },
      {
       "q": "How can documentation be kept current most reliably?",
       "options": [
        "Update it every five years",
        "Make updates a release-gate condition and generate parts automatically",
        "Let anyone edit without review",
        "Only update after incidents"
       ],
       "answer": 1,
       "explain": "Linking documentation to releases and pipelines keeps it accurate."
      },
      {
       "q": "Why layer documentation for different audiences?",
       "options": [
        "To hide information from regulators",
        "To reduce testing",
        "So each audience gets usable information while all versions stay consistent",
        "Because regulators require exactly three layers"
       ],
       "answer": 2,
       "explain": "Layering makes documentation usable without losing completeness."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l3",
   "title": "Evaluation, Validation and Red Teaming",
   "subtitle": "Proving a system is fit for purpose before and after release",
   "minutes": 35,
   "objectives": [
    "Interpret core performance metrics and choose ones that match the harm",
    "Evaluate generative-AI systems using test sets, rubrics and human review",
    "Plan and govern a red-teaming exercise"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Evaluation answers a simple question with a complicated answer: **is this system good enough for this purpose, for these people, in this context?** Governance professionals do not need to compute metrics, but they must know which metrics matter, what thresholds were agreed, whether the test data was representative and whether anyone tried hard to break the system."
    },
    {
     "type": "formula",
     "title": "Core classification metrics",
     "items": [
      {
       "name": "Precision",
       "expr": "TP / (TP + FP)",
       "meaning": "Of the cases flagged, how many were truly positive. Low precision means many false alarms."
      },
      {
       "name": "Recall (true positive rate)",
       "expr": "TP / (TP + FN)",
       "meaning": "Of the true positives, how many were found. Low recall means many misses."
      },
      {
       "name": "False positive rate",
       "expr": "FP / (FP + TN)",
       "meaning": "Of the true negatives, how many were wrongly flagged."
      },
      {
       "name": "F1 score",
       "expr": "2 × Precision × Recall / (Precision + Recall)",
       "meaning": "A single balance of precision and recall."
      },
      {
       "name": "Accuracy",
       "expr": "(TP + TN) / All cases",
       "meaning": "Share of all predictions that were correct; misleading when one class is rare."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "If 1% of transactions are fraudulent, a model that labels everything 'not fraud' is 99% accurate and useless. Always ask which errors matter and look at precision, recall and error rates, overall and by group.",
     "title": "The accuracy trap"
    },
    {
     "type": "table",
     "head": [
      "Use case",
      "Worst error",
      "Metric to watch"
     ],
     "rows": [
      [
       "Cancer screening support",
       "Missing a cancer (false negative)",
       "Recall / sensitivity"
      ],
      [
       "Fraud investigation referrals",
       "Accusing honest customers (false positive)",
       "Precision and false positive rate"
      ],
      [
       "Spam filtering of job applications",
       "Losing a genuine application",
       "Recall for genuine applications"
      ],
      [
       "Content moderation",
       "Both over-removal and under-removal",
       "Precision and recall by language and dialect"
      ]
     ],
     "title": "Matching the metric to the harm"
    },
    {
     "type": "keypoints",
     "items": [
      "Build a **golden test set** of realistic prompts with expected answers or criteria, including Bangla, English and mixed-language inputs.",
      "Score outputs on **groundedness** (supported by sources), correctness, completeness, tone and safety.",
      "Use **human reviewers** with domain expertise for high-stakes content; automated judges can help at scale but must be checked.",
      "Test refusals: does the system decline unsafe requests and avoid refusing legitimate ones?",
      "Re-run the suite on every model, prompt or retrieval change (regression testing)."
     ],
     "title": "Evaluating generative AI"
    },
    {
     "type": "flow",
     "title": "A red-teaming exercise",
     "items": [
      {
       "label": "Scope",
       "text": "System, risks to probe, rules of engagement"
      },
      {
       "label": "Team",
       "text": "Security, domain experts, diverse testers, affected-group perspectives"
      },
      {
       "label": "Attack",
       "text": "Jailbreaks, prompt injection, harmful content, data extraction, bias probes"
      },
      {
       "label": "Record",
       "text": "Each finding with severity and reproduction steps"
      },
      {
       "label": "Fix",
       "text": "Mitigations assigned to owners"
      },
      {
       "label": "Retest",
       "text": "Confirm fixes and add cases to the regression suite"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Testers who speak regional dialects, use assistive technology or come from communities the system affects will find failures a homogeneous team misses. Include them deliberately, and pay them for their expertise.",
     "title": "Diverse red teams find different failures"
    },
    {
     "type": "compare",
     "title": "Offline testing vs live evaluation",
     "columns": [
      {
       "title": "Offline (before release)",
       "items": [
        "Held-out test data and golden sets",
        "Controlled and repeatable",
        "May not reflect real users"
       ]
      },
      {
       "title": "Live (after release)",
       "items": [
        "Shadow mode, A/B tests, staged rollout",
        "Shows real behaviour and drift",
        "Needs safeguards because real people are affected"
       ]
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Strong metrics, weak test set",
     "situation": "A validation report for a clinic-triage chatbot shows 95% correct triage on 500 test conversations. You notice the test conversations were all written in formal English by the development team. The chatbot will serve patients in Bangla, English and mixed language. What should you require?",
     "options": [
      {
       "text": "Accept the result; 95% on 500 cases is statistically strong.",
       "feedback": "The sample is large but unrepresentative of real patients, so the result does not answer the right question.",
       "best": false
      },
      {
       "text": "A new evaluation with realistic conversations from the intended population in Bangla, English and mixed language, reviewed by clinicians, with results by language.",
       "feedback": "Best. Validation must reflect the real population and context, and clinicians must judge triage correctness.",
       "best": true
      },
      {
       "text": "Double the test set using more formal English conversations.",
       "feedback": "More of the same unrepresentative data does not fix the gap.",
       "best": false
      },
      {
       "text": "Launch and evaluate using complaints.",
       "feedback": "Using patients as the test set for a health triage tool is unsafe.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Evaluation plan",
     "purpose": "Define how a system will be evaluated before release.",
     "columns": [
      "Requirement",
      "Metric",
      "Threshold",
      "Test data",
      "Evaluator",
      "Result"
     ],
     "example": [
      [
       "Correct urgent triage",
       "Recall for urgent cases",
       "≥ 98%",
       "600 clinician-labelled conversations in Bangla, English and mixed",
       "Clinical safety lead",
       "97.2%: fails; retrain and retest"
      ],
      [
       "Grounded answers",
       "Share of answers supported by approved sources",
       "≥ 95%",
       "Golden set of 300 policy questions",
       "Independent validator",
       "96.1%: passes"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Which single metric would you want to see first for the highest-risk AI system you know, and why that one?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Precision",
       "def": "The share of positive predictions that are correct."
      },
      {
       "term": "Recall",
       "def": "The share of actual positives that a model correctly identifies; also called sensitivity or true positive rate."
      },
      {
       "term": "False positive rate",
       "def": "The share of actual negatives wrongly classified as positive."
      },
      {
       "term": "Golden test set",
       "def": "A curated set of inputs with expected outputs or criteria used repeatedly to evaluate a system."
      },
      {
       "term": "Groundedness",
       "def": "The degree to which a generative answer is supported by the provided sources."
      },
      {
       "term": "Regression testing",
       "def": "Re-running tests after changes to ensure performance has not worsened."
      },
      {
       "term": "Staged rollout",
       "def": "Releasing a system to a small share of users first and expanding as evidence accumulates."
      },
      {
       "term": "Jailbreak",
       "def": "A prompt technique that tries to make a model ignore its safety rules."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A model has 80 true positives and 20 false positives. Its precision is:",
       "options": [
        "0.20",
        "0.25",
        "1.00",
        "0.80"
       ],
       "answer": 3,
       "explain": "Precision = TP / (TP + FP) = 80 / 100 = 0.80."
      },
      {
       "q": "For cancer-screening support, which metric matters most?",
       "options": [
        "Precision only",
        "Training time",
        "Recall",
        "Token count"
       ],
       "answer": 2,
       "explain": "Missing cancers (false negatives) is the worst error, so recall is critical."
      },
      {
       "q": "Why can accuracy be misleading for fraud detection?",
       "options": [
        "Accuracy is always lower than recall",
        "Fraud is rare, so predicting 'no fraud' for everything scores highly",
        "Accuracy cannot be computed for fraud",
        "Fraud models have no errors"
       ],
       "answer": 1,
       "explain": "Class imbalance makes accuracy a poor guide."
      },
      {
       "q": "What makes red teaming more effective?",
       "options": [
        "Diverse testers, including people from affected communities",
        "Only the original developers",
        "Testing only with typical inputs",
        "Skipping documentation of findings"
       ],
       "answer": 0,
       "explain": "Diverse perspectives find failures homogeneous teams miss."
      },
      {
       "q": "When should a generative-AI regression suite be re-run?",
       "options": [
        "Once a year only",
        "Only after a complaint",
        "After every model, prompt or retrieval change",
        "Never once launched"
       ],
       "answer": 2,
       "explain": "Small changes can alter behaviour unexpectedly."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l4",
   "title": "Bias Testing and Fairness Metrics",
   "subtitle": "Measuring group differences, setting thresholds and mitigating bias",
   "minutes": 35,
   "objectives": [
    "Calculate and interpret common group fairness metrics",
    "Plan a bias test, including intersectional analysis and access to protected attributes",
    "Choose bias mitigation approaches across the pipeline"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Module 2 explained why fairness is a values decision. This lesson turns that decision into **measurement**. A bias test compares how a system treats different groups, using metrics chosen for the harm at stake, against thresholds agreed in advance. The results go into the model card, the impact assessment and the release gate."
    },
    {
     "type": "formula",
     "title": "Common group fairness metrics",
     "items": [
      {
       "name": "Selection rate",
       "expr": "Selection rate (group) = Positive outcomes in group / People in group",
       "meaning": "The basic building block: what share of each group is approved, hired or flagged."
      },
      {
       "name": "Demographic parity difference",
       "expr": "DPD = Selection rate (A) − Selection rate (B)",
       "meaning": "Zero means equal selection rates; a common target is a small absolute gap."
      },
      {
       "name": "Disparate impact ratio",
       "expr": "DIR = Selection rate (disadvantaged group) / Selection rate (advantaged group)",
       "meaning": "A ratio below 0.8 (the 'four-fifths' rule of thumb from US employment practice) is a common warning sign."
      },
      {
       "name": "Equal opportunity difference",
       "expr": "EOD = TPR (A) − TPR (B)",
       "meaning": "Compares how often truly qualified people in each group are correctly approved."
      },
      {
       "name": "False positive rate difference",
       "expr": "FPRD = FPR (A) − FPR (B)",
       "meaning": "Compares how often people in each group are wrongly flagged; key for fraud and policing."
      },
      {
       "name": "Equalised odds",
       "expr": "TPR and FPR both equal across groups",
       "meaning": "A stricter condition requiring both error rates to match."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "Of 400 male applicants, 120 pass an AI screen (selection rate 0.30). Of 300 female applicants, 60 pass (0.20). The disparate impact ratio is 0.20 / 0.30 = 0.67, below the 0.8 warning level, and the demographic parity difference is 0.10. This does not prove unlawful discrimination, but it requires investigation of features, labels and alternatives before release.",
     "title": "Worked example: hiring screen"
    },
    {
     "type": "cli",
     "title": "Computing selection rates and the disparate impact ratio",
     "device": "Python notebook",
     "lines": [
      "# results: one row per applicant with 'group' and 'selected' (1 or 0)",
      "import pandas as pd",
      "results = pd.read_csv('screening_results.csv')",
      "rates = results.groupby('group')['selected'].mean()",
      "print(rates)",
      "dir_ratio = rates.min() / rates.max()",
      "print(f'Disparate impact ratio: {dir_ratio:.2f}')",
      "# Flag for review if below the agreed threshold",
      "if dir_ratio < 0.8:",
      "    print('Below threshold: investigate before release')"
     ],
     "note": "Run the same calculation for every relevant group and intersection, and report sample sizes alongside rates."
    },
    {
     "type": "steps",
     "title": "Planning a bias test",
     "items": [
      {
       "title": "Select groups",
       "text": "Protected characteristics relevant to law and context, plus local factors such as region, language or disability."
      },
      {
       "title": "Include intersections",
       "text": "For example rural women or older applicants with disabilities, with minimum sample sizes."
      },
      {
       "title": "Choose metrics",
       "text": "Match metrics to the main harm, as agreed in the impact assessment."
      },
      {
       "title": "Agree thresholds in advance",
       "text": "Set acceptable gaps before seeing results, with justification."
      },
      {
       "title": "Obtain group data lawfully",
       "text": "Use voluntary self-identification, secure test environments or statistical inference, with privacy safeguards."
      },
      {
       "title": "Run, analyse, report",
       "text": "Include confidence intervals; small groups give unstable numbers."
      },
      {
       "title": "Decide and document",
       "text": "Release, mitigate or reject, with reasons recorded."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "You often need data on sex, religion or ethnicity to test whether a model discriminates on those grounds, yet collecting it raises privacy concerns. Plan this deliberately with the privacy officer: lawful basis, separation from the model, restricted access and use only for testing.",
     "title": "The protected-attribute paradox"
    },
    {
     "type": "table",
     "head": [
      "Stage",
      "Approach",
      "Example"
     ],
     "rows": [
      [
       "Pre-processing (data)",
       "Improve or rebalance data",
       "Collect more data for under-represented regions; reweight samples; fix biased labels"
      ],
      [
       "In-processing (model)",
       "Add fairness constraints during training",
       "Train with a constraint limiting the false-positive-rate gap"
      ],
      [
       "Post-processing (outputs)",
       "Adjust decision thresholds or outputs",
       "Review borderline refusals for groups with higher error rates"
      ],
      [
       "Process and context",
       "Change how outputs are used",
       "Human review of all adverse decisions; alternative evidence routes for thin-file applicants"
      ]
     ],
     "title": "Bias mitigation across the pipeline"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Some mitigation methods, such as using different thresholds for different groups, may be unlawful in certain jurisdictions or sectors even when intended to improve fairness. Agree the approach with legal counsel.",
     "title": "Mitigation needs legal review"
    },
    {
     "type": "scenario",
     "title": "A failed bias test before launch",
     "situation": "A credit model for small business loans in Bangladesh has a disparate impact ratio of 0.72 for women-owned businesses. Investigation shows the model relies heavily on 'years of registered trade licence', and many women-owned businesses are newer or informally registered. What is the BEST next step?",
     "options": [
      {
       "text": "Launch anyway, because the model is accurate overall.",
       "feedback": "Overall accuracy does not justify a significant, unexplained gap affecting a group with a known structural disadvantage.",
       "best": false
      },
      {
       "text": "Remove the gender field from the model.",
       "feedback": "Gender may not even be a feature; the problem is the proxy-like feature and data gap.",
       "best": false
      },
      {
       "text": "Explore alternative features such as transaction history, test mitigation options with legal review, re-test, and add human review for borderline applications.",
       "feedback": "Best. It addresses the cause, keeps the solution lawful, verifies the effect and adds a safeguard.",
       "best": true
      },
      {
       "text": "Lower the approval threshold for everyone until the ratio passes.",
       "feedback": "This changes credit risk for all customers without addressing the cause and may create new problems.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Bias test report",
     "purpose": "Report fairness results in a consistent format for the release gate.",
     "columns": [
      "Group comparison",
      "Metric",
      "Result",
      "Threshold",
      "Sample sizes",
      "Pass or fail",
      "Action"
     ],
     "example": [
      [
       "Women vs men applicants",
       "Disparate impact ratio",
       "0.72",
       "≥ 0.80",
       "1,240 / 3,880",
       "Fail",
       "Replace licence-years feature; re-test"
      ],
      [
       "Rural vs urban applicants",
       "Equal opportunity difference",
       "−0.04",
       "Within ±0.05",
       "2,100 / 3,020",
       "Pass",
       "Monitor quarterly"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "For one AI decision in your organisation, which two groups would you compare first, which metric would you use, and what threshold would you defend publicly?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Selection rate",
       "def": "The share of a group receiving a positive outcome, such as approval."
      },
      {
       "term": "Demographic parity",
       "def": "A fairness condition in which selection rates are equal across groups."
      },
      {
       "term": "Disparate impact ratio",
       "def": "The selection rate of one group divided by that of another; values below 0.8 often trigger review."
      },
      {
       "term": "Four-fifths rule",
       "def": "A rule of thumb from US employment practice that a selection-rate ratio below 80% may indicate adverse impact."
      },
      {
       "term": "Equal opportunity",
       "def": "A fairness condition in which true positive rates are equal across groups."
      },
      {
       "term": "Equalised odds",
       "def": "A fairness condition in which both true positive and false positive rates are equal across groups."
      },
      {
       "term": "Reweighting",
       "def": "A pre-processing technique that gives different weights to training examples to reduce bias."
      },
      {
       "term": "Intersectional analysis",
       "def": "Testing outcomes for combinations of characteristics, not just single groups."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Group A has a selection rate of 0.50 and group B 0.35. The disparate impact ratio (B to A) is:",
       "options": [
        "0.70",
        "0.15",
        "1.43",
        "0.85"
       ],
       "answer": 0,
       "explain": "0.35 / 0.50 = 0.70, which is below the 0.8 warning level."
      },
      {
       "q": "Which metric compares how often truly qualified people in each group are correctly approved?",
       "options": [
        "Demographic parity difference",
        "Equal opportunity difference",
        "Accuracy",
        "Latency"
       ],
       "answer": 1,
       "explain": "Equal opportunity compares true positive rates."
      },
      {
       "q": "Why should fairness thresholds be agreed before seeing results?",
       "options": [
        "Because results are always good",
        "Because regulators set every threshold",
        "To save storage space",
        "To avoid choosing thresholds that make results look acceptable after the fact"
       ],
       "answer": 3,
       "explain": "Pre-agreement prevents motivated reasoning."
      },
      {
       "q": "Reweighting training examples is which type of mitigation?",
       "options": [
        "Post-processing",
        "In-processing",
        "Pre-processing",
        "Incident response"
       ],
       "answer": 2,
       "explain": "It changes the data before training."
      },
      {
       "q": "Why report sample sizes with fairness results?",
       "options": [
        "Small groups give unstable results that need cautious interpretation",
        "To make reports longer",
        "Because metrics need no context",
        "To reveal identities"
       ],
       "answer": 0,
       "explain": "Statistical uncertainty is high for small samples."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l5",
   "title": "Explainability in Practice",
   "subtitle": "Choosing explanation methods people can trust and use",
   "minutes": 30,
   "objectives": [
    "Distinguish global and local explanations, and interpretable versus post-hoc methods",
    "Select explanation methods suited to the audience and use case",
    "Recognise the limits of explanations, including for generative AI"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Explainability serves people: a customer who wants to know why a loan was refused, a doctor deciding whether to trust a triage suggestion, a validator checking that a model relies on sensible factors, a regulator assessing compliance. Each needs a different kind of explanation. The governance task is to **decide what explanation each audience needs and verify that the method actually delivers it**."
    },
    {
     "type": "compare",
     "title": "Global vs local explanations",
     "columns": [
      {
       "title": "Global",
       "items": [
        "How the model behaves overall",
        "Which features matter most across all cases",
        "Audience: validators, risk committees, regulators"
       ]
      },
      {
       "title": "Local",
       "items": [
        "Why this particular output was produced",
        "Main factors for one decision",
        "Audience: affected individuals, case reviewers"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Method",
      "Type",
      "What it shows",
      "Caution"
     ],
     "rows": [
      [
       "Interpretable models (scorecards, small trees, linear models)",
       "Intrinsic",
       "Logic visible directly",
       "May lose some accuracy on complex tasks"
      ],
      [
       "Feature importance",
       "Global, post-hoc",
       "Which inputs influence predictions most overall",
       "Can mislead when features are correlated"
      ],
      [
       "Shapley-value methods (e.g. SHAP)",
       "Local and global, post-hoc",
       "Contribution of each feature to a specific prediction",
       "Computationally heavy; approximations vary"
      ],
      [
       "Local surrogate models (e.g. LIME)",
       "Local, post-hoc",
       "A simple model mimicking behaviour near one case",
       "Results can be unstable between runs"
      ],
      [
       "Counterfactual explanations",
       "Local",
       "What would need to change for a different outcome",
       "Must suggest feasible, lawful changes"
      ],
      [
       "Partial dependence plots",
       "Global",
       "How predictions change as one feature varies",
       "Assumes features are independent"
      ]
     ],
     "title": "Explanation methods"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "For many high-stakes decisions on structured data, such as credit and eligibility, interpretable models perform nearly as well as complex ones. An inherently interpretable model avoids the risk that a post-hoc explanation tells a story that differs from what the model actually does.",
     "title": "Use an interpretable model where you can"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "'Your application would likely have been approved if your average monthly wallet balance over the last six months had been above BDT 8,000, or if you had 12 months of regular top-ups rather than 7.' Good counterfactuals are actionable, truthful and avoid features the person cannot change, such as age.",
     "title": "A counterfactual for a loan applicant"
    },
    {
     "type": "keypoints",
     "items": [
      "Show **citations** to the source documents used, so users can check claims.",
      "Explain the system's purpose, data sources and known limits in plain language.",
      "Do not treat a model's self-described reasoning as a faithful account of how it produced the answer.",
      "Log prompts, retrieved sources and outputs so investigators can reconstruct what happened.",
      "For decisions about people, do not rely on a generative model's free-text justification as the explanation of record."
     ],
     "title": "Explaining generative-AI outputs"
    },
    {
     "type": "framework",
     "title": "Testing an explanation method",
     "items": [
      {
       "label": "E1",
       "title": "Fidelity",
       "text": "Does the explanation reflect what the model actually does? Test by perturbing important features."
      },
      {
       "label": "E2",
       "title": "Stability",
       "text": "Do similar cases receive similar explanations?"
      },
      {
       "label": "E3",
       "title": "Comprehensibility",
       "text": "Can the intended audience understand and act on it? Test with real users."
      },
      {
       "label": "E4",
       "title": "Actionability",
       "text": "Does it tell people what they could change or how to contest?"
      },
      {
       "label": "E5",
       "title": "Safety",
       "text": "Does it avoid revealing confidential data or enabling gaming of the system?"
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A beautiful but unfaithful explanation",
     "situation": "A vendor offers a dashboard that produces fluent, natural-language explanations for each insurance claim the model flags. Your validator finds the explanations often cite factors that have little effect when tested. What should you do?",
     "options": [
      {
       "text": "Use it, because customers will find the explanations reassuring.",
       "feedback": "Reassuring but unfaithful explanations mislead people and can breach transparency duties.",
       "best": false
      },
      {
       "text": "Do not rely on these explanations; require a method whose fidelity is tested, or use a more interpretable model, and confirm results with users.",
       "feedback": "Best. Fidelity is essential. An explanation that does not reflect the model is worse than none.",
       "best": true
      },
      {
       "text": "Add a disclaimer that explanations may not be accurate.",
       "feedback": "A disclaimer does not give people the real reasons they are entitled to.",
       "best": false
      },
      {
       "text": "Stop explaining decisions altogether.",
       "feedback": "Removing explanations harms contestability and may breach legal duties.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Explanation requirements by audience",
     "purpose": "Specify what explanation each audience needs and how it will be delivered and tested.",
     "columns": [
      "Audience",
      "Question they ask",
      "Explanation type",
      "Method",
      "Delivery",
      "How tested"
     ],
     "example": [
      [
       "Refused loan applicant",
       "Why was I refused and what can I do?",
       "Local, counterfactual",
       "Reason codes from scorecard plus counterfactual",
       "SMS and letter with appeal route",
       "User testing with 20 customers; fidelity checked by validator"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Think of an AI-assisted decision about you, such as a credit limit or a content recommendation. What explanation would you actually want, and would the organisation be able to give it?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Global explanation",
       "def": "A description of how a model behaves across all cases, such as which features matter most."
      },
      {
       "term": "Local explanation",
       "def": "The reasons for one specific prediction or decision."
      },
      {
       "term": "Post-hoc explanation",
       "def": "An explanation produced after a model is trained, by analysing its behaviour."
      },
      {
       "term": "Shapley values",
       "def": "A method from game theory that attributes a prediction to each input feature's contribution."
      },
      {
       "term": "Counterfactual explanation",
       "def": "A statement of what would need to change in the input for the outcome to differ."
      },
      {
       "term": "Fidelity",
       "def": "How accurately an explanation reflects the model's actual behaviour."
      },
      {
       "term": "Reason codes",
       "def": "Short standardised statements of the main factors behind a decision, common in credit scoring."
      },
      {
       "term": "Interpretable model",
       "def": "A model whose logic people can follow directly, such as a scorecard or small decision tree."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A customer asks why her claim was flagged. Which type of explanation does she need?",
       "options": [
        "Global",
        "Local",
        "Architectural",
        "Financial"
       ],
       "answer": 1,
       "explain": "She needs reasons for her specific case."
      },
      {
       "q": "Which property asks whether an explanation reflects what the model actually does?",
       "options": [
        "Comprehensibility",
        "Brevity",
        "Latency",
        "Fidelity"
       ],
       "answer": 3,
       "explain": "Fidelity tests the faithfulness of an explanation."
      },
      {
       "q": "Why prefer interpretable models for many structured high-stakes decisions?",
       "options": [
        "They are always more accurate",
        "Regulators ban complex models",
        "They often perform nearly as well and avoid unfaithful post-hoc stories",
        "They need no testing"
       ],
       "answer": 2,
       "explain": "Interpretable models make the real logic visible."
      },
      {
       "q": "Which is a good counterfactual explanation?",
       "options": [
        "Approval was likely with six more months of regular top-ups",
        "You would be approved if you were younger",
        "The model weights are confidential",
        "Our AI decided"
       ],
       "answer": 0,
       "explain": "Good counterfactuals are actionable and avoid unchangeable traits."
      },
      {
       "q": "How should a generative model's self-described reasoning be treated?",
       "options": [
        "As legal proof of its process",
        "As identical to Shapley values",
        "Not as a faithful account of how it produced the answer",
        "As unnecessary to log"
       ],
       "answer": 2,
       "explain": "Self-reports can diverge from the actual computation."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m7",
 "order": 7,
 "code": "Operations",
 "title": "Operating AI Safely: Monitoring, Use Policy, Suppliers and Incidents",
 "subtitle": "Keep AI under control after launch: drift, generative-AI use, third parties and incident response",
 "outcomes": [
  "Design monitoring for performance, fairness, data drift and human oversight, with thresholds and owners",
  "Govern model changes, retraining and vendor updates through change control",
  "Write and roll out a generative-AI acceptable-use policy supported by AI literacy",
  "Manage AI supplier risk through due diligence, contract terms and ongoing oversight",
  "Run AI incident response, including severity, containment, reporting duties and learning"
 ],
 "lessons": [
  {
   "id": "m7-l1",
   "title": "Monitoring, Drift and Change Control",
   "subtitle": "Keeping AI systems safe and effective after launch",
   "minutes": 35,
   "objectives": [
    "Distinguish data drift, concept drift and other changes that degrade AI systems",
    "Design a monitoring plan with metrics, thresholds, owners and actions",
    "Govern model changes, retraining and vendor updates"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Launch is the start of an AI system's riskiest period, not the end. Real users behave differently from test data, the world changes, attackers probe the system, and vendors update models behind their APIs. **Monitoring** detects when performance, fairness or safety slips; **change control** makes sure fixes and updates do not create new problems."
    },
    {
     "type": "compare",
     "title": "Types of drift",
     "columns": [
      {
       "title": "Data drift",
       "items": [
        "The distribution of inputs changes",
        "Example: a new mobile wallet changes transaction patterns",
        "Detectable without labels"
       ]
      },
      {
       "title": "Concept drift",
       "items": [
        "The relationship between inputs and outcome changes",
        "Example: fraudsters adopt a new technique, so old signals no longer predict fraud",
        "Usually needs outcome labels to confirm"
       ]
      },
      {
       "title": "Upstream and vendor change",
       "items": [
        "A source system, feature definition or third-party model changes",
        "Example: a provider silently updates its language model",
        "Detect with contracts, version checks and regression tests"
       ]
      }
     ]
    },
    {
     "type": "formula",
     "title": "Drift and monitoring measures",
     "items": [
      {
       "name": "Population stability index",
       "expr": "PSI = Σ (A_i − E_i) × ln(A_i / E_i)",
       "meaning": "Compares the share of cases in each bin now (A) with the baseline (E). A common rule of thumb: below 0.1 little shift, 0.1 to 0.25 moderate, above 0.25 significant."
      },
      {
       "name": "Performance change",
       "expr": "Δ = Metric (current window) − Metric (validation baseline)",
       "meaning": "Tracks whether recall, precision or error rates have fallen since approval."
      },
      {
       "name": "Override rate",
       "expr": "Overrides / Total reviewed recommendations",
       "meaning": "Rising rates may signal declining quality; near-zero may signal automation bias."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Area",
      "Example metrics",
      "Example threshold and action"
     ],
     "rows": [
      [
       "Performance",
       "Precision, recall, groundedness score",
       "Recall below 0.90 for two weeks: alert model owner, review"
      ],
      [
       "Fairness",
       "Disparate impact ratio, error-rate gaps",
       "Ratio below 0.8: escalate to AI governance office within 5 days"
      ],
      [
       "Data quality",
       "Missing values, out-of-range inputs, PSI",
       "PSI above 0.25 on a key feature: investigate before next release"
      ],
      [
       "Safety and security",
       "Blocked prompts, jailbreak attempts, harmful-output reports",
       "Spike above baseline: security review same day"
      ],
      [
       "Human oversight",
       "Override rate, review time",
       "Override rate under 1% with review time under 30 seconds: check reviewer engagement"
      ],
      [
       "Outcomes and complaints",
       "Complaints, appeals upheld, customer satisfaction",
       "Upheld appeals double: root-cause review"
      ]
     ],
     "title": "What to monitor"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Model metrics can look healthy while real-world outcomes worsen. Pair technical monitoring with business and human signals: complaints, appeals, frontline feedback and audits of samples of decisions.",
     "title": "Monitor outcomes, not just models"
    },
    {
     "type": "flow",
     "title": "From alert to action",
     "items": [
      {
       "label": "Detect",
       "text": "Automated alert or human report"
      },
      {
       "label": "Triage",
       "text": "Is it noise, drift, a bug or an incident?"
      },
      {
       "label": "Decide",
       "text": "Accept, adjust threshold, retrain, roll back or pause"
      },
      {
       "label": "Change",
       "text": "Through change control with testing"
      },
      {
       "label": "Verify",
       "text": "Confirm the fix with monitoring"
      },
      {
       "label": "Record",
       "text": "Update model card, risk register and logs"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Change type",
      "Examples",
      "Governance required"
     ],
     "rows": [
      [
       "Minor",
       "Retraining on new data with unchanged features and design; threshold tweak within approved range",
       "Automated regression tests, owner approval, record"
      ],
      [
       "Significant",
       "New features, new data source, new model architecture, new vendor model version",
       "Re-validation, bias tests, gate approval"
      ],
      [
       "Substantial (purpose or risk change)",
       "New use, new population, new market, change that raises the tier",
       "Back through intake and impact assessment; possible change of legal role"
      ]
     ],
     "title": "Classifying changes"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Many generative-AI services update underlying models without notice or with short notice. Pin model versions where possible, require advance notification in contracts, and run your regression suite against new versions before switching.",
     "title": "Silent vendor updates"
    },
    {
     "type": "scenario",
     "title": "Drift alert on a credit model",
     "situation": "A nano-loan model's PSI on 'average monthly top-up' rises to 0.31 after a new government stipend begins paying many rural households through mobile wallets. Approval rates in rural areas rise sharply. What should the model owner do FIRST?",
     "options": [
      {
       "text": "Retrain immediately on the latest month of data.",
       "feedback": "Retraining on a short, unusual window may build in a temporary pattern and needs change control.",
       "best": false
      },
      {
       "text": "Triage the alert: analyse whether stipend income changes repayment risk, check default early indicators and fairness metrics, and decide on adjustment through change control.",
       "feedback": "Best. A significant shift needs understanding before action. The change may be benign or risky, and any fix should go through tested change control.",
       "best": true
      },
      {
       "text": "Ignore it, because higher approvals are good for business.",
       "feedback": "Unexamined shifts can lead to over-lending and later defaults, harming customers and the lender.",
       "best": false
      },
      {
       "text": "Shut the model down until the stipend programme ends.",
       "feedback": "Shutting down without analysis is disproportionate and may harm customers who need credit.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Monitoring plan",
     "purpose": "Define what will be monitored for an AI system, how often, by whom and with what response.",
     "columns": [
      "Metric",
      "Data source",
      "Frequency",
      "Threshold",
      "Owner",
      "Action when breached"
     ],
     "example": [
      [
       "Recall on confirmed fraud",
       "Case management outcomes",
       "Weekly",
       "Below 0.85 for 2 weeks",
       "Fraud model owner",
       "Root-cause review; retrain via change control"
      ],
      [
       "False positive rate gap by region",
       "Alerts and outcomes by district",
       "Monthly",
       "Gap above 3 percentage points",
       "AI governance office",
       "Escalate; fairness review within 10 days"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "For one AI system you know, what would be the first sign that it had started to fail, and who would notice? How long might it run unnoticed?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Data drift",
       "def": "A change in the distribution of input data compared with the data the model was trained or validated on."
      },
      {
       "term": "Concept drift",
       "def": "A change in the relationship between inputs and the outcome a model predicts."
      },
      {
       "term": "Population stability index (PSI)",
       "def": "A measure of how much a variable's distribution has shifted from a baseline."
      },
      {
       "term": "Change control",
       "def": "A process for assessing, testing, approving and recording changes to a system."
      },
      {
       "term": "Model version pinning",
       "def": "Fixing an application to a specific model version so it does not change without deliberate action."
      },
      {
       "term": "Rollback",
       "def": "Returning a system to a previous, known-good version."
      },
      {
       "term": "Monitoring threshold",
       "def": "A pre-agreed value of a metric that triggers review or action when crossed."
      },
      {
       "term": "Alert fatigue",
       "def": "Reduced responsiveness when monitoring produces so many alerts that real problems are missed."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Fraudsters adopt a new technique so old signals stop predicting fraud. This is:",
       "options": [
        "Data minimisation",
        "Pseudonymisation",
        "Prompt injection",
        "Concept drift"
       ],
       "answer": 3,
       "explain": "The relationship between inputs and outcome has changed."
      },
      {
       "q": "A PSI of 0.31 on a key feature usually indicates:",
       "options": [
        "No change at all",
        "A perfect model",
        "A significant shift needing investigation",
        "An encryption failure"
       ],
       "answer": 2,
       "explain": "Above 0.25 is commonly treated as significant."
      },
      {
       "q": "Which change should go back through intake and impact assessment?",
       "options": [
        "Using the model for a new population or purpose",
        "Routine retraining with unchanged design",
        "Fixing a typo in a dashboard",
        "Rotating an API key"
       ],
       "answer": 0,
       "explain": "A change in purpose or population can change risk and legal role."
      },
      {
       "q": "Why pair model metrics with complaints and appeals?",
       "options": [
        "Complaints replace all metrics",
        "Real-world outcomes can worsen while model metrics look healthy",
        "Model metrics are illegal",
        "Appeals are always wrong"
       ],
       "answer": 1,
       "explain": "Outcome signals catch problems metrics miss."
      },
      {
       "q": "What is the best defence against silent vendor model updates?",
       "options": [
        "Version pinning, notice clauses and regression testing before switching",
        "Trusting the vendor",
        "Turning off monitoring",
        "Using shorter prompts"
       ],
       "answer": 0,
       "explain": "Contractual and technical controls make changes deliberate."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l2",
   "title": "Generative-AI Policy and Acceptable Use",
   "subtitle": "Rules that let people use generative AI productively and safely",
   "minutes": 35,
   "objectives": [
    "Structure a generative-AI acceptable-use policy",
    "Define which data may be used with which tools",
    "Set rules for human review, disclosure and prohibited uses",
    "Plan AI literacy so the policy is understood and followed"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Generative AI is the first AI technology that almost every employee uses directly. That makes an **acceptable-use policy** one of the most visible governance documents in the organisation. A good one is short, specific and enabling: it tells people which tools they may use, with which data, for which tasks, and what they must check before relying on or sharing the output."
    },
    {
     "type": "framework",
     "title": "Elements of a generative-AI acceptable-use policy",
     "items": [
      {
       "label": "U1",
       "title": "Approved tools",
       "text": "List of approved tools and how to request new ones; personal accounts not used for work data."
      },
      {
       "label": "U2",
       "title": "Data rules",
       "text": "Which classes of data may be entered into which tools."
      },
      {
       "label": "U3",
       "title": "Permitted and prohibited uses",
       "text": "Clear examples of encouraged, restricted and banned uses."
      },
      {
       "label": "U4",
       "title": "Human review",
       "text": "Outputs checked by a competent person before use, in proportion to impact."
      },
      {
       "label": "U5",
       "title": "Disclosure and labelling",
       "text": "When to tell customers, colleagues or the public that content is AI-generated."
      },
      {
       "label": "U6",
       "title": "Intellectual property",
       "text": "Rules on copyrighted inputs, code licences and ownership of outputs."
      },
      {
       "label": "U7",
       "title": "Accountability",
       "text": "The person using AI remains responsible for the work product."
      },
      {
       "label": "U8",
       "title": "Reporting",
       "text": "How to report errors, harmful outputs or suspected data leaks."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Data class",
      "Public chat assistant (personal account)",
      "Approved enterprise assistant",
      "Internal assistant on company data"
     ],
     "rows": [
      [
       "Public information",
       "Allowed",
       "Allowed",
       "Allowed"
      ],
      [
       "Internal (non-confidential)",
       "Not allowed",
       "Allowed",
       "Allowed"
      ],
      [
       "Confidential business data",
       "Not allowed",
       "Allowed with care",
       "Allowed per permissions"
      ],
      [
       "Customer personal data",
       "Not allowed",
       "Only for approved use cases",
       "Only for approved use cases"
      ],
      [
       "Sensitive personal data (health, biometrics)",
       "Not allowed",
       "Not allowed unless specifically approved",
       "Only for specifically approved use cases"
      ],
      [
       "Secrets (passwords, keys, source code under restriction)",
       "Never",
       "Never",
       "Never"
      ]
     ],
     "title": "Data and tool matrix (example)"
    },
    {
     "type": "compare",
     "title": "Encouraged, restricted and prohibited uses (example)",
     "columns": [
      {
       "title": "Encouraged",
       "items": [
        "Drafting and editing internal documents",
        "Summarising public research",
        "Brainstorming and translation of non-confidential text",
        "Coding help on non-restricted code"
       ]
      },
      {
       "title": "Restricted (approval or review needed)",
       "items": [
        "Customer-facing content",
        "Analysis of personal data",
        "Decisions about employees or customers",
        "Legal, medical or financial advice"
       ]
      },
      {
       "title": "Prohibited",
       "items": [
        "Generating deceptive deepfakes of real people",
        "Entering secrets or credentials",
        "Uses that breach law or the prohibited-practices list",
        "Bypassing safety controls"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "'The AI wrote it' is never a defence. If a lawyer files a brief with invented cases, a doctor signs an AI-drafted report with an error, or a marketer publishes infringing images, the person and the organisation remain responsible. Courts in several countries have sanctioned lawyers for citing non-existent cases generated by AI.",
     "title": "Accountability does not move to the tool"
    },
    {
     "type": "keypoints",
     "items": [
      "**Low impact** (internal drafts): author reads and edits before sharing.",
      "**Medium impact** (external communications): author verifies facts, figures and tone; manager review for sensitive topics.",
      "**High impact** (advice, decisions, regulated content): qualified professional verifies against sources; record that review took place.",
      "Never rely on AI output for facts, citations, figures or legal or medical statements without checking the source."
     ],
     "title": "Human review in proportion to impact"
    },
    {
     "type": "steps",
     "title": "Rolling out the policy with AI literacy",
     "items": [
      {
       "title": "Explain why",
       "text": "Short sessions on what generative AI is, how it fails and why the rules exist."
      },
      {
       "title": "Role-based training",
       "text": "Extra modules for lawyers, clinicians, engineers, HR and customer-facing staff."
      },
      {
       "title": "Provide good tools",
       "text": "Approved tools that are as easy as public ones remove the reason to break rules."
      },
      {
       "title": "Share examples",
       "text": "A library of good prompts and real near-misses."
      },
      {
       "title": "Make reporting easy",
       "text": "A simple channel for questions, errors and incidents, with no blame for honest reports."
      },
      {
       "title": "Measure and refresh",
       "text": "Track training completion, approved-tool usage and incidents; update the policy every six to twelve months."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "The knowledge and skills that let people use AI in an informed way and understand its opportunities, risks and possible harms. The EU AI Act has required providers and deployers to take measures to ensure sufficient AI literacy of their staff since February 2025; it is good practice everywhere.",
     "title": "AI literacy"
    },
    {
     "type": "scenario",
     "title": "A lawyer's shortcut",
     "situation": "A junior associate at a Dhaka law firm uses an approved enterprise assistant to draft a court submission and includes three case citations from the output without checking them. A senior partner notices one citation looks unfamiliar. What should the firm do?",
     "options": [
      {
       "text": "Submit as drafted, because the tool is approved.",
       "feedback": "Approval of the tool does not guarantee accuracy. Unchecked citations can be fabricated.",
       "best": false
      },
      {
       "text": "Verify every citation against authoritative sources before filing, correct the submission, and reinforce the rule that legal authorities must always be checked, with no-blame learning for the associate.",
       "feedback": "Best. It prevents harm to the client and court, applies the human-review rule and turns a near-miss into learning.",
       "best": true
      },
      {
       "text": "Ban the associate from using AI permanently.",
       "feedback": "Punishment without addressing the training and process gap will not prevent recurrence and may drive hidden use.",
       "best": false
      },
      {
       "text": "Ask the assistant whether the citations are real.",
       "feedback": "The tool may confidently confirm its own fabrication. Verification must use authoritative sources.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Generative-AI use-case register (team level)",
     "purpose": "Record approved team uses of generative AI and the conditions that apply.",
     "columns": [
      "Team and use case",
      "Tool",
      "Data allowed",
      "Review required",
      "Disclosure",
      "Approved by"
     ],
     "example": [
      [
       "Customer service: draft email replies",
       "Enterprise assistant",
       "Customer name and complaint text",
       "Agent reviews and edits every reply",
       "Not required for agent-sent emails; chatbot replies labelled",
       "Head of Customer Service"
      ],
      [
       "Marketing: social media images",
       "Approved image generator",
       "Public brand assets only",
       "Brand manager approves",
       "Label synthetic images showing people",
       "Head of Marketing"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Write the three rules from a generative-AI policy that you think would prevent the most harm in your organisation. Are they currently written down, and do people follow them?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Acceptable-use policy",
       "def": "Rules stating how employees may and may not use a technology, such as generative AI."
      },
      {
       "term": "Approved tool",
       "def": "A generative-AI tool assessed and authorised for work use under defined conditions."
      },
      {
       "term": "Data classification",
       "def": "A scheme that labels data by sensitivity, such as public, internal, confidential and restricted."
      },
      {
       "term": "Human review",
       "def": "Checking AI output by a competent person before it is relied on or shared."
      },
      {
       "term": "AI-generated content label",
       "def": "A notice or mark indicating that content was created or altered by AI."
      },
      {
       "term": "Near-miss",
       "def": "An event that could have caused harm but was caught in time; valuable for learning."
      },
      {
       "term": "Prompt hygiene",
       "def": "Practices for writing prompts that exclude unnecessary sensitive data and give clear, checkable instructions."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which data should never be entered into any generative-AI tool?",
       "options": [
        "Public press releases",
        "Internal meeting agendas",
        "Passwords, keys and other secrets",
        "Published research"
       ],
       "answer": 2,
       "explain": "Secrets must never be placed in prompts, whatever the tool."
      },
      {
       "q": "Who is responsible for a report drafted with AI and sent to a client?",
       "options": [
        "The person who sent it and their organisation",
        "The AI vendor alone",
        "Nobody",
        "The model itself"
       ],
       "answer": 0,
       "explain": "Accountability stays with the human user and organisation."
      },
      {
       "q": "Why provide approved tools that are easy to use?",
       "options": [
        "To increase licence costs",
        "Good approved tools remove the reason to use unapproved ones",
        "To avoid training",
        "Because personal accounts are faster"
       ],
       "answer": 1,
       "explain": "Usability is a control against shadow AI."
      },
      {
       "q": "Since when has the EU AI Act required measures for staff AI literacy?",
       "options": [
        "January 2030",
        "It never has",
        "Only from 2028",
        "February 2025"
       ],
       "answer": 3,
       "explain": "The AI literacy duty applied from 2 February 2025."
      },
      {
       "q": "What is the correct way to check an AI-generated legal citation?",
       "options": [
        "Ask the same assistant",
        "Check that it is formatted correctly",
        "Look it up in an authoritative legal source",
        "Assume it is right if the tool is approved"
       ],
       "answer": 2,
       "explain": "Only authoritative sources confirm whether a citation exists and says what is claimed."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l3",
   "title": "Third-Party and Procurement Risk",
   "subtitle": "Buying AI safely: due diligence, contracts and ongoing oversight of suppliers",
   "minutes": 35,
   "objectives": [
    "Identify AI-specific risks in buying products, APIs and models",
    "Run proportionate due diligence on AI suppliers",
    "Negotiate contract terms that protect the organisation and the people affected",
    "Monitor suppliers through the life of the contract"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most organisations will buy far more AI than they build. Every purchase brings the supplier's design choices, data practices and weaknesses into your operations, while accountability to customers and regulators stays with you. **Third-party AI risk management** extends normal vendor management with questions about models, data, testing and change, and it starts before the contract is signed."
    },
    {
     "type": "table",
     "head": [
      "Risk",
      "Example",
      "Control"
     ],
     "rows": [
      [
       "Opaque model and data",
       "Vendor cannot say what data trained the model",
       "Documentation requirements, model and system cards"
      ],
      [
       "Use of your data",
       "Prompts or customer data used to train vendor models",
       "Contractual prohibition and technical opt-out"
      ],
      [
       "Unannounced change",
       "Model updated; behaviour shifts",
       "Change notification, version pinning, regression testing"
      ],
      [
       "Fourth parties",
       "Vendor relies on another company's foundation model",
       "Disclosure of sub-processors and model providers"
      ],
      [
       "Concentration",
       "Many critical processes depend on one model provider",
       "Exit plans, multi-provider architecture"
      ],
      [
       "Intellectual property",
       "Outputs infringe third-party rights",
       "IP warranties and indemnity, output filters"
      ],
      [
       "Regulatory role confusion",
       "Unclear who is provider and who is deployer",
       "Contract allocates roles and compliance duties"
      ]
     ],
     "title": "AI-specific supplier risks"
    },
    {
     "type": "flow",
     "title": "AI procurement process",
     "items": [
      {
       "label": "Need",
       "text": "Business case and intake tier"
      },
      {
       "label": "Market scan",
       "text": "Shortlist, including open-weight options"
      },
      {
       "label": "Due diligence",
       "text": "Questionnaire, evidence, demos, testing"
      },
      {
       "label": "Local testing",
       "text": "Pilot on own data and population"
      },
      {
       "label": "Contract",
       "text": "AI-specific clauses negotiated"
      },
      {
       "label": "Onboard",
       "text": "Inventory, monitoring, owner assigned"
      },
      {
       "label": "Oversee",
       "text": "Reviews, renewals, exit"
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "What is the intended purpose, and which uses are out of scope?",
      "Which models are used, who provides them and where are they hosted?",
      "What data trained the model, and do you have rights to it?",
      "How was the system tested for accuracy, bias and robustness, and can we see results by group?",
      "Will our data be used to train or improve your models?",
      "How do you notify customers of model changes, and can we pin versions?",
      "What security testing and certifications do you hold, and what is their scope?",
      "How do you handle and notify incidents?",
      "What support do you provide for explanations, logs and individuals' rights?",
      "How do you help us meet our legal obligations, such as under the EU AI Act?"
     ],
     "title": "Core due-diligence questions"
    },
    {
     "type": "table",
     "head": [
      "Clause",
      "Purpose"
     ],
     "rows": [
      [
       "Data use and confidentiality",
       "Prohibit use of customer data for training without explicit agreement; define retention and deletion"
      ],
      [
       "Documentation and transparency",
       "Deliver model cards, instructions for use and evidence needed for compliance"
      ],
      [
       "Change notification",
       "Advance notice of material model or data changes; right to test before switching"
      ],
      [
       "Performance and fairness warranties",
       "Commit to agreed metrics, including by group, with remedies"
      ],
      [
       "Audit and information rights",
       "Allow assessments, questionnaires or independent audit reports"
      ],
      [
       "Incident notification",
       "Notify within a defined period and cooperate in investigations"
      ],
      [
       "Intellectual property",
       "Warranties and indemnity for infringement by the system or its outputs"
      ],
      [
       "Regulatory roles and cooperation",
       "Allocate provider and deployer duties; support regulator requests"
      ],
      [
       "Exit and transition",
       "Data return, deletion certificates, transition help"
      ]
     ],
     "title": "Key AI contract clauses"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Downloading an open-weight model avoids an API contract but not supplier risk. Check the licence (some restrict commercial use or certain applications), the documentation, known vulnerabilities and the provenance of the files, and remember that you take on more of the provider-style responsibilities when you deploy and modify it.",
     "title": "Open-weight models are third-party risk too"
    },
    {
     "type": "template",
     "title": "AI supplier due-diligence summary",
     "purpose": "Summarise due diligence on an AI supplier for the approval decision.",
     "columns": [
      "Supplier and product",
      "Use case and tier",
      "Key evidence received",
      "Gaps found",
      "Contract mitigations",
      "Decision"
     ],
     "example": [
      [
       "HR-tech vendor: CV screening",
       "Shortlisting graduates; high",
       "Model card, ISO/IEC 27001 certificate, security test summary",
       "No group-level results; no change notice; vendor trains on client data",
       "Group results and annual bias audit as deliverables; 60-day change notice; no training on our data",
       "Approve after local bias test passes"
      ]
     ],
     "rows": 6
    },
    {
     "type": "case",
     "title": "The call-centre analytics contract",
     "context": "A Bangladeshi telecom operator is buying a cloud service that transcribes customer calls in Bangla and English, scores agent performance and flags 'at-risk' customers for retention offers. The vendor's standard contract allows it to use recordings to improve its models, gives 7 days' notice of changes and limits its liability to one month's fees. The vendor relies on a foundation model from another company.",
     "questions": [
      "Which risks are most significant?",
      "Which contract changes would you negotiate?",
      "What would you check before go-live?"
     ],
     "answer": "Significant risks: customer voice data (personal and possibly sensitive) used for vendor training; cross-border processing; unfair agent performance scoring affecting jobs (worker monitoring, possibly high-risk in some jurisdictions); customer profiling for offers; transcription accuracy gaps for dialects; dependency on an undisclosed fourth-party model; and weak remedies. Negotiate: no training on recordings without explicit agreement; defined retention and deletion; disclosure of the foundation-model provider and hosting locations; at least 60 to 90 days' notice of material changes with the right to test; accuracy and fairness warranties by language and dialect; incident notification within 24 to 72 hours; audit rights; liability proportionate to risk; and exit support. Before go-live: local accuracy test across dialects, a bias test of agent scoring, worker consultation, privacy notices to customers, a DPIA, a monitoring plan and registration in the AI inventory."
    },
    {
     "type": "scenario",
     "title": "Renewal without review",
     "situation": "A three-year contract for an AI credit-decisioning platform is up for automatic renewal next month. Since signing, the vendor has changed its underlying model twice and moved hosting to another country. Nobody has reviewed the supplier since onboarding. What should the governance lead do?",
     "options": [
      {
       "text": "Let it renew; the platform still works.",
       "feedback": "Material changes since onboarding have not been assessed, and renewal is the moment of maximum leverage.",
       "best": false
      },
      {
       "text": "Trigger a renewal review: reassess due diligence for the model changes and hosting move, test current performance and fairness, and renegotiate gaps before renewing.",
       "feedback": "Best. It uses renewal as a control point to bring oversight up to date and fix gaps while leverage exists.",
       "best": true
      },
      {
       "text": "Cancel the contract immediately.",
       "feedback": "Cancelling a critical platform without analysis or transition planning could disrupt lending and harm customers.",
       "best": false
      },
      {
       "text": "Ask the vendor to confirm in an email that nothing important has changed.",
       "feedback": "Self-attestation without evidence is weak, especially after known material changes.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which AI supplier would hurt your organisation most if it failed, changed its model or misused your data tomorrow? What contractual or technical protection do you have today?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Third-party risk management",
       "def": "Identifying, assessing and controlling risks arising from suppliers and partners."
      },
      {
       "term": "Due diligence",
       "def": "Investigation of a supplier before contracting to assess its capability, controls and risks."
      },
      {
       "term": "Fourth party",
       "def": "A supplier's own supplier, such as the foundation-model provider behind an AI product."
      },
      {
       "term": "Concentration risk",
       "def": "Exposure from relying heavily on a single supplier or technology."
      },
      {
       "term": "Change notification clause",
       "def": "A contract term requiring advance notice of material changes to a product or service."
      },
      {
       "term": "Open-weight model",
       "def": "A model whose trained parameters are published for others to download and run, under a licence."
      },
      {
       "term": "Exit plan",
       "def": "A plan for moving away from a supplier, covering data, transition and continuity."
      },
      {
       "term": "Right to audit",
       "def": "A contract term allowing the customer, or an independent party, to assess the supplier's compliance."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A vendor's AI product relies on another company's foundation model. That company is a:",
       "options": [
        "Fourth party",
        "Deployer",
        "Data subject",
        "Regulator"
       ],
       "answer": 0,
       "explain": "A supplier's supplier is a fourth party, and its risks flow through to you."
      },
      {
       "q": "Which clause most directly prevents your customer data from improving a vendor's models?",
       "options": [
        "Exit clause",
        "Data use clause prohibiting training on customer data",
        "Payment terms",
        "Governing law"
       ],
       "answer": 1,
       "explain": "Data use terms control training on your data."
      },
      {
       "q": "Why is contract renewal an important control point?",
       "options": [
        "It is when the organisation has most leverage to fix gaps",
        "Renewals are legally required to be reviewed by regulators",
        "Vendors cannot change products before renewal",
        "Risks disappear after three years"
       ],
       "answer": 0,
       "explain": "Leverage peaks before renewal, so reassessment is most effective then."
      },
      {
       "q": "What is the main risk of relying on one model provider for many critical processes?",
       "options": [
        "Data minimisation",
        "Interpretability",
        "Concentration risk",
        "Overfitting"
       ],
       "answer": 2,
       "explain": "Failure or change at one provider affects everything that depends on it."
      },
      {
       "q": "What should you check before deploying an open-weight model?",
       "options": [
        "Nothing, because it is free",
        "Only its download speed",
        "Only its popularity",
        "Licence terms, documentation, vulnerabilities and file provenance"
       ],
       "answer": 3,
       "explain": "Open-weight models carry supplier-type risks and licence conditions."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l4",
   "title": "AI Incident Management",
   "subtitle": "Detecting, containing, reporting and learning from AI failures",
   "minutes": 35,
   "objectives": [
    "Define AI incidents and classify their severity",
    "Run the AI incident response lifecycle from detection to lessons learned",
    "Identify legal reporting duties that may apply to AI incidents",
    "Prepare playbooks for common generative-AI incidents"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every organisation that uses AI will have AI incidents. The difference between a manageable event and a crisis is usually preparation: knowing what counts as an incident, who decides, how to stop harm quickly, who must be told and by when, and how to learn. AI incidents need the same discipline as security incidents, plus attention to harms that are not security breaches at all, such as discriminatory outcomes or dangerous advice."
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "An event in which the development, use or malfunction of an AI system results in, or could plausibly result in, harm to people, property, the environment, rights or the organisation. A **near-miss** is an event that could have caused harm but did not. Both should be recorded.",
     "title": "AI incident"
    },
    {
     "type": "table",
     "head": [
      "Level",
      "Description",
      "Example",
      "Response"
     ],
     "rows": [
      [
       "SEV1 Critical",
       "Serious harm to people or rights at scale, legal reporting likely, major public exposure",
       "Credit model wrongly refuses thousands; deepfake fraud succeeds",
       "Executive incident lead within 1 hour; consider pausing system"
      ],
      [
       "SEV2 High",
       "Material harm to some people or significant legal or reputational risk",
       "Chatbot gives dangerous health advice to several users",
       "Incident lead within 4 hours; containment same day"
      ],
      [
       "SEV3 Medium",
       "Limited harm, contained, no reporting expected",
       "Assistant reveals internal-only document to staff",
       "Owner investigates within 2 working days"
      ],
      [
       "SEV4 Low",
       "Near-miss or minor quality issue",
       "Reviewer catches fabricated citation",
       "Log, learn, trend"
      ]
     ],
     "title": "Severity levels (example)"
    },
    {
     "type": "flow",
     "title": "AI incident response lifecycle",
     "items": [
      {
       "label": "Detect",
       "text": "Monitoring alert, complaint, staff report, media"
      },
      {
       "label": "Triage",
       "text": "Confirm, classify severity, appoint lead"
      },
      {
       "label": "Contain",
       "text": "Pause feature, roll back, block inputs, human takeover"
      },
      {
       "label": "Investigate",
       "text": "Logs, data, model version, root cause"
      },
      {
       "label": "Notify",
       "text": "Regulators, affected people, partners, as required"
      },
      {
       "label": "Remediate",
       "text": "Fix system, correct decisions, compensate"
      },
      {
       "label": "Learn",
       "text": "Post-incident review; update controls and tests"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Regime",
      "Trigger",
      "Timing (simplified)"
     ],
     "rows": [
      [
       "EU AI Act: providers of high-risk systems",
       "Serious incident linked to the system",
       "Immediately after establishing a likely link, and no later than 15 days; 2 days for widespread infringements or critical-infrastructure disruption; 10 days in case of death"
      ],
      [
       "EU AI Act: deployers",
       "Serious incident identified by deployer",
       "Inform the provider immediately, then importer or distributor and authorities"
      ],
      [
       "GDPR and similar data laws",
       "Personal data breach, including via AI",
       "Regulator within 72 hours where required; individuals without undue delay if high risk"
      ],
      [
       "India's DPDP Act and Rules",
       "Personal data breach",
       "Notify the Data Protection Board and affected individuals as the Rules prescribe"
      ],
      [
       "Sector regulators",
       "Operational incidents in banking, telecoms, health",
       "As set by the regulator, often within hours for critical incidents"
      ],
      [
       "Contracts",
       "Incidents affecting customers or partners",
       "As agreed, often 24 to 72 hours"
      ]
     ],
     "title": "Reporting duties that may apply (summarised, as of 2026)"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Reporting deadlines can start when you become aware of an incident, not when you finish investigating. Map every applicable duty for each high-risk system in advance, with the contact point and template, so the incident team does not lose days working it out. This summary is not legal advice; confirm duties with counsel.",
     "title": "Check the clock before you need it"
    },
    {
     "type": "framework",
     "title": "Playbooks for common generative-AI incidents",
     "items": [
      {
       "label": "PB1",
       "title": "Data leakage",
       "text": "Disable the leaking feature or source, identify exposed data and users, assess breach-notification duties, fix permissions."
      },
      {
       "label": "PB2",
       "title": "Harmful or dangerous output",
       "text": "Block the pattern, contact affected users where possible, review guardrails, add to red-team suite."
      },
      {
       "label": "PB3",
       "title": "Prompt injection or jailbreak",
       "text": "Contain tool permissions, review logs for actions taken, patch input handling, retest."
      },
      {
       "label": "PB4",
       "title": "Fabricated information relied upon",
       "text": "Correct the record with affected parties, review human-review controls, strengthen grounding."
      },
      {
       "label": "PB5",
       "title": "Deepfake impersonation",
       "text": "Verify through independent channels, stop transactions, warn staff and customers, report fraud, issue clarifications."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "An accountant at a Chattogram exporter receives a video call from someone who looks and sounds like the managing director, urgently requesting a supplier payment. Because the company's playbook requires call-back verification on a known number for any unusual payment, the accountant calls the director, who knows nothing about it. The near-miss is logged, staff are alerted and the bank is informed.",
     "title": "A deepfake call to a finance team"
    },
    {
     "type": "scenario",
     "title": "The weekend discovery",
     "situation": "On a Saturday, a customer posts on social media that a bank's AI chatbot showed her another customer's account balance. The post is gaining attention. The chatbot product owner is on leave. What should happen FIRST?",
     "options": [
      {
       "text": "Wait until Monday when the product owner returns.",
       "feedback": "A possible personal data leak with public exposure needs immediate action; reporting clocks may already be running.",
       "best": false
      },
      {
       "text": "Activate the incident process: the on-call lead classifies it as high severity, disables the affected feature, preserves logs and engages privacy and communications teams to assess notification duties.",
       "feedback": "Best. It contains harm, preserves evidence and starts the legal assessment promptly, regardless of who is on leave.",
       "best": true
      },
      {
       "text": "Delete the social media post's screenshot from internal systems.",
       "feedback": "Destroying evidence harms the investigation and may breach obligations.",
       "best": false
      },
      {
       "text": "Publicly deny the issue until the investigation is complete.",
       "feedback": "Denying before facts are known can mislead the public and regulators and damage trust further.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "AI incident record",
     "purpose": "Capture the facts and decisions for each AI incident or near-miss.",
     "columns": [
      "Incident ID and date",
      "System and version",
      "What happened and who was affected",
      "Severity",
      "Containment and remediation",
      "Notifications made",
      "Root cause and lessons"
     ],
     "example": [
      [
       "AI-2026-014, 7 Jun 2026",
       "Support chatbot v3.4",
       "Displayed another customer's balance to 3 users after a retrieval change",
       "SEV2",
       "Feature disabled in 40 minutes; retrieval permissions fixed; affected customers contacted",
       "Data protection regulator within statutory time; bank's board risk committee",
       "Change released without permission regression test; test added to release gate"
      ]
     ],
     "rows": 6
    },
    {
     "type": "checklist",
     "title": "AI incident readiness checklist",
     "items": [
      "AI incident definition and severity levels agreed",
      "AI incidents included in the enterprise incident process",
      "On-call incident lead and deputies named",
      "Kill switch or rollback tested for each high-risk system",
      "Logs retained and accessible for investigation",
      "Reporting duties mapped per system and jurisdiction",
      "Playbooks for common generative-AI incidents written and rehearsed",
      "Post-incident reviews feed tests, controls and training"
     ]
    },
    {
     "type": "reflection",
     "prompt": "If your highest-risk AI system caused serious harm on a Friday night, who would be called, how would the system be stopped and which authority would need to be told by when?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "AI incident",
       "def": "An event in which an AI system's development, use or malfunction results in, or could plausibly result in, harm."
      },
      {
       "term": "Severity level",
       "def": "A classification of an incident's seriousness that sets the speed and level of response."
      },
      {
       "term": "Containment",
       "def": "Actions that stop or limit the spread of harm during an incident."
      },
      {
       "term": "Root cause analysis",
       "def": "Investigation to find the underlying causes of an incident, not just its symptoms."
      },
      {
       "term": "Post-incident review",
       "def": "A structured, blame-free review after an incident to identify lessons and improvements."
      },
      {
       "term": "Playbook",
       "def": "A pre-written set of steps for responding to a specific type of incident."
      },
      {
       "term": "Notification duty",
       "def": "A legal or contractual obligation to inform regulators, individuals or partners about an incident within a set time."
      },
      {
       "term": "Call-back verification",
       "def": "Confirming an unusual request by contacting the requester through a known, independent channel."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A reviewer catches a fabricated citation before a document is sent. This should be:",
       "options": [
        "Recorded as a near-miss for learning",
        "Ignored because no harm occurred",
        "Reported to the police",
        "Treated as a SEV1 incident"
       ],
       "answer": 0,
       "explain": "Near-misses reveal weaknesses before they cause harm."
      },
      {
       "q": "Under the EU AI Act, what is the outer limit for a provider to report most serious incidents?",
       "options": [
        "One year",
        "15 days after becoming aware",
        "No limit",
        "90 days"
       ],
       "answer": 1,
       "explain": "The general deadline is 15 days, with shorter limits for the most serious cases."
      },
      {
       "q": "Which step comes first after confirming a serious AI incident?",
       "options": [
        "Writing the annual report",
        "Retraining the model on new data",
        "Publishing a press release blaming the vendor",
        "Containment to stop further harm"
       ],
       "answer": 3,
       "explain": "Containment limits harm while investigation proceeds."
      },
      {
       "q": "Why map reporting duties before incidents happen?",
       "options": [
        "Regulators require maps to be published",
        "Maps replace containment",
        "Deadlines may start on awareness, leaving little time to research during a crisis",
        "Duties never change"
       ],
       "answer": 2,
       "explain": "Preparation avoids missing short statutory deadlines."
      },
      {
       "q": "What is the best control against deepfake payment fraud?",
       "options": [
        "Call-back verification through a known independent channel",
        "Better video quality",
        "Longer meetings",
        "Faster payment processing"
       ],
       "answer": 0,
       "explain": "Independent verification defeats convincing impersonation."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m8",
 "order": 8,
 "code": "Assurance",
 "title": "Audit, Assurance and the AI Governance Programme",
 "subtitle": "Prove that governance works, organise it well and report it to the board",
 "outcomes": [
  "Plan and evaluate AI audits and other forms of AI assurance",
  "Design an AI governance operating model with clear roles, forums and decision rights",
  "Report AI value, risk and control health to the board with balanced metrics",
  "Assess programme maturity by layer and drive continuous improvement",
  "Integrate all eight layers of the ZAIG Stack into one working programme"
 ],
 "lessons": [
  {
   "id": "m8-l1",
   "title": "AI Audit and Assurance",
   "subtitle": "Independent evidence that AI governance works as claimed",
   "minutes": 35,
   "objectives": [
    "Explain the three lines model and where AI assurance fits",
    "Compare internal audit, external audit, certification, bias audits and conformity assessment",
    "Plan an AI audit with clear criteria, evidence and testing"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Leaders, regulators, customers and the public increasingly ask the same question: **how do you know your AI governance actually works?** Assurance answers it with independent, evidence-based conclusions. It does not replace good management; it tests it. A programme that cannot be audited is a programme that cannot be trusted."
    },
    {
     "type": "layers",
     "title": "The three lines model applied to AI (top layer first)",
     "items": [
      {
       "label": "Governing body",
       "parts": [
        "Board sets AI risk appetite and oversees the programme",
        "Receives independent assurance"
       ]
      },
      {
       "label": "Third line: internal audit",
       "parts": [
        "Independent assurance on AI governance, risk and controls",
        "Reports to the board or audit committee"
       ]
      },
      {
       "label": "Second line: risk, compliance, privacy, AI governance office",
       "parts": [
        "Sets policy and standards, challenges first line, monitors risk"
       ]
      },
      {
       "label": "First line: business and technical owners",
       "parts": [
        "Own AI systems and their risks",
        "Operate controls day to day"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Type",
      "Who performs it",
      "What it concludes",
      "Example"
     ],
     "rows": [
      [
       "Second-line review",
       "AI governance office, model risk, compliance",
       "Whether first-line controls meet policy",
       "Quarterly review of high-risk model monitoring"
      ],
      [
       "Internal audit",
       "Internal audit function",
       "Whether governance and controls are designed and operating effectively",
       "Audit of the AI use-case intake and inventory process"
      ],
      [
       "External audit or assurance engagement",
       "Independent firm",
       "An opinion against defined criteria",
       "Assurance report on AI controls for a client"
      ],
      [
       "Certification",
       "Accredited certification body",
       "Conformity of a management system with a standard",
       "ISO/IEC 42001 certification"
      ],
      [
       "Bias audit",
       "Independent auditor",
       "Selection-rate or impact differences for a tool",
       "Bias audits of automated hiring tools required in New York City"
      ],
      [
       "Conformity assessment",
       "Provider, or a notified body where required",
       "Conformity of a high-risk system with EU AI Act requirements",
       "Technical documentation reviewed before CE marking"
      ]
     ],
     "title": "Types of AI assurance"
    },
    {
     "type": "flow",
     "title": "Planning and performing an AI audit",
     "items": [
      {
       "label": "Scope",
       "text": "Systems, processes, period, entities"
      },
      {
       "label": "Criteria",
       "text": "Policy, law, standards, frameworks"
      },
      {
       "label": "Risk assessment",
       "text": "Focus on high-risk areas"
      },
      {
       "label": "Evidence",
       "text": "Documents, logs, interviews, re-performance"
      },
      {
       "label": "Testing",
       "text": "Design and operating effectiveness"
      },
      {
       "label": "Report",
       "text": "Findings, ratings, owners, dates"
      },
      {
       "label": "Follow-up",
       "text": "Verify remediation"
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "The organisation's own AI policy, standards and risk appetite.",
      "Applicable law, such as the EU AI Act or data protection law.",
      "Management system standards, such as ISO/IEC 42001.",
      "Frameworks, such as the NIST AI RMF, used as reference good practice.",
      "Sector regulator expectations, such as banking model-risk guidance.",
      "Contract commitments to customers."
     ],
     "title": "Sources of audit criteria"
    },
    {
     "type": "table",
     "head": [
      "Control",
      "Evidence an auditor would seek",
      "Test"
     ],
     "rows": [
      [
       "AI inventory complete",
       "Inventory, procurement and expense data, network logs",
       "Reconcile purchases and traffic to inventory entries"
      ],
      [
       "Impact assessment before launch",
       "Signed assessments with dates, gate records",
       "Sample high-tier systems; compare assessment and launch dates"
      ],
      [
       "Bias testing at release",
       "Bias reports, thresholds, approvals",
       "Re-perform a calculation on a sample of data"
      ],
      [
       "Human oversight effective",
       "Override rates, review times, training records",
       "Observe reviews; insert seeded cases"
      ],
      [
       "Monitoring and response",
       "Dashboards, alerts, tickets",
       "Trace alerts to actions and closure"
      ],
      [
       "Supplier oversight",
       "Due diligence files, contract clauses, review records",
       "Check high-risk suppliers against policy requirements"
      ]
     ],
     "title": "Evidence for common AI controls"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Auditors must be able to question data scientists, read model documentation, understand metrics and recognise when a test set is unrepresentative. Build skills through training, co-sourcing specialists and pairing auditors with independent technical experts. Independence still matters: experts who built a system should not audit it.",
     "title": "Auditing AI needs new skills"
    },
    {
     "type": "case",
     "title": "Auditing the intake process",
     "context": "Internal audit at a Dhaka-based mobile financial services provider audits the AI intake and inventory process one year after launch. The inventory lists 31 systems. Auditors reconcile software purchases, cloud invoices and network traffic to AI services and find 12 more AI uses, including two that influence customer credit limits. Of the 9 high-tier systems in the inventory, 6 have impact assessments dated before launch, 2 dated after launch and 1 missing.",
     "questions": [
      "What are the main findings?",
      "How should they be rated?",
      "What actions should management take?"
     ],
     "answer": "Main findings: the inventory is incomplete (12 unregistered uses, 2 with high-impact credit effects), and the impact-assessment control is not operating effectively for high-tier systems (3 of 9 non-compliant). Both should be rated high, because unassessed credit-affecting AI can harm customers and breach regulatory expectations. Actions: register and tier the 12 systems within 30 days with urgent assessment of the 2 credit uses and interim safeguards; complete the missing assessment; investigate why assessments were late; make inventory registration a condition of procurement and cloud access; add automated discovery of AI service traffic; and report progress to the audit committee until verified by follow-up audit."
    },
    {
     "type": "scenario",
     "title": "The audit scope request",
     "situation": "The head of data science asks internal audit to limit its AI audit to model accuracy, saying governance processes are 'just paperwork'. What should the chief audit executive do?",
     "options": [
      {
       "text": "Agree, because data scientists know the models best.",
       "feedback": "Audit scope is set independently based on risk; limiting it to accuracy would miss governance failures that cause most harm.",
       "best": false
      },
      {
       "text": "Set scope based on risk, covering governance, intake, assessments, fairness, oversight, monitoring and suppliers, while drawing on data-science expertise for technical testing.",
       "feedback": "Best. Independence and risk-based scoping are core audit principles; technical expertise supports but does not set scope.",
       "best": true
      },
      {
       "text": "Cancel the audit to avoid conflict.",
       "feedback": "Avoiding audit because of resistance undermines the third line's role.",
       "best": false
      },
      {
       "text": "Let the vendor audit its own models instead.",
       "feedback": "Self-assessment by a vendor is not independent assurance for the organisation.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "AI audit finding",
     "purpose": "Record an audit finding in a consistent, actionable format.",
     "columns": [
      "Finding",
      "Criteria",
      "Condition found",
      "Risk and impact",
      "Rating",
      "Management action and owner",
      "Due date"
     ],
     "example": [
      [
       "Impact assessments not completed before launch",
       "AI policy section 6: high-tier systems require approved assessment before go-live",
       "3 of 9 high-tier systems launched without timely assessment",
       "Unassessed harm to customers; regulatory breach",
       "High",
       "Gate made system-enforced in deployment pipeline; Head of AI Governance",
       "30 Sep 2026"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "If an independent auditor examined your organisation's AI governance next month, which control would they most likely find not operating as described? What evidence would they ask for?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Assurance",
       "def": "An independent, evidence-based conclusion about whether something meets defined criteria."
      },
      {
       "term": "Three lines model",
       "def": "A model distinguishing first-line management, second-line risk and compliance functions, and third-line internal audit, under a governing body."
      },
      {
       "term": "Audit criteria",
       "def": "The requirements, such as policies, laws or standards, against which evidence is assessed."
      },
      {
       "term": "Design effectiveness",
       "def": "Whether a control, as designed, would address the risk if operated correctly."
      },
      {
       "term": "Operating effectiveness",
       "def": "Whether a control actually operated as designed throughout the period."
      },
      {
       "term": "Re-performance",
       "def": "An audit technique in which the auditor repeats a control or calculation to verify it."
      },
      {
       "term": "Bias audit",
       "def": "An independent assessment of whether an AI tool produces different outcomes for different groups."
      },
      {
       "term": "Co-sourcing",
       "def": "Supplementing an internal audit team with external specialists while keeping ownership of the audit."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In the three lines model, who provides independent assurance to the board?",
       "options": [
        "Model developers",
        "The AI vendor",
        "Internal audit",
        "The marketing team"
       ],
       "answer": 2,
       "explain": "Internal audit is the third line, independent of management."
      },
      {
       "q": "An auditor recalculates a disparate impact ratio from raw data. This technique is:",
       "options": [
        "Inquiry only",
        "Observation of a meeting",
        "Management representation",
        "Re-performance"
       ],
       "answer": 3,
       "explain": "Re-performance verifies the control by repeating it."
      },
      {
       "q": "What does ISO/IEC 42001 certification conclude?",
       "options": [
        "A management system conforms to the standard within scope",
        "Each model is accurate",
        "The organisation can ignore law",
        "All suppliers are compliant"
       ],
       "answer": 0,
       "explain": "Certification addresses the management system, not every model's quality or legality."
      },
      {
       "q": "A control is well designed but often skipped. It lacks:",
       "options": [
        "Design effectiveness",
        "Operating effectiveness",
        "Documentation only",
        "Independence"
       ],
       "answer": 1,
       "explain": "It would work if operated, but it is not operating consistently."
      },
      {
       "q": "Who should set the scope of an internal AI audit?",
       "options": [
        "The team being audited",
        "The vendor",
        "Whoever has the largest budget",
        "Internal audit, based on risk"
       ],
       "answer": 3,
       "explain": "Independent, risk-based scoping is fundamental to assurance."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l2",
   "title": "Building the AI Governance Programme",
   "subtitle": "Operating models, roles, committees and the first year",
   "minutes": 35,
   "objectives": [
    "Choose an AI governance operating model that fits the organisation",
    "Define roles, committees and decision rights",
    "Integrate AI governance with existing risk, privacy, security and procurement functions",
    "Plan the first 90 days and first year of a programme"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "All the layers of the ZAIG Stack must be brought together into a **programme**: people with clear roles, forums that make decisions, processes that connect, tools that support them and a plan that delivers. Few organisations can start from scratch. The fastest route usually builds on what already works, such as privacy, information security, model risk and procurement, and adds the AI-specific pieces."
    },
    {
     "type": "compare",
     "title": "AI governance operating models",
     "columns": [
      {
       "title": "Centralised",
       "items": [
        "One central team reviews and approves all AI",
        "Strong consistency and expertise",
        "Risk: bottleneck as AI use grows"
       ]
      },
      {
       "title": "Federated",
       "items": [
        "Business units govern their own AI under common policy",
        "Close to the work, scales well",
        "Risk: inconsistency and weak challenge"
       ]
      },
      {
       "title": "Hub and spoke",
       "items": [
        "Central hub sets policy, standards and tools; trained champions in each unit apply them",
        "Balances consistency and scale",
        "Most common choice for medium and large organisations"
       ]
      }
     ]
    },
    {
     "type": "framework",
     "title": "Key roles and forums",
     "items": [
      {
       "label": "BD",
       "title": "Board or board committee",
       "text": "Approves AI principles and risk appetite; oversees the programme; receives assurance."
      },
      {
       "label": "ES",
       "title": "Executive sponsor",
       "text": "A senior executive accountable for the programme and its resources."
      },
      {
       "label": "GC",
       "title": "AI governance committee",
       "text": "Cross-functional forum approving high-risk systems, policy exceptions and priorities."
      },
      {
       "label": "GO",
       "title": "AI governance office",
       "text": "Small central team running intake, inventory, standards, tools, training and reporting."
      },
      {
       "label": "SO",
       "title": "System owners",
       "text": "Business owners accountable for each AI system's outcomes and risks."
      },
      {
       "label": "CH",
       "title": "AI champions",
       "text": "Trained staff in each unit who guide colleagues and triage requests."
      },
      {
       "label": "EX",
       "title": "Expert functions",
       "text": "Privacy, security, legal, compliance, model risk, HR and procurement, each with defined AI duties."
      },
      {
       "label": "EA",
       "title": "Advisory voices",
       "text": "Ethics advisers or external panels, including affected-community perspectives, for difficult cases."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Whether the role is called Chief AI Officer, Head of Responsible AI or AI Governance Lead matters less than whether it is clear **who can approve, block, pause and retire AI systems**, and whether those people have the information and independence to do it.",
     "title": "Decision rights matter more than titles"
    },
    {
     "type": "table",
     "head": [
      "Function",
      "Existing process",
      "AI addition"
     ],
     "rows": [
      [
       "Privacy",
       "DPIAs, records of processing",
       "Integrated AI impact assessment module; AI in privacy notices"
      ],
      [
       "Information security",
       "Security risk assessments, testing",
       "AI threat modelling, red teaming, prompt-injection testing"
      ],
      [
       "Model risk (banks)",
       "Model inventory, validation",
       "Generative AI and vendor AI brought into scope"
      ],
      [
       "Procurement",
       "Vendor due diligence, contracts",
       "AI questionnaire and contract clauses"
      ],
      [
       "HR",
       "Workforce policies, consultation",
       "AI in hiring and monitoring; AI literacy training"
      ],
      [
       "Enterprise risk",
       "Risk register, appetite",
       "AI risk themes, tolerances and KRIs"
      ],
      [
       "Internal audit",
       "Audit plan",
       "Risk-based AI audits"
      ]
     ],
     "title": "Integrating with existing functions"
    },
    {
     "type": "template",
     "title": "AI governance committee charter (summary)",
     "purpose": "Define the purpose, membership and authority of the AI governance committee.",
     "columns": [
      "Element",
      "Content"
     ],
     "example": [
      [
       "Purpose",
       "Approve high-risk AI systems and policy exceptions; oversee AI risk; advise the executive and board"
      ],
      [
       "Membership",
       "Chief Risk Officer (chair), CTO, Chief Data Officer, General Counsel, DPO, CISO, HR Director, business heads; AI governance office as secretary"
      ],
      [
       "Decision rights",
       "Approve, approve with conditions, reject or pause high-tier systems; approve exceptions up to 6 months"
      ],
      [
       "Cadence and reporting",
       "Monthly; quarterly report to the board risk committee"
      ]
     ],
     "rows": 8
    },
    {
     "type": "steps",
     "title": "The first 90 days",
     "items": [
      {
       "title": "Secure sponsorship",
       "text": "Agree the executive sponsor, scope and initial budget."
      },
      {
       "title": "Find the AI",
       "text": "Run the inventory sprint and identify the highest-risk systems."
      },
      {
       "title": "Set the minimum rules",
       "text": "Issue interim principles, a generative-AI acceptable-use rule and a prohibited-uses list."
      },
      {
       "title": "Stand up the front door",
       "text": "Launch a simple intake with tiering."
      },
      {
       "title": "Tackle the top risks",
       "text": "Run impact assessments on the two or three highest-risk systems."
      },
      {
       "title": "Form the committee",
       "text": "Charter the AI governance committee and agree decision rights."
      },
      {
       "title": "Report",
       "text": "Give the board a first view of AI use, top risks and the programme plan."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Quarter",
      "Focus",
      "Key deliverables"
     ],
     "rows": [
      [
       "Q1",
       "Visibility and quick wins",
       "Inventory, interim policy, intake, generative-AI rules, top-risk assessments"
      ],
      [
       "Q2",
       "Policy and process",
       "Approved AI policy and standards, impact assessment template, supplier questionnaire, training launch"
      ],
      [
       "Q3",
       "Lifecycle controls",
       "Stage gates, model cards, bias testing standard, monitoring for high-risk systems, incident playbooks"
      ],
      [
       "Q4",
       "Assurance and maturity",
       "Metrics dashboard, first internal audit, maturity assessment, year-two plan, certification readiness review if relevant"
      ]
     ],
     "title": "Year-one roadmap (example)"
    },
    {
     "type": "scenario",
     "title": "Where to place the programme",
     "situation": "A large university group in South Asia is creating its AI governance programme. The IT director wants it inside IT; the registrar wants it in academic affairs; legal wants it in compliance. What is the BEST approach?",
     "options": [
      {
       "text": "Place it in IT, because AI is technology.",
       "feedback": "AI governance spans academic, legal, ethical and operational questions; placing it inside the technology delivery function weakens challenge.",
       "best": false
      },
      {
       "text": "Create a hub-and-spoke model with a small central office reporting to a senior executive outside IT delivery, a cross-functional committee and champions in faculties and departments.",
       "feedback": "Best. It gives independence, cross-functional input and reach into faculties where AI is used.",
       "best": true
      },
      {
       "text": "Let each faculty decide whether to govern AI.",
       "feedback": "Purely voluntary federation will produce inconsistency and gaps in high-risk areas such as admissions and assessment.",
       "best": false
      },
      {
       "text": "Postpone the decision until a national AI law is passed.",
       "feedback": "Waiting leaves current AI use ungoverned.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Who in your organisation can currently stop an AI system that is causing harm? If the answer is unclear, who should it be, and what information would they need?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Operating model",
       "def": "How governance responsibilities, people, processes and tools are organised across an organisation."
      },
      {
       "term": "Hub and spoke",
       "def": "An operating model with a central hub setting standards and distributed spokes applying them in business units."
      },
      {
       "term": "AI governance committee",
       "def": "A cross-functional forum with authority over high-risk AI approvals, exceptions and oversight."
      },
      {
       "term": "AI governance office",
       "def": "The central team that runs the day-to-day mechanics of AI governance."
      },
      {
       "term": "Executive sponsor",
       "def": "A senior leader accountable for the success and resourcing of the governance programme."
      },
      {
       "term": "AI champion",
       "def": "A trained staff member in a business unit who promotes and supports good AI governance locally."
      },
      {
       "term": "Decision rights",
       "def": "The defined authority of a role or body to approve, block, pause or retire AI systems."
      },
      {
       "term": "Committee charter",
       "def": "A document setting a committee's purpose, membership, authority and ways of working."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which operating model is most common for medium and large organisations?",
       "options": [
        "Fully centralised",
        "Hub and spoke",
        "Fully voluntary",
        "Vendor-led"
       ],
       "answer": 1,
       "explain": "It balances consistent standards with reach into business units."
      },
      {
       "q": "What matters most about a senior AI governance role?",
       "options": [
        "Clear decision rights to approve, block, pause and retire systems",
        "The exact job title",
        "The size of the office",
        "Reporting to IT delivery"
       ],
       "answer": 0,
       "explain": "Authority and information enable effective governance."
      },
      {
       "q": "Which is a sensible first-90-days action?",
       "options": [
        "Pursuing certification immediately",
        "Writing a 100-page policy",
        "Banning all AI",
        "An inventory sprint to find the AI already in use"
       ],
       "answer": 3,
       "explain": "Visibility comes first."
      },
      {
       "q": "Why integrate AI governance with privacy, security and procurement?",
       "options": [
        "Because AI needs no new controls",
        "To hide AI risks",
        "To reuse working processes and avoid duplicate, conflicting requirements",
        "Because regulators forbid separate AI teams"
       ],
       "answer": 2,
       "explain": "Integration speeds adoption and keeps requirements coherent."
      },
      {
       "q": "Who approves the organisation's AI principles and risk appetite?",
       "options": [
        "The board or a board committee",
        "Each data scientist",
        "The vendor",
        "Interns"
       ],
       "answer": 0,
       "explain": "Direction-setting belongs to the governing body."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l3",
   "title": "Board Reporting and Metrics",
   "subtitle": "Giving boards the information they need to oversee AI",
   "minutes": 30,
   "objectives": [
    "Explain the board's role in AI oversight",
    "Select programme metrics, risk indicators and outcome measures",
    "Write a board AI report that leads to decisions"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Boards are accountable for overseeing how their organisations use AI, as they are for any material risk and opportunity. Most board members are not AI experts and do not need to be. They need **clear, honest, decision-ready information**: where AI is used, how much value and risk it creates, whether controls work and what decisions they must make. International guidance for governing bodies, such as ISO/IEC 38507, frames this as governance of the organisation's use of AI, not management of the technology."
    },
    {
     "type": "keypoints",
     "items": [
      "Where do we use AI, and which uses are high risk?",
      "What is our AI risk appetite, and are we within it?",
      "Who is accountable for each high-risk system?",
      "Which laws and regulators affect our AI, and are we ready?",
      "What incidents and near-misses have occurred, and what did we learn?",
      "Is AI delivering the value we expected?",
      "What independent assurance do we have?",
      "Do we, as a board, have enough AI literacy to oversee this?"
     ],
     "title": "Questions every board should be able to answer"
    },
    {
     "type": "formula",
     "title": "Programme metrics",
     "items": [
      {
       "name": "Inventory coverage",
       "expr": "Coverage = Systems registered before launch / All AI systems found",
       "meaning": "Shows whether the front door is used; target close to 100% for high-tier systems."
      },
      {
       "name": "Assessment completion",
       "expr": "Completion = High-tier systems with current approved assessment / All high-tier systems",
       "meaning": "Should be 100%; any gap is a finding."
      },
      {
       "name": "Mean time to contain",
       "expr": "MTTC = Σ (Containment time − Detection time) / Number of incidents",
       "meaning": "Speed of response to AI incidents, by severity."
      },
      {
       "name": "Fairness compliance",
       "expr": "Share of high-risk models within fairness tolerance this period",
       "meaning": "Tracks the board's appetite for unfair outcomes."
      },
      {
       "name": "Training reach",
       "expr": "Staff completing role-based AI literacy / Staff in scope",
       "meaning": "Supports AI-literacy duties and policy adoption."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Category",
      "Example metrics",
      "Why the board cares"
     ],
     "rows": [
      [
       "Value",
       "Benefits delivered by major AI systems; adoption",
       "Is the investment paying off?"
      ],
      [
       "Exposure",
       "Number of AI systems by tier; new high-tier systems",
       "How much risk are we taking on?"
      ],
      [
       "Control health",
       "Coverage, assessment completion, overdue actions, exceptions",
       "Is governance working?"
      ],
      [
       "Outcomes",
       "Fairness tolerance breaches, complaints, appeals upheld",
       "Are people being treated well?"
      ],
      [
       "Incidents",
       "Number by severity, MTTC, regulatory notifications",
       "What went wrong and how fast did we respond?"
      ],
      [
       "Readiness",
       "Regulatory deadlines met, audit findings closed",
       "Are we ready for what is coming?"
      ]
     ],
     "title": "A balanced AI dashboard"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A dashboard where everything is always green usually means the wrong things are measured or thresholds are too loose. Include at least one metric that would reveal trouble early, such as the number of AI systems discovered outside the intake process, and explain every amber or red honestly.",
     "title": "Green dashboards can mislead"
    },
    {
     "type": "framework",
     "title": "Structure of a board AI report",
     "items": [
      {
       "label": "1",
       "title": "Headline",
       "text": "Three sentences: overall status, the most important change since last time, and decisions needed."
      },
      {
       "label": "2",
       "title": "Decisions requested",
       "text": "Clear choices with recommendations, such as approving a revised risk appetite."
      },
      {
       "label": "3",
       "title": "Top risks and trends",
       "text": "Five or fewer enterprise AI risk themes with direction of travel."
      },
      {
       "label": "4",
       "title": "Dashboard",
       "text": "The balanced metrics with commentary on ambers and reds."
      },
      {
       "label": "5",
       "title": "Incidents and lessons",
       "text": "Significant incidents, near-misses and actions."
      },
      {
       "label": "6",
       "title": "Regulatory horizon",
       "text": "Upcoming obligations and readiness."
      },
      {
       "label": "7",
       "title": "Assurance",
       "text": "Audit and review results and remediation status."
      }
     ]
    },
    {
     "type": "template",
     "title": "Board AI report: headline page",
     "purpose": "Give the board a one-page view that leads to decisions.",
     "columns": [
      "Section",
      "Content"
     ],
     "example": [
      [
       "Headline",
       "AI programme on track; one high-tier system breached fairness tolerance in May and was paused; decision needed on generative-AI expansion"
      ],
      [
       "Decision requested",
       "Approve enterprise assistant for customer-service staff with conditions in Appendix B"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "title": "The board pack",
     "situation": "The AI governance office's quarterly board pack is 48 pages of model metrics. Board members ask questions mainly about a newspaper story on AI hiring bias in another company. What should the AI governance lead change?",
     "options": [
      {
       "text": "Add more model metrics so the board has complete data.",
       "feedback": "More technical data increases the burden without answering the board's real questions.",
       "best": false
      },
      {
       "text": "Restructure the report around the board's questions: a one-page headline with decisions, top risk themes, a balanced dashboard and a short note on whether a similar hiring risk exists here, with detail in appendices.",
       "feedback": "Best. It makes the report decision-ready and addresses the board's concern directly, keeping detail available.",
       "best": true
      },
      {
       "text": "Stop reporting to the board until the programme is mature.",
       "feedback": "Boards need oversight information throughout; withdrawing reports undermines accountability.",
       "best": false
      },
      {
       "text": "Only report when there is an incident.",
       "feedback": "Exception-only reporting hides trends and the health of controls.",
       "best": false
      }
     ]
    },
    {
     "type": "case",
     "title": "A board learning curve",
     "context": "The board of a listed Bangladeshi conglomerate with interests in garments, telecoms and finance approves an AI strategy. Directors admit they cannot judge AI risks. The chair asks the company secretary and AI governance lead to propose how the board should oversee AI.",
     "questions": [
      "Which committee should own AI oversight?",
      "What should the board receive and how often?",
      "How can directors build AI literacy?"
     ],
     "answer": "Oversight can sit with the board risk committee, or a technology committee where one exists, with the full board approving AI principles, risk appetite and major strategic AI decisions. The committee should receive a quarterly AI report (headline with decisions, top risk themes across the group's businesses, balanced dashboard, incidents, regulatory horizon including EU exposure through garment and telecom customers, and assurance results), plus immediate escalation of SEV1 incidents. Internal audit should include AI in its plan. Directors can build literacy through a tailored briefing programme, site visits to see systems in use, an external adviser for the committee, and an annual board self-assessment that includes AI oversight competence."
    },
    {
     "type": "reflection",
     "prompt": "Draft the three-sentence headline you would give your board about AI this quarter. What decision would you ask them to make?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Board oversight",
       "def": "The governing body's responsibility to direct, monitor and hold management accountable for AI use."
      },
      {
       "term": "Key performance indicator (KPI)",
       "def": "A metric showing progress towards an objective, such as AI value delivered."
      },
      {
       "term": "Inventory coverage",
       "def": "The share of AI systems that were registered through the intake process before launch."
      },
      {
       "term": "Mean time to contain (MTTC)",
       "def": "The average time between detecting an incident and containing it."
      },
      {
       "term": "Balanced dashboard",
       "def": "A set of metrics covering value, exposure, control health, outcomes, incidents and readiness."
      },
      {
       "term": "Decision-ready reporting",
       "def": "Reporting that highlights the decisions needed, with options and recommendations."
      },
      {
       "term": "ISO/IEC 38507",
       "def": "An international standard giving guidance to governing bodies on the governance implications of using AI."
      },
      {
       "term": "Escalation",
       "def": "Raising an issue to a higher level of authority when it exceeds defined thresholds."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What do boards need most from AI reporting?",
       "options": [
        "Every model's raw metrics",
        "Source code samples",
        "Vendor marketing material",
        "Clear, honest, decision-ready information"
       ],
       "answer": 3,
       "explain": "Boards oversee; they need information that supports decisions."
      },
      {
       "q": "40 of 50 AI systems were registered before launch. Inventory coverage is:",
       "options": [
        "40%",
        "50%",
        "125%",
        "80%"
       ],
       "answer": 3,
       "explain": "40 / 50 = 0.8 or 80%."
      },
      {
       "q": "Why include a metric such as 'AI systems found outside the intake process'?",
       "options": [
        "It always looks good",
        "It replaces audits",
        "It reveals governance weaknesses early",
        "It measures model accuracy"
       ],
       "answer": 2,
       "explain": "It is a leading indicator of control failure."
      },
      {
       "q": "What should come first in a board AI report?",
       "options": [
        "A short headline with status and decisions needed",
        "A glossary",
        "Appendix of model metrics",
        "Vendor list"
       ],
       "answer": 0,
       "explain": "Leading with status and decisions focuses board time."
      },
      {
       "q": "Two incidents took 2 and 6 hours to contain. The MTTC is:",
       "options": [
        "8 hours",
        "4 hours",
        "3 hours",
        "12 hours"
       ],
       "answer": 1,
       "explain": "(2 + 6) / 2 = 4 hours."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l4",
   "title": "Maturity, Continuous Improvement and the Road Ahead",
   "subtitle": "Measuring progress and keeping the programme alive",
   "minutes": 30,
   "objectives": [
    "Assess the maturity of an AI governance programme",
    "Build a roadmap that raises maturity where it matters",
    "Embed continuous improvement and a culture of responsible AI",
    "Bring the whole ZAIG Stack together for the capstone"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "AI governance is never finished. Technology, law, organisational strategy and public expectations all keep moving. A mature programme does not try to freeze the rules; it builds the ability to **learn and adapt**: measuring itself honestly, fixing weaknesses, and updating controls as AI and regulation change."
    },
    {
     "type": "table",
     "head": [
      "Level",
      "Name",
      "What it looks like"
     ],
     "rows": [
      [
       "1",
       "Ad hoc",
       "AI used without inventory; governance depends on individuals; no policy"
      ],
      [
       "2",
       "Emerging",
       "Inventory started; interim rules; some assessments for obvious high-risk systems"
      ],
      [
       "3",
       "Defined",
       "Approved policy and standards; intake and tiering; stage gates; roles and committee working"
      ],
      [
       "4",
       "Managed",
       "Controls consistently applied; metrics and monitoring; supplier oversight; regular assurance"
      ],
      [
       "5",
       "Optimising",
       "Continuous improvement from incidents and metrics; anticipates regulation; governance accelerates responsible innovation"
      ]
     ],
     "title": "ZAIG maturity levels"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Score each layer of the ZAIG Stack separately. Most organisations find they are at level 3 for principles and policy but level 1 or 2 for monitoring, supplier oversight or incident response. The gaps between layers show where to invest next.",
     "title": "Assess by layer, not just overall"
    },
    {
     "type": "flow",
     "title": "Continuous improvement cycle",
     "items": [
      {
       "label": "Plan",
       "text": "Set objectives, risks and controls"
      },
      {
       "label": "Do",
       "text": "Operate the programme"
      },
      {
       "label": "Check",
       "text": "Measure, audit, review incidents and feedback"
      },
      {
       "label": "Act",
       "text": "Correct nonconformities and improve"
      },
      {
       "label": "Repeat",
       "text": "Update for new technology, law and strategy"
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Incident and near-miss reviews.",
      "Internal and external audit findings.",
      "Monitoring trends and KRI breaches.",
      "Complaints, appeals and feedback from affected people.",
      "Regulatory changes and supervisory feedback.",
      "Staff suggestions and AI champions' observations.",
      "Benchmarking against peers and new standards."
     ],
     "title": "Sources of improvement"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Policies and gates catch many problems, but not all. In mature organisations, a data scientist raises a fairness concern without being asked, a product manager pauses a launch voluntarily and a customer-service agent reports a strange chatbot answer. Reward that behaviour publicly, protect people who raise concerns and make leaders model it.",
     "title": "Culture is the last control"
    },
    {
     "type": "table",
     "head": [
      "Topic",
      "Why it matters for governance"
     ],
     "rows": [
      [
       "Agentic AI",
       "Systems that take actions raise questions of authority, permissions, liability and monitoring"
      ],
      [
       "Frontier model safety",
       "Evaluations and incident reporting for the most capable models continue to develop"
      ],
      [
       "Content provenance",
       "Watermarking and labelling rules for synthetic media are spreading"
      ],
      [
       "Standards and harmonisation",
       "New ISO/IEC and regional standards will shape what 'good practice' means"
      ],
      [
       "Environmental impact",
       "Energy and water use of AI attracts disclosure expectations"
      ],
      [
       "Workforce effects",
       "AI's impact on jobs, skills and worker monitoring draws regulatory and social attention"
      ]
     ],
     "title": "Emerging topics to watch (as of 2026)"
    },
    {
     "type": "case",
     "title": "Pulling the stack together",
     "context": "A mobile financial services provider in Bangladesh, with 20 million customers and a growing partnership with a European remittance company, has completed its first year of AI governance. It has an inventory of 46 systems, an approved policy, an intake process and a committee. A maturity assessment shows: Foundations 4, Principles 3, Regulation 3, Risk 3, Data 2, Lifecycle 2, Operations 2, Assurance 1.",
     "questions": [
      "Where should the second-year roadmap focus?",
      "Which risks does the profile suggest are most likely to materialise?",
      "How should progress be reported to the board?"
     ],
     "answer": "The weakest layers are Assurance (1) and Data, Lifecycle and Operations (2). The year-two roadmap should prioritise: data provenance and privacy controls for credit and fraud models (Data); bias testing, model cards and independent validation for high-tier systems (Lifecycle); monitoring with thresholds, supplier oversight for vendor AI and rehearsed incident playbooks (Operations); and a first risk-based internal audit of AI governance (Assurance). The likely risks are undetected drift or unfairness in credit and fraud models, supplier changes going unnoticed, slow incident response and an inability to evidence controls to regulators or the European partner. Report quarterly to the board using a balanced dashboard, the maturity profile by layer with targets, and progress on the roadmap, with independent assurance results as they arrive."
    },
    {
     "type": "scenario",
     "title": "The programme stalls",
     "situation": "Two years in, an AI governance programme's metrics are all green, but staff describe the intake as a box-ticking exercise and two recent AI problems were found by journalists, not by internal controls. What should the AI governance lead do?",
     "options": [
      {
       "text": "Celebrate the green metrics in the next board report.",
       "feedback": "Green metrics alongside externally discovered problems suggest the metrics measure activity, not effectiveness.",
       "best": false
      },
      {
       "text": "Commission an honest review: test controls' effectiveness, interview staff, analyse the two problems' root causes, revise metrics to include leading indicators and refresh the culture and training.",
       "feedback": "Best. It confronts the gap between reported and real performance and rebuilds effectiveness and trust.",
       "best": true
      },
      {
       "text": "Add more mandatory fields to the intake form.",
       "feedback": "More bureaucracy is likely to deepen box-ticking rather than fix effectiveness.",
       "best": false
      },
      {
       "text": "Blame the journalists for unfair coverage.",
       "feedback": "Defensiveness ignores real control failures and damages credibility.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "AI governance maturity assessment",
     "purpose": "Score each layer of the ZAIG Stack and plan improvements.",
     "columns": [
      "ZAIG layer",
      "Current level (1-5)",
      "Evidence",
      "Target in 12 months",
      "Key actions",
      "Owner"
     ],
     "example": [
      [
       "Operations",
       "2",
       "Monitoring only on 3 of 11 high-tier systems; no supplier reviews; incident playbook untested",
       "4",
       "Monitoring plans for all high-tier systems; supplier review cycle; two incident simulations",
       "Head of AI Governance"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "Look back across all eight layers of the ZAIG Stack. Which layer is strongest in your organisation, which is weakest, and what single action in the next 90 days would raise the weakest one?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Maturity model",
       "def": "A staged description of how capability develops, used to assess current state and plan improvement."
      },
      {
       "term": "Continuous improvement",
       "def": "Ongoing effort to improve processes and controls based on evidence and feedback."
      },
      {
       "term": "Plan-Do-Check-Act (PDCA)",
       "def": "An iterative improvement cycle used in management system standards."
      },
      {
       "term": "Nonconformity",
       "def": "Failure to meet a requirement of a policy, standard or management system."
      },
      {
       "term": "Corrective action",
       "def": "Action to remove the cause of a nonconformity and prevent recurrence."
      },
      {
       "term": "Speak-up culture",
       "def": "An environment in which people feel safe raising concerns about risks or wrongdoing."
      },
      {
       "term": "Agentic AI",
       "def": "AI systems that pursue goals by planning and taking actions with some autonomy."
      },
      {
       "term": "Content provenance",
       "def": "Information that records the origin and editing history of digital content, including whether AI was used."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A programme with approved policy, intake, stage gates and a working committee but little monitoring is most likely at which level overall?",
       "options": [
        "Defined (3)",
        "Ad hoc (1)",
        "Optimising (5)",
        "Managed (4)"
       ],
       "answer": 0,
       "explain": "Defined processes exist, but consistent measurement and monitoring characterise Managed."
      },
      {
       "q": "Why assess maturity by ZAIG layer?",
       "options": [
        "It produces a higher overall score",
        "Regulators require it",
        "It avoids the need for audit",
        "It shows which layers lag and where to invest"
       ],
       "answer": 3,
       "explain": "Layer scores reveal uneven development."
      },
      {
       "q": "Which is a leading indicator of governance weakness?",
       "options": [
        "Number of policy pages",
        "Number of committee members",
        "AI problems found externally rather than by internal controls",
        "Office size"
       ],
       "answer": 2,
       "explain": "External discovery signals that internal detection is failing."
      },
      {
       "q": "In PDCA, which step uses audits and incident reviews?",
       "options": [
        "Plan",
        "Check",
        "Do",
        "Act only"
       ],
       "answer": 1,
       "explain": "Check measures and reviews performance."
      },
      {
       "q": "What best sustains responsible AI beyond formal controls?",
       "options": [
        "Longer policies",
        "Fewer metrics",
        "Keeping AI use secret",
        "A culture that rewards raising concerns, modelled by leaders"
       ],
       "answer": 3,
       "explain": "Culture catches what controls miss."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m5",
  "q": "A garment exporter's HR team wants to train an attrition-prediction model on staff data collected for payroll. The privacy officer has not been consulted. What should the AI governance lead require FIRST?",
  "options": [
   "Selection of an accurate algorithm before any privacy review takes place",
   "Removing employee names from the payroll file",
   "Approval from the payroll software vendor to reuse the data for analytics",
   "A lawful-basis and purpose-compatibility check with the privacy officer"
  ],
  "answer": 3,
  "explain": "Repurposing payroll data for prediction needs a lawful basis and purpose check first. Removing names rarely anonymises HR data, and vendors cannot authorise the use."
 },
 {
  "module": "m5",
  "q": "A telecom shares an 'anonymised' dataset of hourly phone locations with a city planner after deleting phone numbers. What is the MAIN concern?",
  "options": [
   "The dataset will be too large to transfer efficiently to the planning team",
   "Deleting phone numbers makes the data useless for transport modelling",
   "City planners are not permitted to use any mobile network data at all",
   "Location traces can re-identify people, so the data may still be personal"
  ],
  "answer": 3,
  "explain": "A few location points can uniquely identify most people, so removing numbers does not anonymise. Size and usefulness are secondary; planners can use properly aggregated data."
 },
 {
  "module": "m5",
  "q": "An enterprise assistant indexes all shared drives. Users begin receiving answers drawn from documents they should never have seen. Which control addresses the root cause?",
  "options": [
   "Clean up permissions and enforce them at retrieval time",
   "Switch to a larger and more capable language model from another vendor",
   "Add a disclaimer telling users to ignore confidential information",
   "Shorten the assistant's answers"
  ],
  "answer": 0,
  "explain": "The assistant exposes over-shared content; permission hygiene and permission-aware retrieval fix the cause. Model size, disclaimers and answer length do not."
 },
 {
  "module": "m5",
  "q": "A customer asks a bank to erase her data. Her records were used to train a credit model last year. What is the MOST appropriate response?",
  "options": [
   "Delete her data from datasets and exclude it from future training",
   "Refuse because data used in a trained model can never be erased",
   "Delete the whole credit model immediately and stop lending decisions",
   "Ask her to sign a waiver confirming the model may keep her data"
  ],
  "answer": 0,
  "explain": "Practical erasure removes data from datasets and future training, retraining where justified. Refusal, model destruction or waivers are inappropriate."
 },
 {
  "module": "m5",
  "q": "A hospital wants to develop a model with a university without moving patient records off-site. Which technique BEST fits?",
  "options": [
   "Publishing the records after removing patient names",
   "Federated learning across the sites",
   "Emailing encrypted spreadsheets",
   "Training on synthetic data generated by the university alone"
  ],
  "answer": 1,
  "explain": "Federated learning trains where data resides. Publishing or emailing records moves data, and synthetic data generated without access to real patterns would not achieve the goal."
 },
 {
  "module": "m5",
  "q": "A marketing agency wants to use AI-generated images as the company's new logo and register exclusive rights. What should governance advise?",
  "options": [
   "The images are automatically protected because the company paid for the tool",
   "The model provider will own the logo outright under every jurisdiction's law",
   "Exclusive copyright may not exist without human authorship",
   "AI images cannot be used commercially"
  ],
  "answer": 2,
  "explain": "Many jurisdictions require human authorship, so protection may be weak. Payment does not create copyright, provider ownership varies by terms, and commercial use is usually allowed."
 },
 {
  "module": "m5",
  "q": "A Bangladeshi bank plans to use a generative-AI vendor that stores logs in another country. What should the governance lead check FIRST?",
  "options": [
   "Whether the vendor's interface supports the Bangla language well",
   "Whether the vendor has won industry awards for its AI products",
   "Transfer and localisation rules from law and the central bank",
   "Whether staff like the tool"
  ],
  "answer": 2,
  "explain": "Cross-border storage of banking data may be restricted by law or regulator expectations. Usability and awards matter less than legal permissibility."
 },
 {
  "module": "m5",
  "q": "A data scientist proposes adding 40 extra features to a loan model, including mobile phone brand and contact-list size, to gain 0.3% accuracy. What is the BEST governance response?",
  "options": [
   "Accept them because any accuracy gain improves the model's lending decisions",
   "Test whether the features are necessary and fair before adding them",
   "Accept them provided the features are stored in an encrypted database",
   "Reject all new features permanently to keep the model stable"
  ],
  "answer": 1,
  "explain": "Minimisation and fairness require that features are necessary, and some may act as proxies for income or other traits. Encryption does not address necessity, and permanent rejection is disproportionate."
 },
 {
  "module": "m6",
  "q": "A fraud model flags 1,000 transactions; 250 are actually fraudulent. Analysts complain about the workload. Which metric BEST describes the problem?",
  "options": [
   "Low recall: the model misses most fraud cases",
   "High accuracy: the model is correct most of the time",
   "Low precision: most flags are false alarms",
   "High latency: scoring is too slow"
  ],
  "answer": 2,
  "explain": "Precision is 250/1,000 = 0.25, so most flags are wrong. Recall cannot be judged from these figures, and accuracy and latency do not describe the complaint."
 },
 {
  "module": "m6",
  "q": "A hiring screen passes 45% of applicants without disabilities and 27% of applicants with disabilities. What does this indicate?",
  "options": [
   "A ratio of 1.67, which is acceptable under the four-fifths rule",
   "A disparate impact ratio of 0.60, needing investigation",
   "Evidence of unlawful discrimination that must lead to prosecution",
   "No issue, since disability is not protected"
  ],
  "answer": 1,
  "explain": "0.27/0.45 = 0.60, well below 0.8. That signals possible adverse impact needing investigation, not proof of unlawfulness."
 },
 {
  "module": "m6",
  "q": "A validation report for a Bangla-English support chatbot used only English test prompts written by developers. What should the validator require?",
  "options": [
   "Approval, since developer-written prompts are more precise",
   "Doubling the number of English prompts already used",
   "Removing Bangla support so the results are valid",
   "Re-testing with realistic prompts from real users"
  ],
  "answer": 3,
  "explain": "Validation must reflect the real population and languages. More of the same data does not help, and removing a needed language avoids rather than solves the gap."
 },
 {
  "module": "m6",
  "q": "A data science team proposes to validate its own credit model to meet a deadline. What is the PRIMARY governance objection?",
  "options": [
   "Validation needs independence to provide effective challenge",
   "The team lacks the statistical software needed for validation",
   "Validation is only legally required for generative-AI models",
   "Self-validation is always slower"
  ],
  "answer": 0,
  "explain": "Independence is the point of validation. Tools, scope claims and speed are not the core issue."
 },
 {
  "module": "m6",
  "q": "A vendor's model card for a medical-imaging tool reports high overall accuracy but nothing about performance across skin tones, ages or equipment types. What should the deploying hospital do?",
  "options": [
   "Accept it, because overall accuracy is the standard measure in medicine",
   "Write the missing sections itself using the vendor's brochure",
   "Reject the tool outright",
   "Make group results a contract deliverable and test locally"
  ],
  "answer": 3,
  "explain": "Group-level performance is essential; requiring it and testing locally protects patients. Inventing content or blanket rejection are inappropriate."
 },
 {
  "module": "m6",
  "q": "A lender wants to explain refusals using a natural-language generator that writes persuasive reasons. Tests show the reasons often mention factors with little effect on the score. What is the BEST decision?",
  "options": [
   "Keep it, because customers find the reasons persuasive and clear",
   "Replace it with a method whose fidelity is verified",
   "Keep it, but add a footnote saying reasons may not be accurate",
   "Stop giving reasons to customers"
  ],
  "answer": 1,
  "explain": "Unfaithful explanations mislead people. Persuasiveness, footnotes or silence do not meet the purpose of explanation."
 },
 {
  "module": "m6",
  "q": "A team wants to retire an old churn model. Which action is MOST important from a governance view?",
  "options": [
   "Archive records, revoke access and dispose of unneeded data",
   "Delete every trace of the model to avoid future audit questions",
   "Leave its API running in case another team wants it later",
   "Transfer ownership to the newest member of the data team"
  ],
  "answer": 0,
  "explain": "Controlled retirement keeps required records and removes unneeded access and data. Destroying records or leaving it running creates risk."
 },
 {
  "module": "m7",
  "q": "A university's admissions chatbot was accurate at launch. Six months later, complaints rise after the admissions rules changed, yet the chatbot's technical metrics look stable. What does this MOST likely show?",
  "options": [
   "The complaints are probably mistaken",
   "The monitoring tracks model metrics but not real-world outcomes",
   "The chatbot must be replaced by a larger model to fix the issue",
   "Admissions rules should be frozen to match the chatbot's knowledge"
  ],
  "answer": 1,
  "explain": "Stable technical metrics can hide outcome problems such as outdated source content. Outcome signals like complaints must be monitored and acted on."
 },
 {
  "module": "m7",
  "q": "A provider updates the language model behind a bank's assistant with two days' notice. The bank has no regression tests. What should the governance lead put in place FIRST for future updates?",
  "options": [
   "Version pinning and a regression suite run before switching",
   "A policy forbidding any model update by any vendor for any reason",
   "A request that the vendor promise never to change the model again",
   "A staff memo asking users to report odd answers"
  ],
  "answer": 0,
  "explain": "Pinning plus regression testing makes updates deliberate and verified. Bans, promises and informal reporting are impractical or weak."
 },
 {
  "module": "m7",
  "q": "A garment exporter's generative-AI policy says only 'use AI responsibly'. Staff paste supplier pricing into public tools. What is the MOST effective improvement?",
  "options": [
   "A longer statement on the importance of responsible innovation",
   "Disciplinary action against all staff who used public tools",
   "A data-and-tool matrix stating which data may go into which tools",
   "A ban on using generative AI anywhere in the company"
  ],
  "answer": 2,
  "explain": "Specific rules about data and tools change behaviour. Vague statements, mass discipline or blanket bans are ineffective or counterproductive."
 },
 {
  "module": "m7",
  "q": "A procurement team wants to sign an AI vendor's standard terms, which allow the vendor to train on customer data and change models without notice. The system will process patient records. What should governance require?",
  "options": [
   "Renegotiated terms banning training on data and requiring notice",
   "Acceptance, since standard terms are rarely negotiable for vendors",
   "Acceptance, provided the vendor holds an information security certificate",
   "Rejection of all cloud vendors"
  ],
  "answer": 0,
  "explain": "Patient data demands contractual protection against training and unannounced change. Certificates do not address these terms, and blanket rejection is disproportionate."
 },
 {
  "module": "m7",
  "q": "A support chatbot exposes some customers' order details to other users. Which action should come FIRST once the incident is confirmed?",
  "options": [
   "Retrain the model on a cleaner dataset before doing anything else",
   "Contain it by disabling the feature and preserving logs",
   "Wait for a full root-cause analysis before taking any action",
   "Blame the cloud provider publicly"
  ],
  "answer": 1,
  "explain": "Containment and evidence preservation come first. Retraining and full analysis follow, and premature blame is inappropriate."
 },
 {
  "module": "m7",
  "q": "A data protection officer asks when the 72-hour clock for a personal data breach caused by an AI system usually starts under GDPR-style laws. What is the BEST answer?",
  "options": [
   "When the investigation is fully complete and signed off",
   "When the AI vendor confirms the breach in writing",
   "When customers first complain",
   "When the organisation becomes aware of the breach"
  ],
  "answer": 3,
  "explain": "Deadlines generally run from awareness. Waiting for completion, vendor confirmation or complaints risks missing the deadline."
 },
 {
  "module": "m7",
  "q": "An internal audit finds that a bank's AI credit model has been retrained monthly for a year with new features added twice, all approved only by the data science lead. What is the MAIN control gap?",
  "options": [
   "Retraining should never happen more than once a year",
   "The data science lead should have used a different algorithm",
   "Significant changes skipped re-validation and gate approval",
   "Monthly retraining always makes models less accurate"
  ],
  "answer": 2,
  "explain": "Adding features is a significant change requiring independent validation and approval. Retraining frequency and algorithm choice are not the core gap."
 },
 {
  "module": "m7",
  "q": "Staff at a hospital receive a voice message that sounds like the CEO, asking them to share patient lists urgently with a 'consultant'. What playbook action is MOST important?",
  "options": [
   "Comply quickly because the voice matches the CEO's exactly",
   "Forward the message to all staff so they can judge it",
   "Reply to the message asking the sender to confirm identity",
   "Verify through a known independent channel before acting"
  ],
  "answer": 3,
  "explain": "Independent verification defeats impersonation. Replying through the same channel can be answered by the attacker, and mass forwarding spreads confusion."
 },
 {
  "module": "m8",
  "q": "Internal audit finds that 5 of 12 high-risk AI systems launched before their impact assessments were approved, although the policy requires approval first. How should this control be described?",
  "options": [
   "Operating effectively, because most systems still have an assessment",
   "Poorly designed, so the whole AI policy must be rewritten",
   "Outside audit scope entirely",
   "Designed adequately but not operating effectively"
  ],
  "answer": 3,
  "explain": "The control would work if followed, but it was not consistently applied. That is an operating-effectiveness failure, not a design or scope issue."
 },
 {
  "module": "m8",
  "q": "A supplier presents an ISO/IEC 42001 certificate as proof that its hiring tool is free of bias. What should the buyer conclude?",
  "options": [
   "It shows a management system, not an unbiased tool",
   "The tool has been independently tested and found unbiased",
   "The buyer no longer needs any local fairness testing of the tool",
   "It replaces the buyer's assessment"
  ],
  "answer": 0,
  "explain": "Certification addresses the supplier's management system within scope. It is not a bias test and does not replace the buyer's assessment or testing."
 },
 {
  "module": "m8",
  "q": "A company's AI governance sits entirely within the data science team that builds the models. Which weakness is MOST serious?",
  "options": [
   "Data scientists cost too much",
   "The team is too small to approve every request quickly",
   "Lack of independent challenge of the builders",
   "Data scientists do not understand the models they build"
  ],
  "answer": 2,
  "explain": "Self-governance lacks effective challenge. Cost, size and understanding are not the core issue."
 },
 {
  "module": "m8",
  "q": "The board receives a 60-page technical AI report each quarter and rarely discusses it. What change would MOST improve oversight?",
  "options": [
   "Adding detailed model metrics for every AI system in use",
   "Moving to an annual report to reduce reading time",
   "Inviting the vendors to present their own metrics instead",
   "A one-page headline with decisions, risks and a dashboard"
  ],
  "answer": 3,
  "explain": "Decision-ready summaries with appendices support oversight. More detail, less frequency or vendor-led reporting do not."
 },
 {
  "module": "m8",
  "q": "An organisation's AI metrics have been green for a year, but two AI failures were first exposed by customers on social media. What is the BEST interpretation?",
  "options": [
   "The metrics measure activity, not control effectiveness",
   "The metrics are correct and the customers were mistaken",
   "Social media complaints should be excluded from reporting",
   "The programme is fully mature"
  ],
  "answer": 0,
  "explain": "Externally discovered failures alongside green metrics show the measures are not detecting real problems."
 },
 {
  "module": "m8",
  "q": "A newly appointed AI governance lead has 90 days to show progress at a hospital group with no existing programme. What should come FIRST?",
  "options": [
   "Applying for ISO/IEC 42001 certification for the hospital group",
   "An inventory to find AI already in use",
   "Writing an 80-page AI policy",
   "Commissioning an external audit of all clinical AI models"
  ],
  "answer": 1,
  "explain": "Visibility of existing AI is the foundation for prioritising everything else. Certification, long policies and audits come later."
 },
 {
  "module": "m8",
  "q": "A maturity assessment scores an organisation at level 4 for Principles but level 1 for Assurance. What should the roadmap prioritise?",
  "options": [
   "Rewriting the principles to reach level 5 first",
   "Building assurance, such as a first internal AI audit",
   "Averaging the scores and reporting the result only",
   "Pausing all AI use until every layer reaches level 4"
  ],
  "answer": 1,
  "explain": "The weakest layer limits the programme's credibility. Polishing strong layers, averaging or blanket pauses do not address the gap."
 }
]);
