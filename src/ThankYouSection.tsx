export default function ThankYouSection() {
  return (
    <section
      style={{
        marginTop: "1rem",
        padding: "0 1rem 4rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "18px",
          padding: "40px 22px 48px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* MESSAGE */}
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "40px",
          }}
        >
          Cảm ơn bạn đã dành tình cảm cho chúng mình!
          <br />
          Sự hiện diện của bạn chính là món quà ý nghĩa nhất,
          và chúng mình vô cùng trân quý khi được cùng bạn
          chia sẻ niềm hạnh phúc trong ngày trọng đại này.
        </p>

        {/* FLOWER DECORATION */}
        <img
          src="/images/flower-fall.png"
          alt=""
          style={{
            position: "absolute",
            right: "-4px",
            top: "102px",
            width: "90px",
            opacity: 0.9,
          }}
        />

        <img
          src="/images/flower-fall.png"
          alt=""
          style={{
            position: "absolute",
            left: "36px",
            bottom: "-28px",
            width: "60px",
            opacity: 0.85,
          }}
        />

        {/* THANK YOU TEXT */}
        <div
          style={{
            fontFamily: "'Monsieur La Doulaise', cursive",
            fontSize: "36px",
            color: "#6E7F5D",
            marginTop: "24px",
            letterSpacing: "0.04em",
          }}
        >
          Thank you !
        </div>
      </div>
    </section>
  );
}