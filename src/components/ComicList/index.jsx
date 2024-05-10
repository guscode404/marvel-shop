import { Comic } from "./Comic"
import { StyledList } from "./style"

export const ComicList = ({ page, list }) => {
    return (
        <StyledList>
            {list.slice((page - 1) * 4, page * 4).map(comic => (
                <Comic
                    key={comic.id}
                    title={comic.title}
                />
            ))}
        </StyledList>
    )
}