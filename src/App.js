import './App.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {RoutersComponents} from "./Routes/RoutersComponents";

function App() {
    return (
        <div className="App">
            <Header/>
            <RoutersComponents/>
            <Footer/>
        </div>
    );
}

export default App;
