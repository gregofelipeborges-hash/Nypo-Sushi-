import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { MenuCatalog } from './components/MenuCatalog';
import { GallerySection } from './components/GallerySection';
import { FaqAndContact } from './components/FaqAndContact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { LegalModal, LegalTab } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('all');
  const [legalTab, setLegalTab] = useState<LegalTab | null>(null);

  const handleJumpToCategory = (slug: string) => {
    setSelectedCategorySlug(slug);
    const el = document.getElementById('cardapio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#09090B] text-[#F5F3EE] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <BrandStory />
          <MenuCatalog
            selectedCategorySlug={selectedCategorySlug}
            onSelectCategorySlug={setSelectedCategorySlug}
          />
          <GallerySection onJumpToCategory={handleJumpToCategory} />
          <FaqAndContact />
        </main>
        <Footer onOpenLegal={setLegalTab} />
        <CartDrawer />
        <CookieBanner onOpenLegal={setLegalTab} />
        <LegalModal
          activeTab={legalTab}
          onSelectTab={setLegalTab}
          onClose={() => setLegalTab(null)}
        />
      </div>
    </CartProvider>
  );
}
