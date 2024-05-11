import styled from "styled-components";

export const StyledContainer = styled.div.attrs(props => ({
    className: props.className
}))`

    display: flex;
    flex-direction: column;

    img {
        width: 16rem;
        border-radius: 0.5rem;
    }

    > h1 {
        font-size: 1.75rem;
        margin-top: 0.25rem;
    }

    > div {
        text-align: start;

        > p {
            font-weight: 500;
            font-size: 1.25rem;
            color: #2DD638;

            > span {
                font-weight: 800;
                font-size: 1.5rem;
            }
        }
    }

    .product-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 0.5rem;

        > h2 {
            text-align: center;
            font-size: 1.25rem;
            font-weight: 500;
        }

        > h3 {
            font-size: 1rem;
            font-weight: 400;
        }

        > button {
            background-color: #2DD638;
            border: none;
            color: #FFFFFF;
            font-size: 1.25rem;
            font-weight: 800;
            padding: 1rem;
            border-radius: 0.75rem;
            margin-top: 0.5rem;
        }
    }
`