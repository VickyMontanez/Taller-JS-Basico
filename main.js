const tablanota = {
   Tradicional : ["90-100","80-89","70-79","60-69","<60","0"],
   Rango: ["12-14","9-11","6-8","3-5","1-2","0"],
   Letras : ["A","B","C","D","E","F"],
   SBG: [4,3,2,1,0,0],
};
console.table(tablanota);

let nota ={};
let metodo = 0;
metodo=prompt("Escoge tu tipo de calificación (1-3): 1.Tradicional 2.Point-Range 3.Letras");
   if (metodo == 1){
      console.log("Haz escogido el Metodo Tradicional")
      nota= prompt("¿Cuál es tu nota? (%)")
      switch(nota){
         case (nota>90&&nota<100):
            mensaje = "super";
            break;
         case (nota>80&&nota<89):
            mensaje = "bien";
            break;
         case (nota>70&&nota<79):
            mensaje = "p";
            break;
         case (nota>60&&nota<69):
            mensaje = "a";
            break;
         case (nota<60):
            mensaje = "y";
            break;
      }
   } else if (metodo == 2){
      console.log("Haz escogido el Metodo de Rango")
      nota= prompt("¿Cuál es tu nota? (0-14)")
   } else if (metodo == 3){
      console.log("Haz escogido el Metodo de Letras")
      nota= prompt("¿Cuál es tu nota? (A-F)")
   } else{
      alert("Elige nuevamente")
   }

console.log("Tu nota es " +nota+" "+mensaje);