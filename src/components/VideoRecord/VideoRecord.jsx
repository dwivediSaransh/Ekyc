import React from "react";
// import "./styles.css";
import { useRef, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

export default function VideoRecord() {
  return (
    <div className="App">
      <RecordView />
    </div>
  );
}
const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} width={500} height={500} autoPlay />;
};

const RecordView = () => (
  <div>
    <ReactMediaRecorder
      video
      render={({
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
        previewStream,
      }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording(12000)}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          {mediaBlobUrl ? (
            console.log(mediaBlobUrl)
          ) : (
            <VideoPreview stream={previewStream} />
          )}
        </div>
      )}
    />
  </div>
);
