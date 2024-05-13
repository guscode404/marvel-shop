import { useEffect, useState } from "react";
import { CartComic } from "./CartComic";
import { StyledContainer } from "./style";
import { toast } from "react-toastify";
import { coupons } from "../../mocks/coupons";

export const Cart = () => {
    const [cartList, setCartList] = useState([])
    const [showCoupon, setShowCoupon] = useState(false);
    const [inputCoupon, setInputCoupon] = useState("");
    const [usedCoupon, setUsedCoupon] = useState(false);
    const [couponDetails, setCouponDetails] = useState({});
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    let cart;

    if(storedCart) {
        cart = storedCart;
    } else {
        cart = [];
    }

    const obtainTotalValue = () => {
        let total = 0;

        cartList.forEach((comic) => {
            total += Number(comic.prices[0].price);
        })

        return total.toFixed(2);
    }

    const confirmPurchase = () => {
        toast.success("Purchased successfully!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });

        setCartList([]);
        localStorage.setItem("cart", JSON.stringify([]));
        cart = [];
    }

    const validateCoupon = (couponName) => {
        const index = coupons.findIndex((coupon) => coupon.name === couponName);

        if(index !== -1) {
            setCouponDetails(coupons[index]);
            setUsedCoupon(true);
            setInputCoupon("");

            couponDetails.type === "rare" ? couponDetails.isRare = true : couponDetails.isRare = false;

            toast.success("Coupon applied successfully!", {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        } 
    }

    const toggleShowCoupon = () => {
        if(showCoupon) {
            setShowCoupon(false);
            setInputCoupon("");
        } else {
            setShowCoupon(true);
        }
    }

    const toggleUsedCoupon = () => {
        if(usedCoupon) {
            setUsedCoupon(false)
            setCouponDetails({});
            setCartList(JSON.parse(localStorage.getItem("cart")));
        } else {
            setUsedCoupon(true)
        }
    };

    useEffect(() => {
        if(cart) {
            setCartList(cart);
        }
    }, [])

    return(
        <StyledContainer>
            <ol>
                {cartList.map(comic => {
                    if(couponDetails.discount) {
                        const discountedPrice = (comic.prices[0].price / 100) * couponDetails.discount;

                        if(couponDetails.isRare && comic.isRare) {
                            comic.prices[0].price = (comic.prices[0].price - discountedPrice).toFixed(2);
                        } else if(!couponDetails.isRare && !comic.isRare) {
                            comic.prices[0].price = (comic.prices[0].price - discountedPrice).toFixed(2);
                        }
                    }

                    return <CartComic
                        key={comic.id}
                        comic={comic} 
                        cartList={cartList}
                        setCartList={setCartList}
                    />
                })}
            </ol>
            <div>
                {cart.length === 0 ?
                <p>Your cart is empty!</p> :
                <>
                    <p>Total: <span>${obtainTotalValue()}</span></p>
                    <button onClick={confirmPurchase} className="buy-button">Purchase</button>
                    {usedCoupon ?
                        <div className="coupon-container">
                            <p>
                                Coupon applied: {couponDetails.discount}% discount
                                on {couponDetails.type} comics. <span onClick={toggleUsedCoupon}>Remove?</span>
                            </p>
                        </div> :
                        <div className="coupon-container">
                            <p>Has a coupon? <span onClick={toggleShowCoupon}>Insert</span></p>
                            {showCoupon ?
                                <div>
                                    <input type="text" onChange={(e) => setInputCoupon(e.target.value)} />
                                    <button onClick={() => validateCoupon(inputCoupon)}>
                                        Insert
                                    </button>
                                </div> :
                                null
                            }
                        </div>
                    }
                </>
                }
            </div>
            
        </StyledContainer>
    )
}