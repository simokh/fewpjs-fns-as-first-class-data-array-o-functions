function wakeDog(dogName, dogBread) {
console.log(`Wake ${dogName} the ${dogBread}`);
    return `Wake ${dogName} the ${dogBread}`
}


function leashDog(dogName, dogBread) {
console.log(`Leash ${dogName} the ${dogBread}`);
return `Leash ${dogName} the ${dogBread}`
}

function walkToPark(dogName, dogBread) {
    console.log(`Walk to the park with ${dogName} the ${dogBread}`)
    return `Walk to the park with ${dogName} the ${dogBread}`
}

function throwFrisbee(dogName, dogBread) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBread}`)
    return `Throw the frisbee for ${dogName} the ${dogBread}`
}

function walkHome(dogName, dogBread) {
    console.log(`Walk home with ${dogName} the ${dogBread}`)
    return `Walk home with ${dogName} the ${dogBread}`
}

function unleashDog(dogName, dogBread) {
    console.log(`Unleash ${dogName} the ${dogBread}`)
    return `Unleash ${dogName} the ${dogBread}`
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


function exerciseDog(dogName, dogBread) {

    return routine.map(function(dog) {
    return dog(dogName, dogBread)
    })
}