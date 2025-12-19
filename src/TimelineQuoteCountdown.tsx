import { useEffect, useState } from "react";
import { useInView } from "./hooks/useInView";

export default function TimelineQuoteCountdown() {
    const { ref, inView } = useInView({ threshold: 0.25 });

    // Countdown target: 24/01 (year can be adjusted)
    const targetDate = new Date("2026-01-24T00:00:00");

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const diff = targetDate.getTime() - now;

            if (diff <= 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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
                    borderRadius: "18px",
                }}
            >
                {/* TIMELINE */}
                <h3
                    style={{
                        fontSize: "32px",
                        color: "#6E7F5D",
                        textAlign: "center",
                        marginBottom: "20px",
                    }}
                    className="funnel-display"
                >
                    Timeline
                </h3>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "8px",
                        textAlign: "center",
                        marginBottom: "36px",
                    }}
                >
                    {/* STEP 1 */}
                    <div>
                        <svg width="48" height="48" viewBox="0 0 64 64">
                            <rect x="8" y="18" width="48" height="30" rx="4" fill="none" stroke="#3E5F3E" strokeWidth="2" />
                            <circle cx="24" cy="32" r="6" stroke="#3E5F3E" strokeWidth="2" fill="none" />
                        </svg>
                        <p style={{ fontSize: "13px", color: "#3E5F3E" }}>16:00</p>
                        <p style={{ fontSize: "12px", color: "#777" }}>Checkin</p>
                    </div>

                    {/* STEP 2 */}
                    <div>
                        <svg width="48" height="48" viewBox="0 0 64 64">
                            <path d="M20 40 L32 24 L44 40" stroke="#3E5F3E" strokeWidth="2" fill="none" />
                            <path d="M24 42 L32 30 L40 42" stroke="#3E5F3E" strokeWidth="2" fill="none" />
                        </svg>
                        <p style={{ fontSize: "13px", color: "#3E5F3E" }}>16:30</p>
                        <p style={{ fontSize: "12px", color: "#777" }}>Khai Tiệc</p>
                    </div>

                    {/* STEP 3 */}
                    <div>
                        <svg width="48" height="48" viewBox="0 0 64 64">
                            <circle cx="28" cy="36" r="10" stroke="#3E5F3E" strokeWidth="2" fill="none" />
                            <circle cx="36" cy="32" r="10" stroke="#3E5F3E" strokeWidth="2" fill="none" />
                        </svg>
                        <p style={{ fontSize: "13px", color: "#3E5F3E" }}>17:00</p>
                        <p style={{ fontSize: "12px", color: "#777" }}>Lễ Thành Hôn</p>
                    </div>
                </div>

                {/* QUOTE SECTION */}
                <div
                    style={{
                        display: "flex",
                        backgroundColor: "#556B3E",
                        borderRadius: "12px",
                        overflow: "hidden",
                        marginBottom: "40px",
                        alignItems: "stretch",
                    }}
                >
                    {/* SQUARE IMAGE */}
                    <div
                        style={{
                            width: "42%",
                            aspectRatio: "1 / 1",
                            overflow: "hidden",
                            flexShrink: 0,
                        }}
                    >
                        <img
                            src="/images/IMG_1991.JPG"
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* QUOTE TEXT */}
                    <div
                        style={{
                            padding: "18px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "'Monsieur La Doulaise', cursive",
                                fontSize: "18px",
                                color: "#F5F3EC",
                                lineHeight: "1.4",
                            }}
                        >
                            Being with you turns ordinary moments into timeless memories.
                        </p>
                    </div>
                </div>

                {/* COUNTDOWN */}
                <h3
                    style={{
                        fontSize: "30px",
                        color: "#6E7F5D",
                        textAlign: "center",
                        marginBottom: "18px",
                    }}
                    className="funnel-display"
                >
                    Countdown
                </h3>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "10px",
                        textAlign: "center",
                    }}
                >
                    {[
                        { label: "ngày", value: timeLeft.days },
                        { label: "giờ", value: timeLeft.hours },
                        { label: "phút", value: timeLeft.minutes },
                        { label: "giây", value: timeLeft.seconds },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                backgroundColor: "#556B3E",
                                borderRadius: "8px",
                                padding: "10px 4px",
                                color: "#F5F3EC",
                            }}
                        >
                            <div style={{ fontSize: "18px", fontWeight: 600 }}>{item.value}</div>
                            <div style={{ fontSize: "11px", opacity: 0.85 }}>{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}