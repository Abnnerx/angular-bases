// desustructuracion de funciones
// al utilizar export puedo utilizarlo en otro modulo
export interface Product {
  description:string;
  price:number;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150.0
}

const tablet: Product = {
  description: 'iPad Air',
  price: 250.0
}

// objeto que se utilizara para mandarlo como parametro
interface TaxCalculationOptions {
  tax:number;
  products: Product[];
}

/*
function taxCalculation( options:TaxCalculationOptions): number[] {
let total = 0;
// uso del foreach
options.products.forEach( product => {
total += product.price;
});

return[total, total * options.tax];

}
*/

//desestructurado de lo anterior
/*
function taxCalculation( options:TaxCalculationOptions): number[] {
  let total = 0;
  // uso del foreach, obtenemos el campo especifico abriendo parentesis y entre llaves poniendo el nombre del campo
  options.products.forEach( ({price}) => {
  total += price;
  });

  return[total, total * options.tax];

  }
*/

 //function taxCalculation( options:TaxCalculationOptions): number[] {
  // function taxCalculation({tax, products } : TaxCalculationOptions): [number,number] {
 export function taxCalculation( options:TaxCalculationOptions): [number,number] {

   // desestructuracion
   const { tax , products } = options;

     let total = 0;
      // uso del foreach, obtenemos el campo especifico abriendo parentesis y entre llaves poniendo el nombre del campo
     // options.products.forEach( ({price}) => {
     products.forEach( ({price}) => {
     total += price;
      });

      //return[total, total * options.tax];
        return[total, total * tax];

      }

const shoppingCart = [phone, tablet];
const tax = 0.15;

/*
const result = taxCalculation({
  products: shoppingCart,
  tax:tax

  })
  console.log('Total', result[0]);
  console.log('Total', result[1]);

*/

// desestructuracion de lo anterior, pasando los valores a constantes
const[ total, taxTotal] = taxCalculation({
  products: shoppingCart,
  tax:tax

  })

  console.log('Total', total);
 console.log('Tax', taxTotal);





