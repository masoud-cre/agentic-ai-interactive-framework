const domains = {
  foundation: { label: 'Foundation', color: '#2563eb' },
  creation: { label: 'Creation', color: '#ca8a04' },
  action: { label: 'Action', color: '#dc2626' },
  operations: { label: 'Operations', color: '#0f766e' },
  governance: { label: 'Governance', color: '#7c3aed' },
};

const concepts = [
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    domain: 'foundation',
    x: 64,
    y: 352,
    w: 148,
    summary: 'Turns language into structured signals machines can classify, retrieve, transform, and generate from.',
    why: 'NLP is the interface layer that lets users describe intent in ordinary language instead of rigid commands.',
    examples: ['Intent detection', 'Entity extraction', 'Semantic search'],
    related: ['llms', 'reasoning', 'prompt-engineering'],
  },
  {
    id: 'reasoning',
    title: 'Reasoning & Problem Solving',
    domain: 'foundation',
    x: 54,
    y: 410,
    w: 150,
    summary: 'Applies rules, learned patterns, and intermediate steps to move from a question to a defensible answer.',
    why: 'Agentic systems need more than text generation; they need explicit paths from goals to decisions.',
    examples: ['Planning steps', 'Constraint solving', 'Decision support'],
    related: ['planning', 'goal-decomposition', 'evaluators'],
  },
  {
    id: 'supervised-learning',
    title: 'Supervised Learning',
    domain: 'foundation',
    x: 92,
    y: 467,
    w: 118,
    summary: 'Learns from labeled examples to map inputs to expected outputs.',
    why: 'Many dependable AI workflows still rely on labeled data, evaluation sets, and measurable accuracy.',
    examples: ['Classification', 'Regression', 'Intent routing'],
    related: ['reinforcement-learning', 'deep-learning', 'evaluation'],
  },
  {
    id: 'reinforcement-learning',
    title: 'Reinforcement Learning',
    domain: 'foundation',
    x: 70,
    y: 520,
    w: 138,
    summary: 'Optimizes behavior through rewards, penalties, and feedback loops over time.',
    why: 'Feedback-driven learning is central to agents that improve policies, routes, and task strategies.',
    examples: ['Policy optimization', 'Reward models', 'Preference tuning'],
    related: ['feedback-loops', 'self-improvement', 'risk-management'],
  },
  {
    id: 'unsupervised-learning',
    title: 'Unsupervised Learning',
    domain: 'foundation',
    x: 232,
    y: 512,
    w: 134,
    summary: 'Finds structure in data without labels, such as clusters, latent topics, or anomalies.',
    why: 'It helps systems discover patterns before explicit labels or business taxonomies exist.',
    examples: ['Clustering', 'Topic modeling', 'Anomaly discovery'],
    related: ['deep-learning', 'embeddings', 'rag'],
  },
  {
    id: 'transformers',
    title: 'Transformers',
    domain: 'foundation',
    x: 154,
    y: 598,
    w: 118,
    summary: 'Sequence models built around attention, powering modern large language and multimodal models.',
    why: 'Transformers are the architecture that made broad, reusable foundation models practical.',
    examples: ['GPT-style models', 'Vision transformers', 'Encoder-decoder models'],
    related: ['attention', 'llms', 'multimodal'],
  },
  {
    id: 'attention',
    title: 'Attention Mechanisms',
    domain: 'foundation',
    x: 220,
    y: 300,
    w: 142,
    summary: 'Lets models weigh which inputs matter most when producing the next representation or token.',
    why: 'Attention is what gives models flexible context handling across text, code, images, and audio.',
    examples: ['Self-attention', 'Cross-attention', 'Context weighting'],
    related: ['transformers', 'llms', 'multimodal'],
  },
  {
    id: 'transfer-learning',
    title: 'Transfer Learning',
    domain: 'foundation',
    x: 388,
    y: 300,
    w: 118,
    summary: 'Reuses knowledge from pretraining or one task to adapt faster to another.',
    why: 'Most useful AI products start from broad pretrained models and specialize them through prompts, retrieval, or tuning.',
    examples: ['Fine-tuning', 'Domain adaptation', 'Embedding reuse'],
    related: ['llms', 'rag', 'prompt-engineering'],
  },
  {
    id: 'llms',
    title: 'Large Language Models',
    domain: 'foundation',
    x: 350,
    y: 352,
    w: 164,
    summary: 'General-purpose models trained on massive corpora to understand and generate language-like sequences.',
    why: 'LLMs are the reasoning and language substrate for many generative and agentic applications.',
    examples: ['Question answering', 'Summarization', 'Code generation'],
    related: ['prompt-engineering', 'function-calling', 'rag'],
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    domain: 'foundation',
    x: 394,
    y: 458,
    w: 150,
    summary: 'Multi-layer neural networks that learn hierarchical representations from data.',
    why: 'Deep learning is the bridge from traditional ML to modern generation, perception, and representation learning.',
    examples: ['Neural classifiers', 'Representation learning', 'Perception systems'],
    related: ['cnn', 'rnn', 'llms'],
  },
  {
    id: 'cnn',
    title: 'Convolutional Neural Networks',
    domain: 'foundation',
    x: 254,
    y: 640,
    w: 178,
    summary: 'Neural networks specialized for grid-like data such as images and visual patterns.',
    why: 'CNNs still matter for visual recognition, inspection, and some multimodal pipelines.',
    examples: ['Image classification', 'Object detection', 'Visual feature extraction'],
    related: ['image-generation', 'multimodal', 'deep-learning'],
  },
  {
    id: 'rnn',
    title: 'Recurrent Networks & LSTMs',
    domain: 'foundation',
    x: 394,
    y: 596,
    w: 150,
    summary: 'Sequence models that process time-ordered data with memory across steps.',
    why: 'They are older than transformers, but the idea of state over time still appears in agent memory and workflow logs.',
    examples: ['Time series', 'Speech signals', 'Sequence tagging'],
    related: ['memory-systems', 'state-persistence', 'deep-learning'],
  },
  {
    id: 'code-generation',
    title: 'Code Generation',
    domain: 'creation',
    x: 126,
    y: 665,
    w: 112,
    summary: 'Uses generative models to produce, transform, explain, or test software.',
    why: 'Code is one of the most valuable action surfaces for agents because generated code can change real systems.',
    examples: ['Scaffold apps', 'Write tests', 'Refactor modules'],
    related: ['function-calling', 'tool-orchestration', 'validation'],
  },
  {
    id: 'image-generation',
    title: 'Image Generation',
    domain: 'creation',
    x: 365,
    y: 708,
    w: 118,
    summary: 'Generates or edits visual assets from text, references, or structured constraints.',
    why: 'Multimodal generation expands AI systems beyond text into design, media, and visual communication.',
    examples: ['Concept art', 'Product mockups', 'Visual variants'],
    related: ['multimodal', 'video-generation', 'content-creation'],
  },
  {
    id: 'video-generation',
    title: 'Video Generation',
    domain: 'creation',
    x: 500,
    y: 664,
    w: 112,
    summary: 'Creates moving visual sequences from prompts, images, storyboards, or reference clips.',
    why: 'Video generation points toward richer agent outputs where planning and creative direction combine.',
    examples: ['Explainers', 'Motion concepts', 'Synthetic previews'],
    related: ['image-generation', 'multimodal', 'validation'],
  },
  {
    id: 'personalization',
    title: 'Personalization',
    domain: 'creation',
    x: 392,
    y: 238,
    w: 134,
    summary: 'Adapts responses, recommendations, and workflows to a user, role, context, or organization.',
    why: 'The more autonomous a system becomes, the more it needs to understand the specific person and environment it serves.',
    examples: ['User preferences', 'Role-aware UX', 'Contextual recommendations'],
    related: ['memory-systems', 'state-persistence', 'human-oversight'],
  },
  {
    id: 'multimodal',
    title: 'Multimodal Generation',
    domain: 'creation',
    x: 540,
    y: 268,
    w: 170,
    summary: 'Combines text, images, audio, video, and structured data in one workflow.',
    why: 'Real work is rarely text-only; agents need to perceive, reason, and create across modalities.',
    examples: ['Text plus image reasoning', 'Audio transcription', 'Document understanding'],
    related: ['speech', 'image-generation', 'llms'],
  },
  {
    id: 'hallucination',
    title: 'Hallucination Mitigation',
    domain: 'creation',
    x: 548,
    y: 330,
    w: 152,
    summary: 'Reduces unsupported or incorrect model outputs through grounding, checks, and constraints.',
    why: 'A generated answer is not enough; users need confidence that the answer is grounded and recoverable.',
    examples: ['Citations', 'Grounded retrieval', 'Answer verification'],
    related: ['rag', 'evaluation', 'guardrails'],
  },
  {
    id: 'function-calling',
    title: 'Tool Use & Function Calling',
    domain: 'creation',
    x: 602,
    y: 384,
    w: 154,
    summary: 'Lets models call structured tools instead of only producing text.',
    why: 'Function calling is the hinge between generation and action: it turns model intent into system operations.',
    examples: ['Call APIs', 'Query databases', 'Trigger workflows'],
    related: ['tool-orchestration', 'agent-protocol', 'validation'],
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    domain: 'creation',
    x: 612,
    y: 448,
    w: 142,
    summary: 'Shapes model behavior with instructions, examples, formatting, and constraints.',
    why: 'Good prompting is the fastest way to prototype behavior before investing in tools, retrieval, or fine-tuning.',
    examples: ['System prompts', 'Few-shot examples', 'Output schemas'],
    related: ['llms', 'planning', 'guardrails'],
  },
  {
    id: 'rag',
    title: 'Retrieval-Augmented Generation',
    domain: 'creation',
    x: 555,
    y: 548,
    w: 188,
    summary: 'Grounds model responses in retrieved documents, records, or knowledge base chunks.',
    why: 'RAG keeps systems current, explainable, and connected to proprietary knowledge without retraining the model.',
    examples: ['Knowledge assistants', 'Policy lookup', 'Customer history retrieval'],
    related: ['memory-systems', 'hallucination', 'llms'],
  },
  {
    id: 'speech',
    title: 'Speech Interfaces',
    domain: 'creation',
    x: 572,
    y: 618,
    w: 146,
    summary: 'Connects agents to spoken interaction through speech-to-text and text-to-speech.',
    why: 'Voice makes agents usable in hands-busy, mobile, contact center, and accessibility contexts.',
    examples: ['ASR', 'TTS', 'Voice agents'],
    related: ['multimodal', 'human-oversight', 'observability'],
  },
  {
    id: 'agent-protocol',
    title: 'Agent Protocol',
    domain: 'action',
    x: 490,
    y: 106,
    w: 118,
    summary: 'Defines how an agent describes goals, tools, messages, memory, and handoffs.',
    why: 'Protocols make agent behavior interoperable instead of trapped inside one product or prompt.',
    examples: ['Tool schemas', 'Message formats', 'Execution contracts'],
    related: ['function-calling', 'handoff', 'contracts'],
  },
  {
    id: 'intent-preservation',
    title: 'Intent Preservation',
    domain: 'action',
    x: 616,
    y: 104,
    w: 130,
    summary: 'Keeps the user’s original goal intact as tasks are decomposed, delegated, and retried.',
    why: 'Agents can drift; intent preservation keeps execution aligned with what the user actually asked for.',
    examples: ['Goal summaries', 'Constraint carry-forward', 'Task audits'],
    related: ['planning', 'state-persistence', 'human-oversight'],
  },
  {
    id: 'self-improving',
    title: 'Self-Improving Agents',
    domain: 'action',
    x: 746,
    y: 118,
    w: 132,
    summary: 'Agents that update strategies, prompts, memories, or policies based on outcomes.',
    why: 'Improvement is valuable only when paired with rollback, evaluation, and governance.',
    examples: ['Prompt refinement', 'Policy updates', 'Preference learning'],
    related: ['rollback', 'feedback-loops', 'evaluation'],
  },
  {
    id: 'coordination',
    title: 'Agent Coordination & Communication',
    domain: 'action',
    x: 410,
    y: 172,
    w: 166,
    summary: 'Manages how multiple agents exchange context, divide work, and resolve conflicts.',
    why: 'Complex workflows often require specialized agents rather than one giant prompt doing everything.',
    examples: ['Planner-worker patterns', 'Message buses', 'Role-based agents'],
    related: ['multi-agent', 'handoff', 'agent-protocol'],
  },
  {
    id: 'multi-agent',
    title: 'Multi-agent Collaboration',
    domain: 'action',
    x: 588,
    y: 202,
    w: 138,
    summary: 'Coordinates several agents or roles to solve a task together.',
    why: 'Collaboration enables critique, decomposition, parallel work, and specialization.',
    examples: ['Researcher plus writer', 'Planner plus executor', 'Reviewer agents'],
    related: ['coordination', 'evaluators', 'handoff'],
  },
  {
    id: 'state-persistence',
    title: 'State Persistence',
    domain: 'operations',
    x: 710,
    y: 248,
    w: 134,
    summary: 'Stores task state so long workflows can pause, resume, recover, and explain progress.',
    why: 'Without state, agents are brittle chat sessions; with state, they can manage durable work.',
    examples: ['Workflow checkpoints', 'Run history', 'Session context'],
    related: ['memory-systems', 'rollback', 'observability'],
  },
  {
    id: 'planning',
    title: 'Planning',
    domain: 'action',
    x: 720,
    y: 296,
    w: 128,
    summary: 'Breaks a goal into ordered steps, dependencies, and decision points.',
    why: 'Planning turns vague intent into a trackable execution path.',
    examples: ['ReAct', 'Chain-of-thought scaffolds', 'Tree-of-thought search'],
    related: ['goal-decomposition', 'task-scheduling', 'reasoning'],
  },
  {
    id: 'task-scheduling',
    title: 'Task Scheduling & Prioritization',
    domain: 'action',
    x: 772,
    y: 356,
    w: 150,
    summary: 'Chooses what to do next, when to run it, and which work deserves attention first.',
    why: 'Autonomous systems need workload control, not just capability.',
    examples: ['Queue priority', 'Retry windows', 'Dependency ordering'],
    related: ['planning', 'resource-management', 'autonomy'],
  },
  {
    id: 'goal-decomposition',
    title: 'Goal Decomposition',
    domain: 'action',
    x: 826,
    y: 414,
    w: 128,
    summary: 'Splits a high-level objective into smaller tasks with clear success criteria.',
    why: 'Good decomposition makes agent work inspectable, interruptible, and delegable.',
    examples: ['Subtasks', 'Milestones', 'Acceptance checks'],
    related: ['planning', 'tool-orchestration', 'validation'],
  },
  {
    id: 'tool-orchestration',
    title: 'Tool Orchestration',
    domain: 'action',
    x: 812,
    y: 484,
    w: 150,
    summary: 'Coordinates multiple tools, plugins, APIs, and data sources inside one workflow.',
    why: 'The value of agents comes from choosing and sequencing the right actions safely.',
    examples: ['CRM updates', 'Ticket workflows', 'Database plus email actions'],
    related: ['function-calling', 'contracts', 'risk-management'],
  },
  {
    id: 'rollback',
    title: 'Rollback Mechanisms',
    domain: 'operations',
    x: 830,
    y: 166,
    w: 118,
    summary: 'Reverses or compensates for failed or unwanted actions.',
    why: 'Autonomy is only acceptable when systems can recover from bad steps.',
    examples: ['Undo operations', 'Compensating actions', 'Version restore'],
    related: ['state-persistence', 'failure-recovery', 'risk-management'],
  },
  {
    id: 'feedback-loops',
    title: 'Feedback Loops & Evaluators',
    domain: 'operations',
    x: 900,
    y: 244,
    w: 142,
    summary: 'Measures outputs and feeds results back into routing, prompts, policies, or models.',
    why: 'Feedback loops convert one-off demos into systems that can improve and be governed.',
    examples: ['Human ratings', 'Automated graders', 'Quality monitors'],
    related: ['self-improving', 'observability', 'validation'],
  },
  {
    id: 'resource-management',
    title: 'Cost & Resource Management',
    domain: 'operations',
    x: 970,
    y: 318,
    w: 150,
    summary: 'Balances model quality, latency, token use, infrastructure cost, and operational limits.',
    why: 'Agentic workflows can become expensive quickly; resource controls make them sustainable.',
    examples: ['Model routing', 'Token budgets', 'Rate limits'],
    related: ['task-scheduling', 'observability', 'risk-management'],
  },
  {
    id: 'autonomy',
    title: 'Long-term Autonomy & Goal Chaining',
    domain: 'action',
    x: 978,
    y: 392,
    w: 164,
    summary: 'Lets agents pursue connected objectives across longer horizons.',
    why: 'Long-running autonomy is where agents become operational systems rather than chat helpers.',
    examples: ['Campaign execution', 'Research monitoring', 'Process automation'],
    related: ['memory-systems', 'task-scheduling', 'guardrails'],
  },
  {
    id: 'guardrails',
    title: 'Governance, Safety & Guardrails',
    domain: 'governance',
    x: 972,
    y: 470,
    w: 166,
    summary: 'Constrains what an agent can do, say, access, and decide.',
    why: 'Guardrails encode policy, safety, compliance, and user trust into the system boundary.',
    examples: ['Policy checks', 'Permission gates', 'Content safety'],
    related: ['risk-management', 'human-oversight', 'contracts'],
  },
  {
    id: 'context-management',
    title: 'Context Management',
    domain: 'operations',
    x: 760,
    y: 555,
    w: 154,
    summary: 'Selects and compresses the right information for the current task.',
    why: 'More context is not always better; agents need the right context at the right time.',
    examples: ['History pruning', 'Context packing', 'Relevant retrieval'],
    related: ['memory-systems', 'rag', 'state-persistence'],
  },
  {
    id: 'human-oversight',
    title: 'Human-in-the-Loop Oversight',
    domain: 'governance',
    x: 770,
    y: 620,
    w: 166,
    summary: 'Routes high-risk decisions or uncertain steps to people for review or approval.',
    why: 'The best agent workflows put humans at leverage points, not in every low-value step.',
    examples: ['Approval gates', 'Escalations', 'Expert review'],
    related: ['guardrails', 'risk-management', 'observability'],
  },
  {
    id: 'memory-systems',
    title: 'Memory Systems',
    domain: 'operations',
    x: 704,
    y: 660,
    w: 164,
    summary: 'Stores short-term and long-term knowledge about users, tasks, decisions, and outcomes.',
    why: 'Memory lets agents learn from prior context without forcing users to repeat everything.',
    examples: ['User preferences', 'Task history', 'Long-term knowledge'],
    related: ['state-persistence', 'context-management', 'personalization'],
  },
  {
    id: 'self-reflection',
    title: 'Self-reflection & Error Recovery',
    domain: 'operations',
    x: 638,
    y: 718,
    w: 166,
    summary: 'Lets agents inspect their own outputs and recover from mistakes.',
    why: 'Reflection loops help catch errors before users or downstream systems pay the cost.',
    examples: ['Critique passes', 'Retry strategies', 'Failure diagnosis'],
    related: ['failure-recovery', 'evaluators', 'rollback'],
  },
  {
    id: 'autonomous-execution',
    title: 'Autonomous Execution',
    domain: 'action',
    x: 514,
    y: 748,
    w: 126,
    summary: 'Runs planned steps without constant user prompting.',
    why: 'Execution is the point where agents become operators inside real workflows.',
    examples: ['Batch tasks', 'Background runs', 'Automated follow-up'],
    related: ['task-scheduling', 'tool-orchestration', 'guardrails'],
  },
  {
    id: 'validation',
    title: 'Output Validation',
    domain: 'governance',
    x: 482,
    y: 796,
    w: 116,
    summary: 'Checks that outputs match expected formats, facts, constraints, or business rules.',
    why: 'Validation makes generated content usable by machines and trustworthy for people.',
    examples: ['Schema checks', 'Fact checks', 'Unit tests'],
    related: ['hallucination', 'evaluators', 'guardrails'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Runtimes',
    domain: 'operations',
    x: 326,
    y: 782,
    w: 136,
    summary: 'Provides the execution scaffolding for prompts, tools, memory, state, and evaluation.',
    why: 'Frameworks turn hand-written demos into maintainable agent applications.',
    examples: ['Agent runtimes', 'Workflow engines', 'Model routers'],
    related: ['agent-protocol', 'tool-orchestration', 'observability'],
  },
  {
    id: 'dynamic-tooling',
    title: 'Dynamic Tooling',
    domain: 'action',
    x: 620,
    y: 812,
    w: 118,
    summary: 'Lets an agent discover, select, or compose tools based on the current goal.',
    why: 'Dynamic tooling makes systems adaptable, but it also raises the need for permissions and contracts.',
    examples: ['Tool discovery', 'Plugin routing', 'Runtime capability checks'],
    related: ['tool-orchestration', 'contracts', 'guardrails'],
  },
  {
    id: 'failure-recovery',
    title: 'Failure Recovery & Replanning',
    domain: 'operations',
    x: 760,
    y: 806,
    w: 166,
    summary: 'Detects broken plans and creates a new path forward.',
    why: 'Real systems fail; resilient agents need to handle that without losing the goal.',
    examples: ['Retry plans', 'Fallback tools', 'Alternate routes'],
    related: ['rollback', 'self-reflection', 'state-persistence'],
  },
  {
    id: 'contracts',
    title: 'Agent Marketplaces & Contracts',
    domain: 'operations',
    x: 872,
    y: 758,
    w: 166,
    summary: 'Defines discoverable agent capabilities, usage rules, SLAs, and interaction contracts.',
    why: 'As agents interoperate, trust and capability descriptions become infrastructure.',
    examples: ['Agent registries', 'Capability manifests', 'Service contracts'],
    related: ['agent-protocol', 'handoff', 'guardrails'],
  },
  {
    id: 'risk-management',
    title: 'Risk Management & Constraints',
    domain: 'governance',
    x: 928,
    y: 680,
    w: 162,
    summary: 'Identifies and constrains operational, legal, financial, and safety risk.',
    why: 'More autonomy creates more blast radius; constraints keep the system within acceptable boundaries.',
    examples: ['Spending caps', 'Permission scopes', 'Policy thresholds'],
    related: ['guardrails', 'human-oversight', 'rollback'],
  },
  {
    id: 'handoff',
    title: 'Delegation & Handoff Protocol',
    domain: 'operations',
    x: 962,
    y: 590,
    w: 168,
    summary: 'Transfers work between agents, tools, systems, or humans with sufficient context.',
    why: 'Handoffs keep complex work moving without losing accountability or state.',
    examples: ['Human escalation', 'Specialist agents', 'Queue transfer'],
    related: ['coordination', 'contracts', 'human-oversight'],
  },
  {
    id: 'observability',
    title: 'Observability & Tracing',
    domain: 'operations',
    x: 990,
    y: 530,
    w: 138,
    summary: 'Records what agents saw, decided, called, and produced.',
    why: 'Tracing is how teams debug agent behavior, measure quality, and earn trust.',
    examples: ['Tool-call traces', 'Latency metrics', 'Decision logs'],
    related: ['feedback-loops', 'resource-management', 'risk-management'],
  },
];

