import React from "react";
import { motion } from "framer-motion";
import { Download, Copy, Search, MousePointer } from "lucide-react";

const HowTo = () => {
  const sectionVariants = {
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

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const steps = [
    {
      Icon: Copy,
      text: "Copy the YouTube link of the video and paste it into the input line",
    },
    {
      Icon: Search,
      text: "Click 'Search' and wait for the video to be ready",
    },
    {
      Icon: Download,
      text: "Select the desired download options and click 'Download'",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          The Best Free Online YouTube Downloader
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-300 leading-relaxed">
          GrabTube makes downloading YouTube videos and Shorts fast and simple! 
          Just visit GrabTube.com on any device to download your favorite 
          content for free in MP4, MP3, HD, or even 4K—all without ads. 
          Try GrabTube today for the easiest and most reliable way to save YouTube videos!
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="bg-neutral-900 rounded-xl p-8 md:p-12 shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          How to Download YouTube Videos Online
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stepVariants}
              transition={{ delay: index * 0.2 }}
              className="flex items-center space-x-4 bg-neutral-800 p-4 rounded-lg"
            >
              <div className="bg-blue-500/20 p-3 rounded-full">
                <step.Icon className="w-8 h-8 text-blue-500" />
              </div>
              <span className="text-neutral-300 text-base md:text-lg flex-grow">
                {step.text}
              </span>
              <span className="text-2xl font-bold text-neutral-500">
                {index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default HowTo;