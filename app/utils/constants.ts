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

export const textsForValues = {
  lunar: textsForLunar,
  // kilometers: textsForKilometers,
}
