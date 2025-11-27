import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export const PromoSection = () => {
  return (
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
  );
};
