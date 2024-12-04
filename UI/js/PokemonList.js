const PokemonList = {
    grass: [

        {
            number: 1,
            name: "Bulbasaur",
            image: "../src/images/A1_001_EN.jpeg",
            attacks: [
                {
                    name: "Vine Whip",
                    score: 40,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 70,
            stage: "basic"

        },


        {
            number: 2,
            name: "Ivysaur",
            image: "../src/images/A1_002_EN.jpeg",
            attacks: [
                {
                    name: "Razor Leaf",
                    score: 60,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 2 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 90,
            stage: "stage 1"
        },



        {
            number: 3,
            name: "Venusaur",
            image: "../src/images/A1_003_EN.jpeg",
            attacks: [
                {
                    name: "Mega Drain",
                    score: 80,
                    energy: [
                        { type: "grass", amount: 2 },
                        { type: "any", amount: 2 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 160,
            stage: "stage 2"
        },



        {
            number: 4,
            name: "Venusaur EX",
            image: "../src/images/A1_004_EN.jpeg",
            attacks: [
                {
                    name: "Razor Leaf",
                    score: 60,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 2 }
                    ]
                },
                {
                    name: "Giant Bloom",
                    score: 100,
                    energy: [
                        { type: "grass", amount: 2 },
                        { type: "any", amount: 2 }
                    ],
                    effect: {
                        type: "heal",
                        target: "self",
                        amount: 30
                    }
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 190,
            stage: "stage 2"
        },



        {
            number: 5,
            name: "Caterpie",
            image: "../src/images/A1_005_EN.jpeg",
            attacks: [
                {
                    name: "Tackle",
                    score: 10,
                    energy: [
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 50,
            stage: "basic"
        },



        {
            number: 6,
            name: "Metapod",
            image: "../src/images/A1_006_EN.jpeg",
            attacks: [
                {
                    name: "Bug bite",
                    score: 30,
                    energy: [
                        { type: "any", amount: 2 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 80,
            stage: "stage 1"
        },


        {
            number: 7,
            name: "Butterfree",
            image: "../src/images/A1_007_EN.jpeg",
            attacks: [
                {
                    name: "Gust",
                    score: 60,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 2 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 120,
            stage: "stage 2"
        },

        {
            number: 8,
            name: "Weedle",
            image: "../src/images/A1_008_EN.jpeg",
            attacks: [
                {
                    name: "Sting",
                    score: 20,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 50,
            stage: "basic"
        },



        {
            number: 9,
            name: "Kakuna",
            image: "../src/images/A1_009_EN.jpeg",
            attacks: [
                {
                    name: "Bug Bite",
                    score: 30,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 80,
            stage: "stage 1"
        },


        {
            number: 10,
            name: "Beedrill",
            image: "../src/images/A1_010_EN.jpeg",
            attacks: [
                {
                    name: "Sharp Sting",
                    score: 70,
                    energy: [
                        { type: "grass", amount: 1 },
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 120,
            stage: "stage 2"
        },



        {
            number: 11,
            name: "Oddish",
            image: "../src/images/A1_011_EN.jpeg",
            attacks: [
                {
                    name: "Ram",
                    score: 20,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic"
        },



        {
            number: 12,
            name: "Gloom",
            image: "../src/images/A1_012_EN.jpeg",
            attacks: [
                {
                    name: "Drool",
                    score: 40,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 80,
            stage: "stage 1"
        },



        {
            number: 13,
            name: "Vileplume",
            image: "../src/images/A1_013_EN.jpeg", 
            attacks: [
                {
                    name: "soothing Scent",
                    score: 80,
                    energy: [
                        { type: "grass", amount: 2 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 3 }
            ],
            hp: 140,
            stage: "stage 2"
        },


        {
            number: 14,
            name: "Paras",
            image: "../src/images/A1_014_EN.jpeg",
            attacks: [
                {
                    name: "Bug Bite",
                    score: 30,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 70,
            stage: "basic"
        },


        {
            number: 15,
            name: "Parasect",
            image: "../src/images/A1_015_EN.jpeg",
            attacks: [
                {
                    name: "Slash",
                    score: 80,
                    energy: [
                        { type: "grass", amount: 2 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }  
            ],
            hp: 120,
            stage: "stage 1"
        },



        {
            number: 16,
            name: "Venonat",
            image: "../src/images/A1_016_EN.jpeg",
            attacks: [
                {
                    name: "Tackle",
                    score: 20,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic"
        },


        {
            number: 17,
            name: "Venomoth",
            image: "../src/images/A1_017_EN.jpeg",
            attacks: [
                {
                    name: "Poison Powder",
                    score: 30,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 80,
            stage: "stage 1"
        },


        {
            number: 18,
            name: "Bellsprout",
            image: "../src/images/A1_018_EN.jpeg",
            attacks: [
                {
                    name: "Vine Whip",
                    score: 20,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic"
        },



        {
            number: 19,
            name: "Weepinbell",
            image: "../src/images/A1_019_EN.jpeg",
            attacks: [
                {
                    name: "Razor Leaf",
                    score: 40,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 90,
            stage: "stage 1"
        },



        {
            number: 20,
            name: "Victreebel",
            image: "../src/images/A1_020_EN.jpeg",
            attacks: [
                {
                    name: "Vine Whip",
                    score: 60,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 140,
            stage: "stage 2"
        },


        {
            number: 21,
            name: "Exeggcute",
            image: "../src/images/A1_021_EN.jpeg",
            attacks: [
                {
                    name: "Seed Bomb",
                    score: 20,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 50,
            stage: "basic"
        },


        {
            number: 22,
            name: "Exeggutor",
            image: "../src/images/A1_022_EN.jpeg",
            attacks: [
                {
                    name: "Stomp",
                    score: 30,
                    energy: [
                        { type: "grass", amount: 1 }
                    ],
                    effect: {
                        type: "coinFlip",
                        result: "heads",
                        action: {
                            type: "damage",
                            amount: 30
                        }
                    }
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 3 }
            ],
            hp: 130,
            stage: "stage 1"
        },
        {
            number: 23,
            name: "Exeggutor EX",
            image: "../src/images/A1_023_EN.jpeg",
            attacks: [
                {
                    name: "Tropical Swing",
                    score: 40,
                    energy: [
                        { type: "grass", amount: 1 },
                    ],
                    effect: {
                        type: "coinFlip",
                        target: "self",
                        amount: 40
                    }
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 3 }
            ],
            hp: 160,
            stage: "stage 1"
        }




    ]
}
