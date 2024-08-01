export const calculateDiscount = (price: number, priceOffer: number)=>{
    const result = 100 - Math.round(priceOffer/price*100);
    return result;
}