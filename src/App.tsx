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

  // Accordion verileri
  const faqItems = [
    { title: "🚀 Bu proje hangi teknolojileri kullanıyor?", content: "Bu proje React, TypeScript, Vite ve SCSS kullanılarak modern standartlara uygun şekilde geliştirilmiştir." },
    { title: "🎨 Tema desteği nasıl çalışıyor?", content: "CSS Variables ve data-theme attribute yapısı sayesinde anlık olarak gece/gündüz modu arasında geçiş yapabiliyoruz." },
    { title: "📦 Bileşen yapısı modüler mi?", content: "Evet! Her bileşen kendi klasöründe, tamamen bağımsız çalışacak şekilde tasarlandı." }
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div style={{
      padding: '40px 20px',
      textAlign: 'center',
      minHeight: '100vh',
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      transition: 'var(--transition)'
    }}>
      
     
      <div style={{ marginBottom: '30px' }}>
        <Button variant="outline" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Gece Modu' : '☀️ Gündüz Modu'}
        </Button>
      </div>

      <h1>Meydan Okuma Başladı! 🚀</h1>
      <p style={{ marginBottom: '40px', opacity: 0.8 }}>
        Tebrikler, tüm bileşenleri başarıyla bağlandı!
      </p>

     
      <div style={{ marginBottom: '50px' }}>
        <Button onClick={() => setIsModalOpen(true)}>
          Modalı Aç ✨
        </Button>
      </div>

      
      <div style={{ maxWidth: '400px', margin: '0 auto 40px auto' }}>
        <Input 
          label="İletişim" 
          placeholder="E-posta adresinizi girin..." 
        />
      </div>

     
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px', 
        maxWidth: '1000px', 
        margin: '0 auto 60px auto' 
      }}>
        <Card icon="⚡" title="Hızlı" description="Vite ile ışık hızında." />
        <Card icon="🎨" title="Modern" description="SCSS ile tam kontrol." />
        <Card icon="🛡️" title="Güçlü" description="TypeScript ile güvendesin." />
      </div>

     
      <div style={{ marginTop: '80px', paddingBottom: '60px' }}>
        <h2 style={{ marginBottom: '30px' }}>Sıkça Sorulan Sorular</h2>
        <Accordion items={faqItems} />
      </div>

      
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Başardın!"
      >
        <p>Tüm bileşenler (Button, Input, Card, Modal, Accordion) şu an hatasız çalışıyor. </p>
      </Modal>

    </div>
  );
}

export default App;