import './App.css';
import Image from '../src/components/Image/Image';
import Grid from '@mui/material/Grid';
import Infobox from '../src/components/Infobox/Infobox';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Surface from '../src/components/Surface/Surface';











function App() {

const [apidata, set_apidata] = useState([])

const [x,setx] = useState(1)

  function checkRender(){
    if(x!=2){
      setx(x+1);
    }
  }
    


useEffect(() => {
  axios.get('https://fe-assignment.vaimo.net/').then((res) => {
      set_apidata(res.data.product);
      console.log(res.data.product);
    }    
  );
}, [x]);


  return (
    <div className="App" >
      
        <Grid container spacing={2.4} className='grid'>

          <Grid item>
            <Image/>
          </Grid>

          <Grid item>
            <Infobox apidata={apidata}/>
          </Grid>

          <Grid item>
            <Surface/>
          </Grid>
            
        </Grid>
        
    </div>  
    
  );
}

export default App;