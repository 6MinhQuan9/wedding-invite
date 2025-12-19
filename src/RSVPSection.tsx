import { useState } from "react";
import { supabase } from "./supabaseClient"; // Adjust path as needed

export default function RSVPSection() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(true);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from("rsvps")
      .insert([
        { 
          full_name: name, 
          attending: attending, 
          guest_count: attending ? count : 0 
        },
      ]);

    setLoading(false);

    if (error) {
      alert("Có lỗi xảy ra, vui lòng thử lại!");
      console.error(error);
    } else {
      alert("Cảm ơn bạn đã xác nhận!");
      setName(""); // Clear form
    }
  };

  return (
    <section style={{ display: "flex", justifyContent: "center", paddingBottom: "50px" }}>
      <div style={{ width: "100%", maxWidth: "420px", textAlign: "center" }}>
        {/* ... (Intro remains the same) ... */}

        <form 
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            padding: "20px 18px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            textAlign: "left",
            marginBottom: "36px",
          }}
        >
          <h3 style={{ textAlign: "center", fontSize: "16px", color: "#3E5F3E", marginBottom: "16px", fontWeight: 600 }}>
            Xác nhận tham dự
          </h3>

          <label style={{ fontSize: "13px", color: "#555" }}>Họ và tên</label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên của bạn"
            style={{ width: "100%", boxSizing: "border-box", marginTop: "6px", marginBottom: "14px", padding: "10px 12px", borderRadius: "6px", border: "1px solid #ddd" }}
          />

          <p style={{ fontSize: "13px", color: "#555", marginBottom: "6px" }}>Bạn sẽ tham dự chứ?</p>
          <label style={{ fontSize: "13px", display: "block", marginBottom: "6px" }}>
            <input type="radio" name="attend" checked={attending === true} onChange={() => setAttending(true)} /> Có, tôi sẽ tham dự
          </label>
          <label style={{ fontSize: "13px", display: "block", marginBottom: "14px" }}>
            <input type="radio" name="attend" checked={attending === false} onChange={() => setAttending(false)} /> Tôi bận, không thể tham dự
          </label>

          {attending && (
            <>
              <label style={{ fontSize: "13px", color: "#555" }}>Số lượng người tham dự</label>
              <select
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value))}
                style={{ width: "100%", boxSizing: "border-box", marginTop: "6px", marginBottom: "16px", padding: "10px 12px", borderRadius: "6px", border: "1px solid #ddd" }}
              >
                <option value={1}>1 người</option>
                <option value={2}>2 người</option>
                <option value={3}>3 người</option>
                <option value={4}>4 người</option>
              </select>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              backgroundColor: loading ? "#ccc" : "#3E5F3E",
              color: "#fff",
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Đang gửi..." : "Gửi xác nhận"}
          </button>
        </form>

        {/* ... (Gifts / QR section remains same) ... */}
      </div>
    </section>
  );
}