import logo from './logo.svg';
import './App.css';

const openNewTab = (address) => {
    window.open(address);
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    test <code>src/App.js</code> test test test
                </p>
                <a href='https://j2-fitness.netlify.app/'>let's go netlify</a>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
