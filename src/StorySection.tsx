import { useInView } from "./hooks/useInView";

export default function StorySection() {
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
          borderRadius: "18px",
          padding: "28px 18px 40px",
          position: "relative",
        }}
      >
        {/* IMAGE STACK */}
        <div
          style={{
            position: "relative",
            height: "440px",
          }}
        >
          <div
            className="swing-left"
            style={{
              position: "absolute",
              top: "0",
              right: "18px",
              width: "68%",
              transform: "rotate(-10deg)",
              transformOrigin: "top right",
              boxShadow: "0 12px 28px rgba(0,0,0,0.14)",
              borderRadius: "6px",
              overflow: "hidden",
              background: "#fff",
              padding: "6px",
            }}
          >
            <img
              src="/images/IMG_1987.JPG"
              alt=""
              style={{ width: "100%", display: "block" }}
            />
          </div>

          <div
            className="swing-right"
            style={{
              position: "absolute",
              top: "205px",
              left: "16px",
              width: "68%",
              transform: "rotate(10deg)",
              transformOrigin: "top left",
              boxShadow: "0 12px 28px rgba(0,0,0,0.14)",
              borderRadius: "6px",
              overflow: "hidden",
              background: "#fff",
              padding: "6px",
            }}
          >
            <img
              src="/images/IMG_1945.JPG"
              alt=""
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </div>

        <img
          src="/images/flower-fall.png"
          alt=""
          style={{
            position: "absolute",
            top: "0",
            left: "-10px",
            width: "116px",
          }}
        />

        <img
          src="/images/flower-fall.png"
          alt=""
          style={{
            position: "absolute",
            bottom: "218px",
            right: "10px",
            width: "82px",
            transform: "scaleX(-1)",
          }}
        />

        <div style={{textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Monsieur La Doulaise', cursive",
              fontSize: "3em",
              color: "#6E7F5D",
              marginBottom: "12px",
            }}
          >
            We are getting married
          </p>

          <p
            style={{
              fontSize: "1em",
              color: "#666",
              lineHeight: "1.6",
              padding: "0 12px",
            }}
          >
            Chúng ta cảm ơn quá khứ, chúng ta trân trọng hiện tại và sẽ cùng nhau
            viết tiếp tương lai. Với tất cả lòng biết ơn, chúng ta bắt đầu một chương mới là vợ chồng, là gia đình và là nhà.
          </p>
        </div>
      </div>
    </section>
  );
}