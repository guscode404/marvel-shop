import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 27.5rem;
    overflow-y: scroll;
    max-height: 80vh;
`

export const StyledContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    width: 80%;
    justify-content: space-between;

    > span {
        font-size: 1.5rem;
        font-weight: 600;
    }

    > button {
        background: none;
        border: none;

        > svg {
            font-size: 1.5rem;
        }
    }
`