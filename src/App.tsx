import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  User,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

import myImage from "./assets/cropped-IMG_5897_1.jpg"

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const fullText = "Data Scientist";
  
  // Add state for contact form validation
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [formTouched, setFormTouched] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({});
  
  // Animated counters for About Me section
  const [modelsCount, setModelsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [aboutAnimated, setAboutAnimated] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    let typing = true;
    let timer: ReturnType<typeof setTimeout>;
    function typeLoop() {
      if (typing) {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
          timer = setTimeout(typeLoop, 100);
        } else {
          typing = false;
          timer = setTimeout(typeLoop, 1200); // Pause before erasing
        }
      } else {
        if (i > 0) {
          setTypedText(fullText.slice(0, i - 1));
          i--;
          timer = setTimeout(typeLoop, 50);
        } else {
          typing = true;
          timer = setTimeout(typeLoop, 400); // Pause before typing again
        }
      }
    }
    typeLoop();
    return () => clearTimeout(timer);
  }, [fullText]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!aboutRef.current) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAboutAnimated(false); // Reset first to restart animation
          setTimeout(() => setAboutAnimated(true), 50); // Small delay to allow reset
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!aboutAnimated) return;
    let modelsTarget = 25;
    let yearsTarget = 5;
    let modelsInterval: ReturnType<typeof setInterval>;
    let yearsInterval: ReturnType<typeof setInterval>;
    setModelsCount(0);
    setYearsCount(0);
    modelsInterval = setInterval(() => {
      setModelsCount(prev => {
        if (prev < modelsTarget) return prev + 1;
        clearInterval(modelsInterval);
        return modelsTarget;
      });
    }, 40);
    yearsInterval = setInterval(() => {
      setYearsCount(prev => {
        if (prev < yearsTarget) return prev + 1;
        clearInterval(yearsInterval);
        return yearsTarget;
      });
    }, 200);
    return () => {
      clearInterval(modelsInterval);
      clearInterval(yearsInterval);
    };
  }, [aboutAnimated]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/AVB_Resume_DS.pdf'; // This will look for cv.pdf in the public folder
    link.download = 'Avirat_Belekar_CV.pdf'; // This will be the downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: 'Python/R', level: 95 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Data Analysis', level: 90 },
    { name: 'TensorFlow/PyTorch', level: 85 },
    { name: 'SQL/NoSQL', level: 85 },
    { name: 'Data Visualization', level: 80 }
  ];

  const projects = [
    {
      title: 'Research Paper Relevance Classifier',
      description: 'Engineered features from citation trends, publication dates, and keywords to classify research papers as outdated or relevant, achieving an 85% F1-score with Naive Bayes after model evaluation and hyperparameter tuning that boosted performance by 30%.',
      tech: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      demo: '#',
      github: '#'
    },
    {
      title: 'Employee Attrition Prediction Model System',
      description: 'Real-time Developed predictive models in Python to analyze employee attrition and termination, using SQL for preprocessing and feature engineering with Pandas and NumPy, and achieved 75% accuracy with Random Forest to support data-driven workforce decisions.',
      tech: ['Python', 'Scikit-learn', 'Apache Kafka', 'Docker'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      demo: '#',
      github: '#'
    },
  ];

  const experiences = [
    {
      company: 'BNY Mellon',
      position: 'Senior Data Scientist',
      period: '2023 - Present',
      description: 'Built Python-based LLM pipelines (Gemini Flash) to analyze 10K+ calls monthly—flagging vulnerable customers and resolving 400+ cases; created a T5 Hugging Face classifier that cut response times by 40 s; optimized 20+ prompts with PromEval & Vertex AI to reduce costs 15%; and led GitLab CI/CD data-gatekeeping with metrics and alerts to curb LLM hallucination.'
    },
    {
      company: 'BNY Mellon',
      position: 'Data Scientist',
      period: '2021-2023',
      description: 'Designed a Facebook Prophet and Robust Covariance-based anomaly detection system, cutting triage time by 2+ hrs; migrated models and 10 Oracle DBs to BigQuery with FastAPI DDL endpoints; built a 100 K-record call-transcription pipeline in MongoDB with Pandas validation; and mentored 8 interns while delivering an AI/ML keynote.'
    },
    {
      company: 'BNY Mellon',
      position: 'Data Engineering Intern',
      period: '2020',
      description: 'Built data-cleaning pipelines and FastAPI endpoints for a 100+ application artifact-discrepancy dashboard; optimized CI/CD with GitLab, Docker & Kubernetes to cut deploy times 40%; and automated testing and documentation to ensure reliable, scalable operations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-2 space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <img
              src={myImage}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-2xl object-cover object-center"
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Avirat Belekar
          </h1>
          
          <div className="text-xl sm:text-2xl text-gray-300 mb-8 h-8">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate Data Scientist who develops Machine Learning-driven solutions for customer support, 
            anomaly detection, and predictive analytics to enhance operational efficiency, optimize model 
            performance, and improve customer experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollTo('contact')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <button 
              onClick={handleDownloadCV}
              className="border border-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={aboutRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-100">
                Transforming Data into Insights
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 4 years of experience in data science and machine learning, I specialize in 
                developing intelligent solutions that drive business value. My expertise spans from 
                customer support automation to predictive analytics, helping organizations make 
                data-driven decisions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm passionate about leveraging cutting-edge ML techniques to solve complex problems 
                and optimize operational efficiency. When I'm not building models, you can find me 
                exploring new algorithms, contributing to open-source projects, or sharing knowledge 
                with the data science community.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{modelsCount}+</div>
                  <div className="text-gray-400">ML Models Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">{yearsCount}+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl p-8 backdrop-blur-lg border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="text-blue-400" size={20} />
                    <span className="text-gray-300">Data Scientist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-teal-400" size={20} />
                    <span className="text-gray-300">Computer Science Graduate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-purple-400" size={20} />
                    <span className="text-gray-300">New York City, NY</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-orange-400" size={20} />
                    <span className="text-gray-300">Available for new opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-teal-600 rounded-full"></div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 group transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl"
              >
                {/* Timeline dot with icon */}
                <div className="absolute left-4 top-6 w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full border-4 border-gray-900 shadow-lg group-hover:bg-teal-500 transition-colors duration-300">
                  {/* Use different icons for each experience, fallback to Briefcase */}
                  {index === 0 ? <Briefcase className="text-white" size={20} /> :
                   index === 1 ? <GraduationCap className="text-white" size={20} /> :
                   <User className="text-white" size={20} />}
                </div>
                <div className="ml-24 bg-gray-900/60 rounded-lg p-6 border border-gray-700 w-full group-hover:border-blue-400 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">{exp.position}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Skill Card: Python/R */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-700 flex flex-col items-center shadow-lg hover:shadow-blue-600/30 transition-shadow duration-300">
              <Code2 className="text-blue-400 mb-4" size={40} />
              <h3 className="font-semibold text-xl text-gray-100 mb-2">Python / R</h3>
              <p className="text-gray-400 text-sm mb-2 text-center">Advanced programming in Python and R for data science, automation, and analytics.</p>
            </div>

            {/* Skill Card: Machine Learning */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-700 flex flex-col items-center shadow-lg hover:shadow-blue-600/30 transition-shadow duration-300">
              <Code2 className="text-purple-400 mb-4" size={40} />
              <h3 className="font-semibold text-xl text-gray-100 mb-2">Machine Learning</h3>
              <p className="text-gray-400 text-sm mb-2 text-center">Building, training, and deploying ML models using TensorFlow, PyTorch, and Scikit-learn.</p>
            </div>

            {/* Skill Card: Large Language Models (LLMs) */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-700 flex flex-col items-center shadow-lg hover:shadow-blue-600/30 transition-shadow duration-300">
              <GraduationCap className="text-purple-400 mb-4" size={40} />
              <h3 className="font-semibold text-xl text-gray-100 mb-2">Large Language Models (LLMs)</h3>
              <p className="text-gray-400 text-sm mb-2 text-center">Experience with fine-tuning, deploying, and evaluating LLMs like GPT, Llama, and open-source models for NLP tasks.</p>
            </div>

            {/* Skill Card: Prompt Engineering */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-700 flex flex-col items-center shadow-lg hover:shadow-blue-600/30 transition-shadow duration-300">
              <User className="text-blue-400 mb-4" size={40} />
              <h3 className="font-semibold text-xl text-gray-100 mb-2">Prompt Engineering</h3>
              <p className="text-gray-400 text-sm mb-2 text-center">Designing effective prompts and evaluation strategies to optimize LLM outputs for real-world applications.</p>
            </div>

            {/* Skill Card: Generative AI Applications */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-700 flex flex-col items-center shadow-lg hover:shadow-blue-600/30 transition-shadow duration-300">
              <ExternalLink className="text-teal-400 mb-4" size={40} />
              <h3 className="font-semibold text-xl text-gray-100 mb-2">Generative AI Applications</h3>
              <p className="text-gray-400 text-sm mb-2 text-center">Building chatbots, content generators, and creative tools using GenAI and transformer-based architectures.</p>
            </div>

            {/* Skill Card: Deep Learning Frameworks */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-700 flex flex-col items-center shadow-lg hover:shadow-blue-600/30 transition-shadow duration-300">
              <GraduationCap className="text-blue-400 mb-4" size={40} />
              <h3 className="font-semibold text-xl text-gray-100 mb-2">TensorFlow / PyTorch</h3>
              <p className="text-gray-400 text-sm mb-2 text-center">Hands-on with deep learning frameworks for neural networks and AI solutions.</p>
            </div>

            {/* Skill Card: Databases */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-700 flex flex-col items-center shadow-lg hover:shadow-blue-600/30 transition-shadow duration-300">
              <Briefcase className="text-orange-400 mb-4" size={40} />
              <h3 className="font-semibold text-xl text-gray-100 mb-2">SQL / NoSQL</h3>
              <p className="text-gray-400 text-sm mb-2 text-center">Designing and managing SQL/NoSQL databases for scalable data storage and retrieval.</p>
            </div>

            {/* Skill Card: MLOps & Model Deployment */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-700 flex flex-col items-center shadow-lg hover:shadow-blue-600/30 transition-shadow duration-300">
              <Download className="text-blue-400 mb-4" size={40} />
              <h3 className="font-semibold text-xl text-gray-100 mb-2">MLOps & Model Deployment</h3>
              <p className="text-gray-400 text-sm mb-2 text-center">Experience with CI/CD, Docker, cloud platforms, and deploying ML models to production environments.</p>
            </div>

            {/* Skill Card: Data Engineering & Pipelines */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-700 flex flex-col items-center shadow-lg hover:shadow-blue-600/30 transition-shadow duration-300">
              <Code2 className="text-teal-400 mb-4" size={40} />
              <h3 className="font-semibold text-xl text-gray-100 mb-2">Data Engineering & Pipelines</h3>
              <p className="text-gray-400 text-sm mb-2 text-center">Building robust ETL pipelines, data integration, and workflow automation for analytics and ML.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-100">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about data science and machine learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-100">Let's Connect</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-gray-100">avirat.belekar84@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-gray-100">+1 (201) 830-7365</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-100">New York City</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/avirat8497"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aviratbelekar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:avirat.belekar84@gmail.com"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <form
                className="space-y-6"
                onSubmit={e => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  const name = formData.get('name') as string;
                  const email = formData.get('email') as string;
                  const message = formData.get('message') as string;
                  const errors: { name?: string; email?: string; message?: string } = {};
                  if (!name.trim()) errors.name = 'Name is required.';
                  if (!email.trim()) errors.email = 'Email is required.';
                  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Enter a valid email address.';
                  if (!message.trim()) errors.message = 'Message is required.';
                  setFormTouched({ name: true, email: true, message: true });
                  setFormErrors(errors);
                  if (Object.keys(errors).length > 0) return;
                  const mailto = `mailto:avirat.belekar84@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
                  window.location.href = mailto;
                }}
              >
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    name="name"
                    type="text"
                    className={`w-full bg-gray-800 border ${formErrors.name && formTouched.name ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-gray-100 focus:border-blue-500 focus:outline-none transition-colors duration-300`}
                    placeholder="Your name"
                    onBlur={() => setFormTouched(t => ({ ...t, name: true }))}
                  />
                  {formErrors.name && formTouched.name && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    className={`w-full bg-gray-800 border ${formErrors.email && formTouched.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-gray-100 focus:border-blue-500 focus:outline-none transition-colors duration-300`}
                    placeholder="your.email@example.com"
                    onBlur={() => setFormTouched(t => ({ ...t, email: true }))}
                  />
                  {formErrors.email && formTouched.email && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className={`w-full bg-gray-800 border ${formErrors.message && formTouched.message ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-gray-100 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none`}
                    placeholder="Tell me about your project..."
                    onBlur={() => setFormTouched(t => ({ ...t, message: true }))}
                  ></textarea>
                  {formErrors.message && formTouched.message && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;