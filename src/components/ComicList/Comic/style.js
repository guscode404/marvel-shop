import styled from "styled-components";

export const StyledListItem = styled.li.attrs(props => ({
    className: props.className
}))`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0 0.5rem 0.75rem;
    border-bottom: 1px solid #00000099;
    position: relative;

    .rare-marker {
        position: absolute;
        font-size: 2rem;
        color: #FFFF00;
        border: 1px solid #000000;
        background-color: #00000066;
        border-radius: 2rem;
        padding: 0.5rem;
        top: 0.25rem;
        left: 0.75rem;
    }

    > img {
        border-radius: 0.75rem;
        max-width: 100%;
        max-height: 100%;
    }
 
    > h2 {
        font-size: 1.5rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    > h3 {
        font-size: 1.5rem;
        color: #2DD638;
    }

    > a > button {
        padding: 0.5rem 1.5rem;
        border-radius: 0.375rem;
        font-size: 1.5rem;
        font-weight: 500;
        background-color: #404040;
        color: #FFFFFF;
    }

    @media (min-width: 768px) {
        width: 45%;
        border: none;
        justify-content: center;
        align-items: center;

        .rare-marker {
            top: auto;
            left: auto;
        }

        > img {
            height: 12rem;
        }

        > h2 {
            font-size: 1.25rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
    }
`