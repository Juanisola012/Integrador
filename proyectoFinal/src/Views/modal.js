import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

//POPUP

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click",()=>{
    handleCancelButton();
    closeModal();
});


//funciones abrir y cerrar modal
export const openModal = ()=>{
    const modal = document.getElementById("modalPopUp");
modal.style.display= "flex";
const buttonDelete = document.getElementById("deleteButton");
if(productoActivo){
    buttonDelete.style.display = "block";
}else{
    buttonDelete.style.display = "none";
}

if(productoActivo){
    const nombre = document.getElementById("nombre");
    const imagen = document.getElementById("img");
    const precio = document.getElementById("precio");
    const categoria = document.getElementById("categoria");
    imagen.value= productoActivo.imagen;
    precio.value=productoActivo.precio;
    nombre.value=productoActivo.nombre;
    categoria.value=productoActivo.categoria;
}

};

export const closeModal = ()=>{
    const modal = document.getElementById("modalPopUp");
modal.style.display= "none";
setProductoActivo(null);
resetModal();
};
const resetModal = ()=>{
    const nombre = document.getElementById("nombre");
    const imagen = document.getElementById("img");
    const precio = document.getElementById("precio");
    const categoria = document.getElementById("categoria");
    imagen.value= "";
    precio.value=0;
    nombre.value="";
    categoria.value="seleccione una categoria";
};
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", ()=>{
    handlebuttonDelete();
});

const handlebuttonDelete = () => {
    handleDeleteProduct();
};