import { useInView } from "./hooks/useInView";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function AlbumOfLove() {
  const { ref, inView } = useInView({ threshold: 0.25 });

  const images = [
    "/images/IMG_1940.JPG",
    "/images/IMG_1987.JPG",
    "/images/IMG_1991.JPG",
    "/images/IMG_1945.JPG",
  ];

  return (
    <section
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "40px 0"
      }}
    >
      <div
        className={inView ? "animate-invite-slide" : ""}
        style={{
          opacity: inView ? 1 : 0,
          width: "100%",
          maxWidth: "420px",
          transition: "all 0.8s ease-out"
        }}
      >
        {/* TITLE */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "26px", letterSpacing: "0.12em", color: "#6E7F5D", marginBottom: "2px" }} className="funnel-display">
            ALBUM
          </h2>
          <div style={{ fontFamily: "'Monsieur La Doulaise', cursive", fontSize: "3em", color: "#6E7F5D" }}>
            of
          </div>
          <h2 style={{ fontSize: "26px", letterSpacing: "0.12em", color: "#6E7F5D" }} className="funnel-display">
            LOVE
          </h2>
        </div>

        {/* SWIPER SLIDER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          style={{
            width: "100%",
            borderRadius: "16px",
            paddingBottom: "30px", // Space for dots
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Wedding photo ${index + 1}`}
                style={{
                  width: "100%",
                  height: "250px", // This creates the horizontal rectangle shape
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "16px",
                  display: "block",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}