import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient"; // Adjust path as needed

interface Wish {
    name: string;
    text: string;
    id: string;
}

export default function WishOverlay() {
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [showInput, setShowInput] = useState(false);
    const [newName, setNewName] = useState("");
    const [newText, setNewText] = useState("");

    // 1. Fetch & Realtime Subscription
    useEffect(() => {
        const fetchWishes = async () => {
            const { data, error } = await supabase
                .from("wishes")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) console.error("Fetch error:", error.message);
            if (data) setWishes(data);
        };

        fetchWishes();

        // Listen for inserts from OTHER users
        const channel = supabase
            .channel("realtime-wishes")
            .on("postgres_changes",
                { event: "INSERT", schema: "public", table: "wishes" },
                (payload) => {
                    setWishes((current) => {
                        // Prevent duplicate if we already added it manually in handleSubmit
                        if (current.find(w => w.id === payload.new.id)) return current;
                        return [payload.new as Wish, ...current];
                    });
                }
            )
            .subscribe();

        return () => { supabase.removeChannel(channel); };
    }, []);

    // 2. Submit & Immediate Local Update
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newName.trim() || !newText.trim()) return;

        // Use .select() to get the newly created record back immediately
        const { data, error } = await supabase
            .from("wishes")
            .insert([{ name: newName, text: newText }])
            .select();

        if (error) {
            console.error("Error inserting wish:", error);
        } else if (data && data[0]) {
            // Update local state immediately so the user sees their wish scroll up
            setWishes((current) => [data[0] as Wish, ...current]);

            setNewName("");
            setNewText("");
            setShowInput(false);
        }
    };

    const inlineStyles = `
    @keyframes scrollUp {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }
    @keyframes slideUpDrawer {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    @keyframes fadeInOverlay {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .wish-mask-inline {
      mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
      -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
    }
  `;

    return (
        <>
            <style>{inlineStyles}</style>

            <div
                className="fixed inset-0 pointer-events-none z-[9999] flex flex-col justify-end p-6 pb-24"
                style={{ bottom: '12px', height: '12%', width: '100%' }}
            >
                {/* SCROLLING CONTAINER - KEPT UNCHANGED */}
                <div
                    className="relative h-[45vh] max-w-[412px] overflow-hidden wish-mask-inline"
                    style={{ marginBottom: '2em', padding: '0 1.5em' }}
                >
                    <div
                        className="pointer-events-auto w-full"
                        style={{
                            animation: `scrollUp ${wishes.length * 3}s linear infinite`,
                            willChange: 'transform'
                        }}
                    >
                        {/* Duplicated list for seamless loop */}
                        {[...wishes, ...wishes].map((wish, index) => (
                            <div
                                key={`${wish.id}-${index}`}
                                className="bg-black/40 backdrop-blur-md text-white p-3 mb-3 rounded-2xl rounded-bl-none shadow-lg flex"
                                style={{
                                    gap: '1em',
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(225, 117, 117, 0.5)',
                                    marginBottom: '1em',
                                    borderRadius: '1.5em',
                                    borderBottomLeftRadius: '0',
                                    padding: '0.25em',
                                    color: '#fff'
                                }}
                            >
                                <span className="font-bold text-pink-300 text-[11px] mb-1 uppercase tracking-wider" style={{ flex: '1' }}>
                                    {wish.name}
                                </span>
                                <span className="text-[13px] leading-snug" style={{ flex: '3' }}>
                                    {wish.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BOTTOM ACTION BAR - KEPT UNCHANGED */}
                <div
                    className="fixed bottom-6 w-[92%] max-w-sm pointer-events-auto flex items-center gap-2 bg-black/70 p-2 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl"
                    style={{ left: '3%', maxWidth: '200px', backgroundColor: 'rgba(0, 0, 0, 0.2)', color: '#fff' }}
                >
                    <button
                        onClick={() => setShowInput(true)}
                        className="flex-1 text-left px-5 py-2 text-gray-300 text-sm italic"
                        style={{ background: 'transparent', border: 'none', padding: '.5em', width: '30px', color: '#fff' }}
                    >
                        Gửi lời chúc
                    </button>
                </div>
            </div>

            {/* NEW DRAWER UI - KEPT UNCHANGED */}
            {showInput && (
                <div
                    className="fixed inset-0 z-[10000] flex flex-col justify-end"
                    style={{
                        animation: 'fadeInOverlay 0.3s ease-out forwards',
                        background: '#eeece8d9',
                        borderRadius: '1.5em',
                        padding: '1em',
                        top: '20%',
                        width: '80%',
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setShowInput(false)}
                    />

                    <div
                        className="relative bg-white rounded-t-[2.5rem] w-full max-w-lg mx-auto pointer-events-auto px-8 pt-4 pb-10"
                        style={{
                            height: '60%',
                            animation: 'slideUpDrawer 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                        }}
                    >
                        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />

                        <div className="flex flex-col items-center mb-6">
                            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-2">
                                <span className="text-3xl">❤️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Lời chúc</h3>
                        </div>

                        <button
                            onClick={() => setShowInput(false)}
                            className="absolute top-6 right-8 text-gray-300 text-2xl"
                            style={{ top: '0', right: '0' }}
                        >
                            ✕
                        </button>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                            style={{ gap: '12px' }}
                        >
                            <input
                                type="text"
                                placeholder="Tên của bạn"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                className="w-full bg-gray-50 rounded-xl px-5 py-4 outline-none border border-pink-100 focus:border-pink-300 transition-all"
                                required
                                style={{ borderRadius: '12px' }}
                            />

                            <textarea
                                placeholder="Lời chúc của bạn"
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                                className="w-full bg-gray-50 rounded-xl px-5 py-4 h-32 outline-none border border-pink-100 focus:border-pink-300 transition-all resize-none"
                                required
                                style={{ borderRadius: '12px' }}
                            />

                            <button
                                type="submit"
                                className="w-full py-4 mt-4 bg-[#F06262] text-white rounded-full font-bold text-lg shadow-lg active:scale-95 transition-all"
                            >
                                Gửi Lời Chúc
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}