const stages = {
  ai: { label: 'AI & ML' },
  deep: { label: 'Deep Learning' },
  gen: { label: 'Gen AI' },
  agents: { label: 'AI Agents' },
  agentic: { label: 'Agentic AI' },
};

const relationshipTypes = {
  enables: { label: 'enables', color: '#2563eb' },
  depends: { label: 'depends on', color: '#64748b' },
  governs: { label: 'governs', color: '#7c3aed' },
  operates: { label: 'operates', color: '#0f766e' },
  recovers: { label: 'recovers', color: '#dc2626' },
  relates: { label: 'relates to', color: '#111827' },
};

const guidedViews = {
  all: {
    label: 'All paths',
    summary: 'The full framework is visible: explore freely, search, or filter by domain.',
    concepts: [],
  },
  builder: {
    label: 'Builder path',
    summary: 'A build-oriented route from model foundations to retrieval, tools, planning, execution, and observability.',
    concepts: ['llms', 'prompt-engineering', 'rag', 'function-calling', 'tool-orchestration', 'planning', 'task-scheduling', 'autonomous-execution', 'validation', 'observability'],
  },
  executive: {
    label: 'Executive path',
    summary: 'A leadership view of business value, autonomy, process automation, risk, cost, and governance.',
    concepts: ['reasoning', 'llms', 'personalization', 'rag', 'autonomy', 'resource-management', 'memory-systems', 'guardrails', 'risk-management', 'human-oversight'],
  },
  governance: {
    label: 'Governance path',
    summary: 'A control-focused route for safety, validation, oversight, risk, rollback, and recovery.',
    concepts: ['hallucination', 'validation', 'guardrails', 'risk-management', 'human-oversight', 'rollback', 'self-reflection', 'failure-recovery', 'observability', 'feedback-loops'],
  },
  operations: {
    label: 'Operations path',
    summary: 'A production route for state, memory, context, resource management, runtime frameworks, tracing, and handoffs.',
    concepts: ['state-persistence', 'memory-systems', 'context-management', 'resource-management', 'frameworks', 'observability', 'feedback-loops', 'handoff', 'contracts', 'failure-recovery'],
  },
};

