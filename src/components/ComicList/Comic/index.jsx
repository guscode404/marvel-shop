import { Link } from "react-router-dom";
import { StyledListItem } from "./style";
import { ShopContext } from "../../../providers/ShopContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Comic = ({ comic, id }) => {
  const { formatPrice } = useContext(ShopContext);

  formatPrice(comic);

  return (
    <StyledListItem>
      {comic.isRare ? (
        <div className="rare-marker">
          <FontAwesomeIcon icon={faStar} />
        </div>
      ) : null}
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt="Comic Cover"
      />
      <h2>{comic.title}</h2>
      <h3>${comic.prices[0].price}</h3>
      <Link to={`/view/${id}`}>
        <button>Details</button>
      </Link>
    </StyledListItem>
  );
};
