import styles from '../../styles/Card.module.css'
import { useDispatch } from 'react-redux';
import { FaShoppingCart, FaLongArrowAltRight } from "react-icons/fa";
import { addToCart } from '../../Redux/Reducers/cartReducer';

const Card = ({id, name, stock, price}) => {

  const dispatch = useDispatch()

  return (
    <div className={styles.Card}
     key={id}>
        <p className={styles.name}>{name}</p>
        <p><strong id={styles.label}>Stock: </strong> {stock}</p>
        <p><strong id={styles.label}>Price: </strong>Rs. {price}</p>
        <button 
          id={styles.addToCart}
          onClick={()=>{
            dispatch(addToCart({
              id:id,
              name:name,
              price:price
            }))
          }}
        >
          <FaShoppingCart/>
          <span id={styles.longArrow}><FaLongArrowAltRight/></span>
        </button>
    </div>
  )
}

export default Card