import { categoriaActiva } from "../../main";
import { handleRenderList } from "../Views/store";
import { handleGetProductLocalStorage } from "./persistence/localstorage";

const handleFilterProductsByCategoria =(categoryIn)=>{
    const products = handleGetProductLocalStorage()
    switch (categoryIn){
    case categoriaActiva:
        handleRenderList(products)
        break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburgesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el)=>el.categories=== categoryIn)
         handleRenderList(result);
        default:
            break;
        case "mayorPrecio":
        const resultPrecioMayor = products.sort((a,b)=> b.precio - a.precio);
        handleRenderList(resultPrecioMayor);

        break;

        case "menorPrecio":
            const resultPrecioMenor = products.sort((a,b)=> a.precio - b.precio);
            handleRenderList(resultPrecioMenor);

        break;
}
};


//render de la vista categorias
export const renderCategories =()=> {
    //tomamos elementos de la lista
    const ulList = document.getElementById("listFilter");
    //creamos esos elementos en la lista
    ulList.innerHTML = `
    <li id="Todo"> Todos los productos</li>
    <li id="Hamburguesas"> Hamburguesas</li>
    <li id="Papas"> Papas</li>
    <li id="Gaseosas"> Gaseosas</li>
    <li id="mayorPrecio"> mayorPrecio</li>
    <li id="menorPrecio"> menorPrecio</li>
    `;
    //añadimos dinamicamente el evento click
    const liElements =ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener("click",()=>{
            handleClick(liElement);
        });
        });

        //verificamos y manejamos el estilo del elemento activo
        const handleClick = (elemento)=>{
            handleFilterProductsByCategoria(elemento.id);
            liElements.forEach((el)=>{
                if(el.classList.contains("liActive")){
                    el.classList.remove("liActive");
                }else {
                    if(elemento === el){
                        el.classList.add("liActive")
                    }
                }
            })
        }
    };
