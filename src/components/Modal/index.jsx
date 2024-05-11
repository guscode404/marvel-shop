import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StyledModal } from "./style"
import { faX } from "@fortawesome/free-solid-svg-icons"

export const Modal = ({ children, toggleModal }) => {
    return(
        <StyledModal role="dialog">
            <div className="modal-content">
                <div className="top-menu">
                    <button onClick={toggleModal}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>
                {children}
            </div>
        </StyledModal>
    )
}