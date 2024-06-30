export default function removeProduct(productId, quantity = 1){
    let cartString = localStorage.getItem('cart')
    cartString = JSON.parse(cartString)

    let removedItemCart = cartString.filter((product) =>((product.id != productId)))
    console.log(cartString)
    console.log(removedItemCart)
    localStorage.setItem('cart', JSON.stringify(removedItemCart))
}