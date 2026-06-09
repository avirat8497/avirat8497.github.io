export const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'My Playbook', id: 'playbook' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
] as const;

export const heroStats = [
  { value: '5+', label: 'Years ML' },
  { value: '25+', label: 'Models Deployed' },
  { value: '10K+', label: 'Calls Analyzed/mo' },
] as const;

export const projects = [
  {
    title: 'Research Paper Relevance Classifier',
    description:
      'Engineered features from citation trends, publication dates, and keywords to classify research papers as outdated or relevant, achieving an 85% F1-score with Naive Bayes after model evaluation and hyperparameter tuning that boosted performance by 30%.',
    tech: ['Python', 'TensorFlow', 'NLP', 'Flask'],
    category: 'ML',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    demo: '#',
    github: '#',
  },
  {
    title: 'Employee Attrition Prediction Model System',
    description:
      'Real-time predictive models in Python to analyze employee attrition and termination, using SQL for preprocessing and feature engineering with Pandas and NumPy, achieving 75% accuracy with Random Forest to support data-driven workforce decisions.',
    tech: ['Python', 'Scikit-learn', 'Apache Kafka', 'Docker'],
    category: 'ML',
    image:
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    demo: '#',
    github: '#',
  },
] as const;

export const projectCategories = ['All', 'ML', 'LLM', 'Data'] as const;

export const experiences = [
  {
    company: 'BNY Mellon',
    position: 'Senior Data Scientist',
    period: '2023 - Present',
    description:
      'Built Python-based LLM pipelines (Gemini Flash) to analyze 10K+ calls monthly—flagging vulnerable customers and resolving 400+ cases; created a T5 Hugging Face classifier that cut response times by 40 s; optimized 20+ prompts with PromEval & Vertex AI to reduce costs 15%; and led GitLab CI/CD data-gatekeeping with metrics and alerts to curb LLM hallucination.',
  },
  {
    company: 'BNY Mellon',
    position: 'Data Scientist',
    period: '2021-2023',
    description:
      'Designed a Facebook Prophet and Robust Covariance-based anomaly detection system, cutting triage time by 2+ hrs; migrated models and 10 Oracle DBs to BigQuery with FastAPI DDL endpoints; built a 100 K-record call-transcription pipeline in MongoDB with Pandas validation; and mentored 8 interns while delivering an AI/ML keynote.',
  },
  {
    company: 'BNY Mellon',
    position: 'Data Engineering Intern',
    period: '2020',
    description:
      'Built data-cleaning pipelines and FastAPI endpoints for a 100+ application artifact-discrepancy dashboard; optimized CI/CD with GitLab, Docker & Kubernetes to cut deploy times 40%; and automated testing and documentation to ensure reliable, scalable operations.',
  },
] as const;

export type SkillCategory = 'ML' | 'LLM' | 'Backend' | 'Data' | 'MLOps';

export const skillCategories: { name: SkillCategory; color: string; glow: string }[] = [
  { name: 'ML', color: 'from-violet-500 to-purple-600', glow: 'shadow-violet-500/20' },
  { name: 'LLM', color: 'from-fuchsia-500 to-pink-600', glow: 'shadow-fuchsia-500/20' },
  { name: 'Backend', color: 'from-cyan-500 to-blue-600', glow: 'shadow-cyan-500/20' },
  { name: 'Data', color: 'from-emerald-500 to-teal-600', glow: 'shadow-emerald-500/20' },
  { name: 'MLOps', color: 'from-amber-500 to-orange-600', glow: 'shadow-amber-500/20' },
];

export const skills = [
  {
    name: 'Python / R',
    category: 'ML' as SkillCategory,
    level: 95,
    description: 'Advanced programming in Python and R for data science, automation, and analytics.',
    icon: 'code',
  },
  {
    name: 'Machine Learning',
    category: 'ML' as SkillCategory,
    level: 92,
    description: 'Building, training, and deploying ML models using TensorFlow, PyTorch, and Scikit-learn.',
    icon: 'brain',
  },
  {
    name: 'Large Language Models',
    category: 'LLM' as SkillCategory,
    level: 90,
    description: 'Fine-tuning, deploying, and evaluating LLMs like GPT, Llama, and open-source models.',
    icon: 'sparkles',
  },
  {
    name: 'Prompt Engineering',
    category: 'LLM' as SkillCategory,
    level: 88,
    description: 'Designing effective prompts and evaluation strategies to optimize LLM outputs.',
    icon: 'message',
  },
  {
    name: 'Generative AI',
    category: 'LLM' as SkillCategory,
    level: 85,
    description: 'Building chatbots, content generators, and creative tools using GenAI architectures.',
    icon: 'wand',
  },
  {
    name: 'TensorFlow / PyTorch',
    category: 'ML' as SkillCategory,
    level: 87,
    description: 'Deep learning frameworks for neural networks and AI solutions.',
    icon: 'layers',
  },
  {
    name: 'SQL / NoSQL',
    category: 'Data' as SkillCategory,
    level: 90,
    description: 'Designing and managing databases for scalable data storage and retrieval.',
    icon: 'database',
  },
  {
    name: 'MLOps & Deployment',
    category: 'MLOps' as SkillCategory,
    level: 86,
    description: 'CI/CD, Docker, cloud platforms, and deploying ML models to production.',
    icon: 'rocket',
  },
  {
    name: 'Data Engineering',
    category: 'Data' as SkillCategory,
    level: 84,
    description: 'ETL pipelines, data integration, and workflow automation for analytics and ML.',
    icon: 'pipeline',
  },
] as const;

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/avirat8497', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aviratbelekar/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:avirat.belekar84@gmail.com', icon: 'mail' },
] as const;
