import VideoList from "../VideoList/index";
import Footer from "../Footer";
import Header from "../Header";
import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Header />
      <VideoList />
      <Footer />
    </Container>
  );
}
