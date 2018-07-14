const trains = [
  {
    id: 1,
    max_capacity: 3000,
    current_capacity: 1700,
    status: 'OK', // OOS, DEC
    operating: true,
    coordinates: [14.6054402, 120.982061],
    model: {
      name: '1000 series',
      year: 1984,
      manufacturer: 'SA Ateliers de Constructions Electriques de Charleroi',
      car_type: '8-axle (4-bogie) rigid body',
      length: 29280,
      width: 2500,
      height: 3535,
      configuration: 'MC-MC 59590 mm (2-car)',
      articulation: 'double',
      doors: {
        width: 2500,
        type: 'plug',
        doors_per_side: 5
      },
      traction_system: 'DC 218 Kw Chopper Type x 1',
      traction_power: '750 V DC OCS; pantograph power connection',
      body_material: 'BI sheet',
      ventilation: 'Forced ventilation'
    }
  },
  {
    id: 2,
    max_capacity: 3000,
    current_capacity: 0,
    status: 'OOS',
    operating: false,
    coordinates: [14.6054402, 120.982061],
    model: {
      name: '1000 series',
      year: 1984,
      manufacturer: 'SA Ateliers de Constructions Electriques de Charleroi',
      car_type: '8-axle (4-bogie) rigid body',
      length: 29280,
      width: 2500,
      height: 3535,
      configuration: 'MC-MC 59590 mm (2-car)',
      articulation: 'double',
      doors: {
        width: 2500,
        type: 'plug',
        doors_per_side: 5
      },
      traction_system: 'DC 218 Kw Chopper Type x 1',
      traction_power: '750 V DC OCS; pantograph power connection',
      body_material: 'BI sheet',
      ventilation: 'Forced ventilation'
    }
  },
  {
    id: 3,
    max_capacity: 3000,
    current_capacity: 0,
    status: 'DEC',
    operating: false,
    coordinates: [0, 0],
    model: {
      name: '1000 series',
      year: 1984,
      manufacturer: 'SA Ateliers de Constructions Electriques de Charleroi',
      car_type: '8-axle (4-bogie) rigid body',
      length: 29280,
      width: 2500,
      height: 3535,
      configuration: 'MC-MC 59590 mm (2-car)',
      articulation: 'double',
      doors: {
        width: 2500,
        type: 'plug',
        doors_per_side: 5
      },
      traction_system: 'DC 218 Kw Chopper Type x 1',
      traction_power: '750 V DC OCS; pantograph power connection',
      body_material: 'BI sheet',
      ventilation: 'Forced ventilation'
    }
  }
]

export function fetchTrains () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(trains)
    }, 300)
  })
}

export function fetchTrain (trainId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const train = trains.find(train => train.id === trainId)
      if (train) {
        resolve(train)
      } else {
        reject(Error('Train does not exist'))
      }
    }, 300)
  })
}
