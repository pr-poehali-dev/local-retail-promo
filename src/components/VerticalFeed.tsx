import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import Icon from '@/components/ui/icon';

interface Store {
  id: number;
  name: string;
  logo: string;
  address: string;
  rating: string;
  promo_points: number;
  active_promos: Array<{
    id: number;
    title: string;
    description: string;
    image_url: string;
  }> | null;
}

const VerticalFeed = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/870cf742-a753-4eb4-9b8d-86e450b28a7b?action=list');
        const data = await response.json();
        setStores(data.stores || []);
      } catch (error) {
        console.error('Error fetching stores:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  const scrollToNext = () => {
    if (currentCard < stores.length - 1) {
      setCurrentCard(currentCard + 1);
      document.getElementById(`store-card-${currentCard + 1}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section id="feed" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Лента промо-акций</h2>
            <p className="text-muted-foreground text-lg">
              Листайте вниз, чтобы увидеть актуальные предложения магазинов Астаны
            </p>
          </div>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="w-full h-[600px] md:h-[700px] rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

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
          {stores.map((store, index) => {
            const promo = store.active_promos?.[0];
            if (!promo) return null;

            return (
              <Card
                key={store.id}
                id={`store-card-${index}`}
                className="overflow-hidden h-[600px] md:h-[700px] snap-start scroll-mt-24 relative group hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
                <img
                  src={promo.image_url}
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
                          <span className="font-medium">{parseFloat(store.rating).toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="gradient-primary text-white">
                      {store.promo_points} баллов
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                      <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
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

                    {index < stores.length - 1 && (
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VerticalFeed;
