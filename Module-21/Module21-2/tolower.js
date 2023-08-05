const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai'

const searchstring = 'bondhu'

const lyricsLowerCsae = lyrics.toLowerCase()
// const doesExist = lyricsLowerCsae.includes(searchstring)
const searchStringLower = searchstring.toLocaleLowerCase()
const doesExist = lyricsLowerCsae.includes(searchStringLower)

const doesExistOneLine = lyrics.toLowerCase().includes(searchstring.toLowerCase());
// console.log(doesExist)
// console.log(doesExistOneLine)