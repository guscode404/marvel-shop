import { useContext } from "react"
import { StyledContainer } from "./style"
import { ShopContext } from "../../providers/ShopContext"

export const InfoLayout = ({ comic }) => {
    const { formatPrice } = useContext(ShopContext);

    const addToCart = () => {
        if(localStorage.getItem("cart")) {
            const cart = JSON.parse(localStorage.getItem("cart"))
            const isComicInCart = cart.some((currentComic) => currentComic.id == comic.id);

            if(!isComicInCart) {
                localStorage.setItem("cart", JSON.stringify([...cart, comic]));
            } else {
                alert("O quadrinho já está no carrinho!");
            }
        } else {
            localStorage.setItem("cart", JSON.stringify([comic]));
        }
    }

    formatPrice(comic);

    return(
        <StyledContainer>
                <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt="Comic Cover"
                />
                <h1>{comic.title}</h1>
                <div>
                    <p>Por <span>${comic.prices[0].price}</span></p>
                    <section className="product-info">
                        <h2>Informações</h2>
                        {
                            comic.pageCount !== 0 ?
                            <h3>{comic.pageCount} páginas</h3> :
                            <h3>Contagem de páginas indisponível</h3>
                        }
                        <h3>
                            Criado por {comic.creators.items.map((creator, index) => {
                                if(index === 0) {
                                    return creator.name;
                                }
                                return ", " + creator.name;
                            })}
                        </h3>
                        <button onClick={addToCart}>
                            Adicionar ao carrinho
                        </button>
                    </section>
                </div>
        </StyledContainer>
    )
}