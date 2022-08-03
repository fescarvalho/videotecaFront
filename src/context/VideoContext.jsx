import { createContext, useState } from "react";
import FormModal from "../components/FormModal";
import api from "../../src/services/api";
import { useAxios } from "../hooks/useAxios";

export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
  const { data, mutate } = useAxios("videos");
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
  function handleEdit(videoId, videoTitle, videoLink) {
    setTitle(videoTitle);
    setLink(videoLink);
    setId(videoId);

    setOpenFormModal(true);
  }
  function handleDelete(id) {
    api.delete(`videos/${id}`);

    const updatedVideos = {
      videos: data.videos?.filter((video) => video._id !== id),
    };

    mutate(updatedVideos, false);
  }
  function handleLike(id) {
    api.patch(`videos/${id}`);

    const updatedVideos = {
      videos: data.videos?.map((video) => {
        if (video._id === id) {
          return {
            ...video,
            title: video.title,
            link: video.link,
            liked: !video.liked,
          };
        }
        return video;
      }),
    };
    mutate(updatedVideos, false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const video = {
      title,
      link,
    };

    if (id) {
      api.put(`videos/${id}`, video);

      const updatedVideos = {
        videos: data.videos?.map((video) => {
          if (video._id === id) {
            return { ...video, title, link };
          }
          return video;
        }),
      };
      mutate(updatedVideos, false);
    } else {
      api.post("videos", video);
      const updatedVideos = {
        videos: [...data.videos, video],
      };
      mutate(updatedVideos, false);
    }

    if (title) setTitle("");
    if (link) setLink("");
    setOpenFormModal(false);
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
