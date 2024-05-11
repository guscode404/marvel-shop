import { Link } from "react-router-dom"
import { StyledListItem } from "./style"
import { ShopContext } from "../../../providers/ShopContext"
import { useContext } from "react"

export const Comic = ({ comic, id }) => {
    const { formatPrice } = useContext(ShopContext)

    formatPrice(comic);

    return (
        <StyledListItem>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="Comic Cover" />
            <h2>{comic.title}</h2>
            <h3>${comic.prices[0].price}</h3>
            <Link to={`/view/${id}`}>
                <button>Detalhes</button>
            </Link>
        </StyledListItem>
    )
}