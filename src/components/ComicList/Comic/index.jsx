import { StyledListItem } from "./style"

export const Comic = ({ comic }) => {
    return (
        <StyledListItem>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="Comic Cover" />
            <h2>{comic.title}</h2>
            <h3>${comic.prices[0].price}</h3>
            <button>Detalhes</button>
        </StyledListItem>
    )
}