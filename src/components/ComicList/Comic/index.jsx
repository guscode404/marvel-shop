import { StyledListItem } from "./style"

export const Comic = ({ title }) => {
    return (
        <StyledListItem>
            <h1>{title}</h1>
        </StyledListItem>
    )
}