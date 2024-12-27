import { Video } from "../types/video";

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const { title, description, thumbnails } = video.snippet;

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <a
        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-4 block"
      >
        Watch on YouTube
      </a>
    </div>
  );
};

export default VideoCard;
