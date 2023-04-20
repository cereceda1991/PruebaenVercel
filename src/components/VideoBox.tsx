import styles from "../styles/VideoBox.module.css";

function getId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url?.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
}

interface VideoURL {
  videourl: string;
}

function VideoBox({ videourl }: VideoURL) {
  const videoId = getId(videourl);
  const embededVideoUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className={styles.videobox}>
      <iframe
        className={styles.video}
        src={embededVideoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBox;
