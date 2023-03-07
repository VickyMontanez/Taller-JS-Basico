const tablanota = {
    Tradicional : ["90-100","80-89","70-79","60-69","<60","0"],
    Rango: ["12-14","9-11","6-8","3-5","1-2","0"],
    Letras : ["A","B","C","D","E","F"],
    SBG: [5,4,3,2,1,0],
};
console.table(tablanota);

let nota ={};
let metodo = 0;
let mensaje =["Excelente!", "Felicitaciones!", "Esfuerzate!","Hoy no fue tu día!","Busca ayuda","Necesitamos hablar..."]
metodo=prompt("Escoge tu tipo de calificación (1-3): 1.Tradicional 2.Point-Range 3.Letras");

if (metodo == 1){
    console.log("Haz escogido el Metodo Tradicional");
    nota= prompt("¿Cuál es tu nota? (%)");
    if (nota>=90&&nota<=100){
        console.log("Tu nota es "+nota+" "+mensaje[0]);
        console.log("Tu nota en el sitema SBG es: 5");
    }else if (nota>=80&&nota<=89){
        console.log("Tu nota es "+nota+" "+mensaje[1]);
        console.log("Tu nota en el sitema SBG es: 4");
    }else if (nota>=70&&nota<=79){
        console.log("Tu nota es "+nota+" "+mensaje[2]);
        console.log("Tu nota en el sitema SBG es: 3");
    }else if (nota>=60&&nota<=69){
        console.log("Tu nota es "+nota+" "+mensaje[3]);
        console.log("Tu nota en el sitema SBG es: 2");
    }else if (nota<=60&&nota>0){
        console.log("Tu nota es "+nota+" "+mensaje[4]);
        console.log("Tu nota en el sitema SBG es: 1");
    }else if (nota ==0){
        console.log("Tu nota es "+nota+" "+mensaje[5]);
        console.log("Tu nota en el sitema SBG es: 0");
    }
}else if (metodo == 2){
    console.log("Haz escogido el Metodo de Rango");
    nota= prompt("¿Cuál es tu nota? (0-14)");
    if (nota>=12&&nota<=14){
        console.log("Tu nota es "+nota+" "+mensaje[0]);
        console.log("Tu nota en el sitema SBG es: 5");
    }else if (nota>=9&&nota<=11){
        console.log("Tu nota es "+nota+" "+mensaje[1]);
        console.log("Tu nota en el sitema SBG es: 4");
    }else if (nota>=6&&nota<=8){
        console.log("Tu nota es "+nota+" "+mensaje[2]);
        console.log("Tu nota en el sitema SBG es: 3");
    }else if (nota>=3&&nota<=5){
        console.log("Tu nota es "+nota+" "+mensaje[3]);
        console.log("Tu nota en el sitema SBG es: 2");
    }else if (nota>=1&&nota<=2){
        console.log("Tu nota es "+nota+" "+mensaje[4]);
        console.log("Tu nota en el sitema SBG es: 1");
    }else if (nota==0){
        console.log("Tu nota es "+nota+" "+mensaje[5]);
        console.log("Tu nota en el sitema SBG es: 0");
    }

/*     switch(nota){
        case (nota>12&&nota<14):
            console.log("Tu nota es "+nota+" "+mensaje[0]);
        break;
        case (nota>9&&nota<11):
        break;
        case (nota>6&&nota<8):
        break;
        case (nota>3&&nota<5):
        break;
        case (nota>1&&nota<2):
        break; 
        case 0:
        break;
    }
 */
}else if (metodo == 3){
    console.log("Haz escogido el Metodo de Letras");
    nota= prompt("¿Cuál es tu nota? (A-F) MAYUS");
    if (nota =="A"){
        console.log("Tu nota es "+nota+" "+mensaje[0]);
        console.log("Tu nota en el sitema SBG es: 5");
    }else if (nota =="B"){
        console.log("Tu nota es "+nota+" "+mensaje[1]);
        console.log("Tu nota en el sitema SBG es: 4");
    }else if (nota =="C"){
        console.log("Tu nota es "+nota+" "+mensaje[2]);
        console.log("Tu nota en el sitema SBG es: 3");
    }else if (nota =="D"){
        console.log("Tu nota es "+nota+" "+mensaje[3]);
        console.log("Tu nota en el sitema SBG es: 2");
    }else if (nota =="E"){
        console.log("Tu nota es "+nota+" "+mensaje[4]);
        console.log("Tu nota en el sitema SBG es: 1");
    }else if (nota =="F"){
        console.log("Tu nota es "+nota+" "+mensaje[5]);
        console.log("Tu nota en el sitema SBG es: 0");
    }
/*     switch(nota){
        case ("A"):
        break;
        case ("B"):
        break;
        case ("C"):
        break;
        case ("D"):
        break;
        case ("E"):
        break;
        case ("F"):
        break;
    }
 */
}else{
    alert("Elige nuevamente");
};
