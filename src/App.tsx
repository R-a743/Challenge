import Button from './components/Button/Button';

function App() {
  return (
    <div style={{ 
      padding: '100px', 
      textAlign: 'center', 
      backgroundColor: '#f5f5f5', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ color: '#333', marginBottom: '30px' }}>
challenge
      </h1>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Button variant="primary">Ana Buton</Button>
        <Button variant="outline">Vazgeç</Button>
      </div>
      
      <p style={{ marginTop: '20px', color: '#666' }}>
        (Reusable Component) 
      </p>
    </div>
  );
}

export default App;