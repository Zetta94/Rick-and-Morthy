import Card from './Card';
import style from './Cards.module.css';

export default function Cards({characters,onClose}) {
   return (
      <div className={style.card}>
         { characters.length!==0 && characters.map(({id,name,species,gender,image})=>{
           return (<Card 
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            id={id}
            onClose={()=>onClose(id)}/>)
         })}
      </div>
   )
}
