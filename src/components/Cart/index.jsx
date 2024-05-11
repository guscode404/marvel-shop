import { CartComic } from "./CartComic";
import { StyledContainer } from "./style"

export const Cart = () => {
    const cartList = JSON.parse(localStorage.getItem("cart"));

    const obtainTotalValue = () => {
        let total = 0;

        cartList.forEach((comic) => {
            total += Number(comic.prices[0].price);
        })

        return total.toFixed(2);
    }

    return(
        <StyledContainer>
            <ol>
                {cartList.map((comic) => <CartComic key={comic.id} comic={comic} />)}
            </ol>
            <p>Total: <span>${obtainTotalValue()}</span></p>
            <button className="buy-button">Efetuar compra</button>
        </StyledContainer>
    )
}