

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const farmAnimals = 'cow horse sheep pig chicken';
const separatedAnimals = farmAnimals.split(' ')
// const animalSound = ['moo', 'neigh', 'baa', 'oink', 'cluck'] 

const [moo, neigh, baa, oink, cluck] = separatedAnimals;
console.log(moo)
console.log(baa)
console.log(cluck)

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const fourAnimals = [...separatedAnimals]
fourAnimals.splice(1,1)
const [bessie, dolly, babe, little] = fourAnimals
console.log(bessie)

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const threeAnimals = [...fourAnimals]
threeAnimals.splice(3,1)
const [blackAndWhite, black, pink] = threeAnimals
console.log(blackAndWhite)

// 4. Use destructuring to assign appropriate variables using the color names.
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors;
console.log(blue)

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const sixColors = [...colors]
sixColors.splice(5, 1)
const [r, o, y, g, b, v] = sixColors
console.log(sixColors)

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const indg = colors[5] 
console.log(indg)

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 7. Use destructuring to assign all variables using the keys as the variable names
let {muppetName, color, song, job, partner} = muppet
console.log(color)
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;

console.log(song2);
console.log(song4);
console.log(nestedJob);
console.log(nestedPartner);