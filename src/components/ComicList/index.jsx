import { Comic } from "./Comic"
import { StyledContainer, StyledList } from "./style"

export const ComicList = ({ page, setPage, list }) => {
    const handlePages = (button) => {
        if(button === "next" && page !== (5)) {
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
                        title={comic.title}
                    />
                ))}
            </StyledList>
            <StyledContainer>
                <button onClick={() => handlePages("previous")}>Previous</button>
                <button onClick={() => handlePages("next")}>Next</button>
            </StyledContainer>
        </>
    )
}