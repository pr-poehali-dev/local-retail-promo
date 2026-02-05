import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VerticalFeed from '@/components/VerticalFeed';
import ContentSections from '@/components/ContentSections';
import StoreRegistrationForm from '@/components/StoreRegistrationForm';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection onRegisterClick={() => setIsFormOpen(true)} />
      <VerticalFeed />
      <ContentSections />
      <StoreRegistrationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default Index;