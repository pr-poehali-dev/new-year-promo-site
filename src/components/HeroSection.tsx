import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
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
                <span className="text-sm font-medium">Опытный косметолог</span>
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
  );
};
