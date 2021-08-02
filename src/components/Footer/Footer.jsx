import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAll } from '../../redux/actions/productAction';

function Footer() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.productReducer.items);
    const price = items.map((item) => item.price * item.quantity);
    const sum = price.length !== 0 ? price.reduce((acc, item) => acc + item) : 0;

    return (
        <div className="main-section__bottom">
            <div className="container">
                <div>
                    <div className="main-section__bottom--hr">
                        <hr />
                    </div>
                    <div className="main-section__bottom--total">
                        <h2> Total </h2>
                        <div className="main-section__bottom--totalamount"> {sum}</div>
                    </div>
                </div>
                {/* eslint-disable-next-line no-use-before-define */}
                <div className="clearAllBtn">
                    <button type="button" onClick={() => dispatch(clearAll())}>
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
