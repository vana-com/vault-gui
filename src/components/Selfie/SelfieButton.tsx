import { useRef, useState } from "react";
import useMeasure from "react-use-measure";

import { Dialog } from "src/components";

type Props = {
  onImageCaptured?: (image: File) => void;
};

const SelfieButton = ({ onImageCaptured }: Props) => {
  const [containerRef, containerBounds] = useMeasure();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas?.getContext("2d")?.drawImage(videoRef.current, 0, 0);
      const dataUrl = canvas.toDataURL("image/jpeg");

      const imgFile = dataURLtoBlob(dataUrl);
      onImageCaptured?.(imgFile);
    }
  };

  const dataURLtoBlob = (dataUrl: string): File => {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    // eslint-disable-next-line no-plusplus
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File(
      [u8arr as any], // cast as any
      `capture-${new Date().getTime()}.jpg`,
      {
        lastModified: new Date().getTime(),
        type: mime,
      },
    );
  };

  const openCameraStream = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: "user",
        },
        audio: false,
      })
      .then((stream) => {
        setVideoStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Unable to start camera", err);
      });
  };

  const closeCameraStream = () => {
    videoStream?.getTracks().forEach((track) => {
      track.stop();
    });
  };

  return (
    <Dialog
      onOpenChange={(isOpen) => {
        if (isOpen) {
          openCameraStream();
        } else {
          closeCameraStream();
        }
      }}
      triggerNode={
        <button className="border-2 p-2 self-center" type="button">
          <span>Take Selfie</span>
        </button>
      }
    >
      <div ref={containerRef}>
        <h1 className="p-3">Take a selfie</h1>

        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          width={containerBounds.width}
          height={containerBounds.height}
          autoPlay
        />
        <button type="button" onClick={captureImage}>
          Capture
        </button>
      </div>
    </Dialog>
  );
};

export { SelfieButton };
