const lyrics = 'Tumi bondhu kala pakhi ami jeno ki.'
// console.log(lyrics.indexOf('kayla'))
// console.log(lyrics.indexOf('Tumi'))

if(lyrics.indexOf('tumt') !== -1){
    console.log('exists inside the string')
}
else{
    console.log('cannot find it')
}

//startswith
console.log(lyrics.startsWith('Tumi'))
console.log(lyrics.startsWith('2umi'))

//endswith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

fileName.endsWith('.pdf')