import styled from "styled-components";

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    background-color: #FFFFFF;
    width: 100%;
    box-shadow: 0 1px 8px #FFFFFF99;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    
    > div {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        > img {
            width: 40%;
        }

        > nav {
            display: flex;
            flex-direction: row;
            gap: 1rem;

            > button {
                background: none;
                border: none;
            }
        }
    }

    svg {
        color: #F0141E;
        font-size: 2rem;
    }
`