function updateCartItems(itemsArray){
    const itemsInString = JSON.stringify(itemsArray);
    localStorage.setItem("cartItems", itemsInString);
}   
function getCartItems(){
    const itemsInString = localStorage.getItem("cartItems");
    if(itemsInString){
        return JSON.parse(itemsInString);
    }
    return [];
    
}
function getItemsCount(){
    return getCartItems().reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
}
function getPriceTotal(){
    return getCartItems().reduce((sum, item) =>  sum + ((Number(item.price) || 0) * (Number(item.quantity) || 0)), 0);
} 


export { getCartItems, updateCartItems, getItemsCount, getPriceTotal };