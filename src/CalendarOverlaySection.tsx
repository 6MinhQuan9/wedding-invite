import { useInView } from "./hooks/useInView";

export default function CalendarOverlaySection() {
  const { ref, inView } = useInView({ threshold: 0.25 });

  return (
    <section
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
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
        {/* BACKGROUND IMAGE */}
        <img
          src="/images/IMG_1946.JPG"
          alt=""
          style={{ width: "100%", display: "block" }}
        />

        {/* MONTH LABEL */}
        <div
          style={{
            position: "absolute",
            top: "55%",
            right: "12%",
            fontFamily: "'Monsieur La Doulaise', cursive",
            fontSize: "32px",
            color: 'rgba(24, 104, 11, 0.78)',
            textShadow: "0 2px 4px rgba(0,0,0,0.25)",
          }}
        >
          Tháng 01
        </div>

        {/* CALENDAR GRID */}
        <div
          style={{
            position: "absolute",
            bottom: "7%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "85%",
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "6px",
            fontSize: "11px",
            color: "#EDEDED",
            background: 'rgba(51, 96, 21, 0.71)',
            borderRadius: '1em'
          }}
        >
          {Array.from({ length: 31 }).map((_, index) => {
            const day = index + 1;
            const isMarked = day === 24;

            return (
              <div
                key={day}
                style={{
                  position: "relative",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isMarked && (
                  <div
                    className={inView ? "animate-heart-beat" : ""}
                    style={{
                      position: "absolute",
                      width: "18px",
                      height: "16px",
                      backgroundColor: "#C73A3A",
                      transform: "rotate(-45deg)",
                      borderRadius: "3px",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        width: "18px",
                        height: "16px",
                        backgroundColor: "#C73A3A",
                        borderRadius: "50%",
                        top: "-9px",
                        left: "0",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        width: "18px",
                        height: "16px",
                        backgroundColor: "#C73A3A",
                        borderRadius: "50%",
                        left: "9px",
                        top: "0",
                      }}
                    />
                  </div>
                )}

                <span
                  style={{
                    position: "relative",
                    zIndex: 2,
                    fontSize: "11px",
                    color: isMarked ? "#fff" : "#EDEDED",
                  }}
                >
                  {day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}