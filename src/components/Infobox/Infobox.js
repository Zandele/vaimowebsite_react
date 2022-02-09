import React, {useState,useEffect} from 'react';
import axios from 'axios';
import star from '../../assets/icons/star1.png';
import infobox from './Infobox.css';
import check from '../../assets/icons/checkicon.png';
import march from '../../assets/icons/MarchExpo.png';
import arrow from '../../assets/icons/arrow1.png';
import clock from '../../assets/icons/clock.png';
import minus1 from '../../assets/icons/minus1.png';
import plus from '../../assets/icons/plus1.png';
import secure from '../../assets/icons/secureicon.png';
import visa from '../../assets/icons/visa.svg';
import mastercard from '../../assets/icons/mastercard.svg';
import applepay from '../../assets/icons/applepay.svg';
import { switchClasses } from '@mui/material';


function Infobox(apidata) {
  const [shipping , setshipping] = useState(0);
  const [x, setx] = useState(1);
  const [ready_to_ship, setreadytoship] = useState(false);
  const [fast_dispatch, setfastdispatch] = useState(false);
  const [in_stock, setinstock] = useState(false)
  const [tags, settags] = useState([])
  const [reviews, setreviews] = useState({})
  const [options, setoptions] = useState([])
  const [prices, setprices] = useState(0);



  function checkRender(){
    if(x != 2){
      setx(x+1);
    }
  }


  useEffect(() => {
    axios.get('https://fe-assignment.vaimo.net/').then((res) => {
      setshipping(res.data.product);
      setreadytoship(res.data.product.shipping.props.ready_to_ship);
      setfastdispatch(res.data.product.shipping.props.fast_dispatch);
      setinstock(res.data.product.shipping.props.in_stock);
      settags(res.data.product.tags);
      setreviews(res.data.product.reviews);
      setoptions(Object.values(res.data.product.options))
      checkRender();})
  console.log(shipping)
  console.log(ready_to_ship)
  console.log(fast_dispatch)
  console.log(in_stock)
  console.log(reviews)
  console.log(options)

  }, [x]);









// Qty rockers
  const [quantity1, setQuantity1] = useState(0);

  const handleDecrement1 = () => {
    if(quantity1 > 0){
      setQuantity1(prevCount => prevCount - 1);
  
    }
  }
  const handleIncrement1 = () => {
    if(quantity1 < 10){
      setQuantity1(prevCount => prevCount + 1);
    }
  }
  
  const [quantity2, setQuantity2] = useState (0);

  const handleDecrement2 = () => {
    if(quantity2 > 0){
      setQuantity2(prevCount => prevCount - 1);
  
    }
  }
  const handleIncrement2 = () => {
    if(quantity2 < 10){
      setQuantity2(prevCount => prevCount + 1);
    }
  }

  const [quantity3, setQuantity3] = useState (0);

  const handleDecrement3 = () => {
    if(quantity3 > 0){
      setQuantity3(prevCount => prevCount - 1);
  
    }
  }
  const handleIncrement3 = () => {
    if(quantity3 < 10){
      setQuantity3(prevCount => prevCount + 1);
    }
  }


























  return <div className='infobox_component'>
    <div className=''>
      {ready_to_ship ? (<label className='ready' >Ready To Ship</label>) : (<label className='notready'>Not Ready To Ship</label>)}
      {in_stock ? (<label className='instock'><img src={check} className='check1'/> In Stock</label>) : (<label className='instock'><img src={check} className='check1'/> Not in Stock</label>)}
      {fast_dispatch ? (<label className='fast'><img src={check} className='check1'/> Fast Dispatch</label>) : (<label><img src={check} className='check1'/> Fast Dispatch Not Avalable</label>)}
    </div>
    
    
    <div className='hotselling'>{shipping.name} {tags.map(val =>
      <div className='hotbox'>
        <label className='hotsale'>{val}</label>
      </div>) } 
    </div>
    
    
    <div className='ratingbox'>
      <div className='starbox'>
        <img src={star} className='s1'/>
        <img src={star} className='s2'/>
        <img src={star} className='s3'/>
        <img src={star} className='s4'/>
        <img src={star} className='s5'/>
      </div>
      <label className='nostars'>{reviews.rating}</label>
      <label className='reviews'>{reviews.count} Reviews</label>
      <label className='buyers'>{reviews.total_buyers} Buyers</label>
    </div>

    <div className='pricebox'>
      <label className='RtoR'>R 78.50 - R 895.31</label>
      <label className='option'>/ Option</label>
      <label className='option2'>2 Options</label>
      <label className='minorder'>(Min.Order)</label>
      <label className='oldprice'>R 98.12 - R 1,119.14</label>
    </div>
        
    <div className='marchbox'>
      <img src={march} className='marchicon'/>
      <label className='freeship'>•  Free shipping (up to $40)</label>
      <label className='ontime'>•  On-time delivery guaranteed</label>
      <img src={arrow} className='arrow1'/>
    </div>

    <div className='discountbox'>
      <label className='off'>20% OFF</label>
      <label className='discount'>Discount ends in</label>
      <img src={clock} className='clock'/>
      <label className='Time'>2d:01h:56m:49s</label>
    </div>


    <div className='optionsbox'>

      <div className='optionbox1'>
        <label className='options'>Options:</label>
        <label className='HD'>1080P</label>
        <lable className='hdprice'>R 833.99</lable>
        <button type="button" className='minusbtn1'  onClick={handleDecrement1} > <img src={minus1} className='minusimg'/> </button>
        <div className='counterbox1'>
          <div className='counter1'>{quantity1}</div>
        </div>
        <button type="button" className='plusbtn1' onClick={handleIncrement1}> <img src={plus} className='plusimg'/> </button>
      </div>

      <div className='optionbox2'>
        <label className='UHD'>4K</label>
        <lable className='uhdprice'>R 895.31</lable>
        <button type="button" className='minusbtn2' onClick={handleDecrement2}> <img src={minus1} className='minusimg'/> </button>
        <div className='counterbox2'>
          <div className='counter2'>{quantity2}</div>
        </div>
        <button type="button" className='plusbtn2' onClick={ handleIncrement2}> <img src={plus} className='plusimg'/> </button>
      </div>

      <div className='optionbox3'>
        <label className='battery'>Battery (accessories)</label>
        <lable className='batprice'>R 78.50</lable>
        <button type="button" className='minusbtn3' onClick={handleDecrement3}> <img src={minus1} className='minusimg'/> </button>
        <div className='counterbox3'>
         <div className='counter3'>{quantity3}</div>
        </div>
        <button type="button" className='plusbtn3' onClick={ handleIncrement3}> <img src={plus} className='plusimg'/> </button>
      </div>
    </div>


    <img src={secure} className='secureimg'/>
    <label className='trade'>Trade Assurance</label>
    <label className='protects'> protects your Alibaba.com orders</label>
    <label className='payments'>Payments: </label>
    <img src={visa} className='visa'/>
    <img src={mastercard} className='mastercard'/>
    <img src={applepay} className='applepay'/>

    <label className='Alibaba'>Alibaba.com Logistics</label>
    <label className='inspect'>Inspection Solutions</label>
    

    
   
  </div>;
}

export default Infobox;