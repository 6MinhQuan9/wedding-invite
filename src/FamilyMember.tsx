import { GiBigDiamondRing, GiLotusFlower } from "react-icons/gi";

export default function FamilyMember() {
    return (
        <section className="mt-20 w-full max-w-lg px-4" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* IMAGE WITH LINK – SLIDE IN */}
            <a
                rel="noopener noreferrer"
                className="block animate-slide-up w-full lg:w-auto lg:inline-block"
            >
                <img
                    src="/images/IMG_1940.JPG"
                    alt="Save the Date"
                    className="w-full h-[500px] rounded-2xl shadow-lg object-cover object-center"
                    style={{
                        height: '332px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: '11px',
                    }}
                />
            </a>

            {/* TEXT DETAILS – SLIDE IN (SLIGHT DELAY) */}
            <div className="mt-10 rounded-2xl px-6 py-8 animate-slide-up-delay w-full">
                {/* Add items-stretch to ensure all columns are the same height */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-4 text-center">

                    {/* LEFT – NHÀ TRAI */}
                    <div className="grid grid-template-rows-subgrid grid-rows-[auto_1fr_auto]">
                        <h3 className="text-lg font-serif text-[#3E5F3E] mb-2">Nhà Trai</h3>
                        <div className="flex items-center justify-center"> {/* Centering name container */}
                            <p className="text-sm text-gray-800">Bà Hoàng Thị Tuyển</p>
                        </div>
                        <p className="text-gray-600 mt-2 italic" style={{ fontSize: '12px' }}>
                            Phường Hoà Bình, tỉnh Phú Thọ
                        </p>
                    </div>

                    {/* MIDDLE DIVIDER */}
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col items-center justify-between bg-[#2F5937] rounded-2xl w-10 h-[80%] py-3 shadow-md">
                            <GiBigDiamondRing size={20} className="text-[#F2E6D8]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#F2E6D8]" />
                            <GiLotusFlower size={18} className="text-[#C9A44D]" />
                        </div>
                    </div>

                    {/* RIGHT – NHÀ GÁI */}
                    <div className="grid grid-template-rows-subgrid grid-rows-[auto_1fr_auto]">
                        <h3 className="text-lg font-serif text-[#3E5F3E] mb-2">Nhà Gái</h3>
                        <div className="flex items-center justify-center">
                            <p className="text-sm text-gray-800">
                                Ông Nguyễn Khải Hoàn<br />
                                Bà Dương T. Thanh Tâm
                            </p>
                        </div>
                        <p className="text-xs text-gray-600 mt-2 italic" style={{ fontSize: '12px' }}>
                            Phường Thái Bình, tỉnh Hưng Yên
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}