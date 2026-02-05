import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const mockStores = [
  {
    id: 1,
    name: 'TechnoMarket',
    logo: '📱',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    description: 'Скидка 30% на смартфоны Samsung Galaxy',
    address: 'ул. Кабанбай батыра, 53',
    rating: 4.8,
    promoPoints: 1250,
  },
  {
    id: 2,
    name: 'FashionHub',
    logo: '👗',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    description: 'Новая коллекция весна-лето 2026',
    address: 'ТРЦ Mega Silk Way, 2 этаж',
    rating: 4.9,
    promoPoints: 2100,
  },
  {
    id: 3,
    name: 'CoffeeTime',
    logo: '☕',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    description: 'Второй капучино в подарок при покупке до 12:00',
    address: 'пр. Республики, 12',
    rating: 4.7,
    promoPoints: 890,
  },
  {
    id: 4,
    name: 'SportZone',
    logo: '⚽',
    image: 'https://images.unsplash.com/photo-1556906781-9cba4ea8c589?w=800&q=80',
    description: 'Распродажа спортивной обуви -50%',
    address: 'ул. Сыганак, 29',
    rating: 4.6,
    promoPoints: 1540,
  },
];

const VerticalFeed = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const scrollToNext = () => {
    if (currentCard < mockStores.length - 1) {
      setCurrentCard(currentCard + 1);
      document.getElementById(`store-card-${currentCard + 1}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="feed" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Лента промо-акций</h2>
          <p className="text-muted-foreground text-lg">
            Листайте вниз, чтобы увидеть актуальные предложения магазинов Астаны
          </p>
        </div>

        <div className="space-y-6">
          {mockStores.map((store, index) => (
            <Card
              key={store.id}
              id={`store-card-${index}`}
              className="overflow-hidden h-[600px] md:h-[700px] snap-start scroll-mt-24 relative group hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
              <img
                src={store.image}
                alt={store.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                    <div className="text-4xl">{store.logo}</div>
                    <div>
                      <div className="font-bold text-lg">{store.name}</div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{store.rating}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="gradient-primary text-white">
                    {store.promoPoints} баллов
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <h3 className="text-2xl font-bold mb-3">{store.description}</h3>
                    <div className="flex items-start gap-2 text-muted-foreground mb-6">
                      <Icon name="MapPin" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{store.address}</span>
                    </div>
                    <div className="flex gap-3">
                      <Button className="flex-1 gradient-primary text-white hover:opacity-90">
                        <Icon name="Map" className="mr-2 h-4 w-4" />
                        Показать на карте
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Icon name="ExternalLink" className="mr-2 h-4 w-4" />
                        Перейти в магазин
                      </Button>
                    </div>
                  </div>

                  {index < mockStores.length - 1 && (
                    <button
                      onClick={scrollToNext}
                      className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
                    >
                      <Icon name="ChevronDown" className="h-6 w-6 text-primary animate-bounce" />
                    </button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalFeed;
