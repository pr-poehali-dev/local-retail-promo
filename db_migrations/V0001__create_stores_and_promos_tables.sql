-- Создание таблицы магазинов
CREATE TABLE IF NOT EXISTS stores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(10) DEFAULT '🏪',
    description TEXT,
    address VARCHAR(500) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    phone VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(500),
    rating DECIMAL(3, 2) DEFAULT 0.0,
    promo_points INTEGER DEFAULT 0,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы промо-акций
CREATE TABLE IF NOT EXISTS promos (
    id SERIAL PRIMARY KEY,
    store_id INTEGER NOT NULL REFERENCES stores(id),
    title VARCHAR(500) NOT NULL,
    description TEXT,
    image_url VARCHAR(1000),
    start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_date TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    views_count INTEGER DEFAULT 0,
    clicks_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индексов для улучшения производительности
CREATE INDEX IF NOT EXISTS idx_stores_status ON stores(status);
CREATE INDEX IF NOT EXISTS idx_stores_rating ON stores(rating DESC);
CREATE INDEX IF NOT EXISTS idx_stores_promo_points ON stores(promo_points DESC);
CREATE INDEX IF NOT EXISTS idx_promos_store_id ON promos(store_id);
CREATE INDEX IF NOT EXISTS idx_promos_is_active ON promos(is_active);

-- Добавление тестовых данных
INSERT INTO stores (name, logo, description, address, latitude, longitude, phone, email, rating, promo_points, status) 
SELECT * FROM (VALUES
    ('TechnoMarket', '📱', 'Электроника и гаджеты', 'ул. Кабанбай батыра, 53', 51.1694, 71.4491, '+7 (702) 123-45-67', 'info@technomarket.kz', 4.8, 1250, 'active'),
    ('FashionHub', '👗', 'Модная одежда и аксессуары', 'ТРЦ Mega Silk Way, 2 этаж', 51.0883, 71.4067, '+7 (702) 234-56-78', 'info@fashionhub.kz', 4.9, 2100, 'active'),
    ('CoffeeTime', '☕', 'Кофейня с авторскими напитками', 'пр. Республики, 12', 51.1605, 71.4704, '+7 (702) 345-67-89', 'info@coffeetime.kz', 4.7, 890, 'active'),
    ('SportZone', '⚽', 'Спортивные товары и экипировка', 'ул. Сыганак, 29', 51.1281, 71.4301, '+7 (702) 456-78-90', 'info@sportzone.kz', 4.6, 1540, 'active')
) AS v(name, logo, description, address, latitude, longitude, phone, email, rating, promo_points, status)
WHERE NOT EXISTS (SELECT 1 FROM stores);

INSERT INTO promos (store_id, title, description, image_url, end_date, is_active)
SELECT * FROM (VALUES
    (1, 'Скидка 30% на смартфоны Samsung Galaxy', 'Только в январе! Успей купить флагманские смартфоны Samsung Galaxy с огромной скидкой', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80', CURRENT_TIMESTAMP + INTERVAL '30 days', true),
    (2, 'Новая коллекция весна-лето 2026', 'Встречайте обновленную коллекцию одежды от ведущих мировых брендов', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', CURRENT_TIMESTAMP + INTERVAL '60 days', true),
    (3, 'Второй капучино в подарок при покупке до 12:00', 'Приходите на завтрак и получите второй капучино бесплатно!', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', CURRENT_TIMESTAMP + INTERVAL '7 days', true),
    (4, 'Распродажа спортивной обуви -50%', 'Скидки до 50% на кроссовки Nike, Adidas, Puma и других брендов', 'https://images.unsplash.com/photo-1556906781-9cba4ea8c589?w=800&q=80', CURRENT_TIMESTAMP + INTERVAL '14 days', true)
) AS v(store_id, title, description, image_url, end_date, is_active)
WHERE NOT EXISTS (SELECT 1 FROM promos);
