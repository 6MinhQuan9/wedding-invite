import { useInView } from "./hooks/useInView";

export default function InvitationInfo() {
  const { ref, inView } = useInView({ threshold: 0.25 });

  // 1. Get URL Parameters logic
  // URL example: yourdomain.com/?name=Anh Quý&partner=Chị Lan
  const queryParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const decodeParam = (param: any) => param ? decodeURIComponent(param) : null;
  const guestName = decodeParam(queryParams?.get("name")) || "Bạn";
  const partnerName = decodeParam(queryParams?.get("partner"));

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
        className={`rounded-2xl px-8 py-12 text-center shadow-md transition-all duration-1000
          ${inView ? "animate-invite-slide opacity-100" : "opacity-0"}
        `}
      >
        {/* NAMES – VERTICAL STACKED STYLE */}
        <div className="relative text-center funnel-display">
          <div className="relative block">
            <div className="text-[26px] tracking-wide text-[#3E5F3E] text-start alex-brush-regular" style={{ fontSize: '3em' }}>
              Minh Quân
            </div>
            {/* FLOWER DECORATION */}
            <img
              src="/images/flower-fall.png"
              alt=""
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                right: '-51px',
                width: '34%',
                pointerEvents: 'none'
              }}
            />
          </div>

          {/* AMPERSAND */}
          <div className="mt-3 text-[#3E5F3E] text-xl alex-brush-regular" style={{ fontSize: '2.5em' }}>
            &
          </div>

          {/* SECOND NAME */}
          <div
            className="mt-2 text-[26px] tracking-wide text-[#3E5F3E] text-end alex-brush-regular"
            style={{ fontSize: '3em' }}
          >
            Thu Hằng
          </div>
        </div>

        {/* INVITATION TEXT */}
        <p className="mt-6 text-sm text-gray-700 tracking-wide">
          TRÂN TRỌNG KÍNH MỜI
        </p>

        {/* GUEST NAME SECTION (Dynamic from URL) */}
        <div className="mt-2 flex flex-col items-center">
          <p className="alex-brush-regular" style={{ fontSize: '3rem', margin: '0' }}>
            {guestName}
          </p>

          {/* Shows ONLY if partner param exists in URL */}
          {partnerName && (
            <p className="text-sm text-gray-600 italic mt-1">
              cùng với {partnerName}
            </p>
          )}
        </div>

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
              fontSize: "1.2rem",
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
            (Tức ngày 06 tháng 12 năm Ất Tỵ)
          </p>
        </div>

        {/* LOCATION */}
        <div className="mt-8 text-sm text-gray-700 leading-relaxed">
          <p style={{ textTransform: 'uppercase' }}>Hôn lễ được tổ chức tại</p>
          <p className="mt-2 font-serif text-[#3E5F3E] font-bold " style={{ fontSize: '1.5em' }}>
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