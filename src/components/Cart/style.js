import styled from "styled-components";

export const StyledContainer = styled.div.attrs(props => ({
    className: props.className
}))`

    > ol {
        border-radius: 1rem;
        max-height: 22rem;
        overflow-y: scroll;
        margin-bottom: 0.5rem;
    }

    .buy-button {
        background-color: #2DD638;
        border: none;
        color: #FFFFFF;
        font-size: 1.25rem;
        font-weight: 800;
        padding: 1rem;
        border-radius: 0.75rem;
        margin-top: 0.5rem;
    }

    > p {
        font-size: 1.25rem;

        > span {
            color: #2DD638;
            font-weight: 600;
        }
    }
    
    @media (min-width: 768px) {
        ol {
            max-height: 20rem;
        }
    }
`