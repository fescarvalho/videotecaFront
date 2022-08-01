import AddVideo from "../components/AddVideo";
import { Container, VideoListWrapper } from "./styles";

export default function VideoList() {
  return (
    <Container>
      <VideoListWrapper>
        <AddVideo />
      </VideoListWrapper>
    </Container>
  );
}
