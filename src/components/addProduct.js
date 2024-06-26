export default function addProduct(itemId, quantity = 1){
    let cartString= localStorage.getItem('cart')
    if (!cartString){
        cartString = []
    }
    else{
        cartString = JSON.parse(cartString)
    }
    
    let agregado = false
    cartString.forEach((product) =>{
        if(product.id == itemId){
            product.quantity = parseInt(product.quantity) + parseInt(quantity)
            agregado = true
        }
    })

    if(!agregado){
        cartString.push({id: itemId, quantity: quantity})
    }

    localStorage.setItem('cart', JSON.stringify(cartString))
}