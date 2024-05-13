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

    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        width: 100%;
        font-size: 1.25rem;

        > p {
            font-size: 1rem;
        }

        span {
            color: #63C5DA;
            text-decoration: underline;
            cursor: pointer;
        }

        > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.25rem;
            margin-top: 0.25rem;


            > input {
                border-radius: 0.5rem;
                padding: 0 0.25rem;
            }

            > button {
                font-size: 1rem;
                border-radius: 0.5rem;
                padding: 0.25rem 0.5rem;
                background-color: #2DD638;
                color: #FFFFFF;
                border: none;
                cursor: pointer;
            }
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

        .coupon-container > div {
            flex-direction: row;

            > button {
                font-size: 0.75rem;
                padding: 0.25rem;
            }
        }
    }
`