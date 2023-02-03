import style from "./Form.module.css";
import { useState } from "react";
import validation from "./validation.js";

const Form =({login})=>{
    const [userData, setUserData] = useState({ 
        username: '',
        password: '' 
      });

    const [errors, setErrors] = useState({ 
        username: '',
        password: '' 
    });
    
    const handleInputChange =(event)=>{
        setUserData({
          ...userData,
          [event.target.name] : event.target.value
        })
        setErrors(
            validation({
                ...userData,
                [event.target.name] : event.target.value
            })
        )
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        login(userData)
    }
      
    return(
        
        <div className={style.divEfecto}>
            <div className={style.div2}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username" className={style.label} >Usarname:</label>
                    <input  name="username" className={style.input} type="text" value={userData.name} onChange={handleInputChange}/>
                    {errors.username && <p className={style.p1}>{errors.username}</p>}
                    <br />
                    <label htmlFor="password" className={style.label}>Password: </label>
                    <input name="password" className={style.input} type="text" value={userData.password} onChange={handleInputChange}/>
                    {errors.password && <p className={style.p1}>{errors.password}</p>}
                    <br />
                    <button>LOGIN</button>
                </form>
            </div>
            <div className={style.div3}>
                <span className={style.loader}></span>
            </div>
        </div>
    )
}

export default Form;