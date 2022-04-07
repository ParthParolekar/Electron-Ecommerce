import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Red Dead Redemption 2",
    img: "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=854&resize=1&w=640",
    imgAlt: "Game Poster",
    costPrice: 3200,
    sellingPrice: 1600,
    discount: 50,
    rating: 4,
    categoryName: "Open world",
    isInCart: false,
    isInWishlist: false,
  },
  {
    _id: uuid(),
    title: "Call of Duty Warzone",
    img: "https://upload.wikimedia.org/wikipedia/en/d/dd/Call_of_Duty_Warzone_cover.jpg",
    imgAlt: "Game Poster",
    costPrice: 3200,
    sellingPrice: 2400,
    discount: 25,
    rating: 3,
    categoryName: "FPS",
    isInCart: false,
    isInWishlist: false,
  },
  {
    _id: uuid(),
    title: "Uncharted 4",
    img: "https://images-na.ssl-images-amazon.com/images/I/91grctgwzFL.jpg",
    imgAlt: "Game Poster",
    costPrice: 3000,
    sellingPrice: 1000,
    discount: 33,
    rating: 4,
    categoryName: "Action",
    isInCart: false,
    isInWishlist: false,
  },
  {
    _id: uuid(),
    title: "FIFA 22",
    img: "https://cdn-products.eneba.com/resized-products/aux8psTaKAAiuKDtaA5VfXWHh4PlLFZvk2HoXREh4wY_350x200_1x-0.jpeg",
    imgAlt: "Game Poster",
    costPrice: 3200,
    sellingPrice: 1600,
    discount: 50,
    rating: 5,
    categoryName: "Sports",
    isInCart: false,
    isInWishlist: false,
  },
];
