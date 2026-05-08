import React from 'react';
import videoPath from '../assets/media/video.mp4';

const VideoSection = () => {
  return (
    <section id="sec03">
      <video
        src={videoPath}
        controls
        loop
        autoPlay
        muted
      ></video>
      <div className="sec03-txt">
        <h2 className="nanum-gothic-extrabold" style={{ fontSize: '28px' }}>풀 셀프 드라이빙(감독형)</h2>
        <div className="btn-wrap">
          <button className="btn-blue">자세히보기</button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
