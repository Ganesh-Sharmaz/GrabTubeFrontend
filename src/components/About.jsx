import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-16 px-5">
      <div className="container mx-auto px-20">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold text-center text-white mb-4">
            About GrabTube
          </h1>
          <p className="text-lg text-gray-400">
            GrabTube is a fast, reliable, and free tool to download YouTube
            videos and YouTube Shorts in high quality. Save content for offline
            viewing and enjoy your favorite videos on any device, anytime.
          </p>
        </header>

        {/* About GrabTube Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-4 text-center">
            What is GrabTube?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            GrabTube is your go-to solution for downloading YouTube videos and
            YouTube Shorts without the need for software. With GrabTube, you can
            download videos in various formats like **MP4**, **MP3**, and in
            high-definition quality including **HD, 1080p**, and even **4K**. It
            is free to use and offers a seamless, ad-free experience, making it
            the best choice for anyone who wants to enjoy YouTube content
            offline.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-4xl gap pb-5 font-semibold mb-4 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-blue-500">⚡</div>
              <div>
                <h3 className="text-xl font-semibold">Fast Downloads</h3>
                <p className="text-gray-400">
                  GrabTube ensures lightning-fast download speeds so you can
                  enjoy your content without delay.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-blue-500">🔒</div>
              <div>
                <h3 className="text-xl font-semibold">No Sign-up Required</h3>
                <p className="text-gray-400">
                  Start downloading right away without the need to create an
                  account. Your privacy is important to us.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-blue-500">🎥</div>
              <div>
                <h3 className="text-xl font-semibold">
                  Versatility in Formats
                </h3>
                <p className="text-gray-400">
                  Download videos in multiple formats like MP4, MP3, and more.
                  Enjoy videos in high-quality resolutions including **HD** and
                  **4K**.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-blue-500">🚫</div>
              <div>
                <h3 className="text-xl font-semibold">No Ads</h3>
                <p className="text-gray-400">
                  Skip the annoying ads. GrabTube is designed to provide a
                  smooth, ad-free experience for all users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Meet the Developer</h2>
          <p className="text-lg text-gray-400 mb-4">
            Hi, I'm <span className="font-bold text-lg hover:text-blue-500 transition ease-in-out">Ganesh Sharma</span>, a Full Stack Developer with a strong
            proficiency in both front-end and back-end technologies. I
            specialize in <span className="font-bold hover:text-blue-500 transition ease-in-out">JavaScript, TypeScript, Python, and work extensively
            with frameworks like React, Next.js, Flask, and Express</span>. On the
            back-end, I’m experienced with databases such as MongoDB and
            PostgreSQL, enabling me to build scalable and efficient
            applications. I’m always passionate about learning and staying
            up-to-date with the latest trends in web development. My goal is to
            deliver high-quality, user-focused applications using the best
            practices and innovative solutions to meet both client needs and
            business objectives.
          </p>
          <div className="space-x-6">
            <a
              href="https://www.instagram.com/ganesh_sharmaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://x.com/_The_Storywala_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://github.com/Ganesh-Sharmaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ganesh-sharmaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </section>

        {/* Contribution Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Contribute to GrabTube
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            GrabTube is an open-source project, and we're always looking for
            contributors to help improve the platform. Whether it's fixing bugs,
            adding new features, or improving the user experience, your
            contributions are highly welcome.
          </p>
          <a
            href="https://github.com/your-github/grabtube"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-xl hover:bg-blue-700 transition"
          >
            Contribute on GitHub
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-8">
          <p>© {new Date().getFullYear()} GrabTube. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default About;
