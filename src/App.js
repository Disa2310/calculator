
import './App.css';
import{useState} from 'react';
import React from 'react'


function App  ()  {
 


    const [no,setno]=useState(''); 
    const [f_val,setf_val]=useState();
    const [sign,setsign]=useState();
  

    const num=(n)=>{
        setno(no+n);
    }
    const action =(s) =>{
        
       setf_val(no); 
       setno('');
       setsign(s);
    }
    const del = () =>{

        setno(no.substr( 0, (no.length) -1));
    }
    const erase=()=>{
        setno("");
    }

    const ans=()=>{
        if (sign === '+'){
            setno(  parseInt(f_val) + parseInt(no));
        }
        if (sign === '-'){
            setno(  parseInt(f_val) - parseInt(no));
        }
        if (sign === '*'){
            setno(  parseInt(f_val) * parseInt(no));
        }
        if (  sign === '/'){
            setno(  parseInt(f_val) / parseInt(no));
        }
        if ( sign === '%'){
            setno( parseInt(f_val) % parseInt(no));
        }
    }

  
  return(
        <div className="row">

<h1 className='col-sm-12 col-md-12 col-lg-12 col-12 text-center'>Calculator</h1>
        <div className="box col-sm-12 col-md-6 col-lg-6 col-12">
            <input type="text" value={no} className='display' />
        
        <div className='calc_design'>
            <input type="button" value="7" onClick={(e)=>num(e.target.value)} className='input'/>
            <input type="button" value="8" onClick={(e)=>num(e.target.value)} className='input'/>
            <input type="button" value="9" onClick={(e)=>num(e.target.value)} className='input'/>
            <input type="button" value="/" onClick={(e)=>action(e.target.value)} className='input'/>
            <input type="button" value="4" onClick={(e)=>num(e.target.value)} className='input'/>
            <input type="button" value="5" onClick={(e)=>num(e.target.value)} className='input'/>
            <input type="button" value="6" onClick={(e)=>num(e.target.value)} className='input'/>
            <input type="button" value="*" onClick={(e)=>action(e.target.value)} className='input'/>
            <input type="button" value="1" onClick={(e)=>num(e.target.value)} className='input'/>
            <input type="button" value="2" onClick={(e)=>num(e.target.value)} className='input'/>
            <input type="button" value="3" onClick={(e)=>num(e.target.value)} className='input'/>
            <input type="button" value="-" onClick={(e)=>action(e.target.value)} className='input'/>
            <input type="button" value="=" onClick={ans} className='input'/>
            <input type="button" value="0" onClick={(e)=>num(e.target.value)} className='input'/>
            <input type="button" value="." onClick={(e)=>num(e.target.value)} className='input'/>
            <input type="button" value="+" onClick={(e)=>action(e.target.value)} className='input'/>
            <input type="button" value="AC" onClick={erase} className='ac' />
            
            
            <input type="button" value="DEL"onClick={del}  className='ac'/>
            
            
            <input type="button" value="%" onClick={(e)=>action(e.target.value)} className='per'/>
            </div>
        </div>
        
        </div>
  )
}
    



export default App;
