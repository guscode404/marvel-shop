import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StyledHeader } from "./style"
import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons"

export const Header = () => {
    return (
        <StyledHeader>
            <div>
                <img src="./src/assets/marvel-icon.jpg" alt="Marvel Icon" />
                <nav>
                    <button><FontAwesomeIcon icon={faCartShopping} /></button>
                    <button><FontAwesomeIcon icon={faHouse} /></button>
                </nav>
            </div>
        </StyledHeader>
    )
}