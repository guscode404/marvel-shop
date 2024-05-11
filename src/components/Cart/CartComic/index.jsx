import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StyledCartComic } from "./style"
import { faX } from "@fortawesome/free-solid-svg-icons"

export const CartComic = ({ comic }) => {
    return (
        <StyledCartComic>
            <div>
                <button><FontAwesomeIcon icon={faX} /></button>
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="Comic Cover" />
                <h2>{comic.title}</h2>
                <h3>{comic.prices[0].price}</h3>
            </div>
        </StyledCartComic>
    )
}