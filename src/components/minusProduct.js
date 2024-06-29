export default function minusProduct(productId, quantity = 1){
    let cartString = localStorage.getItem('cart')
    cartString = JSON.parse(cartString)

    cartString.forEach((product) =>{
        if(product.id == productId){
            product.quantity = parseInt(product.quantity) - parseInt(quantity)
        }
    })

    localStorage.setItem('cart', JSON.stringify(cartString))
}