import AlbumOfLove from "./AlbumOfLove";
import CalendarOverlaySection from "./CalendarOverlaySection";
import Envelope from "./Envelope";
import FamilyMember from "./FamilyMember";
import InvitationInfo from "./InvitationInfo";
import RomanticQuoteSection from "./RomanticQuoteSection";
import RSVPSection from "./RSVPSection";
import StorySection from "./StorySection";
import ThankYouSection from "./ThankYouSection";
import TimelineQuoteCountdown from "./TimelineQuoteCountdown";

export default function App() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] flex flex-col items-center px-4 pt-14" style={{
      backgroundImage: 'url("/images/textur.jpg")',
      backgroundSize: 'cover',        // Ensures the texture fills the screen
      backgroundPosition: 'center',    // Centers the texture
      backgroundRepeat: 'no-repeat',   // Prevents tiling
      backgroundAttachment: 'fixed',
      overflow: 'hidden'
    }}>
      {/* TITLE */}
      <h1 className="font-serif text-[#3E5F3E] mb-14 imperial-script-regular" style={{ fontSize: '4rem' }}>
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
      <ThankYouSection />
    </main>
  );
}