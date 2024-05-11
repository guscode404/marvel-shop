import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const StyledContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    width: 80%;
    justify-content: space-between;

    > span {
        font-size: 1.5rem;
    }

    > button {
        background: none;
        border: none;

        > svg {
            font-size: 2rem;
        }
    }
`