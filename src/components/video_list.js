import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    //la key sirve para facilitar encontrar un elemento en una lista
    return <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      key={video.etag}
      video = {video} />
  });
//cambio
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