const VENN_CIRCLES = {
  ai: { cx: 290, cy: 1040, r: 260, prev: null },
  deep: { cx: 460, cy: 1040, r: 430, prev: 'ai' },
  gen: { cx: 630, cy: 1040, r: 600, prev: 'deep' },
  agents: { cx: 800, cy: 1040, r: 770, prev: 'gen' },
  agentic: { cx: 970, cy: 1040, r: 940, prev: 'agents' },
};

const LABEL_BOUNDS = {
  ai: { x: 80, y: 997, w: 180, h: 86 },
  deep: { x: 576, y: 992, w: 220, h: 96 },
  gen: { x: 920, y: 997, w: 180, h: 86 },
  agents: { x: 1260, y: 997, w: 180, h: 86 },
  agentic: { x: 1600, y: 995, w: 220, h: 90 },
};

const PROGRESSION_BOUNDS = [
  { x: 250, y: 998, w: 336, h: 84 },
  { x: 786, y: 998, w: 144, h: 84 },
  { x: 1090, y: 998, w: 180, h: 84 },
  { x: 1430, y: 998, w: 180, h: 84 },
];

const STAGE_ORDER = ['ai', 'deep', 'gen', 'agents', 'agentic'];

const STAGE_CONCEPTS = {
  ai: ['reasoning', 'nlp', 'reinforcement-learning', 'unsupervised-learning', 'supervised-learning'],
  deep: ['cnn', 'llms', 'deep-learning', 'rnn', 'attention', 'transfer-learning', 'transformers'],
  gen: ['rag', 'multimodal', 'function-calling', 'hallucination', 'speech', 'prompt-engineering', 'personalization', 'image-generation', 'code-generation', 'video-generation'],
  agents: ['coordination', 'autonomy', 'task-scheduling', 'tool-orchestration', 'multi-agent', 'self-improving', 'intent-preservation', 'goal-decomposition', 'planning', 'autonomous-execution', 'agent-protocol', 'dynamic-tooling'],
  agentic: ['handoff', 'contracts', 'failure-recovery', 'guardrails', 'human-oversight', 'self-reflection', 'memory-systems', 'risk-management', 'context-management', 'resource-management', 'feedback-loops', 'observability', 'frameworks', 'state-persistence', 'rollback', 'validation'],
};

