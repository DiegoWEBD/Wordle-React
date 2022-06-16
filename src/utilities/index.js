export const API_BASE_URL = 'https://api.diego-maldonado.com/wordle'

export const BASE_COLOR = '#fafafa'
export const GRAY_COLOR = '#bababa'
export const YELLOW_COLOR = '#e7f032'
export const GREEN_COLOR = '#39CD4F'
export const RED_COLOR = '#ff1b1b'

export const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const textToArray = (text) => {

  if(!text) 
    return ['', '', '', '', '']

  const array = []

  for(let i=0; i<text.length; ++i){
      array.push(text[i])
  }

  return array
}

export const compareArrays = (arr1, arr2) => {
  
  if(arr1.length !== arr2.length)
      return false

  for(let i=0; i<arr1.length; ++i){
      if(arr1[i] !== arr2[i])
          return false
  }

  return true
}