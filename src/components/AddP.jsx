import { useState } from "react"
import {supabase} from "../supabse"
import "./Addp.css"
export function Addp(){
    const [name,setname] =useState("")
    const [price,setprice] =useState("")
    const [image,setimage] =useState("")
    
    async function Addproduct() {
        await supabase.from("Products").insert({Name:name,Price:price,image_url:image})
        alert("Product added")
        
    }
    return(
        <>
        <div className="add-product-container">
            

            <div className="label-section">
                <label >name:</label>
                <label >price:</label>
                <label >image_url:</label>
     
            </div>

            <div className="input-section">
                <input type="text" onChange={(e)=>(setname(e.target.value))}/>
                <input type="text" onChange={(e)=>(setprice(e.target.value))}/>
                <input type="text" onChange={(e)=>(setimage(e.target.value))}/>

            </div>

        </div>
        <div className="action-button">
            <button className="submit-btn" onClick={()=>Addproduct()}>submit</button>

        </div>

        
        </>
    )

}