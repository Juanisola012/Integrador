import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductsToStore, handleRenderList } from "../Views/store";
import { handleGetProductLocalStorage, setInLocalStorage } from "./persistence/localstorage";
import { closeModal } from "../Views/modal";


//Guardar o modificar elementos
//Guardamos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", ()=>{
    handleSaveOrModifyElements();
});
//funcion de Guardar
const handleSaveOrModifyElements=()=>{
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("img").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;
    let object = null;
    if(productoActivo){
        object= {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categoria,
        }
    }else{
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        };
    }
    Swal.fire({
        title: "Correcto",
        text: "Producto guardado correctamente",
        icon: "success"
      });
    
    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
};

//eliminar elemento
export const handleDeleteProduct = ()=>{
    Swal.fire({
        title: "Estas seguro que deseas eliminar?",
        text: "Esto no va a poder revertirse",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el)=>el.id !== productoActivo.id);
            //setear el nuevo array
            localStorage.setItem("products", JSON.stringify(result));
            const newProduct = handleGetProductLocalStorage();
            handleRenderList(newProduct);
            closeModal();
        }else{
            closeModal();
        }
      });
};