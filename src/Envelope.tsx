import { useState } from "react";

export default function Envelope() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <style>
        {`
          @keyframes floatEnvelope {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      <div
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "450px",
          aspectRatio: "16 / 9",
          perspective: "1500px",
          cursor: "pointer",
          animation: "floatEnvelope 5s ease-in-out infinite",
        }}
        onClick={() => setOpen(!open)}
      >
        {/* ✅ THE CARD (SAVE THE DATE) */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "10%",
            width: "92%",
            transform: open
              ? "translate(-50%, -65%) scale(1.05)"
              : "translate(-50%, 0%) scale(0.95)",
            opacity: open ? 1 : 0,
            transition: "all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: 15,
          }}
        >
          <img
            src="/images/IMG_1945.JPG"
            alt="Save the Date"
            style={{
              width: "95%",
              borderRadius: "4px", // Sharper corners for a card look
              boxShadow: open
                ? "0 20px 40px rgba(0,0,0,0.2)"
                : "0 5px 15px rgba(0,0,0,0.1)",
              border: "4px solid white", // Frame effect
            }}
          />
        </div>

        {/* ✅ ENVELOPE SVG */}
        <svg viewBox="0 0 400 225" style={{ position: "absolute", inset: 0, zIndex: 10, filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.15))" }}>
          <defs>
            {/* Paper Texture Colors */}
            <linearGradient id="envMain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F9F7F2" />
              <stop offset="100%" stopColor="#E8E2D6" />
            </linearGradient>
            <linearGradient id="envDark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E0D9CB" />
              <stop offset="100%" stopColor="#D4C9B5" />
            </linearGradient>
          </defs>

          {/* MAIN BODY */}
          <rect width="400" height="225" rx="4" fill="url(#envMain)" />

          {/* SIDES (FOLD LINES) */}
          <polygon points="0,0 200,112 0,225" fill="#EFEDE7" stroke="#DED9CE" strokeWidth="0.5" />
          <polygon points="400,0 200,112 400,225" fill="#EFEDE7" stroke="#DED9CE" strokeWidth="0.5" />

          {/* BOTTOM POCKET */}
          <polygon points="0,225 200,112 400,225" fill="#F4F1EA" stroke="#DED9CE" strokeWidth="0.5" />
        </svg>

        {/* ✅ TOP FLAP */}
        <svg viewBox="0 0 400 225" style={{
          position: "absolute",
          inset: 0,
          zIndex: open ? 5 : 20, // Goes behind card when open
          transition: "z-index 0s step-end 0.5s"
        }}>
          <g style={{
            transformOrigin: "center 0px",
            transition: "transform 0.8s ease-in-out",
            transform: open ? "rotateX(160deg)" : "rotateX(0deg)"
          }}>
            <polygon points="0,0 200,120 400,0" fill="#E8E2D6" stroke="#DED9CE" strokeWidth="0.5" />
          </g>
        </svg>

        {/* ✅ WAX SEAL (STAYS ON THE FLAP) */}
        <div style={{
          position: "absolute",
          top: "105px",
          left: "50%",
          transform: open ? "translate(-50%, -220px) scale(0.5)" : "translate(-50%, 0) scale(1)",
          opacity: open ? 0 : 1,
          transition: "all 0.6s ease-in-out",
          zIndex: 30,
          pointerEvents: "none"
        }}>
          {/* Wax Seal Circle */}
          <div style={{
            width: "44px",
            height: "44px",
            backgroundColor: "#3E5F3E",
            borderRadius: "50%",
            border: "2px solid #2D4A2D",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.3), 0 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "10px",
            fontWeight: "bold",
            fontFamily: "serif"
          }}>
            ♥
          </div>
        </div>

        {/* ✅ FLOOR SHADOW */}
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            left: "50%",
            width: "90%",
            height: "20px",
            background: "rgba(0,0,0,0.1)",
            filter: "blur(20px)",
            transform: "translateX(-50%)",
            borderRadius: "50%",
          }}
        />
      </div>

      <img
        src="/images/flower-fall.png"
        alt=""
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          right: '6px',
          width: '16%',
          top: '10%',
          pointerEvents: 'none'
        }}
      />
      <img
        src="/images/flower-right.png"
        alt=""
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          left: '6px',
          width: '16%',
          top: '10%',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}