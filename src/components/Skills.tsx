import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Bot, Database, Globe } from 'lucide-react';

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: Skill[] = [
  {
    category: "Frontend",
    icon: <Globe size={24} />,
    skills: ["Streamlit"]
  },
  {
    category: "Backend",
    icon: <Database size={24} />,
    skills: ["Python", "PostgreSQL", "FastAPI", "Apache Camel", "SpringBoot"]
  },
  {
    category: "Tools & Technologies",
    icon: <Code size={24} />,
    skills: ["Git", "Docker", "GithubActions", "Kubernetes"]
  },
  {
    category: "AI",
    icon: <Bot size={24} />,
    skills: ["RAG", "Evals", "PromptEngineering", "ContextEngineering", "Agentic AI"]
  },
];

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-8">Skills & Expertise</h2>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-black mr-3">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold text-black">{skillGroup.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;