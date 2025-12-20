import { useInView } from "./hooks/useInView";

export default function MapSection() {
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <section
            ref={ref}
            className={`w-full max-w-lg px-6 mt-16 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* MAP IFRAME */}
                <div className="w-full aspect-video relative">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.0686220803917!2d105.33766404299462!3d20.827750654985163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31346b006f69f97f%3A0x32ebad22b9ff5e0a!2zVHJ1bmcgdMOibSBo4buZaSBuZ2jhu4sgSG_DoCBCw6xuaA!5e0!3m2!1svi!2s!4v1766209877530!5m2!1svi!2s" width="400" height="300" />
                </div>
            </div>
        </section>
    );
}