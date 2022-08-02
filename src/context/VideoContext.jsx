import { createContext, useState } from "react";
import FormModal from "../components/FormModal";
import api from "../../src/services/api";

export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  function handleAdd() {
    setOpenFormModal(true);
  }
  function handleClose() {
    setOpenFormModal(false);
  }
  function titleHandler(e) {
    setTitle(e.target.value);
  }
  function linkHandler(e) {
    setLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const video = {
      title,
      link,
    };
    api.post("videos", video);

    setOpenFormModal(false);
  }

  return (
    <VideoContext.Provider
      value={{
        handleAdd,
        handleClose,
        title,
        setTitle,
        link,
        setLink,
        titleHandler,
        linkHandler,
        handleSubmit,
      }}
    >
      {children}
      {openFormModal && <FormModal />}
    </VideoContext.Provider>
  );
}
