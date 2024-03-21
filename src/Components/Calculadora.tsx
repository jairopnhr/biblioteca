
 export class Calculadora    {


    somar(val1: number,val2:number):number
    {
        return val1 + val2
    }
    dividir(val1:number,val2:number):number
    {
        try {
            if (val2!=0) {
                return val1/val2;
             } else {
                throw new Error("Divisão por zero não é permitida."); 
            }
        } catch (error) {
            console.log(error);
            
        }
        return 0;
    }

}