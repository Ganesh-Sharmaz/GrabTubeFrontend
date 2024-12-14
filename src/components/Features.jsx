import React from "react";
import { motion } from "framer-motion";
import { 
  Link, 
  Lock, 
  Download, 
  Globe, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      Icon: Link,
      title: "No Downloads, No Hassles",
      description:
        "With GrabTube, everything operates online. Forget about cluttering your device with additional software. Download YouTube videos and Shorts fast and safely from your browser!",
    },
    {
      Icon: ShieldCheck,
      title: "Absolutely Free",
      description:
        "Enjoy unlimited YouTube video and Shorts downloads without spending a dime. GrabTube is committed to providing a safe and cost-free service for all users.",
    },
    {
      Icon: Zap,
      title: "Fast Downloads",
      description:
        "We know your time is valuable. That's why GrabTube ensures fast and efficient download speeds to get your favorite videos in no time.",
    },
    {
      Icon: Lock,
      title: "No Sign-up Required",
      description:
        "Jump straight into downloading without the hassle of registration or log-ins. Your ease of access and privacy are our top priorities.",
    },
    {
      Icon: Globe,
      title: "Cross-Platform Compatibility",
      description:
        "Whether you're on a PC, Mac, Windows, or Android, GrabTube works seamlessly across all devices. All you need is a web browser to get started.",
    },
    {
      Icon: Download,
      title: "No Ads",
      description:
        "Unlike other downloaders, GrabTube is completely ad-free. Enjoy a smooth, distraction-free experience every time you use our platform.",
    },
  ];

  return (
    <div className="bg-neutral-950 py-16 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
      >
        Why Choose GrabTube?
      </motion.h2>
      
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100 
            }}
            className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
          >
            <div className="mb-4 flex justify-center">
              <feature.Icon 
                className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-neutral-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;