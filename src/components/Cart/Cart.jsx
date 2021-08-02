import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Footer from '../Footer/Footer';

// Set lazy loading
const CartItem = React.lazy(() => import('./CartItem'));

function Cart() {
    const { items } = useContext(GlobalContext);

    return (
        <div className="main-section">
            <div className="container">
                <h3 className="main-section__title"> Your Bag</h3>

                {!items.length && (
                    <h3 className="main-section__emptyProduct">
                        You don&apos;t have any products in your bag
                    </h3>
                )}

                <React.Suspense fallback={<h1>Loading...</h1>}>
                    {/* Item List */}
                    {items.map((item) =>
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        item.quantity > 0 ? <CartItem key={item.id} {...item} /> : null
                    )}
                </React.Suspense>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
