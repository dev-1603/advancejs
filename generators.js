function normalfunction() {
    console.log('hello')
    console.log('world')

}

// generator function

function* generatorFunction() {
    yield 'hello'
    yield 'world'
}

const generatorObj = generatorFunction()


for (const word of generatorObj) {
    console.log(word);
}