const CARD_PROFILE = {
  ai: { min: 156, max: 320, base: 206, height: 78, minHeight: 66, maxHeight: 150, idealX: 280, fill: .52 },
  deep: { min: 174, max: 350, base: 236, height: 90, minHeight: 72, maxHeight: 158, idealX: 560, fill: .58 },
  gen: { min: 182, max: 370, base: 252, height: 94, minHeight: 74, maxHeight: 162, idealX: 900, fill: .58 },
  agents: { min: 184, max: 386, base: 258, height: 94, minHeight: 74, maxHeight: 166, idealX: 1245, fill: .56 },
  agentic: { min: 182, max: 370, base: 248, height: 90, minHeight: 72, maxHeight: 158, idealX: 1588, fill: .54 },
};

const CARD_SCALE_STEPS = [1, .94, .88, .82, .76, .7, .62, .54, .48];

const MAP_WIDTH = 1940;
const MAP_HEIGHT = 1980;
const MIN_ZOOM = 0.1;
const MAX_ZOOM = 1.25;
const DEFAULT_ZOOM_MULTIPLIER = 1.5;
const CARD_HORIZONTAL_PADDING = 42;
const CARD_VERTICAL_PADDING = 32;
const CARD_LINE_HEIGHT = 1.04;
const CARD_FONT_SIZE = {
  ai: 21.97,
  deep: 21.97,
  gen: 21.125,
  agents: 21.125,
  agentic: 19.435,
};

const state = {
  selectedId: null,
  filter: 'all',
  activeStage: null,
  guide: 'all',
  sidebarCollapsed: false,
  sidebarWidth: 448,
  query: '',
  zoom: 1,
};

