import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import Icon from '@/components/ui/icon';

interface Store {
  id: number;
  name: string;
  logo: string;
  address: string;
  latitude: string;
  longitude: string;
  rating: string;
  promo_points: number;
}

const StoresMap = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const loadYandexMaps = () => {
      if (window.ymaps) {
        setMapLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=your_api_key';
      script.async = true;
      script.onload = () => {
        window.ymaps.ready(() => {
          setMapLoaded(true);
        });
      };
      document.body.appendChild(script);
    };

    loadYandexMaps();
  }, []);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/870cf742-a753-4eb4-9b8d-86e450b28a7b?action=map');
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

  useEffect(() => {
    if (!mapLoaded || stores.length === 0) return;

    const initMap = () => {
      const map = new window.ymaps.Map('yandex-map', {
        center: [51.1605, 71.4704],
        zoom: 12,
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
      });

      stores.forEach((store) => {
        const placemark = new window.ymaps.Placemark(
          [parseFloat(store.latitude), parseFloat(store.longitude)],
          {
            balloonContentHeader: `${store.logo} ${store.name}`,
            balloonContentBody: `
              <div style="padding: 10px;">
                <p><strong>Адрес:</strong> ${store.address}</p>
                <p><strong>Рейтинг:</strong> ⭐ ${store.rating}</p>
                <p><strong>Промо-баллы:</strong> ${store.promo_points}</p>
              </div>
            `,
            hintContent: store.name,
          },
          {
            preset: 'islands#violetShoppingIcon',
          }
        );

        map.geoObjects.add(placemark);
      });
    };

    initMap();
  }, [mapLoaded, stores]);

  if (loading) {
    return (
      <Card className="p-8">
        <Skeleton className="w-full h-[500px] rounded-lg" />
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold">Магазины на карте</h3>
          <Badge className="gradient-primary text-white">
            <Icon name="MapPin" className="h-4 w-4 mr-1" />
            {stores.length} магазинов
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Нажмите на метку, чтобы увидеть информацию о магазине
        </p>
      </div>
      
      <div id="yandex-map" className="w-full h-[500px]" />
      
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
          <div className="text-center">
            <Icon name="Loader2" className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Загрузка карты...</p>
          </div>
        </div>
      )}
    </Card>
  );
};

export default StoresMap;
