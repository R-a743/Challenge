import { useState, useEffect } from 'react';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import './index.scss';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isModalOpen, setIsModalOpen] = useState(false);

  
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
      <p style={{ marginBottom: '30px', opacity: 0.8 }}>
        Tebrikler, tüm bileşenleri başarıyla bağladın!
      </p>

    
      <div style={{ marginBottom: '50px' }}>
        <Button 
          onClick={() => setIsModalOpen(true)}
          style={{ padding: '12px 30px' }}
        >
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
        margin: '0 auto 60px auto',
        alignItems: 'stretch' 
      }}>
        <Card 
          icon="⚡" 
          title="Hızlı Geliştirme" 
          description="Vite ile React projeleri ışık hızında." 
        />
        <Card 
          icon="🎨" 
          title="Modern Tasarım" 
          description="SCSS ve CSS Variables ile tam kontrol." 
        />
        <Card 
          icon="🛡️" 
          title="Güçlü Tip Yapısı" 
          description="TypeScript ile hataları anında yakalıyoruz." 
        />
      </div>

  
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Harika İş!"
      >
        <div style={{ textAlign: 'left' }}>
          <p>Şu an tüm bileşenlerin (Button, Input, Card, Modal) hatasız çalışıyor.</p>
          <p style={{ marginTop: '10px', color: '#4CAF50', fontWeight: 'bold' }}> Tebrikler! meydan okuma görevini başarıyla tamamladın! </p>
        </div>
      </Modal>

    </div>
  );
}

export default App;