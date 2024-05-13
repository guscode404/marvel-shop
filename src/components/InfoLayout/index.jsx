import { useContext } from "react";
import { StyledContainer } from "./style";
import { ShopContext } from "../../providers/ShopContext";
import { toast } from "react-toastify";

export const InfoLayout = ({ comic }) => {
    const { formatPrice } = useContext(ShopContext);

    const addToCart = () => {
        if(localStorage.getItem("cart")) {
            const cart = JSON.parse(localStorage.getItem("cart"))
            const isComicInCart = cart.some((currentComic) => currentComic.id == comic.id);

            if(!isComicInCart) {
                localStorage.setItem("cart", JSON.stringify([...cart, comic]));
            } else {
                toast.error("O quadrinho já está no carrinho!", {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
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
                {comic.isRare ?
                    <h2 className="rare">Produto Raro</h2> :
                    null 
                }
                <div>
                    <p>Por <span>${comic.prices[0].price}</span></p>
                    <section className="product-info">
                        <h2>Informações</h2>

                        {comic.description !== "" ?
                            <p>{comic.description}</p> :
                            <p>Descrição indisponível</p>
                        }
                        
                        {comic.pageCount !== 0 ?
                            <h3><span>{comic.pageCount} páginas</span></h3> :
                            <h3>Contagem de páginas indisponível</h3>
                        }

                        {comic.creators.items[0] !== undefined ?
                            <h3>
                                <span>Criado por:</span> {
                                    comic.creators.items.map((creator, index) => {
                                    if(index === 0) {
                                        return creator.name;
                                    }
                                    return ", " + creator.name;
                                    })
                                }
                            </h3> :
                            <h3>Criador indisponível</h3>
                        }
                        
                        <button onClick={addToCart}>
                            Adicionar ao carrinho
                        </button>
                    </section>
                </div>
        </StyledContainer>
    )
}