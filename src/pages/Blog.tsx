import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Clean Code: Lessons from Painting",
    excerpt: "How my experience with visual composition translates to writing maintainable, elegant code that stands the test of time.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Development"
  },
  {
    id: 2,
    title: "Building Responsive Designs with Modern CSS",
    excerpt: "A deep dive into CSS Grid, Flexbox, and modern layout techniques for creating truly responsive web experiences.",
    date: "2024-01-08",
    readTime: "8 min read",
    category: "CSS"
  },
  {
    id: 3,
    title: "TypeScript Best Practices for Large Applications",
    excerpt: "Strategies for maintaining type safety and code quality in enterprise-level TypeScript applications.",
    date: "2024-01-01",
    readTime: "12 min read",
    category: "TypeScript"
  },
  {
    id: 4,
    title: "Color Psychology in Web Design",
    excerpt: "How understanding color theory and psychology can dramatically improve user engagement and conversion rates.",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "Design"
  }
];

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div className="min-h-screen bg-gray-500 pt-20">
      {/* Hero Section */}
      <section className="py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-light mb-6"
          >
            Technical Blog
          </motion.h1>
        </div>
      </section>

      {/* Blog Posts */}
      {/* <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm space-x-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-black font-medium text-sm group-hover:text-gray-700 transition-colors">
                      <span>Read more</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section> */}
            {/* Blog Posts */}
            <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-light text-black mb-4"
            >
              Coming Soon
            </motion.h2>
            <p className="text-lg text-gray-800">
              My latest blog posts and insights will appear here.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;