import React, { useState } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LuLoader } from "react-icons/lu";
import { RiLoaderFill } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import About from "./components/About";
import { Link } from "react-router-dom";


const App = () => {
  const [url, setUrl] = useState("");
  const [videoSrc, setVideoSrc] = useState(""); // Stores the video URL
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    setVideoSrc(""); // Clear previous video
    if (url === "") {
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:5000/download", {
        url: url,
        quality: "bestvideo+bestaudio/best", // Optional: Adjust quality here
      });

      if (response.data.status === "success") {
        setVideoSrc(response.data.video_url); // Set the video source URL
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="bg-black flex flex-col min-h-screen w-full">
      <header className="text-white p-4 bg-[#141414] px-40  select-none flex items-baseline justify-between">
        <div className="flex text-3xl items-center gap-2 font-bold">
          <BsDownload />
          <h1 className="text-3xl font-semibold"> GrabTube</h1>
        </div>
        <Link
          to="/about"
          className="text-lg hover:text-blue-500 transition-colors"
        >
          About
        </Link>
      </header>
      <div className=" px-48">
        <div className="w-full ">
          <div className="my-10 shadow-gray-800  px-10 py-5 pb-10 space-y-4 h-fit rounded-xl bg-[#141414]  flex flex-col items-center">
            <h1 className="text-6xl font-medium text-white">
              Youtube Video Downloader{" "}
            </h1>
            <p className="text-gray-400">download any Youtube videos</p>
            <div className="flex items-center w-full px-20">
              <input
                type="text"
                required
                placeholder="paste your link here..."
                className="border w-full h-[45px] rounded-l-md text-lg text-justify px-3"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button
                onClick={handleDownload}
                className={`bg-red-500 rounded-r-md  place-items-center text-white h-[45px]  w-[200px] p-2  hover:bg-red-600 ${
                  loading && "opacity-50 cursor-not-allowed"
                }`}
                disabled={loading}
              >
                {loading ? (
                  <RiLoaderFill className="animate-spin scale-150" />
                ) : (
                  <BiSearch className="scale-150" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          {videoSrc && (
            <div className="mt-6">
              <video
                src={videoSrc}
                controls
                className=" border rounded shadow-md h-80"
              />
              <div className="mt-4">
                <a
                  href={videoSrc}
                  download
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 inline-block"
                >
                  Download Video
                </a>
              </div>
            </div>
          )}
        </div>
        <section className="h-fit py-12 space-y-3 text-gray-400">
          <p className="">
            YouTube is the largest video-sharing platform in the world, offering
            an incredible experience for users to upload, watch, and share
            videos. However, one thing it doesn’t provide is the ability to
            download YouTube videos directly. That’s where GrabTube steps in to
            make your life easier!
          </p>
          <p className="">
            With GrabTube, you can quickly search for your favorite videos and
            download them effortlessly for free. Whether it’s full-length videos
            or YouTube Shorts, GrabTube has you covered with its powerful and
            intuitive downloader. Save content in various formats, including MP4
            and MP3, with options for high-quality downloads in SQ, HD, 1080p,
            and even 4K resolution. Whether you’re on a Mac, Android, or Windows
            device, GrabTube is designed to work seamlessly across platforms,
            letting you enjoy your favorite content anytime, anywhere.
          </p>
          <p className="">
            Why settle for streaming limitations when GrabTube makes downloading
            simple, fast, and ad-free? Experience the best way to save and share
            YouTube content today with GrabTube!
          </p>
        </section>
        <Features />
        <section className="text-gray-400 space-y-3 py-16">
          <h1 className="text-4xl w-full text-center pb-5 text-white font-semibold">
            The Best Free Online YouTube Downloader
          </h1>
          <p>
            GrabTube makes downloading YouTube videos and Shorts fast and
            simple! Just visit GrabTube.com on any device to download your
            favorite content for free in MP4, MP3, HD, or even 4K—all without
            ads. Try GrabTube today for the easiest and most reliable way to
            save YouTube videos!
          </p>
        </section>
        <section className="w-full h-fit text-white  space-y-7 py-16">
          <h1 className="text-4xl mb-3 text-center font-semibold pb-5">
            How to download YouTube videos online via GrabTube?
          </h1>
          <p>
            1. Copy the youtube link of the video and paste it into the input
            line
          </p>
          <p>2. Click "Search" and wait for the video to be ready.</p>
          <p>
            3. Select the desired download options and click "Download" or tap
            on the three dots of the video.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
