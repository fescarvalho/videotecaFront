import AddVideo from "../AddVideo";
import Video from "../Video";
import { Container, VideoListWrapper } from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get("videos").then(({ data }) => {
      setVideos(data.videos);
    });
    console.log(videos);
  }, []);

  return (
    <Container>
      <VideoListWrapper>
        {videos?.map((video) => (
          <Video
            key={video._id}
            id={video._id}
            title={video.title}
            link={video.link}
            liked={video.liked}
          />
        ))}
        <AddVideo />
      </VideoListWrapper>
    </Container>
  );
}
