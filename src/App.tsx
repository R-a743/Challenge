import { useState, useEffect } from 'react';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import Accordion from './components/Accordion/Accordion';
import './index.scss';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Tebrikler! Lansman listesine eklendiniz. ");
  };

  const faqItems = [
    { title: "Sistem nasıl çalışır?", content: "Modüler yapımız sayesinde tüm bileşenler birbiriyle tam uyumlu çalışır." },
    { title: "Teknik destek veriyor musunuz?", content: "Evet, profesyonel paketimizde 7/24 canlı destek mevcuttur." },
    { title: "İade mümkün mü?", content: "30 gün içinde koşulsuz iade garantisi sunuyoruz." }
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app-container">
   
      <nav style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end', maxWidth: '1200px', margin: '0 auto' }}>
        <Button variant="outline" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? '🌙 Karanlık Mod' : '☀️ Aydınlık Mod'}
        </Button>
      </nav>

     
      <header style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '800' }}>
          Geleceğin Teknolojisi ✨
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
          İş akışınızı hızlandıran, modern ve kullanıcı dostu çözümümüzle tanışın. Sınırları birlikte zorlayalım.
        </p>
        <Button onClick={() => setIsModalOpen(true)} style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
          Hemen Keşfet 
        </Button>
      </header>

     
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <Card icon="🛡️" title="Uçtan Uca Güvenlik" description="Verileriniz askeri düzeyde şifreleme ile korunur." />
          <Card icon="⚡" title="Yüksek Performans" description="Vite ve React gücüyle saniyeler içinde sonuç alın." />
          <Card icon="☁️" title="Sınırsız Bulut" description="Tüm dosyalarınıza her cihazdan anında erişin." />
        </div>
      </section>

      
      <section style={{ padding: '80px 20px', backgroundColor: 'rgba(128, 128, 128, 0.05)' }}>
        <h2 style={{ marginBottom: '40px', fontSize: '2.2rem' }}>Planlarımızı Keşfedin</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
          <div style={{ padding: '40px', border: '1px solid var(--border-color)', borderRadius: '20px', width: '280px', background: 'var(--card-bg)' }}>
            <h3>Standart</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>0₺</p>
            <Button variant="outline" style={{ width: '100%' }}>Seç</Button>
          </div>
          <div style={{ padding: '40px', border: '2px solid var(--primary-color)', borderRadius: '20px', width: '280px', background: 'var(--card-bg)' }}>
            <h3>Premium</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>199₺</p>
            <Button style={{ width: '100%' }}>Hemen Al</Button>
          </div>
        </div>
      </section>

    
      <section style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '40px' }}>Sıkça Sorulan Sorular</h2>
        <Accordion items={faqItems} />
      </section>

      <section style={{ padding: '80px 20px' }}>
        <h2>İletişime Geçin</h2>
        <form onSubmit={handleFormSubmit} style={{ maxWidth: '450px', margin: '30px auto' }}>
          <Input label="Adınız" placeholder="Ad Soyad" required />
          <Input label="E-posta" type="email" placeholder="mail@ornek.com" required />
          <Button type="submit" style={{ width: '100%', marginTop: '20px' }}>Kaydol</Button>
        </form>
      </section>

      <footer style={{ padding: '40px', opacity: 0.7, borderTop: '1px solid var(--border-color)' }}>
        <p>© 2026  UI Challenge. Tüm hakları saklıdır.</p>
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Hoşgeldin!">
        <p>Challenge kapsamında istenen tüm UI bileşenleri ve sayfalar başarıyla oluşturuldu. Projeyi incelediğiniz için teşekkürler!</p>
      </Modal>
    </div>
  );
}

export default App;