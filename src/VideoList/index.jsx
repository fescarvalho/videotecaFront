import AddVideo from "../components/AddVideo";
import Video from "../components/Video";
import { Container, VideoListWrapper } from "./styles";

export default function VideoList() {
  return (
    <Container>
      <VideoListWrapper>
        <Video
          id={1}
          title="Title test"
          link="https://github.com/fescarvalho?tab=repositories"
          liked={false}
        />
        <AddVideo />
      </VideoListWrapper>
    </Container>
  );
}
