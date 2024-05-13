import styled from "styled-components";

export const StyledContainer = styled.div.attrs(props => ({
    className: props.className
}))`

    height: auto;
    max-height: 28rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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

    .coupon-container {
        margin-top: 0.375rem;

        span {
            color: #63C5DA;
            text-decoration: underline;
            cursor: pointer;
        }
    }

    > div > p {
        font-size: 1.5rem;

        > span {
            color: #2DD638;
            font-weight: 600;
        }
    }
    
    @media (min-width: 768px) {
        justify-content: space-evenly;
        width: auto;

        ol {
            max-height: 40vh;
        }
    }
`