import styled from "styled-components";

export const StyledModal = styled.div.attrs(props => ({
    className: props.className
}))`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    width: 100%:
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);

    .modal-content {
        position: relative;
        width: 80%;
        max-width: 80%;
        max-height: 80%;
        padding: 1rem 2rem 2rem 2rem;
        background: #FFFFFF;
        border-radius: 2rem;
    }

    .top-menu {
        display: flex;
        justify-content: flex-end;
        background-color: #FFFFFF;
        margin-bottom: 1rem;

        > button {
            border: none;
            background-color: #FFFFFF;
            font-size: 2rem;
        }
    }
`