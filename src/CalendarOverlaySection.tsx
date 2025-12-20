import { useInView } from "./hooks/useInView";

export default function CalendarOverlaySection() {
  const { ref, inView } = useInView({ threshold: 0.25 });

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const emptyDays = Array.from({ length: 4 }); 
  const totalDays = Array.from({ length: 31 });

  return (
    <section ref={ref} style={{ display: "flex", justifyContent: "center" }}>
      {/* ✅ ADDING THE BEATING ANIMATION */}
      <style>
        {`
          @keyframes heartBeat {
            0% { transform: rotate(-45deg) scale(1); }
            25% { transform: rotate(-45deg) scale(1.2); }
            50% { transform: rotate(-45deg) scale(1); }
            75% { transform: rotate(-45deg) scale(1.2); }
            100% { transform: rotate(-45deg) scale(1); }
          }
          .beating-heart {
            animation: heartBeat 1.5s infinite ease-in-out;
          }
        `}
      </style>

      <div
        className={inView ? "animate-invite-slide" : ""}
        style={{
          opacity: inView ? 1 : 0,
          width: "100%",
          maxWidth: "420px",
          position: "relative",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
        }}
      >
        <img src="/images/IMG_1946.JPG" alt="" style={{ width: "100%", display: "block" }} />

        <div style={{
          position: "absolute",
          top: "55%",
          right: "12%",
          fontFamily: "'Monsieur La Doulaise', cursive",
          fontSize: "32px",
          color: 'rgba(24, 104, 11, 0.78)',
          textShadow: "0 2px 4px rgba(0,0,0,0.25)",
        }}>
          Tháng 01
        </div>

        {/* CALENDAR GRID */}
        <div style={{
          position: "absolute",
          bottom: "7%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "85%",
          padding: "12px 10px",
          background: 'rgba(51, 96, 21, 0.75)',
          borderRadius: '1.2em',
          boxSizing: 'border-box'
        }}>
          {/* HEADER */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: "8px" }}>
            {daysOfWeek.map((day, i) => (
              <div key={i} style={{ textAlign: "center", fontSize: "10px", fontWeight: "700", color: "#fff" }}>
                {day}
              </div>
            ))}
          </div>

          {/* DATES GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px" }}>
            {emptyDays.map((_, i) => (
              <div key={`empty-${i}`} style={{ height: "24px" }} />
            ))}

            {totalDays.map((_, index) => {
              const day = index + 1;
              const isMarked = day === 24;

              return (
                <div key={day} style={{
                  position: "relative",
                  height: "26px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {isMarked && (
                    <div className="beating-heart" style={{
                      position: "absolute",
                      width: "18px",
                      height: "16px",
                      backgroundColor: "#C73A3A",
                      transform: "rotate(-45deg)",
                      borderRadius: "2px",
                    }}>
                      <span style={{ position: "absolute", width: "18px", height: "16px", backgroundColor: "#C73A3A", borderRadius: "50%", top: "-9px", left: "0" }} />
                      <span style={{ position: "absolute", width: "18px", height: "16px", backgroundColor: "#C73A3A", borderRadius: "50%", left: "9px", top: "0" }} />
                    </div>
                  )}
                  <span style={{
                    position: "relative",
                    zIndex: 2,
                    fontSize: "11px",
                    fontWeight: isMarked ? "bold" : "normal",
                    color: isMarked ? "#fff" : "#EDEDED",
                  }}>
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}