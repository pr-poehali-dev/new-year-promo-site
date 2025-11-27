import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

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

export const PrizesAndServices = () => {
  return (
    <>
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
                    {prize.highlight && (
                      <Badge className="bg-accent text-white border-0">
                        {prize.badge}
                      </Badge>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{prize.title}</h3>
                    <p className="text-muted-foreground">{prize.description}</p>
                  </div>
                  {!prize.highlight && (
                    <Badge variant="outline" className="border-primary/20">
                      {prize.badge}
                    </Badge>
                  )}
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
              Услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Наши процедуры</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр услуг эстетической косметологии для вашей красоты и здоровья
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-fade-in hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
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
    </>
  );
};