const appShell = document.querySelector('.app-shell');
const nodeLayer = document.getElementById('nodeLayer');
const frameworkMap = document.getElementById('frameworkMap');
const mapCanvas = document.getElementById('mapCanvas');
const mapViewport = document.getElementById('mapViewport');
const conceptList = document.getElementById('conceptList');
const resultCount = document.getElementById('resultCount');
const searchInput = document.getElementById('searchInput');
const detailDomain = document.getElementById('detailDomain');
const detailTitle = document.getElementById('detailTitle');
const detailSummary = document.getElementById('detailSummary');
const detailWhy = document.getElementById('detailWhy');
const detailExamples = document.getElementById('detailExamples');
const relatedList = document.getElementById('relatedList');
const relationshipLayer = document.getElementById('relationshipLayer');
const hoverPreview = document.getElementById('hoverPreview');
const hoverDomain = document.getElementById('hoverDomain');
const hoverTitle = document.getElementById('hoverTitle');
const hoverSummary = document.getElementById('hoverSummary');
const resetBtn = document.getElementById('resetBtn');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
const sidebarResizer = document.getElementById('sidebarResizer');
const filters = Array.from(document.querySelectorAll('.filter'));
const guideButtons = Array.from(document.querySelectorAll('.guide'));
const stageButtons = Array.from(document.querySelectorAll('.stage-label'));
const stageVisuals = Array.from(document.querySelectorAll('.circle-fill, .circle-ring, .stage-label'));
const stageStatus = document.getElementById('stageStatus');
const stageStatusText = document.getElementById('stageStatusText');
const stageClearBtn = document.getElementById('stageClearBtn');
const sidebarToggleIcon = sidebarToggleBtn?.querySelector('span[aria-hidden="true"]');
const sidebarToggleText = sidebarToggleBtn?.querySelector('.sidebar-toggle-text');

const byId = new Map(concepts.map((concept) => [concept.id, concept]));
const LABEL_GAP = 14;
const CARD_GAP = 8;
const BORDER_GAP = 30;
const PACK_STEP = 12;
const ARROW_GAP = 10;
const MIN_SIDEBAR_WIDTH = 340;
const MAX_SIDEBAR_WIDTH = 680;
let resizeState = null;

function rectFor(concept, x = concept.x, y = concept.y, height = concept.h) {
  return { x, y, w: concept.w, h: height || concept.h };
}

function rectsOverlap(a, b, gap = 0) {
  return a.x < b.x + b.w + gap
    && a.x + a.w + gap > b.x
    && a.y < b.y + b.h + gap
    && a.y + a.h + gap > b.y;
}

function cardCorners(rect) {
  return [
    [rect.x, rect.y],
    [rect.x + rect.w, rect.y],
    [rect.x, rect.y + rect.h],
    [rect.x + rect.w, rect.y + rect.h],
    [rect.x + rect.w / 2, rect.y + rect.h / 2],
  ];
}

function pointDistance(point, circle) {
  return Math.hypot(point[0] - circle.cx, point[1] - circle.cy);
}

function isInsideCircle(rect, circle, margin) {
  return cardCorners(rect).every((point) => pointDistance(point, circle) <= circle.r - margin);
}

