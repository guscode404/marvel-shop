import { useEffect, useState } from "react";
import { CartComic } from "./CartComic";
import { StyledContainer } from "./style"

export const Cart = () => {
    const [cartList, setCartList] = useState([])
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    let cart;

    if(storedCart) {
        cart = storedCart;
    } else {
        cart = [];
    }

    const obtainTotalValue = () => {
        let total = 0;

        cartList.forEach((comic) => {
            total += Number(comic.prices[0].price);
        })

        return total.toFixed(2);
    }

    useEffect(() => {
        if(cart) {
            setCartList(cart);
        }
    }, [])

    return(
        <StyledContainer>
            <ol>
                {cartList.map(comic => 
                    <CartComic
                        key={comic.id}
                        comic={comic} 
                        cartList={cartList}
                        setCartList={setCartList}
                    />
                )}
            </ol>

            <div>
                {cart.length === 0 ?
                <p>Seu carrinho está vazio!</p> :
                <>
                    <p>Total: <span>${obtainTotalValue()}</span></p>
                    <button className="buy-button">Efetuar compra</button>
                </>
                }
            </div>
            
        </StyledContainer>
    )
}