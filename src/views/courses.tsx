import React from "react";
import VideoPlayer from '../components/UI/videoPlayer';
import Bg from '../Images/profile-background.jpg'
 const VideoPage: React.FC = () => {
  return (
    < >
      {/* Title */}
      <h1 className="text-3xl md:text-xl font-bold text-gray-800 mb-2  ">
       Course Video  
      </h1>

      {/* Video Card */}
      <div className="w-full h-[60vh]   bg-white   shadow-2xl overflow-hidden border border-gray-200">
         <VideoPlayer
        videoSrc="/videos/beach.mp4"
        poster={Bg}
        autoPlay={false}
        loop={true}
        muted={false}
      />

      </div>
    </>
  );
};

export default VideoPage;
