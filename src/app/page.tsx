import { HeroSection } from '@/components/sections/HeroSection';
import { BandSection } from '@/components/sections/BandSection';
import { MembersPreviewSection } from '@/components/sections/MembersPreviewSection';
import { AlbumsPreviewSection } from '@/components/sections/AlbumsPreviewSection';
import { SchedulePreviewSection } from '@/components/sections/SchedulePreviewSection';
import { SocialSection } from '@/components/sections/SocialSection';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
      <HeroSection />
      <BandSection />
      <MembersPreviewSection />
      <AlbumsPreviewSection />
      <SchedulePreviewSection />
      <SocialSection />
    </div>
  );
}
