import {Invoice} from "../models/invoice";

export const InvoiceData: Invoice = {
  id: 1,
  name: 'Componentes de PC',
  client: {
    name: 'David',
    lastname: 'Saldivar',
    address: {
      country: 'MEX',
      city: 'MTY',
      street: 'Olmeca',
      number: 123
    }
  },
  company: {
    name: 'PCEL',
    fiscalNumber: 325252
  },
  items: [
    {
      id: 1,
      product: 'Core intel 9',
      price: 145.90,
      quantity: 1
    },{
      id: 2,
      product: 'Teclado',
      price: 5.30,
      quantity: 2
    },{
      id: 3,
      product: 'mouse',
      price: 2.0,
      quantity: 2
    }]

}
