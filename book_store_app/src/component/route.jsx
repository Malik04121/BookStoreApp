import { Cart } from "../pages/cart";
import { Checkout } from "../pages/checkout";
import { Details } from "../pages/detail";
import { Home } from "../pages/home";
import {Routes,Route} from "react-router-dom"

function MainRoute(){


    return(
        <>
         <Routes>
            <Route path="/" elements={<Home/>} />
            <Route path="/cart" elements={<Cart/>} />
            <Route path="/details" elements={<Details/>} />
            <Route path="/checkout" elements={<Checkout/>} />
         </Routes>
        </>
    )
}
export {MainRoute}