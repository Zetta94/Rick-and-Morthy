import style from './Card.module.css';
import styleBtn from './ButtonX.module.css';
import {Link} from "react-router-dom";


export default function Card({name,gender,onClose,species,image,id}) {

   return (
      <div className={style.card}>
            <button className={styleBtn.button} onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
            <h2 className={style.h2st}>{name}</h2>
         </Link>
         <h2>{gender}</h2>
         <h2>{species}</h2>
         <img  src={image} alt={name} width="250px"/> 
      </div>
   );
}

