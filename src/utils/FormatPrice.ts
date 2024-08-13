export const FormatPrice = (number: number)=>{
    return number.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2});
}