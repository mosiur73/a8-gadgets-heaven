import toast from "react-hot-toast"


//wish list product add
const getAllWishList=()=>{
    const allProducts=localStorage.getItem('cart')
    if(allProducts){
        const products=JSON.parse(allProducts)
       console.log(products)
        return products

    }else{
        console.log([])
        return[]
    }
}
//Add product wish list
const addToWishList=product=>{
    const carts=getAllWishList()
    const isExist = carts.find(item => item.id == product.id)
  if (isExist) return toast.error('Coffee already exists!')
    carts.push(product)
    
    localStorage.setItem('cart',JSON.stringify(carts))
    toast.success('Successfully Added')
    
}

export {getAllWishList,addToWishList}