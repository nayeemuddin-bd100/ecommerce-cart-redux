/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, removeItem } from '../../redux/actions/productAction';

// eslint-disable-next-line no-unused-vars
function CartItem({ id, title, img, price, quantity }) {
    const upSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
        </svg>
    );
    const downSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
    );

    const dispatch = useDispatch();

    return (
        <div className="cart-section">
            {/* Cart Main Section */}
            <div className="cart-section__main">
                <div className="cart-section__main__image">
                    <img src={img} alt="img" />
                </div>
                {/* Cart detais section */}
                <div className="cart-section__main__details">
                    <h4 className="cart-section__main__details--title">{title}</h4>
                    <h4 className="cart-section__main__details--price">${price}</h4>
                    <p
                        type="button"
                        onClick={() => dispatch(removeItem(id))}
                        className="cart-section__main__details--removeBtn"
                    >
                        remove
                    </p>
                </div>
            </div>

            {/* Cart Icon Section */}
            <div className="cart-section__icon">
                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => dispatch(increment(id))}
                    className="cart-section__icon--increment"
                >
                    {upSvg}
                </div>
                <div className="cart-section__icon--amount"> {quantity} </div>
                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => dispatch(decrement(id))}
                    className="cart-section__icon--decrement"
                >
                    {downSvg}
                </div>
            </div>
        </div>
    );
}

export default CartItem;
