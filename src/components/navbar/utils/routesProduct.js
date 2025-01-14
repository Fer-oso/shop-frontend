import { AiOutlineProduct } from "react-icons/ai";
import { GiClothes, GiLoincloth, GiJewelCrown } from "react-icons/gi";
import { IoHardwareChipOutline } from "react-icons/io5";

 export const userRoutesProducts = [
   {
     name: "Products",
     description: "Go to the products page to see all collections",
     href: "/products",
     icon: AiOutlineProduct,
   },
   {
     name: "Men's Clothing",
     description: "Click to view men's clothing",
     category: "men's clothing",
     icon: GiClothes,
   },
   {
     name: "Women's Clothing",
     description: "Click to view women's clothing",
     category: "women's clothing",
     icon: GiLoincloth,
   },
   {
     name: "Electronics",
     description: "Click to view electronics products",
     category: "electronics",
     icon: IoHardwareChipOutline,
   },
   {
     name: "Jewelry",
     description: "Click to view jewelry",
     category: "jewelery",
     icon: GiJewelCrown,
   },
 ];

 // Lista de rutas para administradores
 export const adminRoutesProducts = [
   {
     name: "Products",
     description: "Go to the products page to see all collections",
     href: "/products",
     icon: AiOutlineProduct,
   },
     {
     name: "Create",
     description: "Go to the products create form",
     href: "/products/create",
     icon: AiOutlineProduct,
   }, // Copia las rutas de usuario
   {
     name: "Admin Dashboard",
     description: "Manage products, users, and orders",
     href: "/admin/dashboard",
     icon: AiOutlineProduct,
   },
 ];