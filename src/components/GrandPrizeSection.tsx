import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const prizeIncludes = [
  {
    icon: "Sparkles",
    title: "Биоревитализация",
    description: "Курс из 3 процедур для глубокого увлажнения"
  },
  {
    icon: "Zap",
    title: "БТА процедура",
    description: "1 процедура для коррекции мимических морщин"
  },
  {
    icon: "Calendar",
    title: "Регулярные уходы",
    description: "Ежемесячные процедуры по типу кожи"
  },
  {
    icon: "Droplet",
    title: "Пилинги и маски",
    description: "Профессиональные процедуры обновления кожи"
  },
  {
    icon: "Heart",
    title: "Консультации",
    description: "Подбор индивидуальной уходовой косметики"
  }
];

export const GrandPrizeSection = () => {
  return (
    <section id="grand-prize" className="py-20 px-4 bg-gradient-to-br from-accent/5 via-primary/5 to-blue-50/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/b62a9ded-f342-452d-9221-00dec7d9c08d/files/4a9ef6f5-9d7a-4502-b538-a6fff849cb78.jpg"
              alt="Главный приз"
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
          </div>

          <div className="space-y-8 animate-fade-in order-1 md:order-2">
            <div>
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                Главный приз
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-accent">Годовой абонемент</span> на все процедуры
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Выиграйте главный приз и наслаждайтесь профессиональным уходом весь 2025 год совершенно бесплатно!
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-xl">Что входит в абонемент:</h3>
              {prizeIncludes.map((item, index) => (
                <Card 
                  key={index}
                  className="border-l-4 border-l-accent hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] animate-shimmer border-0">
              <CardContent className="p-6 text-center">
                <p className="text-white font-bold text-lg">
                  🎁 Стоимость абонемента — более 150 000 рублей!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};