import React from 'react';
import './App.css';

import NavBar from './components/NavBar';

import {
  Route,
  useParams,
  Routes,
  BrowserRouter
} from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import NoScreen from './screens/NoScreen';
import FooterBar from './components/FooterBar';
import SingleProductScreen from './screens/SingleProductScreen';

const ProductIdWrapper = () => {
  const { productId } = useParams();
  return <SingleProductScreen productId={productId} />;
};

class App extends React.Component
{
    constructor() {
        super()
    }

    render()
    {
        return (
            <div>
                <NavBar/>

                <BrowserRouter>
                  <Routes>
                    <Route exact path="/" element={<HomeScreen/>}/>
                    <Route path="/products" element={<ProductsScreen/>}/>
                    <Route path="/products/:productId" element={<ProductIdWrapper/>}/>
                    <Route path="*" element={<NoScreen/>}/>
                  </Routes>
                </BrowserRouter>
                
                <FooterBar/>
            </div>
        );
    }
}

export default App;
