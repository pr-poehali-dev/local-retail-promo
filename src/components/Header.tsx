import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import StoreRegistrationForm from './StoreRegistrationForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const navLinks = [
    { href: '#feed', label: 'Главная' },
    { href: '#how-it-works', label: 'Как работает' },
    { href: '#benefits', label: 'Преимущества' },
    { href: '#for-stores', label: 'Для магазинов' },
    { href: '#faq', label: 'FAQ' },
    { href: '#blog', label: 'Блог' },
    { href: '#contacts', label: 'Контакты' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleRegisterClick = () => {
    setIsFormOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🚀</div>
            <h1 className="text-2xl font-bold gradient-text">ExtraPolka</h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button 
              onClick={handleRegisterClick}
              className="hidden md:flex gradient-primary text-white hover:opacity-90 transition-opacity"
            >
              <Icon name="Store" className="mr-2 h-4 w-4" />
              Подключить магазин
            </Button>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl">🚀</div>
                      <span className="gradient-text">ExtraPolka</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-lg font-medium hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button 
                    onClick={handleRegisterClick}
                    className="mt-4 gradient-primary text-white hover:opacity-90 w-full"
                  >
                    <Icon name="Store" className="mr-2 h-4 w-4" />
                    Подключить магазин
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <StoreRegistrationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Header;
