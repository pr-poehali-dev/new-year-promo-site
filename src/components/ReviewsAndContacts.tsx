import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Анна Соколова",
    text: "Лана - настоящий профессионал! После курса биоревитализации кожа стала упругой и сияющей. Очень внимательное отношение к каждому клиенту.",
    rating: 5,
    procedure: "Биоревитализация"
  },
  {
    name: "Мария Петрова",
    text: "Делаю чистки лица уже полгода. Результат превзошёл все ожидания! Кожа чистая, поры сузились. Лана всегда подскажет и объяснит каждый этап.",
    rating: 5,
    procedure: "Чистка лица"
  },
  {
    name: "Елена Кузнецова",
    text: "Прекрасный косметолог с золотыми руками! Массаж лица - это просто волшебство. Ушла отёчность, овал лица подтянулся. Рекомендую!",
    rating: 5,
    procedure: "Массаж лица"
  },
  {
    name: "Ольга Васильева",
    text: "Очень довольна результатом мезотерапии. Лана индивидуально подобрала препарат именно для моей кожи. Профессионализм на высшем уровне!",
    rating: 5,
    procedure: "Мезотерапия"
  }
];

interface ReviewsAndContactsProps {
  scrollToSection: (id: string) => void;
}

export const ReviewsAndContacts = ({ scrollToSection }: ReviewsAndContactsProps) => {
  return (
    <>
      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-blue-50/30 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Отзывы клиентов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Что говорят о нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы ценим доверие наших клиентов и стремимся превзойти ожидания
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.procedure}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            ))}
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
                    <a href="tel:+79181352147" className="text-lg hover:text-primary transition-colors">
                      +7 (918) 135-21-47
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Send" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Telegram</p>
                    <a href="https://t.me/lana_kosmetolog_krd" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">
                      @lana_kosmetolog_krd
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" className="text-[#25D366]" size={24} />
                  </div>
                  <div>
                    <p className="font-medium mb-1">WhatsApp</p>
                    <a href="https://wa.me/79181352147" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">
                      +7 (918) 135-21-47
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
                      г. Краснодар, ул. Рылеева, д. 179/1
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

              <div className="grid grid-cols-2 gap-4">
                <a href="https://t.me/lana_kosmetolog_krd" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                    <Icon name="Send" className="mr-2" size={20} />
                    Telegram
                  </Button>
                </a>
                <a href="https://wa.me/79181352147" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    WhatsApp
                  </Button>
                </a>
              </div>
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
                <span className="font-bold text-xl">Мой косметолог</span>
              </div>
              <p className="text-secondary-foreground/80">
                Эстетик-студио Ланы Рудневой. Профессиональный уход и забота о вашей красоте.
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
            <p>© 2025 Мой косметолог. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
