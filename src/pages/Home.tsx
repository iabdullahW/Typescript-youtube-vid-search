import { useState } from "react";
import { fetchVideos } from "../utils/api";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import VideoCard from "../components/VideoCard";
import { Video } from "../types/video";


const Home = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const handleSearch = async (query: string) => {
    const results = await fetchVideos(query);
    setVideos(results);
  };

  return (
    <div>
      <Header />
      <InputForm onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-8">
        {videos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
