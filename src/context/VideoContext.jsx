import { createContext, useState } from "react";
import FormModal from "../components/FormModal";
import api from "../../src/services/api";

export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [id, setId] = useState(false);

  function handleAdd() {
    setOpenFormModal(true);
  }
  function handleClose() {
    if (title) setTitle("");
    if (link) setLink("");
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

    if (id) {
      api.put(`videos/${id}`, video);
    } else {
      api.post("videos", video);
    }

    if (title) setTitle("");
    if (link) setLink("");
    setOpenFormModal(false);
  }
  function handleEdit(videoId, videoTitle, videoLink) {
    setTitle(videoTitle);
    setLink(videoLink);
    setId(videoId);

    setOpenFormModal(true);
  }
  function handleDelete(id) {
    api.delete(`videos/${id}`);
  }
  function handleLike(id) {
    api.patch(`videos/${id}`);
  }
  return (
    <VideoContext.Provider
      value={{
        handleAdd,
        handleClose,
        handleSubmit,
        handleEdit,
        handleDelete,
        handleLike,
        titleHandler,
        linkHandler,
        title,
        setTitle,
        link,
        setLink,
        id,
        setId,
      }}
    >
      {children}
      {openFormModal && <FormModal />}
    </VideoContext.Provider>
  );
}
