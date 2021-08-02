import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

function Footer() {
    const { items, clearAll } = useContext(GlobalContext);

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
                        <div className="main-section__bottom--totalamount">${sum}</div>
                    </div>
                </div>
                {/* eslint-disable-next-line no-use-before-define */}
                {clearAllBtn(clearAll)}
            </div>
        </div>
    );
}

export default Footer;

/** *********** Controller ************** */

/* Clear all button */
const clearAllBtn = (clearAll) => (
    <div className="clearAllBtn">
        <button type="button" onClick={() => clearAll()}>
            Clear All
        </button>
    </div>
);
