"use client";

import { useEffect, useRef } from "react";

const AutoPlayVideo = ({ src }: { src: string }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        let observerRefValue = null;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current ? (videoRef.current as HTMLVideoElement).play() : null;
                    } else {
                        videoRef.current ? (videoRef.current as HTMLVideoElement).pause() : null;
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
            observerRefValue = videoRef.current;
        }

        return () => {
            if (observerRefValue) {
                observer.unobserve(observerRefValue);
            }
        };
    }, []);

    return <video ref={videoRef} src={src} loop muted disablePictureInPicture style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>;
};

export default AutoPlayVideo;
