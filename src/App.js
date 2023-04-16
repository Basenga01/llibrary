import './App.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {RoutersComponents} from "./Routes/RoutersComponents";
import {CardProvider} from "./Provaider/CardProvaider/CardProvaider";

function App() {
    return (

        <CardProvider>
            <div className="App">
                <Header/>
                <RoutersComponents/>
                <Footer/>
            </div>
        </CardProvider>

    );
}

export default App;
