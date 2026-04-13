import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
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
      padding: '100px', 
      textAlign: 'center', 
      minHeight: '100vh',
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      transition: 'var(--transition)'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <Button variant="outline" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Gece Modu' : '☀️ Gündüz Modu'}
        </Button>
      </div>

      <h1>Meydan Okuma Başladı! ☄️</h1>
      <p>(Bu bileşen artık Dark Mode destekliyor)</p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="primary">Ürünü İncele</Button>
        <Button variant="outline">Sepete Ekle</Button>
      </div>
    </div>
  );
}

export default App;