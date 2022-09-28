import './App.css';
import Header from './Components/header/header';
import Home from './Components/Home/home';
import CategoryHolder from './Components/Home/Category/categoryHolder';
import ProductHolder from './Components/Products/productHolder';
import Product from './Components/Products/product';
import {Routes,Route,Link} from 'react-router-dom';
import Description from './Components/ProductDescription/description';
function App() {
    return (
        <div className='app'>
            <div className='container'>

            <Header></Header>
            <Home></Home>
            <CategoryHolder></CategoryHolder>
            <Routes>
                
                <Route path='/products/:category' element={<ProductHolder></ProductHolder>}/>
                <Route path='/product' element={<Product></Product>}/>
                <Route path='categorydetails/:category/:id' element={<Description></Description>} ></Route>
            </Routes>
            </div>
        </div>
    )

}

export default App;
