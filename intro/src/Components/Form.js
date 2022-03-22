import React, {useState} from 'react';
function Form(props) {
    const [form, setForm] = useState({
        name: ''});
    const handleNameChange= evt=> {setForm(prevForm=> ({...prevForm, name: evt.target.value}));
console.log(evt.target.value);
if (form.name.length > 7) {props.onColor("red")}
} 



const  hex2rgb = c => {
    try {
let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    result = `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2],16)}, ${parseInt(result[3], 16)})`;
    props.onColor(form.name)
    return result        
      } catch (err) {
    props.onColor("red")
    return "Ошибка!"      
      }
}
       
    return (
        <div className='cells-color'>
        <form>
            <input id="color-hex" name="color-hex" value={form.name} onChange={handleNameChange}/>
        </form>
        <div className='color-rgb'>{(form.name.length === 7)? hex2rgb(form.name) : (form.name.length > 7)? "Ошибка!" : false} </div>
        </div> 
    );
  }
  
  export default Form;