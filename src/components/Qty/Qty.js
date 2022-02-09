import reactDom from "react-dom";
import Infobox from "../Infobox/Infobox";
import Surface from "../Surface/Surface"


const [quantity, setQuantity] = useState(0);



const handleDecrement = () => {
  if(quantity > 0){
    setQuantity(prevCount => prevCount - 1);

  }
}

const handleIncrement = () => {
  if(quantity < 10){
    setQuantity(prevCount => prevCount + 1);
  }
}

