import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import Fab from "@mui/material/Fab";
import RemoveIcon from "@mui/icons-material/Remove";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import {useState} from "react";

export function AddCart() {
  // read localstorage or api GET call to get data from db of cart. an array objects
  // const startValue:Date= new Date(new Date().getFullYear(),new Date().getMonth);
  // const endValue:Date= new Date(new Date().getFullYear(),new Date().getMonth);
  // startDate={startValue} endDate={endValue}

  let a = JSON.parse(localStorage.getItem("details"));
  const [increase,setIncrease]=useState(0);
  const [price,setPrice]=useState();
  const [time,setTime]=useState("");
  
  const IncrementItem= ()=>
  {
      setIncrease(increase + 1);
      
  }
  const DecrementItem= ()=>
  {
      if(increase<=0)
      {
          setIncrease(0);
      }
      else{
      setIncrease(increase - 1);
      }
  }
  const pricing=()=>
  {
      if(a.name==="bulldozer"){
          setPrice(100);
      }
      else if(a.name==="paver")
      {
          setPrice(200);
      }
      else if(a.name==="cranes")
      {
          setPrice(300);
      }
      else if(a.name==="mixer")
      {
          setPrice(150);
      }
      else if(a.name==="boom_placer")
      {
          setPrice(190);
      }
      else if(a.name==="air_compressor")
      {
          setPrice(250);
      }
      else if(a.name==="jcb")
      {
          setPrice(350);
      }
      else if(a.name==="manlift")
      {
          setPrice(550);
      }
      else if(a.name==="deisel")
      {
          setPrice(650);
      }
  }
 

  return (
    <div className="cart">
      <h2>{a.heading}</h2>
      <img src={a.image} alt={a.name} />
      <div className="quantity">
        <Fab color="primary" aria-label="add" size="small" onClick={IncrementItem}>
          <AddIcon />
        </Fab>
        <p>{increase}</p>
        <Fab color="primary" aria-label="remove" size="small" onClick={DecrementItem}>
          <RemoveIcon />
        </Fab>
      </div>

      <div className="number_of_days">
        <div className="date_heading">
          <p>Rent-Return date</p>
        </div>
        <DateRangePickerComponent placeholder="Enter Date Range"></DateRangePickerComponent>
      </div>
      <div className="timepicker-control-section">
        <div className="rent_time">
          <p>Rent time</p>
          <TimePickerComponent></TimePickerComponent>
        </div>
        <div className="return_time">
          <p>Return time</p>
          <TimePickerComponent value={time} onChange={(event)=>setTime(event.target.value)}></TimePickerComponent>
        </div>
      </div>
      <div className="price">
          <p>Total Price:</p>
      </div>

      <div className="checkout_box">
        <Button variant="contained">Checkout</Button>
      </div>
    </div>
  );
}
