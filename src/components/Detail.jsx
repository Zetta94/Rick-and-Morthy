import style from "./Detail.module.css"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Detail(){
    const {detailId} = useParams()
    const [character,setCharacter] = useState({})
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
     .then((char) => {
       if (char.name) {
            setCharacter(char);
         } else {
          window.alert("No hay personajes con ese ID");
         }
     })
     .catch((err) => {
          window.alert("No hay personajes con ese ID");
      });
     return setCharacter({});
    }, [detailId]);

    return(
        <div>
            <Link to="/home">
                <button>Home</button>
            </Link>
            <h2 className={style.h2}>{character?.name}</h2>
            <h2 className={style.h2}>{character?.status}</h2>
            <h2 className={style.h2}>{character?.species}</h2>
            <h2 className={style.h2}>{character?.gender}</h2>
            <h2 className={style.h2}>{character?.origin?.name}</h2>
            <img src={character.image} alt={character.name} />

        </div>
    )
}