function isOutsideCircle(rect, circle, margin) {
  return cardCorners(rect).every((point) => pointDistance(point, circle) >= circle.r + margin);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function laneOffset(index) {
  if (index === 0) return 0;
  const lane = Math.ceil(index / 2);
  return lane * (index % 2 === 0 ? 1 : -1);
}

function usableStageArea(stage) {
  const circle = VENN_CIRCLES[stage];
  const previousRadius = circle.prev ? VENN_CIRCLES[circle.prev].r : 0;
  const ringArea = Math.PI * ((circle.r - BORDER_GAP) ** 2 - (previousRadius + BORDER_GAP) ** 2);
  const labelArea = Object.values(LABEL_BOUNDS).reduce((sum, label) => sum + label.w * label.h, 0);
  const arrowArea = PROGRESSION_BOUNDS.reduce((sum, arrow) => sum + arrow.w * arrow.h, 0);
  return Math.max(0, ringArea - labelArea * .45 - arrowArea * .35);
}

function measureTitleWidth(text, stage) {
  const fontSize = CARD_FONT_SIZE[stage] || CARD_FONT_SIZE.gen;
  if (!measureTitleWidth.context) {
    const canvas = document.createElement('canvas');
    measureTitleWidth.context = canvas.getContext('2d');
  }
  const context = measureTitleWidth.context;
  if (!context) return text.length * fontSize * .54;
  context.font = `500 ${fontSize}px Inter, system-ui, sans-serif`;
  return context.measureText(text).width;
}

function wrappedLineCount(words, maxTextWidth, stage) {
  let lines = 1;
  let currentLine = '';

  words.forEach((word) => {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;
    if (currentLine && measureTitleWidth(nextLine, stage) > maxTextWidth) {
      lines += 1;
      currentLine = word;
      return;
    }
    currentLine = nextLine;
  });

  return lines;
}

function sizeConceptForStage(concept, stage, scale = 1) {
  const profile = CARD_PROFILE[stage];
  const stageCount = STAGE_CONCEPTS[stage].length;
  const targetArea = (usableStageArea(stage) * profile.fill) / stageCount;
  const targetWidth = Math.sqrt(targetArea * 2.4);
  const words = concept.title.split(/\s+/).filter(Boolean);
  const longestWordWidth = Math.max(...words.map((word) => measureTitleWidth(word, stage)));
  const fullTitleWidth = measureTitleWidth(concept.title, stage);
  const comfortableWidth = Math.min(
    profile.max,
    Math.max(profile.base, targetWidth, longestWordWidth + CARD_HORIZONTAL_PADDING, Math.min(fullTitleWidth + CARD_HORIZONTAL_PADDING, profile.max)),
  );
  const minTextWidth = Math.min(profile.max, Math.max(profile.min, longestWordWidth + CARD_HORIZONTAL_PADDING));
  const width = Math.max(minTextWidth, comfortableWidth * scale);
  const maxTextWidth = Math.max(longestWordWidth, width - CARD_HORIZONTAL_PADDING);
  const lines = wrappedLineCount(words, maxTextWidth, stage);
  const fontSize = CARD_FONT_SIZE[stage] || CARD_FONT_SIZE.gen;
  const minTextHeight = lines * fontSize * CARD_LINE_HEIGHT + CARD_VERTICAL_PADDING;
  const comfortableHeight = Math.max(profile.height, minTextHeight);
  const height = Math.max(minTextHeight, comfortableHeight * scale);
  concept.w = Math.round(clamp(width, profile.min, profile.max));
  concept.h = Math.round(clamp(height, profile.minHeight, profile.maxHeight));
  concept.stage = stage;
}

function isPackedPlacementValid(concept, x, y, placedRects) {
  const rect = rectFor(concept, x, y, concept.h);
  const circle = VENN_CIRCLES[concept.stage];
  if (!isInsideCircle(rect, circle, BORDER_GAP)) return false;
  if (circle.prev && !isOutsideCircle(rect, VENN_CIRCLES[circle.prev], BORDER_GAP)) return false;
  if (Object.values(LABEL_BOUNDS).some((label) => rectsOverlap(rect, label, LABEL_GAP))) return false;
  if (PROGRESSION_BOUNDS.some((arrow) => rectsOverlap(rect, arrow, ARROW_GAP))) return false;
  return !placedRects.some((placed) => rectsOverlap(rect, placed, CARD_GAP));
}

function scorePackedPlacement(concept, x, y, lane, stageIndex) {
  const rect = rectFor(concept, x, y, concept.h);
  const circle = VENN_CIRCLES[concept.stage];
  const profile = CARD_PROFILE[concept.stage];
  const centerX = rect.x + rect.w / 2;
  const centerY = rect.y + rect.h / 2;
  const distance = Math.hypot(centerX - circle.cx, centerY - circle.cy);
  const previousRadius = circle.prev ? VENN_CIRCLES[circle.prev].r : 0;
  const targetRadius = concept.stage === 'ai'
    ? circle.r * .58
    : (previousRadius + circle.r) / 2;
  const laneScale = concept.stage === 'agentic' ? 104 : 112;
  const targetY = circle.cy + lane * laneScale;
  const radialScore = Math.abs(distance - targetRadius) * 1.1;
  const horizontalScore = Math.abs(centerX - profile.idealX) * .2;
  const verticalScore = Math.abs(centerY - targetY) * .7;
  const flowScore = Math.abs(centerY - circle.cy) * (stageIndex === 0 ? .05 : .02);
  return radialScore + horizontalScore + verticalScore + flowScore;
}

function assignInitialLayout() {
  const conceptById = new Map(concepts.map((concept) => [concept.id, concept]));
  const placedRects = [];

  STAGE_ORDER.forEach((stage, stageIndex) => {
    let packedStage = null;

    for (const scale of CARD_SCALE_STEPS) {
      const stageRects = [];
      const stageConcepts = STAGE_CONCEPTS[stage]
        .map((id) => conceptById.get(id))
        .filter(Boolean);

      stageConcepts.forEach((concept) => sizeConceptForStage(concept, stage, scale));
      stageConcepts.sort((a, b) => b.w * b.h - a.w * a.h || a.title.localeCompare(b.title));

      const placements = [];
      let failed = false;

      stageConcepts.forEach((concept, index) => {
        if (failed) return;
        const lane = laneOffset(index);
        let best = null;
        const occupiedRects = [...placedRects, ...stageRects];

        for (let y = 120; y < MAP_HEIGHT - 120; y += PACK_STEP) {
          for (let x = 36; x < MAP_WIDTH - 120; x += PACK_STEP) {
            if (!isPackedPlacementValid(concept, x, y, occupiedRects)) continue;
            const score = scorePackedPlacement(concept, x, y, lane, stageIndex);
            if (!best || score < best.score) best = { x, y, score };
          }
        }

        if (!best) {
          failed = true;
          return;
        }

        placements.push({ concept, x: best.x, y: best.y });
        stageRects.push(rectFor(concept, best.x, best.y, concept.h));
      });

      if (!failed) {
        packedStage = { placements, stageRects };
        break;
      }
    }

    if (!packedStage) return;

    packedStage.placements.forEach(({ concept, x, y }) => {
      concept.x = x;
      concept.y = y;
      concept.defaultX = x;
      concept.defaultY = y;
    });
    placedRects.push(...packedStage.stageRects);
  });
}

function matches(concept) {
  const filterMatch = state.filter === 'all' || concept.domain === state.filter;
  const stageMatch = !state.activeStage || concept.stage === state.activeStage;
  const guideConcepts = guidedViews[state.guide]?.concepts || [];
  const guideMatch = state.guide === 'all' || guideConcepts.includes(concept.id);
  const query = state.query.trim().toLowerCase();
  if (!query) return filterMatch && stageMatch && guideMatch;
  const haystack = [
    concept.title,
    concept.summary,
    concept.why,
    concept.examples.join(' '),
    domains[concept.domain].label,
  ].join(' ').toLowerCase();
  return filterMatch && stageMatch && guideMatch && haystack.includes(query);
}

function createNodes() {
  nodeLayer.innerHTML = '';
  for (const concept of concepts) {
    const seed = Array.from(concept.id).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const wiggleDistance = 2.64;
    const floatX = (1 + (seed % 2) * 0.5) * wiggleDistance;
    const floatY = (1 + ((seed >> 2) % 2) * 0.5) * wiggleDistance;
    const direction = seed % 2 === 0 ? 1 : -1;
    const duration = 6.8 + (seed % 7) * 0.42;
    const delay = -1 * ((seed % 11) * 0.31);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'concept-node';
    button.dataset.id = concept.id;
    button.dataset.domain = concept.domain;
    button.dataset.stage = concept.stage;
    button.style.left = `${concept.x}px`;
    button.style.top = `${concept.y}px`;
    button.style.width = `${concept.w}px`;
    button.style.height = `${concept.h}px`;
    button.style.setProperty('--node-color', domains[concept.domain].color);
    button.dataset.floatX = String(floatX * direction);
    button.dataset.floatY = String(floatY);
    button.style.setProperty('--float-x', `${floatX * direction}px`);
    button.style.setProperty('--float-y', `${floatY}px`);
    button.style.setProperty('--float-duration', `${duration}s`);
    button.style.setProperty('--float-delay', `${delay}s`);
    button.setAttribute('role', 'listitem');
    button.setAttribute('aria-label', `${concept.title}: ${concept.summary}`);
    button.textContent = concept.title;
    button.addEventListener('pointerenter', (event) => showHoverPreview(concept, event));
    button.addEventListener('pointermove', (event) => moveHoverPreview(event));
    button.addEventListener('pointerleave', hideHoverPreview);
    button.addEventListener('focus', (event) => showHoverPreview(concept, event));
    button.addEventListener('blur', hideHoverPreview);
    button.addEventListener('click', () => selectConcept(concept.id));
    nodeLayer.appendChild(button);
  }
}

function relationshipMeta(source, target) {
  if (!source || !target) return { type: 'relates', ...relationshipTypes.relates };
  if (target.id.includes('recovery') || target.id === 'rollback' || source.id.includes('recovery')) {
    return { type: 'recovers', ...relationshipTypes.recovers };
  }
  if (target.domain === 'governance' || source.domain === 'governance') {
    return { type: 'governs', ...relationshipTypes.governs };
  }
  if (target.domain === 'operations' || source.domain === 'operations') {
    return { type: 'operates', ...relationshipTypes.operates };
  }
  const sourceStage = STAGE_ORDER.indexOf(source.stage);
  const targetStage = STAGE_ORDER.indexOf(target.stage);
  if (targetStage > sourceStage) return { type: 'enables', ...relationshipTypes.enables };
  if (targetStage < sourceStage) return { type: 'depends', ...relationshipTypes.depends };
  return { type: 'relates', ...relationshipTypes.relates };
}

function syncUrlState() {
  const url = new URL(window.location.href);
  url.searchParams.delete('concept');
  url.searchParams.delete('stage');
  url.searchParams.delete('view');
  if (state.selectedId) url.searchParams.set('concept', state.selectedId);
  else if (state.activeStage) url.searchParams.set('stage', state.activeStage);
  if (state.guide !== 'all') url.searchParams.set('view', state.guide);
  window.history.replaceState({}, '', url);
}

function hydrateStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get('view');
  const stage = params.get('stage');
  const concept = params.get('concept');
  if (view && guidedViews[view]) state.guide = view;
  if (stage && stages[stage]) state.activeStage = stage;
  if (concept && byId.has(concept)) {
    state.selectedId = concept;
    state.activeStage = null;
  }
}

