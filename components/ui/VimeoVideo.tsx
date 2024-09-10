import React from "react";
interface Data {
  videoLink: string;
}

function VimeoVideo({ videoLink }: Data) {
  return (
    <div className="video-container">
      <iframe
        src={videoLink}
        width="100%"
        className="min-h-[210px] md:h-[375px] normal:h-[435px]"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VimeoVideo;
