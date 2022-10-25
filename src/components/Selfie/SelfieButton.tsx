import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";
import useMeasure from "react-use-measure";

import { Button, Dialog } from "src/components";

type Props = {
  onImageCaptured?: (image: File) => void;
  videoStream: MediaStream | null;
  setVideoStream: (videoStream: MediaStream | null) => void;
};

const SelfieButton = ({
  onImageCaptured,
  videoStream,
  setVideoStream,
}: Props) => {
  const [containerRef, containerBounds] = useMeasure();
  const videoRef = useRef<HTMLVideoElement>(null);

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
      })
      .catch((err) => {
        setVideoStream(null);
        console.error("Unable to start camera:", err);
      });
  };

  const closeCameraStream = () => {
    videoStream?.getTracks().forEach((track) => {
      track.stop();
    });
  };

  // Set video stream whenever it's available
  useEffect(() => {
    if (videoRef.current && videoStream) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoStream]);

  return (
    <Dialog
      className="bg-white"
      onOpenChange={(isOpen) => {
        if (isOpen) {
          openCameraStream();
        } else {
          closeCameraStream();
        }
      }}
      triggerNode={
        <Button className="!text-stone-900 !dark:text-stone-100 border-black">
          <Icon icon="carbon:camera" height="1.25em" />
          <span className="transform -translate-y-[0.05em]">Take selfies</span>
        </Button>
      }
    >
      <div ref={containerRef}>
        <h1 className="p-3 text-dark">Take a selfie</h1>

        {/* Camera not available */}
        {!videoStream && (
          <div className="flex items-center justify-center w-full p-2 text-dark">
            <Icon icon="carbon:camera" height="1.25em" />
            <p className="ml-2">Loading camera stream</p>
          </div>
        )}

        {videoStream && (
          <>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              ref={videoRef}
              width={containerBounds.width}
              height={containerBounds.height}
              autoPlay
            />
            <Button
              className="!w-full text-white bg-black"
              disabled={!videoStream}
              onClick={captureImage}
            >
              <Icon icon="carbon:camera" height="1.25em" />
              <span className="transform -translate-y-[0.05em]">Capture</span>
            </Button>
          </>
        )}
      </div>
    </Dialog>
  );
};

export { SelfieButton };
