export const regexToRemoveParentheses = /\(|\)/g;
export const dateRegex = /start_date=(\d{4}-\d{2}-\d{2})/;

// const textsForKilometers = {
//   text1: 'киллометр', 
//   text2: 'киллометра',
//   text3: 'киллометров',
// }

const textsForLunar = {
  text1: 'лунная орбита', 
  text2: 'лунные орбиты',
  text3: 'лунных орбит',
}

const textsForAsteroids = {
  text1: 'астериод', 
  text2: 'астероида',
  text3: 'астероидов',
}

export const textsForValues = {
  lunar: textsForLunar,
  asteroids: textsForAsteroids,
  // kilometers: textsForKilometers,
}
