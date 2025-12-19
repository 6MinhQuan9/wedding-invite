import { useState } from "react";

export default function Envelope() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* ✅ INLINE KEYFRAMES */}
      <style>
        {`
          @keyframes floatEnvelope {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      <div
        style={{
          position: "relative",
          width: "80%",
          maxWidth: "420px",
          aspectRatio: "16 / 10",
          perspective: "2200px",
          cursor: "pointer",
          animation: "floatEnvelope 6s ease-in-out infinite",
          filter: "drop-shadow(0 40px 50px rgba(0,0,0,0.3))",
        }}
        onClick={() => setOpen(!open)}
      >
        {/* ✅ INVITATION IMAGE */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "18%",
            width: "90%",
            transform: open
              ? "translate(-50%, -90%)"
              : "translate(-50%, 10%)",
            opacity: open ? 1 : 0,
            transition:
              "transform 1.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease",
            zIndex: 25,
            pointerEvents: open ? "auto" : "none",
          }}
        >
          <img
            src="/images/IMG_1945.JPG"
            alt="Invitation"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
            }}
          />
        </div>

        {/* ✅ ENVELOPE BODY */}
        <svg viewBox="0 0 360 220" style={{ position: "absolute", inset: 0, zIndex: 10 }}>
          <defs>
            <linearGradient id="paperGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6F8F7A" />
              <stop offset="100%" stopColor="#4F6F5C" />
            </linearGradient>

            <linearGradient id="sideGreen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5A7B68" />
              <stop offset="100%" stopColor="#3F5F4E" />
            </linearGradient>

            <linearGradient id="innerGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E3ECE6" />
              <stop offset="100%" stopColor="#C7D6CD" />
            </linearGradient>
          </defs>

          {/* THICK BACK */}
          <rect y="54" width="360" height="166" rx="26" fill="#3F5F4E" />
          <rect y="60" width="360" height="160" rx="26" fill="url(#paperGreen)" />

          {/* SIDES */}
          <polygon points="0,60 180,140 0,220" fill="url(#sideGreen)" />
          <polygon points="360,60 180,140 360,220" fill="url(#sideGreen)" />

          {/* INNER */}
          <polygon points="0,220 180,140 360,220" fill="url(#innerGreen)" />
        </svg>

        {/* ✅ FLAP */}
        <svg viewBox="0 0 360 220" style={{ position: "absolute", inset: 0, zIndex: 20 }}>
          <defs>
            <linearGradient id="flapGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7F9F8A" />
              <stop offset="100%" stopColor="#4B6B58" />
            </linearGradient>
          </defs>

          <g
            style={{
              transformOrigin: "center 60px",
              transform: !open ? "rotateX(180deg)" : "rotateX(0deg)",
              transition:
                "transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
              transformBox: "fill-box",
            }}
          >
            <polygon points="0,60 180,0 360,60" fill="url(#flapGreen)" />
          </g>
        </svg>

        {/* ✅ WAX SEAL */}
        {!open && (
          <svg viewBox="0 0 360 220" style={{ position: "absolute", inset: 0, zIndex: 30 }}>
            <defs>
              <radialGradient id="waxGreen" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#A8C2B0" />
                <stop offset="100%" stopColor="#3E5F4C" />
              </radialGradient>
            </defs>
            <circle cx="180" cy="140" r="22" fill="url(#waxGreen)" />
          </svg>
        )}

        {/* ✅ SHADOW */}
        <div
          style={{
            position: "absolute",
            bottom: "-42px",
            left: "50%",
            width: "85%",
            height: "34px",
            background: "rgba(0,0,0,0.45)",
            filter: "blur(45px)",
            transform: "translateX(-50%)",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}