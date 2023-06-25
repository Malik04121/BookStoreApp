import { Cart } from "../pages/cart";
import { Checkout } from "../pages/checkout";
import { Details } from "../pages/detail";
import { Home } from "../pages/home";
import {Routes,Route} from "react-router-dom"

function MainRoute(){


    return(
        <>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/details" element={<Details/>} />
            <Route path="/checkout" element={<Checkout/>} />
         </Routes>
        </>
    )
}
export {MainRoute}