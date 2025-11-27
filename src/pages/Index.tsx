import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { HeroSection } from "@/components/HeroSection";
import { PromoSection } from "@/components/PromoSection";
import { PrizesAndServices } from "@/components/PrizesAndServices";
import { GrandPrizeSection } from "@/components/GrandPrizeSection";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { ReviewsAndContacts } from "@/components/ReviewsAndContacts";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={24} />
              <span className="font-bold text-xl">Мой косметолог</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('promo')} className="text-sm hover:text-primary transition-colors">
                Акция
              </button>
              <button onClick={() => scrollToSection('prizes')} className="text-sm hover:text-primary transition-colors">
                Призы
              </button>
              <button onClick={() => scrollToSection('grand-prize')} className="text-sm hover:text-primary transition-colors">
                Главный приз
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm hover:text-primary transition-colors">
                Работы
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">
                Контакты
              </button>
              <a href="https://t.me/lana_kosmetolog_krd" target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent hover:bg-accent/90">Записаться</Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection scrollToSection={scrollToSection} />
      <PromoSection />
      <PrizesAndServices />
      <GrandPrizeSection />
      <BeforeAfterGallery />
      <ReviewsAndContacts scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;