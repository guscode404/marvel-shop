import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledHeader } from "./style";
import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import marvel_icon from "../../assets/marvel_icon.jpg";

export const Header = ({ toggleModal }) => {
    return (
        <StyledHeader>
            <div>
                <Link to="/">
                    <img src={marvel_icon} alt="Marvel Icon" />
                </Link>
                <nav>
                    <button onClick={toggleModal}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                    <button>
                        <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link>
                    </button>
                </nav>
            </div>
        </StyledHeader>
    )
}