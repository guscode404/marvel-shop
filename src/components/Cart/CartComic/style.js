import styled from "styled-components";

export const StyledCartComic = styled.li`
    border-bottom: 1px solid #00000099;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        
        > button {
            position: relative;
            padding: 0;
            left: 40%;
            border: none;
            background-color: #FFFFFF;
        }

        > img {
            border-radius: 0.25rem;
            width: 40%;
            height: 40%;
        }

        > h2 {
            margin-top: 0.5rem;
            font-weight: 400;
            font-size: 1.5rem;
        }

        > h3 {
            font-size: 1rem;
        }

        .rare {
            color: #FFD700;
            text-shadow: -1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;
        }
    }

    @media (min-width: 768px) {

        > div {
            > img {
                width: default;
                height: default;
            }
        }
    }
`