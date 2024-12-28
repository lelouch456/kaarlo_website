import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, RefreshCcw } from 'lucide-react';

const VideoSlider = () => {
  // Sample video data - replace with your server data
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  // Simulate fetching videos from server
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        // Simulate API call

        await new Promise(resolve => setTimeout(resolve, 1500));
          const response = await fetch('your-api-endpoint');
            const data = await response.json();
            return data;
        // Sample data - replace with actual API call
        // const data = [
        //   {
        //     id: 1,
        //     url: "/api/placeholder/640/360",
        //     title: "Video 1",
        //     description: "Description for video 1"
        //   },
        //   {
        //     id: 2,
        //     url: "/api/placeholder/640/360",
        //     title: "Video 2",
        //     description: "Description for video 2"
        //   },
        //   {
        //     id: 3,
        //     url: "/api/placeholder/640/360",
        //     title: "Video 3",
        //     description: "Description for video 3"
        //   }
        // ];
        
        setVideos(data);
        setError(null);
      } catch (err) {
        setError('Failed to load videos. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    // Trigger video reload
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg">
        <div className="animate-pulse">
          <div className="aspect-video bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <div className="text-red-600 mb-4">{error}</div>
          <button
            onClick={handleRetry}
            className="flex items-center justify-center gap-2 mx-auto px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            <RefreshCcw size={20} />
            Retry Loading
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl">
        {/* Video Container */}
        <div className="relative aspect-video">
          <video
            ref={videoRef}
            src={videos[currentIndex]?.url}
            className="w-full h-full object-cover"
            onEnded={() => setIsPlaying(false)}
            onError={() => setError('Failed to load video. Please try again.')}
          />
          
          {/* Video Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePlayPause}
                  className="text-white p-2 rounded-full hover:bg-red-600/20 transition-colors"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                
                <div className="text-white font-medium">
                  {currentIndex + 1} / {videos.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600/80 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600/80 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Video Information */}
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold text-gray-800">
          {videos[currentIndex]?.title}
        </h2>
        <p className="text-gray-600 mt-2">
          {videos[currentIndex]?.description}
        </p>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6">
        <div className="grid grid-flow-col gap-3 overflow-x-auto py-2 px-1">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-32 aspect-video rounded-lg overflow-hidden transition-all
                        ${currentIndex === index 
                          ? 'ring-2 ring-red-600 scale-105' 
                          : 'hover:ring-2 hover:ring-red-400'}`}
            >
              <img
                src={video.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-black/40 ${currentIndex === index ? 'bg-opacity-0' : ''}`}></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;