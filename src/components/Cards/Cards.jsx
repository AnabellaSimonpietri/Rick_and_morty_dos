import Card from "../Card/Card"

export default function Cards({characters}) {
   const onClose = () => window.alert("Emulamos que se cierra la card")
   return (
   <div>
      {characters.map(({name, species, gender, image, onClose}) => {
         return (
            <Card
            name = {name}
            species = {species}
            gender = {gender}
            image = {image}
            onClose={onClose}
            />
       );
    })}
   </div>
   );
}
