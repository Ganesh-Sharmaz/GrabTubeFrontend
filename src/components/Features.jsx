import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🔗",
      title: "No Downloads, No Hassles",
      description:
        "With GrabTube, everything operates online. Forget about cluttering your device with additional software. Download YouTube videos and Shorts fast and safely from your browser!",
    },
    {
      icon: "💸",
      title: "Absolutely Free",
      description:
        "Enjoy unlimited YouTube video and Shorts downloads without spending a dime. GrabTube is committed to providing a safe and cost-free service for all users.",
    },
    {
      icon: "⚡",
      title: "Fast Downloads",
      description:
        "We know your time is valuable. That’s why GrabTube ensures fast and efficient download speeds to get your favorite videos in no time.",
    },
    {
      icon: "🔒",
      title: "No Sign-up Required",
      description:
        "Jump straight into downloading without the hassle of registration or log-ins. Your ease of access and privacy are our top priorities.",
    },
    {
      icon: "🌍",
      title: "Cross-Platform Compatibility",
      description:
        "Whether you're on a PC, Mac, Windows, or Android, GrabTube works seamlessly across all devices. All you need is a web browser to get started.",
    },
    {
      icon: "🚫",
      title: "No Ads",
      description:
        "Unlike other downloaders, GrabTube is completely ad-free. Enjoy a smooth, distraction-free experience every time you use our platform.",
    },
  ];

  return (
    <div className="bg-black py-14 px-5">
      <h2 className="text-5xl font-bold text-center text-white mb-8">
        Why Choose GrabTube?
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
