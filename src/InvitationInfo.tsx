import { useInView } from "./hooks/useInView";

export default function InvitationInfo() {
  const { ref, inView } = useInView({ threshold: 0.25 });

  // 1. Get URL Parameters
  const queryParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const decodeParam = (param: string | null | undefined) => param ? decodeURIComponent(param) : null;
  
  const guestName = decodeParam(queryParams?.get("name")) || "Bạn";
  const partnerName = decodeParam(queryParams?.get("partner"));
  const locationKey = queryParams?.get("loc")?.toLowerCase(); // 'trai' or 'gai'

  // 2. Define Location Data
  const locations = {
    trai: {
      venue: "TRUNG TÂM HỘI NGHỊ HÒA BÌNH",
      address: "Số 153, đường Lê Thánh Tông - tổ 5 - phường Hòa Bình - tỉnh Phú Thọ",
      time: "16 : 30 , THỨ BẢY",
      date: "24",
      month: "01",
      year: "2026",
      lunar: "(Tức ngày 06 tháng 12 năm Ất Tỵ)"
    },
    gai: {
      venue: "TU GIA NHÀ GÁI",
      address: "TDP Đại Hội, phường Thái Bình, tỉnh Hưng Yên",
      time: "17: 00 , THỨ SÁU",
      date: "23",
      month: "01",
      year: "2026",
      lunar: "(Tức ngày 05 tháng 12 năm Ất Tỵ)"
    }
  };

  // Default to 'trai' if no loc is provided or if it doesn't match
  const data = (locationKey === "gai") ? locations.gai : locations.trai;

  return (
    <section className="mt-24 w-full max-w-lg px-6 flex flex-col justify-center items-center">
      <div
        ref={ref}
        className={`rounded-2xl px-8 py-12 text-center shadow-md transition-all duration-1000
          ${inView ? "animate-invite-slide opacity-100" : "opacity-0"}
        `}
      >
        {/* NAMES SECTION */}
        <div className="relative text-center funnel-display">
          <div className="relative block">
            <div className="text-[#3E5F3E] text-start alex-brush-regular" style={{ fontSize: '3em' }}>
              Minh Quân
            </div>
            <img
              src="/images/flower-fall.png"
              alt=""
              className="absolute top-1/2 -translate-y-1/2"
              style={{ right: '-51px', width: '34%', pointerEvents: 'none' }}
            />
          </div>

          <div className="mt-3 text-[#3E5F3E] alex-brush-regular" style={{ fontSize: '2.5em' }}>
            &
          </div>

          <div className="mt-2 text-[#3E5F3E] text-end alex-brush-regular" style={{ fontSize: '3em' }}>
            Thu Hằng
          </div>
        </div>

        {/* INVITATION TEXT */}
        <p className="mt-6 text-sm text-gray-700 tracking-wide">TRÂN TRỌNG KÍNH MỜI</p>

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

        <p className="mt-4 text-sm text-gray-700 leading-relaxed uppercase">
          Tham dự tiệc chung vui<br />cùng gia đình chúng tôi
        </p>

        {/* DYNAMIC TIME SECTION */}
        <div style={{ marginTop: "2rem", textAlign: "center", color: "#3E5F3E" }}>
          <p style={{ fontSize: "1.2rem", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>
            {data.time}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>
            <span style={{ fontSize: "1rem", letterSpacing: "0.15em", borderTop: "1px solid rgba(62,95,62,0.6)", borderBottom: "1px solid rgba(62,95,62,0.6)" }}>
              THÁNG {data.month}
            </span>
            <span style={{ fontFamily: "serif", fontSize: "44px", lineHeight: "1", margin: "0 6px" }}>
              {data.date}
            </span>
            <span style={{ fontSize: "1rem", letterSpacing: "0.15em", borderTop: "1px solid rgba(62,95,62,0.6)", borderBottom: "1px solid rgba(62,95,62,0.6)" }}>
              NĂM {data.year}
            </span>
          </div>

          <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", fontStyle: "italic", color: "#666" }}>
            {data.lunar}
          </p>
        </div>

        {/* DYNAMIC LOCATION SECTION */}
        <div className="mt-8 text-sm text-gray-700 leading-relaxed">
          <p className="uppercase">Hôn lễ được tổ chức tại</p>
          <p className="mt-2 font-serif text-[#3E5F3E] font-bold" style={{ fontSize: '1.5em' }}>
            {data.venue}
          </p>
          <p className="mt-2 text-xs">
            {data.address}
          </p>
        </div>
      </div>
    </section>
  );
}