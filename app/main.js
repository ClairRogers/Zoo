import Alligator from "./models/alligator.js";
import Badger from "./models/badger.js";
import Capybara from "./models/capybara.js";
import Dingo from "./models/dingo.js";
import Eagle from "./models/eagle.js";
import Ferret from "./models/ferret.js";
import Gecko from "./models/gecko.js";
import Heron from "./models/heron.js";
import Ibex from "./models/ibex.js";
import Jamie from "./models/jamie.js";
import Kangaroo from "./models/kangaroo.js";
import Lemming from "./models/lemming.js";
import Manatee from "./models/manatee.js";
import Narwhal from "./models/narwhal.js";
import Otter from "./models/otter.js";
import Penguin from "./models/penguin.js";
import Quail from "./models/quail.js";
import Raccoon from "./models/raccoon.js";
import Scorpion from "./models/scorpion.js";
import Tarantula from "./models/tarantula.js";
import Unicorn from "./models/unicorn.js";
import Viper from "./models/viper.js";
import Whale from "./models/whale.js";
import Xavier from "./models/xavier.js";
import Yak from "./models/yak.js";
import Zebra from "./models/zebra.js";

let alligator = new Alligator('Allie', 'green', 4, 'img')
let badger = new Badger('Badgie', 'black and white', 4, 'img')
let capybara = new Capybara('Capy', 'brown', 4, 'img')
let dingus = new Dingo('Dingus', 'brown and white', 4, 'img')
let eagle = new Eagle('Eggsy', 'white and brown', 2, 'img')
let ferret = new Ferret('Ferguson', 'black and tan', 4, 'img')
let gecko = new Gecko('Gerard', 'green', 4, 'img')
let heron = new Heron('Harrison', 'blue', 2, 'img')
let ibex = new Ibex('Ian', 'brown', 4, 'img')
let jamie = new Jamie('Jamie', 'chameleon', 2, 'img')
let kangaroo = new Kangaroo('Kanga', 'brown', 2, 'img')
let lemming = new Lemming('Coward', 'white', 4, 'img')
let manatee = new Manatee('Manny', 'grey', 0, 'img')
let narwhal = new Narwhal('Albert', 'grey and white', 0, 'img')
let otter = new Otter('Otis', 'brown', 4, 'img')
let penguin = new Penguin('Jeeves', 'black and white', 2, 'img')
let quail = new Quail('im scared', 'grey and black', 2, 'img')
let raccoon = new Raccoon('Rocket', 'grey and black', 2, 'img')
let scorpion = new Scorpion('Bethany', 'black', 6, 'img')
let tarantula = new Tarantula('Jared', 'never learned how to read', 19, 'img')
let unicorn = new Unicorn('Sailor Moon', 'silver', 4, 'img')
let viper = new Viper('Salazar', 'Slytherin', 0, 'img')
let whale = new Whale('Shamu', 'black and white', 0, 'img')
let xavier = new Xavier('Charles', 'the souls of the living', 0, 'img')
let yak = new Yak('Yakattack', 'brown', 4, 'img')
let zebra = new Zebra('Zelda', 'my name is not Link', 3, 'img')

let ark = [alligator, badger, capybara, dingus, eagle, ferret, gecko, heron, ibex, jamie, kangaroo, lemming, manatee, narwhal, otter, penguin, quail, raccoon, scorpion, tarantula, unicorn, viper, whale, xavier, yak, zebra]



function getNames() {
  let out = []
  for (let i = 0; i < ark.length; i++) {
    out.push(ark[i].name)
  }
  console.log(out.join(', '))
  document.getElementById('print').innerText = out.join(', ')
}
getNames()

function fourLegs() {
  let out = []
  for (let i = 0; i < ark.length; i++) {
    if (ark[i].legs == 4) {
      out.push(ark[i].name)
    }
  }
  console.log(out.join(', '))
  document.getElementById('legs').innerText = `Animals with four legs: ${out.join(', ')}`
}
fourLegs()

function blackWhite() {
  let out = []
  for (let i = 0; i < ark.length; i++) {
    if (ark[i].color == 'black and white') {
      out.push(ark[i].name)
    }
  }
  console.log(out.join(', '))
  document.getElementById('color').innerText = `Black and white animals: ${out.join(', ')}`
}
blackWhite()