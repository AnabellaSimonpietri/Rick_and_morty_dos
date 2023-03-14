import style from "./Card.module.css";

export default function Card({name,species,gender,image,onClose}) {
   return (
   <div className={style.container}>
         <button onClick={onClose} className={style.closeButton} >X</button> 
         <h2>Name: {name} </h2>
         <h2>Species: {species} </h2>
         <h2>Gender: {gender} </h2> 
         <img  src={image} alt="" /> 
      </div>
   );
}
