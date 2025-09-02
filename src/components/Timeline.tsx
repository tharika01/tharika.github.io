import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: 'work' | 'project';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Associate Software Engineer",
    company: "A.P Moller Maersk",
    location: "Bangalore, India",
    period: "2024 - Present",
    description: `
- Developed and enhanced RESTful APIs using Spring Boot (Java).
- Built and configured Apache Camel routes, including a custom email connector.
- Architected backend APIs for a semantic indexing doc agent, enabling intelligent Q&A on product docs via UI and GitHub Discussions.
- Designed automated evaluation pipelines to monitor and improve doc agent performance.
- Completed LLM Lab with Dmitry Buykin, exploring advanced AI applications.
- Served as Teaching Assistant for the Applied AI Crash Course (Cohort 2), supporting hands-on learning in practical AI development.
- Optimized Docker images for efficient production deployment.
    `.trim(),
    type: "work"
  },
  {
    id: 2,
    title: "Intern",
    company: "A.P Moller Maersk",
    location: "Bangalore, India",
    period: "2023 - 2024",
    description: `
- Developed conversational AI prototypes using Rasa (open-source NLP framework) and LangChain.
- Contributed to setting up CI/CD pipelines with GitHub Actions.
- Added new features to existing APIs using Spring Boot (Java), supporting ongoing product requirements.
- Wrote and maintained comprehensive JUnit tests to improve application reliability and maintainability.
- Built operational dashboards in Grafana and Prometheus for real-time monitoring and visualization of key metrics.
- Implemented a broker health monitoring solution by writing Python scripts to send and consume messages across multiple ActiveMQ Artemis brokers; exported health metrics via Telegraf to Prometheus, and visualized system health on a Grafana dashboard.
    `.trim(),
    type: "work"
  },
];

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-8">Experience & Projects</h2>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-black rounded-full transform -translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                      item.type === 'work' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                    }`}>
                      {item.type === 'work' ? 'Work' : 'Project'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-800 font-medium mb-2">{item.company}</p>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {item.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {item.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;