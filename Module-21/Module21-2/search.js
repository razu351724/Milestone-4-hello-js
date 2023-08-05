// কোনো একটি জিনিস স্টিরিং এর ভেতর আছে কী না সেটা খুজে includes

const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai'

const searchstring = 'bondhu'
// const doesExist = lyrics.includes('kala')
// const doesExist = lyrics.includes('Ami')
// const doesExist = lyrics.toUpperCase(lyrics)
const lyricsLowerCsae = lyrics.toLowerCase()
const doesExist = lyricsLowerCsae.includes(searchstring)
console.log(doesExist)