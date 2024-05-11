import { StyledModal } from "./style"

export const Modal = ({ children, toggleModal }) => {
    return(
        <StyledModal role="dialog">
            <div>
                <button onClick={toggleModal}>X</button>
            </div>
        </StyledModal>
    )
}