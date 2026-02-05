import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import StoresMap from './StoresMap';

const ContentSections = () => {
  return (
    <>
      {/* Stores Map Section */}
      <section id="map" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Магазины Астаны на карте</h2>
            <p className="text-muted-foreground text-lg">
              Найдите ближайшие магазины с актуальными акциями
            </p>
          </div>
          <StoresMap />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-muted-foreground text-lg">Три простых шага для начала продвижения</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: 'UserPlus',
                title: 'Регистрация магазина',
                description: 'Заполните форму с информацией о вашем магазине и загрузите необходимые документы',
              },
              {
                step: '02',
                icon: 'Upload',
                title: 'Создайте промо-акцию',
                description: 'Загрузите фото, опишите акцию и укажите период действия предложения',
              },
              {
                step: '03',
                icon: 'TrendingUp',
                title: 'Получайте клиентов',
                description: 'Ваше предложение увидят тысячи потенциальных покупателей в Астане',
              },
            ].map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                <div className="text-6xl font-bold text-purple-100 mb-4">{item.step}</div>
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                  <Icon name={item.icon} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Преимущества платформы</h2>
            <p className="text-muted-foreground text-lg">Почему магазины выбирают ExtraPolka</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'Users',
                title: 'Реальные покупатели',
                description: 'Только живые люди из Астаны, без ботов и накрутки',
              },
              {
                icon: 'Ban',
                title: 'Без комиссий маркетплейсов',
                description: 'Вы платите только за продвижение, а не за каждую продажу',
              },
              {
                icon: 'Store',
                title: 'Офлайн трафик',
                description: 'Покупатели приходят в ваш физический магазин',
              },
              {
                icon: 'BarChart3',
                title: 'Умный рейтинг',
                description: 'Система баллов за активность и качественный сервис',
              },
              {
                icon: 'Target',
                title: 'Локальное таргетирование',
                description: 'Показываем только жителям Астаны в нужных районах',
              },
              {
                icon: 'Zap',
                title: 'Быстрый запуск',
                description: 'Создайте акцию и начните получать клиентов в тот же день',
              },
            ].map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 flex gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Icon name={benefit.icon} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Stores Section */}
      <section id="for-stores" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 gradient-primary text-white">Для магазинов</Badge>
              <h2 className="text-4xl font-bold mb-6">Система рейтинга и промо-баллов</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Зарабатывайте баллы за активность и качество обслуживания. Чем выше рейтинг — тем заметнее ваши акции в ленте.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Отзывы покупателей', points: '+50 баллов' },
                  { label: 'Регулярные акции', points: '+30 баллов/акция' },
                  { label: 'Высокая активность', points: '+100 баллов/месяц' },
                  { label: 'Быстрое реагирование', points: '+20 баллов' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-purple-50">
                    <span className="font-medium">{item.label}</span>
                    <Badge className="gradient-primary text-white">{item.points}</Badge>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8 gradient-primary text-white hover:opacity-90">
                <Icon name="Sparkles" className="mr-2 h-5 w-5" />
                Начать зарабатывать баллы
              </Button>
            </div>
            <Card className="p-8 bg-gradient-to-br from-purple-100 to-pink-100">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold gradient-text mb-2">2,450</div>
                <div className="text-muted-foreground">Промо-баллов</div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Текущий уровень</span>
                    <span className="font-bold">Золотой</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full gradient-primary" style={{ width: '75%' }} />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Видимость в ленте</span>
                    <Badge variant="outline">+150%</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Приоритет в поиске</span>
                    <Badge variant="outline">Высокий</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Просмотры за неделю</span>
                    <Badge variant="outline">12,500</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Platform Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">О платформе</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            ExtraPolka — это локальная рекламная сеть нового поколения для офлайн бизнеса в Астане. 
            Мы создаём мост между физическими магазинами и их потенциальными покупателями, 
            используя современные технологии вертикальной ленты и умного ранжирования.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Наша миссия — помочь локальному бизнесу конкурировать с крупными маркетплейсами, 
            предоставляя эффективные инструменты продвижения без высоких комиссий.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о платформе</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Сколько стоит размещение?',
                answer: 'Базовое размещение бесплатно. Вы можете приобрести дополнительные промо-баллы для повышения видимости или зарабатывать их за активность и хорошие отзывы.',
              },
              {
                question: 'Как быстро запустить первую акцию?',
                answer: 'После регистрации вы сможете создать акцию за 10 минут. Модерация занимает до 2 часов, после чего ваше предложение появится в ленте.',
              },
              {
                question: 'Можно ли таргетировать по районам?',
                answer: 'Да, при создании акции вы можете выбрать конкретные районы Астаны, где будет показываться ваше предложение.',
              },
              {
                question: 'Как работает система баллов?',
                answer: 'Баллы зарабатываются за активность, отзывы покупателей, регулярность акций. Чем больше баллов — тем чаще ваши акции показываются в топе ленты.',
              },
              {
                question: 'Нужна ли интеграция с Telegram?',
                answer: 'Telegram Mini App находится в разработке. Пока платформа работает как веб-приложение, но в будущем будет полная интеграция.',
              },
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Блог</h2>
            <p className="text-muted-foreground text-lg">Полезные статьи для владельцев магазинов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
                category: 'Маркетинг',
                title: '10 способов увеличить офлайн-трафик',
                date: '15 января 2026',
              },
              {
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
                category: 'Аналитика',
                title: 'Как отслеживать эффективность акций',
                date: '12 января 2026',
              },
              {
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
                category: 'Кейсы',
                title: 'История успеха магазина FashionHub',
                date: '8 января 2026',
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 gradient-primary text-white">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-primary">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Mail',
                title: 'Email',
                content: 'hello@extrapolka.kz',
                link: 'mailto:hello@extrapolka.kz',
              },
              {
                icon: 'Phone',
                title: 'Телефон',
                content: '+7 (702) 123-45-67',
                link: 'tel:+77021234567',
              },
              {
                icon: 'MessageCircle',
                title: 'Telegram',
                content: '@extrapolka_support',
                link: 'https://t.me/extrapolka_support',
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="block"
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-primary border-2">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                  <p className="text-muted-foreground">{contact.content}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать продвижение?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Подключите ваш магазин к ExtraPolka и получите первых клиентов уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
              <Icon name="Store" className="mr-2 h-5 w-5" />
              Зарегистрировать магазин
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
              <Icon name="HelpCircle" className="mr-2 h-5 w-5" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🚀</div>
                <span className="text-white font-bold text-xl">ExtraPolka</span>
              </div>
              <p className="text-sm">
                Локальная рекламная платформа для офлайн магазинов Астаны
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">Как работает</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#for-stores" className="hover:text-white transition-colors">Для магазинов</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Юридическое</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оферта</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 ExtraPolka. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContentSections;