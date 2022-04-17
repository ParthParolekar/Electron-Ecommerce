import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CartInfo } from "../../components";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useUser } from "../../Context/UserContext/UserContext";

const Cart = () => {
  const [authState] = useAuth();
  const [userState] = useUser();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    await axios
      .get("/api/user/cart", {
        headers: { authorization: authState.encodedToken },
      })
      .then((res) => setCartItems(res.data.cart))
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, [userState.cart]);
  return (
    <main>
      <section className="product-list-title">
        <div className="cart-container">
          {cartItems.length > 0 && <CartInfo cartItems={cartItems} />}

          <div className="cart-items">
            <div className="card-container flex-row align-center justify-center flex-wrap">
              {loading && <h3>Loading...</h3>}
              {!loading && cartItems.length === 0 && (
                <h3>No Items in the cart</h3>
              )}
              {cartItems.map((product) => (
                <Card
                  product={product}
                  _id={product._id}
                  discount={product.discount}
                  img={product.img}
                  imgAlt={product.imgAlt}
                  title={product.title}
                  costPrice={product.costPrice}
                  sellingPrice={product.sellingPrice}
                  rating={product.rating}
                  key={product._id}
                  qty={product.qty}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>

    // <section className="product-list">
    //   <div className="product-list-title">
    //     <h3>Cart</h3>
    //   </div>
    // <div className="card-container flex-row align-center justify-center flex-wrap">
    //   {loading && <h3>Loading...</h3>}
    //   {!loading && cartItems.length === 0 && <h3>No Items in the cart</h3>}
    //   {cartItems.map((product) => (
    //     <Card
    //       product={product}
    //       _id={product._id}
    //       discount={product.discount}
    //       img={product.img}
    //       imgAlt={product.imgAlt}
    //       title={product.title}
    //       costPrice={product.costPrice}
    //       sellingPrice={product.sellingPrice}
    //       rating={product.rating}
    //       key={product._id}
    //     />
    //   ))}
    // </div>
    // </section>
  );
};

export default Cart;
