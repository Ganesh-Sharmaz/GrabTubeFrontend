import React from "react";
import { motion } from "framer-motion";

const Paragraph = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 space-y-6 text-neutral-300">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={paragraphVariants}
        className="leading-relaxed"
      >
        YouTube is the largest video-sharing platform in the world, offering an
        incredible experience for users to upload, watch, and share videos.
        However, one thing it doesn't provide is the ability to download YouTube
        videos directly. That's where GrabTube steps in to make your life
        easier!
      </motion.p>
      
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={paragraphVariants}
        className="leading-relaxed"
      >
        With GrabTube, you can quickly search for your favorite videos and
        download them effortlessly for free. Whether it's full-length videos or
        YouTube Shorts, GrabTube has you covered with its powerful and intuitive
        downloader. Save content in various formats, including MP4 and MP3, with
        options for high-quality downloads in SQ, HD, 1080p, and even 4K
        resolution. Whether you're on a Mac, Android, or Windows device,
        GrabTube is designed to work seamlessly across platforms, letting you
        enjoy your favorite content anytime, anywhere.
      </motion.p>
      
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={paragraphVariants}
        className="leading-relaxed"
      >
        Why settle for streaming limitations when GrabTube makes downloading
        simple, fast, and ad-free? Experience the best way to save and share
        YouTube content today with GrabTube!
      </motion.p>
    </section>
  );
};

export default Paragraph;