import React, { useRef, useState, useEffect } from "react";

interface VideoPlayerProps {
  videoSrc: string;
  poster: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [skipAmount, setSkipAmount] = useState<number>(0); // To track how many seconds moved
  const [showSkip, setShowSkip] = useState<boolean>(false); // To control the visibility of the skip text

  // Function to skip time forward or backward
  const skipTime = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
      setSkipAmount(seconds); // Set the skip amount for display
      setShowSkip(true); // Show the skip text
      // Hide the text after 1 second
      setTimeout(() => {
        setShowSkip(false);
      }, 1000);
    }
  };

  // Set up event listener for keyboard input (Left/Right Arrow Keys)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        // Skip backward 10 seconds on left arrow key press
        skipTime(-10);
      } else if (event.key === "ArrowRight") {
        // Skip forward 10 seconds on right arrow key press
        skipTime(10);
      }
    };

    // Add event listener on mount
    document.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        poster={poster}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Display the skip amount */}
      {showSkip && (
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
          <div
            className={`${
              skipAmount < 0 ? "left-4" : "right-4"
            } absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full font-bold`}
          >
            {skipAmount < 0 ? `${skipAmount} sec` : `+${skipAmount} sec`}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
