import Container from './Container';
import { DarkModeProvider } from './Context/DarkModeContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
      <Container />
      </DarkModeProvider>
    </div>
  );
}

export default App;
