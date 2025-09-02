import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-8">About Me</h2>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              I'm an Associate Software Engineer at Maersk 🚢, 
              where I primarily work with Java Spring Boot , Apache Camel , and Python.

              My journey into engineering was sparked by a deep passion for AI especially its applications in medicine. 
              I'm driven by curiosity, a love for learning.
              I believe strongly in using AI for good and continually strive to contribute towards that vision.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              At Maersk, I've discovered a genuine enthusiasm for exploring new tools and technologies. 
              I'm fascinated by the architectures that underpin everything from neural networks like RNNs, LSTMs, and 
              Transformers to robust integration frameworks like Apache Camel.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              When I'm not coding, you'll find me with a paintbrush in hand, exploring color and form 
              on canvas. This artistic practice deeply influences my approach to design and user experience.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black/10 rounded-lg -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;