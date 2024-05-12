import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StyledModal } from "./style"
import { faX } from "@fortawesome/free-solid-svg-icons"

export const Modal = ({ children, toggleModal, modalTitle }) => {
    return(
        <StyledModal role="dialog">
            <div className="modal-content">
                <div className="top-menu">
                    <div></div>
                    <h2>{modalTitle}</h2>
                    <button onClick={toggleModal}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>
                {children}
            </div>
        </StyledModal>
    )
}