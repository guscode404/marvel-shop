import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledCartComic } from "./style";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const CartComic = ({ comic, cartList, setCartList, discount }) => {
  const removeFromCart = () => {
    const list = cartList.filter(
      (currentComic) => currentComic.id !== comic.id
    );
    localStorage.setItem("cart", JSON.stringify(list));
    setCartList(JSON.parse(localStorage.getItem("cart")));
  };

  return (
    <StyledCartComic>
      <div>
        <button onClick={removeFromCart}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt="Comic Cover"
        />
        <h2>{comic.title}</h2>
        <h3>${comic.prices[0].price}</h3>
        {discount ? <span>(-{discount}%)</span> : null}
        {comic.isRare ? <p className="rare">Rare Product</p> : null}
      </div>
    </StyledCartComic>
  );
};
