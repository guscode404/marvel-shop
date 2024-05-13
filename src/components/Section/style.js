import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: #FFFFFF;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 1px 8px #FFFFFF99;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.25rem;
    width: 100%;
    min-height: 100%;
    max-height: 200%;

    @media (min-width: 768px) {
        max-height: 5%;
        max-width: 100%;
        display: flex;
    }
`