import { Container, ButtonArea, Button } from "./styles";
import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5";

export default function Video({ id, title, link, liked }) {
  return (
    <li>
      <Container>
        <h2>{title}</h2>
        <a href={link} target="_blank">
          {link}
        </a>
        <ButtonArea>
          <Button liked={liked}>
            <IoThumbsUp />
          </Button>
          <Button>
            <IoPencil />
          </Button>
          <Button>
            <IoTrashBin />
          </Button>
        </ButtonArea>
      </Container>
    </li>
  );
}
