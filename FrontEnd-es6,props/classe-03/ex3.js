console.log('==========Sem Otimização==========')
const tripData = {
  name: 'Daniel Lopes',
  origin: 'Pres. Prudente',
  destination: 'São Paulo',
  date: '29/02/2022',
  hour: '17:45'
};
sayTripPath(
  tripData.name,
  tripData.origin,
  tripData.destination,
  tripData.date,
  tripData.hour
);
function sayTripPath(name, origin, destination, date, hour) {
  console.log(`
    Olá ${name}, o seu voo que sai de ${origin} com destino a ${destination}
    está agendado para ${date} às ${hour}!
  `);
};

console.log('==========Com Otimização==========')

const TripData = {
  name: 'Daniel Lopes',
  origin: 'Pres. Prudente',
  destination: 'São Paulo',
  date: '29/02/2022',
  hour: '17:45'
};

const {name,origin,destination,date,hour}= TripData

function SayTripPath(name, origin, destination, date, hour) {
  console.log(`
    Olá ${name}, o seu voo que sai de ${origin} com destino a ${destination}
    está agendado para ${date} às ${hour}!
  `);
};



SayTripPath(
  name,
  origin,
  destination,
  date,
  hour
);
           //=====voltar e tentar otimizar mais ainda depois