import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-3xl">🚀</div>
          <h1 className="text-2xl font-bold gradient-text">ExtraPolka</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#feed" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">Как работает</a>
          <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
          <a href="#for-stores" className="text-sm font-medium hover:text-primary transition-colors">Для магазинов</a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</a>
          <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
        </nav>
        <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
          <Icon name="Store" className="mr-2 h-4 w-4" />
          Подключить магазин
        </Button>
      </div>
    </header>
  );
};

export default Header;
