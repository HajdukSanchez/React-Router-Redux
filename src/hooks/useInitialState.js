import { useEffect, useState } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  // The second parameter is for not create and infinity loop listened changes
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.log(error));
  }, []);
  return videos;
};

export default useInitialState;
