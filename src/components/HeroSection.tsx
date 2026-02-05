import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onRegisterClick?: () => void;
}

const HeroSection = ({ onRegisterClick }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white -z-10" />
      <div className="container mx-auto text-center max-w-4xl animate-fade-in">
        <Badge className="mb-6 gradient-primary text-white px-4 py-2 text-sm">
          Локальная реклама нового поколения
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Продвижение магазинов в <span className="gradient-text">Астане</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Локальная реклама с реальными покупателями. Без комиссий маркетплейсов. Только живой трафик в ваш офлайн магазин.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={onRegisterClick}
            className="gradient-primary text-white hover:opacity-90 transition-opacity text-lg px-8"
          >
            <Icon name="Rocket" className="mr-2 h-5 w-5" />
            Подключить магазин
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8" asChild>
            <a href="#how-it-works">
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Как это работает
            </a>
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">250+</div>
            <div className="text-sm text-muted-foreground">Активных магазинов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">50К+</div>
            <div className="text-sm text-muted-foreground">Просмотров в день</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">4.8</div>
            <div className="text-sm text-muted-foreground">Средний рейтинг</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;