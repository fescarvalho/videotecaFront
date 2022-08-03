import { useContext } from "react";
import { Container, ButtonArea, Button } from "./styles";
import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5";
import { VideoContext } from "../../context/VideoContext";

export default function Video({ id, title, link, liked }) {
  const { handleEdit, handleLike, handleDelete } = useContext(VideoContext);

  return (
    <li>
      <Container>
        <h2>{title}</h2>
        <a href={link} target="_blank">
          {link}
        </a>
        <ButtonArea>
          <Button liked={liked} onClick={() => handleLike(id)}>
            <IoThumbsUp />
          </Button>
          <Button onClick={() => handleEdit(id, title, link)}>
            <IoPencil />
          </Button>
          <Button onClick={() => handleDelete(id)}>
            <IoTrashBin />
          </Button>
        </ButtonArea>
      </Container>
    </li>
  );
}
