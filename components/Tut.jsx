import { css } from '@emotion/react';
import { Howl } from 'howler';

const buttonStyle = css`
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid gray;
  background-color: black;
  color: white;
  padding: 8px;
  margin-right: 15px;
`;

function Tut() {
  const sound = new Howl({
    src: ['../music.mp3'],
    html5: true,
    preload: true,
    loop: true,
  });

  return (
    <div>
      <button css={buttonStyle} onClick={() => sound.play()}>
        Sound on
      </button>
      <button css={buttonStyle} onClick={() => sound.pause()}>
        Sound off
      </button>
    </div>
  );
}

export default Tut;