function moveHoverPreview(event) {
  if (!hoverPreview || hoverPreview.hidden) return;
  const gap = 16;
  const width = hoverPreview.offsetWidth || 260;
  const height = hoverPreview.offsetHeight || 120;
  const left = clamp(event.clientX + gap, 12, window.innerWidth - width - 12);
  const top = clamp(event.clientY + gap, 12, window.innerHeight - height - 12);
  hoverPreview.style.left = `${left}px`;
  hoverPreview.style.top = `${top}px`;
}

function showHoverPreview(concept, event) {
  if (!hoverPreview) return;
  hoverDomain.textContent = `${stages[concept.stage].label} · ${domains[concept.domain].label}`;
  hoverTitle.textContent = concept.title;
  hoverSummary.textContent = concept.summary;
  hoverPreview.hidden = false;
  moveHoverPreview(event);
}

function hideHoverPreview() {
  if (hoverPreview) hoverPreview.hidden = true;
}

function selectConcept(id) {
  if (!byId.has(id)) return;
  state.selectedId = state.selectedId === id ? null : id;
  if (state.selectedId) state.activeStage = null;
  syncUrlState();
  render();
}

function deselectConcept() {
  if (!state.selectedId) return;
  state.selectedId = null;
  syncUrlState();
  render();
}

function selectStage(stage) {
  state.activeStage = state.activeStage === stage ? null : stage;
  state.selectedId = null;
  state.guide = 'all';
  state.filter = 'all';
  state.query = '';
  searchInput.value = '';
  syncUrlState();
  render();
}

function selectGuide(guide) {
  if (!guidedViews[guide]) return;
  state.guide = state.guide === guide ? 'all' : guide;
  state.activeStage = null;
  state.selectedId = null;
  state.filter = 'all';
  state.query = '';
  searchInput.value = '';
  syncUrlState();
  render();
}

function renderDetail(selected) {
  if (!selected) {
    const activeGuide = guidedViews[state.guide];
    detailDomain.textContent = state.activeStage ? stages[state.activeStage].label : (state.guide !== 'all' ? 'Guided view' : 'Start here');
    detailTitle.textContent = state.activeStage ? stages[state.activeStage].label : (state.guide !== 'all' ? activeGuide.label : 'Explore the framework');
    detailSummary.textContent = state.activeStage
      ? 'Click a card inside this circle to see details and related concepts.'
      : (state.guide !== 'all' ? activeGuide.summary : 'Click any concept to see what it does, where it sits in the stack, and what it unlocks.');
    detailWhy.textContent = state.activeStage
      ? 'The focused view keeps the active circle readable while muting the surrounding stages.'
      : (state.guide !== 'all' ? 'Guided views keep the full diagram structure but dim concepts outside the selected route.' : 'The map moves from classical AI foundations through deep learning, generative models, autonomous agents, and the management layer needed for reliable agentic systems.');
    detailExamples.innerHTML = '';
    relatedList.innerHTML = '';
    return;
  }

  detailDomain.textContent = `${stages[selected.stage].label} · ${domains[selected.domain].label}`;
  detailTitle.textContent = selected.title;
  detailSummary.textContent = selected.summary;
  detailWhy.textContent = selected.why;

  detailExamples.innerHTML = '';
  selected.examples.forEach((example) => {
    const li = document.createElement('li');
    li.textContent = example;
    detailExamples.appendChild(li);
  });

  relatedList.innerHTML = '';
  selected.related
    .map((id) => byId.get(id))
    .filter(Boolean)
    .forEach((concept) => {
      const relation = relationshipMeta(selected, concept);
      const chip = document.createElement('button');
      const label = document.createElement('span');
      const type = document.createElement('em');
      chip.type = 'button';
      chip.className = 'related-chip';
      chip.style.setProperty('--relation-color', relation.color);
      label.textContent = concept.title;
      type.textContent = relation.label;
      chip.append(label, type);
      chip.addEventListener('click', () => selectConcept(concept.id));
      relatedList.appendChild(chip);
    });
}

function renderList(visible) {
  conceptList.innerHTML = '';
  resultCount.textContent = `${visible.length} shown`;

  visible
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title))
    .forEach((concept) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'list-item';
      item.style.setProperty('--node-color', domains[concept.domain].color);
      item.textContent = concept.title;
      if (concept.id === state.selectedId) item.classList.add('is-selected');
      item.addEventListener('click', () => selectConcept(concept.id));
      conceptList.appendChild(item);
    });
}

function renderRelationships(selected) {
  if (!relationshipLayer) return;
  relationshipLayer.innerHTML = '';
  if (!selected) return;

  const selectedCenter = centerOf(selected);
  selected.related
    .map((id) => byId.get(id))
    .filter(Boolean)
    .forEach((related) => {
      const relatedCenter = centerOf(related);
      const mx = (selectedCenter.x + relatedCenter.x) / 2;
      const my = Math.min(selectedCenter.y, relatedCenter.y) - 48;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const relation = relationshipMeta(selected, related);
      path.setAttribute('class', 'relationship-link');
      path.setAttribute('data-type', relation.type);
      path.setAttribute('stroke', relation.color);
      path.setAttribute('d', `M ${selectedCenter.x} ${selectedCenter.y} Q ${mx} ${my} ${relatedCenter.x} ${relatedCenter.y}`);
      relationshipLayer.appendChild(path);
    });
}

function centerOf(concept) {
  return {
    x: concept.x + concept.w / 2,
    y: concept.y + 18,
  };
}

function renderNodes(visible, selected) {
  const visibleIds = new Set(visible.map((concept) => concept.id));
  const relatedIds = new Set(selected?.related || []);
  const guideConcepts = new Set(guidedViews[state.guide]?.concepts || []);

  document.querySelectorAll('.concept-node').forEach((node) => {
    const id = node.dataset.id;
    const concept = byId.get(id);
    const isSelected = Boolean(selected && id === selected.id);
    const isRelated = relatedIds.has(id);
    node.classList.toggle('is-selected', isSelected);
    node.classList.toggle('is-related', isRelated);
    node.classList.toggle('is-context-muted', Boolean(selected && !isSelected && !isRelated));
    node.classList.toggle('is-guide-muted', Boolean(state.guide !== 'all' && !guideConcepts.has(id)));
    node.classList.toggle('is-dimmed', !visibleIds.has(id));
    node.classList.toggle('is-stage-muted', Boolean(state.activeStage && concept?.stage !== state.activeStage));
  });
}

function renderFilters() {
  filters.forEach((filter) => {
    filter.classList.toggle('is-active', filter.dataset.filter === state.filter);
  });
  guideButtons.forEach((guide) => {
    guide.classList.toggle('is-active', guide.dataset.guide === state.guide);
  });
}

