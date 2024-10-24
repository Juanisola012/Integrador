//:::::::::::::Store::::::::::::::

import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../services/persistence/localstorage"
import { openModal } from "./modal";
//funcion que llama los elementos
export const handleGetProductsToStore =()=>{
    const products = handleGetProductLocalStorage()
    handleRenderList(products);

};
//filtra y renderiza la seccion con sus respectivos elementos
export const handleRenderList=(productIn)=>{
//filtrado por categorias
const burgers = productIn.filter((el)=>el.categorias==="Hamburguesas")
const papas = productIn.filter((el)=>el.categorias==="papas")
const gaseosas = productIn.filter((el)=>el.categorias==="Gaseosas")
//renderiza elementos de la seccion
const renderProductGroup = (products, title)=>{
    if(products.length > 0) {
            const productsHTML = products.map((product, index)=>{
                return `<div class='containerTargetItem' id='product-${product.categorias}-${index}'>
                    <div>
                    <img src='${product.imagen}'> </img>
                     <div>
                     <h2>${product.nombre}</h2>
                     </div>   
                    </div>
                    <div class='targetProps'>
                    <p><b>Precio:</b>${product.precio}</p>
                    <p><b>Precio:</b>${product.categorias}</p>
                    </div>

                </div>`;
            });
            //retorna la seccion con todos los elementos
            return `
            <section class='sectionStore'>
            <div class='containerTitleSection'>
            <h3>${title}</h3>
            </div>
            <div class='containerProductStore'>
            ${productsHTML.join("")}
            </div>


            </section>

             `;
        }else{
            return ""
        }
};

//renderizar cada uno de los productos dentro de su categoria
const appContainer = document.getElementById("storeContainers");
appContainer.innerHTML = `
${renderProductGroup(burgers,"Hamburguesas")}
${renderProductGroup(papas,"papas")}
${renderProductGroup(gaseosas,"Gaseosas")}
`;
// se anaden los eventos de manera dinamica
const addEvents =(productIn)=>{
if(productIn){
productIn.forEach((element, index) => {
    const productContainer = document.getElementById(`product-${element.categorias}-${index}`);
    
        productContainer.addEventListener("click",()=> {
          setProductoActivo(element);
          openModal();
});
    
});
}
};
addEvents(burgers);
addEvents(papas);
addEvents(gaseosas);
};