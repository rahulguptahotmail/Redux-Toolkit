import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store/store";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";


function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="container">
     <Header/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/cart" element={<Cart/>}/>
     </Routes>
     <Footer/>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
