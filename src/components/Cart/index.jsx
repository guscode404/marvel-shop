import { StyledList } from "./style"

export const Cart = () => {
    const cartList = JSON.parse(localStorage.getItem("cart"));

    return(
        <StyledList>
            {console.log(cartList)}
            {cartList.map((comic) => {
                return <h1 key={comic.id}>{comic.title}</h1>
            })}
        </StyledList>
    )
}