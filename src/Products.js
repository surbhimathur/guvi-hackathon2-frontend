import {useEffect, useState} from "react";

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';

export function Products()
{
    const products=[
        {
            name:"cranes",
            image:"https://cpimg.tistatic.com/03693810/b/5/Rhino-110C-Pick-Carry-Cranes.jpg",
            heading:"CRANES",
            time:"7 hrs",
            price:1500,
          
        },
        {
            name:"bulldozer",
            image:"https://m.media-amazon.com/images/I/714h-GNuLLL._SL1500_.jpg",
            heading:"BULLDOZER",
            time:"7 hrs",
            price:2000,
        },
        {
            name:"paver",
            image:"http://static.global-ce.com/upload/upfs/201903/13/f_1552470926480356.jpg",
            heading:"PAVER",
            time:"7 hrs",
            price:2500,
        },
        {
            name:"mixer",
            image:"https://www.heavyequipments.in/uploads/blogimage/Bull%20Concrete%20Mixer%204%20Cum.webp",
            heading:"TRANSIT MIXER",
            time:"7 hrs",
            price:1000,
        },
        {
            name:"boom_placer",
            image:"https://www.cpenz.co.nz/imagecache/pi_1_100057_6.jpg",
            heading:"BOOM PLACER PUMP",
            time:"7 hrs",
            price:1700,
        },
        {
            name:"air_compressor",
            image:"https://static.grainger.com/rp/s/is/image/Grainger/1VAN8_AS01",
            heading:"AIR COMPRESSOR",
            time:"7 hrs",
            price:2900,
            
        },
        {
            name:"jcb",
            image:"https://5.imimg.com/data5/SELLER/Default/2020/9/EV/DN/FB/3295899/jcb-backhoe-loader-500x500.jpg",
            heading:"JCB BREAKER",
            time:"7 hrs",
            price:3000,
        },
        {
            name:"deisel",
            image:"https://asmaindustrial.com/wp-content/uploads/2021/01/BD2.jpg",
            heading:"DEISEL FUEL DISPENSER",
            time:"7 hrs",
            price:1900,
        },
        {
            name:"manlift",
            image:"https://media.invaber.com/2018/12201991611AM_ANSI-63AJ_0.jpg",
            heading:"MANLIFT",
            time:"7 hrs",
            price:2300,
        }
    ];
    
    const styles={backgroundColor:"white",borderRadius:"5px"}
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = products.filter((pr) =>
      pr.name.toLowerCase().includes(searchTerm)
    );
    console.log(results);
    setSearchResults(results);
  }, [searchTerm]);
        
    return(
        <div className="products_detail">
        {/* <p className="product_heading">PRODUCTS</p> */}
        <div className="searchBox">
        
        <TextField id="Outlined secondary" fullWidth label="Search" placeholder="Enter Product" color="info" style={styles}  variant="filled"  value={searchTerm}
        onChange={handleChange}/>     
        </div>
        
        <div className="products">
        {searchResults.map((pr)=><ProductsDetail name={pr.name} image={pr.image} heading={pr.heading} time={pr.time} price={pr.price}/>)}
        
        </div>
        </div>
    )
}

 function ProductsDetail({name,image,heading,time,price}) {  
     const history = useHistory();
     const redirect=()=>{
        let details=JSON.stringify({name,image,heading,time,price});
        localStorage.setItem("details",details);
         history.push({pathname:"/addcart"});
         
     }
     
     
     
  
    return(
            
       <div className={name}>
                <img src={image} alt={name}></img>
                <h1>{heading}</h1>
                   <div className="specification">
              <p><AccessAlarmIcon color="error" />{time}</p>
                    <p><CurrencyRupeeIcon color="primary"/>{price}</p>
                    <div className="add_cart">
                  <Fab color="primary" aria-label="add" onClick={redirect} >  
                     <AddShoppingCartIcon />
                    </Fab> 
                
                    </div>
                </div>
        </div>
        
    )
}
