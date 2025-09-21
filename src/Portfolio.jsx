import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  ArrowDown,
  Send,
  ArrowRight,
  Download,
  CheckCircle,
  Briefcase,
  Calendar,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const skills = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Nestjs",
      logo: "https://static.cdnlogo.com/logos/n/57/nestjs.svg",
    },
  ];

  const projects = [
    {
      title: "Smart Language Learning App",
      description:
        "AI-powered language learning platform with dynamic lessons created by Gemini API. Features personalized learning paths and real-time progress tracking.",
      tech: ["Next.js", "Gemini API", "PostgreSQL", "TypeScript"],
      github:
        "https://github.com/Vijay-Krish-0806/Smart-Langugage-Learning-App",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
      category: "AI/ML",
    },
    {
      title: "Attendance Tracking System",
      description:
        "Comprehensive attendance management system with advanced analytics, automated reporting, and beautiful data visualizations using AgCharts.",
      tech: ["Next.js", "MongoDB", "AgCharts", "Tailwind CSS"],
      github: "https://github.com/Vijay-Krish-0806/attendance-tracking",
      live: "https://attendance-tracking-eta.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      category: "Web App",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Feature-rich chat application with WebSocket integration, group chats, typing indicators, message encryption, and responsive design.",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      github: "https://github.com/Vijay-Krish-0806/chat-app",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=400&fit=crop",
      category: "Real-time",
    },
    {
      title: "WhatsApp Chat Analyzer",
      description:
        "Interactive dashboard for WhatsApp chat analysis featuring sentiment analysis, word clouds, peak activity times, and comprehensive chat statistics.",
      tech: ["Streamlit", "Pandas", "Python", "Matplotlib"],
      github: "https://github.com/Vijay-Krish-0806/whatsapp_chat_analysis",
      live: "https://whatsappchatanalysis-neddq4owar3sfjshgjzuae.streamlit.app/",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      category: "Data Science",
    },
  ];

  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Paltech Consulting Private Ltd.",
      period: "Dec 2024 - Present",
      description:
        "Receiving comprehensive training in Full Stack Web Development with emphasis on modern web technologies. Building responsive applications while mastering real-world development workflows and industry best practices.",
      skills: [
        "Git",
        "HTML5/CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "SQL Server",
        "Node.js (Nest.js)",
      ],
      type: "current",
    },
    {
      title: "Data Science Intern",
      company: "Internshala",
      period: "May 2023 - July 2023",
      description:
        "Gained comprehensive knowledge in Data Science including Python programming, statistical analysis, and machine learning algorithms. Worked on real-world datasets and implemented ML models.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
      type: "past",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold">
              <span className="text-white">Vijay</span>
              <span className="text-blue-500">Krishna</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item ? "text-blue-400" : "text-zinc-300"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800">
            <div className="px-6 py-4 space-y-3">
              {[
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-zinc-300 hover:text-white"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="w-50 h-50 mx-auto mb-6 relative">
              <img
                className="w-full h-full rounded-full object-cover border-4 border-blue-500"
                src="Vijay.jpg"
                alt="Vijay Krishna"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-zinc-950"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Vijay Krishna</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Inampudi
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer & AI/ML Enthusiast crafting digital experiences
            that matter
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-zinc-600 hover:bg-zinc-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Mail size={16} />
              <span>Get In Touch</span>
            </button>
            <button className="border border-zinc-600 hover:bg-zinc-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          <div className="animate-bounce">
            <ArrowDown size={24} className="text-zinc-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Computer Science Graduate from RVR & JC College of Engineering
                  (2025), passionate about bridging the gap between user needs
                  and cutting-edge technology.
                </p>
                <p>
                  With expertise in Full Stack Development, I've architected and
                  deployed scalable applications using React.js, Next.js,
                  Node.js, and modern databases like MongoDB and PostgreSQL.
                </p>
                <p>
                  I thrive on solving complex problems through clean, efficient
                  code and believe in the power of continuous learning and
                  innovation.
                </p>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700">
              <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-zinc-300">🎓 CSE Graduate (2025)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-zinc-300">
                    💼 Software Engineer Trainee
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-zinc-300">🚀 Full Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-zinc-300">🤖 AI/ML Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center p-6 bg-zinc-800/30 rounded-2xl border border-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:scale-105 hover:bg-zinc-800/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 object-contain filter   transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <div className="hidden w-10 h-10 bg-zinc-600 rounded-lg  items-center justify-center text-xs font-bold text-white">
                    {skill.name.charAt(0)}
                  </div>
                </div>
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Experience
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-zinc-800/30 rounded-2xl p-8 border border-zinc-700 hover:border-zinc-600 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Briefcase size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-zinc-400">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                    {exp.type === "current" && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-zinc-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-sm border border-zinc-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              Showcasing my latest work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-zinc-800/30 rounded-2xl border border-zinc-700 overflow-hidden hover:border-zinc-600 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-sm border border-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's start a conversation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-zinc-800/30 rounded-2xl p-8 border border-zinc-700">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "inampudivijaykrishna@gmail.com",
                      href: "mailto:inampudivijaykrishna@gmail.com",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 93980 63499",
                      href: "tel:+919398063499",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Hyderabad, India",
                    },
                  ].map((contact) => (
                    <div
                      key={contact.label}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors duration-300 cursor-pointer"
                      onClick={() => contact.href && window.open(contact.href)}
                    >
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <contact.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-zinc-400 text-sm">{contact.label}</p>
                        <p className="text-white font-medium">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-zinc-700">
                  <p className="text-zinc-400 mb-4 text-center">Follow me on</p>
                  <div className="flex space-x-4 justify-center">
                    {[
                      {
                        icon: Github,
                        href: "https://github.com/Vijay-Krish-0806",
                        label: "GitHub",
                      },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/vijay-krishna-inampudi-620676259/",
                        label: "LinkedIn",
                      },
                      {
                        icon: Mail,
                        href: "mailto:inampudivijaykrishna@gmail.com",
                        label: "Email",
                      },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-zinc-700 hover:bg-zinc-600 rounded-xl flex items-center justify-center transition-colors duration-300"
                        title={social.label}
                      >
                        <social.icon size={20} className="text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-800/30 rounded-2xl p-8 border border-zinc-700">
              <h3 className="text-2xl font-bold text-white mb-8">
                Send Message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-300 text-sm">
                    Message sent successfully!
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Vijay</span>
              <span className="text-blue-500">Krishna</span>
            </div>

            <p className="text-zinc-400">
              © 2025 Vijay Krishna Inampudi. All rights reserved.
            </p>

            <div className="text-zinc-500 text-sm">
              Built with React, Tailwind CSS, and modern web technologies
            </div>

            <div className="flex justify-center space-x-6 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-zinc-400 hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-zinc-400 hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-zinc-400 hover:text-white transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-zinc-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => scrollToSection("home")}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40"
          title="Back to top"
        >
          <ArrowDown size={20} className="text-white rotate-180" />
        </button>
      </footer>
    </div>
  );
};

export default Portfolio;
