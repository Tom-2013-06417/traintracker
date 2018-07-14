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
  },
  {
    id: 4,
    max_capacity: 3000,
    current_capacity: 0,
    status: 'OK',
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
  },
  {
    id: 5,
    max_capacity: 3000,
    current_capacity: 1700,
    status: 'OK', // OOS, DEC
    operating: true,
    coordinates: [14.5763261, 120.985999],
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
      lat: 14.657665000000021,
      long: 121.02109900000005
    }
  },
  {
    id: 'balintawak',
    name: 'Balintawak',
    order: 1,
    coordinates: {
      lat: 14.657499,
      long: 121.00359000000003
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
      lat: 14.644314000000001,
      long: 120.98355399999991
    }
  },
  {
    id: 'rpapa',
    name: 'R. Papa',
    order: 4,
    coordinates: {
      lat: 14.635923000000016,
      long: 120.98230000000001
    }
  },
  {
    id: 'abad_santos',
    name: 'Abad Santos',
    order: 5,
    coordinates: {
      lat: 14.63063500000001,
      long: 120.981403
    }
  },
  {
    id: 'blumentritt',
    name: 'Blumentritt',
    order: 6,
    coordinates: {
      lat: 14.622612999999996,
      long: 120.98288200000002
    }
  },
  {
    id: 'tayuman',
    name: 'Tayuman',
    order: 7,
    coordinates: {
      lat: 14.616637000000017,
      long: 120.98267999999996
    }
  },
  {
    id: 'bambang',
    name: 'Bambang',
    order: 8,
    coordinates: {
      lat: 14.611227000000024,
      long: 120.98247900000001
    }
  },
  {
    id: 'doroteo_jose',
    name: 'Doroteo Jose',
    order: 9,
    coordinates: {
      lat: 14.60530800000003,
      long: 120.982031
    }
  },
  {
    id: 'carriedo',
    name: 'Carriedo',
    order: 10,
    coordinates: {
      lat: 14.599024000000004,
      long: 120.98131400000011
    }
  },
  {
    id: 'central_station',
    name: 'Central Station',
    order: 11,
    coordinates: {
      lat: 14.592337221150366,
      long: 120.99836398425305
    }
  },
  {
    id: 'united_nations_avenue',
    name: 'United Nations Avenue',
    order: 12,
    coordinates: {
      lat: 14.58221320396174,
      long: 121.00127198425298
    }
  },
  {
    id: 'pedro_gil',
    name: 'Pedro Gil',
    order: 13,
    coordinates: {
      lat: 14.57660600000001,
      long: 120.98796799999991
    }
  },
  {
    id: 'quirino',
    name: 'Quirino',
    order: 14,
    coordinates: {
      lat: 14.570292999999998,
      long: 120.99157300000002
    }
  },
  {
    id: 'vito_cruz',
    name: 'Vito Cruz',
    order: 15,
    coordinates: {
      lat: 14.563107171555322,
      long: 121.0115719842529
    }
  },
  {
    id: 'gil_puyat',
    name: 'Gil Puyat',
    order: 16,
    coordinates: {
      lat: 14.55380215578776,
      long: 121.01380298425295
    }
  },
  {
    id: 'libertad',
    name: 'Libertad',
    order: 17,
    coordinates: {
      lat: 14.547322144813078,
      long: 121.01534798425291
    }
  },
  {
    id: 'edsa_taft',
    name: 'EDSA Taft',
    order: 18,
    coordinates: {
      lat: 14.538595130040378,
      long: 121.01731898425294
    }
  },
  {
    id: 'baclaran',
    name: 'Baclaran',
    order: 19,
    coordinates: {
      lat: 14.541936862067116,
      long: 121.00026007156373
    }
  }
]

