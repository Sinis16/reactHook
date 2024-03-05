import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const { useEffect, useState } = require("react");


export default function Detail() {
 const params = useParams();

 const [mascotaDatos, setMascotas] = useState([]);
 useEffect(() => {
   const URL =
     "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setMascotas(data[params.mascotaId - 1]);
     });
 }, []);

 return (
  <div>
    <h1> {mascotaDatos.nombre} </h1>
    <img src={mascotaDatos.foto} className="fotoMascota" alt={mascotaDatos.descripcion} />
    <h2> {mascotaDatos.raza}</h2>
  </div>
 );
}