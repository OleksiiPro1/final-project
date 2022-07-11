import React from 'react';

class VideoComponent extends React.Component {
  render() {
    return (
      <video
        width="1152px"
        height="540px"
        preload="auto"
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <track kind="captions" />
        <source src="/cart.mp4" type="video/mp4" />
      </video>
    );
  }
}
export default VideoComponent;
