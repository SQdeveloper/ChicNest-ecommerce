export type Categories = "women" | "kids" | "gold plated" | "gold" | "bracelet" | "earrings" | "rings";

export type Brand = "Boucheron" | "Mikimoyo" | "Porrellano" | "Tiffany" | "Bucellars";

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    isOffer: boolean,
    priceOffer: number,
    categories: string[],
    stars: number,
    product_number: number,
    stock: number,
    brand: string[],
    images: {src: string}[];    
}