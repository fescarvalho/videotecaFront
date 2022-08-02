import { AddVideoButton, AddIcon } from "./styles";
import { useContext } from "react";

import { VideoContext } from "../../context/VideoContext";

export default function AddVideo() {
  const { handleAdd } = useContext(VideoContext);

  return (
    <li>
      <AddVideoButton onClick={handleAdd}>
        <AddIcon />
      </AddVideoButton>
    </li>
  );
}
