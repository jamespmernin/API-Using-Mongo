const db = require('../db/connection')
const Product = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const products =
    [{
      "_id": {
        "$oid": "5f91e0217838572d918e5f9e"
      },
      "#": "1",
      "Name": "Bulbasaur",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "318",
      "HP": "45",
      "Attack": "49",
      "Defense": "49",
      "Sp": {
        " Atk": "65",
        " Def": "65"
      },
      "Speed": "45",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5f9f"
      },
      "#": "2",
      "Name": "Ivysaur",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "405",
      "HP": "60",
      "Attack": "62",
      "Defense": "63",
      "Sp": {
        " Atk": "80",
        " Def": "80"
      },
      "Speed": "60",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fa0"
      },
      "#": "3",
      "Name": "Venusaur",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "525",
      "HP": "80",
      "Attack": "82",
      "Defense": "83",
      "Sp": {
        " Atk": "100",
        " Def": "100"
      },
      "Speed": "80",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fa1"
      },
      "#": "3",
      "Name": "VenusaurMega Venusaur",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "625",
      "HP": "80",
      "Attack": "100",
      "Defense": "123",
      "Sp": {
        " Atk": "122",
        " Def": "120"
      },
      "Speed": "80",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fa2"
      },
      "#": "4",
      "Name": "Charmander",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "309",
      "HP": "39",
      "Attack": "52",
      "Defense": "43",
      "Sp": {
        " Atk": "60",
        " Def": "50"
      },
      "Speed": "65",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fa3"
      },
      "#": "5",
      "Name": "Charmeleon",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "405",
      "HP": "58",
      "Attack": "64",
      "Defense": "58",
      "Sp": {
        " Atk": "80",
        " Def": "65"
      },
      "Speed": "80",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fa4"
      },
      "#": "6",
      "Name": "Charizard",
      "Type 1": "Fire",
      "Type 2": "Flying",
      "Total": "534",
      "HP": "78",
      "Attack": "84",
      "Defense": "78",
      "Sp": {
        " Atk": "109",
        " Def": "85"
      },
      "Speed": "100",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fa5"
      },
      "#": "6",
      "Name": "CharizardMega Charizard X",
      "Type 1": "Fire",
      "Type 2": "Dragon",
      "Total": "634",
      "HP": "78",
      "Attack": "130",
      "Defense": "111",
      "Sp": {
        " Atk": "130",
        " Def": "85"
      },
      "Speed": "100",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fa6"
      },
      "#": "6",
      "Name": "CharizardMega Charizard Y",
      "Type 1": "Fire",
      "Type 2": "Flying",
      "Total": "634",
      "HP": "78",
      "Attack": "104",
      "Defense": "78",
      "Sp": {
        " Atk": "159",
        " Def": "115"
      },
      "Speed": "100",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fa7"
      },
      "#": "7",
      "Name": "Squirtle",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "314",
      "HP": "44",
      "Attack": "48",
      "Defense": "65",
      "Sp": {
        " Atk": "50",
        " Def": "64"
      },
      "Speed": "43",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fa8"
      },
      "#": "8",
      "Name": "Wartortle",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "405",
      "HP": "59",
      "Attack": "63",
      "Defense": "80",
      "Sp": {
        " Atk": "65",
        " Def": "80"
      },
      "Speed": "58",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fa9"
      },
      "#": "9",
      "Name": "Blastoise",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "530",
      "HP": "79",
      "Attack": "83",
      "Defense": "100",
      "Sp": {
        " Atk": "85",
        " Def": "105"
      },
      "Speed": "78",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5faa"
      },
      "#": "9",
      "Name": "BlastoiseMega Blastoise",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "630",
      "HP": "79",
      "Attack": "103",
      "Defense": "120",
      "Sp": {
        " Atk": "135",
        " Def": "115"
      },
      "Speed": "78",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fab"
      },
      "#": "10",
      "Name": "Caterpie",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "195",
      "HP": "45",
      "Attack": "30",
      "Defense": "35",
      "Sp": {
        " Atk": "20",
        " Def": "20"
      },
      "Speed": "45",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fac"
      },
      "#": "11",
      "Name": "Metapod",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "205",
      "HP": "50",
      "Attack": "20",
      "Defense": "55",
      "Sp": {
        " Atk": "25",
        " Def": "25"
      },
      "Speed": "30",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fad"
      },
      "#": "12",
      "Name": "Butterfree",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "395",
      "HP": "60",
      "Attack": "45",
      "Defense": "50",
      "Sp": {
        " Atk": "90",
        " Def": "80"
      },
      "Speed": "70",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fae"
      },
      "#": "13",
      "Name": "Weedle",
      "Type 1": "Bug",
      "Type 2": "Poison",
      "Total": "195",
      "HP": "40",
      "Attack": "35",
      "Defense": "30",
      "Sp": {
        " Atk": "20",
        " Def": "20"
      },
      "Speed": "50",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5faf"
      },
      "#": "14",
      "Name": "Kakuna",
      "Type 1": "Bug",
      "Type 2": "Poison",
      "Total": "205",
      "HP": "45",
      "Attack": "25",
      "Defense": "50",
      "Sp": {
        " Atk": "25",
        " Def": "25"
      },
      "Speed": "35",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fb0"
      },
      "#": "15",
      "Name": "Beedrill",
      "Type 1": "Bug",
      "Type 2": "Poison",
      "Total": "395",
      "HP": "65",
      "Attack": "90",
      "Defense": "40",
      "Sp": {
        " Atk": "45",
        " Def": "80"
      },
      "Speed": "75",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fb1"
      },
      "#": "15",
      "Name": "BeedrillMega Beedrill",
      "Type 1": "Bug",
      "Type 2": "Poison",
      "Total": "495",
      "HP": "65",
      "Attack": "150",
      "Defense": "40",
      "Sp": {
        " Atk": "15",
        " Def": "80"
      },
      "Speed": "145",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fb2"
      },
      "#": "16",
      "Name": "Pidgey",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "251",
      "HP": "40",
      "Attack": "45",
      "Defense": "40",
      "Sp": {
        " Atk": "35",
        " Def": "35"
      },
      "Speed": "56",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fb3"
      },
      "#": "17",
      "Name": "Pidgeotto",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "349",
      "HP": "63",
      "Attack": "60",
      "Defense": "55",
      "Sp": {
        " Atk": "50",
        " Def": "50"
      },
      "Speed": "71",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fb4"
      },
      "#": "18",
      "Name": "Pidgeot",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "479",
      "HP": "83",
      "Attack": "80",
      "Defense": "75",
      "Sp": {
        " Atk": "70",
        " Def": "70"
      },
      "Speed": "101",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fb5"
      },
      "#": "18",
      "Name": "PidgeotMega Pidgeot",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "579",
      "HP": "83",
      "Attack": "80",
      "Defense": "80",
      "Sp": {
        " Atk": "135",
        " Def": "80"
      },
      "Speed": "121",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fb6"
      },
      "#": "19",
      "Name": "Rattata",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "253",
      "HP": "30",
      "Attack": "56",
      "Defense": "35",
      "Sp": {
        " Atk": "25",
        " Def": "35"
      },
      "Speed": "72",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fb7"
      },
      "#": "20",
      "Name": "Raticate",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "413",
      "HP": "55",
      "Attack": "81",
      "Defense": "60",
      "Sp": {
        " Atk": "50",
        " Def": "70"
      },
      "Speed": "97",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fb8"
      },
      "#": "21",
      "Name": "Spearow",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "262",
      "HP": "40",
      "Attack": "60",
      "Defense": "30",
      "Sp": {
        " Atk": "31",
        " Def": "31"
      },
      "Speed": "70",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fb9"
      },
      "#": "22",
      "Name": "Fearow",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "442",
      "HP": "65",
      "Attack": "90",
      "Defense": "65",
      "Sp": {
        " Atk": "61",
        " Def": "61"
      },
      "Speed": "100",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fba"
      },
      "#": "23",
      "Name": "Ekans",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "288",
      "HP": "35",
      "Attack": "60",
      "Defense": "44",
      "Sp": {
        " Atk": "40",
        " Def": "54"
      },
      "Speed": "55",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fbb"
      },
      "#": "24",
      "Name": "Arbok",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "438",
      "HP": "60",
      "Attack": "85",
      "Defense": "69",
      "Sp": {
        " Atk": "65",
        " Def": "79"
      },
      "Speed": "80",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fbc"
      },
      "#": "25",
      "Name": "Pikachu",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "320",
      "HP": "35",
      "Attack": "55",
      "Defense": "40",
      "Sp": {
        " Atk": "50",
        " Def": "50"
      },
      "Speed": "90",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fbd"
      },
      "#": "26",
      "Name": "Raichu",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "485",
      "HP": "60",
      "Attack": "90",
      "Defense": "55",
      "Sp": {
        " Atk": "90",
        " Def": "80"
      },
      "Speed": "110",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fbe"
      },
      "#": "27",
      "Name": "Sandshrew",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "300",
      "HP": "50",
      "Attack": "75",
      "Defense": "85",
      "Sp": {
        " Atk": "20",
        " Def": "30"
      },
      "Speed": "40",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fbf"
      },
      "#": "28",
      "Name": "Sandslash",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "450",
      "HP": "75",
      "Attack": "100",
      "Defense": "110",
      "Sp": {
        " Atk": "45",
        " Def": "55"
      },
      "Speed": "65",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fc0"
      },
      "#": "29",
      "Name": "Nidoran♀",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "275",
      "HP": "55",
      "Attack": "47",
      "Defense": "52",
      "Sp": {
        " Atk": "40",
        " Def": "40"
      },
      "Speed": "41",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fc1"
      },
      "#": "30",
      "Name": "Nidorina",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "365",
      "HP": "70",
      "Attack": "62",
      "Defense": "67",
      "Sp": {
        " Atk": "55",
        " Def": "55"
      },
      "Speed": "56",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fc2"
      },
      "#": "31",
      "Name": "Nidoqueen",
      "Type 1": "Poison",
      "Type 2": "Ground",
      "Total": "505",
      "HP": "90",
      "Attack": "92",
      "Defense": "87",
      "Sp": {
        " Atk": "75",
        " Def": "85"
      },
      "Speed": "76",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fc3"
      },
      "#": "32",
      "Name": "Nidoran♂",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "273",
      "HP": "46",
      "Attack": "57",
      "Defense": "40",
      "Sp": {
        " Atk": "40",
        " Def": "40"
      },
      "Speed": "50",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fc4"
      },
      "#": "33",
      "Name": "Nidorino",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "365",
      "HP": "61",
      "Attack": "72",
      "Defense": "57",
      "Sp": {
        " Atk": "55",
        " Def": "55"
      },
      "Speed": "65",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fc5"
      },
      "#": "34",
      "Name": "Nidoking",
      "Type 1": "Poison",
      "Type 2": "Ground",
      "Total": "505",
      "HP": "81",
      "Attack": "102",
      "Defense": "77",
      "Sp": {
        " Atk": "85",
        " Def": "75"
      },
      "Speed": "85",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fc6"
      },
      "#": "35",
      "Name": "Clefairy",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "323",
      "HP": "70",
      "Attack": "45",
      "Defense": "48",
      "Sp": {
        " Atk": "60",
        " Def": "65"
      },
      "Speed": "35",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fc7"
      },
      "#": "36",
      "Name": "Clefable",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "483",
      "HP": "95",
      "Attack": "70",
      "Defense": "73",
      "Sp": {
        " Atk": "95",
        " Def": "90"
      },
      "Speed": "60",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fc8"
      },
      "#": "37",
      "Name": "Vulpix",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "299",
      "HP": "38",
      "Attack": "41",
      "Defense": "40",
      "Sp": {
        " Atk": "50",
        " Def": "65"
      },
      "Speed": "65",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fc9"
      },
      "#": "38",
      "Name": "Ninetales",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "505",
      "HP": "73",
      "Attack": "76",
      "Defense": "75",
      "Sp": {
        " Atk": "81",
        " Def": "100"
      },
      "Speed": "100",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fca"
      },
      "#": "39",
      "Name": "Jigglypuff",
      "Type 1": "Normal",
      "Type 2": "Fairy",
      "Total": "270",
      "HP": "115",
      "Attack": "45",
      "Defense": "20",
      "Sp": {
        " Atk": "45",
        " Def": "25"
      },
      "Speed": "20",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fcb"
      },
      "#": "40",
      "Name": "Wigglytuff",
      "Type 1": "Normal",
      "Type 2": "Fairy",
      "Total": "435",
      "HP": "140",
      "Attack": "70",
      "Defense": "45",
      "Sp": {
        " Atk": "85",
        " Def": "50"
      },
      "Speed": "45",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fcc"
      },
      "#": "41",
      "Name": "Zubat",
      "Type 1": "Poison",
      "Type 2": "Flying",
      "Total": "245",
      "HP": "40",
      "Attack": "45",
      "Defense": "35",
      "Sp": {
        " Atk": "30",
        " Def": "40"
      },
      "Speed": "55",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fcd"
      },
      "#": "42",
      "Name": "Golbat",
      "Type 1": "Poison",
      "Type 2": "Flying",
      "Total": "455",
      "HP": "75",
      "Attack": "80",
      "Defense": "70",
      "Sp": {
        " Atk": "65",
        " Def": "75"
      },
      "Speed": "90",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fce"
      },
      "#": "43",
      "Name": "Oddish",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "320",
      "HP": "45",
      "Attack": "50",
      "Defense": "55",
      "Sp": {
        " Atk": "75",
        " Def": "65"
      },
      "Speed": "30",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fcf"
      },
      "#": "44",
      "Name": "Gloom",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "395",
      "HP": "60",
      "Attack": "65",
      "Defense": "70",
      "Sp": {
        " Atk": "85",
        " Def": "75"
      },
      "Speed": "40",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fd0"
      },
      "#": "45",
      "Name": "Vileplume",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "490",
      "HP": "75",
      "Attack": "80",
      "Defense": "85",
      "Sp": {
        " Atk": "110",
        " Def": "90"
      },
      "Speed": "50",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fd1"
      },
      "#": "46",
      "Name": "Paras",
      "Type 1": "Bug",
      "Type 2": "Grass",
      "Total": "285",
      "HP": "35",
      "Attack": "70",
      "Defense": "55",
      "Sp": {
        " Atk": "45",
        " Def": "55"
      },
      "Speed": "25",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fd2"
      },
      "#": "47",
      "Name": "Parasect",
      "Type 1": "Bug",
      "Type 2": "Grass",
      "Total": "405",
      "HP": "60",
      "Attack": "95",
      "Defense": "80",
      "Sp": {
        " Atk": "60",
        " Def": "80"
      },
      "Speed": "30",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fd3"
      },
      "#": "48",
      "Name": "Venonat",
      "Type 1": "Bug",
      "Type 2": "Poison",
      "Total": "305",
      "HP": "60",
      "Attack": "55",
      "Defense": "50",
      "Sp": {
        " Atk": "40",
        " Def": "55"
      },
      "Speed": "45",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fd4"
      },
      "#": "49",
      "Name": "Venomoth",
      "Type 1": "Bug",
      "Type 2": "Poison",
      "Total": "450",
      "HP": "70",
      "Attack": "65",
      "Defense": "60",
      "Sp": {
        " Atk": "90",
        " Def": "75"
      },
      "Speed": "90",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fd5"
      },
      "#": "50",
      "Name": "Diglett",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "265",
      "HP": "10",
      "Attack": "55",
      "Defense": "25",
      "Sp": {
        " Atk": "35",
        " Def": "45"
      },
      "Speed": "95",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fd6"
      },
      "#": "51",
      "Name": "Dugtrio",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "405",
      "HP": "35",
      "Attack": "80",
      "Defense": "50",
      "Sp": {
        " Atk": "50",
        " Def": "70"
      },
      "Speed": "120",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fd7"
      },
      "#": "52",
      "Name": "Meowth",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "290",
      "HP": "40",
      "Attack": "45",
      "Defense": "35",
      "Sp": {
        " Atk": "40",
        " Def": "40"
      },
      "Speed": "90",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fd8"
      },
      "#": "53",
      "Name": "Persian",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "440",
      "HP": "65",
      "Attack": "70",
      "Defense": "60",
      "Sp": {
        " Atk": "65",
        " Def": "65"
      },
      "Speed": "115",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fd9"
      },
      "#": "54",
      "Name": "Psyduck",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "320",
      "HP": "50",
      "Attack": "52",
      "Defense": "48",
      "Sp": {
        " Atk": "65",
        " Def": "50"
      },
      "Speed": "55",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fda"
      },
      "#": "55",
      "Name": "Golduck",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "500",
      "HP": "80",
      "Attack": "82",
      "Defense": "78",
      "Sp": {
        " Atk": "95",
        " Def": "80"
      },
      "Speed": "85",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fdb"
      },
      "#": "56",
      "Name": "Mankey",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "305",
      "HP": "40",
      "Attack": "80",
      "Defense": "35",
      "Sp": {
        " Atk": "35",
        " Def": "45"
      },
      "Speed": "70",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fdc"
      },
      "#": "57",
      "Name": "Primeape",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "455",
      "HP": "65",
      "Attack": "105",
      "Defense": "60",
      "Sp": {
        " Atk": "60",
        " Def": "70"
      },
      "Speed": "95",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fdd"
      },
      "#": "58",
      "Name": "Growlithe",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "350",
      "HP": "55",
      "Attack": "70",
      "Defense": "45",
      "Sp": {
        " Atk": "70",
        " Def": "50"
      },
      "Speed": "60",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fde"
      },
      "#": "59",
      "Name": "Arcanine",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "555",
      "HP": "90",
      "Attack": "110",
      "Defense": "80",
      "Sp": {
        " Atk": "100",
        " Def": "80"
      },
      "Speed": "95",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fdf"
      },
      "#": "60",
      "Name": "Poliwag",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "300",
      "HP": "40",
      "Attack": "50",
      "Defense": "40",
      "Sp": {
        " Atk": "40",
        " Def": "40"
      },
      "Speed": "90",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fe0"
      },
      "#": "61",
      "Name": "Poliwhirl",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "385",
      "HP": "65",
      "Attack": "65",
      "Defense": "65",
      "Sp": {
        " Atk": "50",
        " Def": "50"
      },
      "Speed": "90",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fe1"
      },
      "#": "62",
      "Name": "Poliwrath",
      "Type 1": "Water",
      "Type 2": "Fighting",
      "Total": "510",
      "HP": "90",
      "Attack": "95",
      "Defense": "95",
      "Sp": {
        " Atk": "70",
        " Def": "90"
      },
      "Speed": "70",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fe2"
      },
      "#": "63",
      "Name": "Abra",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "310",
      "HP": "25",
      "Attack": "20",
      "Defense": "15",
      "Sp": {
        " Atk": "105",
        " Def": "55"
      },
      "Speed": "90",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fe3"
      },
      "#": "64",
      "Name": "Kadabra",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "400",
      "HP": "40",
      "Attack": "35",
      "Defense": "30",
      "Sp": {
        " Atk": "120",
        " Def": "70"
      },
      "Speed": "105",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fe4"
      },
      "#": "65",
      "Name": "Alakazam",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "500",
      "HP": "55",
      "Attack": "50",
      "Defense": "45",
      "Sp": {
        " Atk": "135",
        " Def": "95"
      },
      "Speed": "120",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fe5"
      },
      "#": "65",
      "Name": "AlakazamMega Alakazam",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "590",
      "HP": "55",
      "Attack": "50",
      "Defense": "65",
      "Sp": {
        " Atk": "175",
        " Def": "95"
      },
      "Speed": "150",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fe6"
      },
      "#": "66",
      "Name": "Machop",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "305",
      "HP": "70",
      "Attack": "80",
      "Defense": "50",
      "Sp": {
        " Atk": "35",
        " Def": "35"
      },
      "Speed": "35",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fe7"
      },
      "#": "67",
      "Name": "Machoke",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "405",
      "HP": "80",
      "Attack": "100",
      "Defense": "70",
      "Sp": {
        " Atk": "50",
        " Def": "60"
      },
      "Speed": "45",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fe8"
      },
      "#": "68",
      "Name": "Machamp",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "505",
      "HP": "90",
      "Attack": "130",
      "Defense": "80",
      "Sp": {
        " Atk": "65",
        " Def": "85"
      },
      "Speed": "55",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fe9"
      },
      "#": "69",
      "Name": "Bellsprout",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "300",
      "HP": "50",
      "Attack": "75",
      "Defense": "35",
      "Sp": {
        " Atk": "70",
        " Def": "30"
      },
      "Speed": "40",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fea"
      },
      "#": "70",
      "Name": "Weepinbell",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "390",
      "HP": "65",
      "Attack": "90",
      "Defense": "50",
      "Sp": {
        " Atk": "85",
        " Def": "45"
      },
      "Speed": "55",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5feb"
      },
      "#": "71",
      "Name": "Victreebel",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "490",
      "HP": "80",
      "Attack": "105",
      "Defense": "65",
      "Sp": {
        " Atk": "100",
        " Def": "70"
      },
      "Speed": "70",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fec"
      },
      "#": "72",
      "Name": "Tentacool",
      "Type 1": "Water",
      "Type 2": "Poison",
      "Total": "335",
      "HP": "40",
      "Attack": "40",
      "Defense": "35",
      "Sp": {
        " Atk": "50",
        " Def": "100"
      },
      "Speed": "70",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fed"
      },
      "#": "73",
      "Name": "Tentacruel",
      "Type 1": "Water",
      "Type 2": "Poison",
      "Total": "515",
      "HP": "80",
      "Attack": "70",
      "Defense": "65",
      "Sp": {
        " Atk": "80",
        " Def": "120"
      },
      "Speed": "100",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fee"
      },
      "#": "74",
      "Name": "Geodude",
      "Type 1": "Rock",
      "Type 2": "Ground",
      "Total": "300",
      "HP": "40",
      "Attack": "80",
      "Defense": "100",
      "Sp": {
        " Atk": "30",
        " Def": "30"
      },
      "Speed": "20",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fef"
      },
      "#": "75",
      "Name": "Graveler",
      "Type 1": "Rock",
      "Type 2": "Ground",
      "Total": "390",
      "HP": "55",
      "Attack": "95",
      "Defense": "115",
      "Sp": {
        " Atk": "45",
        " Def": "45"
      },
      "Speed": "35",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ff0"
      },
      "#": "76",
      "Name": "Golem",
      "Type 1": "Rock",
      "Type 2": "Ground",
      "Total": "495",
      "HP": "80",
      "Attack": "120",
      "Defense": "130",
      "Sp": {
        " Atk": "55",
        " Def": "65"
      },
      "Speed": "45",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ff1"
      },
      "#": "77",
      "Name": "Ponyta",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "410",
      "HP": "50",
      "Attack": "85",
      "Defense": "55",
      "Sp": {
        " Atk": "65",
        " Def": "65"
      },
      "Speed": "90",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ff2"
      },
      "#": "78",
      "Name": "Rapidash",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "500",
      "HP": "65",
      "Attack": "100",
      "Defense": "70",
      "Sp": {
        " Atk": "80",
        " Def": "80"
      },
      "Speed": "105",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ff3"
      },
      "#": "79",
      "Name": "Slowpoke",
      "Type 1": "Water",
      "Type 2": "Psychic",
      "Total": "315",
      "HP": "90",
      "Attack": "65",
      "Defense": "65",
      "Sp": {
        " Atk": "40",
        " Def": "40"
      },
      "Speed": "15",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ff4"
      },
      "#": "80",
      "Name": "Slowbro",
      "Type 1": "Water",
      "Type 2": "Psychic",
      "Total": "490",
      "HP": "95",
      "Attack": "75",
      "Defense": "110",
      "Sp": {
        " Atk": "100",
        " Def": "80"
      },
      "Speed": "30",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ff5"
      },
      "#": "80",
      "Name": "SlowbroMega Slowbro",
      "Type 1": "Water",
      "Type 2": "Psychic",
      "Total": "590",
      "HP": "95",
      "Attack": "75",
      "Defense": "180",
      "Sp": {
        " Atk": "130",
        " Def": "80"
      },
      "Speed": "30",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ff6"
      },
      "#": "81",
      "Name": "Magnemite",
      "Type 1": "Electric",
      "Type 2": "Steel",
      "Total": "325",
      "HP": "25",
      "Attack": "35",
      "Defense": "70",
      "Sp": {
        " Atk": "95",
        " Def": "55"
      },
      "Speed": "45",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ff7"
      },
      "#": "82",
      "Name": "Magneton",
      "Type 1": "Electric",
      "Type 2": "Steel",
      "Total": "465",
      "HP": "50",
      "Attack": "60",
      "Defense": "95",
      "Sp": {
        " Atk": "120",
        " Def": "70"
      },
      "Speed": "70",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ff8"
      },
      "#": "83",
      "Name": "Farfetch'd",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "352",
      "HP": "52",
      "Attack": "65",
      "Defense": "55",
      "Sp": {
        " Atk": "58",
        " Def": "62"
      },
      "Speed": "60",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ff9"
      },
      "#": "84",
      "Name": "Doduo",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "310",
      "HP": "35",
      "Attack": "85",
      "Defense": "45",
      "Sp": {
        " Atk": "35",
        " Def": "35"
      },
      "Speed": "75",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ffa"
      },
      "#": "85",
      "Name": "Dodrio",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "460",
      "HP": "60",
      "Attack": "110",
      "Defense": "70",
      "Sp": {
        " Atk": "60",
        " Def": "60"
      },
      "Speed": "100",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ffb"
      },
      "#": "86",
      "Name": "Seel",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "325",
      "HP": "65",
      "Attack": "45",
      "Defense": "55",
      "Sp": {
        " Atk": "45",
        " Def": "70"
      },
      "Speed": "45",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ffc"
      },
      "#": "87",
      "Name": "Dewgong",
      "Type 1": "Water",
      "Type 2": "Ice",
      "Total": "475",
      "HP": "90",
      "Attack": "70",
      "Defense": "80",
      "Sp": {
        " Atk": "70",
        " Def": "95"
      },
      "Speed": "70",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ffd"
      },
      "#": "88",
      "Name": "Grimer",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "325",
      "HP": "80",
      "Attack": "80",
      "Defense": "50",
      "Sp": {
        " Atk": "40",
        " Def": "50"
      },
      "Speed": "25",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5ffe"
      },
      "#": "89",
      "Name": "Muk",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "500",
      "HP": "105",
      "Attack": "105",
      "Defense": "75",
      "Sp": {
        " Atk": "65",
        " Def": "100"
      },
      "Speed": "50",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e5fff"
      },
      "#": "90",
      "Name": "Shellder",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "305",
      "HP": "30",
      "Attack": "65",
      "Defense": "100",
      "Sp": {
        " Atk": "45",
        " Def": "25"
      },
      "Speed": "40",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6000"
      },
      "#": "91",
      "Name": "Cloyster",
      "Type 1": "Water",
      "Type 2": "Ice",
      "Total": "525",
      "HP": "50",
      "Attack": "95",
      "Defense": "180",
      "Sp": {
        " Atk": "85",
        " Def": "45"
      },
      "Speed": "70",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6001"
      },
      "#": "92",
      "Name": "Gastly",
      "Type 1": "Ghost",
      "Type 2": "Poison",
      "Total": "310",
      "HP": "30",
      "Attack": "35",
      "Defense": "30",
      "Sp": {
        " Atk": "100",
        " Def": "35"
      },
      "Speed": "80",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6002"
      },
      "#": "93",
      "Name": "Haunter",
      "Type 1": "Ghost",
      "Type 2": "Poison",
      "Total": "405",
      "HP": "45",
      "Attack": "50",
      "Defense": "45",
      "Sp": {
        " Atk": "115",
        " Def": "55"
      },
      "Speed": "95",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6003"
      },
      "#": "94",
      "Name": "Gengar",
      "Type 1": "Ghost",
      "Type 2": "Poison",
      "Total": "500",
      "HP": "60",
      "Attack": "65",
      "Defense": "60",
      "Sp": {
        " Atk": "130",
        " Def": "75"
      },
      "Speed": "110",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6004"
      },
      "#": "94",
      "Name": "GengarMega Gengar",
      "Type 1": "Ghost",
      "Type 2": "Poison",
      "Total": "600",
      "HP": "60",
      "Attack": "65",
      "Defense": "80",
      "Sp": {
        " Atk": "170",
        " Def": "95"
      },
      "Speed": "130",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6005"
      },
      "#": "95",
      "Name": "Onix",
      "Type 1": "Rock",
      "Type 2": "Ground",
      "Total": "385",
      "HP": "35",
      "Attack": "45",
      "Defense": "160",
      "Sp": {
        " Atk": "30",
        " Def": "45"
      },
      "Speed": "70",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6006"
      },
      "#": "96",
      "Name": "Drowzee",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "328",
      "HP": "60",
      "Attack": "48",
      "Defense": "45",
      "Sp": {
        " Atk": "43",
        " Def": "90"
      },
      "Speed": "42",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6007"
      },
      "#": "97",
      "Name": "Hypno",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "483",
      "HP": "85",
      "Attack": "73",
      "Defense": "70",
      "Sp": {
        " Atk": "73",
        " Def": "115"
      },
      "Speed": "67",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6008"
      },
      "#": "98",
      "Name": "Krabby",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "325",
      "HP": "30",
      "Attack": "105",
      "Defense": "90",
      "Sp": {
        " Atk": "25",
        " Def": "25"
      },
      "Speed": "50",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6009"
      },
      "#": "99",
      "Name": "Kingler",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "475",
      "HP": "55",
      "Attack": "130",
      "Defense": "115",
      "Sp": {
        " Atk": "50",
        " Def": "50"
      },
      "Speed": "75",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e600a"
      },
      "#": "100",
      "Name": "Voltorb",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "330",
      "HP": "40",
      "Attack": "30",
      "Defense": "50",
      "Sp": {
        " Atk": "55",
        " Def": "55"
      },
      "Speed": "100",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e600b"
      },
      "#": "101",
      "Name": "Electrode",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "480",
      "HP": "60",
      "Attack": "50",
      "Defense": "70",
      "Sp": {
        " Atk": "80",
        " Def": "80"
      },
      "Speed": "140",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e600c"
      },
      "#": "102",
      "Name": "Exeggcute",
      "Type 1": "Grass",
      "Type 2": "Psychic",
      "Total": "325",
      "HP": "60",
      "Attack": "40",
      "Defense": "80",
      "Sp": {
        " Atk": "60",
        " Def": "45"
      },
      "Speed": "40",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e600d"
      },
      "#": "103",
      "Name": "Exeggutor",
      "Type 1": "Grass",
      "Type 2": "Psychic",
      "Total": "520",
      "HP": "95",
      "Attack": "95",
      "Defense": "85",
      "Sp": {
        " Atk": "125",
        " Def": "65"
      },
      "Speed": "55",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e600e"
      },
      "#": "104",
      "Name": "Cubone",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "320",
      "HP": "50",
      "Attack": "50",
      "Defense": "95",
      "Sp": {
        " Atk": "40",
        " Def": "50"
      },
      "Speed": "35",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e600f"
      },
      "#": "105",
      "Name": "Marowak",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "425",
      "HP": "60",
      "Attack": "80",
      "Defense": "110",
      "Sp": {
        " Atk": "50",
        " Def": "80"
      },
      "Speed": "45",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6010"
      },
      "#": "106",
      "Name": "Hitmonlee",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "455",
      "HP": "50",
      "Attack": "120",
      "Defense": "53",
      "Sp": {
        " Atk": "35",
        " Def": "110"
      },
      "Speed": "87",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6011"
      },
      "#": "107",
      "Name": "Hitmonchan",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "455",
      "HP": "50",
      "Attack": "105",
      "Defense": "79",
      "Sp": {
        " Atk": "35",
        " Def": "110"
      },
      "Speed": "76",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6012"
      },
      "#": "108",
      "Name": "Lickitung",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "385",
      "HP": "90",
      "Attack": "55",
      "Defense": "75",
      "Sp": {
        " Atk": "60",
        " Def": "75"
      },
      "Speed": "30",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6013"
      },
      "#": "109",
      "Name": "Koffing",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "340",
      "HP": "40",
      "Attack": "65",
      "Defense": "95",
      "Sp": {
        " Atk": "60",
        " Def": "45"
      },
      "Speed": "35",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6014"
      },
      "#": "110",
      "Name": "Weezing",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "490",
      "HP": "65",
      "Attack": "90",
      "Defense": "120",
      "Sp": {
        " Atk": "85",
        " Def": "70"
      },
      "Speed": "60",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6015"
      },
      "#": "111",
      "Name": "Rhyhorn",
      "Type 1": "Ground",
      "Type 2": "Rock",
      "Total": "345",
      "HP": "80",
      "Attack": "85",
      "Defense": "95",
      "Sp": {
        " Atk": "30",
        " Def": "30"
      },
      "Speed": "25",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6016"
      },
      "#": "112",
      "Name": "Rhydon",
      "Type 1": "Ground",
      "Type 2": "Rock",
      "Total": "485",
      "HP": "105",
      "Attack": "130",
      "Defense": "120",
      "Sp": {
        " Atk": "45",
        " Def": "45"
      },
      "Speed": "40",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6017"
      },
      "#": "113",
      "Name": "Chansey",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "450",
      "HP": "250",
      "Attack": "5",
      "Defense": "5",
      "Sp": {
        " Atk": "35",
        " Def": "105"
      },
      "Speed": "50",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6018"
      },
      "#": "114",
      "Name": "Tangela",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "435",
      "HP": "65",
      "Attack": "55",
      "Defense": "115",
      "Sp": {
        " Atk": "100",
        " Def": "40"
      },
      "Speed": "60",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6019"
      },
      "#": "115",
      "Name": "Kangaskhan",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "490",
      "HP": "105",
      "Attack": "95",
      "Defense": "80",
      "Sp": {
        " Atk": "40",
        " Def": "80"
      },
      "Speed": "90",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e601a"
      },
      "#": "115",
      "Name": "KangaskhanMega Kangaskhan",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "590",
      "HP": "105",
      "Attack": "125",
      "Defense": "100",
      "Sp": {
        " Atk": "60",
        " Def": "100"
      },
      "Speed": "100",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e601b"
      },
      "#": "116",
      "Name": "Horsea",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "295",
      "HP": "30",
      "Attack": "40",
      "Defense": "70",
      "Sp": {
        " Atk": "70",
        " Def": "25"
      },
      "Speed": "60",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e601c"
      },
      "#": "117",
      "Name": "Seadra",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "440",
      "HP": "55",
      "Attack": "65",
      "Defense": "95",
      "Sp": {
        " Atk": "95",
        " Def": "45"
      },
      "Speed": "85",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e601d"
      },
      "#": "118",
      "Name": "Goldeen",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "320",
      "HP": "45",
      "Attack": "67",
      "Defense": "60",
      "Sp": {
        " Atk": "35",
        " Def": "50"
      },
      "Speed": "63",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e601e"
      },
      "#": "119",
      "Name": "Seaking",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "450",
      "HP": "80",
      "Attack": "92",
      "Defense": "65",
      "Sp": {
        " Atk": "65",
        " Def": "80"
      },
      "Speed": "68",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e601f"
      },
      "#": "120",
      "Name": "Staryu",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "340",
      "HP": "30",
      "Attack": "45",
      "Defense": "55",
      "Sp": {
        " Atk": "70",
        " Def": "55"
      },
      "Speed": "85",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6020"
      },
      "#": "121",
      "Name": "Starmie",
      "Type 1": "Water",
      "Type 2": "Psychic",
      "Total": "520",
      "HP": "60",
      "Attack": "75",
      "Defense": "85",
      "Sp": {
        " Atk": "100",
        " Def": "85"
      },
      "Speed": "115",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6021"
      },
      "#": "122",
      "Name": "Mr. Mime",
      "Type 1": "Psychic",
      "Type 2": "Fairy",
      "Total": "460",
      "HP": "40",
      "Attack": "45",
      "Defense": "65",
      "Sp": {
        " Atk": "100",
        " Def": "120"
      },
      "Speed": "90",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6022"
      },
      "#": "123",
      "Name": "Scyther",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "500",
      "HP": "70",
      "Attack": "110",
      "Defense": "80",
      "Sp": {
        " Atk": "55",
        " Def": "80"
      },
      "Speed": "105",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6023"
      },
      "#": "124",
      "Name": "Jynx",
      "Type 1": "Ice",
      "Type 2": "Psychic",
      "Total": "455",
      "HP": "65",
      "Attack": "50",
      "Defense": "35",
      "Sp": {
        " Atk": "115",
        " Def": "95"
      },
      "Speed": "95",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6024"
      },
      "#": "125",
      "Name": "Electabuzz",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "490",
      "HP": "65",
      "Attack": "83",
      "Defense": "57",
      "Sp": {
        " Atk": "95",
        " Def": "85"
      },
      "Speed": "105",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6025"
      },
      "#": "126",
      "Name": "Magmar",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "495",
      "HP": "65",
      "Attack": "95",
      "Defense": "57",
      "Sp": {
        " Atk": "100",
        " Def": "85"
      },
      "Speed": "93",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6026"
      },
      "#": "127",
      "Name": "Pinsir",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "500",
      "HP": "65",
      "Attack": "125",
      "Defense": "100",
      "Sp": {
        " Atk": "55",
        " Def": "70"
      },
      "Speed": "85",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6027"
      },
      "#": "127",
      "Name": "PinsirMega Pinsir",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "600",
      "HP": "65",
      "Attack": "155",
      "Defense": "120",
      "Sp": {
        " Atk": "65",
        " Def": "90"
      },
      "Speed": "105",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6028"
      },
      "#": "128",
      "Name": "Tauros",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "490",
      "HP": "75",
      "Attack": "100",
      "Defense": "95",
      "Sp": {
        " Atk": "40",
        " Def": "70"
      },
      "Speed": "110",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6029"
      },
      "#": "129",
      "Name": "Magikarp",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "200",
      "HP": "20",
      "Attack": "10",
      "Defense": "55",
      "Sp": {
        " Atk": "15",
        " Def": "20"
      },
      "Speed": "80",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e602a"
      },
      "#": "130",
      "Name": "Gyarados",
      "Type 1": "Water",
      "Type 2": "Flying",
      "Total": "540",
      "HP": "95",
      "Attack": "125",
      "Defense": "79",
      "Sp": {
        " Atk": "60",
        " Def": "100"
      },
      "Speed": "81",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e602b"
      },
      "#": "130",
      "Name": "GyaradosMega Gyarados",
      "Type 1": "Water",
      "Type 2": "Dark",
      "Total": "640",
      "HP": "95",
      "Attack": "155",
      "Defense": "109",
      "Sp": {
        " Atk": "70",
        " Def": "130"
      },
      "Speed": "81",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e602c"
      },
      "#": "131",
      "Name": "Lapras",
      "Type 1": "Water",
      "Type 2": "Ice",
      "Total": "535",
      "HP": "130",
      "Attack": "85",
      "Defense": "80",
      "Sp": {
        " Atk": "85",
        " Def": "95"
      },
      "Speed": "60",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e602d"
      },
      "#": "132",
      "Name": "Ditto",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "288",
      "HP": "48",
      "Attack": "48",
      "Defense": "48",
      "Sp": {
        " Atk": "48",
        " Def": "48"
      },
      "Speed": "48",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e602e"
      },
      "#": "133",
      "Name": "Eevee",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "325",
      "HP": "55",
      "Attack": "55",
      "Defense": "50",
      "Sp": {
        " Atk": "45",
        " Def": "65"
      },
      "Speed": "55",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e602f"
      },
      "#": "134",
      "Name": "Vaporeon",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "525",
      "HP": "130",
      "Attack": "65",
      "Defense": "60",
      "Sp": {
        " Atk": "110",
        " Def": "95"
      },
      "Speed": "65",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6030"
      },
      "#": "135",
      "Name": "Jolteon",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "525",
      "HP": "65",
      "Attack": "65",
      "Defense": "60",
      "Sp": {
        " Atk": "110",
        " Def": "95"
      },
      "Speed": "130",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6031"
      },
      "#": "136",
      "Name": "Flareon",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "525",
      "HP": "65",
      "Attack": "130",
      "Defense": "60",
      "Sp": {
        " Atk": "95",
        " Def": "110"
      },
      "Speed": "65",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6032"
      },
      "#": "137",
      "Name": "Porygon",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "395",
      "HP": "65",
      "Attack": "60",
      "Defense": "70",
      "Sp": {
        " Atk": "85",
        " Def": "75"
      },
      "Speed": "40",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6033"
      },
      "#": "138",
      "Name": "Omanyte",
      "Type 1": "Rock",
      "Type 2": "Water",
      "Total": "355",
      "HP": "35",
      "Attack": "40",
      "Defense": "100",
      "Sp": {
        " Atk": "90",
        " Def": "55"
      },
      "Speed": "35",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6034"
      },
      "#": "139",
      "Name": "Omastar",
      "Type 1": "Rock",
      "Type 2": "Water",
      "Total": "495",
      "HP": "70",
      "Attack": "60",
      "Defense": "125",
      "Sp": {
        " Atk": "115",
        " Def": "70"
      },
      "Speed": "55",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6035"
      },
      "#": "140",
      "Name": "Kabuto",
      "Type 1": "Rock",
      "Type 2": "Water",
      "Total": "355",
      "HP": "30",
      "Attack": "80",
      "Defense": "90",
      "Sp": {
        " Atk": "55",
        " Def": "45"
      },
      "Speed": "55",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6036"
      },
      "#": "141",
      "Name": "Kabutops",
      "Type 1": "Rock",
      "Type 2": "Water",
      "Total": "495",
      "HP": "60",
      "Attack": "115",
      "Defense": "105",
      "Sp": {
        " Atk": "65",
        " Def": "70"
      },
      "Speed": "80",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6037"
      },
      "#": "142",
      "Name": "Aerodactyl",
      "Type 1": "Rock",
      "Type 2": "Flying",
      "Total": "515",
      "HP": "80",
      "Attack": "105",
      "Defense": "65",
      "Sp": {
        " Atk": "60",
        " Def": "75"
      },
      "Speed": "130",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6038"
      },
      "#": "142",
      "Name": "AerodactylMega Aerodactyl",
      "Type 1": "Rock",
      "Type 2": "Flying",
      "Total": "615",
      "HP": "80",
      "Attack": "135",
      "Defense": "85",
      "Sp": {
        " Atk": "70",
        " Def": "95"
      },
      "Speed": "150",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6039"
      },
      "#": "143",
      "Name": "Snorlax",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "540",
      "HP": "160",
      "Attack": "110",
      "Defense": "65",
      "Sp": {
        " Atk": "65",
        " Def": "110"
      },
      "Speed": "30",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e603a"
      },
      "#": "144",
      "Name": "Articuno",
      "Type 1": "Ice",
      "Type 2": "Flying",
      "Total": "580",
      "HP": "90",
      "Attack": "85",
      "Defense": "100",
      "Sp": {
        " Atk": "95",
        " Def": "125"
      },
      "Speed": "85",
      "Generation": "1",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e603b"
      },
      "#": "145",
      "Name": "Zapdos",
      "Type 1": "Electric",
      "Type 2": "Flying",
      "Total": "580",
      "HP": "90",
      "Attack": "90",
      "Defense": "85",
      "Sp": {
        " Atk": "125",
        " Def": "90"
      },
      "Speed": "100",
      "Generation": "1",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e603c"
      },
      "#": "146",
      "Name": "Moltres",
      "Type 1": "Fire",
      "Type 2": "Flying",
      "Total": "580",
      "HP": "90",
      "Attack": "100",
      "Defense": "90",
      "Sp": {
        " Atk": "125",
        " Def": "85"
      },
      "Speed": "90",
      "Generation": "1",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e603d"
      },
      "#": "147",
      "Name": "Dratini",
      "Type 1": "Dragon",
      "Type 2": "",
      "Total": "300",
      "HP": "41",
      "Attack": "64",
      "Defense": "45",
      "Sp": {
        " Atk": "50",
        " Def": "50"
      },
      "Speed": "50",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e603e"
      },
      "#": "148",
      "Name": "Dragonair",
      "Type 1": "Dragon",
      "Type 2": "",
      "Total": "420",
      "HP": "61",
      "Attack": "84",
      "Defense": "65",
      "Sp": {
        " Atk": "70",
        " Def": "70"
      },
      "Speed": "70",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e603f"
      },
      "#": "149",
      "Name": "Dragonite",
      "Type 1": "Dragon",
      "Type 2": "Flying",
      "Total": "600",
      "HP": "91",
      "Attack": "134",
      "Defense": "95",
      "Sp": {
        " Atk": "100",
        " Def": "100"
      },
      "Speed": "80",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6040"
      },
      "#": "150",
      "Name": "Mewtwo",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "680",
      "HP": "106",
      "Attack": "110",
      "Defense": "90",
      "Sp": {
        " Atk": "154",
        " Def": "90"
      },
      "Speed": "130",
      "Generation": "1",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6041"
      },
      "#": "150",
      "Name": "MewtwoMega Mewtwo X",
      "Type 1": "Psychic",
      "Type 2": "Fighting",
      "Total": "780",
      "HP": "106",
      "Attack": "190",
      "Defense": "100",
      "Sp": {
        " Atk": "154",
        " Def": "100"
      },
      "Speed": "130",
      "Generation": "1",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6042"
      },
      "#": "150",
      "Name": "MewtwoMega Mewtwo Y",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "780",
      "HP": "106",
      "Attack": "150",
      "Defense": "70",
      "Sp": {
        " Atk": "194",
        " Def": "120"
      },
      "Speed": "140",
      "Generation": "1",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6043"
      },
      "#": "151",
      "Name": "Mew",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "600",
      "HP": "100",
      "Attack": "100",
      "Defense": "100",
      "Sp": {
        " Atk": "100",
        " Def": "100"
      },
      "Speed": "100",
      "Generation": "1",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6044"
      },
      "#": "152",
      "Name": "Chikorita",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "318",
      "HP": "45",
      "Attack": "49",
      "Defense": "65",
      "Sp": {
        " Atk": "49",
        " Def": "65"
      },
      "Speed": "45",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6045"
      },
      "#": "153",
      "Name": "Bayleef",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "405",
      "HP": "60",
      "Attack": "62",
      "Defense": "80",
      "Sp": {
        " Atk": "63",
        " Def": "80"
      },
      "Speed": "60",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6046"
      },
      "#": "154",
      "Name": "Meganium",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "525",
      "HP": "80",
      "Attack": "82",
      "Defense": "100",
      "Sp": {
        " Atk": "83",
        " Def": "100"
      },
      "Speed": "80",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6047"
      },
      "#": "155",
      "Name": "Cyndaquil",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "309",
      "HP": "39",
      "Attack": "52",
      "Defense": "43",
      "Sp": {
        " Atk": "60",
        " Def": "50"
      },
      "Speed": "65",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6048"
      },
      "#": "156",
      "Name": "Quilava",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "405",
      "HP": "58",
      "Attack": "64",
      "Defense": "58",
      "Sp": {
        " Atk": "80",
        " Def": "65"
      },
      "Speed": "80",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6049"
      },
      "#": "157",
      "Name": "Typhlosion",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "534",
      "HP": "78",
      "Attack": "84",
      "Defense": "78",
      "Sp": {
        " Atk": "109",
        " Def": "85"
      },
      "Speed": "100",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e604a"
      },
      "#": "158",
      "Name": "Totodile",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "314",
      "HP": "50",
      "Attack": "65",
      "Defense": "64",
      "Sp": {
        " Atk": "44",
        " Def": "48"
      },
      "Speed": "43",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e604b"
      },
      "#": "159",
      "Name": "Croconaw",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "405",
      "HP": "65",
      "Attack": "80",
      "Defense": "80",
      "Sp": {
        " Atk": "59",
        " Def": "63"
      },
      "Speed": "58",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e604c"
      },
      "#": "160",
      "Name": "Feraligatr",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "530",
      "HP": "85",
      "Attack": "105",
      "Defense": "100",
      "Sp": {
        " Atk": "79",
        " Def": "83"
      },
      "Speed": "78",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e604d"
      },
      "#": "161",
      "Name": "Sentret",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "215",
      "HP": "35",
      "Attack": "46",
      "Defense": "34",
      "Sp": {
        " Atk": "35",
        " Def": "45"
      },
      "Speed": "20",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e604e"
      },
      "#": "162",
      "Name": "Furret",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "415",
      "HP": "85",
      "Attack": "76",
      "Defense": "64",
      "Sp": {
        " Atk": "45",
        " Def": "55"
      },
      "Speed": "90",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e604f"
      },
      "#": "163",
      "Name": "Hoothoot",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "262",
      "HP": "60",
      "Attack": "30",
      "Defense": "30",
      "Sp": {
        " Atk": "36",
        " Def": "56"
      },
      "Speed": "50",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6050"
      },
      "#": "164",
      "Name": "Noctowl",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "442",
      "HP": "100",
      "Attack": "50",
      "Defense": "50",
      "Sp": {
        " Atk": "76",
        " Def": "96"
      },
      "Speed": "70",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6051"
      },
      "#": "165",
      "Name": "Ledyba",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "265",
      "HP": "40",
      "Attack": "20",
      "Defense": "30",
      "Sp": {
        " Atk": "40",
        " Def": "80"
      },
      "Speed": "55",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6052"
      },
      "#": "166",
      "Name": "Ledian",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "390",
      "HP": "55",
      "Attack": "35",
      "Defense": "50",
      "Sp": {
        " Atk": "55",
        " Def": "110"
      },
      "Speed": "85",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6053"
      },
      "#": "167",
      "Name": "Spinarak",
      "Type 1": "Bug",
      "Type 2": "Poison",
      "Total": "250",
      "HP": "40",
      "Attack": "60",
      "Defense": "40",
      "Sp": {
        " Atk": "40",
        " Def": "40"
      },
      "Speed": "30",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6054"
      },
      "#": "168",
      "Name": "Ariados",
      "Type 1": "Bug",
      "Type 2": "Poison",
      "Total": "390",
      "HP": "70",
      "Attack": "90",
      "Defense": "70",
      "Sp": {
        " Atk": "60",
        " Def": "60"
      },
      "Speed": "40",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6055"
      },
      "#": "169",
      "Name": "Crobat",
      "Type 1": "Poison",
      "Type 2": "Flying",
      "Total": "535",
      "HP": "85",
      "Attack": "90",
      "Defense": "80",
      "Sp": {
        " Atk": "70",
        " Def": "80"
      },
      "Speed": "130",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6056"
      },
      "#": "170",
      "Name": "Chinchou",
      "Type 1": "Water",
      "Type 2": "Electric",
      "Total": "330",
      "HP": "75",
      "Attack": "38",
      "Defense": "38",
      "Sp": {
        " Atk": "56",
        " Def": "56"
      },
      "Speed": "67",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6057"
      },
      "#": "171",
      "Name": "Lanturn",
      "Type 1": "Water",
      "Type 2": "Electric",
      "Total": "460",
      "HP": "125",
      "Attack": "58",
      "Defense": "58",
      "Sp": {
        " Atk": "76",
        " Def": "76"
      },
      "Speed": "67",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6058"
      },
      "#": "172",
      "Name": "Pichu",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "205",
      "HP": "20",
      "Attack": "40",
      "Defense": "15",
      "Sp": {
        " Atk": "35",
        " Def": "35"
      },
      "Speed": "60",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6059"
      },
      "#": "173",
      "Name": "Cleffa",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "218",
      "HP": "50",
      "Attack": "25",
      "Defense": "28",
      "Sp": {
        " Atk": "45",
        " Def": "55"
      },
      "Speed": "15",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e605a"
      },
      "#": "174",
      "Name": "Igglybuff",
      "Type 1": "Normal",
      "Type 2": "Fairy",
      "Total": "210",
      "HP": "90",
      "Attack": "30",
      "Defense": "15",
      "Sp": {
        " Atk": "40",
        " Def": "20"
      },
      "Speed": "15",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e605b"
      },
      "#": "175",
      "Name": "Togepi",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "245",
      "HP": "35",
      "Attack": "20",
      "Defense": "65",
      "Sp": {
        " Atk": "40",
        " Def": "65"
      },
      "Speed": "20",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e605c"
      },
      "#": "176",
      "Name": "Togetic",
      "Type 1": "Fairy",
      "Type 2": "Flying",
      "Total": "405",
      "HP": "55",
      "Attack": "40",
      "Defense": "85",
      "Sp": {
        " Atk": "80",
        " Def": "105"
      },
      "Speed": "40",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e605d"
      },
      "#": "177",
      "Name": "Natu",
      "Type 1": "Psychic",
      "Type 2": "Flying",
      "Total": "320",
      "HP": "40",
      "Attack": "50",
      "Defense": "45",
      "Sp": {
        " Atk": "70",
        " Def": "45"
      },
      "Speed": "70",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e605e"
      },
      "#": "178",
      "Name": "Xatu",
      "Type 1": "Psychic",
      "Type 2": "Flying",
      "Total": "470",
      "HP": "65",
      "Attack": "75",
      "Defense": "70",
      "Sp": {
        " Atk": "95",
        " Def": "70"
      },
      "Speed": "95",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e605f"
      },
      "#": "179",
      "Name": "Mareep",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "280",
      "HP": "55",
      "Attack": "40",
      "Defense": "40",
      "Sp": {
        " Atk": "65",
        " Def": "45"
      },
      "Speed": "35",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6060"
      },
      "#": "180",
      "Name": "Flaaffy",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "365",
      "HP": "70",
      "Attack": "55",
      "Defense": "55",
      "Sp": {
        " Atk": "80",
        " Def": "60"
      },
      "Speed": "45",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6061"
      },
      "#": "181",
      "Name": "Ampharos",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "510",
      "HP": "90",
      "Attack": "75",
      "Defense": "85",
      "Sp": {
        " Atk": "115",
        " Def": "90"
      },
      "Speed": "55",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6062"
      },
      "#": "181",
      "Name": "AmpharosMega Ampharos",
      "Type 1": "Electric",
      "Type 2": "Dragon",
      "Total": "610",
      "HP": "90",
      "Attack": "95",
      "Defense": "105",
      "Sp": {
        " Atk": "165",
        " Def": "110"
      },
      "Speed": "45",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6063"
      },
      "#": "182",
      "Name": "Bellossom",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "490",
      "HP": "75",
      "Attack": "80",
      "Defense": "95",
      "Sp": {
        " Atk": "90",
        " Def": "100"
      },
      "Speed": "50",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6064"
      },
      "#": "183",
      "Name": "Marill",
      "Type 1": "Water",
      "Type 2": "Fairy",
      "Total": "250",
      "HP": "70",
      "Attack": "20",
      "Defense": "50",
      "Sp": {
        " Atk": "20",
        " Def": "50"
      },
      "Speed": "40",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6065"
      },
      "#": "184",
      "Name": "Azumarill",
      "Type 1": "Water",
      "Type 2": "Fairy",
      "Total": "420",
      "HP": "100",
      "Attack": "50",
      "Defense": "80",
      "Sp": {
        " Atk": "60",
        " Def": "80"
      },
      "Speed": "50",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6066"
      },
      "#": "185",
      "Name": "Sudowoodo",
      "Type 1": "Rock",
      "Type 2": "",
      "Total": "410",
      "HP": "70",
      "Attack": "100",
      "Defense": "115",
      "Sp": {
        " Atk": "30",
        " Def": "65"
      },
      "Speed": "30",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6067"
      },
      "#": "186",
      "Name": "Politoed",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "500",
      "HP": "90",
      "Attack": "75",
      "Defense": "75",
      "Sp": {
        " Atk": "90",
        " Def": "100"
      },
      "Speed": "70",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6068"
      },
      "#": "187",
      "Name": "Hoppip",
      "Type 1": "Grass",
      "Type 2": "Flying",
      "Total": "250",
      "HP": "35",
      "Attack": "35",
      "Defense": "40",
      "Sp": {
        " Atk": "35",
        " Def": "55"
      },
      "Speed": "50",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6069"
      },
      "#": "188",
      "Name": "Skiploom",
      "Type 1": "Grass",
      "Type 2": "Flying",
      "Total": "340",
      "HP": "55",
      "Attack": "45",
      "Defense": "50",
      "Sp": {
        " Atk": "45",
        " Def": "65"
      },
      "Speed": "80",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e606a"
      },
      "#": "189",
      "Name": "Jumpluff",
      "Type 1": "Grass",
      "Type 2": "Flying",
      "Total": "460",
      "HP": "75",
      "Attack": "55",
      "Defense": "70",
      "Sp": {
        " Atk": "55",
        " Def": "95"
      },
      "Speed": "110",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e606b"
      },
      "#": "190",
      "Name": "Aipom",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "360",
      "HP": "55",
      "Attack": "70",
      "Defense": "55",
      "Sp": {
        " Atk": "40",
        " Def": "55"
      },
      "Speed": "85",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e606c"
      },
      "#": "191",
      "Name": "Sunkern",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "180",
      "HP": "30",
      "Attack": "30",
      "Defense": "30",
      "Sp": {
        " Atk": "30",
        " Def": "30"
      },
      "Speed": "30",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e606d"
      },
      "#": "192",
      "Name": "Sunflora",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "425",
      "HP": "75",
      "Attack": "75",
      "Defense": "55",
      "Sp": {
        " Atk": "105",
        " Def": "85"
      },
      "Speed": "30",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e606e"
      },
      "#": "193",
      "Name": "Yanma",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "390",
      "HP": "65",
      "Attack": "65",
      "Defense": "45",
      "Sp": {
        " Atk": "75",
        " Def": "45"
      },
      "Speed": "95",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e606f"
      },
      "#": "194",
      "Name": "Wooper",
      "Type 1": "Water",
      "Type 2": "Ground",
      "Total": "210",
      "HP": "55",
      "Attack": "45",
      "Defense": "45",
      "Sp": {
        " Atk": "25",
        " Def": "25"
      },
      "Speed": "15",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6070"
      },
      "#": "195",
      "Name": "Quagsire",
      "Type 1": "Water",
      "Type 2": "Ground",
      "Total": "430",
      "HP": "95",
      "Attack": "85",
      "Defense": "85",
      "Sp": {
        " Atk": "65",
        " Def": "65"
      },
      "Speed": "35",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6071"
      },
      "#": "196",
      "Name": "Espeon",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "525",
      "HP": "65",
      "Attack": "65",
      "Defense": "60",
      "Sp": {
        " Atk": "130",
        " Def": "95"
      },
      "Speed": "110",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6072"
      },
      "#": "197",
      "Name": "Umbreon",
      "Type 1": "Dark",
      "Type 2": "",
      "Total": "525",
      "HP": "95",
      "Attack": "65",
      "Defense": "110",
      "Sp": {
        " Atk": "60",
        " Def": "130"
      },
      "Speed": "65",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6073"
      },
      "#": "198",
      "Name": "Murkrow",
      "Type 1": "Dark",
      "Type 2": "Flying",
      "Total": "405",
      "HP": "60",
      "Attack": "85",
      "Defense": "42",
      "Sp": {
        " Atk": "85",
        " Def": "42"
      },
      "Speed": "91",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6074"
      },
      "#": "199",
      "Name": "Slowking",
      "Type 1": "Water",
      "Type 2": "Psychic",
      "Total": "490",
      "HP": "95",
      "Attack": "75",
      "Defense": "80",
      "Sp": {
        " Atk": "100",
        " Def": "110"
      },
      "Speed": "30",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6075"
      },
      "#": "200",
      "Name": "Misdreavus",
      "Type 1": "Ghost",
      "Type 2": "",
      "Total": "435",
      "HP": "60",
      "Attack": "60",
      "Defense": "60",
      "Sp": {
        " Atk": "85",
        " Def": "85"
      },
      "Speed": "85",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6076"
      },
      "#": "201",
      "Name": "Unown",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "336",
      "HP": "48",
      "Attack": "72",
      "Defense": "48",
      "Sp": {
        " Atk": "72",
        " Def": "48"
      },
      "Speed": "48",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6077"
      },
      "#": "202",
      "Name": "Wobbuffet",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "405",
      "HP": "190",
      "Attack": "33",
      "Defense": "58",
      "Sp": {
        " Atk": "33",
        " Def": "58"
      },
      "Speed": "33",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6078"
      },
      "#": "203",
      "Name": "Girafarig",
      "Type 1": "Normal",
      "Type 2": "Psychic",
      "Total": "455",
      "HP": "70",
      "Attack": "80",
      "Defense": "65",
      "Sp": {
        " Atk": "90",
        " Def": "65"
      },
      "Speed": "85",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6079"
      },
      "#": "204",
      "Name": "Pineco",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "290",
      "HP": "50",
      "Attack": "65",
      "Defense": "90",
      "Sp": {
        " Atk": "35",
        " Def": "35"
      },
      "Speed": "15",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e607a"
      },
      "#": "205",
      "Name": "Forretress",
      "Type 1": "Bug",
      "Type 2": "Steel",
      "Total": "465",
      "HP": "75",
      "Attack": "90",
      "Defense": "140",
      "Sp": {
        " Atk": "60",
        " Def": "60"
      },
      "Speed": "40",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e607b"
      },
      "#": "206",
      "Name": "Dunsparce",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "415",
      "HP": "100",
      "Attack": "70",
      "Defense": "70",
      "Sp": {
        " Atk": "65",
        " Def": "65"
      },
      "Speed": "45",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e607c"
      },
      "#": "207",
      "Name": "Gligar",
      "Type 1": "Ground",
      "Type 2": "Flying",
      "Total": "430",
      "HP": "65",
      "Attack": "75",
      "Defense": "105",
      "Sp": {
        " Atk": "35",
        " Def": "65"
      },
      "Speed": "85",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e607d"
      },
      "#": "208",
      "Name": "Steelix",
      "Type 1": "Steel",
      "Type 2": "Ground",
      "Total": "510",
      "HP": "75",
      "Attack": "85",
      "Defense": "200",
      "Sp": {
        " Atk": "55",
        " Def": "65"
      },
      "Speed": "30",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e607e"
      },
      "#": "208",
      "Name": "SteelixMega Steelix",
      "Type 1": "Steel",
      "Type 2": "Ground",
      "Total": "610",
      "HP": "75",
      "Attack": "125",
      "Defense": "230",
      "Sp": {
        " Atk": "55",
        " Def": "95"
      },
      "Speed": "30",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e607f"
      },
      "#": "209",
      "Name": "Snubbull",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "300",
      "HP": "60",
      "Attack": "80",
      "Defense": "50",
      "Sp": {
        " Atk": "40",
        " Def": "40"
      },
      "Speed": "30",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6080"
      },
      "#": "210",
      "Name": "Granbull",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "450",
      "HP": "90",
      "Attack": "120",
      "Defense": "75",
      "Sp": {
        " Atk": "60",
        " Def": "60"
      },
      "Speed": "45",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6081"
      },
      "#": "211",
      "Name": "Qwilfish",
      "Type 1": "Water",
      "Type 2": "Poison",
      "Total": "430",
      "HP": "65",
      "Attack": "95",
      "Defense": "75",
      "Sp": {
        " Atk": "55",
        " Def": "55"
      },
      "Speed": "85",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6082"
      },
      "#": "212",
      "Name": "Scizor",
      "Type 1": "Bug",
      "Type 2": "Steel",
      "Total": "500",
      "HP": "70",
      "Attack": "130",
      "Defense": "100",
      "Sp": {
        " Atk": "55",
        " Def": "80"
      },
      "Speed": "65",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6083"
      },
      "#": "212",
      "Name": "ScizorMega Scizor",
      "Type 1": "Bug",
      "Type 2": "Steel",
      "Total": "600",
      "HP": "70",
      "Attack": "150",
      "Defense": "140",
      "Sp": {
        " Atk": "65",
        " Def": "100"
      },
      "Speed": "75",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6084"
      },
      "#": "213",
      "Name": "Shuckle",
      "Type 1": "Bug",
      "Type 2": "Rock",
      "Total": "505",
      "HP": "20",
      "Attack": "10",
      "Defense": "230",
      "Sp": {
        " Atk": "10",
        " Def": "230"
      },
      "Speed": "5",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6085"
      },
      "#": "214",
      "Name": "Heracross",
      "Type 1": "Bug",
      "Type 2": "Fighting",
      "Total": "500",
      "HP": "80",
      "Attack": "125",
      "Defense": "75",
      "Sp": {
        " Atk": "40",
        " Def": "95"
      },
      "Speed": "85",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6086"
      },
      "#": "214",
      "Name": "HeracrossMega Heracross",
      "Type 1": "Bug",
      "Type 2": "Fighting",
      "Total": "600",
      "HP": "80",
      "Attack": "185",
      "Defense": "115",
      "Sp": {
        " Atk": "40",
        " Def": "105"
      },
      "Speed": "75",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6087"
      },
      "#": "215",
      "Name": "Sneasel",
      "Type 1": "Dark",
      "Type 2": "Ice",
      "Total": "430",
      "HP": "55",
      "Attack": "95",
      "Defense": "55",
      "Sp": {
        " Atk": "35",
        " Def": "75"
      },
      "Speed": "115",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6088"
      },
      "#": "216",
      "Name": "Teddiursa",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "330",
      "HP": "60",
      "Attack": "80",
      "Defense": "50",
      "Sp": {
        " Atk": "50",
        " Def": "50"
      },
      "Speed": "40",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6089"
      },
      "#": "217",
      "Name": "Ursaring",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "500",
      "HP": "90",
      "Attack": "130",
      "Defense": "75",
      "Sp": {
        " Atk": "75",
        " Def": "75"
      },
      "Speed": "55",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e608a"
      },
      "#": "218",
      "Name": "Slugma",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "250",
      "HP": "40",
      "Attack": "40",
      "Defense": "40",
      "Sp": {
        " Atk": "70",
        " Def": "40"
      },
      "Speed": "20",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e608b"
      },
      "#": "219",
      "Name": "Magcargo",
      "Type 1": "Fire",
      "Type 2": "Rock",
      "Total": "410",
      "HP": "50",
      "Attack": "50",
      "Defense": "120",
      "Sp": {
        " Atk": "80",
        " Def": "80"
      },
      "Speed": "30",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e608c"
      },
      "#": "220",
      "Name": "Swinub",
      "Type 1": "Ice",
      "Type 2": "Ground",
      "Total": "250",
      "HP": "50",
      "Attack": "50",
      "Defense": "40",
      "Sp": {
        " Atk": "30",
        " Def": "30"
      },
      "Speed": "50",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e608d"
      },
      "#": "221",
      "Name": "Piloswine",
      "Type 1": "Ice",
      "Type 2": "Ground",
      "Total": "450",
      "HP": "100",
      "Attack": "100",
      "Defense": "80",
      "Sp": {
        " Atk": "60",
        " Def": "60"
      },
      "Speed": "50",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e608e"
      },
      "#": "222",
      "Name": "Corsola",
      "Type 1": "Water",
      "Type 2": "Rock",
      "Total": "380",
      "HP": "55",
      "Attack": "55",
      "Defense": "85",
      "Sp": {
        " Atk": "65",
        " Def": "85"
      },
      "Speed": "35",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e608f"
      },
      "#": "223",
      "Name": "Remoraid",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "300",
      "HP": "35",
      "Attack": "65",
      "Defense": "35",
      "Sp": {
        " Atk": "65",
        " Def": "35"
      },
      "Speed": "65",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6090"
      },
      "#": "224",
      "Name": "Octillery",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "480",
      "HP": "75",
      "Attack": "105",
      "Defense": "75",
      "Sp": {
        " Atk": "105",
        " Def": "75"
      },
      "Speed": "45",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6091"
      },
      "#": "225",
      "Name": "Delibird",
      "Type 1": "Ice",
      "Type 2": "Flying",
      "Total": "330",
      "HP": "45",
      "Attack": "55",
      "Defense": "45",
      "Sp": {
        " Atk": "65",
        " Def": "45"
      },
      "Speed": "75",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6092"
      },
      "#": "226",
      "Name": "Mantine",
      "Type 1": "Water",
      "Type 2": "Flying",
      "Total": "465",
      "HP": "65",
      "Attack": "40",
      "Defense": "70",
      "Sp": {
        " Atk": "80",
        " Def": "140"
      },
      "Speed": "70",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6093"
      },
      "#": "227",
      "Name": "Skarmory",
      "Type 1": "Steel",
      "Type 2": "Flying",
      "Total": "465",
      "HP": "65",
      "Attack": "80",
      "Defense": "140",
      "Sp": {
        " Atk": "40",
        " Def": "70"
      },
      "Speed": "70",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6094"
      },
      "#": "228",
      "Name": "Houndour",
      "Type 1": "Dark",
      "Type 2": "Fire",
      "Total": "330",
      "HP": "45",
      "Attack": "60",
      "Defense": "30",
      "Sp": {
        " Atk": "80",
        " Def": "50"
      },
      "Speed": "65",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6095"
      },
      "#": "229",
      "Name": "Houndoom",
      "Type 1": "Dark",
      "Type 2": "Fire",
      "Total": "500",
      "HP": "75",
      "Attack": "90",
      "Defense": "50",
      "Sp": {
        " Atk": "110",
        " Def": "80"
      },
      "Speed": "95",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6096"
      },
      "#": "229",
      "Name": "HoundoomMega Houndoom",
      "Type 1": "Dark",
      "Type 2": "Fire",
      "Total": "600",
      "HP": "75",
      "Attack": "90",
      "Defense": "90",
      "Sp": {
        " Atk": "140",
        " Def": "90"
      },
      "Speed": "115",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6097"
      },
      "#": "230",
      "Name": "Kingdra",
      "Type 1": "Water",
      "Type 2": "Dragon",
      "Total": "540",
      "HP": "75",
      "Attack": "95",
      "Defense": "95",
      "Sp": {
        " Atk": "95",
        " Def": "95"
      },
      "Speed": "85",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6098"
      },
      "#": "231",
      "Name": "Phanpy",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "330",
      "HP": "90",
      "Attack": "60",
      "Defense": "60",
      "Sp": {
        " Atk": "40",
        " Def": "40"
      },
      "Speed": "40",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6099"
      },
      "#": "232",
      "Name": "Donphan",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "500",
      "HP": "90",
      "Attack": "120",
      "Defense": "120",
      "Sp": {
        " Atk": "60",
        " Def": "60"
      },
      "Speed": "50",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e609a"
      },
      "#": "233",
      "Name": "Porygon2",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "515",
      "HP": "85",
      "Attack": "80",
      "Defense": "90",
      "Sp": {
        " Atk": "105",
        " Def": "95"
      },
      "Speed": "60",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e609b"
      },
      "#": "234",
      "Name": "Stantler",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "465",
      "HP": "73",
      "Attack": "95",
      "Defense": "62",
      "Sp": {
        " Atk": "85",
        " Def": "65"
      },
      "Speed": "85",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e609c"
      },
      "#": "235",
      "Name": "Smeargle",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "250",
      "HP": "55",
      "Attack": "20",
      "Defense": "35",
      "Sp": {
        " Atk": "20",
        " Def": "45"
      },
      "Speed": "75",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e609d"
      },
      "#": "236",
      "Name": "Tyrogue",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "210",
      "HP": "35",
      "Attack": "35",
      "Defense": "35",
      "Sp": {
        " Atk": "35",
        " Def": "35"
      },
      "Speed": "35",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e609e"
      },
      "#": "237",
      "Name": "Hitmontop",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "455",
      "HP": "50",
      "Attack": "95",
      "Defense": "95",
      "Sp": {
        " Atk": "35",
        " Def": "110"
      },
      "Speed": "70",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e609f"
      },
      "#": "238",
      "Name": "Smoochum",
      "Type 1": "Ice",
      "Type 2": "Psychic",
      "Total": "305",
      "HP": "45",
      "Attack": "30",
      "Defense": "15",
      "Sp": {
        " Atk": "85",
        " Def": "65"
      },
      "Speed": "65",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60a0"
      },
      "#": "239",
      "Name": "Elekid",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "360",
      "HP": "45",
      "Attack": "63",
      "Defense": "37",
      "Sp": {
        " Atk": "65",
        " Def": "55"
      },
      "Speed": "95",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60a1"
      },
      "#": "240",
      "Name": "Magby",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "365",
      "HP": "45",
      "Attack": "75",
      "Defense": "37",
      "Sp": {
        " Atk": "70",
        " Def": "55"
      },
      "Speed": "83",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60a2"
      },
      "#": "241",
      "Name": "Miltank",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "490",
      "HP": "95",
      "Attack": "80",
      "Defense": "105",
      "Sp": {
        " Atk": "40",
        " Def": "70"
      },
      "Speed": "100",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60a3"
      },
      "#": "242",
      "Name": "Blissey",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "540",
      "HP": "255",
      "Attack": "10",
      "Defense": "10",
      "Sp": {
        " Atk": "75",
        " Def": "135"
      },
      "Speed": "55",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60a4"
      },
      "#": "243",
      "Name": "Raikou",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "580",
      "HP": "90",
      "Attack": "85",
      "Defense": "75",
      "Sp": {
        " Atk": "115",
        " Def": "100"
      },
      "Speed": "115",
      "Generation": "2",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60a5"
      },
      "#": "244",
      "Name": "Entei",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "580",
      "HP": "115",
      "Attack": "115",
      "Defense": "85",
      "Sp": {
        " Atk": "90",
        " Def": "75"
      },
      "Speed": "100",
      "Generation": "2",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60a6"
      },
      "#": "245",
      "Name": "Suicune",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "580",
      "HP": "100",
      "Attack": "75",
      "Defense": "115",
      "Sp": {
        " Atk": "90",
        " Def": "115"
      },
      "Speed": "85",
      "Generation": "2",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60a7"
      },
      "#": "246",
      "Name": "Larvitar",
      "Type 1": "Rock",
      "Type 2": "Ground",
      "Total": "300",
      "HP": "50",
      "Attack": "64",
      "Defense": "50",
      "Sp": {
        " Atk": "45",
        " Def": "50"
      },
      "Speed": "41",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60a8"
      },
      "#": "247",
      "Name": "Pupitar",
      "Type 1": "Rock",
      "Type 2": "Ground",
      "Total": "410",
      "HP": "70",
      "Attack": "84",
      "Defense": "70",
      "Sp": {
        " Atk": "65",
        " Def": "70"
      },
      "Speed": "51",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60a9"
      },
      "#": "248",
      "Name": "Tyranitar",
      "Type 1": "Rock",
      "Type 2": "Dark",
      "Total": "600",
      "HP": "100",
      "Attack": "134",
      "Defense": "110",
      "Sp": {
        " Atk": "95",
        " Def": "100"
      },
      "Speed": "61",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60aa"
      },
      "#": "248",
      "Name": "TyranitarMega Tyranitar",
      "Type 1": "Rock",
      "Type 2": "Dark",
      "Total": "700",
      "HP": "100",
      "Attack": "164",
      "Defense": "150",
      "Sp": {
        " Atk": "95",
        " Def": "120"
      },
      "Speed": "71",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ab"
      },
      "#": "249",
      "Name": "Lugia",
      "Type 1": "Psychic",
      "Type 2": "Flying",
      "Total": "680",
      "HP": "106",
      "Attack": "90",
      "Defense": "130",
      "Sp": {
        " Atk": "90",
        " Def": "154"
      },
      "Speed": "110",
      "Generation": "2",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ac"
      },
      "#": "250",
      "Name": "Ho-oh",
      "Type 1": "Fire",
      "Type 2": "Flying",
      "Total": "680",
      "HP": "106",
      "Attack": "130",
      "Defense": "90",
      "Sp": {
        " Atk": "110",
        " Def": "154"
      },
      "Speed": "90",
      "Generation": "2",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ad"
      },
      "#": "251",
      "Name": "Celebi",
      "Type 1": "Psychic",
      "Type 2": "Grass",
      "Total": "600",
      "HP": "100",
      "Attack": "100",
      "Defense": "100",
      "Sp": {
        " Atk": "100",
        " Def": "100"
      },
      "Speed": "100",
      "Generation": "2",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ae"
      },
      "#": "252",
      "Name": "Treecko",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "310",
      "HP": "40",
      "Attack": "45",
      "Defense": "35",
      "Sp": {
        " Atk": "65",
        " Def": "55"
      },
      "Speed": "70",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60af"
      },
      "#": "253",
      "Name": "Grovyle",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "405",
      "HP": "50",
      "Attack": "65",
      "Defense": "45",
      "Sp": {
        " Atk": "85",
        " Def": "65"
      },
      "Speed": "95",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60b0"
      },
      "#": "254",
      "Name": "Sceptile",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "530",
      "HP": "70",
      "Attack": "85",
      "Defense": "65",
      "Sp": {
        " Atk": "105",
        " Def": "85"
      },
      "Speed": "120",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60b1"
      },
      "#": "254",
      "Name": "SceptileMega Sceptile",
      "Type 1": "Grass",
      "Type 2": "Dragon",
      "Total": "630",
      "HP": "70",
      "Attack": "110",
      "Defense": "75",
      "Sp": {
        " Atk": "145",
        " Def": "85"
      },
      "Speed": "145",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60b2"
      },
      "#": "255",
      "Name": "Torchic",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "310",
      "HP": "45",
      "Attack": "60",
      "Defense": "40",
      "Sp": {
        " Atk": "70",
        " Def": "50"
      },
      "Speed": "45",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60b3"
      },
      "#": "256",
      "Name": "Combusken",
      "Type 1": "Fire",
      "Type 2": "Fighting",
      "Total": "405",
      "HP": "60",
      "Attack": "85",
      "Defense": "60",
      "Sp": {
        " Atk": "85",
        " Def": "60"
      },
      "Speed": "55",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60b4"
      },
      "#": "257",
      "Name": "Blaziken",
      "Type 1": "Fire",
      "Type 2": "Fighting",
      "Total": "530",
      "HP": "80",
      "Attack": "120",
      "Defense": "70",
      "Sp": {
        " Atk": "110",
        " Def": "70"
      },
      "Speed": "80",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60b5"
      },
      "#": "257",
      "Name": "BlazikenMega Blaziken",
      "Type 1": "Fire",
      "Type 2": "Fighting",
      "Total": "630",
      "HP": "80",
      "Attack": "160",
      "Defense": "80",
      "Sp": {
        " Atk": "130",
        " Def": "80"
      },
      "Speed": "100",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60b6"
      },
      "#": "258",
      "Name": "Mudkip",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "310",
      "HP": "50",
      "Attack": "70",
      "Defense": "50",
      "Sp": {
        " Atk": "50",
        " Def": "50"
      },
      "Speed": "40",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60b7"
      },
      "#": "259",
      "Name": "Marshtomp",
      "Type 1": "Water",
      "Type 2": "Ground",
      "Total": "405",
      "HP": "70",
      "Attack": "85",
      "Defense": "70",
      "Sp": {
        " Atk": "60",
        " Def": "70"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60b8"
      },
      "#": "260",
      "Name": "Swampert",
      "Type 1": "Water",
      "Type 2": "Ground",
      "Total": "535",
      "HP": "100",
      "Attack": "110",
      "Defense": "90",
      "Sp": {
        " Atk": "85",
        " Def": "90"
      },
      "Speed": "60",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60b9"
      },
      "#": "260",
      "Name": "SwampertMega Swampert",
      "Type 1": "Water",
      "Type 2": "Ground",
      "Total": "635",
      "HP": "100",
      "Attack": "150",
      "Defense": "110",
      "Sp": {
        " Atk": "95",
        " Def": "110"
      },
      "Speed": "70",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ba"
      },
      "#": "261",
      "Name": "Poochyena",
      "Type 1": "Dark",
      "Type 2": "",
      "Total": "220",
      "HP": "35",
      "Attack": "55",
      "Defense": "35",
      "Sp": {
        " Atk": "30",
        " Def": "30"
      },
      "Speed": "35",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60bb"
      },
      "#": "262",
      "Name": "Mightyena",
      "Type 1": "Dark",
      "Type 2": "",
      "Total": "420",
      "HP": "70",
      "Attack": "90",
      "Defense": "70",
      "Sp": {
        " Atk": "60",
        " Def": "60"
      },
      "Speed": "70",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60bc"
      },
      "#": "263",
      "Name": "Zigzagoon",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "240",
      "HP": "38",
      "Attack": "30",
      "Defense": "41",
      "Sp": {
        " Atk": "30",
        " Def": "41"
      },
      "Speed": "60",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60bd"
      },
      "#": "264",
      "Name": "Linoone",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "420",
      "HP": "78",
      "Attack": "70",
      "Defense": "61",
      "Sp": {
        " Atk": "50",
        " Def": "61"
      },
      "Speed": "100",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60be"
      },
      "#": "265",
      "Name": "Wurmple",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "195",
      "HP": "45",
      "Attack": "45",
      "Defense": "35",
      "Sp": {
        " Atk": "20",
        " Def": "30"
      },
      "Speed": "20",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60bf"
      },
      "#": "266",
      "Name": "Silcoon",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "205",
      "HP": "50",
      "Attack": "35",
      "Defense": "55",
      "Sp": {
        " Atk": "25",
        " Def": "25"
      },
      "Speed": "15",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60c0"
      },
      "#": "267",
      "Name": "Beautifly",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "395",
      "HP": "60",
      "Attack": "70",
      "Defense": "50",
      "Sp": {
        " Atk": "100",
        " Def": "50"
      },
      "Speed": "65",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60c1"
      },
      "#": "268",
      "Name": "Cascoon",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "205",
      "HP": "50",
      "Attack": "35",
      "Defense": "55",
      "Sp": {
        " Atk": "25",
        " Def": "25"
      },
      "Speed": "15",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60c2"
      },
      "#": "269",
      "Name": "Dustox",
      "Type 1": "Bug",
      "Type 2": "Poison",
      "Total": "385",
      "HP": "60",
      "Attack": "50",
      "Defense": "70",
      "Sp": {
        " Atk": "50",
        " Def": "90"
      },
      "Speed": "65",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60c3"
      },
      "#": "270",
      "Name": "Lotad",
      "Type 1": "Water",
      "Type 2": "Grass",
      "Total": "220",
      "HP": "40",
      "Attack": "30",
      "Defense": "30",
      "Sp": {
        " Atk": "40",
        " Def": "50"
      },
      "Speed": "30",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60c4"
      },
      "#": "271",
      "Name": "Lombre",
      "Type 1": "Water",
      "Type 2": "Grass",
      "Total": "340",
      "HP": "60",
      "Attack": "50",
      "Defense": "50",
      "Sp": {
        " Atk": "60",
        " Def": "70"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60c5"
      },
      "#": "272",
      "Name": "Ludicolo",
      "Type 1": "Water",
      "Type 2": "Grass",
      "Total": "480",
      "HP": "80",
      "Attack": "70",
      "Defense": "70",
      "Sp": {
        " Atk": "90",
        " Def": "100"
      },
      "Speed": "70",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60c6"
      },
      "#": "273",
      "Name": "Seedot",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "220",
      "HP": "40",
      "Attack": "40",
      "Defense": "50",
      "Sp": {
        " Atk": "30",
        " Def": "30"
      },
      "Speed": "30",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60c7"
      },
      "#": "274",
      "Name": "Nuzleaf",
      "Type 1": "Grass",
      "Type 2": "Dark",
      "Total": "340",
      "HP": "70",
      "Attack": "70",
      "Defense": "40",
      "Sp": {
        " Atk": "60",
        " Def": "40"
      },
      "Speed": "60",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60c8"
      },
      "#": "275",
      "Name": "Shiftry",
      "Type 1": "Grass",
      "Type 2": "Dark",
      "Total": "480",
      "HP": "90",
      "Attack": "100",
      "Defense": "60",
      "Sp": {
        " Atk": "90",
        " Def": "60"
      },
      "Speed": "80",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60c9"
      },
      "#": "276",
      "Name": "Taillow",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "270",
      "HP": "40",
      "Attack": "55",
      "Defense": "30",
      "Sp": {
        " Atk": "30",
        " Def": "30"
      },
      "Speed": "85",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ca"
      },
      "#": "277",
      "Name": "Swellow",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "430",
      "HP": "60",
      "Attack": "85",
      "Defense": "60",
      "Sp": {
        " Atk": "50",
        " Def": "50"
      },
      "Speed": "125",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60cb"
      },
      "#": "278",
      "Name": "Wingull",
      "Type 1": "Water",
      "Type 2": "Flying",
      "Total": "270",
      "HP": "40",
      "Attack": "30",
      "Defense": "30",
      "Sp": {
        " Atk": "55",
        " Def": "30"
      },
      "Speed": "85",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60cc"
      },
      "#": "279",
      "Name": "Pelipper",
      "Type 1": "Water",
      "Type 2": "Flying",
      "Total": "430",
      "HP": "60",
      "Attack": "50",
      "Defense": "100",
      "Sp": {
        " Atk": "85",
        " Def": "70"
      },
      "Speed": "65",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60cd"
      },
      "#": "280",
      "Name": "Ralts",
      "Type 1": "Psychic",
      "Type 2": "Fairy",
      "Total": "198",
      "HP": "28",
      "Attack": "25",
      "Defense": "25",
      "Sp": {
        " Atk": "45",
        " Def": "35"
      },
      "Speed": "40",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ce"
      },
      "#": "281",
      "Name": "Kirlia",
      "Type 1": "Psychic",
      "Type 2": "Fairy",
      "Total": "278",
      "HP": "38",
      "Attack": "35",
      "Defense": "35",
      "Sp": {
        " Atk": "65",
        " Def": "55"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60cf"
      },
      "#": "282",
      "Name": "Gardevoir",
      "Type 1": "Psychic",
      "Type 2": "Fairy",
      "Total": "518",
      "HP": "68",
      "Attack": "65",
      "Defense": "65",
      "Sp": {
        " Atk": "125",
        " Def": "115"
      },
      "Speed": "80",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60d0"
      },
      "#": "282",
      "Name": "GardevoirMega Gardevoir",
      "Type 1": "Psychic",
      "Type 2": "Fairy",
      "Total": "618",
      "HP": "68",
      "Attack": "85",
      "Defense": "65",
      "Sp": {
        " Atk": "165",
        " Def": "135"
      },
      "Speed": "100",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60d1"
      },
      "#": "283",
      "Name": "Surskit",
      "Type 1": "Bug",
      "Type 2": "Water",
      "Total": "269",
      "HP": "40",
      "Attack": "30",
      "Defense": "32",
      "Sp": {
        " Atk": "50",
        " Def": "52"
      },
      "Speed": "65",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60d2"
      },
      "#": "284",
      "Name": "Masquerain",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "414",
      "HP": "70",
      "Attack": "60",
      "Defense": "62",
      "Sp": {
        " Atk": "80",
        " Def": "82"
      },
      "Speed": "60",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60d3"
      },
      "#": "285",
      "Name": "Shroomish",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "295",
      "HP": "60",
      "Attack": "40",
      "Defense": "60",
      "Sp": {
        " Atk": "40",
        " Def": "60"
      },
      "Speed": "35",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60d4"
      },
      "#": "286",
      "Name": "Breloom",
      "Type 1": "Grass",
      "Type 2": "Fighting",
      "Total": "460",
      "HP": "60",
      "Attack": "130",
      "Defense": "80",
      "Sp": {
        " Atk": "60",
        " Def": "60"
      },
      "Speed": "70",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60d5"
      },
      "#": "287",
      "Name": "Slakoth",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "280",
      "HP": "60",
      "Attack": "60",
      "Defense": "60",
      "Sp": {
        " Atk": "35",
        " Def": "35"
      },
      "Speed": "30",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60d6"
      },
      "#": "288",
      "Name": "Vigoroth",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "440",
      "HP": "80",
      "Attack": "80",
      "Defense": "80",
      "Sp": {
        " Atk": "55",
        " Def": "55"
      },
      "Speed": "90",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60d7"
      },
      "#": "289",
      "Name": "Slaking",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "670",
      "HP": "150",
      "Attack": "160",
      "Defense": "100",
      "Sp": {
        " Atk": "95",
        " Def": "65"
      },
      "Speed": "100",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60d8"
      },
      "#": "290",
      "Name": "Nincada",
      "Type 1": "Bug",
      "Type 2": "Ground",
      "Total": "266",
      "HP": "31",
      "Attack": "45",
      "Defense": "90",
      "Sp": {
        " Atk": "30",
        " Def": "30"
      },
      "Speed": "40",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60d9"
      },
      "#": "291",
      "Name": "Ninjask",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "456",
      "HP": "61",
      "Attack": "90",
      "Defense": "45",
      "Sp": {
        " Atk": "50",
        " Def": "50"
      },
      "Speed": "160",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60da"
      },
      "#": "292",
      "Name": "Shedinja",
      "Type 1": "Bug",
      "Type 2": "Ghost",
      "Total": "236",
      "HP": "1",
      "Attack": "90",
      "Defense": "45",
      "Sp": {
        " Atk": "30",
        " Def": "30"
      },
      "Speed": "40",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60db"
      },
      "#": "293",
      "Name": "Whismur",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "240",
      "HP": "64",
      "Attack": "51",
      "Defense": "23",
      "Sp": {
        " Atk": "51",
        " Def": "23"
      },
      "Speed": "28",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60dc"
      },
      "#": "294",
      "Name": "Loudred",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "360",
      "HP": "84",
      "Attack": "71",
      "Defense": "43",
      "Sp": {
        " Atk": "71",
        " Def": "43"
      },
      "Speed": "48",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60dd"
      },
      "#": "295",
      "Name": "Exploud",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "490",
      "HP": "104",
      "Attack": "91",
      "Defense": "63",
      "Sp": {
        " Atk": "91",
        " Def": "73"
      },
      "Speed": "68",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60de"
      },
      "#": "296",
      "Name": "Makuhita",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "237",
      "HP": "72",
      "Attack": "60",
      "Defense": "30",
      "Sp": {
        " Atk": "20",
        " Def": "30"
      },
      "Speed": "25",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60df"
      },
      "#": "297",
      "Name": "Hariyama",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "474",
      "HP": "144",
      "Attack": "120",
      "Defense": "60",
      "Sp": {
        " Atk": "40",
        " Def": "60"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60e0"
      },
      "#": "298",
      "Name": "Azurill",
      "Type 1": "Normal",
      "Type 2": "Fairy",
      "Total": "190",
      "HP": "50",
      "Attack": "20",
      "Defense": "40",
      "Sp": {
        " Atk": "20",
        " Def": "40"
      },
      "Speed": "20",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60e1"
      },
      "#": "299",
      "Name": "Nosepass",
      "Type 1": "Rock",
      "Type 2": "",
      "Total": "375",
      "HP": "30",
      "Attack": "45",
      "Defense": "135",
      "Sp": {
        " Atk": "45",
        " Def": "90"
      },
      "Speed": "30",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60e2"
      },
      "#": "300",
      "Name": "Skitty",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "260",
      "HP": "50",
      "Attack": "45",
      "Defense": "45",
      "Sp": {
        " Atk": "35",
        " Def": "35"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60e3"
      },
      "#": "301",
      "Name": "Delcatty",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "380",
      "HP": "70",
      "Attack": "65",
      "Defense": "65",
      "Sp": {
        " Atk": "55",
        " Def": "55"
      },
      "Speed": "70",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60e4"
      },
      "#": "302",
      "Name": "Sableye",
      "Type 1": "Dark",
      "Type 2": "Ghost",
      "Total": "380",
      "HP": "50",
      "Attack": "75",
      "Defense": "75",
      "Sp": {
        " Atk": "65",
        " Def": "65"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60e5"
      },
      "#": "302",
      "Name": "SableyeMega Sableye",
      "Type 1": "Dark",
      "Type 2": "Ghost",
      "Total": "480",
      "HP": "50",
      "Attack": "85",
      "Defense": "125",
      "Sp": {
        " Atk": "85",
        " Def": "115"
      },
      "Speed": "20",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60e6"
      },
      "#": "303",
      "Name": "Mawile",
      "Type 1": "Steel",
      "Type 2": "Fairy",
      "Total": "380",
      "HP": "50",
      "Attack": "85",
      "Defense": "85",
      "Sp": {
        " Atk": "55",
        " Def": "55"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60e7"
      },
      "#": "303",
      "Name": "MawileMega Mawile",
      "Type 1": "Steel",
      "Type 2": "Fairy",
      "Total": "480",
      "HP": "50",
      "Attack": "105",
      "Defense": "125",
      "Sp": {
        " Atk": "55",
        " Def": "95"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60e8"
      },
      "#": "304",
      "Name": "Aron",
      "Type 1": "Steel",
      "Type 2": "Rock",
      "Total": "330",
      "HP": "50",
      "Attack": "70",
      "Defense": "100",
      "Sp": {
        " Atk": "40",
        " Def": "40"
      },
      "Speed": "30",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60e9"
      },
      "#": "305",
      "Name": "Lairon",
      "Type 1": "Steel",
      "Type 2": "Rock",
      "Total": "430",
      "HP": "60",
      "Attack": "90",
      "Defense": "140",
      "Sp": {
        " Atk": "50",
        " Def": "50"
      },
      "Speed": "40",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ea"
      },
      "#": "306",
      "Name": "Aggron",
      "Type 1": "Steel",
      "Type 2": "Rock",
      "Total": "530",
      "HP": "70",
      "Attack": "110",
      "Defense": "180",
      "Sp": {
        " Atk": "60",
        " Def": "60"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60eb"
      },
      "#": "306",
      "Name": "AggronMega Aggron",
      "Type 1": "Steel",
      "Type 2": "",
      "Total": "630",
      "HP": "70",
      "Attack": "140",
      "Defense": "230",
      "Sp": {
        " Atk": "60",
        " Def": "80"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ec"
      },
      "#": "307",
      "Name": "Meditite",
      "Type 1": "Fighting",
      "Type 2": "Psychic",
      "Total": "280",
      "HP": "30",
      "Attack": "40",
      "Defense": "55",
      "Sp": {
        " Atk": "40",
        " Def": "55"
      },
      "Speed": "60",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ed"
      },
      "#": "308",
      "Name": "Medicham",
      "Type 1": "Fighting",
      "Type 2": "Psychic",
      "Total": "410",
      "HP": "60",
      "Attack": "60",
      "Defense": "75",
      "Sp": {
        " Atk": "60",
        " Def": "75"
      },
      "Speed": "80",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ee"
      },
      "#": "308",
      "Name": "MedichamMega Medicham",
      "Type 1": "Fighting",
      "Type 2": "Psychic",
      "Total": "510",
      "HP": "60",
      "Attack": "100",
      "Defense": "85",
      "Sp": {
        " Atk": "80",
        " Def": "85"
      },
      "Speed": "100",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ef"
      },
      "#": "309",
      "Name": "Electrike",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "295",
      "HP": "40",
      "Attack": "45",
      "Defense": "40",
      "Sp": {
        " Atk": "65",
        " Def": "40"
      },
      "Speed": "65",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60f0"
      },
      "#": "310",
      "Name": "Manectric",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "475",
      "HP": "70",
      "Attack": "75",
      "Defense": "60",
      "Sp": {
        " Atk": "105",
        " Def": "60"
      },
      "Speed": "105",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60f1"
      },
      "#": "310",
      "Name": "ManectricMega Manectric",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "575",
      "HP": "70",
      "Attack": "75",
      "Defense": "80",
      "Sp": {
        " Atk": "135",
        " Def": "80"
      },
      "Speed": "135",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60f2"
      },
      "#": "311",
      "Name": "Plusle",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "405",
      "HP": "60",
      "Attack": "50",
      "Defense": "40",
      "Sp": {
        " Atk": "85",
        " Def": "75"
      },
      "Speed": "95",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60f3"
      },
      "#": "312",
      "Name": "Minun",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "405",
      "HP": "60",
      "Attack": "40",
      "Defense": "50",
      "Sp": {
        " Atk": "75",
        " Def": "85"
      },
      "Speed": "95",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60f4"
      },
      "#": "313",
      "Name": "Volbeat",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "400",
      "HP": "65",
      "Attack": "73",
      "Defense": "55",
      "Sp": {
        " Atk": "47",
        " Def": "75"
      },
      "Speed": "85",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60f5"
      },
      "#": "314",
      "Name": "Illumise",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "400",
      "HP": "65",
      "Attack": "47",
      "Defense": "55",
      "Sp": {
        " Atk": "73",
        " Def": "75"
      },
      "Speed": "85",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60f6"
      },
      "#": "315",
      "Name": "Roselia",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "400",
      "HP": "50",
      "Attack": "60",
      "Defense": "45",
      "Sp": {
        " Atk": "100",
        " Def": "80"
      },
      "Speed": "65",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60f7"
      },
      "#": "316",
      "Name": "Gulpin",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "302",
      "HP": "70",
      "Attack": "43",
      "Defense": "53",
      "Sp": {
        " Atk": "43",
        " Def": "53"
      },
      "Speed": "40",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60f8"
      },
      "#": "317",
      "Name": "Swalot",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "467",
      "HP": "100",
      "Attack": "73",
      "Defense": "83",
      "Sp": {
        " Atk": "73",
        " Def": "83"
      },
      "Speed": "55",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60f9"
      },
      "#": "318",
      "Name": "Carvanha",
      "Type 1": "Water",
      "Type 2": "Dark",
      "Total": "305",
      "HP": "45",
      "Attack": "90",
      "Defense": "20",
      "Sp": {
        " Atk": "65",
        " Def": "20"
      },
      "Speed": "65",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60fa"
      },
      "#": "319",
      "Name": "Sharpedo",
      "Type 1": "Water",
      "Type 2": "Dark",
      "Total": "460",
      "HP": "70",
      "Attack": "120",
      "Defense": "40",
      "Sp": {
        " Atk": "95",
        " Def": "40"
      },
      "Speed": "95",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60fb"
      },
      "#": "319",
      "Name": "SharpedoMega Sharpedo",
      "Type 1": "Water",
      "Type 2": "Dark",
      "Total": "560",
      "HP": "70",
      "Attack": "140",
      "Defense": "70",
      "Sp": {
        " Atk": "110",
        " Def": "65"
      },
      "Speed": "105",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60fc"
      },
      "#": "320",
      "Name": "Wailmer",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "400",
      "HP": "130",
      "Attack": "70",
      "Defense": "35",
      "Sp": {
        " Atk": "70",
        " Def": "35"
      },
      "Speed": "60",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60fd"
      },
      "#": "321",
      "Name": "Wailord",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "500",
      "HP": "170",
      "Attack": "90",
      "Defense": "45",
      "Sp": {
        " Atk": "90",
        " Def": "45"
      },
      "Speed": "60",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60fe"
      },
      "#": "322",
      "Name": "Numel",
      "Type 1": "Fire",
      "Type 2": "Ground",
      "Total": "305",
      "HP": "60",
      "Attack": "60",
      "Defense": "40",
      "Sp": {
        " Atk": "65",
        " Def": "45"
      },
      "Speed": "35",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e60ff"
      },
      "#": "323",
      "Name": "Camerupt",
      "Type 1": "Fire",
      "Type 2": "Ground",
      "Total": "460",
      "HP": "70",
      "Attack": "100",
      "Defense": "70",
      "Sp": {
        " Atk": "105",
        " Def": "75"
      },
      "Speed": "40",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6100"
      },
      "#": "323",
      "Name": "CameruptMega Camerupt",
      "Type 1": "Fire",
      "Type 2": "Ground",
      "Total": "560",
      "HP": "70",
      "Attack": "120",
      "Defense": "100",
      "Sp": {
        " Atk": "145",
        " Def": "105"
      },
      "Speed": "20",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6101"
      },
      "#": "324",
      "Name": "Torkoal",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "470",
      "HP": "70",
      "Attack": "85",
      "Defense": "140",
      "Sp": {
        " Atk": "85",
        " Def": "70"
      },
      "Speed": "20",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6102"
      },
      "#": "325",
      "Name": "Spoink",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "330",
      "HP": "60",
      "Attack": "25",
      "Defense": "35",
      "Sp": {
        " Atk": "70",
        " Def": "80"
      },
      "Speed": "60",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6103"
      },
      "#": "326",
      "Name": "Grumpig",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "470",
      "HP": "80",
      "Attack": "45",
      "Defense": "65",
      "Sp": {
        " Atk": "90",
        " Def": "110"
      },
      "Speed": "80",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6104"
      },
      "#": "327",
      "Name": "Spinda",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "360",
      "HP": "60",
      "Attack": "60",
      "Defense": "60",
      "Sp": {
        " Atk": "60",
        " Def": "60"
      },
      "Speed": "60",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6105"
      },
      "#": "328",
      "Name": "Trapinch",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "290",
      "HP": "45",
      "Attack": "100",
      "Defense": "45",
      "Sp": {
        " Atk": "45",
        " Def": "45"
      },
      "Speed": "10",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6106"
      },
      "#": "329",
      "Name": "Vibrava",
      "Type 1": "Ground",
      "Type 2": "Dragon",
      "Total": "340",
      "HP": "50",
      "Attack": "70",
      "Defense": "50",
      "Sp": {
        " Atk": "50",
        " Def": "50"
      },
      "Speed": "70",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6107"
      },
      "#": "330",
      "Name": "Flygon",
      "Type 1": "Ground",
      "Type 2": "Dragon",
      "Total": "520",
      "HP": "80",
      "Attack": "100",
      "Defense": "80",
      "Sp": {
        " Atk": "80",
        " Def": "80"
      },
      "Speed": "100",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6108"
      },
      "#": "331",
      "Name": "Cacnea",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "335",
      "HP": "50",
      "Attack": "85",
      "Defense": "40",
      "Sp": {
        " Atk": "85",
        " Def": "40"
      },
      "Speed": "35",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6109"
      },
      "#": "332",
      "Name": "Cacturne",
      "Type 1": "Grass",
      "Type 2": "Dark",
      "Total": "475",
      "HP": "70",
      "Attack": "115",
      "Defense": "60",
      "Sp": {
        " Atk": "115",
        " Def": "60"
      },
      "Speed": "55",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e610a"
      },
      "#": "333",
      "Name": "Swablu",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "310",
      "HP": "45",
      "Attack": "40",
      "Defense": "60",
      "Sp": {
        " Atk": "40",
        " Def": "75"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e610b"
      },
      "#": "334",
      "Name": "Altaria",
      "Type 1": "Dragon",
      "Type 2": "Flying",
      "Total": "490",
      "HP": "75",
      "Attack": "70",
      "Defense": "90",
      "Sp": {
        " Atk": "70",
        " Def": "105"
      },
      "Speed": "80",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e610c"
      },
      "#": "334",
      "Name": "AltariaMega Altaria",
      "Type 1": "Dragon",
      "Type 2": "Fairy",
      "Total": "590",
      "HP": "75",
      "Attack": "110",
      "Defense": "110",
      "Sp": {
        " Atk": "110",
        " Def": "105"
      },
      "Speed": "80",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e610d"
      },
      "#": "335",
      "Name": "Zangoose",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "458",
      "HP": "73",
      "Attack": "115",
      "Defense": "60",
      "Sp": {
        " Atk": "60",
        " Def": "60"
      },
      "Speed": "90",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e610e"
      },
      "#": "336",
      "Name": "Seviper",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "458",
      "HP": "73",
      "Attack": "100",
      "Defense": "60",
      "Sp": {
        " Atk": "100",
        " Def": "60"
      },
      "Speed": "65",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e610f"
      },
      "#": "337",
      "Name": "Lunatone",
      "Type 1": "Rock",
      "Type 2": "Psychic",
      "Total": "440",
      "HP": "70",
      "Attack": "55",
      "Defense": "65",
      "Sp": {
        " Atk": "95",
        " Def": "85"
      },
      "Speed": "70",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6110"
      },
      "#": "338",
      "Name": "Solrock",
      "Type 1": "Rock",
      "Type 2": "Psychic",
      "Total": "440",
      "HP": "70",
      "Attack": "95",
      "Defense": "85",
      "Sp": {
        " Atk": "55",
        " Def": "65"
      },
      "Speed": "70",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6111"
      },
      "#": "339",
      "Name": "Barboach",
      "Type 1": "Water",
      "Type 2": "Ground",
      "Total": "288",
      "HP": "50",
      "Attack": "48",
      "Defense": "43",
      "Sp": {
        " Atk": "46",
        " Def": "41"
      },
      "Speed": "60",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6112"
      },
      "#": "340",
      "Name": "Whiscash",
      "Type 1": "Water",
      "Type 2": "Ground",
      "Total": "468",
      "HP": "110",
      "Attack": "78",
      "Defense": "73",
      "Sp": {
        " Atk": "76",
        " Def": "71"
      },
      "Speed": "60",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6113"
      },
      "#": "341",
      "Name": "Corphish",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "308",
      "HP": "43",
      "Attack": "80",
      "Defense": "65",
      "Sp": {
        " Atk": "50",
        " Def": "35"
      },
      "Speed": "35",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6114"
      },
      "#": "342",
      "Name": "Crawdaunt",
      "Type 1": "Water",
      "Type 2": "Dark",
      "Total": "468",
      "HP": "63",
      "Attack": "120",
      "Defense": "85",
      "Sp": {
        " Atk": "90",
        " Def": "55"
      },
      "Speed": "55",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6115"
      },
      "#": "343",
      "Name": "Baltoy",
      "Type 1": "Ground",
      "Type 2": "Psychic",
      "Total": "300",
      "HP": "40",
      "Attack": "40",
      "Defense": "55",
      "Sp": {
        " Atk": "40",
        " Def": "70"
      },
      "Speed": "55",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6116"
      },
      "#": "344",
      "Name": "Claydol",
      "Type 1": "Ground",
      "Type 2": "Psychic",
      "Total": "500",
      "HP": "60",
      "Attack": "70",
      "Defense": "105",
      "Sp": {
        " Atk": "70",
        " Def": "120"
      },
      "Speed": "75",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6117"
      },
      "#": "345",
      "Name": "Lileep",
      "Type 1": "Rock",
      "Type 2": "Grass",
      "Total": "355",
      "HP": "66",
      "Attack": "41",
      "Defense": "77",
      "Sp": {
        " Atk": "61",
        " Def": "87"
      },
      "Speed": "23",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6118"
      },
      "#": "346",
      "Name": "Cradily",
      "Type 1": "Rock",
      "Type 2": "Grass",
      "Total": "495",
      "HP": "86",
      "Attack": "81",
      "Defense": "97",
      "Sp": {
        " Atk": "81",
        " Def": "107"
      },
      "Speed": "43",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6119"
      },
      "#": "347",
      "Name": "Anorith",
      "Type 1": "Rock",
      "Type 2": "Bug",
      "Total": "355",
      "HP": "45",
      "Attack": "95",
      "Defense": "50",
      "Sp": {
        " Atk": "40",
        " Def": "50"
      },
      "Speed": "75",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e611a"
      },
      "#": "348",
      "Name": "Armaldo",
      "Type 1": "Rock",
      "Type 2": "Bug",
      "Total": "495",
      "HP": "75",
      "Attack": "125",
      "Defense": "100",
      "Sp": {
        " Atk": "70",
        " Def": "80"
      },
      "Speed": "45",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e611b"
      },
      "#": "349",
      "Name": "Feebas",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "200",
      "HP": "20",
      "Attack": "15",
      "Defense": "20",
      "Sp": {
        " Atk": "10",
        " Def": "55"
      },
      "Speed": "80",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e611c"
      },
      "#": "350",
      "Name": "Milotic",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "540",
      "HP": "95",
      "Attack": "60",
      "Defense": "79",
      "Sp": {
        " Atk": "100",
        " Def": "125"
      },
      "Speed": "81",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e611d"
      },
      "#": "351",
      "Name": "Castform",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "420",
      "HP": "70",
      "Attack": "70",
      "Defense": "70",
      "Sp": {
        " Atk": "70",
        " Def": "70"
      },
      "Speed": "70",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e611e"
      },
      "#": "352",
      "Name": "Kecleon",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "440",
      "HP": "60",
      "Attack": "90",
      "Defense": "70",
      "Sp": {
        " Atk": "60",
        " Def": "120"
      },
      "Speed": "40",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e611f"
      },
      "#": "353",
      "Name": "Shuppet",
      "Type 1": "Ghost",
      "Type 2": "",
      "Total": "295",
      "HP": "44",
      "Attack": "75",
      "Defense": "35",
      "Sp": {
        " Atk": "63",
        " Def": "33"
      },
      "Speed": "45",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6120"
      },
      "#": "354",
      "Name": "Banette",
      "Type 1": "Ghost",
      "Type 2": "",
      "Total": "455",
      "HP": "64",
      "Attack": "115",
      "Defense": "65",
      "Sp": {
        " Atk": "83",
        " Def": "63"
      },
      "Speed": "65",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6121"
      },
      "#": "354",
      "Name": "BanetteMega Banette",
      "Type 1": "Ghost",
      "Type 2": "",
      "Total": "555",
      "HP": "64",
      "Attack": "165",
      "Defense": "75",
      "Sp": {
        " Atk": "93",
        " Def": "83"
      },
      "Speed": "75",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6122"
      },
      "#": "355",
      "Name": "Duskull",
      "Type 1": "Ghost",
      "Type 2": "",
      "Total": "295",
      "HP": "20",
      "Attack": "40",
      "Defense": "90",
      "Sp": {
        " Atk": "30",
        " Def": "90"
      },
      "Speed": "25",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6123"
      },
      "#": "356",
      "Name": "Dusclops",
      "Type 1": "Ghost",
      "Type 2": "",
      "Total": "455",
      "HP": "40",
      "Attack": "70",
      "Defense": "130",
      "Sp": {
        " Atk": "60",
        " Def": "130"
      },
      "Speed": "25",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6124"
      },
      "#": "357",
      "Name": "Tropius",
      "Type 1": "Grass",
      "Type 2": "Flying",
      "Total": "460",
      "HP": "99",
      "Attack": "68",
      "Defense": "83",
      "Sp": {
        " Atk": "72",
        " Def": "87"
      },
      "Speed": "51",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6125"
      },
      "#": "358",
      "Name": "Chimecho",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "425",
      "HP": "65",
      "Attack": "50",
      "Defense": "70",
      "Sp": {
        " Atk": "95",
        " Def": "80"
      },
      "Speed": "65",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6126"
      },
      "#": "359",
      "Name": "Absol",
      "Type 1": "Dark",
      "Type 2": "",
      "Total": "465",
      "HP": "65",
      "Attack": "130",
      "Defense": "60",
      "Sp": {
        " Atk": "75",
        " Def": "60"
      },
      "Speed": "75",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6127"
      },
      "#": "359",
      "Name": "AbsolMega Absol",
      "Type 1": "Dark",
      "Type 2": "",
      "Total": "565",
      "HP": "65",
      "Attack": "150",
      "Defense": "60",
      "Sp": {
        " Atk": "115",
        " Def": "60"
      },
      "Speed": "115",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6128"
      },
      "#": "360",
      "Name": "Wynaut",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "260",
      "HP": "95",
      "Attack": "23",
      "Defense": "48",
      "Sp": {
        " Atk": "23",
        " Def": "48"
      },
      "Speed": "23",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6129"
      },
      "#": "361",
      "Name": "Snorunt",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "300",
      "HP": "50",
      "Attack": "50",
      "Defense": "50",
      "Sp": {
        " Atk": "50",
        " Def": "50"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e612a"
      },
      "#": "362",
      "Name": "Glalie",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "480",
      "HP": "80",
      "Attack": "80",
      "Defense": "80",
      "Sp": {
        " Atk": "80",
        " Def": "80"
      },
      "Speed": "80",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e612b"
      },
      "#": "362",
      "Name": "GlalieMega Glalie",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "580",
      "HP": "80",
      "Attack": "120",
      "Defense": "80",
      "Sp": {
        " Atk": "120",
        " Def": "80"
      },
      "Speed": "100",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e612c"
      },
      "#": "363",
      "Name": "Spheal",
      "Type 1": "Ice",
      "Type 2": "Water",
      "Total": "290",
      "HP": "70",
      "Attack": "40",
      "Defense": "50",
      "Sp": {
        " Atk": "55",
        " Def": "50"
      },
      "Speed": "25",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e612d"
      },
      "#": "364",
      "Name": "Sealeo",
      "Type 1": "Ice",
      "Type 2": "Water",
      "Total": "410",
      "HP": "90",
      "Attack": "60",
      "Defense": "70",
      "Sp": {
        " Atk": "75",
        " Def": "70"
      },
      "Speed": "45",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e612e"
      },
      "#": "365",
      "Name": "Walrein",
      "Type 1": "Ice",
      "Type 2": "Water",
      "Total": "530",
      "HP": "110",
      "Attack": "80",
      "Defense": "90",
      "Sp": {
        " Atk": "95",
        " Def": "90"
      },
      "Speed": "65",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e612f"
      },
      "#": "366",
      "Name": "Clamperl",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "345",
      "HP": "35",
      "Attack": "64",
      "Defense": "85",
      "Sp": {
        " Atk": "74",
        " Def": "55"
      },
      "Speed": "32",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6130"
      },
      "#": "367",
      "Name": "Huntail",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "485",
      "HP": "55",
      "Attack": "104",
      "Defense": "105",
      "Sp": {
        " Atk": "94",
        " Def": "75"
      },
      "Speed": "52",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6131"
      },
      "#": "368",
      "Name": "Gorebyss",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "485",
      "HP": "55",
      "Attack": "84",
      "Defense": "105",
      "Sp": {
        " Atk": "114",
        " Def": "75"
      },
      "Speed": "52",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6132"
      },
      "#": "369",
      "Name": "Relicanth",
      "Type 1": "Water",
      "Type 2": "Rock",
      "Total": "485",
      "HP": "100",
      "Attack": "90",
      "Defense": "130",
      "Sp": {
        " Atk": "45",
        " Def": "65"
      },
      "Speed": "55",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6133"
      },
      "#": "370",
      "Name": "Luvdisc",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "330",
      "HP": "43",
      "Attack": "30",
      "Defense": "55",
      "Sp": {
        " Atk": "40",
        " Def": "65"
      },
      "Speed": "97",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6134"
      },
      "#": "371",
      "Name": "Bagon",
      "Type 1": "Dragon",
      "Type 2": "",
      "Total": "300",
      "HP": "45",
      "Attack": "75",
      "Defense": "60",
      "Sp": {
        " Atk": "40",
        " Def": "30"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6135"
      },
      "#": "372",
      "Name": "Shelgon",
      "Type 1": "Dragon",
      "Type 2": "",
      "Total": "420",
      "HP": "65",
      "Attack": "95",
      "Defense": "100",
      "Sp": {
        " Atk": "60",
        " Def": "50"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6136"
      },
      "#": "373",
      "Name": "Salamence",
      "Type 1": "Dragon",
      "Type 2": "Flying",
      "Total": "600",
      "HP": "95",
      "Attack": "135",
      "Defense": "80",
      "Sp": {
        " Atk": "110",
        " Def": "80"
      },
      "Speed": "100",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6137"
      },
      "#": "373",
      "Name": "SalamenceMega Salamence",
      "Type 1": "Dragon",
      "Type 2": "Flying",
      "Total": "700",
      "HP": "95",
      "Attack": "145",
      "Defense": "130",
      "Sp": {
        " Atk": "120",
        " Def": "90"
      },
      "Speed": "120",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6138"
      },
      "#": "374",
      "Name": "Beldum",
      "Type 1": "Steel",
      "Type 2": "Psychic",
      "Total": "300",
      "HP": "40",
      "Attack": "55",
      "Defense": "80",
      "Sp": {
        " Atk": "35",
        " Def": "60"
      },
      "Speed": "30",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6139"
      },
      "#": "375",
      "Name": "Metang",
      "Type 1": "Steel",
      "Type 2": "Psychic",
      "Total": "420",
      "HP": "60",
      "Attack": "75",
      "Defense": "100",
      "Sp": {
        " Atk": "55",
        " Def": "80"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e613a"
      },
      "#": "376",
      "Name": "Metagross",
      "Type 1": "Steel",
      "Type 2": "Psychic",
      "Total": "600",
      "HP": "80",
      "Attack": "135",
      "Defense": "130",
      "Sp": {
        " Atk": "95",
        " Def": "90"
      },
      "Speed": "70",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e613b"
      },
      "#": "376",
      "Name": "MetagrossMega Metagross",
      "Type 1": "Steel",
      "Type 2": "Psychic",
      "Total": "700",
      "HP": "80",
      "Attack": "145",
      "Defense": "150",
      "Sp": {
        " Atk": "105",
        " Def": "110"
      },
      "Speed": "110",
      "Generation": "3",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e613c"
      },
      "#": "377",
      "Name": "Regirock",
      "Type 1": "Rock",
      "Type 2": "",
      "Total": "580",
      "HP": "80",
      "Attack": "100",
      "Defense": "200",
      "Sp": {
        " Atk": "50",
        " Def": "100"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e613d"
      },
      "#": "378",
      "Name": "Regice",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "580",
      "HP": "80",
      "Attack": "50",
      "Defense": "100",
      "Sp": {
        " Atk": "100",
        " Def": "200"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e613e"
      },
      "#": "379",
      "Name": "Registeel",
      "Type 1": "Steel",
      "Type 2": "",
      "Total": "580",
      "HP": "80",
      "Attack": "75",
      "Defense": "150",
      "Sp": {
        " Atk": "75",
        " Def": "150"
      },
      "Speed": "50",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e613f"
      },
      "#": "380",
      "Name": "Latias",
      "Type 1": "Dragon",
      "Type 2": "Psychic",
      "Total": "600",
      "HP": "80",
      "Attack": "80",
      "Defense": "90",
      "Sp": {
        " Atk": "110",
        " Def": "130"
      },
      "Speed": "110",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6140"
      },
      "#": "380",
      "Name": "LatiasMega Latias",
      "Type 1": "Dragon",
      "Type 2": "Psychic",
      "Total": "700",
      "HP": "80",
      "Attack": "100",
      "Defense": "120",
      "Sp": {
        " Atk": "140",
        " Def": "150"
      },
      "Speed": "110",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6141"
      },
      "#": "381",
      "Name": "Latios",
      "Type 1": "Dragon",
      "Type 2": "Psychic",
      "Total": "600",
      "HP": "80",
      "Attack": "90",
      "Defense": "80",
      "Sp": {
        " Atk": "130",
        " Def": "110"
      },
      "Speed": "110",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6142"
      },
      "#": "381",
      "Name": "LatiosMega Latios",
      "Type 1": "Dragon",
      "Type 2": "Psychic",
      "Total": "700",
      "HP": "80",
      "Attack": "130",
      "Defense": "100",
      "Sp": {
        " Atk": "160",
        " Def": "120"
      },
      "Speed": "110",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6143"
      },
      "#": "382",
      "Name": "Kyogre",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "670",
      "HP": "100",
      "Attack": "100",
      "Defense": "90",
      "Sp": {
        " Atk": "150",
        " Def": "140"
      },
      "Speed": "90",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6144"
      },
      "#": "382",
      "Name": "KyogrePrimal Kyogre",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "770",
      "HP": "100",
      "Attack": "150",
      "Defense": "90",
      "Sp": {
        " Atk": "180",
        " Def": "160"
      },
      "Speed": "90",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6145"
      },
      "#": "383",
      "Name": "Groudon",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "670",
      "HP": "100",
      "Attack": "150",
      "Defense": "140",
      "Sp": {
        " Atk": "100",
        " Def": "90"
      },
      "Speed": "90",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6146"
      },
      "#": "383",
      "Name": "GroudonPrimal Groudon",
      "Type 1": "Ground",
      "Type 2": "Fire",
      "Total": "770",
      "HP": "100",
      "Attack": "180",
      "Defense": "160",
      "Sp": {
        " Atk": "150",
        " Def": "90"
      },
      "Speed": "90",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6147"
      },
      "#": "384",
      "Name": "Rayquaza",
      "Type 1": "Dragon",
      "Type 2": "Flying",
      "Total": "680",
      "HP": "105",
      "Attack": "150",
      "Defense": "90",
      "Sp": {
        " Atk": "150",
        " Def": "90"
      },
      "Speed": "95",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6148"
      },
      "#": "384",
      "Name": "RayquazaMega Rayquaza",
      "Type 1": "Dragon",
      "Type 2": "Flying",
      "Total": "780",
      "HP": "105",
      "Attack": "180",
      "Defense": "100",
      "Sp": {
        " Atk": "180",
        " Def": "100"
      },
      "Speed": "115",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6149"
      },
      "#": "385",
      "Name": "Jirachi",
      "Type 1": "Steel",
      "Type 2": "Psychic",
      "Total": "600",
      "HP": "100",
      "Attack": "100",
      "Defense": "100",
      "Sp": {
        " Atk": "100",
        " Def": "100"
      },
      "Speed": "100",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e614a"
      },
      "#": "386",
      "Name": "DeoxysNormal Forme",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "600",
      "HP": "50",
      "Attack": "150",
      "Defense": "50",
      "Sp": {
        " Atk": "150",
        " Def": "50"
      },
      "Speed": "150",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e614b"
      },
      "#": "386",
      "Name": "DeoxysAttack Forme",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "600",
      "HP": "50",
      "Attack": "180",
      "Defense": "20",
      "Sp": {
        " Atk": "180",
        " Def": "20"
      },
      "Speed": "150",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e614c"
      },
      "#": "386",
      "Name": "DeoxysDefense Forme",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "600",
      "HP": "50",
      "Attack": "70",
      "Defense": "160",
      "Sp": {
        " Atk": "70",
        " Def": "160"
      },
      "Speed": "90",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e614d"
      },
      "#": "386",
      "Name": "DeoxysSpeed Forme",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "600",
      "HP": "50",
      "Attack": "95",
      "Defense": "90",
      "Sp": {
        " Atk": "95",
        " Def": "90"
      },
      "Speed": "180",
      "Generation": "3",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e614e"
      },
      "#": "387",
      "Name": "Turtwig",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "318",
      "HP": "55",
      "Attack": "68",
      "Defense": "64",
      "Sp": {
        " Atk": "45",
        " Def": "55"
      },
      "Speed": "31",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e614f"
      },
      "#": "388",
      "Name": "Grotle",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "405",
      "HP": "75",
      "Attack": "89",
      "Defense": "85",
      "Sp": {
        " Atk": "55",
        " Def": "65"
      },
      "Speed": "36",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6150"
      },
      "#": "389",
      "Name": "Torterra",
      "Type 1": "Grass",
      "Type 2": "Ground",
      "Total": "525",
      "HP": "95",
      "Attack": "109",
      "Defense": "105",
      "Sp": {
        " Atk": "75",
        " Def": "85"
      },
      "Speed": "56",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6151"
      },
      "#": "390",
      "Name": "Chimchar",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "309",
      "HP": "44",
      "Attack": "58",
      "Defense": "44",
      "Sp": {
        " Atk": "58",
        " Def": "44"
      },
      "Speed": "61",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6152"
      },
      "#": "391",
      "Name": "Monferno",
      "Type 1": "Fire",
      "Type 2": "Fighting",
      "Total": "405",
      "HP": "64",
      "Attack": "78",
      "Defense": "52",
      "Sp": {
        " Atk": "78",
        " Def": "52"
      },
      "Speed": "81",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6153"
      },
      "#": "392",
      "Name": "Infernape",
      "Type 1": "Fire",
      "Type 2": "Fighting",
      "Total": "534",
      "HP": "76",
      "Attack": "104",
      "Defense": "71",
      "Sp": {
        " Atk": "104",
        " Def": "71"
      },
      "Speed": "108",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6154"
      },
      "#": "393",
      "Name": "Piplup",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "314",
      "HP": "53",
      "Attack": "51",
      "Defense": "53",
      "Sp": {
        " Atk": "61",
        " Def": "56"
      },
      "Speed": "40",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6155"
      },
      "#": "394",
      "Name": "Prinplup",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "405",
      "HP": "64",
      "Attack": "66",
      "Defense": "68",
      "Sp": {
        " Atk": "81",
        " Def": "76"
      },
      "Speed": "50",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6156"
      },
      "#": "395",
      "Name": "Empoleon",
      "Type 1": "Water",
      "Type 2": "Steel",
      "Total": "530",
      "HP": "84",
      "Attack": "86",
      "Defense": "88",
      "Sp": {
        " Atk": "111",
        " Def": "101"
      },
      "Speed": "60",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6157"
      },
      "#": "396",
      "Name": "Starly",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "245",
      "HP": "40",
      "Attack": "55",
      "Defense": "30",
      "Sp": {
        " Atk": "30",
        " Def": "30"
      },
      "Speed": "60",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6158"
      },
      "#": "397",
      "Name": "Staravia",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "340",
      "HP": "55",
      "Attack": "75",
      "Defense": "50",
      "Sp": {
        " Atk": "40",
        " Def": "40"
      },
      "Speed": "80",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6159"
      },
      "#": "398",
      "Name": "Staraptor",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "485",
      "HP": "85",
      "Attack": "120",
      "Defense": "70",
      "Sp": {
        " Atk": "50",
        " Def": "60"
      },
      "Speed": "100",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e615a"
      },
      "#": "399",
      "Name": "Bidoof",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "250",
      "HP": "59",
      "Attack": "45",
      "Defense": "40",
      "Sp": {
        " Atk": "35",
        " Def": "40"
      },
      "Speed": "31",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e615b"
      },
      "#": "400",
      "Name": "Bibarel",
      "Type 1": "Normal",
      "Type 2": "Water",
      "Total": "410",
      "HP": "79",
      "Attack": "85",
      "Defense": "60",
      "Sp": {
        " Atk": "55",
        " Def": "60"
      },
      "Speed": "71",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e615c"
      },
      "#": "401",
      "Name": "Kricketot",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "194",
      "HP": "37",
      "Attack": "25",
      "Defense": "41",
      "Sp": {
        " Atk": "25",
        " Def": "41"
      },
      "Speed": "25",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e615d"
      },
      "#": "402",
      "Name": "Kricketune",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "384",
      "HP": "77",
      "Attack": "85",
      "Defense": "51",
      "Sp": {
        " Atk": "55",
        " Def": "51"
      },
      "Speed": "65",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e615e"
      },
      "#": "403",
      "Name": "Shinx",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "263",
      "HP": "45",
      "Attack": "65",
      "Defense": "34",
      "Sp": {
        " Atk": "40",
        " Def": "34"
      },
      "Speed": "45",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e615f"
      },
      "#": "404",
      "Name": "Luxio",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "363",
      "HP": "60",
      "Attack": "85",
      "Defense": "49",
      "Sp": {
        " Atk": "60",
        " Def": "49"
      },
      "Speed": "60",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6160"
      },
      "#": "405",
      "Name": "Luxray",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "523",
      "HP": "80",
      "Attack": "120",
      "Defense": "79",
      "Sp": {
        " Atk": "95",
        " Def": "79"
      },
      "Speed": "70",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6161"
      },
      "#": "406",
      "Name": "Budew",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "280",
      "HP": "40",
      "Attack": "30",
      "Defense": "35",
      "Sp": {
        " Atk": "50",
        " Def": "70"
      },
      "Speed": "55",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6162"
      },
      "#": "407",
      "Name": "Roserade",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "515",
      "HP": "60",
      "Attack": "70",
      "Defense": "65",
      "Sp": {
        " Atk": "125",
        " Def": "105"
      },
      "Speed": "90",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6163"
      },
      "#": "408",
      "Name": "Cranidos",
      "Type 1": "Rock",
      "Type 2": "",
      "Total": "350",
      "HP": "67",
      "Attack": "125",
      "Defense": "40",
      "Sp": {
        " Atk": "30",
        " Def": "30"
      },
      "Speed": "58",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6164"
      },
      "#": "409",
      "Name": "Rampardos",
      "Type 1": "Rock",
      "Type 2": "",
      "Total": "495",
      "HP": "97",
      "Attack": "165",
      "Defense": "60",
      "Sp": {
        " Atk": "65",
        " Def": "50"
      },
      "Speed": "58",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6165"
      },
      "#": "410",
      "Name": "Shieldon",
      "Type 1": "Rock",
      "Type 2": "Steel",
      "Total": "350",
      "HP": "30",
      "Attack": "42",
      "Defense": "118",
      "Sp": {
        " Atk": "42",
        " Def": "88"
      },
      "Speed": "30",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6166"
      },
      "#": "411",
      "Name": "Bastiodon",
      "Type 1": "Rock",
      "Type 2": "Steel",
      "Total": "495",
      "HP": "60",
      "Attack": "52",
      "Defense": "168",
      "Sp": {
        " Atk": "47",
        " Def": "138"
      },
      "Speed": "30",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6167"
      },
      "#": "412",
      "Name": "Burmy",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "224",
      "HP": "40",
      "Attack": "29",
      "Defense": "45",
      "Sp": {
        " Atk": "29",
        " Def": "45"
      },
      "Speed": "36",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6168"
      },
      "#": "413",
      "Name": "WormadamPlant Cloak",
      "Type 1": "Bug",
      "Type 2": "Grass",
      "Total": "424",
      "HP": "60",
      "Attack": "59",
      "Defense": "85",
      "Sp": {
        " Atk": "79",
        " Def": "105"
      },
      "Speed": "36",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6169"
      },
      "#": "413",
      "Name": "WormadamSandy Cloak",
      "Type 1": "Bug",
      "Type 2": "Ground",
      "Total": "424",
      "HP": "60",
      "Attack": "79",
      "Defense": "105",
      "Sp": {
        " Atk": "59",
        " Def": "85"
      },
      "Speed": "36",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e616a"
      },
      "#": "413",
      "Name": "WormadamTrash Cloak",
      "Type 1": "Bug",
      "Type 2": "Steel",
      "Total": "424",
      "HP": "60",
      "Attack": "69",
      "Defense": "95",
      "Sp": {
        " Atk": "69",
        " Def": "95"
      },
      "Speed": "36",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e616b"
      },
      "#": "414",
      "Name": "Mothim",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "424",
      "HP": "70",
      "Attack": "94",
      "Defense": "50",
      "Sp": {
        " Atk": "94",
        " Def": "50"
      },
      "Speed": "66",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e616c"
      },
      "#": "415",
      "Name": "Combee",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "244",
      "HP": "30",
      "Attack": "30",
      "Defense": "42",
      "Sp": {
        " Atk": "30",
        " Def": "42"
      },
      "Speed": "70",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e616d"
      },
      "#": "416",
      "Name": "Vespiquen",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "474",
      "HP": "70",
      "Attack": "80",
      "Defense": "102",
      "Sp": {
        " Atk": "80",
        " Def": "102"
      },
      "Speed": "40",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e616e"
      },
      "#": "417",
      "Name": "Pachirisu",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "405",
      "HP": "60",
      "Attack": "45",
      "Defense": "70",
      "Sp": {
        " Atk": "45",
        " Def": "90"
      },
      "Speed": "95",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e616f"
      },
      "#": "418",
      "Name": "Buizel",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "330",
      "HP": "55",
      "Attack": "65",
      "Defense": "35",
      "Sp": {
        " Atk": "60",
        " Def": "30"
      },
      "Speed": "85",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6170"
      },
      "#": "419",
      "Name": "Floatzel",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "495",
      "HP": "85",
      "Attack": "105",
      "Defense": "55",
      "Sp": {
        " Atk": "85",
        " Def": "50"
      },
      "Speed": "115",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6171"
      },
      "#": "420",
      "Name": "Cherubi",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "275",
      "HP": "45",
      "Attack": "35",
      "Defense": "45",
      "Sp": {
        " Atk": "62",
        " Def": "53"
      },
      "Speed": "35",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6172"
      },
      "#": "421",
      "Name": "Cherrim",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "450",
      "HP": "70",
      "Attack": "60",
      "Defense": "70",
      "Sp": {
        " Atk": "87",
        " Def": "78"
      },
      "Speed": "85",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6173"
      },
      "#": "422",
      "Name": "Shellos",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "325",
      "HP": "76",
      "Attack": "48",
      "Defense": "48",
      "Sp": {
        " Atk": "57",
        " Def": "62"
      },
      "Speed": "34",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6174"
      },
      "#": "423",
      "Name": "Gastrodon",
      "Type 1": "Water",
      "Type 2": "Ground",
      "Total": "475",
      "HP": "111",
      "Attack": "83",
      "Defense": "68",
      "Sp": {
        " Atk": "92",
        " Def": "82"
      },
      "Speed": "39",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6175"
      },
      "#": "424",
      "Name": "Ambipom",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "482",
      "HP": "75",
      "Attack": "100",
      "Defense": "66",
      "Sp": {
        " Atk": "60",
        " Def": "66"
      },
      "Speed": "115",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6176"
      },
      "#": "425",
      "Name": "Drifloon",
      "Type 1": "Ghost",
      "Type 2": "Flying",
      "Total": "348",
      "HP": "90",
      "Attack": "50",
      "Defense": "34",
      "Sp": {
        " Atk": "60",
        " Def": "44"
      },
      "Speed": "70",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6177"
      },
      "#": "426",
      "Name": "Drifblim",
      "Type 1": "Ghost",
      "Type 2": "Flying",
      "Total": "498",
      "HP": "150",
      "Attack": "80",
      "Defense": "44",
      "Sp": {
        " Atk": "90",
        " Def": "54"
      },
      "Speed": "80",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6178"
      },
      "#": "427",
      "Name": "Buneary",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "350",
      "HP": "55",
      "Attack": "66",
      "Defense": "44",
      "Sp": {
        " Atk": "44",
        " Def": "56"
      },
      "Speed": "85",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6179"
      },
      "#": "428",
      "Name": "Lopunny",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "480",
      "HP": "65",
      "Attack": "76",
      "Defense": "84",
      "Sp": {
        " Atk": "54",
        " Def": "96"
      },
      "Speed": "105",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e617a"
      },
      "#": "428",
      "Name": "LopunnyMega Lopunny",
      "Type 1": "Normal",
      "Type 2": "Fighting",
      "Total": "580",
      "HP": "65",
      "Attack": "136",
      "Defense": "94",
      "Sp": {
        " Atk": "54",
        " Def": "96"
      },
      "Speed": "135",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e617b"
      },
      "#": "429",
      "Name": "Mismagius",
      "Type 1": "Ghost",
      "Type 2": "",
      "Total": "495",
      "HP": "60",
      "Attack": "60",
      "Defense": "60",
      "Sp": {
        " Atk": "105",
        " Def": "105"
      },
      "Speed": "105",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e617c"
      },
      "#": "430",
      "Name": "Honchkrow",
      "Type 1": "Dark",
      "Type 2": "Flying",
      "Total": "505",
      "HP": "100",
      "Attack": "125",
      "Defense": "52",
      "Sp": {
        " Atk": "105",
        " Def": "52"
      },
      "Speed": "71",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e617d"
      },
      "#": "431",
      "Name": "Glameow",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "310",
      "HP": "49",
      "Attack": "55",
      "Defense": "42",
      "Sp": {
        " Atk": "42",
        " Def": "37"
      },
      "Speed": "85",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e617e"
      },
      "#": "432",
      "Name": "Purugly",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "452",
      "HP": "71",
      "Attack": "82",
      "Defense": "64",
      "Sp": {
        " Atk": "64",
        " Def": "59"
      },
      "Speed": "112",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e617f"
      },
      "#": "433",
      "Name": "Chingling",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "285",
      "HP": "45",
      "Attack": "30",
      "Defense": "50",
      "Sp": {
        " Atk": "65",
        " Def": "50"
      },
      "Speed": "45",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6180"
      },
      "#": "434",
      "Name": "Stunky",
      "Type 1": "Poison",
      "Type 2": "Dark",
      "Total": "329",
      "HP": "63",
      "Attack": "63",
      "Defense": "47",
      "Sp": {
        " Atk": "41",
        " Def": "41"
      },
      "Speed": "74",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6181"
      },
      "#": "435",
      "Name": "Skuntank",
      "Type 1": "Poison",
      "Type 2": "Dark",
      "Total": "479",
      "HP": "103",
      "Attack": "93",
      "Defense": "67",
      "Sp": {
        " Atk": "71",
        " Def": "61"
      },
      "Speed": "84",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6182"
      },
      "#": "436",
      "Name": "Bronzor",
      "Type 1": "Steel",
      "Type 2": "Psychic",
      "Total": "300",
      "HP": "57",
      "Attack": "24",
      "Defense": "86",
      "Sp": {
        " Atk": "24",
        " Def": "86"
      },
      "Speed": "23",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6183"
      },
      "#": "437",
      "Name": "Bronzong",
      "Type 1": "Steel",
      "Type 2": "Psychic",
      "Total": "500",
      "HP": "67",
      "Attack": "89",
      "Defense": "116",
      "Sp": {
        " Atk": "79",
        " Def": "116"
      },
      "Speed": "33",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6184"
      },
      "#": "438",
      "Name": "Bonsly",
      "Type 1": "Rock",
      "Type 2": "",
      "Total": "290",
      "HP": "50",
      "Attack": "80",
      "Defense": "95",
      "Sp": {
        " Atk": "10",
        " Def": "45"
      },
      "Speed": "10",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6185"
      },
      "#": "439",
      "Name": "Mime Jr.",
      "Type 1": "Psychic",
      "Type 2": "Fairy",
      "Total": "310",
      "HP": "20",
      "Attack": "25",
      "Defense": "45",
      "Sp": {
        " Atk": "70",
        " Def": "90"
      },
      "Speed": "60",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6186"
      },
      "#": "440",
      "Name": "Happiny",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "220",
      "HP": "100",
      "Attack": "5",
      "Defense": "5",
      "Sp": {
        " Atk": "15",
        " Def": "65"
      },
      "Speed": "30",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6187"
      },
      "#": "441",
      "Name": "Chatot",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "411",
      "HP": "76",
      "Attack": "65",
      "Defense": "45",
      "Sp": {
        " Atk": "92",
        " Def": "42"
      },
      "Speed": "91",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6188"
      },
      "#": "442",
      "Name": "Spiritomb",
      "Type 1": "Ghost",
      "Type 2": "Dark",
      "Total": "485",
      "HP": "50",
      "Attack": "92",
      "Defense": "108",
      "Sp": {
        " Atk": "92",
        " Def": "108"
      },
      "Speed": "35",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6189"
      },
      "#": "443",
      "Name": "Gible",
      "Type 1": "Dragon",
      "Type 2": "Ground",
      "Total": "300",
      "HP": "58",
      "Attack": "70",
      "Defense": "45",
      "Sp": {
        " Atk": "40",
        " Def": "45"
      },
      "Speed": "42",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e618a"
      },
      "#": "444",
      "Name": "Gabite",
      "Type 1": "Dragon",
      "Type 2": "Ground",
      "Total": "410",
      "HP": "68",
      "Attack": "90",
      "Defense": "65",
      "Sp": {
        " Atk": "50",
        " Def": "55"
      },
      "Speed": "82",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e618b"
      },
      "#": "445",
      "Name": "Garchomp",
      "Type 1": "Dragon",
      "Type 2": "Ground",
      "Total": "600",
      "HP": "108",
      "Attack": "130",
      "Defense": "95",
      "Sp": {
        " Atk": "80",
        " Def": "85"
      },
      "Speed": "102",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e618c"
      },
      "#": "445",
      "Name": "GarchompMega Garchomp",
      "Type 1": "Dragon",
      "Type 2": "Ground",
      "Total": "700",
      "HP": "108",
      "Attack": "170",
      "Defense": "115",
      "Sp": {
        " Atk": "120",
        " Def": "95"
      },
      "Speed": "92",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e618d"
      },
      "#": "446",
      "Name": "Munchlax",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "390",
      "HP": "135",
      "Attack": "85",
      "Defense": "40",
      "Sp": {
        " Atk": "40",
        " Def": "85"
      },
      "Speed": "5",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e618e"
      },
      "#": "447",
      "Name": "Riolu",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "285",
      "HP": "40",
      "Attack": "70",
      "Defense": "40",
      "Sp": {
        " Atk": "35",
        " Def": "40"
      },
      "Speed": "60",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e618f"
      },
      "#": "448",
      "Name": "Lucario",
      "Type 1": "Fighting",
      "Type 2": "Steel",
      "Total": "525",
      "HP": "70",
      "Attack": "110",
      "Defense": "70",
      "Sp": {
        " Atk": "115",
        " Def": "70"
      },
      "Speed": "90",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6190"
      },
      "#": "448",
      "Name": "LucarioMega Lucario",
      "Type 1": "Fighting",
      "Type 2": "Steel",
      "Total": "625",
      "HP": "70",
      "Attack": "145",
      "Defense": "88",
      "Sp": {
        " Atk": "140",
        " Def": "70"
      },
      "Speed": "112",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6191"
      },
      "#": "449",
      "Name": "Hippopotas",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "330",
      "HP": "68",
      "Attack": "72",
      "Defense": "78",
      "Sp": {
        " Atk": "38",
        " Def": "42"
      },
      "Speed": "32",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6192"
      },
      "#": "450",
      "Name": "Hippowdon",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "525",
      "HP": "108",
      "Attack": "112",
      "Defense": "118",
      "Sp": {
        " Atk": "68",
        " Def": "72"
      },
      "Speed": "47",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6193"
      },
      "#": "451",
      "Name": "Skorupi",
      "Type 1": "Poison",
      "Type 2": "Bug",
      "Total": "330",
      "HP": "40",
      "Attack": "50",
      "Defense": "90",
      "Sp": {
        " Atk": "30",
        " Def": "55"
      },
      "Speed": "65",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6194"
      },
      "#": "452",
      "Name": "Drapion",
      "Type 1": "Poison",
      "Type 2": "Dark",
      "Total": "500",
      "HP": "70",
      "Attack": "90",
      "Defense": "110",
      "Sp": {
        " Atk": "60",
        " Def": "75"
      },
      "Speed": "95",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6195"
      },
      "#": "453",
      "Name": "Croagunk",
      "Type 1": "Poison",
      "Type 2": "Fighting",
      "Total": "300",
      "HP": "48",
      "Attack": "61",
      "Defense": "40",
      "Sp": {
        " Atk": "61",
        " Def": "40"
      },
      "Speed": "50",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6196"
      },
      "#": "454",
      "Name": "Toxicroak",
      "Type 1": "Poison",
      "Type 2": "Fighting",
      "Total": "490",
      "HP": "83",
      "Attack": "106",
      "Defense": "65",
      "Sp": {
        " Atk": "86",
        " Def": "65"
      },
      "Speed": "85",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6197"
      },
      "#": "455",
      "Name": "Carnivine",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "454",
      "HP": "74",
      "Attack": "100",
      "Defense": "72",
      "Sp": {
        " Atk": "90",
        " Def": "72"
      },
      "Speed": "46",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6198"
      },
      "#": "456",
      "Name": "Finneon",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "330",
      "HP": "49",
      "Attack": "49",
      "Defense": "56",
      "Sp": {
        " Atk": "49",
        " Def": "61"
      },
      "Speed": "66",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6199"
      },
      "#": "457",
      "Name": "Lumineon",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "460",
      "HP": "69",
      "Attack": "69",
      "Defense": "76",
      "Sp": {
        " Atk": "69",
        " Def": "86"
      },
      "Speed": "91",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e619a"
      },
      "#": "458",
      "Name": "Mantyke",
      "Type 1": "Water",
      "Type 2": "Flying",
      "Total": "345",
      "HP": "45",
      "Attack": "20",
      "Defense": "50",
      "Sp": {
        " Atk": "60",
        " Def": "120"
      },
      "Speed": "50",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e619b"
      },
      "#": "459",
      "Name": "Snover",
      "Type 1": "Grass",
      "Type 2": "Ice",
      "Total": "334",
      "HP": "60",
      "Attack": "62",
      "Defense": "50",
      "Sp": {
        " Atk": "62",
        " Def": "60"
      },
      "Speed": "40",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e619c"
      },
      "#": "460",
      "Name": "Abomasnow",
      "Type 1": "Grass",
      "Type 2": "Ice",
      "Total": "494",
      "HP": "90",
      "Attack": "92",
      "Defense": "75",
      "Sp": {
        " Atk": "92",
        " Def": "85"
      },
      "Speed": "60",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e619d"
      },
      "#": "460",
      "Name": "AbomasnowMega Abomasnow",
      "Type 1": "Grass",
      "Type 2": "Ice",
      "Total": "594",
      "HP": "90",
      "Attack": "132",
      "Defense": "105",
      "Sp": {
        " Atk": "132",
        " Def": "105"
      },
      "Speed": "30",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e619e"
      },
      "#": "461",
      "Name": "Weavile",
      "Type 1": "Dark",
      "Type 2": "Ice",
      "Total": "510",
      "HP": "70",
      "Attack": "120",
      "Defense": "65",
      "Sp": {
        " Atk": "45",
        " Def": "85"
      },
      "Speed": "125",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e619f"
      },
      "#": "462",
      "Name": "Magnezone",
      "Type 1": "Electric",
      "Type 2": "Steel",
      "Total": "535",
      "HP": "70",
      "Attack": "70",
      "Defense": "115",
      "Sp": {
        " Atk": "130",
        " Def": "90"
      },
      "Speed": "60",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61a0"
      },
      "#": "463",
      "Name": "Lickilicky",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "515",
      "HP": "110",
      "Attack": "85",
      "Defense": "95",
      "Sp": {
        " Atk": "80",
        " Def": "95"
      },
      "Speed": "50",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61a1"
      },
      "#": "464",
      "Name": "Rhyperior",
      "Type 1": "Ground",
      "Type 2": "Rock",
      "Total": "535",
      "HP": "115",
      "Attack": "140",
      "Defense": "130",
      "Sp": {
        " Atk": "55",
        " Def": "55"
      },
      "Speed": "40",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61a2"
      },
      "#": "465",
      "Name": "Tangrowth",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "535",
      "HP": "100",
      "Attack": "100",
      "Defense": "125",
      "Sp": {
        " Atk": "110",
        " Def": "50"
      },
      "Speed": "50",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61a3"
      },
      "#": "466",
      "Name": "Electivire",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "540",
      "HP": "75",
      "Attack": "123",
      "Defense": "67",
      "Sp": {
        " Atk": "95",
        " Def": "85"
      },
      "Speed": "95",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61a4"
      },
      "#": "467",
      "Name": "Magmortar",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "540",
      "HP": "75",
      "Attack": "95",
      "Defense": "67",
      "Sp": {
        " Atk": "125",
        " Def": "95"
      },
      "Speed": "83",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61a5"
      },
      "#": "468",
      "Name": "Togekiss",
      "Type 1": "Fairy",
      "Type 2": "Flying",
      "Total": "545",
      "HP": "85",
      "Attack": "50",
      "Defense": "95",
      "Sp": {
        " Atk": "120",
        " Def": "115"
      },
      "Speed": "80",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61a6"
      },
      "#": "469",
      "Name": "Yanmega",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "515",
      "HP": "86",
      "Attack": "76",
      "Defense": "86",
      "Sp": {
        " Atk": "116",
        " Def": "56"
      },
      "Speed": "95",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61a7"
      },
      "#": "470",
      "Name": "Leafeon",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "525",
      "HP": "65",
      "Attack": "110",
      "Defense": "130",
      "Sp": {
        " Atk": "60",
        " Def": "65"
      },
      "Speed": "95",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61a8"
      },
      "#": "471",
      "Name": "Glaceon",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "525",
      "HP": "65",
      "Attack": "60",
      "Defense": "110",
      "Sp": {
        " Atk": "130",
        " Def": "95"
      },
      "Speed": "65",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61a9"
      },
      "#": "472",
      "Name": "Gliscor",
      "Type 1": "Ground",
      "Type 2": "Flying",
      "Total": "510",
      "HP": "75",
      "Attack": "95",
      "Defense": "125",
      "Sp": {
        " Atk": "45",
        " Def": "75"
      },
      "Speed": "95",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61aa"
      },
      "#": "473",
      "Name": "Mamoswine",
      "Type 1": "Ice",
      "Type 2": "Ground",
      "Total": "530",
      "HP": "110",
      "Attack": "130",
      "Defense": "80",
      "Sp": {
        " Atk": "70",
        " Def": "60"
      },
      "Speed": "80",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ab"
      },
      "#": "474",
      "Name": "Porygon-Z",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "535",
      "HP": "85",
      "Attack": "80",
      "Defense": "70",
      "Sp": {
        " Atk": "135",
        " Def": "75"
      },
      "Speed": "90",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ac"
      },
      "#": "475",
      "Name": "Gallade",
      "Type 1": "Psychic",
      "Type 2": "Fighting",
      "Total": "518",
      "HP": "68",
      "Attack": "125",
      "Defense": "65",
      "Sp": {
        " Atk": "65",
        " Def": "115"
      },
      "Speed": "80",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ad"
      },
      "#": "475",
      "Name": "GalladeMega Gallade",
      "Type 1": "Psychic",
      "Type 2": "Fighting",
      "Total": "618",
      "HP": "68",
      "Attack": "165",
      "Defense": "95",
      "Sp": {
        " Atk": "65",
        " Def": "115"
      },
      "Speed": "110",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ae"
      },
      "#": "476",
      "Name": "Probopass",
      "Type 1": "Rock",
      "Type 2": "Steel",
      "Total": "525",
      "HP": "60",
      "Attack": "55",
      "Defense": "145",
      "Sp": {
        " Atk": "75",
        " Def": "150"
      },
      "Speed": "40",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61af"
      },
      "#": "477",
      "Name": "Dusknoir",
      "Type 1": "Ghost",
      "Type 2": "",
      "Total": "525",
      "HP": "45",
      "Attack": "100",
      "Defense": "135",
      "Sp": {
        " Atk": "65",
        " Def": "135"
      },
      "Speed": "45",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61b0"
      },
      "#": "478",
      "Name": "Froslass",
      "Type 1": "Ice",
      "Type 2": "Ghost",
      "Total": "480",
      "HP": "70",
      "Attack": "80",
      "Defense": "70",
      "Sp": {
        " Atk": "80",
        " Def": "70"
      },
      "Speed": "110",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61b1"
      },
      "#": "479",
      "Name": "Rotom",
      "Type 1": "Electric",
      "Type 2": "Ghost",
      "Total": "440",
      "HP": "50",
      "Attack": "50",
      "Defense": "77",
      "Sp": {
        " Atk": "95",
        " Def": "77"
      },
      "Speed": "91",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61b2"
      },
      "#": "479",
      "Name": "RotomHeat Rotom",
      "Type 1": "Electric",
      "Type 2": "Fire",
      "Total": "520",
      "HP": "50",
      "Attack": "65",
      "Defense": "107",
      "Sp": {
        " Atk": "105",
        " Def": "107"
      },
      "Speed": "86",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61b3"
      },
      "#": "479",
      "Name": "RotomWash Rotom",
      "Type 1": "Electric",
      "Type 2": "Water",
      "Total": "520",
      "HP": "50",
      "Attack": "65",
      "Defense": "107",
      "Sp": {
        " Atk": "105",
        " Def": "107"
      },
      "Speed": "86",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61b4"
      },
      "#": "479",
      "Name": "RotomFrost Rotom",
      "Type 1": "Electric",
      "Type 2": "Ice",
      "Total": "520",
      "HP": "50",
      "Attack": "65",
      "Defense": "107",
      "Sp": {
        " Atk": "105",
        " Def": "107"
      },
      "Speed": "86",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61b5"
      },
      "#": "479",
      "Name": "RotomFan Rotom",
      "Type 1": "Electric",
      "Type 2": "Flying",
      "Total": "520",
      "HP": "50",
      "Attack": "65",
      "Defense": "107",
      "Sp": {
        " Atk": "105",
        " Def": "107"
      },
      "Speed": "86",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61b6"
      },
      "#": "479",
      "Name": "RotomMow Rotom",
      "Type 1": "Electric",
      "Type 2": "Grass",
      "Total": "520",
      "HP": "50",
      "Attack": "65",
      "Defense": "107",
      "Sp": {
        " Atk": "105",
        " Def": "107"
      },
      "Speed": "86",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61b7"
      },
      "#": "480",
      "Name": "Uxie",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "580",
      "HP": "75",
      "Attack": "75",
      "Defense": "130",
      "Sp": {
        " Atk": "75",
        " Def": "130"
      },
      "Speed": "95",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61b8"
      },
      "#": "481",
      "Name": "Mesprit",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "580",
      "HP": "80",
      "Attack": "105",
      "Defense": "105",
      "Sp": {
        " Atk": "105",
        " Def": "105"
      },
      "Speed": "80",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61b9"
      },
      "#": "482",
      "Name": "Azelf",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "580",
      "HP": "75",
      "Attack": "125",
      "Defense": "70",
      "Sp": {
        " Atk": "125",
        " Def": "70"
      },
      "Speed": "115",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ba"
      },
      "#": "483",
      "Name": "Dialga",
      "Type 1": "Steel",
      "Type 2": "Dragon",
      "Total": "680",
      "HP": "100",
      "Attack": "120",
      "Defense": "120",
      "Sp": {
        " Atk": "150",
        " Def": "100"
      },
      "Speed": "90",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61bb"
      },
      "#": "484",
      "Name": "Palkia",
      "Type 1": "Water",
      "Type 2": "Dragon",
      "Total": "680",
      "HP": "90",
      "Attack": "120",
      "Defense": "100",
      "Sp": {
        " Atk": "150",
        " Def": "120"
      },
      "Speed": "100",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61bc"
      },
      "#": "485",
      "Name": "Heatran",
      "Type 1": "Fire",
      "Type 2": "Steel",
      "Total": "600",
      "HP": "91",
      "Attack": "90",
      "Defense": "106",
      "Sp": {
        " Atk": "130",
        " Def": "106"
      },
      "Speed": "77",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61bd"
      },
      "#": "486",
      "Name": "Regigigas",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "670",
      "HP": "110",
      "Attack": "160",
      "Defense": "110",
      "Sp": {
        " Atk": "80",
        " Def": "110"
      },
      "Speed": "100",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61be"
      },
      "#": "487",
      "Name": "GiratinaAltered Forme",
      "Type 1": "Ghost",
      "Type 2": "Dragon",
      "Total": "680",
      "HP": "150",
      "Attack": "100",
      "Defense": "120",
      "Sp": {
        " Atk": "100",
        " Def": "120"
      },
      "Speed": "90",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61bf"
      },
      "#": "487",
      "Name": "GiratinaOrigin Forme",
      "Type 1": "Ghost",
      "Type 2": "Dragon",
      "Total": "680",
      "HP": "150",
      "Attack": "120",
      "Defense": "100",
      "Sp": {
        " Atk": "120",
        " Def": "100"
      },
      "Speed": "90",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61c0"
      },
      "#": "488",
      "Name": "Cresselia",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "600",
      "HP": "120",
      "Attack": "70",
      "Defense": "120",
      "Sp": {
        " Atk": "75",
        " Def": "130"
      },
      "Speed": "85",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61c1"
      },
      "#": "489",
      "Name": "Phione",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "480",
      "HP": "80",
      "Attack": "80",
      "Defense": "80",
      "Sp": {
        " Atk": "80",
        " Def": "80"
      },
      "Speed": "80",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61c2"
      },
      "#": "490",
      "Name": "Manaphy",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "600",
      "HP": "100",
      "Attack": "100",
      "Defense": "100",
      "Sp": {
        " Atk": "100",
        " Def": "100"
      },
      "Speed": "100",
      "Generation": "4",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61c3"
      },
      "#": "491",
      "Name": "Darkrai",
      "Type 1": "Dark",
      "Type 2": "",
      "Total": "600",
      "HP": "70",
      "Attack": "90",
      "Defense": "90",
      "Sp": {
        " Atk": "135",
        " Def": "90"
      },
      "Speed": "125",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61c4"
      },
      "#": "492",
      "Name": "ShayminLand Forme",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "600",
      "HP": "100",
      "Attack": "100",
      "Defense": "100",
      "Sp": {
        " Atk": "100",
        " Def": "100"
      },
      "Speed": "100",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61c5"
      },
      "#": "492",
      "Name": "ShayminSky Forme",
      "Type 1": "Grass",
      "Type 2": "Flying",
      "Total": "600",
      "HP": "100",
      "Attack": "103",
      "Defense": "75",
      "Sp": {
        " Atk": "120",
        " Def": "75"
      },
      "Speed": "127",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61c6"
      },
      "#": "493",
      "Name": "Arceus",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "720",
      "HP": "120",
      "Attack": "120",
      "Defense": "120",
      "Sp": {
        " Atk": "120",
        " Def": "120"
      },
      "Speed": "120",
      "Generation": "4",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61c7"
      },
      "#": "494",
      "Name": "Victini",
      "Type 1": "Psychic",
      "Type 2": "Fire",
      "Total": "600",
      "HP": "100",
      "Attack": "100",
      "Defense": "100",
      "Sp": {
        " Atk": "100",
        " Def": "100"
      },
      "Speed": "100",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61c8"
      },
      "#": "495",
      "Name": "Snivy",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "308",
      "HP": "45",
      "Attack": "45",
      "Defense": "55",
      "Sp": {
        " Atk": "45",
        " Def": "55"
      },
      "Speed": "63",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61c9"
      },
      "#": "496",
      "Name": "Servine",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "413",
      "HP": "60",
      "Attack": "60",
      "Defense": "75",
      "Sp": {
        " Atk": "60",
        " Def": "75"
      },
      "Speed": "83",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ca"
      },
      "#": "497",
      "Name": "Serperior",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "528",
      "HP": "75",
      "Attack": "75",
      "Defense": "95",
      "Sp": {
        " Atk": "75",
        " Def": "95"
      },
      "Speed": "113",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61cb"
      },
      "#": "498",
      "Name": "Tepig",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "308",
      "HP": "65",
      "Attack": "63",
      "Defense": "45",
      "Sp": {
        " Atk": "45",
        " Def": "45"
      },
      "Speed": "45",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61cc"
      },
      "#": "499",
      "Name": "Pignite",
      "Type 1": "Fire",
      "Type 2": "Fighting",
      "Total": "418",
      "HP": "90",
      "Attack": "93",
      "Defense": "55",
      "Sp": {
        " Atk": "70",
        " Def": "55"
      },
      "Speed": "55",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61cd"
      },
      "#": "500",
      "Name": "Emboar",
      "Type 1": "Fire",
      "Type 2": "Fighting",
      "Total": "528",
      "HP": "110",
      "Attack": "123",
      "Defense": "65",
      "Sp": {
        " Atk": "100",
        " Def": "65"
      },
      "Speed": "65",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ce"
      },
      "#": "501",
      "Name": "Oshawott",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "308",
      "HP": "55",
      "Attack": "55",
      "Defense": "45",
      "Sp": {
        " Atk": "63",
        " Def": "45"
      },
      "Speed": "45",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61cf"
      },
      "#": "502",
      "Name": "Dewott",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "413",
      "HP": "75",
      "Attack": "75",
      "Defense": "60",
      "Sp": {
        " Atk": "83",
        " Def": "60"
      },
      "Speed": "60",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61d0"
      },
      "#": "503",
      "Name": "Samurott",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "528",
      "HP": "95",
      "Attack": "100",
      "Defense": "85",
      "Sp": {
        " Atk": "108",
        " Def": "70"
      },
      "Speed": "70",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61d1"
      },
      "#": "504",
      "Name": "Patrat",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "255",
      "HP": "45",
      "Attack": "55",
      "Defense": "39",
      "Sp": {
        " Atk": "35",
        " Def": "39"
      },
      "Speed": "42",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61d2"
      },
      "#": "505",
      "Name": "Watchog",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "420",
      "HP": "60",
      "Attack": "85",
      "Defense": "69",
      "Sp": {
        " Atk": "60",
        " Def": "69"
      },
      "Speed": "77",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61d3"
      },
      "#": "506",
      "Name": "Lillipup",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "275",
      "HP": "45",
      "Attack": "60",
      "Defense": "45",
      "Sp": {
        " Atk": "25",
        " Def": "45"
      },
      "Speed": "55",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61d4"
      },
      "#": "507",
      "Name": "Herdier",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "370",
      "HP": "65",
      "Attack": "80",
      "Defense": "65",
      "Sp": {
        " Atk": "35",
        " Def": "65"
      },
      "Speed": "60",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61d5"
      },
      "#": "508",
      "Name": "Stoutland",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "500",
      "HP": "85",
      "Attack": "110",
      "Defense": "90",
      "Sp": {
        " Atk": "45",
        " Def": "90"
      },
      "Speed": "80",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61d6"
      },
      "#": "509",
      "Name": "Purrloin",
      "Type 1": "Dark",
      "Type 2": "",
      "Total": "281",
      "HP": "41",
      "Attack": "50",
      "Defense": "37",
      "Sp": {
        " Atk": "50",
        " Def": "37"
      },
      "Speed": "66",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61d7"
      },
      "#": "510",
      "Name": "Liepard",
      "Type 1": "Dark",
      "Type 2": "",
      "Total": "446",
      "HP": "64",
      "Attack": "88",
      "Defense": "50",
      "Sp": {
        " Atk": "88",
        " Def": "50"
      },
      "Speed": "106",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61d8"
      },
      "#": "511",
      "Name": "Pansage",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "316",
      "HP": "50",
      "Attack": "53",
      "Defense": "48",
      "Sp": {
        " Atk": "53",
        " Def": "48"
      },
      "Speed": "64",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61d9"
      },
      "#": "512",
      "Name": "Simisage",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "498",
      "HP": "75",
      "Attack": "98",
      "Defense": "63",
      "Sp": {
        " Atk": "98",
        " Def": "63"
      },
      "Speed": "101",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61da"
      },
      "#": "513",
      "Name": "Pansear",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "316",
      "HP": "50",
      "Attack": "53",
      "Defense": "48",
      "Sp": {
        " Atk": "53",
        " Def": "48"
      },
      "Speed": "64",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61db"
      },
      "#": "514",
      "Name": "Simisear",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "498",
      "HP": "75",
      "Attack": "98",
      "Defense": "63",
      "Sp": {
        " Atk": "98",
        " Def": "63"
      },
      "Speed": "101",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61dc"
      },
      "#": "515",
      "Name": "Panpour",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "316",
      "HP": "50",
      "Attack": "53",
      "Defense": "48",
      "Sp": {
        " Atk": "53",
        " Def": "48"
      },
      "Speed": "64",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61dd"
      },
      "#": "516",
      "Name": "Simipour",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "498",
      "HP": "75",
      "Attack": "98",
      "Defense": "63",
      "Sp": {
        " Atk": "98",
        " Def": "63"
      },
      "Speed": "101",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61de"
      },
      "#": "517",
      "Name": "Munna",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "292",
      "HP": "76",
      "Attack": "25",
      "Defense": "45",
      "Sp": {
        " Atk": "67",
        " Def": "55"
      },
      "Speed": "24",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61df"
      },
      "#": "518",
      "Name": "Musharna",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "487",
      "HP": "116",
      "Attack": "55",
      "Defense": "85",
      "Sp": {
        " Atk": "107",
        " Def": "95"
      },
      "Speed": "29",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61e0"
      },
      "#": "519",
      "Name": "Pidove",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "264",
      "HP": "50",
      "Attack": "55",
      "Defense": "50",
      "Sp": {
        " Atk": "36",
        " Def": "30"
      },
      "Speed": "43",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61e1"
      },
      "#": "520",
      "Name": "Tranquill",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "358",
      "HP": "62",
      "Attack": "77",
      "Defense": "62",
      "Sp": {
        " Atk": "50",
        " Def": "42"
      },
      "Speed": "65",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61e2"
      },
      "#": "521",
      "Name": "Unfezant",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "488",
      "HP": "80",
      "Attack": "115",
      "Defense": "80",
      "Sp": {
        " Atk": "65",
        " Def": "55"
      },
      "Speed": "93",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61e3"
      },
      "#": "522",
      "Name": "Blitzle",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "295",
      "HP": "45",
      "Attack": "60",
      "Defense": "32",
      "Sp": {
        " Atk": "50",
        " Def": "32"
      },
      "Speed": "76",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61e4"
      },
      "#": "523",
      "Name": "Zebstrika",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "497",
      "HP": "75",
      "Attack": "100",
      "Defense": "63",
      "Sp": {
        " Atk": "80",
        " Def": "63"
      },
      "Speed": "116",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61e5"
      },
      "#": "524",
      "Name": "Roggenrola",
      "Type 1": "Rock",
      "Type 2": "",
      "Total": "280",
      "HP": "55",
      "Attack": "75",
      "Defense": "85",
      "Sp": {
        " Atk": "25",
        " Def": "25"
      },
      "Speed": "15",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61e6"
      },
      "#": "525",
      "Name": "Boldore",
      "Type 1": "Rock",
      "Type 2": "",
      "Total": "390",
      "HP": "70",
      "Attack": "105",
      "Defense": "105",
      "Sp": {
        " Atk": "50",
        " Def": "40"
      },
      "Speed": "20",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61e7"
      },
      "#": "526",
      "Name": "Gigalith",
      "Type 1": "Rock",
      "Type 2": "",
      "Total": "515",
      "HP": "85",
      "Attack": "135",
      "Defense": "130",
      "Sp": {
        " Atk": "60",
        " Def": "80"
      },
      "Speed": "25",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61e8"
      },
      "#": "527",
      "Name": "Woobat",
      "Type 1": "Psychic",
      "Type 2": "Flying",
      "Total": "313",
      "HP": "55",
      "Attack": "45",
      "Defense": "43",
      "Sp": {
        " Atk": "55",
        " Def": "43"
      },
      "Speed": "72",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61e9"
      },
      "#": "528",
      "Name": "Swoobat",
      "Type 1": "Psychic",
      "Type 2": "Flying",
      "Total": "425",
      "HP": "67",
      "Attack": "57",
      "Defense": "55",
      "Sp": {
        " Atk": "77",
        " Def": "55"
      },
      "Speed": "114",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ea"
      },
      "#": "529",
      "Name": "Drilbur",
      "Type 1": "Ground",
      "Type 2": "",
      "Total": "328",
      "HP": "60",
      "Attack": "85",
      "Defense": "40",
      "Sp": {
        " Atk": "30",
        " Def": "45"
      },
      "Speed": "68",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61eb"
      },
      "#": "530",
      "Name": "Excadrill",
      "Type 1": "Ground",
      "Type 2": "Steel",
      "Total": "508",
      "HP": "110",
      "Attack": "135",
      "Defense": "60",
      "Sp": {
        " Atk": "50",
        " Def": "65"
      },
      "Speed": "88",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ec"
      },
      "#": "531",
      "Name": "Audino",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "445",
      "HP": "103",
      "Attack": "60",
      "Defense": "86",
      "Sp": {
        " Atk": "60",
        " Def": "86"
      },
      "Speed": "50",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ed"
      },
      "#": "531",
      "Name": "AudinoMega Audino",
      "Type 1": "Normal",
      "Type 2": "Fairy",
      "Total": "545",
      "HP": "103",
      "Attack": "60",
      "Defense": "126",
      "Sp": {
        " Atk": "80",
        " Def": "126"
      },
      "Speed": "50",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ee"
      },
      "#": "532",
      "Name": "Timburr",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "305",
      "HP": "75",
      "Attack": "80",
      "Defense": "55",
      "Sp": {
        " Atk": "25",
        " Def": "35"
      },
      "Speed": "35",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ef"
      },
      "#": "533",
      "Name": "Gurdurr",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "405",
      "HP": "85",
      "Attack": "105",
      "Defense": "85",
      "Sp": {
        " Atk": "40",
        " Def": "50"
      },
      "Speed": "40",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61f0"
      },
      "#": "534",
      "Name": "Conkeldurr",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "505",
      "HP": "105",
      "Attack": "140",
      "Defense": "95",
      "Sp": {
        " Atk": "55",
        " Def": "65"
      },
      "Speed": "45",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61f1"
      },
      "#": "535",
      "Name": "Tympole",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "294",
      "HP": "50",
      "Attack": "50",
      "Defense": "40",
      "Sp": {
        " Atk": "50",
        " Def": "40"
      },
      "Speed": "64",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61f2"
      },
      "#": "536",
      "Name": "Palpitoad",
      "Type 1": "Water",
      "Type 2": "Ground",
      "Total": "384",
      "HP": "75",
      "Attack": "65",
      "Defense": "55",
      "Sp": {
        " Atk": "65",
        " Def": "55"
      },
      "Speed": "69",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61f3"
      },
      "#": "537",
      "Name": "Seismitoad",
      "Type 1": "Water",
      "Type 2": "Ground",
      "Total": "509",
      "HP": "105",
      "Attack": "95",
      "Defense": "75",
      "Sp": {
        " Atk": "85",
        " Def": "75"
      },
      "Speed": "74",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61f4"
      },
      "#": "538",
      "Name": "Throh",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "465",
      "HP": "120",
      "Attack": "100",
      "Defense": "85",
      "Sp": {
        " Atk": "30",
        " Def": "85"
      },
      "Speed": "45",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61f5"
      },
      "#": "539",
      "Name": "Sawk",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "465",
      "HP": "75",
      "Attack": "125",
      "Defense": "75",
      "Sp": {
        " Atk": "30",
        " Def": "75"
      },
      "Speed": "85",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61f6"
      },
      "#": "540",
      "Name": "Sewaddle",
      "Type 1": "Bug",
      "Type 2": "Grass",
      "Total": "310",
      "HP": "45",
      "Attack": "53",
      "Defense": "70",
      "Sp": {
        " Atk": "40",
        " Def": "60"
      },
      "Speed": "42",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61f7"
      },
      "#": "541",
      "Name": "Swadloon",
      "Type 1": "Bug",
      "Type 2": "Grass",
      "Total": "380",
      "HP": "55",
      "Attack": "63",
      "Defense": "90",
      "Sp": {
        " Atk": "50",
        " Def": "80"
      },
      "Speed": "42",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61f8"
      },
      "#": "542",
      "Name": "Leavanny",
      "Type 1": "Bug",
      "Type 2": "Grass",
      "Total": "500",
      "HP": "75",
      "Attack": "103",
      "Defense": "80",
      "Sp": {
        " Atk": "70",
        " Def": "80"
      },
      "Speed": "92",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61f9"
      },
      "#": "543",
      "Name": "Venipede",
      "Type 1": "Bug",
      "Type 2": "Poison",
      "Total": "260",
      "HP": "30",
      "Attack": "45",
      "Defense": "59",
      "Sp": {
        " Atk": "30",
        " Def": "39"
      },
      "Speed": "57",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61fa"
      },
      "#": "544",
      "Name": "Whirlipede",
      "Type 1": "Bug",
      "Type 2": "Poison",
      "Total": "360",
      "HP": "40",
      "Attack": "55",
      "Defense": "99",
      "Sp": {
        " Atk": "40",
        " Def": "79"
      },
      "Speed": "47",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61fb"
      },
      "#": "545",
      "Name": "Scolipede",
      "Type 1": "Bug",
      "Type 2": "Poison",
      "Total": "485",
      "HP": "60",
      "Attack": "100",
      "Defense": "89",
      "Sp": {
        " Atk": "55",
        " Def": "69"
      },
      "Speed": "112",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61fc"
      },
      "#": "546",
      "Name": "Cottonee",
      "Type 1": "Grass",
      "Type 2": "Fairy",
      "Total": "280",
      "HP": "40",
      "Attack": "27",
      "Defense": "60",
      "Sp": {
        " Atk": "37",
        " Def": "50"
      },
      "Speed": "66",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61fd"
      },
      "#": "547",
      "Name": "Whimsicott",
      "Type 1": "Grass",
      "Type 2": "Fairy",
      "Total": "480",
      "HP": "60",
      "Attack": "67",
      "Defense": "85",
      "Sp": {
        " Atk": "77",
        " Def": "75"
      },
      "Speed": "116",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61fe"
      },
      "#": "548",
      "Name": "Petilil",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "280",
      "HP": "45",
      "Attack": "35",
      "Defense": "50",
      "Sp": {
        " Atk": "70",
        " Def": "50"
      },
      "Speed": "30",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e61ff"
      },
      "#": "549",
      "Name": "Lilligant",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "480",
      "HP": "70",
      "Attack": "60",
      "Defense": "75",
      "Sp": {
        " Atk": "110",
        " Def": "75"
      },
      "Speed": "90",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6200"
      },
      "#": "550",
      "Name": "Basculin",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "460",
      "HP": "70",
      "Attack": "92",
      "Defense": "65",
      "Sp": {
        " Atk": "80",
        " Def": "55"
      },
      "Speed": "98",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6201"
      },
      "#": "551",
      "Name": "Sandile",
      "Type 1": "Ground",
      "Type 2": "Dark",
      "Total": "292",
      "HP": "50",
      "Attack": "72",
      "Defense": "35",
      "Sp": {
        " Atk": "35",
        " Def": "35"
      },
      "Speed": "65",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6202"
      },
      "#": "552",
      "Name": "Krokorok",
      "Type 1": "Ground",
      "Type 2": "Dark",
      "Total": "351",
      "HP": "60",
      "Attack": "82",
      "Defense": "45",
      "Sp": {
        " Atk": "45",
        " Def": "45"
      },
      "Speed": "74",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6203"
      },
      "#": "553",
      "Name": "Krookodile",
      "Type 1": "Ground",
      "Type 2": "Dark",
      "Total": "519",
      "HP": "95",
      "Attack": "117",
      "Defense": "80",
      "Sp": {
        " Atk": "65",
        " Def": "70"
      },
      "Speed": "92",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6204"
      },
      "#": "554",
      "Name": "Darumaka",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "315",
      "HP": "70",
      "Attack": "90",
      "Defense": "45",
      "Sp": {
        " Atk": "15",
        " Def": "45"
      },
      "Speed": "50",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6205"
      },
      "#": "555",
      "Name": "DarmanitanStandard Mode",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "480",
      "HP": "105",
      "Attack": "140",
      "Defense": "55",
      "Sp": {
        " Atk": "30",
        " Def": "55"
      },
      "Speed": "95",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6206"
      },
      "#": "555",
      "Name": "DarmanitanZen Mode",
      "Type 1": "Fire",
      "Type 2": "Psychic",
      "Total": "540",
      "HP": "105",
      "Attack": "30",
      "Defense": "105",
      "Sp": {
        " Atk": "140",
        " Def": "105"
      },
      "Speed": "55",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6207"
      },
      "#": "556",
      "Name": "Maractus",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "461",
      "HP": "75",
      "Attack": "86",
      "Defense": "67",
      "Sp": {
        " Atk": "106",
        " Def": "67"
      },
      "Speed": "60",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6208"
      },
      "#": "557",
      "Name": "Dwebble",
      "Type 1": "Bug",
      "Type 2": "Rock",
      "Total": "325",
      "HP": "50",
      "Attack": "65",
      "Defense": "85",
      "Sp": {
        " Atk": "35",
        " Def": "35"
      },
      "Speed": "55",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6209"
      },
      "#": "558",
      "Name": "Crustle",
      "Type 1": "Bug",
      "Type 2": "Rock",
      "Total": "475",
      "HP": "70",
      "Attack": "95",
      "Defense": "125",
      "Sp": {
        " Atk": "65",
        " Def": "75"
      },
      "Speed": "45",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e620a"
      },
      "#": "559",
      "Name": "Scraggy",
      "Type 1": "Dark",
      "Type 2": "Fighting",
      "Total": "348",
      "HP": "50",
      "Attack": "75",
      "Defense": "70",
      "Sp": {
        " Atk": "35",
        " Def": "70"
      },
      "Speed": "48",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e620b"
      },
      "#": "560",
      "Name": "Scrafty",
      "Type 1": "Dark",
      "Type 2": "Fighting",
      "Total": "488",
      "HP": "65",
      "Attack": "90",
      "Defense": "115",
      "Sp": {
        " Atk": "45",
        " Def": "115"
      },
      "Speed": "58",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e620c"
      },
      "#": "561",
      "Name": "Sigilyph",
      "Type 1": "Psychic",
      "Type 2": "Flying",
      "Total": "490",
      "HP": "72",
      "Attack": "58",
      "Defense": "80",
      "Sp": {
        " Atk": "103",
        " Def": "80"
      },
      "Speed": "97",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e620d"
      },
      "#": "562",
      "Name": "Yamask",
      "Type 1": "Ghost",
      "Type 2": "",
      "Total": "303",
      "HP": "38",
      "Attack": "30",
      "Defense": "85",
      "Sp": {
        " Atk": "55",
        " Def": "65"
      },
      "Speed": "30",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e620e"
      },
      "#": "563",
      "Name": "Cofagrigus",
      "Type 1": "Ghost",
      "Type 2": "",
      "Total": "483",
      "HP": "58",
      "Attack": "50",
      "Defense": "145",
      "Sp": {
        " Atk": "95",
        " Def": "105"
      },
      "Speed": "30",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e620f"
      },
      "#": "564",
      "Name": "Tirtouga",
      "Type 1": "Water",
      "Type 2": "Rock",
      "Total": "355",
      "HP": "54",
      "Attack": "78",
      "Defense": "103",
      "Sp": {
        " Atk": "53",
        " Def": "45"
      },
      "Speed": "22",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6210"
      },
      "#": "565",
      "Name": "Carracosta",
      "Type 1": "Water",
      "Type 2": "Rock",
      "Total": "495",
      "HP": "74",
      "Attack": "108",
      "Defense": "133",
      "Sp": {
        " Atk": "83",
        " Def": "65"
      },
      "Speed": "32",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6211"
      },
      "#": "566",
      "Name": "Archen",
      "Type 1": "Rock",
      "Type 2": "Flying",
      "Total": "401",
      "HP": "55",
      "Attack": "112",
      "Defense": "45",
      "Sp": {
        " Atk": "74",
        " Def": "45"
      },
      "Speed": "70",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6212"
      },
      "#": "567",
      "Name": "Archeops",
      "Type 1": "Rock",
      "Type 2": "Flying",
      "Total": "567",
      "HP": "75",
      "Attack": "140",
      "Defense": "65",
      "Sp": {
        " Atk": "112",
        " Def": "65"
      },
      "Speed": "110",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6213"
      },
      "#": "568",
      "Name": "Trubbish",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "329",
      "HP": "50",
      "Attack": "50",
      "Defense": "62",
      "Sp": {
        " Atk": "40",
        " Def": "62"
      },
      "Speed": "65",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6214"
      },
      "#": "569",
      "Name": "Garbodor",
      "Type 1": "Poison",
      "Type 2": "",
      "Total": "474",
      "HP": "80",
      "Attack": "95",
      "Defense": "82",
      "Sp": {
        " Atk": "60",
        " Def": "82"
      },
      "Speed": "75",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6215"
      },
      "#": "570",
      "Name": "Zorua",
      "Type 1": "Dark",
      "Type 2": "",
      "Total": "330",
      "HP": "40",
      "Attack": "65",
      "Defense": "40",
      "Sp": {
        " Atk": "80",
        " Def": "40"
      },
      "Speed": "65",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6216"
      },
      "#": "571",
      "Name": "Zoroark",
      "Type 1": "Dark",
      "Type 2": "",
      "Total": "510",
      "HP": "60",
      "Attack": "105",
      "Defense": "60",
      "Sp": {
        " Atk": "120",
        " Def": "60"
      },
      "Speed": "105",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6217"
      },
      "#": "572",
      "Name": "Minccino",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "300",
      "HP": "55",
      "Attack": "50",
      "Defense": "40",
      "Sp": {
        " Atk": "40",
        " Def": "40"
      },
      "Speed": "75",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6218"
      },
      "#": "573",
      "Name": "Cinccino",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "470",
      "HP": "75",
      "Attack": "95",
      "Defense": "60",
      "Sp": {
        " Atk": "65",
        " Def": "60"
      },
      "Speed": "115",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6219"
      },
      "#": "574",
      "Name": "Gothita",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "290",
      "HP": "45",
      "Attack": "30",
      "Defense": "50",
      "Sp": {
        " Atk": "55",
        " Def": "65"
      },
      "Speed": "45",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e621a"
      },
      "#": "575",
      "Name": "Gothorita",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "390",
      "HP": "60",
      "Attack": "45",
      "Defense": "70",
      "Sp": {
        " Atk": "75",
        " Def": "85"
      },
      "Speed": "55",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e621b"
      },
      "#": "576",
      "Name": "Gothitelle",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "490",
      "HP": "70",
      "Attack": "55",
      "Defense": "95",
      "Sp": {
        " Atk": "95",
        " Def": "110"
      },
      "Speed": "65",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e621c"
      },
      "#": "577",
      "Name": "Solosis",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "290",
      "HP": "45",
      "Attack": "30",
      "Defense": "40",
      "Sp": {
        " Atk": "105",
        " Def": "50"
      },
      "Speed": "20",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e621d"
      },
      "#": "578",
      "Name": "Duosion",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "370",
      "HP": "65",
      "Attack": "40",
      "Defense": "50",
      "Sp": {
        " Atk": "125",
        " Def": "60"
      },
      "Speed": "30",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e621e"
      },
      "#": "579",
      "Name": "Reuniclus",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "490",
      "HP": "110",
      "Attack": "65",
      "Defense": "75",
      "Sp": {
        " Atk": "125",
        " Def": "85"
      },
      "Speed": "30",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e621f"
      },
      "#": "580",
      "Name": "Ducklett",
      "Type 1": "Water",
      "Type 2": "Flying",
      "Total": "305",
      "HP": "62",
      "Attack": "44",
      "Defense": "50",
      "Sp": {
        " Atk": "44",
        " Def": "50"
      },
      "Speed": "55",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6220"
      },
      "#": "581",
      "Name": "Swanna",
      "Type 1": "Water",
      "Type 2": "Flying",
      "Total": "473",
      "HP": "75",
      "Attack": "87",
      "Defense": "63",
      "Sp": {
        " Atk": "87",
        " Def": "63"
      },
      "Speed": "98",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6221"
      },
      "#": "582",
      "Name": "Vanillite",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "305",
      "HP": "36",
      "Attack": "50",
      "Defense": "50",
      "Sp": {
        " Atk": "65",
        " Def": "60"
      },
      "Speed": "44",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6222"
      },
      "#": "583",
      "Name": "Vanillish",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "395",
      "HP": "51",
      "Attack": "65",
      "Defense": "65",
      "Sp": {
        " Atk": "80",
        " Def": "75"
      },
      "Speed": "59",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6223"
      },
      "#": "584",
      "Name": "Vanilluxe",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "535",
      "HP": "71",
      "Attack": "95",
      "Defense": "85",
      "Sp": {
        " Atk": "110",
        " Def": "95"
      },
      "Speed": "79",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6224"
      },
      "#": "585",
      "Name": "Deerling",
      "Type 1": "Normal",
      "Type 2": "Grass",
      "Total": "335",
      "HP": "60",
      "Attack": "60",
      "Defense": "50",
      "Sp": {
        " Atk": "40",
        " Def": "50"
      },
      "Speed": "75",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6225"
      },
      "#": "586",
      "Name": "Sawsbuck",
      "Type 1": "Normal",
      "Type 2": "Grass",
      "Total": "475",
      "HP": "80",
      "Attack": "100",
      "Defense": "70",
      "Sp": {
        " Atk": "60",
        " Def": "70"
      },
      "Speed": "95",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6226"
      },
      "#": "587",
      "Name": "Emolga",
      "Type 1": "Electric",
      "Type 2": "Flying",
      "Total": "428",
      "HP": "55",
      "Attack": "75",
      "Defense": "60",
      "Sp": {
        " Atk": "75",
        " Def": "60"
      },
      "Speed": "103",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6227"
      },
      "#": "588",
      "Name": "Karrablast",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "315",
      "HP": "50",
      "Attack": "75",
      "Defense": "45",
      "Sp": {
        " Atk": "40",
        " Def": "45"
      },
      "Speed": "60",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6228"
      },
      "#": "589",
      "Name": "Escavalier",
      "Type 1": "Bug",
      "Type 2": "Steel",
      "Total": "495",
      "HP": "70",
      "Attack": "135",
      "Defense": "105",
      "Sp": {
        " Atk": "60",
        " Def": "105"
      },
      "Speed": "20",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6229"
      },
      "#": "590",
      "Name": "Foongus",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "294",
      "HP": "69",
      "Attack": "55",
      "Defense": "45",
      "Sp": {
        " Atk": "55",
        " Def": "55"
      },
      "Speed": "15",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e622a"
      },
      "#": "591",
      "Name": "Amoonguss",
      "Type 1": "Grass",
      "Type 2": "Poison",
      "Total": "464",
      "HP": "114",
      "Attack": "85",
      "Defense": "70",
      "Sp": {
        " Atk": "85",
        " Def": "80"
      },
      "Speed": "30",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e622b"
      },
      "#": "592",
      "Name": "Frillish",
      "Type 1": "Water",
      "Type 2": "Ghost",
      "Total": "335",
      "HP": "55",
      "Attack": "40",
      "Defense": "50",
      "Sp": {
        " Atk": "65",
        " Def": "85"
      },
      "Speed": "40",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e622c"
      },
      "#": "593",
      "Name": "Jellicent",
      "Type 1": "Water",
      "Type 2": "Ghost",
      "Total": "480",
      "HP": "100",
      "Attack": "60",
      "Defense": "70",
      "Sp": {
        " Atk": "85",
        " Def": "105"
      },
      "Speed": "60",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e622d"
      },
      "#": "594",
      "Name": "Alomomola",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "470",
      "HP": "165",
      "Attack": "75",
      "Defense": "80",
      "Sp": {
        " Atk": "40",
        " Def": "45"
      },
      "Speed": "65",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e622e"
      },
      "#": "595",
      "Name": "Joltik",
      "Type 1": "Bug",
      "Type 2": "Electric",
      "Total": "319",
      "HP": "50",
      "Attack": "47",
      "Defense": "50",
      "Sp": {
        " Atk": "57",
        " Def": "50"
      },
      "Speed": "65",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e622f"
      },
      "#": "596",
      "Name": "Galvantula",
      "Type 1": "Bug",
      "Type 2": "Electric",
      "Total": "472",
      "HP": "70",
      "Attack": "77",
      "Defense": "60",
      "Sp": {
        " Atk": "97",
        " Def": "60"
      },
      "Speed": "108",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6230"
      },
      "#": "597",
      "Name": "Ferroseed",
      "Type 1": "Grass",
      "Type 2": "Steel",
      "Total": "305",
      "HP": "44",
      "Attack": "50",
      "Defense": "91",
      "Sp": {
        " Atk": "24",
        " Def": "86"
      },
      "Speed": "10",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6231"
      },
      "#": "598",
      "Name": "Ferrothorn",
      "Type 1": "Grass",
      "Type 2": "Steel",
      "Total": "489",
      "HP": "74",
      "Attack": "94",
      "Defense": "131",
      "Sp": {
        " Atk": "54",
        " Def": "116"
      },
      "Speed": "20",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6232"
      },
      "#": "599",
      "Name": "Klink",
      "Type 1": "Steel",
      "Type 2": "",
      "Total": "300",
      "HP": "40",
      "Attack": "55",
      "Defense": "70",
      "Sp": {
        " Atk": "45",
        " Def": "60"
      },
      "Speed": "30",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6233"
      },
      "#": "600",
      "Name": "Klang",
      "Type 1": "Steel",
      "Type 2": "",
      "Total": "440",
      "HP": "60",
      "Attack": "80",
      "Defense": "95",
      "Sp": {
        " Atk": "70",
        " Def": "85"
      },
      "Speed": "50",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6234"
      },
      "#": "601",
      "Name": "Klinklang",
      "Type 1": "Steel",
      "Type 2": "",
      "Total": "520",
      "HP": "60",
      "Attack": "100",
      "Defense": "115",
      "Sp": {
        " Atk": "70",
        " Def": "85"
      },
      "Speed": "90",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6235"
      },
      "#": "602",
      "Name": "Tynamo",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "275",
      "HP": "35",
      "Attack": "55",
      "Defense": "40",
      "Sp": {
        " Atk": "45",
        " Def": "40"
      },
      "Speed": "60",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6236"
      },
      "#": "603",
      "Name": "Eelektrik",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "405",
      "HP": "65",
      "Attack": "85",
      "Defense": "70",
      "Sp": {
        " Atk": "75",
        " Def": "70"
      },
      "Speed": "40",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6237"
      },
      "#": "604",
      "Name": "Eelektross",
      "Type 1": "Electric",
      "Type 2": "",
      "Total": "515",
      "HP": "85",
      "Attack": "115",
      "Defense": "80",
      "Sp": {
        " Atk": "105",
        " Def": "80"
      },
      "Speed": "50",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6238"
      },
      "#": "605",
      "Name": "Elgyem",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "335",
      "HP": "55",
      "Attack": "55",
      "Defense": "55",
      "Sp": {
        " Atk": "85",
        " Def": "55"
      },
      "Speed": "30",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6239"
      },
      "#": "606",
      "Name": "Beheeyem",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "485",
      "HP": "75",
      "Attack": "75",
      "Defense": "75",
      "Sp": {
        " Atk": "125",
        " Def": "95"
      },
      "Speed": "40",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e623a"
      },
      "#": "607",
      "Name": "Litwick",
      "Type 1": "Ghost",
      "Type 2": "Fire",
      "Total": "275",
      "HP": "50",
      "Attack": "30",
      "Defense": "55",
      "Sp": {
        " Atk": "65",
        " Def": "55"
      },
      "Speed": "20",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e623b"
      },
      "#": "608",
      "Name": "Lampent",
      "Type 1": "Ghost",
      "Type 2": "Fire",
      "Total": "370",
      "HP": "60",
      "Attack": "40",
      "Defense": "60",
      "Sp": {
        " Atk": "95",
        " Def": "60"
      },
      "Speed": "55",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e623c"
      },
      "#": "609",
      "Name": "Chandelure",
      "Type 1": "Ghost",
      "Type 2": "Fire",
      "Total": "520",
      "HP": "60",
      "Attack": "55",
      "Defense": "90",
      "Sp": {
        " Atk": "145",
        " Def": "90"
      },
      "Speed": "80",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e623d"
      },
      "#": "610",
      "Name": "Axew",
      "Type 1": "Dragon",
      "Type 2": "",
      "Total": "320",
      "HP": "46",
      "Attack": "87",
      "Defense": "60",
      "Sp": {
        " Atk": "30",
        " Def": "40"
      },
      "Speed": "57",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e623e"
      },
      "#": "611",
      "Name": "Fraxure",
      "Type 1": "Dragon",
      "Type 2": "",
      "Total": "410",
      "HP": "66",
      "Attack": "117",
      "Defense": "70",
      "Sp": {
        " Atk": "40",
        " Def": "50"
      },
      "Speed": "67",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e623f"
      },
      "#": "612",
      "Name": "Haxorus",
      "Type 1": "Dragon",
      "Type 2": "",
      "Total": "540",
      "HP": "76",
      "Attack": "147",
      "Defense": "90",
      "Sp": {
        " Atk": "60",
        " Def": "70"
      },
      "Speed": "97",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6240"
      },
      "#": "613",
      "Name": "Cubchoo",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "305",
      "HP": "55",
      "Attack": "70",
      "Defense": "40",
      "Sp": {
        " Atk": "60",
        " Def": "40"
      },
      "Speed": "40",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6241"
      },
      "#": "614",
      "Name": "Beartic",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "485",
      "HP": "95",
      "Attack": "110",
      "Defense": "80",
      "Sp": {
        " Atk": "70",
        " Def": "80"
      },
      "Speed": "50",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6242"
      },
      "#": "615",
      "Name": "Cryogonal",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "485",
      "HP": "70",
      "Attack": "50",
      "Defense": "30",
      "Sp": {
        " Atk": "95",
        " Def": "135"
      },
      "Speed": "105",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6243"
      },
      "#": "616",
      "Name": "Shelmet",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "305",
      "HP": "50",
      "Attack": "40",
      "Defense": "85",
      "Sp": {
        " Atk": "40",
        " Def": "65"
      },
      "Speed": "25",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6244"
      },
      "#": "617",
      "Name": "Accelgor",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "495",
      "HP": "80",
      "Attack": "70",
      "Defense": "40",
      "Sp": {
        " Atk": "100",
        " Def": "60"
      },
      "Speed": "145",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6245"
      },
      "#": "618",
      "Name": "Stunfisk",
      "Type 1": "Ground",
      "Type 2": "Electric",
      "Total": "471",
      "HP": "109",
      "Attack": "66",
      "Defense": "84",
      "Sp": {
        " Atk": "81",
        " Def": "99"
      },
      "Speed": "32",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6246"
      },
      "#": "619",
      "Name": "Mienfoo",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "350",
      "HP": "45",
      "Attack": "85",
      "Defense": "50",
      "Sp": {
        " Atk": "55",
        " Def": "50"
      },
      "Speed": "65",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6247"
      },
      "#": "620",
      "Name": "Mienshao",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "510",
      "HP": "65",
      "Attack": "125",
      "Defense": "60",
      "Sp": {
        " Atk": "95",
        " Def": "60"
      },
      "Speed": "105",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6248"
      },
      "#": "621",
      "Name": "Druddigon",
      "Type 1": "Dragon",
      "Type 2": "",
      "Total": "485",
      "HP": "77",
      "Attack": "120",
      "Defense": "90",
      "Sp": {
        " Atk": "60",
        " Def": "90"
      },
      "Speed": "48",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6249"
      },
      "#": "622",
      "Name": "Golett",
      "Type 1": "Ground",
      "Type 2": "Ghost",
      "Total": "303",
      "HP": "59",
      "Attack": "74",
      "Defense": "50",
      "Sp": {
        " Atk": "35",
        " Def": "50"
      },
      "Speed": "35",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e624a"
      },
      "#": "623",
      "Name": "Golurk",
      "Type 1": "Ground",
      "Type 2": "Ghost",
      "Total": "483",
      "HP": "89",
      "Attack": "124",
      "Defense": "80",
      "Sp": {
        " Atk": "55",
        " Def": "80"
      },
      "Speed": "55",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e624b"
      },
      "#": "624",
      "Name": "Pawniard",
      "Type 1": "Dark",
      "Type 2": "Steel",
      "Total": "340",
      "HP": "45",
      "Attack": "85",
      "Defense": "70",
      "Sp": {
        " Atk": "40",
        " Def": "40"
      },
      "Speed": "60",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e624c"
      },
      "#": "625",
      "Name": "Bisharp",
      "Type 1": "Dark",
      "Type 2": "Steel",
      "Total": "490",
      "HP": "65",
      "Attack": "125",
      "Defense": "100",
      "Sp": {
        " Atk": "60",
        " Def": "70"
      },
      "Speed": "70",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e624d"
      },
      "#": "626",
      "Name": "Bouffalant",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "490",
      "HP": "95",
      "Attack": "110",
      "Defense": "95",
      "Sp": {
        " Atk": "40",
        " Def": "95"
      },
      "Speed": "55",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e624e"
      },
      "#": "627",
      "Name": "Rufflet",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "350",
      "HP": "70",
      "Attack": "83",
      "Defense": "50",
      "Sp": {
        " Atk": "37",
        " Def": "50"
      },
      "Speed": "60",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e624f"
      },
      "#": "628",
      "Name": "Braviary",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "510",
      "HP": "100",
      "Attack": "123",
      "Defense": "75",
      "Sp": {
        " Atk": "57",
        " Def": "75"
      },
      "Speed": "80",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6250"
      },
      "#": "629",
      "Name": "Vullaby",
      "Type 1": "Dark",
      "Type 2": "Flying",
      "Total": "370",
      "HP": "70",
      "Attack": "55",
      "Defense": "75",
      "Sp": {
        " Atk": "45",
        " Def": "65"
      },
      "Speed": "60",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6251"
      },
      "#": "630",
      "Name": "Mandibuzz",
      "Type 1": "Dark",
      "Type 2": "Flying",
      "Total": "510",
      "HP": "110",
      "Attack": "65",
      "Defense": "105",
      "Sp": {
        " Atk": "55",
        " Def": "95"
      },
      "Speed": "80",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6252"
      },
      "#": "631",
      "Name": "Heatmor",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "484",
      "HP": "85",
      "Attack": "97",
      "Defense": "66",
      "Sp": {
        " Atk": "105",
        " Def": "66"
      },
      "Speed": "65",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6253"
      },
      "#": "632",
      "Name": "Durant",
      "Type 1": "Bug",
      "Type 2": "Steel",
      "Total": "484",
      "HP": "58",
      "Attack": "109",
      "Defense": "112",
      "Sp": {
        " Atk": "48",
        " Def": "48"
      },
      "Speed": "109",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6254"
      },
      "#": "633",
      "Name": "Deino",
      "Type 1": "Dark",
      "Type 2": "Dragon",
      "Total": "300",
      "HP": "52",
      "Attack": "65",
      "Defense": "50",
      "Sp": {
        " Atk": "45",
        " Def": "50"
      },
      "Speed": "38",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6255"
      },
      "#": "634",
      "Name": "Zweilous",
      "Type 1": "Dark",
      "Type 2": "Dragon",
      "Total": "420",
      "HP": "72",
      "Attack": "85",
      "Defense": "70",
      "Sp": {
        " Atk": "65",
        " Def": "70"
      },
      "Speed": "58",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6256"
      },
      "#": "635",
      "Name": "Hydreigon",
      "Type 1": "Dark",
      "Type 2": "Dragon",
      "Total": "600",
      "HP": "92",
      "Attack": "105",
      "Defense": "90",
      "Sp": {
        " Atk": "125",
        " Def": "90"
      },
      "Speed": "98",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6257"
      },
      "#": "636",
      "Name": "Larvesta",
      "Type 1": "Bug",
      "Type 2": "Fire",
      "Total": "360",
      "HP": "55",
      "Attack": "85",
      "Defense": "55",
      "Sp": {
        " Atk": "50",
        " Def": "55"
      },
      "Speed": "60",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6258"
      },
      "#": "637",
      "Name": "Volcarona",
      "Type 1": "Bug",
      "Type 2": "Fire",
      "Total": "550",
      "HP": "85",
      "Attack": "60",
      "Defense": "65",
      "Sp": {
        " Atk": "135",
        " Def": "105"
      },
      "Speed": "100",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6259"
      },
      "#": "638",
      "Name": "Cobalion",
      "Type 1": "Steel",
      "Type 2": "Fighting",
      "Total": "580",
      "HP": "91",
      "Attack": "90",
      "Defense": "129",
      "Sp": {
        " Atk": "90",
        " Def": "72"
      },
      "Speed": "108",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e625a"
      },
      "#": "639",
      "Name": "Terrakion",
      "Type 1": "Rock",
      "Type 2": "Fighting",
      "Total": "580",
      "HP": "91",
      "Attack": "129",
      "Defense": "90",
      "Sp": {
        " Atk": "72",
        " Def": "90"
      },
      "Speed": "108",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e625b"
      },
      "#": "640",
      "Name": "Virizion",
      "Type 1": "Grass",
      "Type 2": "Fighting",
      "Total": "580",
      "HP": "91",
      "Attack": "90",
      "Defense": "72",
      "Sp": {
        " Atk": "90",
        " Def": "129"
      },
      "Speed": "108",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e625c"
      },
      "#": "641",
      "Name": "TornadusIncarnate Forme",
      "Type 1": "Flying",
      "Type 2": "",
      "Total": "580",
      "HP": "79",
      "Attack": "115",
      "Defense": "70",
      "Sp": {
        " Atk": "125",
        " Def": "80"
      },
      "Speed": "111",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e625d"
      },
      "#": "641",
      "Name": "TornadusTherian Forme",
      "Type 1": "Flying",
      "Type 2": "",
      "Total": "580",
      "HP": "79",
      "Attack": "100",
      "Defense": "80",
      "Sp": {
        " Atk": "110",
        " Def": "90"
      },
      "Speed": "121",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e625e"
      },
      "#": "642",
      "Name": "ThundurusIncarnate Forme",
      "Type 1": "Electric",
      "Type 2": "Flying",
      "Total": "580",
      "HP": "79",
      "Attack": "115",
      "Defense": "70",
      "Sp": {
        " Atk": "125",
        " Def": "80"
      },
      "Speed": "111",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e625f"
      },
      "#": "642",
      "Name": "ThundurusTherian Forme",
      "Type 1": "Electric",
      "Type 2": "Flying",
      "Total": "580",
      "HP": "79",
      "Attack": "105",
      "Defense": "70",
      "Sp": {
        " Atk": "145",
        " Def": "80"
      },
      "Speed": "101",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6260"
      },
      "#": "643",
      "Name": "Reshiram",
      "Type 1": "Dragon",
      "Type 2": "Fire",
      "Total": "680",
      "HP": "100",
      "Attack": "120",
      "Defense": "100",
      "Sp": {
        " Atk": "150",
        " Def": "120"
      },
      "Speed": "90",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6261"
      },
      "#": "644",
      "Name": "Zekrom",
      "Type 1": "Dragon",
      "Type 2": "Electric",
      "Total": "680",
      "HP": "100",
      "Attack": "150",
      "Defense": "120",
      "Sp": {
        " Atk": "120",
        " Def": "100"
      },
      "Speed": "90",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6262"
      },
      "#": "645",
      "Name": "LandorusIncarnate Forme",
      "Type 1": "Ground",
      "Type 2": "Flying",
      "Total": "600",
      "HP": "89",
      "Attack": "125",
      "Defense": "90",
      "Sp": {
        " Atk": "115",
        " Def": "80"
      },
      "Speed": "101",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6263"
      },
      "#": "645",
      "Name": "LandorusTherian Forme",
      "Type 1": "Ground",
      "Type 2": "Flying",
      "Total": "600",
      "HP": "89",
      "Attack": "145",
      "Defense": "90",
      "Sp": {
        " Atk": "105",
        " Def": "80"
      },
      "Speed": "91",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6264"
      },
      "#": "646",
      "Name": "Kyurem",
      "Type 1": "Dragon",
      "Type 2": "Ice",
      "Total": "660",
      "HP": "125",
      "Attack": "130",
      "Defense": "90",
      "Sp": {
        " Atk": "130",
        " Def": "90"
      },
      "Speed": "95",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6265"
      },
      "#": "646",
      "Name": "KyuremBlack Kyurem",
      "Type 1": "Dragon",
      "Type 2": "Ice",
      "Total": "700",
      "HP": "125",
      "Attack": "170",
      "Defense": "100",
      "Sp": {
        " Atk": "120",
        " Def": "90"
      },
      "Speed": "95",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6266"
      },
      "#": "646",
      "Name": "KyuremWhite Kyurem",
      "Type 1": "Dragon",
      "Type 2": "Ice",
      "Total": "700",
      "HP": "125",
      "Attack": "120",
      "Defense": "90",
      "Sp": {
        " Atk": "170",
        " Def": "100"
      },
      "Speed": "95",
      "Generation": "5",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6267"
      },
      "#": "647",
      "Name": "KeldeoOrdinary Forme",
      "Type 1": "Water",
      "Type 2": "Fighting",
      "Total": "580",
      "HP": "91",
      "Attack": "72",
      "Defense": "90",
      "Sp": {
        " Atk": "129",
        " Def": "90"
      },
      "Speed": "108",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6268"
      },
      "#": "647",
      "Name": "KeldeoResolute Forme",
      "Type 1": "Water",
      "Type 2": "Fighting",
      "Total": "580",
      "HP": "91",
      "Attack": "72",
      "Defense": "90",
      "Sp": {
        " Atk": "129",
        " Def": "90"
      },
      "Speed": "108",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6269"
      },
      "#": "648",
      "Name": "MeloettaAria Forme",
      "Type 1": "Normal",
      "Type 2": "Psychic",
      "Total": "600",
      "HP": "100",
      "Attack": "77",
      "Defense": "77",
      "Sp": {
        " Atk": "128",
        " Def": "128"
      },
      "Speed": "90",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e626a"
      },
      "#": "648",
      "Name": "MeloettaPirouette Forme",
      "Type 1": "Normal",
      "Type 2": "Fighting",
      "Total": "600",
      "HP": "100",
      "Attack": "128",
      "Defense": "90",
      "Sp": {
        " Atk": "77",
        " Def": "77"
      },
      "Speed": "128",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e626b"
      },
      "#": "649",
      "Name": "Genesect",
      "Type 1": "Bug",
      "Type 2": "Steel",
      "Total": "600",
      "HP": "71",
      "Attack": "120",
      "Defense": "95",
      "Sp": {
        " Atk": "120",
        " Def": "95"
      },
      "Speed": "99",
      "Generation": "5",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e626c"
      },
      "#": "650",
      "Name": "Chespin",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "313",
      "HP": "56",
      "Attack": "61",
      "Defense": "65",
      "Sp": {
        " Atk": "48",
        " Def": "45"
      },
      "Speed": "38",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e626d"
      },
      "#": "651",
      "Name": "Quilladin",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "405",
      "HP": "61",
      "Attack": "78",
      "Defense": "95",
      "Sp": {
        " Atk": "56",
        " Def": "58"
      },
      "Speed": "57",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e626e"
      },
      "#": "652",
      "Name": "Chesnaught",
      "Type 1": "Grass",
      "Type 2": "Fighting",
      "Total": "530",
      "HP": "88",
      "Attack": "107",
      "Defense": "122",
      "Sp": {
        " Atk": "74",
        " Def": "75"
      },
      "Speed": "64",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e626f"
      },
      "#": "653",
      "Name": "Fennekin",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "307",
      "HP": "40",
      "Attack": "45",
      "Defense": "40",
      "Sp": {
        " Atk": "62",
        " Def": "60"
      },
      "Speed": "60",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6270"
      },
      "#": "654",
      "Name": "Braixen",
      "Type 1": "Fire",
      "Type 2": "",
      "Total": "409",
      "HP": "59",
      "Attack": "59",
      "Defense": "58",
      "Sp": {
        " Atk": "90",
        " Def": "70"
      },
      "Speed": "73",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6271"
      },
      "#": "655",
      "Name": "Delphox",
      "Type 1": "Fire",
      "Type 2": "Psychic",
      "Total": "534",
      "HP": "75",
      "Attack": "69",
      "Defense": "72",
      "Sp": {
        " Atk": "114",
        " Def": "100"
      },
      "Speed": "104",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6272"
      },
      "#": "656",
      "Name": "Froakie",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "314",
      "HP": "41",
      "Attack": "56",
      "Defense": "40",
      "Sp": {
        " Atk": "62",
        " Def": "44"
      },
      "Speed": "71",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6273"
      },
      "#": "657",
      "Name": "Frogadier",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "405",
      "HP": "54",
      "Attack": "63",
      "Defense": "52",
      "Sp": {
        " Atk": "83",
        " Def": "56"
      },
      "Speed": "97",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6274"
      },
      "#": "658",
      "Name": "Greninja",
      "Type 1": "Water",
      "Type 2": "Dark",
      "Total": "530",
      "HP": "72",
      "Attack": "95",
      "Defense": "67",
      "Sp": {
        " Atk": "103",
        " Def": "71"
      },
      "Speed": "122",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6275"
      },
      "#": "659",
      "Name": "Bunnelby",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "237",
      "HP": "38",
      "Attack": "36",
      "Defense": "38",
      "Sp": {
        " Atk": "32",
        " Def": "36"
      },
      "Speed": "57",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6276"
      },
      "#": "660",
      "Name": "Diggersby",
      "Type 1": "Normal",
      "Type 2": "Ground",
      "Total": "423",
      "HP": "85",
      "Attack": "56",
      "Defense": "77",
      "Sp": {
        " Atk": "50",
        " Def": "77"
      },
      "Speed": "78",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6277"
      },
      "#": "661",
      "Name": "Fletchling",
      "Type 1": "Normal",
      "Type 2": "Flying",
      "Total": "278",
      "HP": "45",
      "Attack": "50",
      "Defense": "43",
      "Sp": {
        " Atk": "40",
        " Def": "38"
      },
      "Speed": "62",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6278"
      },
      "#": "662",
      "Name": "Fletchinder",
      "Type 1": "Fire",
      "Type 2": "Flying",
      "Total": "382",
      "HP": "62",
      "Attack": "73",
      "Defense": "55",
      "Sp": {
        " Atk": "56",
        " Def": "52"
      },
      "Speed": "84",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6279"
      },
      "#": "663",
      "Name": "Talonflame",
      "Type 1": "Fire",
      "Type 2": "Flying",
      "Total": "499",
      "HP": "78",
      "Attack": "81",
      "Defense": "71",
      "Sp": {
        " Atk": "74",
        " Def": "69"
      },
      "Speed": "126",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e627a"
      },
      "#": "664",
      "Name": "Scatterbug",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "200",
      "HP": "38",
      "Attack": "35",
      "Defense": "40",
      "Sp": {
        " Atk": "27",
        " Def": "25"
      },
      "Speed": "35",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e627b"
      },
      "#": "665",
      "Name": "Spewpa",
      "Type 1": "Bug",
      "Type 2": "",
      "Total": "213",
      "HP": "45",
      "Attack": "22",
      "Defense": "60",
      "Sp": {
        " Atk": "27",
        " Def": "30"
      },
      "Speed": "29",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e627c"
      },
      "#": "666",
      "Name": "Vivillon",
      "Type 1": "Bug",
      "Type 2": "Flying",
      "Total": "411",
      "HP": "80",
      "Attack": "52",
      "Defense": "50",
      "Sp": {
        " Atk": "90",
        " Def": "50"
      },
      "Speed": "89",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e627d"
      },
      "#": "667",
      "Name": "Litleo",
      "Type 1": "Fire",
      "Type 2": "Normal",
      "Total": "369",
      "HP": "62",
      "Attack": "50",
      "Defense": "58",
      "Sp": {
        " Atk": "73",
        " Def": "54"
      },
      "Speed": "72",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e627e"
      },
      "#": "668",
      "Name": "Pyroar",
      "Type 1": "Fire",
      "Type 2": "Normal",
      "Total": "507",
      "HP": "86",
      "Attack": "68",
      "Defense": "72",
      "Sp": {
        " Atk": "109",
        " Def": "66"
      },
      "Speed": "106",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e627f"
      },
      "#": "669",
      "Name": "Flabébé",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "303",
      "HP": "44",
      "Attack": "38",
      "Defense": "39",
      "Sp": {
        " Atk": "61",
        " Def": "79"
      },
      "Speed": "42",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6280"
      },
      "#": "670",
      "Name": "Floette",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "371",
      "HP": "54",
      "Attack": "45",
      "Defense": "47",
      "Sp": {
        " Atk": "75",
        " Def": "98"
      },
      "Speed": "52",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6281"
      },
      "#": "671",
      "Name": "Florges",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "552",
      "HP": "78",
      "Attack": "65",
      "Defense": "68",
      "Sp": {
        " Atk": "112",
        " Def": "154"
      },
      "Speed": "75",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6282"
      },
      "#": "672",
      "Name": "Skiddo",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "350",
      "HP": "66",
      "Attack": "65",
      "Defense": "48",
      "Sp": {
        " Atk": "62",
        " Def": "57"
      },
      "Speed": "52",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6283"
      },
      "#": "673",
      "Name": "Gogoat",
      "Type 1": "Grass",
      "Type 2": "",
      "Total": "531",
      "HP": "123",
      "Attack": "100",
      "Defense": "62",
      "Sp": {
        " Atk": "97",
        " Def": "81"
      },
      "Speed": "68",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6284"
      },
      "#": "674",
      "Name": "Pancham",
      "Type 1": "Fighting",
      "Type 2": "",
      "Total": "348",
      "HP": "67",
      "Attack": "82",
      "Defense": "62",
      "Sp": {
        " Atk": "46",
        " Def": "48"
      },
      "Speed": "43",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6285"
      },
      "#": "675",
      "Name": "Pangoro",
      "Type 1": "Fighting",
      "Type 2": "Dark",
      "Total": "495",
      "HP": "95",
      "Attack": "124",
      "Defense": "78",
      "Sp": {
        " Atk": "69",
        " Def": "71"
      },
      "Speed": "58",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6286"
      },
      "#": "676",
      "Name": "Furfrou",
      "Type 1": "Normal",
      "Type 2": "",
      "Total": "472",
      "HP": "75",
      "Attack": "80",
      "Defense": "60",
      "Sp": {
        " Atk": "65",
        " Def": "90"
      },
      "Speed": "102",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6287"
      },
      "#": "677",
      "Name": "Espurr",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "355",
      "HP": "62",
      "Attack": "48",
      "Defense": "54",
      "Sp": {
        " Atk": "63",
        " Def": "60"
      },
      "Speed": "68",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6288"
      },
      "#": "678",
      "Name": "MeowsticMale",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "466",
      "HP": "74",
      "Attack": "48",
      "Defense": "76",
      "Sp": {
        " Atk": "83",
        " Def": "81"
      },
      "Speed": "104",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6289"
      },
      "#": "678",
      "Name": "MeowsticFemale",
      "Type 1": "Psychic",
      "Type 2": "",
      "Total": "466",
      "HP": "74",
      "Attack": "48",
      "Defense": "76",
      "Sp": {
        " Atk": "83",
        " Def": "81"
      },
      "Speed": "104",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e628a"
      },
      "#": "679",
      "Name": "Honedge",
      "Type 1": "Steel",
      "Type 2": "Ghost",
      "Total": "325",
      "HP": "45",
      "Attack": "80",
      "Defense": "100",
      "Sp": {
        " Atk": "35",
        " Def": "37"
      },
      "Speed": "28",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e628b"
      },
      "#": "680",
      "Name": "Doublade",
      "Type 1": "Steel",
      "Type 2": "Ghost",
      "Total": "448",
      "HP": "59",
      "Attack": "110",
      "Defense": "150",
      "Sp": {
        " Atk": "45",
        " Def": "49"
      },
      "Speed": "35",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e628c"
      },
      "#": "681",
      "Name": "AegislashBlade Forme",
      "Type 1": "Steel",
      "Type 2": "Ghost",
      "Total": "520",
      "HP": "60",
      "Attack": "150",
      "Defense": "50",
      "Sp": {
        " Atk": "150",
        " Def": "50"
      },
      "Speed": "60",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e628d"
      },
      "#": "681",
      "Name": "AegislashShield Forme",
      "Type 1": "Steel",
      "Type 2": "Ghost",
      "Total": "520",
      "HP": "60",
      "Attack": "50",
      "Defense": "150",
      "Sp": {
        " Atk": "50",
        " Def": "150"
      },
      "Speed": "60",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e628e"
      },
      "#": "682",
      "Name": "Spritzee",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "341",
      "HP": "78",
      "Attack": "52",
      "Defense": "60",
      "Sp": {
        " Atk": "63",
        " Def": "65"
      },
      "Speed": "23",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e628f"
      },
      "#": "683",
      "Name": "Aromatisse",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "462",
      "HP": "101",
      "Attack": "72",
      "Defense": "72",
      "Sp": {
        " Atk": "99",
        " Def": "89"
      },
      "Speed": "29",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6290"
      },
      "#": "684",
      "Name": "Swirlix",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "341",
      "HP": "62",
      "Attack": "48",
      "Defense": "66",
      "Sp": {
        " Atk": "59",
        " Def": "57"
      },
      "Speed": "49",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6291"
      },
      "#": "685",
      "Name": "Slurpuff",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "480",
      "HP": "82",
      "Attack": "80",
      "Defense": "86",
      "Sp": {
        " Atk": "85",
        " Def": "75"
      },
      "Speed": "72",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6292"
      },
      "#": "686",
      "Name": "Inkay",
      "Type 1": "Dark",
      "Type 2": "Psychic",
      "Total": "288",
      "HP": "53",
      "Attack": "54",
      "Defense": "53",
      "Sp": {
        " Atk": "37",
        " Def": "46"
      },
      "Speed": "45",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6293"
      },
      "#": "687",
      "Name": "Malamar",
      "Type 1": "Dark",
      "Type 2": "Psychic",
      "Total": "482",
      "HP": "86",
      "Attack": "92",
      "Defense": "88",
      "Sp": {
        " Atk": "68",
        " Def": "75"
      },
      "Speed": "73",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6294"
      },
      "#": "688",
      "Name": "Binacle",
      "Type 1": "Rock",
      "Type 2": "Water",
      "Total": "306",
      "HP": "42",
      "Attack": "52",
      "Defense": "67",
      "Sp": {
        " Atk": "39",
        " Def": "56"
      },
      "Speed": "50",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6295"
      },
      "#": "689",
      "Name": "Barbaracle",
      "Type 1": "Rock",
      "Type 2": "Water",
      "Total": "500",
      "HP": "72",
      "Attack": "105",
      "Defense": "115",
      "Sp": {
        " Atk": "54",
        " Def": "86"
      },
      "Speed": "68",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6296"
      },
      "#": "690",
      "Name": "Skrelp",
      "Type 1": "Poison",
      "Type 2": "Water",
      "Total": "320",
      "HP": "50",
      "Attack": "60",
      "Defense": "60",
      "Sp": {
        " Atk": "60",
        " Def": "60"
      },
      "Speed": "30",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6297"
      },
      "#": "691",
      "Name": "Dragalge",
      "Type 1": "Poison",
      "Type 2": "Dragon",
      "Total": "494",
      "HP": "65",
      "Attack": "75",
      "Defense": "90",
      "Sp": {
        " Atk": "97",
        " Def": "123"
      },
      "Speed": "44",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6298"
      },
      "#": "692",
      "Name": "Clauncher",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "330",
      "HP": "50",
      "Attack": "53",
      "Defense": "62",
      "Sp": {
        " Atk": "58",
        " Def": "63"
      },
      "Speed": "44",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e6299"
      },
      "#": "693",
      "Name": "Clawitzer",
      "Type 1": "Water",
      "Type 2": "",
      "Total": "500",
      "HP": "71",
      "Attack": "73",
      "Defense": "88",
      "Sp": {
        " Atk": "120",
        " Def": "89"
      },
      "Speed": "59",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e629a"
      },
      "#": "694",
      "Name": "Helioptile",
      "Type 1": "Electric",
      "Type 2": "Normal",
      "Total": "289",
      "HP": "44",
      "Attack": "38",
      "Defense": "33",
      "Sp": {
        " Atk": "61",
        " Def": "43"
      },
      "Speed": "70",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e629b"
      },
      "#": "695",
      "Name": "Heliolisk",
      "Type 1": "Electric",
      "Type 2": "Normal",
      "Total": "481",
      "HP": "62",
      "Attack": "55",
      "Defense": "52",
      "Sp": {
        " Atk": "109",
        " Def": "94"
      },
      "Speed": "109",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e629c"
      },
      "#": "696",
      "Name": "Tyrunt",
      "Type 1": "Rock",
      "Type 2": "Dragon",
      "Total": "362",
      "HP": "58",
      "Attack": "89",
      "Defense": "77",
      "Sp": {
        " Atk": "45",
        " Def": "45"
      },
      "Speed": "48",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e629d"
      },
      "#": "697",
      "Name": "Tyrantrum",
      "Type 1": "Rock",
      "Type 2": "Dragon",
      "Total": "521",
      "HP": "82",
      "Attack": "121",
      "Defense": "119",
      "Sp": {
        " Atk": "69",
        " Def": "59"
      },
      "Speed": "71",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e629e"
      },
      "#": "698",
      "Name": "Amaura",
      "Type 1": "Rock",
      "Type 2": "Ice",
      "Total": "362",
      "HP": "77",
      "Attack": "59",
      "Defense": "50",
      "Sp": {
        " Atk": "67",
        " Def": "63"
      },
      "Speed": "46",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e629f"
      },
      "#": "699",
      "Name": "Aurorus",
      "Type 1": "Rock",
      "Type 2": "Ice",
      "Total": "521",
      "HP": "123",
      "Attack": "77",
      "Defense": "72",
      "Sp": {
        " Atk": "99",
        " Def": "92"
      },
      "Speed": "58",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62a0"
      },
      "#": "700",
      "Name": "Sylveon",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "525",
      "HP": "95",
      "Attack": "65",
      "Defense": "65",
      "Sp": {
        " Atk": "110",
        " Def": "130"
      },
      "Speed": "60",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62a1"
      },
      "#": "701",
      "Name": "Hawlucha",
      "Type 1": "Fighting",
      "Type 2": "Flying",
      "Total": "500",
      "HP": "78",
      "Attack": "92",
      "Defense": "75",
      "Sp": {
        " Atk": "74",
        " Def": "63"
      },
      "Speed": "118",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62a2"
      },
      "#": "702",
      "Name": "Dedenne",
      "Type 1": "Electric",
      "Type 2": "Fairy",
      "Total": "431",
      "HP": "67",
      "Attack": "58",
      "Defense": "57",
      "Sp": {
        " Atk": "81",
        " Def": "67"
      },
      "Speed": "101",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62a3"
      },
      "#": "703",
      "Name": "Carbink",
      "Type 1": "Rock",
      "Type 2": "Fairy",
      "Total": "500",
      "HP": "50",
      "Attack": "50",
      "Defense": "150",
      "Sp": {
        " Atk": "50",
        " Def": "150"
      },
      "Speed": "50",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62a4"
      },
      "#": "704",
      "Name": "Goomy",
      "Type 1": "Dragon",
      "Type 2": "",
      "Total": "300",
      "HP": "45",
      "Attack": "50",
      "Defense": "35",
      "Sp": {
        " Atk": "55",
        " Def": "75"
      },
      "Speed": "40",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62a5"
      },
      "#": "705",
      "Name": "Sliggoo",
      "Type 1": "Dragon",
      "Type 2": "",
      "Total": "452",
      "HP": "68",
      "Attack": "75",
      "Defense": "53",
      "Sp": {
        " Atk": "83",
        " Def": "113"
      },
      "Speed": "60",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62a6"
      },
      "#": "706",
      "Name": "Goodra",
      "Type 1": "Dragon",
      "Type 2": "",
      "Total": "600",
      "HP": "90",
      "Attack": "100",
      "Defense": "70",
      "Sp": {
        " Atk": "110",
        " Def": "150"
      },
      "Speed": "80",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62a7"
      },
      "#": "707",
      "Name": "Klefki",
      "Type 1": "Steel",
      "Type 2": "Fairy",
      "Total": "470",
      "HP": "57",
      "Attack": "80",
      "Defense": "91",
      "Sp": {
        " Atk": "80",
        " Def": "87"
      },
      "Speed": "75",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62a8"
      },
      "#": "708",
      "Name": "Phantump",
      "Type 1": "Ghost",
      "Type 2": "Grass",
      "Total": "309",
      "HP": "43",
      "Attack": "70",
      "Defense": "48",
      "Sp": {
        " Atk": "50",
        " Def": "60"
      },
      "Speed": "38",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62a9"
      },
      "#": "709",
      "Name": "Trevenant",
      "Type 1": "Ghost",
      "Type 2": "Grass",
      "Total": "474",
      "HP": "85",
      "Attack": "110",
      "Defense": "76",
      "Sp": {
        " Atk": "65",
        " Def": "82"
      },
      "Speed": "56",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62aa"
      },
      "#": "710",
      "Name": "PumpkabooAverage Size",
      "Type 1": "Ghost",
      "Type 2": "Grass",
      "Total": "335",
      "HP": "49",
      "Attack": "66",
      "Defense": "70",
      "Sp": {
        " Atk": "44",
        " Def": "55"
      },
      "Speed": "51",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62ab"
      },
      "#": "710",
      "Name": "PumpkabooSmall Size",
      "Type 1": "Ghost",
      "Type 2": "Grass",
      "Total": "335",
      "HP": "44",
      "Attack": "66",
      "Defense": "70",
      "Sp": {
        " Atk": "44",
        " Def": "55"
      },
      "Speed": "56",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62ac"
      },
      "#": "710",
      "Name": "PumpkabooLarge Size",
      "Type 1": "Ghost",
      "Type 2": "Grass",
      "Total": "335",
      "HP": "54",
      "Attack": "66",
      "Defense": "70",
      "Sp": {
        " Atk": "44",
        " Def": "55"
      },
      "Speed": "46",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62ad"
      },
      "#": "710",
      "Name": "PumpkabooSuper Size",
      "Type 1": "Ghost",
      "Type 2": "Grass",
      "Total": "335",
      "HP": "59",
      "Attack": "66",
      "Defense": "70",
      "Sp": {
        " Atk": "44",
        " Def": "55"
      },
      "Speed": "41",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62ae"
      },
      "#": "711",
      "Name": "GourgeistAverage Size",
      "Type 1": "Ghost",
      "Type 2": "Grass",
      "Total": "494",
      "HP": "65",
      "Attack": "90",
      "Defense": "122",
      "Sp": {
        " Atk": "58",
        " Def": "75"
      },
      "Speed": "84",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62af"
      },
      "#": "711",
      "Name": "GourgeistSmall Size",
      "Type 1": "Ghost",
      "Type 2": "Grass",
      "Total": "494",
      "HP": "55",
      "Attack": "85",
      "Defense": "122",
      "Sp": {
        " Atk": "58",
        " Def": "75"
      },
      "Speed": "99",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62b0"
      },
      "#": "711",
      "Name": "GourgeistLarge Size",
      "Type 1": "Ghost",
      "Type 2": "Grass",
      "Total": "494",
      "HP": "75",
      "Attack": "95",
      "Defense": "122",
      "Sp": {
        " Atk": "58",
        " Def": "75"
      },
      "Speed": "69",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62b1"
      },
      "#": "711",
      "Name": "GourgeistSuper Size",
      "Type 1": "Ghost",
      "Type 2": "Grass",
      "Total": "494",
      "HP": "85",
      "Attack": "100",
      "Defense": "122",
      "Sp": {
        " Atk": "58",
        " Def": "75"
      },
      "Speed": "54",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62b2"
      },
      "#": "712",
      "Name": "Bergmite",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "304",
      "HP": "55",
      "Attack": "69",
      "Defense": "85",
      "Sp": {
        " Atk": "32",
        " Def": "35"
      },
      "Speed": "28",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62b3"
      },
      "#": "713",
      "Name": "Avalugg",
      "Type 1": "Ice",
      "Type 2": "",
      "Total": "514",
      "HP": "95",
      "Attack": "117",
      "Defense": "184",
      "Sp": {
        " Atk": "44",
        " Def": "46"
      },
      "Speed": "28",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62b4"
      },
      "#": "714",
      "Name": "Noibat",
      "Type 1": "Flying",
      "Type 2": "Dragon",
      "Total": "245",
      "HP": "40",
      "Attack": "30",
      "Defense": "35",
      "Sp": {
        " Atk": "45",
        " Def": "40"
      },
      "Speed": "55",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62b5"
      },
      "#": "715",
      "Name": "Noivern",
      "Type 1": "Flying",
      "Type 2": "Dragon",
      "Total": "535",
      "HP": "85",
      "Attack": "70",
      "Defense": "80",
      "Sp": {
        " Atk": "97",
        " Def": "80"
      },
      "Speed": "123",
      "Generation": "6",
      "Legendary": "False"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62b6"
      },
      "#": "716",
      "Name": "Xerneas",
      "Type 1": "Fairy",
      "Type 2": "",
      "Total": "680",
      "HP": "126",
      "Attack": "131",
      "Defense": "95",
      "Sp": {
        " Atk": "131",
        " Def": "98"
      },
      "Speed": "99",
      "Generation": "6",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62b7"
      },
      "#": "717",
      "Name": "Yveltal",
      "Type 1": "Dark",
      "Type 2": "Flying",
      "Total": "680",
      "HP": "126",
      "Attack": "131",
      "Defense": "95",
      "Sp": {
        " Atk": "131",
        " Def": "98"
      },
      "Speed": "99",
      "Generation": "6",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62b8"
      },
      "#": "718",
      "Name": "Zygarde50% Forme",
      "Type 1": "Dragon",
      "Type 2": "Ground",
      "Total": "600",
      "HP": "108",
      "Attack": "100",
      "Defense": "121",
      "Sp": {
        " Atk": "81",
        " Def": "95"
      },
      "Speed": "95",
      "Generation": "6",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62b9"
      },
      "#": "719",
      "Name": "Diancie",
      "Type 1": "Rock",
      "Type 2": "Fairy",
      "Total": "600",
      "HP": "50",
      "Attack": "100",
      "Defense": "150",
      "Sp": {
        " Atk": "100",
        " Def": "150"
      },
      "Speed": "50",
      "Generation": "6",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62ba"
      },
      "#": "719",
      "Name": "DiancieMega Diancie",
      "Type 1": "Rock",
      "Type 2": "Fairy",
      "Total": "700",
      "HP": "50",
      "Attack": "160",
      "Defense": "110",
      "Sp": {
        " Atk": "160",
        " Def": "110"
      },
      "Speed": "110",
      "Generation": "6",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62bb"
      },
      "#": "720",
      "Name": "HoopaHoopa Confined",
      "Type 1": "Psychic",
      "Type 2": "Ghost",
      "Total": "600",
      "HP": "80",
      "Attack": "110",
      "Defense": "60",
      "Sp": {
        " Atk": "150",
        " Def": "130"
      },
      "Speed": "70",
      "Generation": "6",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62bc"
      },
      "#": "720",
      "Name": "HoopaHoopa Unbound",
      "Type 1": "Psychic",
      "Type 2": "Dark",
      "Total": "680",
      "HP": "80",
      "Attack": "160",
      "Defense": "60",
      "Sp": {
        " Atk": "170",
        " Def": "130"
      },
      "Speed": "80",
      "Generation": "6",
      "Legendary": "True"
    },{
      "_id": {
        "$oid": "5f91e0217838572d918e62bd"
      },
      "#": "721",
      "Name": "Volcanion",
      "Type 1": "Fire",
      "Type 2": "Water",
      "Total": "600",
      "HP": "80",
      "Attack": "110",
      "Defense": "120",
      "Sp": {
        " Atk": "130",
        " Def": "90"
      },
      "Speed": "70",
      "Generation": "6",
      "Legendary": "True"
    }]

    await Product.insertMany(products)
    console.log("Created products!")
}
const run = async () => {
    await main()
    db.close()
}

run()