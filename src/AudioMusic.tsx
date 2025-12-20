import { useEffect, useRef } from "react";

export default function AudioMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        // Set volume and ensure it's not muted
        audioRef.current.muted = false;
        audioRef.current.volume = 0.5; 
        
        audioRef.current.play()
          .then(() => {
            // Clean up listeners immediately after success
            removeEvents();
          })
          .catch((error) => {
            console.log("Browser still blocking autoplay:", error);
          });
      }
    };

    const removeEvents = () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("touchstart", playAudio);
      window.removeEventListener("scroll", playAudio);
    };

    window.addEventListener("click", playAudio);
    window.addEventListener("touchstart", playAudio);
    window.addEventListener("scroll", playAudio);

    return () => removeEvents();
  }, []);

  return (
    <div style={{ display: "none" }}>
      {/* Adding 'playsInline' and 'preload' helps mobile browsers.
          The file must be at: public/audio/I-Do.mp3 
      */}
      <audio ref={audioRef} loop playsInline preload="auto">
        <source src="/audio/I-Do.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}