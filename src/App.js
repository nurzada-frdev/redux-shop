import './App.css';
import {Routes,Route} from "react-router-dom";
import Product from "./pages/Product/Product";
import Basket from "./pages/Basket/Basket";
import Favorite from "./pages/favorite/Favorite";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
        <Header/>
   <Routes>
       <Route>
           <Route path={'/'} element={<Product/>}/>
               <Route path={'/basket'} element={<Basket/>}/>
                   <Route path={'/favorite'} element={<Favorite/>}/>
       </Route>
   </Routes>

    </div>
  );
}

export default App;
