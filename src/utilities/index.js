export const API_BASE_URL = 'https://api.diego-maldonado.com/wordle'

export const BASE_COLOR = '#fafafa'
export const GRAY_COLOR = '#bababa'
export const YELLOW_COLOR = '#e7f032'
export const GREEN_COLOR = '#39CD4F'
export const RED_COLOR = '#ff1b1b'

export const textToArray = (text) => {

  if(!text) 
    return ['', '', '', '', '']

  const array = []

  for(let i=0; i<text.length; ++i){
      array.push(text[i])
  }

  return array
}

export const getWordForGame = async () => {

  const response = await fetch('https://clientes.api.greenborn.com.ar/public-random-word?c=99')
  let words = await response.json()
  words = words.filter(w => w.length === 5)
  
  const index = parseInt(Math.random() * (words.length - 1))
  const word = removeAccents(words[index].toUpperCase())

  // *** JUST FOR PROVES ***
  console.log(word)
  // DON´T FORGET 

  return word
}

const removeAccents = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}