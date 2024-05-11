import styled from "styled-components";

export const StyledListItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0 0.5rem 0.75rem;
    border-bottom: 1px solid #00000099;

    > img {
        border-radius: 0.75rem;
        max-width: 100%;
        max-height: 100%;
    }
 
    > h2 {
        font-size: 1rem;
    }

    > h3 {
        font-size: 1rem;
        color: #2DD638;
    }

    > button {
        padding: 0.5rem 1.5rem;
        border-radius: 0.375rem;
        font-size: 1rem;
        font-weight: 500;
        color: #FFFFFF;
        background-color: #404040;
    }
`