import heroImage from "@assets/generated_images/hero_image_of_woman_in_beige_hoodie.png";
import sageImage from "@assets/generated_images/sage_green_hoodie_studio_shot.png";
import charcoalImage from "@assets/generated_images/charcoal_grey_hoodie_urban_style.png";
import roseImage from "@assets/generated_images/dusty_rose_hoodie_lifestyle.png";
import studioImage from "@assets/generated_images/fashion_design_studio_artistic_shot.png";
import textureImage from "@assets/generated_images/hoodie_fabric_texture_close_up.png";

export const assets = {
  hero: heroImage,
  studio: studioImage,
  texture: textureImage,
};

export const products = [
  {
    id: 1,
    name: "The Signature Hoodie - Sage",
    price: 89,
    image: sageImage,
    category: "Essentials",
    description: "Our signature oversized fit, crafted from heavyweight organic cotton. The perfect balance of structure and softness.",
  },
  {
    id: 2,
    name: "Urban Core Hoodie - Charcoal",
    price: 95,
    image: charcoalImage,
    category: "Street",
    description: "Designed for the city. Features a reinforced hood and drop shoulders for that effortless streetwear silhouette.",
  },
  {
    id: 3,
    name: "Weekend Comfort Hoodie - Rose",
    price: 89,
    image: roseImage,
    category: "Lounge",
    description: "Soft-washed for a vintage feel from day one. The cozy companion for your slow Sunday mornings.",
  },
  {
    id: 4,
    name: "The Signature Hoodie - Cream",
    price: 89,
    image: heroImage, // Reusing hero for now as a product variant
    category: "Essentials",
    description: "The classic cream colorway. versatile, clean, and undeniably premium.",
  },
];
