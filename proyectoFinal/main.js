import { renderCategories } from "./src/services/categories";
import { setInLocalStorage } from "./src/services/persistence/localstorage";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/Views/modal";
import { handleGetProductsToStore } from "./src/Views/store";
import "./style.css";

//aplicacion
export let categoriaActiva = null;
export const setCategoriaActiva=(categoriaIn)=>{
    categoriaActiva=categoriaIn;
};
export let productoActivo = null;

export const setProductoActivo=(productIn)=>{
    productoActivo=productIn;
};


handleGetProductsToStore();
renderCategories(); 

//header
const buttonAdd= document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click",()=>{
openModal();
});
//buttonSearch
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click",()=>{
    handleSearchProductByName();
});


