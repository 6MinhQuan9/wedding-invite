import { useInView } from "./hooks/useInView";

export default function InvitationInfo() {
  const { ref, inView } = useInView({ threshold: 0.25 });

  return (
    <section className="mt-24 w-full max-w-lg px-6" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* PAPER CARD */}
      <div
        ref={ref}
        className={`rounded-2xl px-8 py-12 text-center shadow-md
          ${inView ? "animate-invite-slide" : "opacity-0"}
        `}
        style={{
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* NAMES – VERTICAL STACKED STYLE */}
        <div className="relative text-center funnel-display">
          {/* FIRST NAME */}
          <div className="relative block">
            <h2 className="text-[26px] tracking-wide text-[#3E5F3E] text-start">
              MINH QUÂN
            </h2>
            {/* FLOWER DECORATION */}
            <img
              src="/images/flower-fall.png"
              alt=""
              className="absolute -right-14 top-1/2 w-20 -translate-y-1/2"
              style={{
                right: '-51px',
                width: '34%'
              }}
            />
          </div>

          {/* AMPERSAND */}
          <div className="mt-3 text-[#3E5F3E] text-xl">
            &
          </div>

          {/* SECOND NAME */}
          <h2 className="mt-2 text-[26px] tracking-wide text-[#3E5F3E] text-end">
            THU HẰNG
          </h2>
        </div>

        {/* INVITATION TEXT */}
        <p className="mt-6 text-sm text-gray-700 tracking-wide">
          TRÂN TRỌNG KÍNH MỜI
        </p>

        <p className="mt-2 text-lg text-red-600 font-handwriting">
          Bạn
        </p>

        <p className="mt-4 text-sm text-gray-700 leading-relaxed">
          THAM DỰ TIỆC CHUNG VUI
          <br />
          CÙNG GIA ĐÌNH CHÚNG TÔI
        </p>

        {/* TIME SECTION */}
        <div style={{ marginTop: "2rem", textAlign: "center", color: "#3E5F3E" }}>
          {/* Time */}
          <p
            style={{
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              marginBottom: "0.75rem",
            }}
          >
            16 : 30 , THỨ BẢY
          </p>

          {/* Date Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
            }}
          >
            {/* Month */}
            <span
              style={{
                fontSize: "1rem",
                letterSpacing: "0.15em",
                whiteSpace: "nowrap",
                borderTop: "1px solid rgba(62,95,62,0.6)",
                borderBottom: "1px solid rgba(62,95,62,0.6)",
              }}
            >
              THÁNG 01
            </span>

            {/* Day */}
            <span
              style={{
                fontFamily: "serif",
                fontSize: "44px",
                lineHeight: "1",
                margin: "0 6px",
              }}
            >
              24
            </span>

            {/* Year */}
            <span
              style={{
                fontSize: "1rem",
                letterSpacing: "0.15em",
                whiteSpace: "nowrap",
                borderTop: "1px solid rgba(62,95,62,0.6)",
                borderBottom: "1px solid rgba(62,95,62,0.6)",
              }}
            >
              NĂM 2026
            </span>
          </div>

          {/* Lunar date */}
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.75rem",
              fontStyle: "italic",
              color: "#666",
            }}
          >
            (Tức ngày 06 tháng 11 năm 2026)
          </p>
        </div>

        {/* LOCATION */}
        <div className="mt-8 text-sm text-gray-700 leading-relaxed">
          <p>Hôn lễ được tổ chức tại</p>
          <p className="mt-2 font-serif text-[#3E5F3E]">
            TRUNG TÂM HỘI NGHỊ HÒA BÌNH
          </p>
          <p className="mt-2 text-xs">
            Số 153, đường Lê Thánh Tông - tổ 5 - phường
            <br />
            Hòa Bình - tỉnh Phú Thọ
          </p>
        </div>
      </div>
    </section>
  );
}