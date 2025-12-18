import heroImage from "@assets/generated_images/hero_image_of_woman_in_beige_hoodie_1.jpeg";
import beigeImage from "@assets/generated_images/beige_hoodie.jpeg";
import blackImage from "@assets/generated_images/black_hoodie.jpeg";
import grayImage from "@assets/generated_images/gray_hoodie.jpeg";
import greenImage from "@assets/generated_images/green_hoodie.jpeg";
import pinkCoffeImage from "@assets/generated_images/pink_coffe_hoodie.jpeg";
import pinkImage from "@assets/generated_images/pink_hoodie.jpeg";
import redImage from "@assets/generated_images/red_hoodie.jpeg";
import whiteImage from "@assets/generated_images/white_hoodie.jpeg";
import aboutImage from "@assets/generated_images/about.jpeg";
import textureImage from "@assets/generated_images/hoodie_fabric_texture_close_up.png";

export const assets = {
  hero: heroImage,
  studio: aboutImage,
  texture: textureImage,
};

export const products = [
  {
    id: 1,
    name: "The Signature Hoodie - Sage",
    price: 89,
    images: [greenImage],
    category: "Essentials",
    description: "Our signature oversized fit, crafted from heavyweight organic cotton. The perfect balance of structure and softness.",
  },
  {
    id: 2,
    name: "Urban Core Hoodie - Charcoal",
    price: 95,
    images: [blackImage],
    category: "Street",
    description: "Designed for the city. Features a reinforced hood and drop shoulders for that effortless streetwear silhouette.",
  },
  {
    id: 3,
    name: "Weekend Comfort Hoodie - Rose",
    price: 89,
    images: [pinkImage, pinkCoffeImage],
    category: "Lounge",
    description: "Soft-washed for a vintage feel from day one. The cozy companion for your slow Sunday mornings.",
  },
  {
    id: 4,
    name: "The Signature Hoodie - Cream",
    price: 89,
    images: [beigeImage],
    category: "Essentials",
    description: "The classic cream colorway. versatile, clean, and undeniably premium.",
  },
  {
    id: 5,
    name: "The Signature Hoodie - White",
    price: 89,
    images: [whiteImage],
    category: "Essentials",
    description: "The classic white colorway. versatile, clean, and undeniably premium.",
  },
  {
    id: 6,
    name: "The Signature Hoodie - Gray",
    price: 89,
    images: [grayImage],
    category: "Essentials",
    description: "The classic gray colorway. versatile, clean, and undeniably premium.",
  },
  {
    id: 7,
    name: "The Signature Hoodie - Red",
    price: 89,
    images: [redImage],
    category: "Essentials",
    description: "The classic red colorway. versatile, clean, and undeniably premium.",
  },
];