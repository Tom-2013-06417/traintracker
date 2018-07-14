export const trains = [
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

export const stations = [
  {
    id: 'roosevelt',
    name: 'Roosevelt',
    order: 0,
    coordinates: {
      lat: 14.657494,
      long: 121.021211
    }
  },
  {
    id: 'balintawak',
    name: 'Balintawak',
    order: 1,
    coordinates: {
      lat: 14.657344,
      long: 121.003961
    }
  },
  {
    id: 'monumento',
    name: 'Monumento',
    order: 2,
    coordinates: {
      lat: 14.654094,
      long: 120.983906
    }
  },
  {
    id: 'fifth_avenue',
    name: '5th Avenue',
    order: 3,
    coordinates: {
      lat: 14.630642,
      long: 120.981397
    }
  }
]

export const fareMatrixForBeep = [
  [11, 13, 15, 16],
  [13, 11, 13, 15],
  [15, 13, 11, 12],
  [16, 15, 12, 11]
]

export const fareMatrixForSingleJourney = [
  [0, 15, 15, 20],
  [15, 0, 15, 15],
  [15, 15, 0, 15],
  [20, 15, 15, 0]
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
