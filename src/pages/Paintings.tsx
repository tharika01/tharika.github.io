import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Palette } from 'lucide-react';

interface Painting {
  id: number;
  title: string;
  year: string;
  medium: string;
  description: string;
  imageUrl: string;
}

const paintings: Painting[] = [
  {
    id: 1,
    title: "Vibrant Wisdom",
    year: "2023",
    medium: "Acrylic on Canvas",
    description: "A serene meditation on inner peace and enlightenment, capturing the essence of spiritual tranquility through careful brushwork and thoughtful composition.",
    imageUrl: "paintings/buddha.jpeg"
  },
  {
    id: 2,
    title: "Divine Slumber",
    year: "2023",
    medium: "Acrylic on Canvas",
    description: "The remover of obstacles depicted with vibrant colors and intricate details, celebrating the divine energy and wisdom of Lord Ganesha.",
    imageUrl: "paintings/ganesha painting.jpeg"
  },
  {
    id: 3,
    title: "Ganesha's Radiance",
    year: "2022",
    medium: "Acrylic on Canvas",
    description: "A second interpretation of the beloved deity, exploring different color palettes and artistic techniques while maintaining spiritual reverence.",
    imageUrl: "paintings/ganesha 2.jpeg"
  },
  {
    id: 4,
    title: "Celestial Twins",
    year: "2022",
    medium: "Acrylic on Canvas",
    description: "A cosmic dance between day and night, exploring the eternal balance of opposing forces through symbolic imagery and harmonious color relationships.",
    imageUrl: "paintings/sun and moon.jpeg"
  },
  {
    id: 5,
    title: "Dancing Leaves",
    year: "2022",
    medium: "Acrylic on Canvas",
    description: "A cosmic dance between day and night, exploring the eternal balance of opposing forces through symbolic imagery and harmonious color relationships.",
    imageUrl: "paintings/leaf.jpeg"
  },
  {
    id: 6,
    title: "Aurora Mandala",
    year: "2022",
    medium: "Acrylic on Canvas",
    description: "A cosmic dance between day and night, exploring the eternal balance of opposing forces through symbolic imagery and harmonious color relationships.",
    imageUrl: "paintings/abstract art.jpeg"
  }
];

const Paintings: React.FC = () => {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-20">
      {/* Hero Section */}
      <section className="py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-6"
          >
            <Palette className="mr-4" size={32} />
            <h1 className="text-4xl md:text-6xl font-light">
              Art Gallery
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-purple-200 leading-relaxed"
          >
            Where colors dance and emotions come alive on canvas
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section ref={ref} className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintings.map((painting, index) => (
              <motion.div
                key={painting.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPainting(painting)}
              >
                <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={painting.imageUrl}
                      alt={painting.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-purple-200 transition-colors">
                      {painting.title}
                    </h3>
                    
                    <div className="flex justify-between items-center text-purple-200 text-sm">
                      <span>{painting.year}</span>
                      <span>{painting.medium}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedPainting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPainting(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedPainting(null)}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img
                    src={selectedPainting.imageUrl}
                    alt={selectedPainting.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">  
                  <h2 className="text-3xl font-bold text-black mb-2">
                    {selectedPainting.title}
                  </h2>
                  
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <span>{selectedPainting.year}</span>
                    <span>•</span>
                    <span>{selectedPainting.medium}</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedPainting.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Paintings;