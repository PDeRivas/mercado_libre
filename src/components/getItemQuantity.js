export default function getItemQuantity(itemId){
    let cart = localStorage.getItem('cart')
    cart = JSON.parse(cart)
    cart.map((cartItem)=>{
        if (cartItem.id == itemId){
            setQuantity(cartItem.quantity)
        }
    })
}