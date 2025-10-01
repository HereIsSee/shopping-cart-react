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


export { getCartItems, updateCartItems };