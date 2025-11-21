import {
    Briefcase,
    Code,
    Cpu,
    Database,
    ExternalLink,
    Github,
    Globe,
    GraduationCap,
    Linkedin,
    Mail,
    Moon,
    Server,
    Sun,
    Terminal
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Simple scroll spy
            const sections = ['home', 'about', 'projects', 'experience', 'education', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -100 && rect.top < 300;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle Dark Mode
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    // Personal Information
    const personalInfo = {
        name: "Bayon",
        title: "Full Stack Software Developer",
        bio: "I build scalable, robust, and efficient software solutions specializing in enterprise applications and data processing systems.",
        email: "bayon2007@gmail.com",
        github: "https://github.com/bayonmbayo",
        linkedin: "https://www.linkedin.com/in/bayonmbayo"
    };

    // Education
    const education = [
        {
            degree: "Bachelor of Science - Technical Computer Science",
            school: "TH Köln (Cologne University of Applied Sciences)",
            year: "2016 - 2025",
            description: "Specialized in Software Engineering, System Architecture, and Enterprise Application Development. Completed Bachelor's thesis on 'Automated Data Synchronization through APIs'.",
            icon: GraduationCap,
            link: "https://th-koeln.de"
        },
        {
            degree: "Bachelor of Science - Computer and Telecommunications Technology",
            school: "Universität des Saarlandes (Saarland University)",
            year: "2013 - 2016",
            description: "Foundational studies in computer systems, telecommunications infrastructure, and digital signal processing.",
            icon: GraduationCap,
            link: "https://www.uni-saarland.de"
        }
    ];

    // Work Experience
    const experience = [
        {
            title: "Software Developer",
            company: "Processware GmbH",
            location: "Cologne, Germany",
            year: "2020 - Present",
            description: "Working on enterprise applications for environmental protection and regulatory compliance in collaboration with the Fraunhofer Institute.",
            achievements: [
                "Developed and maintained web applications for nature conservation and monitoring of protected species",
                "Built online portal for auditor examination in collaboration with the Federal Ministry for Economic Affairs and Energy",
                "Implemented complex data migration pipelines for multiple German federal states into the MelBA application",
                "Processed Excel data with Java Spring Boot and automated data entry with Python scripts"
            ],
            icon: Briefcase,
            link: "https://processware.de"
        }
    ];

    // IT Projects
    const projects = [
        {
            title: "Bachelor Thesis: Automated Data Synchronization through APIs",
            tech: ["Java Spring Boot", "React", "PostgreSQL", "PostGIS", "Docker", "GeoTools"],
            description: "Developed a comprehensive data synchronization system for geospatial environmental data between FlistraNeo and KSP systems, implementing optimization techniques for latency minimization and fault-tolerant error handling.",
            link: null,
            color: "from-blue-500 to-purple-600"
        },
        {
            title: "WPOP - Auditor Application Platform",
            tech: ["Java Spring Boot", "React", "PostgreSQL", "Docker"],
            description: "Developed EP-WPOP module for candidates with foreign degrees applying for auditor aptitude tests in Germany. Integrated three different system components including legacy examination software and document management system.",
            link: "https://www.wpk.de/examensportal",
            color: "from-emerald-400 to-cyan-500"
        },
        {
            title: "Meta-Newsletter - Intelligent Email Filtering Platform",
            tech: ["Java Spring Boot", "PHP", "MySQL", "Google Cloud"],
            description: "Built an intelligent content aggregation platform with automated filtering based on provider, language, user profiles, and content categories. Implemented email parsing engine and interactive browser-based communication platform.",
            link: null,
            color: "from-orange-400 to-pink-500"
        },
        {
            title: "Natportal - Species Protection Management (MelBA-online)",
            tech: ["Java Spring Boot", "Python", "JSP", "JAX-RS", "PostgreSQL", "PostGIS", "Apache POI"],
            description: "Contributed to MelBA-Online portal for species protection reporting across German federal states. Developed data migration pipelines processing Excel data and automated entry into the MelBA application using Python scripts.",
            link: "https://processware.de",
            color: "from-purple-500 to-pink-600"
        },
        {
            title: "OneLike - Social Media Management App",
            tech: ["Angular", "Vite", "React", "Android", "Java Spring Boot", "PostgreSQL", "Docker", "Kubernetes"],
            description: "Comprehensive Android application combining social media news aggregation, curated updates, and social network profile search engine. Integrated 20+ platforms including Twitter, Facebook, Instagram, LinkedIn, and more.",
            link: "https://play.google.com/store/apps/details?id=com.onelike.app",
            website: "https://social.onelike.app",
            color: "from-cyan-400 to-blue-600"
        },
        {
            title: "Roos Breaker - Mobile Puzzle Game",
            tech: ["Unity", "C#", "Firebase"],
            description: "Challenging puzzle game for mobile platforms with color-matching mechanics, bomb deactivation system, progressive level design, and cloud-based backend for player data persistence and leaderboards.",
            link: "https://play.google.com/store/apps/details?id=com.onelikegaming.roosbreaker",
            color: "from-pink-500 to-red-500"
        },
        {
            title: "Windows GUI Development with WIN-API",
            tech: ["C++", "Code::Blocks", "Windows API", "GCC 8.1.0"],
            description: "Complex Windows desktop application using native Windows API demonstrating low-level GUI programming, event-driven architecture, and Windows message processing with resistance color coding calculator and interactive features.",
            link: null,
            color: "from-indigo-500 to-purple-600"
        }
    ];

    // Skills
    const skills = [
        {
            name: "Backend Development",
            items: ["Java Spring Boot", "Python", "Node.js", "C/C++/C#", "RESTful APIs"],
            icon: Server
        },
        {
            name: "Frontend Development",
            items: ["React", "Angular", "JavaScript", "TypeScript", "JSP"],
            icon: Globe
        },
        {
            name: "Database & Data",
            items: ["PostgreSQL", "MySQL", "PostGIS", "NoSQL", "Apache POI"],
            icon: Database
        },
        {
            name: "DevOps & Tools",
            items: ["Docker", "Kubernetes", "Git", "Google Cloud", "Firebase"],
            icon: Cpu
        },
        {
            name: "Architecture",
            items: ["System Design", "Microservices", "ETL Pipelines", "API Integration"],
            icon: Terminal
        }
    ];

    // Languages
    const languages = [
        { name: "German", level: "Professional" },
        { name: "English", level: "Professional" },
        { name: "French", level: "Native" },
        { name: "Italian", level: "Beginner" }
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'}`}>

            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-white/90 backdrop-blur-md shadow-sm') : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
                            <span className={`font-bold text-xl tracking-tighter ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                &lt;Bayon /&gt;
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 items-center">
                            {['About', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item.toLowerCase())}
                                    className={`text-sm font-medium transition-colors hover:text-blue-500 ${activeSection === item.toLowerCase() ? 'text-blue-500' : (darkMode ? 'text-gray-300' : 'text-gray-600')}`}
                                >
                                    {item}
                                </button>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden flex items-center gap-4">
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                        {/* Profile Photo */}
                        <div className="flex-shrink-0">
                            <div className={`relative w-64 h-64 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-500/30' : 'border-blue-200'} shadow-2xl`}>
                                {/* Replace the src with your actual photo path */}
                                <img
                                    src="/bayon.jpg"
                                    alt="Bayon - Full Stack Software Developer"
                                    className="w-full h-full object-cover"
                                />
                                {/* Placeholder gradient if no photo yet */}
                                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    <span className="text-white text-6xl font-bold">B</span>
                                </div> */}
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-center lg:text-left max-w-2xl">
                            <div className={`inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase ${darkMode ? 'bg-blue-900/30 text-blue-400 border border-blue-800' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                                Full Stack Developer
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">{personalInfo.name}</span>
                            </h1>
                            <p className={`mt-4 text-xl md:text-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {personalInfo.bio}
                            </p>

                            <div className="mt-10 flex justify-center lg:justify-start gap-4">
                                <button
                                    onClick={() => scrollTo('projects')}
                                    className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
                                >
                                    View Projects
                                </button>
                                <button
                                    onClick={() => scrollTo('contact')}
                                    className={`px-8 py-3 rounded-lg font-medium border transition-all hover:bg-opacity-10 ${darkMode ? 'border-gray-600 text-white hover:bg-white' : 'border-gray-300 text-gray-900 hover:bg-black'}`}
                                >
                                    Contact Me
                                </button>
                            </div>

                            {/* Social Links */}
                            <div className="mt-12 flex justify-center lg:justify-start space-x-6">
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transform transition-all hover:scale-110 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
                                >
                                    <Github size={28} />
                                </a>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transform transition-all hover:scale-110 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
                                >
                                    <Linkedin size={28} />
                                </a>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className={`transform transition-all hover:scale-110 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
                                >
                                    <Mail size={28} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden opacity-30 pointer-events-none`}>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="about" className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl transition-all hover:-translate-y-2 ${darkMode ? 'bg-slate-800 border border-slate-700 shadow-slate-900/50' : 'bg-white border border-gray-100 shadow-xl shadow-gray-200/50'}`}>
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${darkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                    <skill.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item, i) => (
                                        <span key={i} className={`px-3 py-1 text-sm rounded-full font-medium ${darkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Languages Section */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-center mb-8">Languages</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {languages.map((lang, idx) => (
                                <div key={idx} className={`px-6 py-3 rounded-xl ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'}`}>
                                    <span className="font-semibold">{lang.name}</span>
                                    <span className={`ml-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        ({lang.level})
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            A portfolio of enterprise applications, data systems, and innovative software solutions I've developed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl ${darkMode ? 'bg-slate-800 border-slate-700 hover:border-slate-600' : 'bg-white border-gray-100 hover:border-gray-200'}`}>
                                <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                                    <div className="absolute bottom-4 left-4 p-2 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg">
                                        <Code size={24} className={darkMode ? 'text-white' : 'text-black'} />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">{project.title}</h3>
                                        <div className="flex gap-2">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-gray-400 hover:text-blue-500 transition-colors`}
                                                    title="View Project"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                            {project.website && (
                                                <a
                                                    href={project.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-gray-400 hover:text-purple-500 transition-colors`}
                                                    title="Visit Website"
                                                >
                                                    <Globe size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <p className={`mb-6 text-sm line-clamp-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className={`text-xs px-2 py-1 rounded border ${darkMode ? 'border-slate-600 bg-slate-800/50 text-gray-300' : 'border-gray-200 bg-gray-50 text-gray-600'}`}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className={`py-20 ${darkMode ? 'bg-slate-800/30' : 'bg-gray-50'}`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    </div>

                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <div key={index} className={`relative p-8 rounded-2xl border transition-all hover:scale-[1.01] ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200 shadow-sm'}`}>
                                <div className="flex items-start mb-6">
                                    <div className={`flex-shrink-0 p-3 rounded-xl mr-6 ${darkMode ? 'bg-slate-700 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                        <exp.icon size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                            <div>
                                                <h3 className="text-2xl font-bold">{exp.title}</h3>
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-lg font-medium inline-flex items-center gap-2 hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                                                >
                                                    {exp.company}
                                                    <ExternalLink size={16} />
                                                </a>
                                                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    {exp.location}
                                                </p>
                                            </div>
                                            <span className={`text-sm font-medium px-4 py-2 rounded-full w-fit mt-2 sm:mt-0 ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                                                {exp.year}
                                            </span>
                                        </div>
                                        <p className={`mt-4 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {exp.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, idx) => (
                                                <li key={idx} className={`flex items-start text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    <span className="text-blue-500 mr-2">•</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className={`py-20 ${darkMode ? 'bg-slate-800/30' : 'bg-white'}`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                    </div>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className={`relative flex items-start p-6 rounded-2xl border transition-all hover:scale-[1.01] ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200 shadow-sm'}`}>
                                <div className={`flex-shrink-0 p-3 rounded-xl mr-6 hidden sm:block ${darkMode ? 'bg-slate-700 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                    <edu.icon size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                                        <span className={`text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap mt-2 sm:mt-0 ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                                            {edu.year}
                                        </span>
                                    </div>
                                    <a
                                        href={edu.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`font-medium mb-2 inline-flex items-center gap-2 hover:underline ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                    >
                                        {edu.school}
                                        <ExternalLink size={14} />
                                    </a>
                                    <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 relative overflow-hidden">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl font-bold mb-8">Let's Build Something Together</h2>
                    <p className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        I'm open to new opportunities and interesting projects.
                        Whether you're looking for a full-time developer or need help with a specific project,
                        let's discuss how we can work together.
                    </p>

                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg transition-transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                        <Mail size={20} />
                        Get In Touch
                    </a>

                    <div className={`mt-16 pt-8 border-t ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
                        <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                            © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.
                        </p>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
};

export default Portfolio;