import React from "react";
import "./ListItem.css";

const ListItem = ({ video, onVideoSelect }) => {
  return (
    <div className="item list-item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default ListItem;
