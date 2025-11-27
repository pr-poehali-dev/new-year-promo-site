import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const gallery = [
  {
    image: "https://cdn.poehali.dev/projects/b62a9ded-f342-452d-9221-00dec7d9c08d/files/eeded67f-9de2-47c5-86cb-6643b76e6db7.jpg",
    title: "Чистка лица",
    description: "Глубокое очищение кожи"
  },
  {
    image: "https://cdn.poehali.dev/projects/b62a9ded-f342-452d-9221-00dec7d9c08d/files/664abe97-2d24-4e61-b6ed-54c102eb8f3e.jpg",
    title: "Мезотерапия",
    description: "Омоложение и увлажнение"
  },
  {
    image: "https://cdn.poehali.dev/projects/b62a9ded-f342-452d-9221-00dec7d9c08d/files/5ac61bed-981e-4a86-b83f-039ff4ee55d2.jpg",
    title: "Пилинг",
    description: "Обновление кожи"
  }
];

export const BeforeAfterGallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-white to-blue-50/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge className="bg-accent/10 text-accent border-accent/20">
            Наши работы
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">До и После</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Результаты наших процедур говорят сами за себя
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};