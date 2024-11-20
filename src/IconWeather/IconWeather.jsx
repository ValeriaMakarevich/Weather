function IconWeather({ weather }) {
 
   if (weather[0].clouds === "ясно") {
     return (
       <>
         <img src="icons8-солнце-94.png" alt="Солнце" />
       </>
     );
   } else if (
     weather[0].clouds === "переменная облачность" ||
     weather[0].clouds === "облачно с прояснениями"
   ) {
     return (
       <>
         <img src="icons8-частичная-облачность-48.png" alt="" />
       </>
     );
   } else if (
     weather[0].clouds === "облачно" ||
     weather[0].clouds === "пасмурно"
   ) {
     return (
       <>
         <img src="icons8-частичная-облачность-48 (1).png" alt="" />
       </>
     );
   } else if (
     weather[0].clouds === "небольшой снег" ||
     weather[0].clouds === "снег" ||
     weather[0].clouds === "сильный снег"
   ) {
     return <img src="icons8-снегопад-48.png" alt="" />;
   } else {
     return (
       <>
         <img src="icons8-сильный-дождь-48.png" alt="" />
       </>
     );
   }
 }

export default IconWeather;
