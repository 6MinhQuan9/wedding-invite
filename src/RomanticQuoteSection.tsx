export default function RomanticQuoteSection() {
    return (
        <section
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "420px",
                    borderRadius: "16px",
                }}
            >
                {/* IMAGE WRAPPER */}
                <div
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "14px",
                    }}
                >
                    <img
                        src="/images/IMG_1996.JPG"
                        alt="Wedding moment"
                        style={{
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            borderRadius: '11px',
                        }}
                    />

                    {/* QUOTE TEXT OVER IMAGE */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "14px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px",
                            fontFamily: "'Monsieur La Doulaise', cursive",
                            color: "rgb(24, 104, 11, 0.78)",
                            lineHeight: "1.3",
                            textShadow: "0 1px 2px rgba(0,0,0,0.06)",
                            whiteSpace: "nowrap",
                            width: "100%",
                        }}
                    >
                        <div style={{ fontSize: "2.5em", display: "flex", justifyContent: "center", paddingLeft: "24px" }}>
                            All of me loves
                        </div>

                        <div style={{ fontSize: "2.5em", display: "flex", justifyContent: "flex-end", paddingRight: "24px" }}>
                            All of you
                        </div>
                    </div>

                    {/* OPTIONAL FLOWER DECORATION */}
                    <img
                        src="/images/flower-right.png"
                        alt=""
                        style={{
                            position: "absolute",
                            bottom: "-64px",
                            left: "0",
                            width: "236px",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}