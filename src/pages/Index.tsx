import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: "Sparkles",
      title: "Чистка лица",
      description: "Глубокое очищение и обновление кожи"
    },
    {
      icon: "Zap",
      title: "Мезотерапия",
      description: "Инъекции красоты для молодости кожи"
    },
    {
      icon: "Heart",
      title: "Биоревитализация",
      description: "Увлажнение и омоложение изнутри"
    },
    {
      icon: "Star",
      title: "Пилинги",
      description: "Обновление и сияние кожи"
    },
    {
      icon: "Smile",
      title: "Массаж лица",
      description: "Лифтинг и расслабление"
    },
    {
      icon: "Sun",
      title: "Уход за кожей",
      description: "Индивидуальные программы красоты"
    }
  ];

  const prizes = [
    {
      icon: "Gift",
      title: "Бонусная процедура",
      description: "Дополнительный уход в подарок",
      badge: "Гарантированно"
    },
    {
      icon: "Percent",
      title: "Персональная скидка",
      description: "До 30% на услуги в 2025 году",
      badge: "Гарантированно"
    },
    {
      icon: "CreditCard",
      title: "Подарочный сертификат",
      description: "На сумму до 5000 рублей",
      badge: "Гарантированно"
    },
    {
      icon: "Trophy",
      title: "Годовой абонемент",
      description: "12 месяцев процедур бесплатно!",
      badge: "Главный приз",
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={24} />
              <span className="font-bold text-xl">Aesthetics</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('promo')} className="text-sm hover:text-primary transition-colors">
                Акция
              </button>
              <button onClick={() => scrollToSection('prizes')} className="text-sm hover:text-primary transition-colors">
                Призы
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">
                Контакты
              </button>
              <Button className="bg-accent hover:bg-accent/90">Записаться</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                Новогодняя акция
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Волшебство красоты в <span className="text-primary">декабре</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Запишитесь на любую процедуру в декабре и гарантированно получите подарок. А главный приз — годовой абонемент совершенно бесплатно!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-lg"
                  onClick={() => scrollToSection('promo')}
                >
                  <Icon name="Gift" className="mr-2" size={20} />
                  Узнать подробнее
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('contacts')}
                >
                  Записаться сейчас
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="text-sm font-medium">15+ лет опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={24} />
                  <span className="text-sm font-medium">2000+ клиентов</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/b62a9ded-f342-452d-9221-00dec7d9c08d/files/62311f54-17cf-4d34-ba91-43984d4d7214.jpg"
                alt="Косметология"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="promo" className="py-20 px-4 bg-gradient-to-br from-accent/5 via-primary/5 to-blue-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Акция декабря
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Каждый получит подарок</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Запишитесь на процедуру в декабре — гарантированный подарок для каждого клиента и шанс выиграть главный приз
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 animate-fade-in hover:shadow-xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Calendar" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">1. Запишитесь</h3>
                <p className="text-muted-foreground">
                  Выберите любую процедуру и запишитесь на удобное время в декабре
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 animate-fade-in hover:shadow-xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Sparkles" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold">2. Получите подарок</h3>
                <p className="text-muted-foreground">
                  Каждый клиент гарантированно получает ценный подарок после процедуры
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 animate-fade-in hover:shadow-xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Trophy" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">3. Участвуйте в розыгрыше</h3>
                <p className="text-muted-foreground">
                  Автоматически участвуйте в розыгрыше главного приза — годового абонемента
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer border-0">
              <CardContent className="p-8">
                <p className="text-white text-lg font-medium">
                  ⏰ Акция действует только в декабре 2025! Успейте записаться и получить свой подарок
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prizes" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Призы и подарки
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Что вас ждет?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый клиент получит один из ценных подарков, а один счастливчик выиграет главный приз
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prizes.map((prize, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl animate-fade-in ${
                  prize.highlight 
                    ? 'border-2 border-accent bg-gradient-to-br from-accent/5 to-primary/5' 
                    : 'hover:border-primary'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      prize.highlight ? 'bg-accent/20' : 'bg-primary/10'
                    }`}>
                      <Icon 
                        name={prize.icon} 
                        className={prize.highlight ? 'text-accent' : 'text-primary'} 
                        size={28} 
                      />
                    </div>
                    <Badge className={
                      prize.highlight 
                        ? 'bg-accent text-white' 
                        : 'bg-primary/10 text-primary border-primary/20'
                    }>
                      {prize.badge}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{prize.title}</h3>
                    <p className="text-muted-foreground text-sm">{prize.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-blue-50/30 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Наши услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Процедуры для вашей красоты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональные услуги эстетической косметологии от опытных специалистов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 relative animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/b62a9ded-f342-452d-9221-00dec7d9c08d/files/06a61e41-f5ec-4be9-a506-6c195948281a.jpg"
              alt="Кабинет косметологии"
              className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                  Контакты
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Запишитесь прямо сейчас</h2>
                <p className="text-lg text-muted-foreground">
                  Свяжитесь с нами удобным способом и забронируйте процедуру в декабре
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Телефон</p>
                    <a href="tel:+79991234567" className="text-lg hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:info@aesthetics.ru" className="text-lg hover:text-primary transition-colors">
                      info@aesthetics.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Адрес</p>
                    <p className="text-lg text-muted-foreground">
                      г. Москва, ул. Примерная, д. 1
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Режим работы</p>
                    <p className="text-lg text-muted-foreground">
                      Пн-Сб: 10:00 - 20:00<br />
                      Вс: 11:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-lg">
                <Icon name="Send" className="mr-2" size={20} />
                Записаться на процедуру
              </Button>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/b62a9ded-f342-452d-9221-00dec7d9c08d/files/15676510-9823-4910-81ab-6c00fae4e5a4.jpg"
                alt="Подарок"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <span className="font-bold text-xl">Aesthetics</span>
              </div>
              <p className="text-secondary-foreground/80">
                Кабинет эстетической косметологии. Профессиональный уход и забота о вашей красоте.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('promo')} className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Акция
                </button>
                <button onClick={() => scrollToSection('prizes')} className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Призы
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('contacts')} className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Контакты
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
            <p>© 2025 Aesthetics. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;