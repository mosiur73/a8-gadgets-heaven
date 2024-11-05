import toast from "react-hot-toast"

// all products 
const getAllProducts=()=>{
    const allProducts=localStorage.getItem('carts')
    if(allProducts){
        const products=JSON.parse(allProducts)
        console.log(products)
        return products

    }else{
        console.log([])
        return[]
    }
}

//Add product local storage
const addToCart=product=>{
    const carts=getAllProducts()
    const isExist = carts.find(item => item.id == product.id)
  if (isExist) return toast.error('Coffee already exists!')
    carts.push(product)
    
    localStorage.setItem('carts',JSON.stringify(carts))
    toast.success('Successfully Added')
    
}
export {addToCart,getAllProducts}