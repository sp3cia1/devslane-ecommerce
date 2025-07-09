import CartList from "../components/CartList"
import CartTotal from "../components/CartTotal"

export default function CartPage() {
  return(
    <div className="flex-grow mx-16 flex flex-col p-4">
      <CartList/>
      <CartTotal/>
    </div>
  )
}