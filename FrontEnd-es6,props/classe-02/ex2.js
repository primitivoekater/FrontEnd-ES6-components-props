console.log('==========Sem Otimização==========')


const car = {
  name: 'Corolla',
  year: 2022,
  color: 'white'
}

const ownerContact = {
  phoneContact: "(00) 00000-0000",
  owner: 'Daniel',
}

const infosForSale = {
  name: car.name,
  year: car.year,
  color: car.color,
  phoneContact: ownerContact.phoneContact,
  owner: ownerContact.owner + ' Lopes',
  price: 120000,
  onlySale: true
}

console.log(infosForSale);


console.log('==========Com Otimização==========')


const Car = {
  name: 'Corolla',
  year: 2022,
  color: 'white'
}

const OwnerContact = {
  phoneContact: "(00) 00000-0000",
  owner: 'Daniel',
}
const {name,year,color}=Car
const {phoneContact,owner}=ownerContact
const InfosForSale = {
  name,
  year,
  color,
  phoneContact,
  owner: ownerContact.owner + ' Lopes',
  price: 120000,
  onlySale: true
}

         console.log(InfosForSale);