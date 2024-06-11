import { Cart } from "@/types/Cart";
import { Product } from "@/types/product";
import { create } from "zustand";

type States = {
    cart: Cart[]
}

type Actions = {
    upsertCartItem : (product:Product,quantity:number)=>void
}

const initialStates: States = {
    cart:[]
}

export const useCartStore = create<States & Actions>()(set => ({
    ...initialStates,
    upsertCartItem:(product,quantity)=> set(state => {
        let newCart = state.cart
        let productIndex = newCart.findIndex(item => item.product.id === product.id)

        if(productIndex < 0){
            newCart.push({product,quantity: 0})
            productIndex = newCart.findIndex(item => item.product.id === product.id)
        }
        newCart[productIndex].quantity += quantity

        if(newCart[productIndex].quantity <= 0){
            newCart = newCart.filter(item => item.product.id !== item.product.id)
        }

        return {...state,cart:newCart}
    })
}))