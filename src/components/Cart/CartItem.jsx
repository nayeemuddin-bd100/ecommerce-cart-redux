/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

function CartItem({ id, title, img, price, quantity }) {
    const { increment, decrement, removeItem } = useContext(GlobalContext);

    return (
        <div className="cart-section">
            {/* Cart Main Section */}
            <div className="cart-section__main">
                <div className="cart-section__main__image">
                    <img src={img} alt="img" />
                </div>
                {/* Cart detais section */}
                <CartDetails id={id} price={price} title={title} removeItem={removeItem} />
            </div>

            {/* Cart Icon Section */}
            <div className="cart-section__icon">
                <IncrementBtn increment={increment} id={id} />
                <div className="cart-section__icon--amount"> {quantity} </div>
                <DecrementBtn decrement={decrement} id={id} />
            </div>
        </div>
    );
}

export default CartItem;

/** *********************************************************** */
/* ========================= Controller ===================== */
/** *********************************************************** */

/* Cart Details Section */

const CartDetails = ({ id, price, title, removeItem }) => (
    <div className="cart-section__main__details">
        <h4 className="cart-section__main__details--title">{title}</h4>
        <h4 className="cart-section__main__details--price">${price}</h4>
        <p
            type="button"
            onClick={() => removeItem(id)}
            className="cart-section__main__details--removeBtn"
        >
            remove
        </p>
    </div>
);

/* Increment Button */

const IncrementBtn = ({ increment, id }) => {
    const upSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
        </svg>
    );
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => increment(id)}
            className="cart-section__icon--increment"
        >
            {upSvg}
        </div>
    );
};
/* Decrement Button */

const DecrementBtn = ({ decrement, id }) => {
    const downSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
    );
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => decrement(id)}
            className="cart-section__icon--decrement"
        >
            {downSvg}
        </div>
    );
};
