export default function addProduct(productId, productTitle, productPrice, productThumbnail, quantity = 1){
    let cartString = localStorage.getItem('cart')
    if (!cartString){
        cartString = []
    }
    else{
        cartString = JSON.parse(cartString)
    }
    
    let agregado = false
    cartString.forEach((product) =>{
        if(product.id == productId){
            product.quantity = parseInt(product.quantity) + parseInt(quantity)
            agregado = true
        }
    })

    if(!agregado){
        cartString.push({
            id: productId,
            title: productTitle,
            price: productPrice,
            thumbnail: productThumbnail,
            quantity: quantity
        })
    }

    localStorage.setItem('cart', JSON.stringify(cartString))
    cartString= localStorage.getItem('cart')
}