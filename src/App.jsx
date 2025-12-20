import AlbumOfLove from "./AlbumOfLove";
import CalendarOverlaySection from "./CalendarOverlaySection";
import Envelope from "./Envelope";
import FamilyMember from "./FamilyMember";
import InvitationInfo from "./InvitationInfo";
import MapSection from "./MapDirection";
import RomanticQuoteSection from "./RomanticQuoteSection";
import RSVPSection from "./RSVPSection";
import StorySection from "./StorySection";
import ThankYouSection from "./ThankYouSection";
import TimelineQuoteCountdown from "./TimelineQuoteCountdown";
import AudioMusic from "./AudioMusic";
import WishOverlay from "./WishesOverlay";

export default function App() {
  return (
    // 1. MAIN WRAPPER: Handles the fixed background and full-screen centering
    <div 
      className="min-h-screen w-full flex justify-center bg-[#F7F4EE]" 
      style={{
        backgroundImage: 'url("/images/textur.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 2. CONTENT CONTAINER: Restricts width to smartphone/tablet sizes */}
      <main 
        className="w-full max-w-[480px] flex flex-col items-center px-4 pt-14 pb-20 shadow-2xl bg-white/30 backdrop-blur-sm min-h-screen"
        style={{
          overflowX: 'hidden'
        }}
      >
        <AudioMusic />
        
        {/* TITLE */}
        <h1 className="font-serif text-[#3E5F3E] mb-14 imperial-script-regular text-center" style={{ fontSize: '4rem' }}>
          Save our date
        </h1>

        <Envelope />

        <p className="mt-10 text-sm italic text-gray-600">
          Chạm để mở thiệp
        </p>

        <FamilyMember />
        <InvitationInfo />
        <RomanticQuoteSection />
        <StorySection />
        <CalendarOverlaySection />
        <TimelineQuoteCountdown />
        <AlbumOfLove />
        <RSVPSection />
        <MapSection />
        <ThankYouSection />
        <WishOverlay />
      </main>
    </div>
  );
}