import React from 'react';

class VideoComponent extends React.Component {
  render() {
    return (
      <video
        width="100%"
        height="100%"
        preload="auto"
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <track kind="captions" />
        <source src="/spaceJam.mp4" type="video/mp4" />
      </video>
    );
  }
}
export default VideoComponent;
