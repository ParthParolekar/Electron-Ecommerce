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
    img: "https://fontmeme.com/images/cod-warzone-font.jpg",
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
    categoryName: "Adventure",
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
    rating: 2,
    categoryName: "Sports",
    isInCart: false,
    isInWishlist: false,
  },
  {
    _id: uuid(),
    title: "Battlefield 1",
    img: "https://m.media-amazon.com/images/I/71X4netx4+L.jpg",
    imgAlt: "Game Poster",
    costPrice: 3000,
    sellingPrice: 2400,
    discount: 20,
    rating: 4,
    categoryName: "FPS",
    isInCart: false,
    isInWishlist: false,
  },
  {
    _id: uuid(),
    title: "Assassin's Creed Valhalla",
    img: "https://store-images.s-microsoft.com/image/apps.1547.14585440003614248.9f7109bf-73f7-4bc7-ba61-1eeb006d905a.75930d81-6e85-436d-9b61-1279b8dd9b31",
    imgAlt: "Game Poster",
    costPrice: 2400,
    sellingPrice: 1800,
    discount: 25,
    rating: 2,
    categoryName: "Open World",
    isInCart: false,
    isInWishlist: false,
  },
  {
    _id: uuid(),
    title: "Minecraft",
    img: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
    imgAlt: "Game Poster",
    costPrice: 2000,
    sellingPrice: 1800,
    discount: 10,
    rating: 5,
    categoryName: "Open World",
    isInCart: false,
    isInWishlist: false,
  },
  {
    _id: uuid(),
    title: "The Last of Us",
    img: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg",
    imgAlt: "Game Poster",
    costPrice: 2500,
    sellingPrice: 1250,
    discount: 50,
    rating: 5,
    categoryName: "Adventure",
    isInCart: false,
    isInWishlist: false,
  },
];
