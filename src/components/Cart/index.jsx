import { useEffect, useState } from "react";
import { CartComic } from "./CartComic";
import { StyledContainer } from "./style";
import { toast } from "react-toastify";

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

    const confirmPurchase = () => {
        toast.success("Compra efetuada com sucesso!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });

        setCartList([]);
        localStorage.setItem("cart", JSON.stringify([]));
        cart = [];
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
                    <button onClick={confirmPurchase} className="buy-button">Efetuar compra</button>
                </>
                }
            </div>
            
        </StyledContainer>
    )
}