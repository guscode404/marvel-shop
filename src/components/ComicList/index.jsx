import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Comic } from "./Comic"
import { StyledContainer, StyledList } from "./style"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export const ComicList = ({ page, setPage, list }) => {
    const handlePages = (button) => {
        if(button === "next" && page !== (list.length / 4)) {
            setPage(page + 1);
        } else if(button === "previous" && page !== (1)) {
            setPage(page - 1);
        } else {
            alert("Página indisponível!")
        }
    }

    return (
        <>
            <StyledList>
                {list.slice((page - 1) * 4, page * 4).map(comic => (
                    <Comic
                    key={comic.id}
                    comic={comic}
                    />
                ))}
            </StyledList>

            <StyledContainer>
                <button onClick={() => handlePages("previous")}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>Página</span>
                <button onClick={() => handlePages("next")}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </StyledContainer>
            <span>{page} de {list.length / 4}</span>
        </>
    )
}