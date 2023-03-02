
//add items to backpack
let backpack = []

backpack.push('pokeball')
backpack.push('potion')
backpack.push('pokedollars')

//take pokeball out of backpack
// or can use backpack.splice(1,1)
backpack.shift()

//found an item and put it in the backpack
let foundItem = 'waterstone'

backpack.push(foundItem)

//remove waterstone
backpack.pop()

//tell ash how many items in backpack
let itemCount = backpack.length
//console.log(itemCount)

//add multiple items
backpack.push('great ball', 'antidote', 'revive')

//take items out of backpack and put in satchel
//let satchel = backpack.splice(3,2)
//console.log(`The satchel has ${satchel}`)


//show whats in array
//console.log(`The backpack has ${backpack}`)




//list backpacks items one by one
// for(i = 0; i < backpack.length; i++){
//     console.log(backpack[i])
// }


// make an if statement to test if there are more than 3 items in backpack, if there are less then show the whole list
// if(backpack.length >= 3){
//     for(i = 0; i < 3; i++){
//         console.log(backpack[i])
//     }
// } else{
//     for(i = 0; i < backpack.length; i++){
//             console.log(backpack[i])
//         }
// }




let guessMe = 54

while (guessMe < 100) {
    console.log('------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log(`Divisible by 4 & 5, added 25`)
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log(`divisible by 3, added 27`)
    } else {
        guessMe += 3
        console.log(`not divisible, added 3`)
    }
    guessMe += 22
    console.log(`Added 22, guess me is now: ${guessMe}`)
}

console.log('final value', guessMe)