export const fareMatrixForBeep = [
  [11, 13, 15, 16, 17, 18, 19, 20, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 29],
  [13, 11, 13, 15, 15, 16, 17, 18, 18, 19, 20, 20, 22, 22, 23, 24, 25, 26, 27, 27],
  [15, 13, 11, 12, 13, 14, 15, 15, 16, 17, 17, 18, 19, 20, 21, 22, 23, 23, 24, 25],
  [16, 15, 12, 11, 12, 13, 14, 14, 15, 15, 16, 17, 18, 19, 20, 21, 22, 22, 23, 24],
  [17, 15, 13, 12, 11, 12, 13, 13, 14, 15, 15, 16, 17, 18, 19, 20, 21, 21, 22, 23],
  [18, 16, 14, 13, 12, 11, 12, 13, 13, 14, 15, 15, 17, 17, 18, 19, 20, 21, 22, 22],
  [19, 17, 15, 14, 13, 12, 11, 12, 12, 13, 14, 14, 16, 16, 17, 18, 19, 20, 21, 21],
  [20, 18, 15, 14, 13, 13, 12, 11, 12, 12, 13, 14, 15, 16, 16, 17, 18, 18, 19, 20],
  [20, 18, 16, 15, 14, 13, 12, 12, 11, 12, 12, 13, 14, 15, 16, 17, 18, 18, 19, 20],
  [21, 19, 17, 15, 15, 14, 13, 12, 12, 11, 12, 12, 14, 14, 15, 16, 17, 18, 19, 19],
  [22, 20, 18, 17, 16, 15, 14, 14, 13, 12, 12, 11, 12, 13, 14, 15, 16, 16, 17, 18],
  [22, 20, 18, 17, 16, 15, 14, 14, 13, 12, 12, 11, 12, 13, 14, 15, 16, 16, 17, 18],
  [23, 22, 19, 18, 17, 17, 16, 15, 14, 14, 13, 12, 11, 12, 13, 13, 14, 15, 16, 17],
  [24, 22, 20, 19, 18, 17, 16, 16, 15, 14, 14, 13, 12, 11, 12, 13, 14, 14, 15, 16],
  [25, 23, 21, 20, 19, 18, 17, 16, 16, 15, 14, 14, 13, 12, 11, 12, 13, 14, 15, 15],
  [26, 24, 22, 21, 20, 19, 18, 17, 17, 16, 15, 15, 13, 13, 12, 11, 12, 13, 14, 14],
  [27, 25, 23, 22, 21, 20, 19, 18, 18, 17, 16, 16, 14, 14, 13, 12, 11, 12, 13, 13],
  [28, 26, 23, 22, 21, 21, 20, 19, 18, 18, 17, 16, 15, 14, 14, 13, 12, 11, 12, 13],
  [29, 27, 24, 23, 22, 22, 21, 20, 19, 19, 18, 17, 16, 15, 15, 14, 13, 12, 11, 12],
  [29, 27, 25, 24, 23, 22, 21, 21, 20, 19, 19, 18, 17, 16, 15, 14, 13, 13, 12, 11]
]

export const fareMatrixForSingleJourney = [
  [0, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
  [15, 0, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30, 30],
  [15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30],
  [20, 15, 15, 0, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30],
  [20, 15, 15, 15, 0, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 30, 30, 30, 30],
  [20, 20, 15, 15, 15, 0, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 30, 30, 30],
  [20, 20, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30],
  [20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30],
  [20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20],
  [20, 20, 20, 15, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20],
  [30, 20, 20, 20, 15, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20],
  [30, 20, 20, 20, 20, 15, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 20, 20, 20, 20],
  [30, 30, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20],
  [30, 30, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20],
  [30, 30, 30, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15],
  [30, 30, 30, 30, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15],
  [30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 0, 15, 15, 15],
  [30, 30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15],
  [30, 30, 30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15],
  [30, 30, 30, 30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0]
]
export function fetchCoordinates () {
  const stationCoordinates = [
    [14.6054402, 120.982061], // Doroteo Jose
    [14.5992548, 120.9791743], // Carriedo
    [14.5927811, 120.9794726], // Central
    [14.5928069, 120.9729065], // UN Ave
    [14.5763261, 120.985999] // Pedro Gil
  ]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stationCoordinates[Math.floor(Math.random() * 5)])
    }, 300)
  })
}

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
