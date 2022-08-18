import { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import styles from '../styles/Home.module.css'
import Card from './Components/Card'
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';


export default function Home() {

  const [userData, setUserData] = useState([])
  const [productName, setProductName] = useState('')
  
  // SearchBtn Animation
  const [searchStyle, setSearchStyle] = useState({})
  const [toggle, setToggle] = useState(false)
  const [btnText, setBtnText] = useState('search')

  const popIn = () =>{
    if(toggle == false){
      setToggle(true)
      setSearchStyle({width:'300px'})
      setBtnText('close')
    }
    else{
      setToggle(false)
      setBtnText('search')
      setSearchStyle({})
    }
  }

  // Function for fetching Data
  const fetchData = async (url) =>{
    const req = await fetch(url)
    const res = await req.json()
    setUserData(res)
  }
  useEffect(() => {
    fetchData('https://assessment.api.vweb.app/products')
  },[])
  
    const items = useSelector((state) => state.Cart.basket)

  return (
    <div className={styles.container}>

    {/* HEADER */}
      <div className={styles.Header}>
        <input 
          style={searchStyle}
          id={styles.searchBar} 
          type="text" 
          onInput={(e)=>setProductName(e.target.value)} 
          value={productName}
        />
        <button 
          id={styles.searchBtn}
          onClick={popIn}
        >{btnText}
        </button>

        <Link href={'ShoppingCart'}>
          <div className={styles.ShoppingCart__Link}>
            <p id={styles.itemsAdded}>
            {items.length}
            </p>
            <FaShoppingCart/>
          </div>
        </Link>
      </div>

    {/* PRODUCTS CONTAINER */}
      <div className={styles.card__container}>
        {userData && userData
        .filter(e=>
          e.name.toLowerCase().includes(productName))
        .map(e=>
          <Card 
            key={e.product_id}
            id={e.product_id}
            name={e.name}
            stock={e.stock}
            price={e.selling_price}
          />
        )}
      </div>
      
      
    </div>
  )
}
