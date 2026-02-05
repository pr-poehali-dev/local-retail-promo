import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VerticalFeed from '@/components/VerticalFeed';
import ContentSections from '@/components/ContentSections';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <VerticalFeed />
      <ContentSections />
    </div>
  );
};

export default Index;
