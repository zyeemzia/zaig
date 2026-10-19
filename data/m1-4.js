window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m1",
 "order": 1,
 "code": "Foundations",
 "title": "AI Fundamentals for Governance Professionals",
 "subtitle": "Understand how AI and generative AI work, where they fail and where they sit in your organisation",
 "outcomes": [
  "Explain how machine-learning and generative-AI systems learn, behave and fail, in language leaders understand",
  "Identify the distinctive risks of generative AI and AI agents",
  "Map the roles an organisation plays in the AI value chain and build an AI inventory",
  "Describe the harms AI can cause and why governance enables rather than blocks AI",
  "Use the ZAIG Stack to structure an AI governance programme"
 ],
 "lessons": [
  {
   "id": "m1-l1",
   "title": "What AI Is: A Governance Professional's View",
   "subtitle": "AI, machine learning, deep learning and generative AI without the hype",
   "minutes": 25,
   "objectives": [
    "Explain what makes a system an AI system in plain language",
    "Distinguish machine learning, deep learning, foundation models and generative AI",
    "Describe how a model learns from data and why that matters for governance",
    "Recognise the common ways machine-learning systems fail"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "You do not need to build models to govern them, but you do need to understand how they behave. Most AI governance failures start with a simple misunderstanding: someone treats a statistical system as if it were ordinary software that follows fixed rules. An AI system does something different. It **infers** how to produce outputs from the data and objectives it was given, so its behaviour is shaped by patterns in that data, including patterns nobody intended."
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A machine-based system that, for explicit or implicit objectives, **infers from the input it receives how to generate outputs** such as predictions, content, recommendations or decisions that can influence physical or virtual environments. Systems vary in how autonomous they are and in whether they keep adapting after deployment. This is the idea behind the definitions used by the OECD and the EU AI Act, expressed in our words.",
     "title": "AI system (working definition)"
    },
    {
     "type": "layers",
     "title": "The AI family, from broadest to most specific",
     "items": [
      {
       "label": "Artificial intelligence",
       "parts": [
        "Any technique that lets machines perform tasks we associate with human judgement",
        "Includes rule-based expert systems and search"
       ]
      },
      {
       "label": "Machine learning",
       "parts": [
        "Systems that learn patterns from data instead of being explicitly programmed",
        "Credit scoring, fraud detection, demand forecasting"
       ]
      },
      {
       "label": "Deep learning",
       "parts": [
        "Machine learning with many-layered neural networks",
        "Image recognition, speech, translation"
       ]
      },
      {
       "label": "Foundation models",
       "parts": [
        "Very large models trained on broad data and adapted to many tasks",
        "Large language models, vision-language models"
       ]
      },
      {
       "label": "Generative AI",
       "parts": [
        "Systems that create new text, images, audio, video or code",
        "Chat assistants, image generators, coding assistants"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "A machine-learning model is built in two phases. In **training**, an algorithm adjusts millions or billions of internal parameters so the model's outputs match examples in a training dataset as closely as possible. In **inference**, the trained model is given new inputs and produces outputs. Governance must cover both: what the model learned from, and how it is used once deployed."
    },
    {
     "type": "flow",
     "title": "From data to decision",
     "items": [
      {
       "label": "Problem",
       "text": "A business objective is turned into a prediction or generation task"
      },
      {
       "label": "Data",
       "text": "Examples are collected, labelled and cleaned"
      },
      {
       "label": "Training",
       "text": "The algorithm fits parameters to the data"
      },
      {
       "label": "Evaluation",
       "text": "Performance is measured on data the model has not seen"
      },
      {
       "label": "Deployment",
       "text": "The model runs inside a product or process"
      },
      {
       "label": "Decision",
       "text": "A person or system acts on the output"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Approach",
      "How it learns",
      "Typical use",
      "Governance question"
     ],
     "rows": [
      [
       "Supervised learning",
       "From labelled examples (input and correct answer)",
       "Loan default prediction, spam filtering",
       "Are the labels accurate and free of historical bias?"
      ],
      [
       "Unsupervised learning",
       "Finds structure in unlabelled data",
       "Customer segmentation, anomaly detection",
       "Are the groups it finds meaningful and fairly used?"
      ],
      [
       "Reinforcement learning",
       "Learns by trial, error and reward",
       "Pricing, robotics, recommendation tuning",
       "Could the reward be met in harmful ways?"
      ],
      [
       "Self-supervised learning",
       "Predicts hidden parts of its own data",
       "Pre-training large language models",
       "What was in the vast training data, and who owns it?"
      ]
     ],
     "title": "Ways machines learn, and what each means for governance"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Whatever is in the training data, including gaps, errors, stereotypes and personal information, can reappear in the model's behaviour. That is why data governance (Module 5) sits so low in the ZAIG Stack: weak data quietly undermines every layer above it.",
     "title": "A model is a compressed memory of its data"
    },
    {
     "type": "keypoints",
     "items": [
      "**Unrepresentative data**: the training data does not reflect the people or situations the model meets in use.",
      "**Proxy variables**: a harmless-looking feature such as postcode or university stands in for a protected characteristic.",
      "**Overfitting**: the model memorises its training data and performs poorly on new cases.",
      "**Distribution shift (drift)**: the world changes after training, for example a new mobile wallet changes spending patterns.",
      "**Feedback loops**: the model's own decisions shape the future data it learns from.",
      "**Wrong objective**: the model optimises a measurable target that is only loosely linked to the real goal."
     ],
     "title": "Why machine-learning systems fail"
    },
    {
     "type": "compare",
     "title": "Traditional software vs machine-learning systems",
     "columns": [
      {
       "title": "Traditional rules-based software",
       "items": [
        "Logic written explicitly by developers",
        "Same input always gives the same output",
        "Errors traced to a line of code",
        "Tested against a specification",
        "Changes only when code changes"
       ]
      },
      {
       "title": "Machine-learning system",
       "items": [
        "Logic inferred from data",
        "Outputs are probabilistic and may vary",
        "Errors spread across millions of parameters",
        "Tested statistically on samples",
        "Can degrade as the world changes, with no code change"
       ]
      }
     ]
    },
    {
     "type": "scenario",
     "title": "The 'it is just software' assumption",
     "situation": "A university in Dhaka buys a tool that predicts which first-year students are likely to drop out so advisers can contact them. The IT team plans to approve it through the normal software change process: security scan, user acceptance test, go-live. You are the new AI governance lead. What is the MOST important additional step?",
     "options": [
      {
       "text": "Ask the vendor for a faster implementation timeline so advisers can start sooner.",
       "feedback": "Speed is not the issue. The concern is that a predictive model can behave unfairly or degrade in ways a normal software test would not reveal.",
       "best": false
      },
      {
       "text": "Require evidence of how the model was trained and tested, including performance across student groups and whether the training data reflects this university's students.",
       "feedback": "Best. A predictive model's behaviour depends on its training data and statistical performance. Testing across groups and checking data fit are governance questions the normal change process does not ask.",
       "best": true
      },
      {
       "text": "Block the tool because AI should not be used in education.",
       "feedback": "Too absolute. Early-warning tools can help students if they are tested and used with human advisers in the loop. Governance should make the use safe, not ban it by default.",
       "best": false
      },
      {
       "text": "Run the security scan twice to be safe.",
       "feedback": "Security matters, but repeating it does not address fairness, accuracy or data fit, which are the distinctive AI risks here.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick one AI-powered tool your organisation already uses. Can you say what data it learned from, what it is optimising for and who checks its outputs? Note the gaps."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "AI system",
       "def": "A machine-based system that infers from inputs how to produce outputs such as predictions, content, recommendations or decisions."
      },
      {
       "term": "Machine learning",
       "def": "A branch of AI in which systems learn patterns from data rather than following explicitly programmed rules."
      },
      {
       "term": "Training data",
       "def": "The examples used to fit a model's parameters during training."
      },
      {
       "term": "Inference",
       "def": "Running a trained model on new inputs to produce outputs."
      },
      {
       "term": "Proxy variable",
       "def": "A feature that indirectly encodes another attribute, often a protected characteristic, leading to hidden discrimination."
      },
      {
       "term": "Overfitting",
       "def": "When a model learns its training data too closely and generalises poorly to new data."
      },
      {
       "term": "Distribution shift",
       "def": "A change between the data a model was trained on and the data it meets in use, often causing performance to fall."
      },
      {
       "term": "Feedback loop",
       "def": "A cycle in which a model's outputs influence the future data used to train or evaluate it."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What most clearly distinguishes an AI system from conventional rules-based software?",
       "options": [
        "It always runs in a public cloud environment",
        "It cannot be tested before it is deployed",
        "It infers how to produce outputs from data and objectives rather than following explicitly written logic",
        "It is always fully autonomous and needs no human"
       ],
       "answer": 2,
       "explain": "AI systems infer their behaviour from data and objectives. Cloud hosting, testability and autonomy vary and are not defining features."
      },
      {
       "q": "A recruitment model never sees candidates' gender, yet favours men. Which failure is the most likely cause?",
       "options": [
        "Overfitting to the test data",
        "Reinforcement learning rewards",
        "An encryption weakness",
        "A proxy variable, such as a hobby or past employer, correlates with gender"
       ],
       "answer": 3,
       "explain": "Removing a protected attribute does not remove its influence if other features act as proxies for it."
      },
      {
       "q": "A fraud model performed well at launch, but accuracy fell after a new mobile wallet changed how customers pay. What is this called?",
       "options": [
        "Overfitting",
        "Distribution shift or drift",
        "Hallucination",
        "Prompt injection"
       ],
       "answer": 1,
       "explain": "The data in use has moved away from the training distribution, so the model's learned patterns fit less well."
      },
      {
       "q": "Which learning approach is most associated with pre-training large language models?",
       "options": [
        "Self-supervised learning",
        "Rules-based expert systems",
        "Reinforcement learning only",
        "Unsupervised clustering"
       ],
       "answer": 0,
       "explain": "Large language models are pre-trained by predicting hidden or next tokens in vast text, a form of self-supervised learning."
      },
      {
       "q": "Why should governance cover both training and inference?",
       "options": [
        "Training is the only phase regulators care about",
        "Inference never involves personal data",
        "Risks arise from what the model learned and from how its outputs are used in decisions",
        "Training happens only once and needs no records"
       ],
       "answer": 2,
       "explain": "Data and design choices made in training shape behaviour, while inference is where outputs affect people. Both need controls."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l2",
   "title": "Generative AI and Large Language Models",
   "subtitle": "What foundation models can do, how they fail and why that changes governance",
   "minutes": 30,
   "objectives": [
    "Explain in plain terms how a large language model produces an answer",
    "Describe the main capabilities and limits of generative AI",
    "Identify the distinctive failure modes of generative AI and AI agents",
    "Map the parts of a generative-AI application that need controls"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Generative AI moved AI governance from a specialist topic to a board agenda item. Suddenly every employee could use a powerful model through a chat window, and every vendor added an assistant to their product. For governance professionals, the key shift is this: predictive models make narrow judgements inside a defined process, while generative models produce open-ended content for almost any purpose, so the **range of possible uses and harms is far wider**."
    },
    {
     "type": "flow",
     "title": "How a large language model comes to answer a question",
     "items": [
      {
       "label": "Pre-training",
       "text": "Learns to predict the next token from a very large body of text and code"
      },
      {
       "label": "Instruction tuning",
       "text": "Fine-tuned on examples of following instructions"
      },
      {
       "label": "Preference tuning",
       "text": "Adjusted using human or AI feedback to be more helpful and less harmful"
      },
      {
       "label": "Prompt",
       "text": "Receives system instructions, user input and any retrieved documents"
      },
      {
       "label": "Generation",
       "text": "Produces the answer one token at a time, choosing likely continuations"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A language model generates text that is **statistically plausible**, not text that is checked against facts. It can produce a confident, well-written answer that is entirely made up, including fake citations, legal cases or policy terms. Every governance control for generative AI starts from this fact.",
     "title": "Fluent is not the same as correct"
    },
    {
     "type": "table",
     "head": [
      "Generative AI is good at",
      "Generative AI struggles with"
     ],
     "rows": [
      [
       "Drafting, summarising and rewriting text",
       "Guaranteeing factual accuracy"
      ],
      [
       "Translating and working across languages, including Bangla",
       "Consistent performance in low-resource languages and dialects"
      ],
      [
       "Writing and explaining code",
       "Knowing when it does not know"
      ],
      [
       "Extracting fields from documents",
       "Precise arithmetic and long chains of reasoning without tools"
      ],
      [
       "Answering questions over supplied documents",
       "Keeping secrets that were put into its context"
      ],
      [
       "Brainstorming and classification",
       "Producing identical outputs every time"
      ]
     ],
     "title": "Capabilities and limits"
    },
    {
     "type": "keypoints",
     "items": [
      "**Confabulation (hallucination)**: confident but false content.",
      "**Prompt injection**: instructions hidden in user input, emails or web pages hijack the model's behaviour.",
      "**Data leakage**: confidential data entered in prompts is exposed, logged or reused.",
      "**Harmful or biased output**: stereotypes, toxic content or unsafe advice.",
      "**Intellectual property issues**: outputs that reproduce protected material, or unclear rights over training data.",
      "**Over-reliance**: people stop checking because the output looks polished.",
      "**Impersonation and deepfakes**: realistic synthetic voices, images and video used for fraud or disinformation."
     ],
     "title": "Distinctive failure modes of generative AI"
    },
    {
     "type": "layers",
     "title": "Anatomy of a generative-AI application (top layer first)",
     "items": [
      {
       "label": "User experience",
       "parts": [
        "Chat or embedded assistant",
        "Disclosure that users are talking to AI",
        "Feedback buttons"
       ]
      },
      {
       "label": "Guardrails and orchestration",
       "parts": [
        "Input and output filters",
        "System prompt and policies",
        "Human approval steps"
       ]
      },
      {
       "label": "Retrieval and tools",
       "parts": [
        "Company documents searched for context",
        "Connected tools and APIs the system may call"
       ]
      },
      {
       "label": "Foundation model",
       "parts": [
        "Third-party or open-weight model",
        "Version, licence and provider terms"
       ]
      },
      {
       "label": "Data and infrastructure",
       "parts": [
        "Logs, prompts and outputs",
        "Hosting location, access control, retention"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "Governance now also has to cover **AI agents**: systems that plan multi-step tasks and act through tools, such as sending emails, updating records or making payments. An agent's errors are no longer just words on a screen; they become actions. The more autonomy and the more powerful the tools, the stronger the controls must be: least-privilege permissions, human approval for consequential actions, activity logs and the ability to stop the agent."
    },
    {
     "type": "compare",
     "title": "Predictive AI vs generative AI: what changes for governance",
     "columns": [
      {
       "title": "Predictive AI",
       "items": [
        "Narrow, defined task",
        "Output is a score or class",
        "Accuracy measured against labels",
        "Usually built or bought for one process",
        "Risk concentrated in specific decisions"
       ]
      },
      {
       "title": "Generative AI",
       "items": [
        "Open-ended, many possible tasks",
        "Output is new content or action",
        "Quality judged by rubrics, tests and people",
        "Available to every employee",
        "Risk spread across many unplanned uses"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A bank in Dhaka launches a Bangla-and-English chatbot to answer account questions. In testing, it invents a fee waiver that does not exist. Customers who rely on such answers may complain, and tribunals in other countries have held companies responsible for what their chatbots told customers. The bank responds by grounding answers only in approved policy documents, adding a visible AI disclosure, routing fee and complaint questions to staff and logging every conversation for review.",
     "title": "A bank's customer chatbot"
    },
    {
     "type": "scenario",
     "title": "An eager pilot",
     "situation": "The marketing team at a garment exporter wants to connect a generative-AI assistant to the shared mailbox so it can read buyer emails and reply automatically. What should the governance lead recommend FIRST?",
     "options": [
      {
       "text": "Approve it, because the vendor says the model is the most accurate on the market.",
       "feedback": "Benchmark accuracy does not address prompt injection, data leakage or the risk of committing the company to terms in an automatic reply.",
       "best": false
      },
      {
       "text": "Start with a draft-only mode where the assistant suggests replies and a person sends them, with permissions limited to the mailbox and logging switched on.",
       "feedback": "Best. It captures most of the value while keeping a human in control of outward actions, limits the agent's permissions and creates evidence for later review.",
       "best": true
      },
      {
       "text": "Ban all generative AI in the company until regulation is final.",
       "feedback": "Regulation is already in force in many places and will keep evolving. A blanket ban usually pushes use underground into unmanaged personal accounts.",
       "best": false
      },
      {
       "text": "Let the team run it for a month and review complaints afterwards.",
       "feedback": "Waiting for complaints means harm happens first. Controls should be designed before go-live.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Questions to ask about any generative-AI use",
     "items": [
      "What decisions or actions will rely on the output?",
      "Which model and provider are used, and under what terms?",
      "What data goes into prompts, and is any of it personal or confidential?",
      "Are answers grounded in approved sources?",
      "Can the system take actions, and which need human approval?",
      "How are users told they are dealing with AI?",
      "How are outputs tested for accuracy, bias and harmful content?",
      "Who reviews logs and handles complaints?"
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Generative AI",
       "def": "AI that creates new content such as text, images, audio, video or code in response to inputs."
      },
      {
       "term": "Large language model (LLM)",
       "def": "A foundation model trained on vast text to predict tokens, used for generating and understanding language."
      },
      {
       "term": "Foundation model",
       "def": "A large model trained on broad data that can be adapted to many downstream tasks."
      },
      {
       "term": "Confabulation",
       "def": "Generation of confident but false or unsupported content; often called hallucination."
      },
      {
       "term": "Prompt injection",
       "def": "An attack in which crafted input causes a model to ignore its instructions or take unintended actions."
      },
      {
       "term": "AI agent",
       "def": "An AI system that plans and carries out multi-step tasks by calling tools or taking actions."
      },
      {
       "term": "Grounding",
       "def": "Constraining a model's answers to supplied, trusted sources such as retrieved documents."
      },
      {
       "term": "Deepfake",
       "def": "Synthetic audio, image or video that realistically imitates a real person or event."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Why can a large language model produce a confident answer that is false?",
       "options": [
        "It deliberately deceives users to save computing cost",
        "It generates statistically likely text rather than checking claims against facts",
        "It only fails when the internet connection is slow",
        "It is designed to refuse every factual question"
       ],
       "answer": 1,
       "explain": "LLMs predict plausible continuations. Without grounding and verification, plausibility can diverge from truth."
      },
      {
       "q": "A supplier email contains hidden text telling an assistant to forward all invoices to an outside address. What is this?",
       "options": [
        "Model drift",
        "Overfitting",
        "Prompt injection",
        "Data minimisation"
       ],
       "answer": 2,
       "explain": "Instructions planted in content the model processes are a classic indirect prompt injection."
      },
      {
       "q": "Which control best reduces the risk of an AI agent sending a wrong payment?",
       "options": [
        "Requiring human approval for payments and limiting the agent's permissions",
        "Using a larger model",
        "Making the system prompt longer",
        "Turning off logging to improve speed"
       ],
       "answer": 0,
       "explain": "Least privilege and approval gates contain the impact of agent errors. Model size does not guarantee correct actions."
      },
      {
       "q": "Compared with predictive AI, generative AI is harder to govern mainly because:",
       "options": [
        "It never uses personal data",
        "It cannot be bought from vendors",
        "It is always less accurate",
        "It is open-ended and available to many users for uses nobody planned"
       ],
       "answer": 3,
       "explain": "The breadth of possible uses and users widens the risk surface beyond a single defined decision process."
      },
      {
       "q": "What does grounding a chatbot in approved documents mainly reduce?",
       "options": [
        "The need for any human oversight",
        "Hosting costs",
        "The number of languages supported",
        "Invented answers that are not supported by company policy"
       ],
       "answer": 3,
       "explain": "Grounding limits answers to trusted sources, which reduces confabulation, though it does not remove the need for testing and oversight."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l3",
   "title": "AI in the Organisation: Roles, Supply Chains and Inventory",
   "subtitle": "You cannot govern what you cannot see",
   "minutes": 25,
   "objectives": [
    "Identify the roles organisations play in the AI value chain",
    "Explain why the provider and deployer distinction matters",
    "Build and maintain an AI inventory that captures the facts governance needs"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Few organisations build every AI system they use. A typical bank, hospital or university buys software with AI features, calls models through an API, fine-tunes an open-weight model for one task and lets staff use public chat assistants. Each arrangement places the organisation in a different **role**, and laws and standards attach different duties to different roles. The first practical task in AI governance is therefore to **find the AI** and record what role you play for each system."
    },
    {
     "type": "framework",
     "title": "Roles in the AI value chain",
     "items": [
      {
       "label": "R1",
       "title": "Developer or provider",
       "text": "Builds a model or AI system, or has it built, and puts it on the market or into service under its own name."
      },
      {
       "label": "R2",
       "title": "Deployer",
       "text": "Uses an AI system under its own authority in its operations, such as a bank using a credit-scoring tool."
      },
      {
       "label": "R3",
       "title": "Importer and distributor",
       "text": "Brings an AI system from another jurisdiction into a market or makes it available without changing it."
      },
      {
       "label": "R4",
       "title": "Data supplier",
       "text": "Provides datasets for training, testing or operation, and shapes quality and rights."
      },
      {
       "label": "R5",
       "title": "Operator or user",
       "text": "The staff member who works with the system day to day and exercises oversight."
      },
      {
       "label": "R6",
       "title": "Affected person",
       "text": "Anyone whose life, rights or opportunities are influenced by the system's outputs, whether or not they use it."
      }
     ]
    },
    {
     "type": "layers",
     "title": "A typical AI supply chain (top layer first)",
     "items": [
      {
       "label": "Affected people",
       "parts": [
        "Customers, patients, students, workers, citizens"
       ]
      },
      {
       "label": "Deploying organisation",
       "parts": [
        "Configures, operates and oversees the system",
        "Owns the decision and the customer relationship"
       ]
      },
      {
       "label": "Application provider",
       "parts": [
        "Builds the product around one or more models",
        "Adds retrieval, tools, user interface and guardrails"
       ]
      },
      {
       "label": "Model provider",
       "parts": [
        "Trains the foundation or specialist model",
        "Sets usage policies and licence terms"
       ]
      },
      {
       "label": "Data and compute",
       "parts": [
        "Training data sources and labellers",
        "Cloud and hardware providers"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "If you substantially modify a bought system, retrain it for a new purpose or sell it under your own name, you may move from deployer to provider and inherit the provider's heavier duties. Record every significant change to an AI system and reassess the role each time.",
     "title": "Roles can change"
    },
    {
     "type": "text",
     "text": "**Shadow AI** is AI used without the organisation's knowledge: staff pasting customer data into personal chat accounts, teams switching on AI features in software they already licence, or departments buying low-cost AI tools on a credit card. An inventory exercise almost always finds far more AI than leaders expected. The aim is not to punish people but to bring useful tools into a governed path."
    },
    {
     "type": "steps",
     "title": "Building an AI inventory",
     "items": [
      {
       "title": "Agree a definition",
       "text": "Use a working definition of an AI system and include AI features inside larger products."
      },
      {
       "title": "Search several sources",
       "text": "Check procurement records, expense claims, software catalogues, cloud bills, browser and network logs, and ask every department."
      },
      {
       "title": "Capture core facts",
       "text": "Purpose, owner, role, model and provider, data used, people affected, decisions influenced and deployment status."
      },
      {
       "title": "Assign a provisional risk tier",
       "text": "Use a simple triage so high-impact systems get attention first (developed in Module 4)."
      },
      {
       "title": "Link to other registers",
       "text": "Connect to the data inventory, vendor register, records of processing and risk register."
      },
      {
       "title": "Keep it alive",
       "text": "Make registration a condition of procurement and go-live, and review the inventory at least quarterly."
      }
     ]
    },
    {
     "type": "template",
     "title": "AI inventory register",
     "purpose": "Record every AI system in one place so that ownership, role and risk are visible.",
     "columns": [
      "System and purpose",
      "Business owner",
      "Our role",
      "Model and provider",
      "Data used",
      "People affected",
      "Provisional tier"
     ],
     "example": [
      [
       "Loan pre-screening score for nano-loans",
       "Head of Digital Lending",
       "Deployer (vendor model, our configuration)",
       "Gradient-boosted model from fintech vendor",
       "Wallet transaction history, KYC data",
       "Wallet customers applying for credit",
       "High"
      ],
      [
       "Meeting summary feature in office suite",
       "IT Operations",
       "Deployer",
       "Suite provider's built-in LLM",
       "Meeting audio and transcripts",
       "Staff and external attendees",
       "Medium"
      ]
     ],
     "rows": 6
    },
    {
     "type": "table",
     "head": [
      "Example",
      "In the AI inventory?",
      "Why"
     ],
     "rows": [
      [
       "Spreadsheet formula that flags invoices over a fixed amount",
       "Usually no",
       "Fixed rules written by people; no inference from data"
      ],
      [
       "Email spam filter trained on past messages",
       "Yes, low tier",
       "Learns from data, limited impact"
      ],
      [
       "CV-screening feature in a hiring platform",
       "Yes, high tier",
       "Influences access to employment"
      ],
      [
       "Staff using a public chat assistant for drafting",
       "Yes, as a use case",
       "Data leakage and output-quality risks"
      ],
      [
       "Vendor's fraud model embedded in a payment gateway",
       "Yes",
       "AI inside a bought product still counts"
      ]
     ],
     "title": "Is it in scope? Quick examples"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Procurement and expense data are the fastest way to find AI. Search them for words such as 'AI', 'GPT', 'copilot', 'assistant', 'intelligent', 'predictive' and 'machine learning', then follow up with the budget holders.",
     "title": "Start with the money"
    },
    {
     "type": "case",
     "title": "The inventory that surprised the board",
     "context": "A mobile financial services provider in Dhaka believed it ran three AI systems: a fraud model, a credit model and a customer chatbot. A two-week inventory sprint found twenty-three, including AI-based call-centre quality scoring, a recruitment screening add-on, automated translation of customer notices, a marketing tool that generated social media images, and dozens of staff using personal accounts on public chat assistants with customer complaint text.",
     "questions": [
      "Which discoveries carry the highest risk, and why?",
      "What role does the company play for the recruitment add-on and the chatbot?",
      "What should happen to the staff use of personal chat accounts?"
     ],
     "answer": "The recruitment screening add-on and the credit model carry the highest risk because they influence access to work and to financial services, and the staff use of personal accounts is urgent because customer personal data is leaving the company's control. For the recruitment add-on the company is a deployer; for the chatbot it is a deployer of a vendor model but may become a provider if it substantially builds and brands the system. Staff use should not simply be banned: provide an approved enterprise assistant with data protections, issue an acceptable-use rule forbidding customer data in personal accounts, and run awareness sessions. Every system found should go into the inventory with an owner and provisional tier."
    },
    {
     "type": "scenario",
     "title": "Who owns this?",
     "situation": "An inventory review finds a translation tool used by three departments, paid for by IT, with no named owner. What is the BEST next step?",
     "options": [
      {
       "text": "Let IT own it because IT pays the licence.",
       "feedback": "Paying for a tool is not the same as owning its use and risk. IT can be the technical custodian, but a business owner is still needed.",
       "best": false
      },
      {
       "text": "Remove the tool until each department justifies its use.",
       "feedback": "Removing a widely used tool without analysis disrupts work and may push use into unmanaged alternatives.",
       "best": false
      },
      {
       "text": "Assign an accountable business owner for the use case, with IT as technical custodian, and record both in the inventory.",
       "feedback": "Best. Accountability for outcomes sits with the business, while IT manages the technology. Both roles are recorded so questions have a clear destination.",
       "best": true
      },
      {
       "text": "Leave it unassigned because translation is low risk.",
       "feedback": "Even low-risk systems need an owner; otherwise nobody notices when the use changes, for example to translating legal notices.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Provider",
       "def": "An organisation that develops an AI system or model, or has it developed, and places it on the market or puts it into service under its own name."
      },
      {
       "term": "Deployer",
       "def": "An organisation that uses an AI system under its own authority, other than for purely personal activity."
      },
      {
       "term": "Affected person",
       "def": "Someone whose rights, opportunities or interests are influenced by an AI system's outputs."
      },
      {
       "term": "AI value chain",
       "def": "The linked set of organisations that supply data, models, tools and applications up to the point of use."
      },
      {
       "term": "Shadow AI",
       "def": "AI tools or features used in an organisation without its knowledge or approval."
      },
      {
       "term": "AI inventory",
       "def": "A maintained register of the AI systems an organisation develops, buys or uses, with key facts for governance."
      },
      {
       "term": "Substantial modification",
       "def": "A significant change to an AI system that can alter its risk or purpose and may change the organisation's role and duties."
      },
      {
       "term": "Business owner",
       "def": "The named person accountable for an AI use case's purpose, outcomes and risks."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A hospital uses a vendor's AI triage tool exactly as supplied. In most frameworks the hospital is the:",
       "options": [
        "Provider",
        "Importer",
        "Deployer",
        "Data supplier"
       ],
       "answer": 2,
       "explain": "Using a system under its own authority makes the hospital a deployer. The vendor that built and markets the tool is the provider."
      },
      {
       "q": "Which change is most likely to turn a deployer into a provider?",
       "options": [
        "Changing the colour of the user interface",
        "Adding a new user account",
        "Renewing the annual licence",
        "Retraining a bought system for a new purpose and offering it under its own brand"
       ],
       "answer": 3,
       "explain": "Substantial modification or rebranding can shift provider duties to the organisation that made the change."
      },
      {
       "q": "What is the fastest reliable starting point for finding AI in an organisation?",
       "options": [
        "Waiting for staff to self-report incidents",
        "Procurement, expense and software catalogue records",
        "Reading vendors' marketing material",
        "Checking only the data science team's projects"
       ],
       "answer": 1,
       "explain": "Money trails reveal bought tools and features that technical teams may not know about."
      },
      {
       "q": "Why should an AI inventory record the people affected by each system?",
       "options": [
        "Impact on people drives the risk tier and the controls required",
        "It is needed to calculate licence fees",
        "It replaces the need for an impact assessment",
        "It is only needed for marketing purposes"
       ],
       "answer": 0,
       "explain": "Who is affected, and how seriously, determines the level of scrutiny and the obligations that apply."
      },
      {
       "q": "What is the best response to widespread shadow AI use?",
       "options": [
        "Provide a governed alternative, clear use rules and awareness, then bring uses into the inventory",
        "Dismiss staff found using public tools",
        "Ignore it because it is personal productivity",
        "Block all websites with AI in the name"
       ],
       "answer": 0,
       "explain": "Enforcement alone drives use underground. A safe approved path plus rules and education brings use into view."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l4",
   "title": "Why Govern AI: Harms, Value and the ZAIG Stack",
   "subtitle": "Governance as the condition for using AI with confidence",
   "minutes": 25,
   "objectives": [
    "Classify the harms AI can cause to individuals, groups, organisations and society",
    "Explain how governance differs from management and compliance",
    "Describe the eight layers of the ZAIG Stack and how they connect",
    "Apply proportionality so controls match the level of risk"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "AI governance is the system of **direction, rules, roles and evidence** that makes sure an organisation's use of AI is lawful, ethical, safe and aligned with its goals. It is not a brake on innovation. Organisations with good governance tend to move faster, because teams know what is allowed, approvals are predictable and leaders can defend their decisions to regulators, customers and the public."
    },
    {
     "type": "table",
     "head": [
      "Level",
      "Examples of harm",
      "Example setting"
     ],
     "rows": [
      [
       "Individuals",
       "Wrongful denial of a loan, job or benefit; privacy invasion; unsafe medical advice; manipulation",
       "Credit scoring, hiring, health chatbots"
      ],
      [
       "Groups",
       "Systematic disadvantage for women, ethnic or religious minorities, rural users, people with disabilities or speakers of minority languages",
       "Face recognition, speech tools, risk scoring"
      ],
      [
       "Organisations",
       "Regulatory fines, lawsuits, reputational damage, security breaches, bad decisions at scale",
       "Any deployer or provider"
      ],
      [
       "Society and environment",
       "Disinformation, erosion of trust, labour disruption, energy and water use, concentration of power",
       "Generative AI, elections, large-scale training"
      ]
     ],
     "title": "Who can be harmed by AI"
    },
    {
     "type": "keypoints",
     "items": [
      "A recruiting model learned to downgrade CVs that mentioned women's activities because past hiring data was male-dominated.",
      "Automated benefit-fraud risk scoring wrongly flagged thousands of families, with nationality and dual citizenship among the factors; the scandal contributed to a government resigning.",
      "A company was held responsible by a tribunal for a refund policy its website chatbot invented.",
      "A finance employee transferred millions after a video call in which the 'executives' were deepfakes.",
      "Face recognition systems misidentified people with darker skin at higher rates, contributing to wrongful arrests."
     ],
     "title": "Recurring patterns from real AI failures (described generally)"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "In almost every case, the technology did what it was built to do. The failure was in **governance**: no one asked who might be harmed, no one tested for it, no one monitored after launch, and no one had clear authority to stop the system.",
     "title": "The common thread"
    },
    {
     "type": "compare",
     "title": "Governance, management and compliance",
     "columns": [
      {
       "title": "Governance",
       "items": [
        "Sets direction, risk appetite and accountability",
        "Led by the board and senior leaders",
        "Asks: are we doing the right things, the right way?"
       ]
      },
      {
       "title": "Management",
       "items": [
        "Plans and runs AI activities within that direction",
        "Led by business and technical owners",
        "Asks: are we doing things well?"
       ]
      },
      {
       "title": "Compliance",
       "items": [
        "Checks conformity with laws, standards and internal policy",
        "Led by compliance, legal and audit functions",
        "Asks: can we show we met our obligations?"
       ]
      }
     ]
    },
    {
     "type": "framework",
     "title": "The ZAIG Stack: eight layers of an AI governance programme (built from the bottom up)",
     "items": [
      {
       "label": "L1",
       "title": "Foundations",
       "text": "How AI and generative AI work and fail; roles, supply chains and the AI inventory."
      },
      {
       "label": "L2",
       "title": "Principles",
       "text": "Fairness, transparency, accountability, safety, privacy and human oversight, made operational."
      },
      {
       "label": "L3",
       "title": "Regulation",
       "text": "EU AI Act, NIST AI RMF, ISO/IEC 42001, OECD principles, and South Asian and other national rules."
      },
      {
       "label": "L4",
       "title": "Risk",
       "text": "Risk identification and scoring, impact assessments, treatment and the risk register."
      },
      {
       "label": "L5",
       "title": "Data",
       "text": "Data quality and provenance, privacy, rights, minimisation and retention."
      },
      {
       "label": "L6",
       "title": "Lifecycle",
       "text": "Stage gates, documentation, evaluation, bias testing and explainability."
      },
      {
       "label": "L7",
       "title": "Operations",
       "text": "Monitoring and drift, generative-AI use policy, suppliers and incidents."
      },
      {
       "label": "L8",
       "title": "Assurance",
       "text": "Audit, the governance operating model, board reporting and metrics."
      }
     ]
    },
    {
     "type": "text",
     "text": "Read the stack from the bottom up. You cannot write sensible principles without understanding the technology; you cannot map regulation without principles to interpret it; risk assessment applies both; data and lifecycle controls treat the risks; operations keep controls working day to day; and assurance proves to leaders and regulators that the whole programme works. Each module of this track builds one layer."
    },
    {
     "type": "framework",
     "title": "Proportionality: matching effort to risk",
     "items": [
      {
       "label": "P1",
       "title": "Low risk",
       "text": "Register, name an owner, apply standard acceptable-use rules. Example: grammar suggestions in email."
      },
      {
       "label": "P2",
       "title": "Medium risk",
       "text": "Add a light assessment, testing before launch and periodic review. Example: internal knowledge assistant."
      },
      {
       "label": "P3",
       "title": "High risk",
       "text": "Full impact assessment, independent validation, human oversight, monitoring and senior sign-off. Example: credit or hiring decisions."
      },
      {
       "label": "P4",
       "title": "Unacceptable",
       "text": "Do not build or use. Example: social scoring or manipulative techniques that exploit vulnerable people."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "ZAIG describes laws, regulations and standards in our own words, as of 2026, to help you build a governance programme. **It is education, not legal advice.** Regulations change, guidance is issued, and how a rule applies depends on facts and jurisdiction. Always check the official texts and involve qualified lawyers for legal decisions.",
     "title": "About this track and the law"
    },
    {
     "type": "scenario",
     "title": "Governance as a brake?",
     "situation": "The chief executive of a fast-growing fintech in Dhaka says: 'Governance will slow us down; we will add it once we are bigger.' Which response from the AI governance lead is MOST persuasive?",
     "options": [
      {
       "text": "Explain that governance is legally required everywhere, so there is no choice.",
       "feedback": "Legal duties vary by jurisdiction and use case. Leading with compulsion misses the business argument and may not be accurate for every system.",
       "best": false
      },
      {
       "text": "Propose proportionate governance: light rules for low-risk tools and focused controls on credit and fraud models, showing how it speeds approvals and protects partner and regulator trust.",
       "feedback": "Best. Proportionality keeps low-risk work fast, concentrates effort where harm and liability are greatest and frames governance as an enabler of growth and partnerships.",
       "best": true
      },
      {
       "text": "Agree, and plan to revisit governance after the next funding round.",
       "feedback": "Retrofitting governance after harm or regulator attention is costlier and slower, especially for credit decisions affecting thousands of customers.",
       "best": false
      },
      {
       "text": "Insist that every AI use goes through the same full impact assessment.",
       "feedback": "Uniform heavy process wastes effort on low-risk tools and confirms the fear that governance slows everything down.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Think of one AI system in your organisation. If it went badly wrong tomorrow, who would be harmed, who would be held accountable, and what evidence would you have that you had governed it responsibly?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "AI governance",
       "def": "The system of direction, policies, roles, processes and evidence that ensures an organisation's AI is lawful, ethical, safe and aligned with its goals."
      },
      {
       "term": "Responsible AI",
       "def": "Designing, building and using AI in ways that respect people's rights and wellbeing and that can be justified to stakeholders."
      },
      {
       "term": "Proportionality",
       "def": "Matching the depth of governance controls to the level of risk a system poses."
      },
      {
       "term": "Risk appetite",
       "def": "The amount and type of risk an organisation is willing to accept in pursuit of its objectives."
      },
      {
       "term": "Accountability",
       "def": "Being answerable for decisions and outcomes, with the authority and duty to act."
      },
      {
       "term": "ZAIG Stack",
       "def": "The eight-layer model used in this track: Foundations, Principles, Regulation, Risk, Data, Lifecycle, Operations and Assurance."
      },
      {
       "term": "Trustworthy AI",
       "def": "AI that is lawful, ethical and technically robust, so stakeholders can reasonably rely on it."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which statement best describes AI governance?",
       "options": [
        "A one-time legal review before launch",
        "A technical team that tunes model accuracy",
        "A ban on AI until regulation is final",
        "Direction, rules, roles and evidence that keep AI use lawful, ethical, safe and aligned with goals"
       ],
       "answer": 3,
       "explain": "Governance is a continuing system of direction and accountability, not a single check or a technical activity."
      },
      {
       "q": "In many real AI failures, what was usually missing?",
       "options": [
        "More powerful hardware",
        "Questions about harm, testing for it, monitoring and clear authority to stop the system",
        "Larger training datasets",
        "Faster deployment pipelines"
       ],
       "answer": 1,
       "explain": "The technology often worked as designed; the failure was in governance around it."
      },
      {
       "q": "Which layer of the ZAIG Stack covers stage gates, documentation and bias testing?",
       "options": [
        "Principles",
        "Regulation",
        "Assurance",
        "Lifecycle"
       ],
       "answer": 3,
       "explain": "Lifecycle controls apply during design, build, testing and release of models and systems."
      },
      {
       "q": "Applying proportionality means:",
       "options": [
        "Light controls for low-risk uses and deeper controls for high-risk uses",
        "The same process for every AI system",
        "Skipping governance for internal tools",
        "Only governing systems that a regulator names"
       ],
       "answer": 0,
       "explain": "Proportionality concentrates effort where potential harm is greatest while keeping low-risk work fast."
      },
      {
       "q": "Who sets AI risk appetite and overall accountability?",
       "options": [
        "Individual data scientists",
        "The model vendor",
        "The board and senior leadership",
        "External auditors"
       ],
       "answer": 2,
       "explain": "Governance direction comes from the top; management works within it and assurance checks it."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m2",
 "order": 2,
 "code": "Principles",
 "title": "Responsible AI Principles in Practice",
 "subtitle": "Fairness, transparency, accountability, safety, privacy and human oversight, made operational",
 "outcomes": [
  "Translate responsible-AI principles into requirements, controls and evidence",
  "Identify sources of bias and choose fairness approaches that match the harm",
  "Design transparency, explanations and accountability for different audiences",
  "Apply safety, security and privacy principles to AI systems",
  "Design meaningful human oversight and structure an AI policy framework"
 ],
 "lessons": [
  {
   "id": "m2-l1",
   "title": "From Ethics to Operational Principles",
   "subtitle": "Why principles matter and how to stop them becoming wall posters",
   "minutes": 25,
   "objectives": [
    "Explain why responsible-AI principles from different bodies converge on a common core",
    "Distinguish values, principles, requirements and controls",
    "Recognise ethics washing and the signs of principles that are not operational"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Since 2016, hundreds of organisations, governments and international bodies have published AI ethics principles. Studies comparing them find a strong convergence: almost all mention fairness, transparency, accountability, safety, privacy and human oversight in some form. The hard part is not agreeing on words. It is turning those words into **decisions people can make on a Tuesday afternoon** when a product deadline is close."
    },
    {
     "type": "framework",
     "title": "The ZAIG core principles",
     "items": [
      {
       "label": "F",
       "title": "Fairness",
       "text": "AI should not create or reinforce unjustified discrimination, and its benefits and burdens should be shared fairly."
      },
      {
       "label": "T",
       "title": "Transparency",
       "text": "People should know when AI is used, and appropriate information about how it works should be available."
      },
      {
       "label": "A",
       "title": "Accountability",
       "text": "Named people and organisations answer for AI outcomes and have the authority to act."
      },
      {
       "label": "S",
       "title": "Safety and security",
       "text": "AI should work reliably as intended, resist misuse and attack, and fail safely."
      },
      {
       "label": "P",
       "title": "Privacy",
       "text": "Personal data should be used lawfully, minimally and securely, respecting people's rights."
      },
      {
       "label": "H",
       "title": "Human oversight",
       "text": "People should be able to understand, supervise, intervene in and override AI where it matters."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Transparency enables accountability; accountability makes fairness enforceable; privacy limits the data that fairness testing can use; safety depends on oversight. Treat the principles as one system with tensions to balance, not six separate checkboxes.",
     "title": "Principles are interdependent"
    },
    {
     "type": "layers",
     "title": "From values to evidence (top layer first)",
     "items": [
      {
       "label": "Evidence",
       "parts": [
        "Test results, logs, sign-offs, audit reports"
       ]
      },
      {
       "label": "Controls",
       "parts": [
        "Specific checks and safeguards, e.g. a fairness test before release"
       ]
      },
      {
       "label": "Requirements",
       "parts": [
        "Measurable conditions, e.g. approval-rate ratio between groups of at least 0.8"
       ]
      },
      {
       "label": "Principles",
       "parts": [
        "Statements of what matters, e.g. 'our AI treats customers fairly'"
       ]
      },
      {
       "label": "Values",
       "parts": [
        "The organisation's purpose and ethical commitments"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "Each principle must be translated downwards. 'We are fair' becomes 'credit models are tested for approval-rate gaps between men and women and between urban and rural applicants before every release', which becomes a control with an owner, a threshold and a record. If you cannot point to the evidence layer, the principle is not yet operational."
    },
    {
     "type": "keypoints",
     "items": [
      "Principles published but no named owner for any of them.",
      "No process that could ever stop or change a project on ethical grounds.",
      "Ethics board with no access to information and no decision rights.",
      "Principles used in marketing but absent from procurement and engineering standards.",
      "No metrics, no testing, no incidents ever reported."
     ],
     "title": "Warning signs of ethics washing"
    },
    {
     "type": "table",
     "head": [
      "Source",
      "Type",
      "What it offers"
     ],
     "rows": [
      [
       "OECD AI Principles (2019, updated 2024)",
       "Intergovernmental recommendation",
       "Widely adopted values and policy guidance; basis for many national approaches"
      ],
      [
       "UNESCO Recommendation on the Ethics of AI (2021)",
       "Global ethical framework",
       "Human rights focus, policy action areas, readiness assessments"
      ],
      [
       "National strategies and guidelines",
       "Government policy",
       "Local priorities, e.g. India's AI governance guidelines and national AI policies in South Asia"
      ],
      [
       "Sector regulators",
       "Supervisory guidance",
       "Expectations for banks, insurers, health and telecoms"
      ],
      [
       "Company principles",
       "Internal policy",
       "How one organisation interprets values for its products and customers"
      ]
     ],
     "title": "Common sources of AI principles"
    },
    {
     "type": "scenario",
     "title": "Principles on the wall",
     "situation": "A telecom operator published six AI principles two years ago. An internal review finds no team can name the owner of any principle, and none has ever changed a product decision. What should the AI governance lead propose FIRST?",
     "options": [
      {
       "text": "Rewrite the principles with stronger wording.",
       "feedback": "Better wording does not fix the missing link to decisions, owners and evidence.",
       "best": false
      },
      {
       "text": "Assign an executive owner to each principle and define two or three testable requirements and controls for each, starting with high-risk systems.",
       "feedback": "Best. Ownership plus testable requirements connects principles to real decisions and evidence, beginning where risk is greatest.",
       "best": true
      },
      {
       "text": "Withdraw the principles to avoid accusations of ethics washing.",
       "feedback": "Withdrawal sends a poor signal and leaves teams with no guidance. The better path is to make them operational.",
       "best": false
      },
      {
       "text": "Commission a public marketing campaign about the principles.",
       "feedback": "Promoting principles that are not operational increases the reputational risk of ethics washing.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Is this principle operational?",
     "items": [
      "It has a named executive owner",
      "It is translated into specific, testable requirements",
      "Requirements are built into gates, procurement and engineering standards",
      "There is evidence it has been applied (tests, sign-offs, records)",
      "It can change or stop a project",
      "Breaches are reported and acted upon",
      "It is reviewed at least annually"
     ]
    },
    {
     "type": "reflection",
     "prompt": "Choose one of your organisation's stated values. Write one principle, one measurable requirement and one control that would make it real for an AI system you know."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "AI principles",
       "def": "High-level statements of what an organisation commits to when designing and using AI."
      },
      {
       "term": "Ethics washing",
       "def": "Presenting AI ethics commitments publicly without the processes or evidence to back them."
      },
      {
       "term": "Operationalisation",
       "def": "Turning principles into requirements, controls, owners and evidence that shape real decisions."
      },
      {
       "term": "Requirement",
       "def": "A specific, testable condition an AI system or process must meet."
      },
      {
       "term": "Control",
       "def": "A safeguard or check that reduces risk or ensures a requirement is met."
      },
      {
       "term": "Fairness",
       "def": "The principle that AI should not cause unjustified discrimination and should distribute benefits and burdens equitably."
      },
      {
       "term": "Human oversight",
       "def": "The ability of people to understand, monitor, intervene in and override AI systems."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which set best describes the common core of responsible-AI principles?",
       "options": [
        "Speed, scale, cost, novelty, automation, profit",
        "Accuracy only, measured on public benchmarks",
        "Open source, cloud hosting and large models",
        "Fairness, transparency, accountability, safety, privacy, human oversight"
       ],
       "answer": 3,
       "explain": "Comparative studies show strong convergence on this core across governments, international bodies and companies."
      },
      {
       "q": "'Approval rates for women must be at least 80% of the rate for men' is an example of a:",
       "options": [
        "Value",
        "Principle",
        "Incident",
        "Requirement"
       ],
       "answer": 3,
       "explain": "It is specific and testable, translating the fairness principle into something that can be checked."
      },
      {
       "q": "Which is the clearest sign of ethics washing?",
       "options": [
        "A principle with a named owner",
        "A fairness test in the release gate",
        "Published principles that have never changed or stopped any project",
        "An annual review of the principles"
       ],
       "answer": 2,
       "explain": "Principles that never affect decisions indicate commitments without substance."
      },
      {
       "q": "Why should principles be treated as an interdependent system?",
       "options": [
        "They support and sometimes constrain each other, so trade-offs must be balanced",
        "They are legally identical everywhere",
        "Only one principle can apply to each system",
        "They replace the need for risk assessment"
       ],
       "answer": 0,
       "explain": "For example, privacy limits data available for fairness testing, and transparency enables accountability."
      },
      {
       "q": "Where should translation of principles into controls start?",
       "options": [
        "With low-risk tools because they are easiest",
        "With high-risk systems where harm and liability are greatest",
        "With marketing material",
        "With systems that are being retired"
       ],
       "answer": 1,
       "explain": "Proportionality focuses limited effort where it protects people most."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l2",
   "title": "Fairness and Non-Discrimination",
   "subtitle": "Where bias comes from and what fairness can mean in practice",
   "minutes": 30,
   "objectives": [
    "Identify the sources of bias across the AI lifecycle",
    "Compare common definitions of fairness and their trade-offs",
    "Decide which fairness approach suits a given use case"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "AI bias is rarely the result of someone intending to discriminate. It enters quietly through history, data collection, labels and design choices, and it can scale a small unfairness to millions of decisions. Fairness governance asks three questions: **who could be disadvantaged, how would we know, and what level of difference is acceptable and justified?**"
    },
    {
     "type": "flow",
     "title": "Where bias enters the lifecycle",
     "items": [
      {
       "label": "History",
       "text": "Past decisions already reflect discrimination"
      },
      {
       "label": "Sampling",
       "text": "Some groups are under-represented in the data"
      },
      {
       "label": "Measurement",
       "text": "Labels or features measure groups differently"
      },
      {
       "label": "Modelling",
       "text": "Design choices favour the majority pattern"
      },
      {
       "label": "Evaluation",
       "text": "Tests use benchmarks that miss some groups"
      },
      {
       "label": "Deployment",
       "text": "The system is used in a context it was not built for"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Bias type",
      "What happens",
      "Example"
     ],
     "rows": [
      [
       "Historical bias",
       "Data faithfully records an unfair past",
       "Past loan approvals favoured salaried urban men, so a model learns to prefer them"
      ],
      [
       "Representation bias",
       "Some groups are missing or sparse in the data",
       "A skin-condition model trained mostly on lighter skin performs worse for darker skin"
      ],
      [
       "Measurement bias",
       "The label or feature is a poor proxy",
       "Using 'number of hospital visits' as a proxy for health need undercounts people with less access to care"
      ],
      [
       "Language bias",
       "Performance varies by language or dialect",
       "A speech system handles standard Bangla well but fails on Sylheti or Chittagonian speakers"
      ],
      [
       "Deployment bias",
       "The context of use differs from design",
       "A model built for Dhaka city applicants is used for rural agricultural loans"
      ]
     ],
     "title": "Types of bias with South Asian examples"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "Attributes that law or policy protects against discrimination. Lists vary by country but commonly include sex or gender, religion, race or ethnicity, caste, disability, age and place of birth. Bangladesh's Constitution, for example, prohibits state discrimination on grounds of religion, race, caste, sex or place of birth. Check the law that applies to your sector and jurisdiction.",
     "title": "Protected characteristics"
    },
    {
     "type": "compare",
     "title": "Three families of fairness definitions",
     "columns": [
      {
       "title": "Group fairness",
       "items": [
        "Compare outcomes or error rates across groups",
        "Examples: similar approval rates; similar false-negative rates",
        "Easy to measure and report"
       ]
      },
      {
       "title": "Individual fairness",
       "items": [
        "Similar individuals should be treated similarly",
        "Requires defining 'similar' carefully",
        "Harder to test at scale"
       ]
      },
      {
       "title": "Procedural fairness",
       "items": [
        "Fair process: notice, explanation, the chance to contest",
        "Focuses on how decisions are made and challenged",
        "Matters even when outcomes are balanced"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "When the true rates of an outcome differ between groups, it is mathematically impossible for a model to equalise selection rates, error rates and calibration across those groups simultaneously. Choosing a fairness definition is therefore a **values and policy decision**, not only a technical one. Document who made it and why.",
     "title": "You cannot satisfy every fairness metric at once"
    },
    {
     "type": "steps",
     "title": "Choosing a fairness approach for a use case",
     "items": [
      {
       "title": "Identify affected groups",
       "text": "List the groups who could be disadvantaged, including intersections such as rural women."
      },
      {
       "title": "Understand the harm",
       "text": "Is the main harm wrongly denying a benefit (false negatives) or wrongly accusing someone (false positives)?"
      },
      {
       "title": "Select metrics that match the harm",
       "text": "For hiring, compare selection rates; for fraud flags, compare false-positive rates."
      },
      {
       "title": "Set thresholds and justification",
       "text": "Agree acceptable gaps with legal, business and affected-group input."
      },
      {
       "title": "Test, mitigate and record",
       "text": "Measure, adjust data or model where needed, and document the decision (Module 6)."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Which fairness question matters most?",
     "situation": "A government agency in South Asia plans an AI system to flag welfare applications for fraud investigation. Investigations delay payments for weeks. Which fairness measure should the agency prioritise?",
     "options": [
      {
       "text": "Equal overall accuracy across districts.",
       "feedback": "Accuracy can look balanced while one group bears far more wrongful flags. It hides the specific harm here.",
       "best": false
      },
      {
       "text": "Equal false-positive rates across groups, so honest applicants in any group are equally unlikely to be wrongly flagged.",
       "feedback": "Best. The main harm is honest people being wrongly investigated and losing income, so false positives are the error to balance.",
       "best": true
      },
      {
       "text": "Equal numbers of investigations in each district.",
       "feedback": "Equal counts ignore differences in population and need, and may themselves be unfair.",
       "best": false
      },
      {
       "text": "Maximum total fraud detected, regardless of who is flagged.",
       "feedback": "Optimising detection alone ignores the distribution of wrongful harm, which is the core fairness concern.",
       "best": false
      }
     ]
    },
    {
     "type": "case",
     "title": "The scholarship screening tool",
     "context": "A private university in Chattogram used a model to rank scholarship applicants by 'likelihood of success'. It was trained on ten years of graduation data. An internal review found students from madrasa backgrounds and from outside major cities were ranked much lower, even with similar exam marks. Historically, those students had received less financial support and had dropped out more often for financial reasons.",
     "questions": [
      "What types of bias are present?",
      "Is the model 'accurate' and is it fair?",
      "What should the university do?"
     ],
     "answer": "The model shows historical bias (it learned outcomes shaped by past lack of support) and likely proxy effects (school type and location). It may be statistically accurate at predicting past outcomes, yet unfair, because it would deny support to exactly the students whose earlier drop-out was caused by lack of support, creating a feedback loop. The university should pause automated ranking, redefine the objective (for example, potential given support), test outcomes by school type and region, involve admissions staff and student representatives in setting fairness requirements, use the model only as one input with human review, and monitor results each intake."
    },
    {
     "type": "reflection",
     "prompt": "For one AI system you know, which group would be most harmed by a false positive, and which by a false negative? Which error matters more, and who should decide?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Algorithmic bias",
       "def": "Systematic and unjustified differences in an AI system's outputs or errors that disadvantage certain people or groups."
      },
      {
       "term": "Historical bias",
       "def": "Bias that arises because data accurately records past unfair decisions or conditions."
      },
      {
       "term": "Representation bias",
       "def": "Bias caused by some groups being missing or under-represented in training or test data."
      },
      {
       "term": "Measurement bias",
       "def": "Bias arising when a label or feature measures the intended concept differently or poorly for some groups."
      },
      {
       "term": "Protected characteristic",
       "def": "An attribute, such as sex, religion, race, caste, disability or age, that law or policy protects from discrimination."
      },
      {
       "term": "Group fairness",
       "def": "Fairness assessed by comparing outcomes or error rates across groups."
      },
      {
       "term": "Individual fairness",
       "def": "The idea that similar individuals should receive similar outcomes."
      },
      {
       "term": "Intersectionality",
       "def": "The combined effect of belonging to several groups at once, such as rural women, which can create distinct disadvantage."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A model trained on past hiring decisions learns to prefer graduates of a few elite universities. This is mainly:",
       "options": [
        "Measurement bias in the sensors",
        "Overfitting to synthetic data",
        "Historical bias",
        "A prompt injection"
       ],
       "answer": 2,
       "explain": "The data faithfully records past preferences, and the model reproduces them."
      },
      {
       "q": "Why is choosing a fairness metric partly a policy decision?",
       "options": [
        "Regulators always prescribe one metric for every system",
        "Different metrics conflict when base rates differ, so someone must choose which harm to prioritise",
        "All metrics give the same answer",
        "Metrics only matter for generative AI"
       ],
       "answer": 1,
       "explain": "Mathematical incompatibility between metrics means values must guide the choice."
      },
      {
       "q": "For a system that flags people for fraud investigation, which error rate usually matters most for fairness?",
       "options": [
        "False-positive rate",
        "Training loss",
        "Latency",
        "Token count"
       ],
       "answer": 0,
       "explain": "Wrongful flags cause the main harm to honest people, so false-positive rates should be compared across groups."
      },
      {
       "q": "A speech assistant works well in standard Bangla but poorly for regional dialects. Which bias is this?",
       "options": [
        "Historical bias in loan data",
        "Confirmation bias of auditors",
        "Automation bias",
        "Language or representation bias"
       ],
       "answer": 3,
       "explain": "Dialects under-represented in training data lead to worse performance for their speakers."
      },
      {
       "q": "Procedural fairness focuses on:",
       "options": [
        "Equal selection rates only",
        "Maximising model accuracy",
        "Notice, explanation and the ability to contest decisions",
        "Reducing compute costs"
       ],
       "answer": 2,
       "explain": "Procedural fairness concerns how decisions are made and challenged, not only their statistical outcomes."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l3",
   "title": "Transparency, Explainability and Accountability",
   "subtitle": "Who knows what, who explains, and who answers",
   "minutes": 25,
   "objectives": [
    "Distinguish transparency, explainability and interpretability",
    "Design transparency appropriate to different audiences",
    "Build accountability through roles, decision rights, contestability and redress"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Transparency is about **information**: being open that AI is used and providing appropriate facts about how. Explainability is about **reasons**: helping a person understand why a particular output was produced. Accountability is about **answerability**: someone must own the outcome, explain it, fix it and face consequences if it goes wrong. Together they make AI contestable, which is the real test of whether people are protected."
    },
    {
     "type": "table",
     "head": [
      "Audience",
      "What they need",
      "Example artefact"
     ],
     "rows": [
      [
       "Affected individuals",
       "That AI is involved, the main factors, how to contest",
       "Notice in the loan decision letter with a contact for human review"
      ],
      [
       "Users and operators",
       "Capabilities, limits, when not to rely on outputs",
       "Instructions for use and training"
      ],
      [
       "Regulators and auditors",
       "Design, data, testing, risk controls",
       "Technical documentation and logs"
      ],
      [
       "Board and executives",
       "Where AI is used, key risks and performance",
       "AI portfolio report"
      ],
      [
       "Public",
       "Commitments and high-level use",
       "AI principles and public register of systems"
      ]
     ],
     "title": "Transparency for different audiences"
    },
    {
     "type": "compare",
     "title": "Transparency, explainability, interpretability",
     "columns": [
      {
       "title": "Transparency",
       "items": [
        "Openness about the system's existence, purpose, data and limits",
        "Applies to the whole system and organisation"
       ]
      },
      {
       "title": "Explainability",
       "items": [
        "Reasons for a particular output, in terms the audience understands",
        "Often produced after the fact"
       ]
      },
      {
       "title": "Interpretability",
       "items": [
        "How far a human can understand the model's internal mechanics",
        "Higher in simple models such as scorecards"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "'Your application for a nano-loan was assessed with the help of an automated scoring system. The main factors were: irregular wallet top-ups in the last three months and a short account history. You can ask for a review by a member of our credit team within 30 days by replying to this message or visiting any branch.'",
     "title": "A good adverse-decision notice"
    },
    {
     "type": "framework",
     "title": "Building blocks of accountability",
     "items": [
      {
       "label": "A1",
       "title": "Named owners",
       "text": "Every AI system has an accountable business owner and a technical owner."
      },
      {
       "label": "A2",
       "title": "Decision rights",
       "text": "It is clear who can approve, change, pause or retire each system."
      },
      {
       "label": "A3",
       "title": "Traceability",
       "text": "Logs and records let you reconstruct what happened and why."
      },
      {
       "label": "A4",
       "title": "Contestability",
       "text": "Affected people can challenge outcomes and reach a human."
      },
      {
       "label": "A5",
       "title": "Redress",
       "text": "Errors are corrected and harm is remedied."
      },
      {
       "label": "A6",
       "title": "Consequences",
       "text": "Breaches of policy lead to action, and lessons change practice."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "No organisation can hand accountability to a model or a vendor. When a customer, court or regulator asks why a decision was made, 'the system decided' is not an answer. The deployer remains answerable for decisions made with AI in its operations.",
     "title": "The 'the algorithm decided' trap"
    },
    {
     "type": "template",
     "title": "AI accountability matrix (RACI)",
     "purpose": "Make roles explicit for each key activity on a high-risk AI system.",
     "columns": [
      "Activity",
      "Responsible",
      "Accountable",
      "Consulted",
      "Informed"
     ],
     "example": [
      [
       "Approve deployment of credit model",
       "Model risk team",
       "Chief Risk Officer",
       "Legal, privacy, business owner",
       "Board risk committee"
      ],
      [
       "Handle customer appeal of AI decision",
       "Credit operations reviewer",
       "Head of Lending",
       "Compliance",
       "Customer"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "title": "A request for reasons",
     "situation": "A job applicant rejected by an AI screening tool asks a garment company's HR team why. The vendor says the model is proprietary and cannot be explained. What should HR do?",
     "options": [
      {
       "text": "Tell the applicant the decision was made by the vendor's system and cannot be discussed.",
       "feedback": "This abdicates accountability. The company is the deployer and remains answerable for its hiring decisions.",
       "best": false
      },
      {
       "text": "Provide the main factors available, offer a human review of the application, and press the vendor for explanation capability as a contract requirement.",
       "feedback": "Best. It gives the applicant meaningful information and recourse now, and fixes the gap with the supplier for the future.",
       "best": true
      },
      {
       "text": "Delete the applicant's data to avoid further questions.",
       "feedback": "Deleting records to avoid scrutiny is a serious governance and possibly legal failure.",
       "best": false
      },
      {
       "text": "Send the applicant the full model source code.",
       "feedback": "Source code is neither meaningful to an applicant nor likely to be available, and it is not what an explanation requires.",
       "best": false
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Tell people when they are interacting with an AI system unless it is obvious.",
      "Label synthetic images, audio and video, especially realistic depictions of people.",
      "Tell individuals when AI significantly influenced a decision about them and how to contest it.",
      "Publish a plain-language summary of high-impact AI uses.",
      "Keep documentation detailed enough for an auditor to reconstruct key decisions."
     ],
     "title": "Practical transparency commitments"
    },
    {
     "type": "reflection",
     "prompt": "If a customer challenged an AI-assisted decision in your organisation today, how many days would it take to explain the decision and give them a human review? What would slow you down?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Transparency",
       "def": "Openness about the existence, purpose, functioning, data and limits of an AI system."
      },
      {
       "term": "Explainability",
       "def": "The ability to give reasons for a specific AI output in terms the audience can understand."
      },
      {
       "term": "Interpretability",
       "def": "The degree to which a person can understand how a model works internally."
      },
      {
       "term": "Contestability",
       "def": "The ability of affected people to challenge an AI-assisted decision and have it reviewed."
      },
      {
       "term": "Redress",
       "def": "Correction of errors and remedy of harm caused by an AI-assisted decision."
      },
      {
       "term": "Traceability",
       "def": "The ability to reconstruct how an AI system produced an outcome using logs and records."
      },
      {
       "term": "RACI",
       "def": "A matrix that assigns who is Responsible, Accountable, Consulted and Informed for each activity."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which concept concerns the reasons for a specific output?",
       "options": [
        "Transparency about system existence",
        "Data minimisation",
        "Explainability",
        "Robustness"
       ],
       "answer": 2,
       "explain": "Explainability gives reasons for a particular output; transparency is broader openness about the system."
      },
      {
       "q": "A vendor says its model is proprietary. Who remains accountable for decisions the deploying bank makes with it?",
       "options": [
        "Only the vendor",
        "The bank as deployer",
        "Nobody, because it is automated",
        "The customer"
       ],
       "answer": 1,
       "explain": "Deployers remain answerable for decisions made in their operations, whatever the source of the tool."
      },
      {
       "q": "Which artefact best serves an affected individual?",
       "options": [
        "The model's full training dataset",
        "A technical architecture diagram",
        "The vendor's annual report",
        "A plain notice with main factors and how to request human review"
       ],
       "answer": 3,
       "explain": "Individuals need meaningful, usable information and a route to contest."
      },
      {
       "q": "Contestability means:",
       "options": [
        "Affected people can challenge an outcome and reach a human reviewer",
        "The model can be retrained daily",
        "Auditors can access source code",
        "Vendors can bid against each other"
       ],
       "answer": 0,
       "explain": "It is the practical safeguard that turns transparency into protection."
      },
      {
       "q": "Which accountability building block lets you reconstruct what happened after an incident?",
       "options": [
        "Traceability through logs and records",
        "Redress",
        "Marketing",
        "Procurement discounts"
       ],
       "answer": 0,
       "explain": "Without logs and records, investigation and explanation become guesswork."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l4",
   "title": "Safety, Security, Robustness and Privacy",
   "subtitle": "AI that works as intended, resists attack and respects personal data",
   "minutes": 30,
   "objectives": [
    "Explain what safety, robustness and security mean for AI systems",
    "Recognise the main attack types against AI",
    "Apply core privacy principles to AI use cases",
    "Include sustainability and wellbeing in the safety conversation"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Safety means an AI system does not cause unacceptable harm, whether through error, misuse or unexpected behaviour. **Robustness** is its ability to keep performing under unusual inputs and changing conditions. **Security** is its resistance to deliberate attack. **Privacy** protects the people whose data the system learns from or processes. These principles share one idea: the system must keep working safely when reality differs from the test lab."
    },
    {
     "type": "table",
     "head": [
      "Attack",
      "What the attacker does",
      "Possible impact"
     ],
     "rows": [
      [
       "Data poisoning",
       "Inserts manipulated examples into training or retrieval data",
       "Hidden backdoors or degraded behaviour"
      ],
      [
       "Adversarial examples",
       "Crafts inputs with small changes that fool the model",
       "Fraud passes detection; signs misread"
      ],
      [
       "Prompt injection and jailbreaks",
       "Uses crafted text to override instructions or safety rules",
       "Data leakage, harmful output, unauthorised actions"
      ],
      [
       "Model extraction",
       "Queries the model repeatedly to copy its behaviour",
       "Theft of intellectual property; easier attacks"
      ],
      [
       "Membership and data inference",
       "Probes outputs to learn whether someone's data was used, or recover it",
       "Privacy breach"
      ],
      [
       "Supply-chain compromise",
       "Tampers with pre-trained models, libraries or datasets",
       "Malicious code or behaviour inside trusted components"
      ]
     ],
     "title": "Attacks specific to AI systems"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Most AI incidents still involve ordinary weaknesses: exposed keys, excessive permissions, unpatched servers, misconfigured storage. Apply your existing security controls to AI systems first, then add AI-specific defences.",
     "title": "AI security is still security"
    },
    {
     "type": "keypoints",
     "items": [
      "Define the intended purpose and the conditions where the system must not be used.",
      "Test with edge cases, noisy data, rare groups and adversarial inputs, not only typical data.",
      "Design safe failure: fall back to a human or a simple rule when confidence is low.",
      "Limit what AI can do: rate limits, transaction caps, approval gates.",
      "Red-team high-risk and generative systems before launch and after major changes.",
      "Monitor in production and keep a tested way to switch the system off."
     ],
     "title": "Engineering for safety and robustness"
    },
    {
     "type": "framework",
     "title": "Core privacy principles applied to AI",
     "items": [
      {
       "label": "PR1",
       "title": "Lawfulness and fairness",
       "text": "Have a valid legal basis, and do not use data in ways people would not reasonably expect."
      },
      {
       "label": "PR2",
       "title": "Purpose limitation",
       "text": "Data collected for one purpose should not be reused for incompatible AI training without a basis."
      },
      {
       "label": "PR3",
       "title": "Data minimisation",
       "text": "Use only the data needed; more data is not automatically better."
      },
      {
       "label": "PR4",
       "title": "Accuracy",
       "text": "Keep data and inferences correct, because AI amplifies errors."
      },
      {
       "label": "PR5",
       "title": "Storage limitation",
       "text": "Keep prompts, logs and training data only as long as justified."
      },
      {
       "label": "PR6",
       "title": "Security",
       "text": "Protect data across the pipeline, including model outputs and logs."
      },
      {
       "label": "PR7",
       "title": "Individual rights",
       "text": "Support access, correction, objection and review of automated decisions where law provides."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A private hospital in Dhaka pilots a generative-AI tool to draft discharge summaries. Privacy controls include: processing only within a contracted environment that does not use data for training, removing national ID numbers before prompts, limiting access to treating clinicians, keeping prompt logs for 90 days, and requiring a doctor to review every summary before it reaches the patient record.",
     "title": "Health data in a hospital pilot"
    },
    {
     "type": "compare",
     "title": "Safety, security and privacy: different questions",
     "columns": [
      {
       "title": "Safety",
       "items": [
        "Could the system cause harm even when used as intended?",
        "Focus: errors, misuse, failure modes"
       ]
      },
      {
       "title": "Security",
       "items": [
        "Could someone deliberately make it misbehave or steal from it?",
        "Focus: attackers, vulnerabilities, access"
       ]
      },
      {
       "title": "Privacy",
       "items": [
        "Is personal data used lawfully, minimally and respectfully?",
        "Focus: individuals' rights and expectations"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "Responsible-AI principles increasingly include **sustainability and wellbeing**. Training and running large models uses significant energy and water, and AI can affect jobs, mental health and the information environment. A proportionate programme asks whether a smaller model would do, records the environmental footprint of major systems where possible and considers workforce impacts when AI changes jobs."
    },
    {
     "type": "scenario",
     "title": "A tempting dataset",
     "situation": "A mobile financial services provider wants to train a marketing model on customers' full transaction histories, which were collected to run payments. The data science team says 'more data means better predictions'. What should the governance lead advise?",
     "options": [
      {
       "text": "Use all the data, because customers agreed to the general terms of service.",
       "feedback": "Broad terms rarely justify every new use. Repurposing payment data for marketing needs a proper legal basis and must respect purpose limitation.",
       "best": false
      },
      {
       "text": "Assess compatibility of the new purpose and the legal basis, minimise to the features actually needed, and run a privacy impact assessment before training.",
       "feedback": "Best. This applies purpose limitation, minimisation and impact assessment before any data moves.",
       "best": true
      },
      {
       "text": "Anonymise by removing names, then use everything.",
       "feedback": "Removing names alone rarely anonymises transaction data, which can often re-identify people.",
       "best": false
      },
      {
       "text": "Refuse all use of transaction data for AI.",
       "feedback": "Blanket refusal ignores lawful, proportionate options and is not a governance solution.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which of your AI systems would cause the most harm if an attacker manipulated it? What is the one control that would most reduce that risk?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Robustness",
       "def": "An AI system's ability to maintain performance under unusual, noisy or changing conditions."
      },
      {
       "term": "Data poisoning",
       "def": "An attack that corrupts training or retrieval data to alter a model's behaviour."
      },
      {
       "term": "Adversarial example",
       "def": "An input deliberately altered, often imperceptibly, to make a model err."
      },
      {
       "term": "Model extraction",
       "def": "Copying a model's behaviour by systematically querying it."
      },
      {
       "term": "Red teaming",
       "def": "Structured adversarial testing to find ways a system can fail or be misused."
      },
      {
       "term": "Purpose limitation",
       "def": "The privacy principle that data collected for one purpose should not be reused for incompatible purposes."
      },
      {
       "term": "Data minimisation",
       "def": "Using only the personal data that is adequate, relevant and necessary for the purpose."
      },
      {
       "term": "Safe failure",
       "def": "Designing a system so that when it fails, it does so in a way that limits harm, such as handing over to a human."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "An attacker adds manipulated documents to a knowledge base so the assistant gives harmful advice. This is:",
       "options": [
        "Model extraction",
        "Data poisoning",
        "Overfitting",
        "Data minimisation"
       ],
       "answer": 1,
       "explain": "Corrupting the data a system learns from or retrieves is poisoning."
      },
      {
       "q": "Which principle is most at stake when payment data is reused to train a marketing model?",
       "options": [
        "Robustness",
        "Interpretability",
        "Latency",
        "Purpose limitation"
       ],
       "answer": 3,
       "explain": "Using data collected for one purpose for an incompatible new purpose raises purpose-limitation concerns."
      },
      {
       "q": "What does safe failure mean in practice?",
       "options": [
        "Falling back to a human or simple rule when the system is uncertain or breaks",
        "Never letting the system fail",
        "Hiding errors from users",
        "Restarting the server automatically"
       ],
       "answer": 0,
       "explain": "Safe failure accepts that systems fail and designs the failure to limit harm."
      },
      {
       "q": "Why apply ordinary security controls to AI first?",
       "options": [
        "AI systems are immune to ordinary attacks",
        "AI-specific attacks are illegal",
        "Many AI incidents exploit ordinary weaknesses such as exposed keys or excessive permissions",
        "Ordinary controls are cheaper to ignore"
       ],
       "answer": 2,
       "explain": "Basic hygiene closes the most common paths; AI-specific defences are added on top."
      },
      {
       "q": "Removing names from detailed transaction histories:",
       "options": [
        "Always makes it anonymous",
        "Makes it public data",
        "Usually does not make the data anonymous",
        "Removes the need for a legal basis"
       ],
       "answer": 2,
       "explain": "Rich behavioural data can often re-identify individuals even without names."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l5",
   "title": "Human Oversight and Turning Principles into Policy",
   "subtitle": "Meaningful human control and a policy framework that people follow",
   "minutes": 30,
   "objectives": [
    "Compare human-in-the-loop, on-the-loop and in-command oversight",
    "Design oversight that counters automation bias",
    "Structure an AI policy framework from principles to procedures"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Human oversight is often added as a reassuring phrase: 'a human will review every decision'. In practice, a reviewer who approves 400 AI recommendations a day, with no time, training or authority to disagree, provides **rubber-stamp oversight**. Meaningful oversight requires competence, time, information, authority and the ability to stop the system."
    },
    {
     "type": "compare",
     "title": "Models of human oversight",
     "columns": [
      {
       "title": "Human in the loop",
       "items": [
        "A person approves each decision before it takes effect",
        "Use: high-impact individual decisions such as loan refusals",
        "Cost: slower, needs capacity"
       ]
      },
      {
       "title": "Human on the loop",
       "items": [
        "The system acts; people monitor and can intervene",
        "Use: high-volume decisions such as fraud blocks with fast review",
        "Cost: needs good alerts and quick override"
       ]
      },
      {
       "title": "Human in command",
       "items": [
        "People decide whether, when and how AI is used at all",
        "Use: governance of every system",
        "Cost: requires clear decision rights"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "The tendency to over-trust automated recommendations, accepting them even when other information suggests they are wrong. It grows when systems are usually right, when reviewers are busy and when disagreeing requires extra effort or justification.",
     "title": "Automation bias"
    },
    {
     "type": "keypoints",
     "items": [
      "Give reviewers the information behind the output, not just a score.",
      "Train reviewers on the system's limits and typical errors.",
      "Set realistic workloads and measure override rates; near-zero overrides are a warning sign.",
      "Make disagreeing as easy as agreeing, with no penalty for justified overrides.",
      "Give named people authority to pause or stop the system.",
      "Occasionally insert test cases to check reviewers are genuinely reviewing."
     ],
     "title": "Designing oversight that works"
    },
    {
     "type": "layers",
     "title": "AI policy framework (top layer first)",
     "items": [
      {
       "label": "Principles",
       "parts": [
        "Board-approved commitments",
        "Short, stable, public"
       ]
      },
      {
       "label": "AI policy",
       "parts": [
        "Mandatory rules and roles",
        "Scope, risk tiers, approvals, prohibited uses"
       ]
      },
      {
       "label": "Standards",
       "parts": [
        "Specific requirements per topic",
        "Testing, documentation, generative-AI use, procurement"
       ]
      },
      {
       "label": "Procedures and guidelines",
       "parts": [
        "Step-by-step how-to",
        "Impact assessment process, model card template"
       ]
      },
      {
       "label": "Records and evidence",
       "parts": [
        "Inventory, assessments, approvals, logs"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Section",
      "Content"
     ],
     "rows": [
      [
       "Purpose and scope",
       "Which AI systems, entities and people the policy covers, using a clear AI definition"
      ],
      [
       "Principles",
       "Reference to the organisation's responsible-AI principles"
      ],
      [
       "Roles and governance",
       "Board, AI governance committee, owners, second and third lines"
      ],
      [
       "Risk classification",
       "How systems are tiered and what each tier requires"
      ],
      [
       "Prohibited and restricted uses",
       "Uses the organisation will not pursue and those needing special approval"
      ],
      [
       "Lifecycle requirements",
       "Inventory, assessments, testing, approval, monitoring, retirement"
      ],
      [
       "Third parties",
       "Due diligence and contract requirements for AI suppliers"
      ],
      [
       "Incidents and reporting",
       "How AI incidents and concerns are raised and handled"
      ],
      [
       "Training and literacy",
       "Required AI literacy for staff by role"
      ],
      [
       "Exceptions and review",
       "How exceptions are approved and how often the policy is reviewed"
      ]
     ],
     "title": "What a core AI policy should contain"
    },
    {
     "type": "steps",
     "title": "Writing and launching an AI policy",
     "items": [
      {
       "title": "Start from what exists",
       "text": "Reuse privacy, security, model-risk and procurement policies rather than duplicating them."
      },
      {
       "title": "Draft with the people who must follow it",
       "text": "Include engineering, business, legal, HR and procurement."
      },
      {
       "title": "Keep the policy short",
       "text": "Put detail in standards and procedures so the policy stays stable."
      },
      {
       "title": "Approve at the right level",
       "text": "Board or executive committee approves the policy; owners approve standards."
      },
      {
       "title": "Communicate and train",
       "text": "Explain what changes for each role, with examples."
      },
      {
       "title": "Measure adoption",
       "text": "Track inventory coverage, assessments completed and exceptions requested."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Oversight on paper",
     "situation": "A bank's policy states that a credit officer reviews every AI loan refusal. Data shows officers spend an average of 40 seconds per case and overturn 0.2% of refusals. What does this MOST likely indicate?",
     "options": [
      {
       "text": "The model is almost perfect, so oversight is working well.",
       "feedback": "A near-zero override rate with very little review time more often signals automation bias than perfection.",
       "best": false
      },
      {
       "text": "Oversight may be ineffective; review workload, information shown, training and incentives, and test with seeded cases.",
       "feedback": "Best. The pattern suggests rubber-stamping. Investigating the conditions of review and testing reviewers reveals whether oversight is meaningful.",
       "best": true
      },
      {
       "text": "Remove the human review to save cost because it adds nothing.",
       "feedback": "Removing oversight for high-impact decisions may breach policy or law and removes a safeguard that should be fixed, not abandoned.",
       "best": false
      },
      {
       "text": "Double the number of officers without changing anything else.",
       "feedback": "More reviewers may help with time, but without better information and training the same bias may persist.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Human oversight design record",
     "purpose": "Document how oversight will work for a specific AI system so it can be tested and audited.",
     "columns": [
      "System",
      "Oversight model",
      "Who oversees and their training",
      "Information shown to reviewer",
      "Authority to override or stop",
      "Measures of effectiveness"
     ],
     "example": [
      [
       "Nano-loan refusal model",
       "Human in the loop for refusals",
       "Credit officers, 1-day course on model limits",
       "Score, top factors, data quality warnings",
       "Officer overrides; Head of Lending can pause",
       "Override rate, review time, seeded-case accuracy"
      ]
     ],
     "rows": 5
    },
    {
     "type": "reflection",
     "prompt": "Think of a 'human review' step in an AI process you know. Does the reviewer have the time, information, training and authority to disagree? What would you change first?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Human in the loop",
       "def": "Oversight in which a person must approve each AI-assisted decision before it takes effect."
      },
      {
       "term": "Human on the loop",
       "def": "Oversight in which a system acts autonomously while people monitor and can intervene."
      },
      {
       "term": "Human in command",
       "def": "People retain authority over whether and how AI is used at all."
      },
      {
       "term": "Automation bias",
       "def": "The tendency to over-rely on automated outputs, even when they are wrong."
      },
      {
       "term": "Override rate",
       "def": "The share of AI recommendations that human reviewers change or reject."
      },
      {
       "term": "AI policy",
       "def": "A mandatory organisational document setting rules, roles and requirements for AI."
      },
      {
       "term": "Standard (internal)",
       "def": "A detailed mandatory requirement supporting a policy on a specific topic."
      },
      {
       "term": "Exception process",
       "def": "A controlled way to approve and record departures from policy, with time limits and owners."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A fraud system blocks suspicious transactions instantly while analysts monitor alerts and can reverse blocks. This is:",
       "options": [
        "Human on the loop",
        "Human in the loop",
        "No oversight",
        "Human in command only"
       ],
       "answer": 0,
       "explain": "The system acts first, with people monitoring and able to intervene."
      },
      {
       "q": "Which signal most suggests automation bias?",
       "options": [
        "Reviewers ask for training",
        "Reviewers overturn almost no recommendations after very short reviews",
        "Override rates vary by case type",
        "Reviewers escalate unclear cases"
       ],
       "answer": 1,
       "explain": "Very low override rates with minimal review time indicate rubber-stamping."
      },
      {
       "q": "Where should detailed testing requirements usually sit in a policy framework?",
       "options": [
        "In the board-approved principles",
        "In marketing material",
        "In standards and procedures beneath the policy",
        "Nowhere; teams decide alone"
       ],
       "answer": 2,
       "explain": "Keeping detail in standards lets the policy stay short and stable."
      },
      {
       "q": "Which element is essential for meaningful oversight?",
       "options": [
        "A larger model",
        "A longer user manual only",
        "Authority and ability to override or stop the system",
        "Hiding the model score"
       ],
       "answer": 2,
       "explain": "Without authority to act, oversight is observation only."
      },
      {
       "q": "Why reuse existing privacy, security and procurement policies?",
       "options": [
        "Because AI needs no new rules",
        "Because regulators forbid new policies",
        "To make the AI policy longer",
        "To avoid duplication and conflict, adding only what AI needs"
       ],
       "answer": 3,
       "explain": "Integration keeps the framework coherent and easier to follow."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m3",
 "order": 3,
 "code": "Regulation",
 "title": "The AI Regulatory and Standards Landscape",
 "subtitle": "The EU AI Act, NIST AI RMF, ISO/IEC 42001, OECD principles and South Asian rules, as of 2026",
 "outcomes": [
  "Map which laws, regulations and frameworks apply to an AI system, and why",
  "Classify AI systems under the EU AI Act and summarise the obligations for each role",
  "Explain how the NIST AI RMF, ISO/IEC 42001 and OECD principles structure a governance programme",
  "Describe the direction of AI governance in South Asia and other key jurisdictions as of 2026",
  "Run horizon scanning so regulatory knowledge stays current"
 ],
 "lessons": [
  {
   "id": "m3-l1",
   "title": "Reading the AI Regulatory Landscape",
   "subtitle": "Hard law, soft law and standards, and why existing law already applies to AI",
   "minutes": 25,
   "objectives": [
    "Distinguish binding law, soft law, voluntary frameworks and certifiable standards",
    "Explain why existing laws already govern most AI uses",
    "Compare the main regulatory approaches to AI around the world as of 2026"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "AI governance professionals work in a crowded and moving landscape. New AI-specific laws sit on top of data protection, consumer protection, anti-discrimination, product safety, employment and sector rules that already apply to AI. Alongside the law sit voluntary frameworks and international standards, which regulators and courts increasingly treat as evidence of good practice. Your job is not to memorise every rule but to know **which instruments apply to which system, and what evidence each expects**."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "This module summarises laws, regulations and standards **in our own words, as of 2026**, for learning purposes. It is not legal advice. Rules are amended, guidance and court decisions change how they apply, and the answer always depends on the facts. Read the official texts and involve qualified legal counsel before relying on any interpretation.",
     "title": "Not legal advice"
    },
    {
     "type": "layers",
     "title": "The layers of AI rules (top layer first)",
     "items": [
      {
       "label": "Organisation policy",
       "parts": [
        "Your principles, AI policy and standards",
        "Contract terms with customers and suppliers"
       ]
      },
      {
       "label": "Certifiable standards",
       "parts": [
        "Management system standards such as ISO/IEC 42001",
        "Audited by accredited certification bodies"
       ]
      },
      {
       "label": "Voluntary frameworks and guidance",
       "parts": [
        "NIST AI Risk Management Framework",
        "Regulator guidance, codes of practice"
       ]
      },
      {
       "label": "AI-specific law",
       "parts": [
        "EU AI Act, national AI acts and rules",
        "Rules on deepfakes, labelling, high-impact AI"
       ]
      },
      {
       "label": "Existing general law",
       "parts": [
        "Data protection, consumer protection, equality",
        "Product liability, employment, sector regulation"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Area of law",
      "How it reaches AI",
      "Example question"
     ],
     "rows": [
      [
       "Data protection",
       "Personal data in training, prompts and outputs; automated decision rules",
       "Do we have a lawful basis to train on customer data?"
      ],
      [
       "Consumer protection",
       "Misleading claims, unfair practices, chatbot statements",
       "Are our 'AI-powered' marketing claims true?"
      ],
      [
       "Equality and anti-discrimination",
       "Discriminatory outcomes in hiring, lending, housing, services",
       "Does the screening tool disadvantage women?"
      ],
      [
       "Product safety and liability",
       "AI inside products and medical devices",
       "Is the AI feature part of a regulated device?"
      ],
      [
       "Employment law",
       "Monitoring, hiring, dismissal, worker consultation",
       "Must we consult workers before AI monitoring?"
      ],
      [
       "Intellectual property",
       "Training data rights, ownership of outputs",
       "Can we use generated images commercially?"
      ],
      [
       "Sector regulation",
       "Banking model risk, insurance, health, telecoms",
       "Does the central bank expect model validation?"
      ]
     ],
     "title": "Existing laws that already apply to AI"
    },
    {
     "type": "compare",
     "title": "Main regulatory approaches (as of 2026)",
     "columns": [
      {
       "title": "Comprehensive, risk-based law",
       "items": [
        "One horizontal law with tiers of obligations",
        "Example: the European Union's AI Act",
        "Also: South Korea's AI Basic Act in force from January 2026"
       ]
      },
      {
       "title": "Principles plus existing regulators",
       "items": [
        "High-level principles applied by sector regulators",
        "Examples: the United Kingdom; India's 2025 AI governance guidelines",
        "Light new legislation, more guidance"
       ]
      },
      {
       "title": "Targeted and sub-national rules",
       "items": [
        "Specific rules for specific technologies or uses",
        "Examples: China's rules on recommendation algorithms, deep synthesis and generative AI; US state laws on hiring tools and high-risk AI",
        "Patchwork that changes quickly"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Several AI laws apply to organisations outside their territory when the system is placed on that market or its outputs are used there. A software company in Dhaka that sells an AI hiring tool to employers in Germany can be a provider under EU rules without having any office in Europe.",
     "title": "Extraterritorial reach"
    },
    {
     "type": "keypoints",
     "items": [
      "Regulators cite voluntary frameworks when judging whether an organisation acted reasonably.",
      "Procurement contracts require conformity with standards such as ISO/IEC 42001.",
      "Harmonised standards can give a legal presumption of conformity with binding law.",
      "Codes of practice can become the expected way to demonstrate compliance.",
      "Courts and tribunals look to recognised good practice when assessing negligence."
     ],
     "title": "Soft law that hardens"
    },
    {
     "type": "scenario",
     "title": "Where to start",
     "situation": "A private hospital group in Dhaka asks its new AI governance lead, 'Which AI law do we need to comply with?' It uses AI for radiology triage, appointment scheduling and a patient chatbot, and has a research partnership with a European university. What is the BEST first answer?",
     "options": [
      {
       "text": "'None yet, because Bangladesh has no AI act.'",
       "feedback": "Existing laws on data protection, medical practice, consumer protection and cyber security already apply, and some EU rules may apply through the partnership.",
       "best": false
      },
      {
       "text": "'Only the EU AI Act, because it is the strictest law.'",
       "feedback": "Strictness does not determine applicability. The EU law applies only where its scope conditions are met.",
       "best": false
      },
      {
       "text": "'Let us map each system against existing local law, sector rules and any foreign law that applies through markets or partners, then align to a recognised framework.'",
       "feedback": "Best. Applicability depends on each system and its context. Mapping per system, then aligning to a framework, gives a defensible basis.",
       "best": true
      },
      {
       "text": "'We should wait until a national AI law is passed.'",
       "feedback": "Waiting leaves current legal duties and risks unmanaged.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Regulatory applicability map",
     "purpose": "For each AI system, record which laws, rules and frameworks apply and why.",
     "columns": [
      "AI system",
      "Jurisdictions touched",
      "Existing law engaged",
      "AI-specific rules",
      "Frameworks aligned to",
      "Legal owner"
     ],
     "example": [
      [
       "Radiology triage assistant",
       "Bangladesh; EU research partner",
       "Data protection, medical practice, cyber security",
       "EU AI Act possibly if supplied or used in EU",
       "ISO/IEC 42001, NIST AI RMF",
       "Head of Legal"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "List three existing laws in your country that already apply to an AI system you know. Which one would a regulator most likely use first if something went wrong?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Hard law",
       "def": "Binding legislation and regulation enforced by authorities and courts."
      },
      {
       "term": "Soft law",
       "def": "Non-binding instruments such as guidelines, principles and codes that still influence behaviour and expectations."
      },
      {
       "term": "Horizontal regulation",
       "def": "A law that applies across sectors, such as a general AI act or data protection law."
      },
      {
       "term": "Sectoral regulation",
       "def": "Rules specific to one industry, such as banking model-risk guidance."
      },
      {
       "term": "Extraterritorial effect",
       "def": "When a law applies to organisations outside the jurisdiction because of where systems are sold or outputs used."
      },
      {
       "term": "Harmonised standard",
       "def": "In EU law, a standard whose use can give a presumption of conformity with legal requirements."
      },
      {
       "term": "Regulatory sandbox",
       "def": "A supervised environment where innovators can test products under regulator guidance."
      },
      {
       "term": "Applicability assessment",
       "def": "Analysis of which legal and framework requirements apply to a specific system and why."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Bangladesh has no standalone AI act. Which statement is most accurate for an AI deployer there?",
       "options": [
        "No rules apply until an AI act is passed",
        "Existing laws such as data protection, consumer, cyber security and sector rules still apply",
        "Only foreign AI laws apply",
        "Only voluntary frameworks apply"
       ],
       "answer": 1,
       "explain": "AI is governed by existing general and sector law even without an AI-specific statute."
      },
      {
       "q": "Which is an example of soft law?",
       "options": [
        "A statute passed by parliament",
        "A court judgment",
        "A criminal penalty",
        "A regulator's guidance note on AI in lending"
       ],
       "answer": 3,
       "explain": "Guidance is non-binding but shapes expectations and enforcement."
      },
      {
       "q": "Why can a Dhaka software exporter be subject to EU AI rules?",
       "options": [
        "Because all countries must adopt EU law",
        "Only if it opens an office in Europe",
        "Never; laws apply only within borders",
        "Because the law can apply where systems are placed on the EU market or outputs used there"
       ],
       "answer": 3,
       "explain": "Extraterritorial scope attaches to market placement and use, not just location of the company."
      },
      {
       "q": "A comprehensive, risk-based horizontal AI law is best illustrated by:",
       "options": [
        "The EU AI Act",
        "A bank's internal model policy",
        "A voluntary industry pledge",
        "A single city's procurement rule"
       ],
       "answer": 0,
       "explain": "The EU AI Act applies across sectors with tiered obligations."
      },
      {
       "q": "How do voluntary frameworks 'harden' over time?",
       "options": [
        "They automatically become criminal law",
        "They expire after two years",
        "Regulators, contracts and courts treat them as the expected standard of care",
        "They replace data protection law"
       ],
       "answer": 2,
       "explain": "Even without legal force, frameworks become benchmarks for reasonable conduct."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l2",
   "title": "The EU AI Act: Scope, Roles and Risk Tiers",
   "subtitle": "How the world's first comprehensive AI law classifies systems",
   "minutes": 35,
   "objectives": [
    "Explain the scope and territorial reach of the EU AI Act",
    "Identify the roles the Act regulates",
    "Classify AI systems into prohibited, high-risk, transparency and minimal-risk tiers",
    "Recognise where general-purpose AI models are treated separately"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The EU Artificial Intelligence Act (Regulation (EU) 2024/1689) entered into force on 1 August 2024 and applies in stages. It is a **product-safety style law**: it sets requirements that AI systems must meet before and while they are on the EU market, scaled to risk. It sits alongside, not instead of, the GDPR, consumer law and sector rules. The summary below is our own description as of 2026."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "This module summarises laws, regulations and standards **in our own words, as of 2026**, for learning purposes. It is not legal advice. Rules are amended, guidance and court decisions change how they apply, and the answer always depends on the facts. Read the official texts and involve qualified legal counsel before relying on any interpretation.",
     "title": "Not legal advice"
    },
    {
     "type": "keypoints",
     "items": [
      "**Providers** placing AI systems or general-purpose AI models on the EU market or putting them into service there, wherever they are established.",
      "**Deployers** of AI systems located in the EU.",
      "Providers and deployers outside the EU where the **output** of the system is used in the EU.",
      "Importers, distributors, product manufacturers and authorised representatives.",
      "Main exclusions: military and national security uses, scientific research and development before market placement, and purely personal non-professional use. Free and open-source components have limited exemptions that do not cover prohibited or high-risk uses."
     ],
     "title": "Who and what is in scope (simplified)"
    },
    {
     "type": "layers",
     "title": "The risk tiers (top layer = most restricted)",
     "items": [
      {
       "label": "Unacceptable risk: prohibited",
       "parts": [
        "Banned practices since 2 February 2025"
       ]
      },
      {
       "label": "High risk",
       "parts": [
        "Strict requirements before and after market placement",
        "Product-safety components and listed use areas"
       ]
      },
      {
       "label": "Transparency risk",
       "parts": [
        "Disclosure duties for chatbots, synthetic content, deepfakes, emotion recognition"
       ]
      },
      {
       "label": "Minimal risk",
       "parts": [
        "No new obligations; voluntary codes encouraged",
        "Most AI, e.g. spam filters, games, inventory optimisation"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Practice",
      "In plain words"
     ],
     "rows": [
      [
       "Harmful manipulation",
       "Subliminal, purposely manipulative or deceptive techniques that materially distort behaviour and cause significant harm"
      ],
      [
       "Exploiting vulnerabilities",
       "Exploiting age, disability or social or economic situation to distort behaviour harmfully"
      ],
      [
       "Social scoring",
       "Evaluating people over time on social behaviour or traits, leading to unjustified or disproportionate detrimental treatment"
      ],
      [
       "Individual crime prediction",
       "Predicting a person's risk of offending based solely on profiling or personality traits"
      ],
      [
       "Untargeted face scraping",
       "Building facial recognition databases by untargeted scraping of internet or CCTV images"
      ],
      [
       "Emotion recognition at work and school",
       "Inferring emotions in workplaces and education, except for medical or safety reasons"
      ],
      [
       "Sensitive biometric categorisation",
       "Categorising people by biometrics to infer race, political opinions, union membership, religion, sex life or sexual orientation (with narrow law-enforcement exceptions for lawfully acquired data)"
      ],
      [
       "Real-time remote biometric identification by police",
       "Live facial recognition in public spaces for law enforcement, except narrowly defined, authorised cases"
      ]
     ],
     "title": "Prohibited practices (summarised)"
    },
    {
     "type": "framework",
     "title": "Two routes to high risk",
     "items": [
      {
       "label": "HR1",
       "title": "Safety component of regulated products",
       "text": "AI that is a product, or a safety component of a product, covered by listed EU product legislation (such as medical devices, machinery, toys, lifts) and requiring third-party conformity assessment."
      },
      {
       "label": "HR2",
       "title": "Listed use areas (Annex III)",
       "text": "Biometrics; critical infrastructure; education and vocational training; employment and worker management; access to essential private and public services (such as credit scoring, public benefits, life and health insurance pricing, emergency triage); law enforcement; migration, asylum and border control; administration of justice and democratic processes."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A system in a listed use area is **not** high-risk if it does not pose a significant risk of harm, for example because it performs a narrow procedural task, improves the result of work a human has already completed, detects patterns in past decisions without replacing human assessment, or does preparatory work. However, a listed system that **profiles individuals** is always high-risk. A provider relying on this filter must document its assessment.",
     "title": "The high-risk filter"
    },
    {
     "type": "table",
     "head": [
      "System",
      "Likely tier",
      "Reason"
     ],
     "rows": [
      [
       "CV-ranking tool used by employers in the EU",
       "High risk",
       "Employment: recruitment and selection"
      ],
      [
       "Credit-scoring model for consumer loans in the EU",
       "High risk",
       "Access to essential private services (creditworthiness), unless used only for fraud detection"
      ],
      [
       "Customer-service chatbot for an online shop",
       "Transparency",
       "People must be told they are interacting with AI"
      ],
      [
       "Emotion detection on call-centre staff to rate their attitude",
       "Prohibited",
       "Emotion recognition in the workplace without medical or safety reason"
      ],
      [
       "AI that sorts incoming invoices by supplier",
       "Minimal",
       "No listed use area, low impact"
      ],
      [
       "Image generator used to create marketing visuals",
       "Transparency",
       "Synthetic content must be machine-readably marked; deepfakes disclosed"
      ]
     ],
     "title": "Classify these examples"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "Large models that can perform a wide range of tasks (general-purpose AI models) have their own obligations, which apply to the **model provider** regardless of how the model is later used. Models trained with very large amounts of compute (a presumption threshold of 10^25 floating-point operations) or designated by the Commission are treated as having **systemic risk** and carry extra duties. A system built on such a model is then classified by its own use.",
     "title": "General-purpose AI models: a separate track"
    },
    {
     "type": "scenario",
     "title": "Classify the system",
     "situation": "A Bangladeshi HR-tech company sells a tool to employers in Ireland that analyses video interviews and scores candidates' 'enthusiasm' from facial expressions to rank them for shortlisting. How should the governance lead classify it under the EU AI Act?",
     "options": [
      {
       "text": "Minimal risk, because the employer makes the final hiring decision.",
       "feedback": "Human final decision does not remove the classification. The tool ranks candidates in recruitment and infers emotions.",
       "best": false
      },
      {
       "text": "Transparency risk only, because candidates are told AI is used.",
       "feedback": "Disclosure does not cure the underlying issue. The use falls in a restricted or high-risk area.",
       "best": false
      },
      {
       "text": "At least high-risk as a recruitment tool, and the emotion-inference element is likely to fall within the workplace emotion-recognition prohibition; seek legal advice and redesign.",
       "feedback": "Best. Recruitment ranking is a listed high-risk use, and inferring emotions in an employment context is likely prohibited. The company, as provider, must act before selling in the EU.",
       "best": true
      },
      {
       "text": "Out of scope, because the company is based in Bangladesh.",
       "feedback": "The Act applies to providers placing systems on the EU market wherever they are based.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "EU AI Act",
       "def": "Regulation (EU) 2024/1689, the European Union's horizontal, risk-based law on AI systems and general-purpose AI models."
      },
      {
       "term": "Prohibited AI practice",
       "def": "A use of AI banned under the EU AI Act because of unacceptable risk, such as social scoring."
      },
      {
       "term": "High-risk AI system",
       "def": "Under the EU AI Act, an AI system that is a regulated product safety component or falls in a listed use area and poses significant risk."
      },
      {
       "term": "Annex III",
       "def": "The EU AI Act's list of use areas, such as employment and credit scoring, in which AI systems are presumed high-risk."
      },
      {
       "term": "General-purpose AI model",
       "def": "A model trained on broad data that can competently perform a wide range of distinct tasks and be integrated into many systems."
      },
      {
       "term": "Systemic risk (GPAI)",
       "def": "Under the EU AI Act, risk from the most capable general-purpose models, presumed above a training-compute threshold or designated by the Commission."
      },
      {
       "term": "Profiling",
       "def": "Automated processing of personal data to evaluate or predict aspects of a person, such as performance, behaviour or reliability."
      },
      {
       "term": "Emotion recognition system",
       "def": "An AI system that identifies or infers emotions or intentions from biometric data."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "When did the EU AI Act's prohibitions on certain AI practices start to apply?",
       "options": [
        "1 January 2024",
        "2 August 2027",
        "2 February 2025",
        "They have not yet applied"
       ],
       "answer": 2,
       "explain": "The Act entered into force on 1 August 2024; prohibitions and AI-literacy duties applied from 2 February 2025."
      },
      {
       "q": "Which use is listed as a high-risk area?",
       "options": [
        "Evaluating creditworthiness of individuals",
        "Filtering spam email",
        "Recommending songs",
        "Optimising warehouse stock"
       ],
       "answer": 0,
       "explain": "Credit scoring falls within access to essential private services."
      },
      {
       "q": "A listed-area system performs only a narrow procedural task and does not profile people. It may:",
       "options": [
        "Automatically be prohibited",
        "Need no documentation at all",
        "Fall outside high risk if the provider documents that assessment",
        "Become a general-purpose model"
       ],
       "answer": 2,
       "explain": "The filter allows non-significant-risk systems out of high risk, but the reasoning must be documented and profiling systems stay high-risk."
      },
      {
       "q": "A company outside the EU sells an AI system whose outputs are used in the EU. The Act:",
       "options": [
        "Never applies",
        "Applies only to its EU customers",
        "Applies only if it has EU staff",
        "Can apply to it"
       ],
       "answer": 3,
       "explain": "Scope extends to providers placing systems on the EU market and to cases where outputs are used in the EU."
      },
      {
       "q": "Emotion recognition used to assess employees' attitudes at work is:",
       "options": [
        "Minimal risk",
        "A prohibited practice unless for medical or safety reasons",
        "Only a transparency issue",
        "Unregulated"
       ],
       "answer": 1,
       "explain": "Workplace and education emotion recognition is banned with narrow medical and safety exceptions."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l3",
   "title": "The EU AI Act: Obligations, Timeline and Enforcement",
   "subtitle": "What providers, deployers and model providers must actually do",
   "minutes": 35,
   "objectives": [
    "Summarise provider obligations for high-risk AI systems",
    "Summarise deployer obligations, including fundamental rights impact assessments",
    "Describe obligations for general-purpose AI models and transparency duties",
    "Set out the application timeline, enforcement bodies and penalty levels"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Classification tells you **which** rules apply; this lesson covers **what** they require. The heaviest duties fall on providers of high-risk systems, but deployers have real obligations too, and every organisation using AI in the EU must address AI literacy. Map each obligation to an owner, a control and evidence, because that is what a market surveillance authority will ask to see."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "This module summarises laws, regulations and standards **in our own words, as of 2026**, for learning purposes. It is not legal advice. Rules are amended, guidance and court decisions change how they apply, and the answer always depends on the facts. Read the official texts and involve qualified legal counsel before relying on any interpretation.",
     "title": "Not legal advice"
    },
    {
     "type": "framework",
     "title": "Provider requirements for high-risk AI systems",
     "items": [
      {
       "label": "P1",
       "title": "Risk management system",
       "text": "A continuous, documented process to identify, evaluate and reduce risks across the lifecycle."
      },
      {
       "label": "P2",
       "title": "Data and data governance",
       "text": "Training, validation and test data that are relevant, sufficiently representative and examined for bias."
      },
      {
       "label": "P3",
       "title": "Technical documentation",
       "text": "Detailed documentation showing how the system meets requirements, kept up to date."
      },
      {
       "label": "P4",
       "title": "Record-keeping",
       "text": "Automatic logging of events to support traceability and monitoring."
      },
      {
       "label": "P5",
       "title": "Transparency to deployers",
       "text": "Clear instructions for use covering purpose, performance, limits and oversight."
      },
      {
       "label": "P6",
       "title": "Human oversight",
       "text": "Design that allows effective oversight by people, including the ability to stop the system."
      },
      {
       "label": "P7",
       "title": "Accuracy, robustness, cybersecurity",
       "text": "Appropriate, declared levels of performance and resilience against errors and attacks."
      },
      {
       "label": "P8",
       "title": "Quality management system",
       "text": "Policies and procedures covering design, testing, data, post-market monitoring and incidents."
      },
      {
       "label": "P9",
       "title": "Conformity and registration",
       "text": "Conformity assessment, EU declaration of conformity, CE marking and registration in the EU database before market placement."
      },
      {
       "label": "P10",
       "title": "Post-market duties",
       "text": "Post-market monitoring, corrective action and reporting of serious incidents to authorities."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Obligation",
      "What it means in practice"
     ],
     "rows": [
      [
       "Use as instructed",
       "Follow the provider's instructions for use with appropriate technical and organisational measures"
      ],
      [
       "Human oversight",
       "Assign oversight to people with the competence, training, authority and support needed"
      ],
      [
       "Input data",
       "Where the deployer controls input data, ensure it is relevant and sufficiently representative"
      ],
      [
       "Monitoring and reporting",
       "Monitor operation, inform the provider and authorities of risks and serious incidents, and suspend use where necessary"
      ],
      [
       "Logs",
       "Keep automatically generated logs under its control for at least six months, unless other law says otherwise"
      ],
      [
       "Workers",
       "Inform workers' representatives and affected workers before using high-risk AI in the workplace"
      ],
      [
       "Affected people",
       "Inform people when a high-risk system is used to make or assist decisions about them; individuals can request an explanation of significant decisions"
      ],
      [
       "Fundamental rights impact assessment",
       "Required before first use for public bodies, private entities providing public services, and deployers of credit-scoring and life or health insurance pricing systems"
      ]
     ],
     "title": "Deployer obligations for high-risk systems (summarised)"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "A deployer that puts its own name or trademark on a high-risk system, makes a substantial modification, or changes the intended purpose of a system so that it becomes high-risk is treated as a provider for that system, with the full set of provider obligations.",
     "title": "Deployers can become providers"
    },
    {
     "type": "keypoints",
     "items": [
      "Systems that interact directly with people must tell them they are dealing with AI, unless obvious.",
      "Providers of systems generating synthetic audio, images, video or text must mark outputs in a machine-readable way as artificially generated.",
      "Deployers of emotion recognition or biometric categorisation must inform the people exposed.",
      "Deployers of deepfakes must disclose that content is artificially generated or manipulated.",
      "AI-generated text published to inform the public on matters of public interest must be disclosed, unless it has undergone human editorial review with editorial responsibility."
     ],
     "title": "Transparency duties for certain AI systems"
    },
    {
     "type": "table",
     "head": [
      "All GPAI model providers",
      "Additional duties for models with systemic risk"
     ],
     "rows": [
      [
       "Technical documentation for the AI Office and authorities",
       "Model evaluation, including adversarial testing"
      ],
      [
       "Information and documentation for downstream providers",
       "Assessment and mitigation of possible systemic risks"
      ],
      [
       "A policy to comply with EU copyright law, including rights reservations",
       "Tracking and reporting serious incidents"
      ],
      [
       "A public summary of the content used for training, using the official template",
       "Adequate cybersecurity for the model and its infrastructure"
      ]
     ],
     "title": "General-purpose AI model obligations (summarised)"
    },
    {
     "type": "text",
     "text": "A voluntary **General-Purpose AI Code of Practice**, published in July 2025, offers model providers a way to demonstrate compliance with these duties on transparency, copyright and safety and security. Many major model providers signed it. For deployers, this matters in procurement: ask suppliers whether their model provider follows the code and request the documentation the Act requires them to pass downstream."
    },
    {
     "type": "flow",
     "title": "Application timeline (as legislated; check for amendments)",
     "items": [
      {
       "label": "1 Aug 2024",
       "text": "Entry into force"
      },
      {
       "label": "2 Feb 2025",
       "text": "Prohibitions and AI literacy apply"
      },
      {
       "label": "2 Aug 2025",
       "text": "GPAI model obligations, governance bodies and penalties apply"
      },
      {
       "label": "2 Aug 2026",
       "text": "Most remaining provisions, including Annex III high-risk and transparency duties"
      },
      {
       "label": "2 Aug 2027",
       "text": "High-risk rules for AI in regulated products; deadline for GPAI models placed on the market before August 2025"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Because harmonised standards and guidance were running late, the European Commission proposed a 'digital omnibus' package in November 2025 that would postpone high-risk obligations, linking them to the availability of support tools, with backstop dates of December 2027 for listed use areas and August 2028 for regulated products. Always confirm which dates apply in the version of the law in force when you read this.",
     "title": "Dates may move: check the current text"
    },
    {
     "type": "table",
     "head": [
      "Breach",
      "Maximum fine"
     ],
     "rows": [
      [
       "Prohibited practices",
       "EUR 35 million or 7% of worldwide annual turnover, whichever is higher"
      ],
      [
       "Most other obligations, including high-risk requirements and transparency",
       "EUR 15 million or 3% of worldwide annual turnover, whichever is higher"
      ],
      [
       "Supplying incorrect, incomplete or misleading information to authorities",
       "EUR 7.5 million or 1% of worldwide annual turnover, whichever is higher"
      ],
      [
       "Small and medium-sized enterprises and start-ups",
       "The lower of the two amounts in each band"
      ]
     ],
     "title": "Enforcement and penalties (maximum levels)"
    },
    {
     "type": "keypoints",
     "items": [
      "**National market surveillance authorities** supervise AI systems in each member state.",
      "The **AI Office** within the European Commission supervises general-purpose AI models.",
      "The **European AI Board**, a scientific panel and an advisory forum support consistent application.",
      "Existing regulators, such as financial supervisors, often act as authorities for AI in their sector."
     ],
     "title": "Who enforces"
    },
    {
     "type": "template",
     "title": "EU AI Act obligation map",
     "purpose": "Map each applicable obligation to an owner, a control and the evidence you will keep.",
     "columns": [
      "System and role",
      "Obligation",
      "Control",
      "Owner",
      "Evidence",
      "Due date"
     ],
     "example": [
      [
       "Credit model, deployer",
       "Fundamental rights impact assessment before first use",
       "FRIA procedure using assessment template",
       "Head of Compliance",
       "Signed FRIA and notification to authority",
       "Before go-live"
      ],
      [
       "Credit model, deployer",
       "Keep logs at least six months",
       "Log retention setting and backup",
       "Head of IT Operations",
       "Retention configuration and quarterly check",
       "Before go-live"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "title": "A deployer's to-do list",
     "situation": "A bank in Lithuania will use a vendor's high-risk credit-scoring system from next quarter. The vendor has completed conformity assessment. What must the bank do before first use?",
     "options": [
      {
       "text": "Nothing, because the vendor as provider holds all the obligations.",
       "feedback": "Deployers have their own duties, and credit-scoring deployers specifically must carry out a fundamental rights impact assessment.",
       "best": false
      },
      {
       "text": "Carry out a fundamental rights impact assessment, assign trained human oversight, set up log retention and monitoring, and prepare notices for affected customers.",
       "feedback": "Best. These are core deployer duties for a high-risk credit system, and the FRIA is required before first use.",
       "best": true
      },
      {
       "text": "Repeat the vendor's conformity assessment in full.",
       "feedback": "Conformity assessment is the provider's job. The bank should review the documentation, not redo it.",
       "best": false
      },
      {
       "text": "Register the system as a new general-purpose AI model.",
       "feedback": "A credit-scoring system is not a general-purpose model, and registration of high-risk systems is primarily a provider duty.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Conformity assessment",
       "def": "The process of demonstrating that a high-risk AI system meets the EU AI Act's requirements before market placement."
      },
      {
       "term": "CE marking",
       "def": "The marking showing a product conforms with applicable EU requirements, including for high-risk AI systems."
      },
      {
       "term": "Fundamental rights impact assessment (FRIA)",
       "def": "An assessment certain deployers of high-risk AI must perform before first use to identify impacts on people's rights."
      },
      {
       "term": "Post-market monitoring",
       "def": "A provider's systematic collection and review of data on a system's performance after it is placed on the market."
      },
      {
       "term": "Serious incident",
       "def": "Under the EU AI Act, an incident leading to death or serious harm to health, serious disruption of critical infrastructure, infringement of fundamental-rights obligations or serious harm to property or the environment."
      },
      {
       "term": "AI Office",
       "def": "The European Commission body that supervises general-purpose AI models and supports implementation of the AI Act."
      },
      {
       "term": "Market surveillance authority",
       "def": "A national authority that monitors and enforces compliance of products, including AI systems, on the market."
      },
      {
       "term": "AI literacy",
       "def": "The skills, knowledge and understanding that allow people to deploy and use AI in an informed way and be aware of its risks."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which deployers must carry out a fundamental rights impact assessment before using a high-risk system?",
       "options": [
        "All companies using any chatbot",
        "Public bodies, private providers of public services, and deployers of credit-scoring or life and health insurance pricing systems",
        "Only providers of general-purpose models",
        "Only companies outside the EU"
       ],
       "answer": 1,
       "explain": "The FRIA duty targets specific deployer categories where rights impacts are significant."
      },
      {
       "q": "For how long must deployers keep automatically generated logs of a high-risk system, at minimum?",
       "options": [
        "At least six months, unless other law requires otherwise",
        "Seven days",
        "Ten years in every case",
        "No retention is required"
       ],
       "answer": 0,
       "explain": "The Act sets a six-month minimum for deployers, subject to other applicable law."
      },
      {
       "q": "What is the maximum fine level for prohibited practices?",
       "options": [
        "EUR 1 million flat",
        "1% of EU turnover only",
        "EUR 35 million or 7% of worldwide annual turnover, whichever is higher",
        "There is no fine for prohibited practices"
       ],
       "answer": 2,
       "explain": "Prohibited practices carry the highest penalty band."
      },
      {
       "q": "Which duty applies to all general-purpose AI model providers?",
       "options": [
        "Live facial recognition approval",
        "A fundamental rights impact assessment",
        "Registration as a deployer",
        "A public summary of training content and a copyright compliance policy"
       ],
       "answer": 3,
       "explain": "GPAI providers must document their models, support downstream providers, follow copyright law and publish a training-content summary."
      },
      {
       "q": "Who supervises general-purpose AI models under the Act?",
       "options": [
        "The AI Office in the European Commission",
        "Each company's internal auditor",
        "The OECD",
        "National data protection authorities only"
       ],
       "answer": 0,
       "explain": "The AI Office has supervisory responsibility for GPAI models."
      },
      {
       "q": "A deployer substantially modifies a high-risk system and rebrands it. What follows?",
       "options": [
        "Nothing changes",
        "It is treated as a provider with provider obligations",
        "The original provider loses all duties retroactively",
        "The system becomes minimal risk"
       ],
       "answer": 1,
       "explain": "Rebranding or substantial modification shifts provider obligations to the modifying party."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l4",
   "title": "Frameworks and Standards: NIST AI RMF, ISO/IEC 42001 and OECD",
   "subtitle": "Voluntary and certifiable tools that structure a governance programme",
   "minutes": 35,
   "objectives": [
    "Describe the structure of the NIST AI Risk Management Framework and its generative-AI profile",
    "Explain what ISO/IEC 42001 requires and what certification does and does not prove",
    "Summarise the OECD AI Principles and related international instruments",
    "Choose and combine frameworks for a given organisation"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Laws tell you what outcomes are required; frameworks and standards tell you **how to organise the work**. Three instruments dominate AI governance practice in 2026: the US National Institute of Standards and Technology's AI Risk Management Framework, the international management system standard ISO/IEC 42001 and the OECD AI Principles. They overlap heavily and can be combined into one programme."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "This module summarises laws, regulations and standards **in our own words, as of 2026**, for learning purposes. It is not legal advice. Rules are amended, guidance and court decisions change how they apply, and the answer always depends on the facts. Read the official texts and involve qualified legal counsel before relying on any interpretation.",
     "title": "Not legal advice"
    },
    {
     "type": "framework",
     "title": "NIST AI RMF 1.0: four functions",
     "items": [
      {
       "label": "GV",
       "title": "Govern",
       "text": "A cross-cutting function: culture, policies, roles, accountability, workforce diversity, third-party oversight and processes for engaging affected people."
      },
      {
       "label": "MP",
       "title": "Map",
       "text": "Establish context: intended purpose, users, affected people, laws, benefits, and the risks and impacts of the system."
      },
      {
       "label": "MS",
       "title": "Measure",
       "text": "Analyse and track risks with quantitative and qualitative methods, test trustworthiness characteristics and gather feedback."
      },
      {
       "label": "MG",
       "title": "Manage",
       "text": "Prioritise and treat risks, plan responses and recovery, manage third-party risks and communicate about incidents."
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Valid and reliable (the foundation for the others)",
      "Safe",
      "Secure and resilient",
      "Accountable and transparent",
      "Explainable and interpretable",
      "Privacy-enhanced",
      "Fair, with harmful bias managed"
     ],
     "title": "NIST's characteristics of trustworthy AI"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "In July 2024 NIST published a profile applying the framework to generative AI. It lists risks that are new or worse with generative AI, including confabulation, harmful bias and homogenisation, information integrity, information security, intellectual property, data privacy, dangerous or violent content, obscene or abusive content, environmental impacts, human-AI configuration, value-chain and component integration, and chemical, biological, radiological and nuclear information. It then suggests actions mapped to the four functions. The framework is voluntary; US federal policy changed direction in 2025 and revisions to NIST materials have been signalled, so check the current versions.",
     "title": "The generative-AI profile"
    },
    {
     "type": "layers",
     "title": "ISO/IEC 42001:2023 at a glance (top layer first)",
     "items": [
      {
       "label": "Improvement (clause 10)",
       "parts": [
        "Nonconformity, corrective action, continual improvement"
       ]
      },
      {
       "label": "Performance evaluation (clause 9)",
       "parts": [
        "Monitoring, internal audit, management review"
       ]
      },
      {
       "label": "Operation (clause 8)",
       "parts": [
        "Operational planning, AI risk assessment and treatment, AI system impact assessment"
       ]
      },
      {
       "label": "Support (clause 7)",
       "parts": [
        "Resources, competence, awareness, communication, documented information"
       ]
      },
      {
       "label": "Planning (clause 6)",
       "parts": [
        "Risks and opportunities, AI objectives, Statement of Applicability"
       ]
      },
      {
       "label": "Leadership and context (clauses 4-5)",
       "parts": [
        "Scope, interested parties, AI policy, roles and top-management commitment"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "ISO/IEC 42001 is a **management system standard**: it specifies how an organisation should establish, run and improve an AI management system (AIMS), using the same high-level structure as other management system standards such as those for information security and quality. Its Annex A lists reference control objectives and controls, covering areas such as AI policies, internal organisation, resources, impact assessment, the AI system lifecycle, data, information for interested parties, use of AI systems and third-party relationships. Organisations select controls and justify inclusions and exclusions in a **Statement of Applicability**. Companion standards cover AI risk management guidance (ISO/IEC 23894), AI system impact assessment (ISO/IEC 42005), requirements for certification bodies (ISO/IEC 42006), concepts and terminology (ISO/IEC 22989) and governance implications for boards (ISO/IEC 38507)."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "An ISO/IEC 42001 certificate shows that an accredited auditor found your management system conforms to the standard within the certified scope. It does **not** prove that every AI system is lawful, fair or safe, and it does not by itself satisfy the EU AI Act. Check the scope statement on any supplier's certificate.",
     "title": "Certification is not compliance"
    },
    {
     "type": "framework",
     "title": "OECD AI Principles (adopted 2019, updated 2024)",
     "items": [
      {
       "label": "O1",
       "title": "Inclusive growth, sustainable development and well-being",
       "text": "AI should benefit people and the planet."
      },
      {
       "label": "O2",
       "title": "Human rights and democratic values, including fairness and privacy",
       "text": "Respect the rule of law, human rights and democratic values throughout the lifecycle."
      },
      {
       "label": "O3",
       "title": "Transparency and explainability",
       "text": "Provide meaningful information so people understand and can challenge outcomes."
      },
      {
       "label": "O4",
       "title": "Robustness, security and safety",
       "text": "Systems should function appropriately and safely, with mechanisms to override or decommission them."
      },
      {
       "label": "O5",
       "title": "Accountability",
       "text": "AI actors should be accountable for proper functioning, based on their roles and the context."
      }
     ]
    },
    {
     "type": "text",
     "text": "The OECD also makes five recommendations to governments: invest in AI research and development, foster an inclusive AI ecosystem, enable an interoperable governance and policy environment, build human capacity and prepare for labour-market change, and cooperate internationally. Its definition of an AI system, updated in 2023, influenced the EU AI Act. Other international instruments include UNESCO's 2021 Recommendation on the Ethics of AI, the G7 Hiroshima Process code of conduct for advanced AI developers and the Council of Europe's Framework Convention on AI, human rights, democracy and the rule of law, opened for signature in 2024 as the first binding international treaty on AI."
    },
    {
     "type": "table",
     "head": [
      "Instrument",
      "Nature",
      "Best used for",
      "Can you certify?"
     ],
     "rows": [
      [
       "EU AI Act",
       "Binding law (EU market)",
       "Legal obligations by role and risk tier",
       "Conformity assessment for high-risk systems"
      ],
      [
       "NIST AI RMF",
       "Voluntary framework",
       "Risk vocabulary, functions and practical actions",
       "No"
      ],
      [
       "ISO/IEC 42001",
       "International management system standard",
       "Building and evidencing an organisation-wide AIMS",
       "Yes, by accredited certification bodies"
      ],
      [
       "OECD AI Principles",
       "Intergovernmental recommendation",
       "Values, policy alignment, shared definitions",
       "No"
      ]
     ],
     "title": "How the main instruments compare"
    },
    {
     "type": "scenario",
     "title": "Choosing a backbone",
     "situation": "A South Asian software exporter builds AI features for clients in Europe and the United States. Clients increasingly ask for evidence of responsible AI in tenders. Leadership wants one approach that is recognised internationally and can be independently verified. What should the governance lead recommend?",
     "options": [
      {
       "text": "Adopt the OECD principles only, because they are the most widely endorsed.",
       "feedback": "Principles are a good foundation but cannot be certified and give little operational structure.",
       "best": false
      },
      {
       "text": "Build an AI management system aligned to ISO/IEC 42001, use NIST AI RMF practices inside it for risk work, and map EU AI Act obligations for products sold in Europe.",
       "feedback": "Best. The certifiable standard provides verifiable structure; the NIST framework adds practical risk methods; and the legal map covers binding duties.",
       "best": true
      },
      {
       "text": "Wait for each client to specify its own framework.",
       "feedback": "Reactive alignment creates duplicated work and loses tenders to better-prepared competitors.",
       "best": false
      },
      {
       "text": "Write a proprietary framework so the company is not tied to any standard.",
       "feedback": "A proprietary approach lacks recognition and independent verification, which is what clients want.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "NIST AI RMF",
       "def": "The voluntary US AI Risk Management Framework organised into Govern, Map, Measure and Manage functions."
      },
      {
       "term": "Govern function",
       "def": "The cross-cutting NIST AI RMF function that sets culture, policies, roles and accountability for AI risk."
      },
      {
       "term": "AI management system (AIMS)",
       "def": "The policies, processes, roles and controls an organisation uses to direct and control its AI activities, as specified by ISO/IEC 42001."
      },
      {
       "term": "ISO/IEC 42001",
       "def": "The international, certifiable management system standard for AI, published in 2023."
      },
      {
       "term": "Statement of Applicability",
       "def": "A document listing which controls an organisation has selected, why, and the justification for exclusions."
      },
      {
       "term": "OECD AI Principles",
       "def": "Intergovernmental principles for trustworthy AI adopted in 2019 and updated in 2024."
      },
      {
       "term": "Profile (NIST)",
       "def": "An application of the AI RMF to a specific setting, technology or use case, such as generative AI."
      },
      {
       "term": "Framework Convention on AI",
       "def": "The Council of Europe's binding international treaty on AI, human rights, democracy and the rule of law, opened for signature in 2024."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which NIST AI RMF function is cross-cutting and covers culture, policies and accountability?",
       "options": [
        "Govern",
        "Map",
        "Measure",
        "Manage"
       ],
       "answer": 0,
       "explain": "Govern underpins the other three functions."
      },
      {
       "q": "What does an ISO/IEC 42001 certificate demonstrate?",
       "options": [
        "That every AI system is legally compliant everywhere",
        "That the organisation's AI management system conforms to the standard within the certified scope",
        "That the EU AI Act no longer applies",
        "That models are free of bias"
       ],
       "answer": 1,
       "explain": "Certification evaluates the management system, not the lawfulness of every system."
      },
      {
       "q": "In which ISO/IEC 42001 document does an organisation justify the controls it selects or excludes?",
       "options": [
        "Statement of Applicability",
        "Model card",
        "Privacy notice",
        "Incident log"
       ],
       "answer": 0,
       "explain": "The Statement of Applicability records control selection and justification."
      },
      {
       "q": "Which statement about the OECD AI Principles is correct?",
       "options": [
        "They are a binding EU regulation",
        "They can be certified by auditors",
        "They are an intergovernmental recommendation, updated in 2024",
        "They apply only to the United States"
       ],
       "answer": 2,
       "explain": "The OECD principles are non-binding and widely adopted."
      },
      {
       "q": "Which pairing gives verifiable structure plus practical risk methods?",
       "options": [
        "OECD principles with a marketing pledge",
        "A proprietary checklist with no audit",
        "No framework, only legal review",
        "ISO/IEC 42001 with NIST AI RMF practices"
       ],
       "answer": 3,
       "explain": "The two instruments complement each other and are often combined."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l5",
   "title": "South Asia and Emerging Rules Worldwide",
   "subtitle": "India, Bangladesh, Pakistan, Sri Lanka, Nepal and the wider picture, as of 2026",
   "minutes": 30,
   "objectives": [
    "Summarise the direction of AI governance in South Asian countries as of 2026",
    "Recognise major AI rules elsewhere that affect South Asian organisations",
    "Run a horizon-scanning process to keep regulatory knowledge current"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "South Asia is moving from national AI strategies towards concrete rules, but mostly through **data protection laws, sector regulators and principles-based guidance** rather than comprehensive AI acts. Organisations in the region also feel foreign rules directly when they export software, serve foreign customers or use global model providers. The summary below reflects our understanding as of 2026; this area changes fast, so treat it as a starting map and verify current status before acting."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "This module summarises laws, regulations and standards **in our own words, as of 2026**, for learning purposes. It is not legal advice. Rules are amended, guidance and court decisions change how they apply, and the answer always depends on the facts. Read the official texts and involve qualified legal counsel before relying on any interpretation.",
     "title": "Not legal advice"
    },
    {
     "type": "table",
     "head": [
      "Country",
      "Key instruments",
      "Approach"
     ],
     "rows": [
      [
       "India",
       "Digital Personal Data Protection Act 2023 with Rules notified in November 2025 and phased in; India AI Governance Guidelines released in November 2025; IT intermediary rule changes on labelling synthetic content; sector frameworks such as the Reserve Bank of India's 2025 framework for responsible AI in finance",
       "Principles-based, relying on existing laws and sector regulators rather than a standalone AI act, with new institutions to coordinate governance and AI safety"
      ],
      [
       "Bangladesh",
       "Draft national AI policy documents (2024-2025); ordinances in 2025 on cyber security and on personal data protection; ICT Act 2006; Bangladesh Bank and BTRC sector rules",
       "Building foundations: data protection and cyber security first, AI policy emerging; check gazetted texts and commencement dates"
      ],
      [
       "Pakistan",
       "National AI Policy approved in 2025; personal data protection legislation under development",
       "Strategy- and capacity-led, with data protection still pending"
      ],
      [
       "Sri Lanka",
       "Personal Data Protection Act No. 9 of 2022, amended and being phased in; national AI strategy work",
       "Data protection as the main legal hook for AI"
      ],
      [
       "Nepal",
       "National AI policy adopted in 2025; Privacy Act 2018",
       "Early-stage policy framework"
      ]
     ],
     "title": "South Asia: direction of travel (as of 2026)"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Even without an AI act, you will be judged on data protection, consumer, cyber security, employment and sector rules, and on whether you followed recognised good practice. Building to international frameworks now usually satisfies most of what national rules will later require, and it opens export markets.",
     "title": "What this means for a South Asian organisation"
    },
    {
     "type": "table",
     "head": [
      "Jurisdiction",
      "Instrument (as of 2026)",
      "Why it matters"
     ],
     "rows": [
      [
       "European Union",
       "AI Act; GDPR",
       "Applies to exporters placing AI on the EU market or whose outputs are used there"
      ],
      [
       "China",
       "Rules on recommendation algorithms (2022), deep synthesis (2023), generative AI services (2023) and mandatory labelling of AI-generated content (from September 2025)",
       "Labelling and content rules for services offered in China"
      ],
      [
       "South Korea",
       "AI Basic Act, in force from January 2026",
       "Duties for high-impact and generative AI, including transparency and, for some foreign firms, a local representative"
      ],
      [
       "Japan",
       "AI Promotion Act (2025)",
       "Promotion-oriented, light-touch law with government guidance"
      ],
      [
       "United Kingdom",
       "Principles applied by existing regulators; AI Security Institute",
       "Sector regulators expect fairness, transparency and accountability"
      ],
      [
       "United States",
       "No comprehensive federal AI law; state laws such as New York City's bias-audit rule for hiring tools, Colorado's high-risk AI act (scheduled for 2026), Texas and California laws; federal moves since late 2025 to challenge state rules",
       "Patchwork that changes quickly, especially in hiring, insurance and frontier models"
      ]
     ],
     "title": "Other rules that often reach South Asian organisations"
    },
    {
     "type": "steps",
     "title": "Horizon scanning: keeping current",
     "items": [
      {
       "title": "Name an owner",
       "text": "Assign a person in legal or compliance to own AI regulatory monitoring."
      },
      {
       "title": "Define sources",
       "text": "Official gazettes, regulator websites, standards bodies, law-firm briefings and industry associations."
      },
      {
       "title": "Set a rhythm",
       "text": "Monthly scan, quarterly summary to the AI governance committee."
      },
      {
       "title": "Assess impact",
       "text": "For each change, record affected systems, obligations and dates in the applicability map."
      },
      {
       "title": "Plan action",
       "text": "Create tasks with owners and deadlines, and update policies and controls."
      },
      {
       "title": "Record decisions",
       "text": "Keep evidence of how the organisation interpreted and responded to each change."
      }
     ]
    },
    {
     "type": "template",
     "title": "Regulatory horizon-scanning log",
     "purpose": "Track AI-relevant legal and standards changes and the organisation's response.",
     "columns": [
      "Date found",
      "Jurisdiction and instrument",
      "Status",
      "Systems affected",
      "Impact summary",
      "Action and owner"
     ],
     "example": [
      [
       "Feb 2026",
       "South Korea AI Basic Act",
       "In force from Jan 2026",
       "Chatbot offered to Korean customers",
       "Transparency notice for generative AI outputs",
       "Update chatbot disclosure; Product Lead"
      ],
      [
       "Nov 2025",
       "India DPDP Rules",
       "Notified, phased commencement",
       "HR analytics on Indian staff",
       "Consent, notice and breach duties apply in phases",
       "Gap assessment; Privacy Officer"
      ]
     ],
     "rows": 6
    },
    {
     "type": "case",
     "title": "The Dhaka software exporter",
     "context": "A Dhaka company builds an AI tool that scores insurance claims for fraud and sells it to insurers in Bangladesh, India and Ireland. It uses a general-purpose model from an international provider for document reading. The founders assumed that because Bangladesh has no AI act, governance could wait.",
     "questions": [
      "Which regimes are likely to touch this business?",
      "What role does the company play under the EU AI Act?",
      "What should it prioritise in the next six months?"
     ],
     "answer": "In Bangladesh, data protection and cyber security ordinances and insurance regulation apply; in India, the DPDP Act and Rules and insurance-sector expectations apply to personal data of Indian policyholders; in Ireland, the EU AI Act and GDPR apply. Under the EU AI Act the company is the provider of the claims-scoring system. Fraud detection is generally not the listed credit-scoring use, but life and health insurance risk assessment and pricing is listed, so classification depends on exact functions, and the company must document its assessment. It is a downstream provider relying on a general-purpose model, so it should obtain the model provider's documentation. Priorities: an applicability map per market, EU AI Act classification with legal advice, data protection compliance per country, model documentation, bias and accuracy testing, and contract terms with the model provider. Alignment to ISO/IEC 42001 would support all three markets."
    },
    {
     "type": "scenario",
     "title": "A new rule appears",
     "situation": "A privacy officer at a Bangladeshi mobile financial services provider reads that a new data protection ordinance has been approved. Some colleagues say nothing changes until detailed rules arrive. What should she do FIRST?",
     "options": [
      {
       "text": "Wait for the detailed rules, because ordinances need regulations to work.",
       "feedback": "Some provisions may already have effect, and preparation takes time. Waiting risks being unprepared.",
       "best": false
      },
      {
       "text": "Obtain the official text, confirm commencement dates, assess which AI and data uses are affected, and brief the governance committee with a gap plan.",
       "feedback": "Best. Verifying the text and dates, then assessing impact on systems, is the disciplined horizon-scanning response.",
       "best": true
      },
      {
       "text": "Rely on a news article's summary to update the privacy policy immediately.",
       "feedback": "News summaries can be inaccurate. Policy changes must be based on the official text and legal analysis.",
       "best": false
      },
      {
       "text": "Stop all AI projects until the law is fully understood.",
       "feedback": "A blanket stop is disproportionate. Most activity can continue while targeted gaps are fixed.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which foreign AI rule is most likely to affect your organisation in the next two years, through customers, suppliers or markets? What would be the first obligation you would need to meet?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "DPDP Act",
       "def": "India's Digital Personal Data Protection Act 2023, implemented through Rules notified in 2025 and phased in."
      },
      {
       "term": "Ordinance (Bangladesh)",
       "def": "A law made by the President when Parliament is not in session, with legal force subject to later parliamentary processes."
      },
      {
       "term": "Horizon scanning",
       "def": "A structured, continuing process to identify and assess upcoming legal, regulatory and standards changes."
      },
      {
       "term": "AI Basic Act (South Korea)",
       "def": "South Korea's framework law on AI development and trust, in force from January 2026, with duties for high-impact and generative AI."
      },
      {
       "term": "Synthetic content labelling",
       "def": "Requirements to mark or disclose content generated or manipulated by AI."
      },
      {
       "term": "Principles-based regulation",
       "def": "An approach that sets high-level outcomes and relies on regulators and organisations to apply them in context."
      },
      {
       "term": "Sector regulator",
       "def": "A regulator responsible for one industry, such as a central bank or telecoms authority, that often sets AI expectations for that sector."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which best describes India's approach to AI governance as of 2026?",
       "options": [
        "Principles-based guidelines relying on existing laws and sector regulators, rather than a standalone AI act",
        "A comprehensive AI act copied from the EU",
        "A total ban on generative AI",
        "No rules of any kind"
       ],
       "answer": 0,
       "explain": "India's 2025 guidelines favour existing laws, sector regulators and new coordinating institutions."
      },
      {
       "q": "For most South Asian organisations today, the main legal hooks for AI are:",
       "options": [
        "Only the EU AI Act",
        "Only UNESCO recommendations",
        "Only tax law",
        "Data protection, cyber security, consumer and sector rules"
       ],
       "answer": 3,
       "explain": "Without AI acts, general and sector laws carry most obligations, and some foreign laws apply through markets."
      },
      {
       "q": "Which law came into force in January 2026 with duties for high-impact and generative AI?",
       "options": [
        "Japan's AI Promotion Act",
        "South Korea's AI Basic Act",
        "The OECD AI Principles",
        "ISO/IEC 42001"
       ],
       "answer": 1,
       "explain": "South Korea's framework act took effect in January 2026."
      },
      {
       "q": "What is the first step when a new AI-relevant law is announced?",
       "options": [
        "Update policies from a news summary",
        "Stop all AI projects",
        "Obtain the official text and confirm commencement dates",
        "Ignore it until a regulator calls"
       ],
       "answer": 2,
       "explain": "Accurate source text and dates are the basis for any impact assessment."
      },
      {
       "q": "Why build to international frameworks even where no AI act exists?",
       "options": [
        "They exempt you from local law",
        "They are legally binding everywhere",
        "They remove the need for legal advice",
        "They prepare for likely future rules and support exports and tenders"
       ],
       "answer": 3,
       "explain": "International alignment is efficient preparation and a commercial asset, but does not replace local law."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m4",
 "order": 4,
 "code": "Risk",
 "title": "AI Risk Management and Impact Assessment",
 "subtitle": "Identify, assess, treat and track AI risks to people and the organisation",
 "outcomes": [
  "Identify AI risks using a taxonomy, lifecycle view and people-first techniques",
  "Score inherent and residual AI risk and avoid the traps of the risk matrix",
  "Conduct an integrated AI impact assessment covering privacy and fundamental rights",
  "Choose risk treatments, design controls and express AI risk appetite with tolerances and KRIs",
  "Run a proportionate intake and tiering process and maintain an AI risk register"
 ],
 "lessons": [
  {
   "id": "m4-l1",
   "title": "Identifying AI Risks",
   "subtitle": "Sources, taxonomies and techniques for finding what could go wrong",
   "minutes": 30,
   "objectives": [
    "Define AI risk and distinguish risks to people from risks to the organisation",
    "Use a structured taxonomy to identify AI risks across the lifecycle",
    "Apply practical techniques such as pre-mortems and misuse cases"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Risk is the effect of uncertainty on objectives. For AI, governance must look at two kinds of objectives at once: the **organisation's** (profit, compliance, reputation) and **people's** (rights, safety, wellbeing). A system can be profitable and still harmful, and a harm to people usually becomes a risk to the organisation later. Good AI risk identification therefore starts from the people affected, not just from the business case."
    },
    {
     "type": "table",
     "head": [
      "Category",
      "Examples",
      "Where it often starts"
     ],
     "rows": [
      [
       "Performance",
       "Inaccuracy, confabulation, poor generalisation, drift",
       "Data, model choice, changing environment"
      ],
      [
       "Fairness",
       "Discriminatory outcomes or error rates",
       "Historical data, proxies, deployment context"
      ],
      [
       "Safety",
       "Physical or psychological harm, unsafe advice",
       "Health, transport, industrial and companion uses"
      ],
      [
       "Security",
       "Poisoning, prompt injection, model theft, data leakage",
       "Exposed interfaces, supply chain, excessive permissions"
      ],
      [
       "Privacy",
       "Unlawful processing, re-identification, inference of sensitive traits",
       "Training data, prompts, logs"
      ],
      [
       "Transparency and accountability",
       "Unexplainable decisions, no route to contest, unclear ownership",
       "Opaque models, vendor black boxes"
      ],
      [
       "Legal and compliance",
       "Breach of AI, data, consumer, IP or sector law",
       "Unassessed uses, new markets"
      ],
      [
       "Third party",
       "Vendor failure, changed model, unclear terms",
       "Procurement, API dependency"
      ],
      [
       "Societal and environmental",
       "Disinformation, labour impact, energy use",
       "Generative and large-scale systems"
      ]
     ],
     "title": "ZAIG AI risk taxonomy"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Ask 'who could be hurt, and how badly?' before 'what could this cost us?'. The first question finds risks the second misses, and regulators, courts and the public will judge you on the first.",
     "title": "Risks to people come first"
    },
    {
     "type": "flow",
     "title": "Where risks enter the lifecycle",
     "items": [
      {
       "label": "Design",
       "text": "Wrong problem, wrong objective, unsuitable use of AI"
      },
      {
       "label": "Data",
       "text": "Bias, poor quality, unlawful collection"
      },
      {
       "label": "Build",
       "text": "Weak evaluation, overfitting, insecure components"
      },
      {
       "label": "Deploy",
       "text": "Misuse, poor oversight, wrong context"
      },
      {
       "label": "Operate",
       "text": "Drift, attacks, vendor changes"
      },
      {
       "label": "Retire",
       "text": "Orphaned data, unmanaged dependencies"
      }
     ]
    },
    {
     "type": "steps",
     "title": "Techniques for finding AI risks",
     "items": [
      {
       "title": "Stakeholder mapping",
       "text": "List everyone affected, including people who never use the system, and ask how each could be harmed."
      },
      {
       "title": "Pre-mortem",
       "text": "Imagine it is a year later and the system has caused a public scandal. Ask the team to write the story of what happened."
      },
      {
       "title": "Misuse and abuse cases",
       "text": "Ask how a malicious user, a careless user or a well-meaning user in the wrong context could cause harm."
      },
      {
       "title": "Incident review",
       "text": "Search public AI incident databases and your own incident logs for similar systems."
      },
      {
       "title": "Consult affected groups",
       "text": "Talk to representatives of the people affected, such as patient groups, worker representatives or student unions."
      },
      {
       "title": "Expert challenge",
       "text": "Ask security, privacy, legal and domain experts to review the design."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A power distribution company in Bangladesh planned an AI model to predict electricity theft and prioritise inspections. In a pre-mortem, field staff wrote: 'The model sent inspectors mostly to poorer neighbourhoods where meters are older, so honest households were repeatedly inspected and fined for faulty meters.' This surfaced a fairness risk and a data-quality risk that the business case had missed.",
     "title": "A pre-mortem at a power utility"
    },
    {
     "type": "compare",
     "title": "Inherent characteristics that raise AI risk",
     "columns": [
      {
       "title": "System factors",
       "items": [
        "High autonomy or ability to act",
        "Opaque model",
        "Learns continuously in production",
        "Generative, open-ended outputs"
       ]
      },
      {
       "title": "Context factors",
       "items": [
        "Decisions about rights, money, health, liberty or work",
        "Vulnerable people affected",
        "Large scale",
        "Hard-to-reverse outcomes"
       ]
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A narrow risk workshop",
     "situation": "A team building an AI chatbot for a university admissions office runs a risk workshop. They list server downtime, cost overruns and slow response times. What should the governance lead add FIRST?",
     "options": [
      {
       "text": "A detailed cost-benefit analysis of the hosting options.",
       "feedback": "Useful for the business case but does not address the missing risks to applicants.",
       "best": false
      },
      {
       "text": "A stakeholder-focused session on harms to applicants: wrong admission advice, unequal quality in Bangla and English, data privacy and the absence of a human contact.",
       "feedback": "Best. The workshop missed risks to people. Starting from affected applicants surfaces accuracy, fairness, privacy and contestability risks.",
       "best": true
      },
      {
       "text": "A penetration test of the website.",
       "feedback": "Security testing matters but is only one category, and the gap is broader.",
       "best": false
      },
      {
       "text": "A decision to cancel the chatbot because risks exist.",
       "feedback": "Every system has risks. The task is to identify and manage them, not to stop at the first list.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "AI risk identification checklist",
     "items": [
      "Affected people and groups listed, including non-users",
      "Each taxonomy category considered",
      "Every lifecycle stage considered",
      "Misuse and abuse cases written",
      "Similar public incidents reviewed",
      "Affected groups or their representatives consulted for high-impact systems",
      "Third-party and supply-chain risks included",
      "Risks recorded in the AI risk register with an owner"
     ]
    },
    {
     "type": "reflection",
     "prompt": "Run a quick pre-mortem on an AI system you know: it is two years from now and the system is in the news for the wrong reasons. What is the headline, and which risk did everyone overlook?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Risk",
       "def": "The effect of uncertainty on objectives, usually expressed through likelihood and consequence."
      },
      {
       "term": "AI risk taxonomy",
       "def": "A structured list of AI risk categories used to identify risks consistently."
      },
      {
       "term": "Pre-mortem",
       "def": "A technique in which a team imagines a future failure and works backwards to identify its causes."
      },
      {
       "term": "Misuse case",
       "def": "A scenario describing how a system could be used, deliberately or carelessly, to cause harm."
      },
      {
       "term": "Stakeholder mapping",
       "def": "Identifying everyone who affects or is affected by a system, including non-users."
      },
      {
       "term": "AI incident database",
       "def": "A public or internal collection of reported AI failures and harms used for learning."
      },
      {
       "term": "Risk owner",
       "def": "The person accountable for managing a particular risk."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Why should AI risk identification start from affected people?",
       "options": [
        "Because organisational risks do not matter",
        "It finds harms the business case misses, which later become organisational risks",
        "Because regulators ignore business impacts",
        "Because people-centred risks are always minor"
       ],
       "answer": 1,
       "explain": "Harms to people drive legal, reputational and ethical consequences and are easy to overlook."
      },
      {
       "q": "Imagining that a project has already failed and explaining why is called:",
       "options": [
        "A pre-mortem",
        "A post-incident review",
        "A penetration test",
        "A conformity assessment"
       ],
       "answer": 0,
       "explain": "The pre-mortem uses imagined failure to surface hidden risks before they occur."
      },
      {
       "q": "Which factor most raises the inherent risk of an AI system?",
       "options": [
        "It uses a modern programming language",
        "It runs on a cloud platform",
        "It has a friendly user interface",
        "It makes hard-to-reverse decisions about people's access to money or work"
       ],
       "answer": 3,
       "explain": "Impact on rights and reversibility of outcomes are key risk drivers."
      },
      {
       "q": "A vendor silently updates the model behind an API. Which risk category is this?",
       "options": [
        "Environmental",
        "Interpretability only",
        "Third party",
        "Fairness only"
       ],
       "answer": 2,
       "explain": "Dependency on a supplier's changes is a third-party risk, which may then create performance or fairness risks."
      },
      {
       "q": "Which technique specifically considers malicious or careless use?",
       "options": [
        "Cost-benefit analysis",
        "Misuse and abuse cases",
        "Load testing",
        "Annual budgeting"
       ],
       "answer": 1,
       "explain": "Misuse cases deliberately explore harmful ways a system could be used."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l2",
   "title": "Assessing and Scoring AI Risk",
   "subtitle": "Likelihood, impact, inherent and residual risk, and the limits of numbers",
   "minutes": 30,
   "objectives": [
    "Score AI risks using likelihood and impact scales tailored to AI harms",
    "Distinguish inherent and residual risk",
    "Use simple quantitative estimates where data allows",
    "Recognise the limits of risk scoring for AI"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Once risks are identified, they must be compared so attention goes where it matters most. Most organisations use a **likelihood × impact** matrix, already familiar from enterprise risk management. For AI, the impact scale must capture harm to people, not just money, and must consider how many people are affected, how vulnerable they are and whether harm can be reversed."
    },
    {
     "type": "table",
     "head": [
      "Score",
      "Level",
      "Harm to people",
      "Harm to organisation"
     ],
     "rows": [
      [
       "1",
       "Minimal",
       "Minor inconvenience, easily corrected",
       "Negligible cost, no external attention"
      ],
      [
       "2",
       "Moderate",
       "Temporary detriment to a few people, reversible",
       "Small loss, local complaints"
      ],
      [
       "3",
       "Significant",
       "Material harm to many or serious harm to a few, reversible with effort",
       "Regulatory inquiry, media coverage"
      ],
      [
       "4",
       "Severe",
       "Serious, hard-to-reverse harm to rights, health or livelihood",
       "Enforcement, major loss, executive accountability"
      ],
      [
       "5",
       "Critical",
       "Loss of life, widespread or irreversible harm, especially to vulnerable groups",
       "Existential, licence or market exit"
      ]
     ],
     "title": "Impact scale for AI risks (example)"
    },
    {
     "type": "framework",
     "title": "Impact dimensions to consider",
     "items": [
      {
       "label": "D1",
       "title": "Severity",
       "text": "How serious is the harm to each affected person?"
      },
      {
       "label": "D2",
       "title": "Scale",
       "text": "How many people could be affected?"
      },
      {
       "label": "D3",
       "title": "Reversibility",
       "text": "Can the harm be undone, and how quickly?"
      },
      {
       "label": "D4",
       "title": "Vulnerability",
       "text": "Are children, patients, low-income or marginalised people affected?"
      },
      {
       "label": "D5",
       "title": "Autonomy",
       "text": "Does the system act without human review?"
      },
      {
       "label": "D6",
       "title": "Detectability",
       "text": "Would anyone notice the harm quickly?"
      }
     ]
    },
    {
     "type": "formula",
     "title": "Useful risk formulas",
     "items": [
      {
       "name": "Risk score",
       "expr": "Risk = Likelihood (1-5) × Impact (1-5)",
       "meaning": "A simple ordinal score from 1 to 25 used to rank risks; treat it as a guide, not a measurement."
      },
      {
       "name": "Residual risk (indicative)",
       "expr": "Residual ≈ Inherent × (1 − control effectiveness)",
       "meaning": "Shows how much risk remains after controls; effectiveness must be evidenced, not assumed."
      },
      {
       "name": "Expected loss",
       "expr": "Expected loss = Probability of event × Cost if it occurs",
       "meaning": "Converts a risk into money where data exists, e.g. for fraud models."
      },
      {
       "name": "Annualised loss expectancy",
       "expr": "ALE = Annual rate of occurrence × Single loss expectancy",
       "meaning": "Estimates yearly loss from repeated events such as chatbot errors leading to refunds."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A telecom chatbot gives wrong tariff information in about 1 in 2,000 conversations. With 600,000 conversations a year, that is about 300 errors. If each costs BDT 1,500 in refunds and handling, the annualised loss expectancy is about BDT 450,000. But some errors involve vulnerable customers being charged for services they cannot afford, so the impact on people is scored 3, not 2, even though the money is modest.",
     "title": "Scoring a chatbot error risk"
    },
    {
     "type": "compare",
     "title": "Inherent vs residual risk",
     "columns": [
      {
       "title": "Inherent risk",
       "items": [
        "The level of risk before any controls",
        "Shows how dangerous the activity is in itself",
        "Drives the risk tier and the depth of assessment"
       ]
      },
      {
       "title": "Residual risk",
       "items": [
        "The level of risk remaining after controls",
        "Must be within risk appetite to proceed",
        "Changes when controls fail or conditions shift"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Risk",
      "Likelihood",
      "Impact",
      "Score",
      "Priority"
     ],
     "rows": [
      [
       "Credit model disadvantages rural women",
       "4",
       "4",
       "16",
       "High"
      ],
      [
       "Chatbot gives wrong tariff information",
       "3",
       "3",
       "9",
       "Medium"
      ],
      [
       "Prompt injection leaks customer records",
       "2",
       "5",
       "10",
       "High (impact-led)"
      ],
      [
       "Spam filter misroutes some newsletters",
       "3",
       "1",
       "3",
       "Low"
      ]
     ],
     "title": "Example heat-map placement"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Multiplying likelihood by impact can make a rare but catastrophic risk look the same as a frequent nuisance. Use an **impact override**: any risk with impact 5, or impact 4 on vulnerable people, is treated as high priority regardless of its likelihood score.",
     "title": "Do not let the matrix hide catastrophic risks"
    },
    {
     "type": "keypoints",
     "items": [
      "Likelihood estimates for novel AI failures are often guesses; record the reasoning.",
      "Scores are ordinal: a 16 is not exactly twice as bad as an 8.",
      "Group biases in the scoring team can understate harms to people unlike themselves.",
      "Risks interact; one control failure can trigger several risks at once.",
      "Scores go stale as models, data and context change; rescore after significant changes."
     ],
     "title": "Limits of scoring AI risk"
    },
    {
     "type": "scenario",
     "title": "Two risks with the same score",
     "situation": "A hospital AI triage tool has two risks scored 10: rare misclassification of chest pain as low urgency (likelihood 2, impact 5) and frequent minor delays in queue display (likelihood 5, impact 2). The budget allows one major mitigation this quarter. Which should get priority?",
     "options": [
      {
       "text": "Queue display delays, because they happen more often.",
       "feedback": "Frequency matters, but these delays cause minor, reversible harm.",
       "best": false
      },
      {
       "text": "Chest-pain misclassification, because it could cause death or irreversible harm and an impact override applies.",
       "feedback": "Best. Severity and irreversibility justify priority even at lower likelihood.",
       "best": true
      },
      {
       "text": "Split the budget equally because the scores are equal.",
       "feedback": "Equal scores do not mean equal importance. Treating them identically ignores severity.",
       "best": false
      },
      {
       "text": "Neither, until more data is collected.",
       "feedback": "Waiting leaves a potentially fatal risk untreated.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Likelihood",
       "def": "The chance that a risk event will occur within a defined period."
      },
      {
       "term": "Impact",
       "def": "The consequence of a risk event for people and the organisation."
      },
      {
       "term": "Inherent risk",
       "def": "The level of risk before controls are applied."
      },
      {
       "term": "Residual risk",
       "def": "The level of risk remaining after controls are applied."
      },
      {
       "term": "Heat map",
       "def": "A grid plotting risks by likelihood and impact to show priorities."
      },
      {
       "term": "Impact override",
       "def": "A rule that treats severe-impact risks as high priority regardless of their likelihood score."
      },
      {
       "term": "Annualised loss expectancy (ALE)",
       "def": "The expected yearly loss from a risk, calculated as annual rate of occurrence times single loss expectancy."
      },
      {
       "term": "Reversibility",
       "def": "The degree to which a harm can be undone after it occurs."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A risk has likelihood 3 and impact 4. On a 1-25 matrix its score is:",
       "options": [
        "7",
        "1",
        "12",
        "34"
       ],
       "answer": 2,
       "explain": "Risk score is likelihood multiplied by impact: 3 × 4 = 12."
      },
      {
       "q": "Which risk level is used to decide whether a system can proceed within appetite?",
       "options": [
        "Inherent risk",
        "Gross revenue",
        "Residual risk",
        "Model size"
       ],
       "answer": 2,
       "explain": "Residual risk, after controls, is compared with appetite."
      },
      {
       "q": "An event happens about 4 times a year and costs BDT 200,000 each time. The ALE is:",
       "options": [
        "BDT 800,000",
        "BDT 50,000",
        "BDT 204,000",
        "BDT 200,000"
       ],
       "answer": 0,
       "explain": "ALE = 4 × 200,000 = 800,000."
      },
      {
       "q": "Why use an impact override?",
       "options": [
        "To make scores look lower for the board",
        "So rare but catastrophic risks are not ranked as low priority",
        "To avoid documenting likelihood",
        "To replace control testing"
       ],
       "answer": 1,
       "explain": "Multiplication can understate severe, rare risks; the override corrects this."
      },
      {
       "q": "Which dimension asks whether harm can be undone?",
       "options": [
        "Scale",
        "Detectability",
        "Autonomy",
        "Reversibility"
       ],
       "answer": 3,
       "explain": "Reversibility addresses whether and how quickly harm can be corrected."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l3",
   "title": "AI Impact Assessments",
   "subtitle": "Structured assessment of effects on people, rights and society before you deploy",
   "minutes": 35,
   "objectives": [
    "Distinguish AI impact assessments, data protection impact assessments and fundamental rights impact assessments",
    "Decide when an impact assessment is needed",
    "Conduct an AI impact assessment step by step, including stakeholder engagement"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A risk register lists risks; an **impact assessment** tells the story of a specific system and its effects on people, in enough depth to support a go or no-go decision. Several kinds exist, often required by different laws or standards. A mature programme uses one integrated process that satisfies all of them, rather than making teams fill in three overlapping forms."
    },
    {
     "type": "table",
     "head": [
      "Assessment",
      "Main focus",
      "Typical trigger"
     ],
     "rows": [
      [
       "AI impact assessment (AIIA)",
       "Effects of an AI system on individuals, groups and society across all principles",
       "Organisational policy; ISO/IEC 42001 expects AI system impact assessment"
      ],
      [
       "Data protection impact assessment (DPIA)",
       "Risks to individuals from processing personal data",
       "Data protection laws for high-risk processing, such as large-scale profiling"
      ],
      [
       "Fundamental rights impact assessment (FRIA)",
       "Effects on fundamental rights of people affected by a high-risk AI system",
       "EU AI Act for certain deployers before first use"
      ],
      [
       "Algorithmic impact assessment",
       "Public-sector use of automated decision systems",
       "Government directives in several countries"
      ],
      [
       "Human rights due diligence",
       "Adverse human rights impacts across operations and value chain",
       "Corporate responsibility frameworks and some laws"
      ]
     ],
     "title": "Types of impact assessment"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Design a single AI impact assessment template with modules: a core section for every assessed system, a privacy module that meets DPIA requirements, and a rights module that meets FRIA requirements where the EU AI Act applies. ISO/IEC 42005 offers guidance on structuring AI system impact assessments.",
     "title": "One assessment, many purposes"
    },
    {
     "type": "keypoints",
     "items": [
      "The system is high-risk under law or your own tiering.",
      "It makes or materially influences decisions about access to work, credit, education, health, housing, benefits or justice.",
      "It processes sensitive personal data or profiles people at scale.",
      "It affects children or other vulnerable groups.",
      "It is novel, opaque or highly autonomous.",
      "It is a substantial change to a system already assessed."
     ],
     "title": "When to require a full impact assessment"
    },
    {
     "type": "steps",
     "title": "Conducting an AI impact assessment",
     "items": [
      {
       "title": "Describe the system",
       "text": "Purpose, intended users, affected people, data, model, outputs, decisions influenced and deployment context."
      },
      {
       "title": "Establish necessity and proportionality",
       "text": "Why AI? Is there a less intrusive way to achieve the goal?"
      },
      {
       "title": "Engage stakeholders",
       "text": "Consult affected groups or their representatives, frontline staff and experts."
      },
      {
       "title": "Identify impacts",
       "text": "Across fairness, privacy, safety, autonomy, transparency, rights and society, both positive and negative."
      },
      {
       "title": "Evaluate severity and likelihood",
       "text": "Use the risk scales, with attention to vulnerable groups."
      },
      {
       "title": "Define mitigations",
       "text": "Design, data, testing, oversight, transparency and redress measures, with owners."
      },
      {
       "title": "Decide and sign off",
       "text": "Accountable owner and, for high risk, the AI governance committee approve, approve with conditions or reject."
      },
      {
       "title": "Review",
       "text": "Revisit after launch, after changes and at a set interval."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "The most valuable question in an impact assessment is often 'should we use AI here at all?'. A well-designed form, a clear rule or better staff training sometimes achieves the goal with less risk.",
     "title": "Necessity is the question teams skip"
    },
    {
     "type": "template",
     "title": "AI impact assessment summary",
     "purpose": "Summarise the key findings of an AI impact assessment for decision-makers.",
     "columns": [
      "Impact area",
      "Affected people",
      "Potential impact",
      "Severity and likelihood",
      "Mitigation and owner",
      "Residual level"
     ],
     "example": [
      [
       "Fairness",
       "Female and rural loan applicants",
       "Lower approval rates due to sparse credit history",
       "Severe / likely",
       "Alternative data review, fairness threshold, human review of refusals; Head of Credit Risk",
       "Medium"
      ],
      [
       "Contestability",
       "All refused applicants",
       "No way to challenge automated refusals",
       "Significant / likely",
       "Refusal notice with reasons and appeal route; Head of Customer Service",
       "Low"
      ]
     ],
     "rows": 8
    },
    {
     "type": "case",
     "title": "An exam-proctoring proposal",
     "context": "A university in Dhaka proposes AI-based remote exam proctoring that uses webcams to flag 'suspicious' eye movements and background noise. Students would be automatically marked for review, and repeated flags could lead to disciplinary hearings. Many students take exams from shared rooms in crowded homes, and some have disabilities affecting eye movement.",
     "questions": [
      "Which impacts would an impact assessment identify?",
      "Is the use necessary and proportionate?",
      "What decision would you recommend?"
     ],
     "answer": "The assessment would find privacy intrusion into homes, likely unfairness to students in shared or noisy housing and to students with disabilities, risk of wrongful accusations with serious academic consequences, possible biometric processing and low accuracy of 'suspicion' signals. Necessity is doubtful: alternatives such as open-book assessment, oral checks or in-person exams may meet integrity goals with less intrusion. Note also that in jurisdictions such as the EU, AI monitoring of students during tests is a listed high-risk use. A sensible recommendation is not to deploy automated flagging as designed; if any proctoring is used, restrict it to recording for human review only on specific complaint, provide accommodations and alternatives, give students notice and appeal rights, and test for disparities before any use."
    },
    {
     "type": "scenario",
     "title": "Assessment after the fact",
     "situation": "A bank's digital team launched an AI system that sets credit-card limits. Three months later, compliance discovers that no impact assessment was done. What should happen NOW?",
     "options": [
      {
       "text": "Shut the system down permanently.",
       "feedback": "Possibly necessary if harm is serious, but the first step is to understand the risk quickly. Permanent shutdown without assessment may be disproportionate.",
       "best": false
      },
      {
       "text": "Complete an urgent impact assessment, review outcomes so far for harm, apply interim safeguards such as human review of reductions, and record the process failure.",
       "feedback": "Best. It assesses actual impacts, protects customers while assessing, and fixes the process gap that allowed launch without assessment.",
       "best": true
      },
      {
       "text": "Backdate an assessment to the launch date.",
       "feedback": "Backdating records is dishonest and can be a serious compliance breach.",
       "best": false
      },
      {
       "text": "Do nothing, because no complaints have been received.",
       "feedback": "Absence of complaints is not evidence of absence of harm, especially when affected customers may not know AI was involved.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick an AI system you know. In one paragraph, argue that AI is necessary and proportionate for its purpose. Then argue the opposite. Which argument is stronger?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "AI impact assessment (AIIA)",
       "def": "A structured evaluation of an AI system's potential effects on individuals, groups and society, used to decide whether and how to deploy it."
      },
      {
       "term": "Data protection impact assessment (DPIA)",
       "def": "An assessment of risks to individuals from processing personal data, required by many data protection laws for high-risk processing."
      },
      {
       "term": "Necessity and proportionality",
       "def": "Tests of whether AI is needed to achieve a legitimate goal and whether its intrusion is justified by the benefit."
      },
      {
       "term": "Stakeholder engagement",
       "def": "Consulting people affected by a system, or their representatives, to understand impacts and shape mitigations."
      },
      {
       "term": "Conditional approval",
       "def": "Approval to deploy only if specified mitigations are implemented and verified."
      },
      {
       "term": "Human rights due diligence",
       "def": "An ongoing process to identify, prevent, mitigate and account for adverse human rights impacts."
      },
      {
       "term": "ISO/IEC 42005",
       "def": "An international standard giving guidance on AI system impact assessment."
      },
      {
       "term": "Algorithmic impact assessment",
       "def": "An assessment of automated decision systems, often required for public-sector use."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which assessment focuses on risks from processing personal data?",
       "options": [
        "FRIA",
        "Pre-mortem",
        "Statement of Applicability",
        "DPIA"
       ],
       "answer": 3,
       "explain": "The DPIA is the data protection law instrument for high-risk personal data processing."
      },
      {
       "q": "What is the main benefit of an integrated impact assessment template?",
       "options": [
        "It satisfies several requirements without duplicate forms",
        "It removes the need for legal review",
        "It is shorter than any single assessment",
        "It avoids consulting stakeholders"
       ],
       "answer": 0,
       "explain": "Modular templates meet AIIA, DPIA and FRIA needs in one process."
      },
      {
       "q": "Which question tests necessity?",
       "options": [
        "How fast is the model?",
        "Which cloud region is cheapest?",
        "Could the goal be achieved with less intrusive means than AI?",
        "How many features does the model use?"
       ],
       "answer": 2,
       "explain": "Necessity asks whether AI is required for the goal or a less risky option exists."
      },
      {
       "q": "When should an impact assessment be revisited?",
       "options": [
        "After launch, after significant changes and at a set interval",
        "Never once signed",
        "Only when the vendor asks",
        "Only after a court case"
       ],
       "answer": 0,
       "explain": "Impacts change with use, data and context, so assessments must be living documents."
      },
      {
       "q": "A system was launched without the required assessment. What is unacceptable?",
       "options": [
        "Completing an urgent assessment",
        "Backdating an assessment to the launch date",
        "Applying interim safeguards",
        "Recording the process failure"
       ],
       "answer": 1,
       "explain": "Falsifying records compounds the failure and may breach law."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l4",
   "title": "Treating AI Risk: Controls and Risk Appetite",
   "subtitle": "Choosing responses, designing controls and setting limits leaders can enforce",
   "minutes": 30,
   "objectives": [
    "Select risk treatment options for AI risks",
    "Design preventive, detective and corrective controls, technical and organisational",
    "Write AI risk appetite statements with measurable tolerances and key risk indicators"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Assessment without treatment is paperwork. For each significant risk, the owner chooses a response and implements **controls** strong enough to bring residual risk within appetite. Controls must be specific, owned and testable; 'the team will be careful' is not a control."
    },
    {
     "type": "framework",
     "title": "Risk treatment options",
     "items": [
      {
       "label": "AV",
       "title": "Avoid",
       "text": "Do not pursue the use, or remove the risky feature. Example: drop emotion analysis from an interview tool."
      },
      {
       "label": "RE",
       "title": "Reduce",
       "text": "Lower likelihood or impact with controls. Example: fairness testing and human review of refusals."
      },
      {
       "label": "TR",
       "title": "Transfer or share",
       "text": "Shift part of the financial impact through contracts or insurance. Note: legal accountability to affected people usually cannot be transferred."
      },
      {
       "label": "AC",
       "title": "Accept",
       "text": "Consciously accept residual risk within appetite, with sign-off at the right level and review dates."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Type",
      "Purpose",
      "Technical example",
      "Organisational example"
     ],
     "rows": [
      [
       "Preventive",
       "Stop the risk event happening",
       "Input filters, access limits, transaction caps",
       "Approval gate before deployment; training"
      ],
      [
       "Detective",
       "Find problems quickly",
       "Drift and fairness monitoring, anomaly alerts",
       "Sample reviews of outputs; complaint analysis"
      ],
      [
       "Corrective",
       "Limit damage and recover",
       "Rollback to previous model, kill switch",
       "Incident response, customer remediation"
      ],
      [
       "Directive",
       "Guide behaviour",
       "System prompts and usage policies built into tools",
       "AI policy, acceptable-use rules"
      ]
     ],
     "title": "Control types with AI examples"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Contracts can move costs to a supplier, but regulators and affected people will still hold the deploying organisation responsible for how it used AI. Treat contractual transfer as a complement to controls, not a replacement.",
     "title": "You cannot outsource accountability"
    },
    {
     "type": "text",
     "text": "**Risk appetite** is the board's statement of how much risk of each kind the organisation will accept in pursuit of its goals. For AI it must be specific enough to guide decisions. 'We have a low appetite for unfair outcomes' becomes useful only when paired with **tolerances**: measurable limits that trigger action when breached, monitored through **key risk indicators (KRIs)**."
    },
    {
     "type": "table",
     "head": [
      "Appetite statement",
      "Tolerance",
      "Key risk indicator"
     ],
     "rows": [
      [
       "We have no appetite for prohibited AI practices.",
       "Zero prohibited uses in inventory",
       "Number of uses flagged as prohibited in reviews"
      ],
      [
       "We have a low appetite for unfair outcomes in customer decisions.",
       "Approval-rate ratio between protected groups at least 0.8 for high-risk models",
       "Monthly approval-rate ratio by group"
      ],
      [
       "We have a moderate appetite for productivity experiments with generative AI.",
       "Pilots allowed with approved tools and no confidential data",
       "Share of AI use through approved tools"
      ],
      [
       "We have a low appetite for unresolved AI incidents.",
       "High-severity AI incidents contained within 24 hours",
       "Mean time to contain AI incidents"
      ]
     ],
     "title": "AI risk appetite: statement, tolerance and KRI"
    },
    {
     "type": "flow",
     "title": "Treatment workflow",
     "items": [
      {
       "label": "Prioritise",
       "text": "Order risks by residual score and impact overrides"
      },
      {
       "label": "Choose response",
       "text": "Avoid, reduce, transfer or accept"
      },
      {
       "label": "Design controls",
       "text": "Specific, owned, testable"
      },
      {
       "label": "Implement",
       "text": "Build controls into the system and process"
      },
      {
       "label": "Verify",
       "text": "Test that controls work as designed"
      },
      {
       "label": "Accept and monitor",
       "text": "Sign off residual risk; track KRIs"
      }
     ]
    },
    {
     "type": "template",
     "title": "AI risk treatment plan",
     "purpose": "Turn assessed risks into owned, testable controls.",
     "columns": [
      "Risk",
      "Response",
      "Control(s)",
      "Control type",
      "Owner",
      "Test of effectiveness",
      "Due"
     ],
     "example": [
      [
       "Credit model disadvantages rural women",
       "Reduce",
       "Fairness threshold in release gate; human review of refusals",
       "Preventive + corrective",
       "Head of Credit Risk",
       "Quarterly fairness report; review sample of 50 refusals",
       "Before launch"
      ],
      [
       "Vendor changes model without notice",
       "Reduce + transfer",
       "Contract notice clause; regression test on vendor updates",
       "Preventive + detective",
       "Procurement Lead",
       "Annual contract review; automated test suite run on each update",
       "Next renewal"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "title": "Accepting a risk",
     "situation": "A product manager wants to accept a residual fairness risk on a youth employment-matching app because fixing it would delay launch by a month. The risk is scored high. Who should be able to accept it?",
     "options": [
      {
       "text": "The product manager, because they own the launch date.",
       "feedback": "A high residual risk affecting people's access to work exceeds a product manager's authority.",
       "best": false
      },
      {
       "text": "Nobody: high risks can never be accepted.",
       "feedback": "Some high risks may be accepted with justification at senior level, but here appetite for unfair outcomes is low, so acceptance is unlikely to be appropriate.",
       "best": false
      },
      {
       "text": "The level set in the risk acceptance rules, typically a senior executive or AI governance committee, checked against the low appetite for unfair outcomes.",
       "feedback": "Best. Acceptance authority should match risk level, and the decision must be checked against stated appetite. Low appetite suggests treatment, not acceptance.",
       "best": true
      },
      {
       "text": "The data scientist who built the model.",
       "feedback": "Builders should not approve their own residual risk; it lacks independence and authority.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Write one AI risk appetite statement for your organisation, with a measurable tolerance and a key risk indicator. Who would be notified if it were breached?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Risk treatment",
       "def": "Selecting and implementing options to modify risk: avoid, reduce, transfer or accept."
      },
      {
       "term": "Preventive control",
       "def": "A control designed to stop a risk event from occurring."
      },
      {
       "term": "Detective control",
       "def": "A control designed to identify a risk event or control failure quickly."
      },
      {
       "term": "Corrective control",
       "def": "A control designed to limit damage and restore normal operation after an event."
      },
      {
       "term": "Risk tolerance",
       "def": "A measurable limit on a risk that triggers action when exceeded."
      },
      {
       "term": "Key risk indicator (KRI)",
       "def": "A metric that signals changes in the level of a risk."
      },
      {
       "term": "Risk acceptance",
       "def": "A documented decision by an authorised person to retain a residual risk."
      },
      {
       "term": "Kill switch",
       "def": "A tested mechanism to stop an AI system or feature quickly."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Removing emotion analysis from an interview tool because the risk is unacceptable is an example of:",
       "options": [
        "Avoiding the risk",
        "Transferring the risk",
        "Accepting the risk",
        "A detective control"
       ],
       "answer": 0,
       "explain": "Eliminating the risky feature avoids the risk."
      },
      {
       "q": "Drift and fairness dashboards that alert the team are:",
       "options": [
        "Preventive controls",
        "Detective controls",
        "Risk appetite statements",
        "Contract clauses"
       ],
       "answer": 1,
       "explain": "They detect problems after they begin, so action can be taken."
      },
      {
       "q": "Why can't contracts fully transfer AI risk?",
       "options": [
        "Contracts are illegal for AI",
        "Suppliers never pay damages",
        "Accountability to regulators and affected people usually remains with the deployer",
        "Insurance does not exist for technology"
       ],
       "answer": 2,
       "explain": "Financial impact can be shared, but responsibility for use generally stays with the deployer."
      },
      {
       "q": "A measurable limit that triggers action when exceeded is a:",
       "options": [
        "Principle",
        "Vision statement",
        "Model card",
        "Tolerance"
       ],
       "answer": 3,
       "explain": "Tolerances make appetite statements operational."
      },
      {
       "q": "Who should accept a high residual risk?",
       "options": [
        "Whoever built the model",
        "The most junior tester",
        "The vendor's sales manager",
        "An authorised senior level defined in risk acceptance rules"
       ],
       "answer": 3,
       "explain": "Acceptance authority must match the risk level and be independent of the builders."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l5",
   "title": "Use-Case Intake, Tiering and the AI Risk Register",
   "subtitle": "A front door for every AI idea and one register that tracks them all",
   "minutes": 30,
   "objectives": [
    "Design an AI use-case intake process that is fast for low-risk ideas",
    "Apply a tiering method that routes systems to the right level of review",
    "Maintain an AI risk register integrated with enterprise risk management"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Governance becomes real at the **front door**. If every new AI idea passes through a short intake, the organisation sees what is coming, routes it to the right level of review and avoids surprises. If the intake is slow or confusing, teams go around it. The goal is a process that takes minutes for low-risk ideas and leads to a full assessment only when needed."
    },
    {
     "type": "flow",
     "title": "AI use-case intake flow",
     "items": [
      {
       "label": "Submit",
       "text": "Short form: purpose, data, users, affected people, vendor"
      },
      {
       "label": "Screen",
       "text": "Prohibited-use and legal triggers checked"
      },
      {
       "label": "Tier",
       "text": "Triage questions assign a provisional tier"
      },
      {
       "label": "Route",
       "text": "Fast track, standard review or full assessment"
      },
      {
       "label": "Decide",
       "text": "Approve, approve with conditions or reject"
      },
      {
       "label": "Register",
       "text": "Inventory and risk register updated"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Question",
      "If yes"
     ],
     "rows": [
      [
       "Could it fall within a prohibited practice?",
       "Stop and escalate to legal"
      ],
      [
       "Does it make or materially influence decisions about people's access to work, credit, education, health, housing, benefits or justice?",
       "High tier"
      ],
      [
       "Does it process sensitive personal data or profile people at scale?",
       "At least medium; high if combined with decisions"
      ],
      [
       "Does it interact with the public or generate content shown externally?",
       "At least medium; transparency duties"
      ],
      [
       "Can it take actions without human approval?",
       "Raise tier by one level"
      ],
      [
       "Is it internal productivity use with no personal or confidential data?",
       "Low tier, fast track"
      ]
     ],
     "title": "Triage questions that drive the tier"
    },
    {
     "type": "framework",
     "title": "ZAIG tiers and what each requires",
     "items": [
      {
       "label": "T0",
       "title": "Prohibited",
       "text": "Not permitted. Recorded and closed."
      },
      {
       "label": "T1",
       "title": "Low",
       "text": "Register, owner, approved tools, acceptable-use rules. Decision within days."
      },
      {
       "label": "T2",
       "title": "Medium",
       "text": "Light assessment, pre-launch testing, transparency checks, annual review."
      },
      {
       "label": "T3",
       "title": "High",
       "text": "Full impact assessment, independent validation, human oversight design, monitoring plan, committee approval, review at least annually and after changes."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Track intake cycle time by tier, the share of AI use cases registered before launch and how many systems are discovered outside the process. Fast, predictable approvals are the best way to stop shadow AI.",
     "title": "Measure the front door"
    },
    {
     "type": "template",
     "title": "AI risk register",
     "purpose": "Track AI risks across systems in a format that rolls up into enterprise risk reporting.",
     "columns": [
      "Risk ID and system",
      "Risk description",
      "Inherent score",
      "Key controls",
      "Residual score",
      "Owner",
      "Review date"
     ],
     "example": [
      [
       "R-014 Nano-loan model",
       "Lower approval rates for rural women due to sparse wallet history",
       "16 (4×4)",
       "Fairness gate, alternative data, human review of refusals",
       "8 (2×4)",
       "Head of Credit Risk",
       "Quarterly"
      ],
      [
       "R-022 Support chatbot",
       "Invented fee information leads to customer detriment",
       "9 (3×3)",
       "Grounding in policy documents, disclosure, escalation to staff",
       "4 (2×2)",
       "Head of Customer Service",
       "Six-monthly"
      ]
     ],
     "rows": 8
    },
    {
     "type": "layers",
     "title": "Where the AI risk register sits (top layer first)",
     "items": [
      {
       "label": "Board risk committee",
       "parts": [
        "Top AI risks within enterprise risk profile"
       ]
      },
      {
       "label": "Enterprise risk register",
       "parts": [
        "Aggregated AI risks, e.g. 'unfair automated decisions'"
       ]
      },
      {
       "label": "AI risk register",
       "parts": [
        "System-level AI risks, scores, controls, owners"
       ]
      },
      {
       "label": "Impact assessments and test evidence",
       "parts": [
        "Detailed analysis behind each entry"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "A board does not need 200 system-level risks. Group them into a handful of enterprise themes, such as 'unfair automated decisions' or 'generative-AI data leakage', each showing the number of systems affected, the trend and the worst residual score.",
     "title": "Aggregate, do not just list"
    },
    {
     "type": "case",
     "title": "Building the front door at a hospital group",
     "context": "A private hospital group with five sites receives a steady stream of AI proposals: radiology triage, a nurse-rostering optimiser, a patient chatbot, transcription for doctors and a marketing image generator. Approvals currently take four months for everything because each goes through the full ethics committee.",
     "questions": [
      "How would you tier these proposals?",
      "What would the intake process look like?",
      "How would you know it is working?"
     ],
     "answer": "Radiology triage is high tier (health decisions, possible regulated medical device). Doctor transcription is medium to high (sensitive health data, errors in records; human review required). The patient chatbot is medium, rising to high if it gives clinical advice. The rostering optimiser is medium (affects staff working conditions; worker consultation). The marketing image generator is low, with transparency labelling. The intake should be a short online form with triage questions, a weekly triage meeting of privacy, clinical safety and IT security, fast-track approval for low tier within a week, and the ethics committee reserved for high-tier systems. Success measures: cycle time per tier, percentage of AI registered before launch, number of systems discovered outside the process and committee time spent on high-tier items."
    },
    {
     "type": "scenario",
     "title": "The fast track is too fast",
     "situation": "After launching a fast track for low-tier AI, an audit finds a 'low-tier' marketing tool that actually scores customers' likelihood of defaulting on payments and is used to decide who receives payment-plan offers. What is the BEST fix?",
     "options": [
      {
       "text": "Abolish the fast track and send everything to full review.",
       "feedback": "This punishes the many correctly tiered ideas and will revive shadow AI.",
       "best": false
      },
      {
       "text": "Retier the tool, add a triage question on decisions about people's financial access, spot-check a sample of fast-track approvals and require owners to re-register when use changes.",
       "feedback": "Best. It corrects this case, strengthens the screening logic and adds detective controls without losing the benefit of the fast track.",
       "best": true
      },
      {
       "text": "Discipline the marketing manager and change nothing else.",
       "feedback": "Individual action does not fix the weakness in the intake design that allowed misclassification.",
       "best": false
      },
      {
       "text": "Ask the vendor to confirm the tool is low risk.",
       "feedback": "The vendor cannot judge how the organisation uses the tool; tiering depends on use.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "If your organisation had an AI intake form, what are the five questions you would put on it to catch the highest-risk ideas while keeping it under five minutes?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Use-case intake",
       "def": "The process by which new AI ideas are submitted, screened and routed for review."
      },
      {
       "term": "Tiering",
       "def": "Assigning an AI system to a risk level that determines the governance it requires."
      },
      {
       "term": "Fast track",
       "def": "A streamlined approval path for low-risk AI uses."
      },
      {
       "term": "AI risk register",
       "def": "A record of AI risks with scores, controls, owners and review dates."
      },
      {
       "term": "Enterprise risk management (ERM)",
       "def": "The organisation-wide framework for identifying, assessing and managing all types of risk."
      },
      {
       "term": "Triage",
       "def": "A quick initial assessment that sorts cases by urgency or risk."
      },
      {
       "term": "Re-registration trigger",
       "def": "A change, such as a new purpose or data source, that requires a system to go back through intake."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What is the main purpose of AI use-case intake?",
       "options": [
        "To slow down all AI projects equally",
        "To replace impact assessments",
        "To see every AI idea early and route it to the right depth of review",
        "To select vendors by price"
       ],
       "answer": 2,
       "explain": "Intake gives visibility and proportionate routing."
      },
      {
       "q": "An internal tool that drafts meeting notes with no personal or confidential data would usually be:",
       "options": [
        "Prohibited",
        "Low tier",
        "High tier",
        "Exempt from registration"
       ],
       "answer": 1,
       "explain": "It is low-impact internal productivity use but still registered."
      },
      {
       "q": "Which triage answer should raise a system's tier by one level?",
       "options": [
        "It uses a modern framework",
        "It can take actions without human approval",
        "It is hosted internally",
        "It has a short name"
       ],
       "answer": 1,
       "explain": "Autonomy increases the potential for unchecked harm."
      },
      {
       "q": "How should system-level AI risks be reported to the board?",
       "options": [
        "Aggregated into a few enterprise themes with counts, trends and worst residual scores",
        "As a list of every risk on every system",
        "Not at all",
        "Only when a regulator asks"
       ],
       "answer": 0,
       "explain": "Aggregation makes AI risk decision-ready for the board."
      },
      {
       "q": "What is the best evidence that the intake process is working?",
       "options": [
        "More forms submitted per week regardless of quality",
        "Longer review times",
        "Fewer approvals overall",
        "A rising share of AI registered before launch and fewer systems found outside it"
       ],
       "answer": 3,
       "explain": "Coverage before launch and fewer surprises show the front door is used."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m1",
  "q": "A logistics company's demand-forecasting model was accurate for two years. After a new competitor changed customer behaviour, forecasts became unreliable, although nobody changed the code. What BEST explains this?",
  "options": [
   "A software bug was introduced by the most recent operating system security patch",
   "The model was overfitted because it had too few parameters to learn",
   "The vendor quietly switched the model to a generative architecture",
   "The live data drifted from the patterns learned in training"
  ],
  "answer": 3,
  "explain": "Machine-learning behaviour depends on data. When the world changes, the learned patterns fit less well even with unchanged code. The other options do not match the facts described."
 },
 {
  "module": "m1",
  "q": "An insurer removes gender from its pricing model, yet women still receive systematically higher quotes. What should the governance lead investigate FIRST?",
  "options": [
   "Whether the model is hosted in a secure data centre",
   "Whether other features are acting as proxies for gender",
   "Whether the model's user interface displays prices clearly",
   "Whether the pricing team received training on the new tool"
  ],
  "answer": 1,
  "explain": "Removing an attribute does not remove its influence when correlated features carry the same information. Hosting, interface and training do not explain the pattern."
 },
 {
  "module": "m1",
  "q": "A department enables an AI meeting-summary feature in its existing office software. The governance team was not informed. How should this be treated?",
  "options": [
   "As out of scope because it came with software already licensed",
   "As an AI use case to register, assess and give an owner",
   "As a security incident requiring immediate disciplinary action",
   "As the vendor's responsibility alone, so no internal action or registration is needed"
  ],
  "answer": 1,
  "explain": "AI features inside bought software still need registration and an owner. Treating it as an incident or as purely the vendor's problem is disproportionate or ignores deployer responsibility."
 },
 {
  "module": "m1",
  "q": "A company buys a general chatbot platform, retrains it on its own data for tenant screening and sells it to landlords under its own brand. What is the MOST important governance consequence?",
  "options": [
   "The original platform vendor becomes solely responsible for any harm",
   "The system no longer counts as AI because it was retrained",
   "It likely takes on provider duties for the new system",
   "Only the landlords using it have any obligations"
  ],
  "answer": 2,
  "explain": "Repurposing and rebranding a system generally makes the organisation a provider with the related duties. Responsibility does not stay only with the original vendor or pass only to customers."
 },
 {
  "module": "m1",
  "q": "A board member asks why a generative-AI assistant needs different controls from the company's established credit-scoring model. Which answer is MOST accurate?",
  "options": [
   "Generative models are always less accurate than predictive ones",
   "Generative AI never processes personal data, so privacy controls are completely different",
   "Credit models are exempt from governance because they are older",
   "Its open-ended outputs and wide user base create unplanned uses"
  ],
  "answer": 3,
  "explain": "The key difference is breadth of use and output type. Accuracy comparisons, privacy claims and exemptions are inaccurate generalisations."
 },
 {
  "module": "m1",
  "q": "An AI agent can read customer tickets and issue refunds through the payment system. Which control MOST directly limits the harm from a manipulated or mistaken agent?",
  "options": [
   "A longer and more detailed system prompt for the agent",
   "A switch to the largest available language model",
   "Refund limits, least privilege and human approval",
   "A monthly report on the number of tickets processed"
  ],
  "answer": 2,
  "explain": "Permissions and approval gates contain the impact of wrong actions. Prompts and model size do not prevent manipulation; volume reports detect nothing in time."
 },
 {
  "module": "m1",
  "q": "An inventory exercise finds that many staff paste client contracts into personal accounts on public chat assistants. What is the BEST first response?",
  "options": [
   "Offer an approved, protected tool with clear rules and training",
   "Dismiss the staff identified so that others are deterred",
   "Do nothing because personal productivity tools are outside governance",
   "Block the internet for all staff who handle client contracts"
  ],
  "answer": 0,
  "explain": "A safe, approved path plus clear rules and awareness reduces leakage without driving use underground. The other options are disproportionate or ignore the risk."
 },
 {
  "module": "m1",
  "q": "A chief executive argues that AI governance should wait until the company is larger. Which principle BEST supports starting now without slowing the business?",
  "options": [
   "Proportionality: light rules for low risk, focus on high impact",
   "Uniformity: one full assessment process applied to every AI tool the company uses",
   "Deferral: governance added only after the first regulatory inquiry",
   "Delegation: leaving governance decisions entirely to AI vendors"
  ],
  "answer": 0,
  "explain": "Proportionate governance keeps low-risk use fast and focuses effort on systems that can cause serious harm. The other options are slow, reactive or abdicate responsibility."
 },
 {
  "module": "m2",
  "q": "An energy company's AI principles promise fairness, but no fairness test has ever been run and no owner is named. The board asks what to do. What should the AI governance lead recommend FIRST?",
  "options": [
   "Publish the principles more widely to build public trust in the company's AI",
   "Replace the principles with a longer list that covers sustainability too",
   "Name owners and set testable requirements, starting with high-risk systems",
   "Wait for regulators to define fairness before taking any further action"
  ],
  "answer": 2,
  "explain": "Ownership and testable requirements operationalise principles where risk is highest. Publicity, longer lists or waiting do not close the gap."
 },
 {
  "module": "m2",
  "q": "A health insurer's claims-triage model shows similar overall accuracy for men and women, but women's genuine claims are wrongly flagged for investigation twice as often. Which statement is MOST accurate?",
  "options": [
   "The model is fair because accuracy is balanced",
   "The difference is acceptable because overall accuracy is very high",
   "The issue is purely technical and does not need any policy decision",
   "The model is unfair on the error that harms claimants most"
  ],
  "answer": 3,
  "explain": "Balanced accuracy can hide unequal false positives. Here the harm falls on honest claimants, so the error-rate gap is the fairness issue and needs a policy decision."
 },
 {
  "module": "m2",
  "q": "A data science team says it has removed religion from a scholarship model, so the model cannot discriminate by religion. What should governance require?",
  "options": [
   "Acceptance of the change because the attribute is no longer in the model",
   "Collection of more religious data",
   "Outcome testing by religion and checks for proxy features",
   "Replacement of the model with a random lottery for all applicants"
  ],
  "answer": 2,
  "explain": "Proxies can carry protected information. Testing outcomes, which may require carefully controlled access to the attribute, shows whether discrimination persists."
 },
 {
  "module": "m2",
  "q": "A customer refused credit by an AI-assisted process asks for reasons. The vendor model is a complex ensemble. What does a good response provide?",
  "options": [
   "A statement that the vendor's algorithm decided and cannot be questioned",
   "The main factors, plain language and a route to human review",
   "The complete source code and model weights so the customer can check",
   "A general brochure on how AI works"
  ],
  "answer": 1,
  "explain": "Meaningful explanation plus contestability serves the individual. Blaming the vendor, dumping code or generic material does not."
 },
 {
  "module": "m2",
  "q": "Analysts approve 99.8% of an AI system's recommendations after about 30 seconds each. Management cites this as proof the model is excellent. What is the BEST interpretation?",
  "options": [
   "It may show automation bias; test review quality",
   "It proves the model is excellent and that review can safely be removed",
   "It shows the analysts are lazy",
   "It means the oversight design is effective and needs no further checks"
  ],
  "answer": 0,
  "explain": "Very high agreement with short reviews often signals rubber-stamping. Testing with seeded cases and reviewing conditions reveals the truth."
 },
 {
  "module": "m2",
  "q": "A retailer wants to use loyalty-card purchase histories, collected for rewards, to infer customers' health conditions for targeted adverts. Which principle is MOST directly engaged?",
  "options": [
   "Robustness of the model under adversarial inputs from attackers",
   "Purpose limitation, along with sensitive-data rules",
   "Interpretability of the model's internal parameters to engineers",
   "Latency of the recommendation engine"
  ],
  "answer": 1,
  "explain": "Reusing data for an unexpected, sensitive inference engages purpose limitation and special-category protections."
 },
 {
  "module": "m2",
  "q": "An organisation is drafting its first AI policy. Legal wants every testing threshold and template inside the policy. What is the BEST structure?",
  "options": [
   "A single long policy containing every threshold, template and tool name",
   "No policy at all, only guidelines that teams may choose to follow",
   "Separate policies for each department",
   "A short policy with detail in standards and procedures"
  ],
  "answer": 3,
  "explain": "A layered framework keeps the policy stable while standards and procedures can change. A monolith dates quickly; optional or fragmented guidance fails."
 },
 {
  "module": "m3",
  "q": "A Chattogram software firm with no EU office sells a CV-ranking tool to recruitment agencies in the Netherlands. The CEO believes EU law cannot reach the firm. What is the MOST accurate advice?",
  "options": [
   "EU law applies only to companies with a registered office or staff in the EU",
   "Only the Dutch agencies have duties, because they use the tool in Europe",
   "The tool is minimal risk because a recruiter makes the final selection",
   "The firm is likely a provider of a high-risk system under the EU AI Act"
  ],
  "answer": 3,
  "explain": "The Act reaches providers placing systems on the EU market wherever based, and recruitment ranking is a listed high-risk use. Deployers also have duties, but that does not remove the provider's."
 },
 {
  "module": "m3",
  "q": "A retailer plans to use cameras and AI to infer the emotions of its shop-floor staff to rate their customer service. It operates in Spain. How should the governance lead respond?",
  "options": [
   "Treat it as minimal risk because it does not make decisions about customers",
   "Proceed with a notice to staff, which satisfies the transparency duty",
   "Advise that this is likely prohibited and should not proceed",
   "Register it as a general-purpose AI model before launch"
  ],
  "answer": 2,
  "explain": "Emotion recognition in the workplace is prohibited except for medical or safety reasons. A notice does not cure a prohibited practice."
 },
 {
  "module": "m3",
  "q": "A public hospital in an EU member state will deploy a high-risk triage system bought from a certified provider. Which step is the hospital's own obligation before first use?",
  "options": [
   "Perform the provider's conformity assessment again from the beginning",
   "Carry out a fundamental rights impact assessment",
   "Affix its own CE marking to the system",
   "Publish a training-content summary for the model"
  ],
  "answer": 1,
  "explain": "Public bodies deploying high-risk systems must carry out a FRIA. Conformity assessment and CE marking are provider duties; training summaries apply to GPAI providers."
 },
 {
  "module": "m3",
  "q": "A board member says an ISO/IEC 42001 certificate means the company's AI is fully compliant with the EU AI Act. What is the BEST response?",
  "options": [
   "Correct, because the certificate replaces conformity assessment in every case",
   "Correct, but only for systems built before the certificate was issued",
   "Incorrect, because ISO/IEC 42001 has no relevance to AI regulation at all",
   "It evidences a sound AI management system in scope, not legal compliance"
  ],
  "answer": 3,
  "explain": "Certification shows the management system meets the standard within scope. It supports but does not equal legal compliance."
 },
 {
  "module": "m3",
  "q": "A risk team wants a framework that gives practical actions to identify, measure and treat AI risks, but does not need certification. Which instrument fits BEST?",
  "options": [
   "The EU AI Act's penalty provisions for general-purpose AI model providers",
   "A certification body's accreditation rules for auditing AI management systems",
   "The NIST AI Risk Management Framework",
   "OECD recommendations to governments"
  ],
  "answer": 2,
  "explain": "The NIST AI RMF is a voluntary, practical risk framework. The other options do not provide organisational risk practices."
 },
 {
  "module": "m3",
  "q": "An Indian fintech asks which national AI law governs its credit model as of 2026. What is the MOST accurate answer?",
  "options": [
   "No standalone AI act; data protection and sector rules apply",
   "A comprehensive AI act modelled on the EU law, in force since 2024",
   "No rules at all until an AI act passes",
   "Only the voluntary OECD principles, which India has made binding"
  ],
  "answer": 0,
  "explain": "India relies on principles-based guidelines, the DPDP Act and Rules, and sector regulators such as the central bank, rather than a standalone AI act."
 },
 {
  "module": "m3",
  "q": "A company's legal team learns that high-risk deadlines in the EU AI Act may be postponed by a proposed amendment. What should the AI governance lead do?",
  "options": [
   "Pause all high-risk compliance work until the amendment is finally adopted",
   "Track the amendment but keep building controls on the legislated timeline",
   "Assume the postponement applies and tell product teams to stop preparing",
   "Ignore the proposal because amendments to EU law are never adopted"
  ],
  "answer": 1,
  "explain": "Proposals may change or fail. Prudent programmes monitor while continuing preparation, since the controls are good practice either way."
 },
 {
  "module": "m3",
  "q": "A Bangladeshi mobile wallet uses AI for credit scoring only in Bangladesh. A manager says the absence of an AI act means no governance is needed. Which response is MOST accurate?",
  "options": [
   "Data, cyber security, consumer and central bank rules still apply",
   "Correct, because Bangladeshi law does not regulate any use of algorithms",
   "Incorrect, because the EU AI Act applies to all credit scoring worldwide",
   "Correct, if the model was bought abroad"
  ],
  "answer": 0,
  "explain": "Existing domestic laws and sector supervision apply. The EU Act does not reach a purely domestic system, and buying from a vendor does not remove deployer responsibility."
 },
 {
  "module": "m4",
  "q": "A team scoring risks for a hospital's AI sepsis-alert tool rates 'missed sepsis case' as likelihood 1, impact 5 (score 5) and ranks it below several score-9 operational risks. What should the governance lead do?",
  "options": [
   "Accept the ranking because the matrix is the agreed method for prioritising",
   "Increase the likelihood score so the numbers produce the desired ranking",
   "Apply an impact override and prioritise the missed-case risk",
   "Remove the risk because likelihood is low"
  ],
  "answer": 2,
  "explain": "Severe, potentially fatal harms need priority regardless of the multiplied score. Manipulating scores or deleting the risk undermines the process."
 },
 {
  "module": "m4",
  "q": "An e-commerce company wants to use AI to set individual prices based on browsing behaviour and inferred income. Which step should come FIRST in the impact assessment?",
  "options": [
   "Choose the most accurate pricing algorithm",
   "Calculate the expected revenue increase for the next financial year",
   "Draft customer notices explaining why some people pay higher prices",
   "Describe the system and test necessity and proportionality"
  ],
  "answer": 3,
  "explain": "Assessment starts by understanding the system and whether the intrusive approach is justified. Algorithm choice, revenue and notices come later, if at all."
 },
 {
  "module": "m4",
  "q": "A board approves the statement: 'We have a low appetite for unfair outcomes in customer decisions.' Six months later nobody can say whether it has been breached. What is MISSING?",
  "options": [
   "A longer appetite statement",
   "A separate appetite statement for each department",
   "Measurable tolerances and key risk indicators",
   "An external auditor's opinion on the statement wording"
  ],
  "answer": 2,
  "explain": "Appetite becomes operational through measurable limits and monitored indicators. More words or opinions do not make it testable."
 },
 {
  "module": "m4",
  "q": "A vendor offers to indemnify a lender for any losses from its AI credit model. The lender's CFO says this transfers the fairness risk. What is the BEST response?",
  "options": [
   "Indemnity shares cost, but the lender stays accountable and needs controls",
   "Agree, because the indemnity transfers all legal responsibility to the vendor",
   "Agree, provided the indemnity has no upper financial limit in the contract",
   "Disagree, because indemnities are never enforceable for any technology"
  ],
  "answer": 0,
  "explain": "Contracts can share financial impact but not the deployer's accountability to customers and regulators, so controls remain necessary."
 },
 {
  "module": "m4",
  "q": "A university's AI intake form takes three weeks for every request. Departments start buying AI tools on credit cards. What is the MOST effective fix?",
  "options": [
   "Ban credit-card software purchases",
   "Add more questions to the intake form to make reviews thorough",
   "Ask the ethics committee to meet daily for every request received",
   "Tiered routing with a fast track for low-risk uses"
  ],
  "answer": 3,
  "explain": "Proportionate tiering makes the front door fast for low-risk uses and removes the incentive to bypass it. Bans or heavier forms drive more workarounds."
 },
 {
  "module": "m4",
  "q": "A data protection officer asks whether the AI impact assessment can replace the DPIA required by law for a profiling system. What is the BEST answer?",
  "options": [
   "No, the two assessments must always be completed by separate teams",
   "Yes, if it includes a module meeting every DPIA requirement",
   "Yes, any AI assessment automatically satisfies data protection law",
   "No, DPIAs only apply to overseas hosting"
  ],
  "answer": 1,
  "explain": "An integrated template can meet the legal DPIA requirements if it covers them fully. Automatic equivalence is not assumed, and separate teams are not required."
 },
 {
  "module": "m4",
  "q": "An internal audit finds 180 AI risks recorded across 40 systems. The board receives the full list each quarter and has stopped reading it. What should change?",
  "options": [
   "Stop reporting AI risks to the board",
   "Aggregate risks into a few themes with trends and worst residuals",
   "Send the full list monthly instead of quarterly for more visibility",
   "Report only those risks that already have completed treatment plans"
  ],
  "answer": 1,
  "explain": "Boards need aggregated, decision-ready information. Less reporting, more volume or selective reporting all reduce oversight."
 }
]);
