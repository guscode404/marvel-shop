import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StyledCartComic } from "./style"
import { faX } from "@fortawesome/free-solid-svg-icons"

export const CartComic = ({ comic, cartList, setCartList }) => {
    const removeFromCart = () => {
        const list = cartList;
        const index = cartList.findIndex((currentComic) => {
            return currentComic.id === comic.id;
        })

        console.log(index);
        list.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartList));
        setCartList(JSON.parse(localStorage.getItem("cart")));
    }

    return (
        <StyledCartComic>
            <div>
                <button onClick={removeFromCart}><FontAwesomeIcon icon={faX} /></button>
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="Comic Cover" />
                <h2>{comic.title}</h2>
                <h3>{comic.prices[0].price}</h3>
            </div>
        </StyledCartComic>
    )
}