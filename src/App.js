import React from 'react';
import './App.css';

import NavBar from './components/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Routes,
  BrowserRouter
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductsScreen';
import NoScreen from './screens/NoScreen';
import FooterBar from './components/FooterBar';

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
                    <Route path="/products" element={<ProductScreen/>}/>
                    <Route path="*" element={<NoScreen/>}/>
                  </Routes>
                </BrowserRouter>

                <FooterBar/>
            </div>
        );
    }
}

export default App;
