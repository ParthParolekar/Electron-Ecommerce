import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useUser } from "../../Context/UserContext/UserContext";

const Wishlist = () => {
  const [authState] = useAuth();
  const [userState] = useUser();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    await axios
      .get("/api/user/wishlist", {
        headers: { authorization: authState.encodedToken },
      })
      .then((res) => setWishlistItems(res.data.wishlist))
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, [userState.wishlist]);

  return (
    <section className="product-list">
      <div className="product-list-title">
        <h3>Wishlist</h3>
      </div>
      <div className="card-container flex-row align-center justify-center flex-wrap">
        {loading && <h3>Loading...</h3>}
        {!loading && wishlistItems.length === 0 && (
          <h3>No Items in the wishlist</h3>
        )}
        {wishlistItems.map((product) => (
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
          />
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
