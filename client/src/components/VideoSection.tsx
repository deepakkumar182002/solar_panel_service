import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-card" data-testid="section-video">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            See Solar Energy in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn how solar power is transforming the future of energy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video rounded-lg overflow-hidden bg-black shadow-xl"
          data-testid="container-video"
        >
          { !isPlaying ? (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer group"
              onClick={() => {
                setIsPlaying(true);
                console.log("Video play triggered");
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Play className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground ml-1" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl font-semibold pointer-events-none mt-32">
                Watch Introduction
              </div>
            </div>
          ) : (
            <video className="w-full h-full object-cover" controls autoPlay muted playsInline>
              <source src="/Hero_section.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) }
        </motion.div>
      </div>
    </section>
  );
}
