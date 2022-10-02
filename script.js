// DALL-E sentense maker

const object = ['a man', 'a dog', 'a banana', 'a mermaid', 'Veerle', 'Salvatore', 'a book', 'Thomas'];
const verb = ['is eating', 'is jogging', 'is sleeping', 'is farting', 'is hunting', 'is reading', 'is washing'];
const where = ['in bed', 'in a car', 'in the cinema', 'in de baarmoeder', 'in a plane', 'in Milos anus'];

let newPhrase = []

const selectRandomIndexOfArr = arr => {
    const randomPicker = Math.floor(Math.random() * arr.length);
    return arr[randomPicker];
}

const makeThePhrase = (first,second,third) => {
    let phraseArr = [];
    phraseArr.push(first,second,third);

    return phraseArr.join(' ');
}

console.log(makeThePhrase(selectRandomIndexOfArr(object),selectRandomIndexOfArr(verb),selectRandomIndexOfArr(where)));

