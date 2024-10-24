//Local Storage
export const handleGetProductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if (products){
        return products;
    }else{
        return [];
    }
};

//guardar en local storage
export const setInLocalStorage = (productIn)=>{
    if(productIn){
//traer los elementos
let productsInLocal = handleGetProductLocalStorage();

const existingIndex = productsInLocal.findIndex((productsLocal)=>
    productsLocal.id === productIn.id
)
//verificar si el elemento existe
if(existingIndex !== -1){
//si existe debe remplazarse
productsInLocal[existingIndex]=productIn;
}else{
//sino agregarse
productsInLocal.push(productIn);
}
//setear el nuevo array
localStorage.setItem("products", JSON.stringify(productsInLocal));
    }
};

