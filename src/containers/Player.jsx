import React from "react";
import "../assets/styles/containers/Player.scss";

const Player = (props) => {
  const { id } = props.params.match;

  return (
    <div className='Player'>
      <video controls autoPlay>
        <source src='' type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          return
        </button>
      </div>
    </div>
  );
};

export default Player;