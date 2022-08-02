import Layout from "./components/Layout/Index";
import { VideoContextProvider } from "./context/VideoContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <VideoContextProvider>
        <Layout />
        <GlobalStyles />
      </VideoContextProvider>
    </>
  );
}

export default App;