function renderStageFocus() {
  const activeStage = state.activeStage;
  frameworkMap.classList.toggle('has-stage-focus', Boolean(activeStage));
  stageVisuals.forEach((element) => {
    element.classList.toggle('is-stage-active', element.dataset.stage === activeStage);
  });
  stageButtons.forEach((button) => {
    const isActive = button.dataset.stage === activeStage;
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (!stageStatus || !stageStatusText) return;
  stageStatus.hidden = !activeStage;
  if (activeStage) {
    stageStatusText.textContent = `Viewing ${stages[activeStage].label}: ${STAGE_CONCEPTS[activeStage].length} concepts`;
  }
}

function renderSidebar() {
  appShell.style.setProperty('--sidebar-width', `${state.sidebarWidth}px`);
  appShell.classList.toggle('is-sidebar-collapsed', state.sidebarCollapsed);
  const label = state.sidebarCollapsed ? 'Extend sidebar' : 'Collapse sidebar';
  sidebarToggleBtn.setAttribute('aria-label', label);
  sidebarToggleBtn.setAttribute('title', label);
  if (sidebarToggleIcon) sidebarToggleIcon.textContent = state.sidebarCollapsed ? '‹' : '›';
  if (sidebarToggleText) sidebarToggleText.textContent = state.sidebarCollapsed ? 'Extend' : 'Collapse';
}

function render() {
  const selected = byId.get(state.selectedId) || null;
  const visible = concepts.filter(matches);
  frameworkMap.classList.toggle('has-card-focus', Boolean(selected));
  frameworkMap.classList.toggle('has-guide-focus', state.guide !== 'all');
  renderFilters();
  renderStageFocus();
  renderSidebar();
  renderNodes(visible, selected);
  renderRelationships(selected);
  renderDetail(selected);
  renderList(visible);
}

function clampZoom(value) {
  return Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, value));
}

function fitZoom() {
  const responsiveWidth = window.innerWidth <= 980
    ? Math.max(260, window.innerWidth - 58)
    : mapViewport.clientWidth;
  const widthScale = Math.min(mapViewport.clientWidth, responsiveWidth) / MAP_WIDTH;
  const heightScale = mapViewport.clientHeight / MAP_HEIGHT;
  return clampZoom(Math.min(widthScale, heightScale) * 0.98);
}

function centerMapInViewport() {
  const renderedWidth = MAP_WIDTH * state.zoom;
  const renderedHeight = MAP_HEIGHT * state.zoom;
  const extraX = Math.max(0, mapViewport.clientWidth - renderedWidth);
  const extraY = Math.max(0, mapViewport.clientHeight - renderedHeight);
  mapCanvas.style.marginLeft = `${extraX / 2}px`;
  mapCanvas.style.marginRight = `${extraX / 2}px`;
  mapCanvas.style.marginTop = `${extraY / 2}px`;
  mapCanvas.style.marginBottom = `${extraY / 2}px`;

  if (renderedWidth > mapViewport.clientWidth) {
    mapViewport.scrollLeft = (renderedWidth - mapViewport.clientWidth) / 2;
  }
  if (renderedHeight > mapViewport.clientHeight) {
    mapViewport.scrollTop = (renderedHeight - mapViewport.clientHeight) / 2;
  }
}

function applyZoom() {
  const zoom = clampZoom(state.zoom);
  state.zoom = zoom;
  frameworkMap.style.transform = `scale(${zoom})`;
  mapCanvas.style.width = `${MAP_WIDTH * zoom}px`;
  mapCanvas.style.height = `${MAP_HEIGHT * zoom}px`;
  const wiggleCompensation = 1 / Math.max(zoom, .28);
  document.querySelectorAll('.concept-node').forEach((node) => {
    const baseX = Number(node.dataset.floatX || 0);
    const baseY = Number(node.dataset.floatY || 0);
    node.style.setProperty('--float-x', `${baseX * wiggleCompensation}px`);
    node.style.setProperty('--float-y', `${baseY * wiggleCompensation}px`);
  });
  zoomOutBtn.disabled = zoom <= MIN_ZOOM + 0.01;
  zoomInBtn.disabled = zoom >= MAX_ZOOM - 0.01;
}

function setSidebarWidth(width) {
  state.sidebarWidth = Math.round(clamp(width, MIN_SIDEBAR_WIDTH, MAX_SIDEBAR_WIDTH));
  renderSidebar();
}

function fitAndCenter() {
  state.zoom = fitZoom() * DEFAULT_ZOOM_MULTIPLIER;
  applyZoom();
  centerMapInViewport();
}

function startSidebarResize(event) {
  if (state.sidebarCollapsed || event.button !== 0) return;
  event.preventDefault();
  resizeState = {
    startX: event.clientX,
    startWidth: state.sidebarWidth,
  };
  appShell.classList.add('is-resizing');
  sidebarResizer.setPointerCapture(event.pointerId);
}

function moveSidebarResize(event) {
  if (!resizeState) return;
  const delta = resizeState.startX - event.clientX;
  setSidebarWidth(resizeState.startWidth + delta);
  fitAndCenter();
}

function endSidebarResize() {
  if (!resizeState) return;
  resizeState = null;
  appShell.classList.remove('is-resizing');
}

function setZoom(nextZoom) {
  const oldZoom = state.zoom;
  const centerX = mapViewport.scrollLeft + mapViewport.clientWidth / 2;
  const centerY = mapViewport.scrollTop + mapViewport.clientHeight / 2;
  state.zoom = clampZoom(nextZoom);
  applyZoom();
  const ratio = state.zoom / oldZoom;
  mapViewport.scrollLeft = centerX * ratio - mapViewport.clientWidth / 2;
  mapViewport.scrollTop = centerY * ratio - mapViewport.clientHeight / 2;
}

function refreshView() {
  state.filter = 'all';
  state.activeStage = null;
  state.guide = 'all';
  state.query = '';
  state.selectedId = null;
  searchInput.value = '';
  fitAndCenter();
  syncUrlState();
  render();
}

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    state.filter = filter.dataset.filter;
    state.activeStage = null;
    state.guide = 'all';
    state.selectedId = null;
    syncUrlState();
    render();
  });
});

guideButtons.forEach((guide) => {
  guide.addEventListener('click', () => selectGuide(guide.dataset.guide));
});

searchInput.addEventListener('input', (event) => {
  state.query = event.target.value;
  render();
});

resetBtn.addEventListener('click', () => {
  refreshView();
});

if (stageClearBtn) {
  stageClearBtn.addEventListener('click', () => {
    state.activeStage = null;
    state.selectedId = null;
    state.filter = 'all';
    state.query = '';
    searchInput.value = '';
    syncUrlState();
    render();
  });
}

frameworkMap.addEventListener('click', (event) => {
  const label = event.target.closest('.stage-label');
  if (label && frameworkMap.contains(label)) {
    event.preventDefault();
    event.stopPropagation();
    selectStage(label.dataset.stage);
    return;
  }

  const card = event.target.closest('.concept-node');
  if (card && frameworkMap.contains(card)) return;

  deselectConcept();
});

sidebarToggleBtn.addEventListener('click', () => {
  state.sidebarCollapsed = !state.sidebarCollapsed;
  renderSidebar();
  requestAnimationFrame(() => {
    fitAndCenter();
  });
});

sidebarResizer.addEventListener('pointerdown', startSidebarResize);
sidebarResizer.addEventListener('keydown', (event) => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  const direction = event.key === 'ArrowLeft' ? 1 : -1;
  setSidebarWidth(state.sidebarWidth + direction * 24);
  fitAndCenter();
});

window.addEventListener('pointermove', moveSidebarResize);
window.addEventListener('pointerup', endSidebarResize);
window.addEventListener('pointercancel', endSidebarResize);
zoomInBtn.addEventListener('click', () => setZoom(state.zoom * 1.16));
zoomOutBtn.addEventListener('click', () => setZoom(state.zoom / 1.16));
window.addEventListener('resize', () => {
  fitAndCenter();
});

assignInitialLayout();
createNodes();
hydrateStateFromUrl();
fitAndCenter();
render();
