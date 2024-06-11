import { Cart } from "@/types/Cart"

type Props = {
    cartItem: Cart
}

export const CartItemQuantity = ({cartItem}:Props)=>{
    return(
        <div>
            {cartItem.quantity}
        </div>
    )
}