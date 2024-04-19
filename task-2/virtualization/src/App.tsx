import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';

import './styles/app.css';

function App() {
    return (
        <div className="app">
            <Header />
            <Home title="Виртуализация" />
            <Footer />
        </div>
    );
}

export default App;
