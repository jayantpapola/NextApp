import { useSelector, useDispatch } from "react-redux"
import Link from 'next/link'
import { FaTrashAlt} from 'react-icons/fa'
import styles from '../styles/ShoppingCart.module.css'
import { deleteFromCart } from "./Redux/Reducers/cartReducer"

const ShoppingCart = () => {

  const items = useSelector((state) => state.Cart.basket)
  const dispatch = useDispatch()

  return (

    <div className={styles.ShoppingCart}>
      <Link href={'/'}>
        <div>
          <button className={styles.back}>Back</button>
        </div>
      </Link>
      <div className={styles.subtotal}>
        <strong id={styles.subtotal}>SUB-TOTAL : </strong>
        Rs.{items.reduce((a,b)=>a+b.price,0)}
      </div>
      {items &&
        items.map(e=>
          <div className={styles.product}>
            <strong>{e.name}</strong>
            <p>Rs. {e.price}</p>
            <button 
              id={styles.trashBtn}
              onClick={()=>
                dispatch(deleteFromCart(e.id))}
            ><FaTrashAlt/> 
            </button>
          </div>)
      }
    </div>
  )
}

export default ShoppingCart