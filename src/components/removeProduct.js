export default function removeProduct(productId) {
    let cartString = localStorage.getItem('cart')
    cartString = JSON.parse(cartString)

    let removedItemCart = cartString.filter((product) => ((product.id !== productId)))
    localStorage.setItem('cart', JSON.stringify(removedItemCart))
}