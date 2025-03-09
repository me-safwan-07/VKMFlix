import React, { useCallback, useContext, useState } from "react";
import { API_KEY, TMDB_API_BASE_URL } from "../utils/config";

const context = React.createContext({
  videoId: "",
  setVideoId: () => { },
  getTrailerId: () => { },
  closeModal: () => { },
  isModalOpen: false,
  showSidebar: false,
  setShowSidebar: () => { },
  setIsModalOpen: () => { }
});

const GlobalContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => {
    if (!isModalOpen) return;
    setIsModalOpen(false);
    setVideoId("")
  }, [isModalOpen]);

  const getTrailerId = async (id) => {
    try {
      const res = await fetch(
        `${TMDB_API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setVideoId(data.results[0].key);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <context.Provider
      value={{
        getTrailerId,
        videoId,
        closeModal,
        isModalOpen,
        setVideoId,
        showSidebar,
        setShowSidebar,
        setIsModalOpen
      }}
    >
      {children}
    </context.Provider>
  );
};

export default GlobalContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(context);
};
