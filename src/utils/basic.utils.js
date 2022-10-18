
export const FormatToMoney = (amount) => {
    let num = amount / 100;
    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}