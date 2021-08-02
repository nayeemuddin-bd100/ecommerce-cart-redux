import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import GlobalProvider from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <Header />
            <Cart />
        </GlobalProvider>
    );
}

export default App;
