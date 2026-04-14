import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import './index.scss';

function App() {
  const [theme, setTheme] = useState('light');

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
      <p style={{ marginBottom: '40px' }}>Tüm bileşenler artık bir arada ve hizalı.</p>

    
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
          title="Hızlı Performans" 
          description="Vite sayesinde saniyeler içinde geliştirme yapmaya başla." 
        />
        <Card 
          icon="✨" 
          title="Şık Tasarım" 
          description="SCSS modülleri ve modern CSS teknikleri ile göz alıcı bir görünüm sağlıyoruz. Bu kartın açıklaması uzun olsa bile diğerleriyle boyu aynı kalacak!" 
        />
        <Card 
          icon="📱" 
          title="Responsive" 
          description="Her cihazda, her ekranda kusursuz bir kullanıcı deneyimi." 
        />
      </div>

    
      <div style={{ maxWidth: '400px', margin: '0 auto', border: '1px solid #ddd', padding: '30px', borderRadius: '15px' }}>
        <Input label="Bize Katıl" placeholder="E-posta adresini gir..." />
        <Button style={{ width: '100%', marginTop: '10px' }}>Abone Ol</Button>
      </div>

    </div>
  );
}

export default App;