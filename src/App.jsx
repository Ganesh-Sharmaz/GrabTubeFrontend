import React, { useState } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import { RiLoaderFill } from "react-icons/ri";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Paragraph from "./components/Paragraph";
import HowTo from "./components/HowTo";
import Header from "./components/Header";

const App = () => {
  const [url, setUrl] = useState("");
  const [videoSrc, setVideoSrc] = useState(""); // Stores the video URL
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Stores any error messages
  const [isDownloading, setIsDownloading] = useState(false); // For UI feedback

  // Validate YouTube URL
  const validateYouTubeUrl = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return regex.test(url);
  };

  const handleDownload = async () => {
    setLoading(true);
    setError("");
    setVideoSrc(""); // Clear previous video

    if (!validateYouTubeUrl(url)) {
      setLoading(false);
      return setError("Please enter a valid YouTube URL!");
    }

    try {
      setIsDownloading(true); // Start the downloading feedback
      const response = await axios.post(`${import.meta.env.URL}/download`, {
        url: url,
        quality: "bestvideo+bestaudio/best", // Adjust quality here
      });

      if (response.data.status === "success") {
        setVideoSrc(response.data.video_url); // Set the video source URL
      } else {
        setError("Error: " + response.data.message);
      }
    } catch (error) {
      setError("An error occurred while fetching the video. Please try again.");
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-black flex flex-col min-h-screen w-full">
      <Header />
      <div className="px-4 md:px-20 lg:px-48">
        <div className="w-full">
          <div className="my-10 shadow-gray-800 px-6 md:px-10 py-5 pb-10 space-y-4 h-fit rounded-xl bg-[#141414] flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-medium text-white text-center">
              YouTube Video Downloader
            </h1>
            <p className="text-gray-400 text-center">
              Download any YouTube videos quickly and easily
            </p>
            <div className="flex flex-col md:flex-row items-center w-full md:px-10">
              <input
                type="text"
                aria-label="YouTube URL Input"
                placeholder="Paste your YouTube link here..."
                className="border w-full h-[45px] rounded-md md:rounded-l-md text-lg px-3"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={loading}
              />
              <button
                onClick={handleDownload}
                aria-label="Download Video"
                className={`bg-red-500 rounded-md md:rounded-r-md text-white h-[45px] w-full md:w-[200px] p-2 hover:bg-red-600 flex justify-center items-center ${
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
            {error && <p className="text-red-500 text-center">{error}</p>}
          </div>
        </div>
        {/* Display video */}
        <div className="mt-6">
          {isDownloading ? (
            <div className="text-center">
              <div className="animate-pulse text-white text-lg">
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    <RiLoaderFill className="animate-spin scale-150 text-red-500" />
                  </div>
                  <p>🎥 Welcome to the *Video Command Center*!</p>
                  <p>
                    🛠️ Our servers are hard at work converting your YouTube link
                    into a downloadable file.
                  </p>
                  <p>
                    🧠 Here’s what’s happening:
                    <ul className="text-left mt-2">
                      <li>
                        1️⃣ **Parsing your link** to ensure it’s a valid YouTube
                        video.
                      </li>
                      <li>
                        2️⃣ **Fetching video metadata** to get the highest
                        quality.
                      </li>
                      <li>
                        3️⃣ **Downloading and combining audio and video
                        streams**—a process that takes extra time for longer
                        videos.
                      </li>
                    </ul>
                  </p>
                  <p className="mt-4">
                    ⚡ Unlike other downloaders, we use powerful backend
                    algorithms to give you unmatched video quality.
                  </p>
                  <p>☕ Grab a coffee while we finish this magic for you!</p>
                </div>
              </div>
            </div>
          ) : videoSrc ? (
            <div>
              <video
                src={videoSrc}
                controls
                className="border rounded shadow-md w-full md:w-3/4 mx-auto h-80"
              />
              <div className="mt-4 text-center">
                <a
                  href={videoSrc}
                  download
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 inline-block"
                >
                  Download Video
                </a>
              </div>
            </div>
          ) : null}
        </div>
        <Paragraph />
        <Features />
        <HowTo />
      </div>
      <Footer />
    </div>
  );
};

export default App;
