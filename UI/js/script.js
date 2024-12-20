// Card data
const charizardPack = {
    1: [
        [11, "Oddish"], [18, "Bellsprout"], [21, "Exeggcute"], [24, "Tangela"], [27, "Cottonee"],
        [29, "Petilil"], [31, "Skiddo"], [32, "Gogoat"], [33, "Charmander"], [37, "Vulpix"],
        [42, "Ponyta"], [44, "Magmar"], [48, "Heatmor"], [51, "Sizzlipede"], [57, "Psyduck"],
        [59, "Poliwag"], [74, "Staryu"], [85, "Ducklett"], [87, "Froakie"], [90, "Pyukumuku"],
        [92, "Snom"], [105, "Blitzle"], [110, "Helioptile"], [111, "Heliolisk"], [115, "Abra"],
        [118, "Slowpoke"], [133, "Woobat"], [134, "Swoobat"], [135, "Golett"], [137, "Sandshrew"],
        [141, "Mankey"], [143, "Machop"], [155, "Hitmonchan"], [162, "Clobbopus"], [164, "Ekans"],
        [178, "Mawile"], [179, "Pawniard"], [181, "Meltan"], [189, "Rattata"], [190, "Raticate"],
        [191, "Spearow"], [192, "Fearow"], [196, "Meowth"], [198, "Farfetch'd"], [199, "Doduo"],
        [206, "Eevee"], [212, "Minccino"], [214, "Wooloo"], [215, "Dubwool"], [217, "Dome Fossil"]
    ],
    2: [
        [12, "Gloom"], [19, "Weepinbell"], [26, "Pinsir"], [28, "Whimsicott"], [30, "Lilligant"],
        [34, "Charmeleon"], [38, "Ninetales"], [43, "Rapidash"], [52, "Centiskorch"], [58, "Golduck"],
        [60, "Poliwhirl"], [75, "Starmie"], [86, "Swanna"], [88, "Frogadier"], [91, "Bruxish"],
        [93, "Frosmoth"], [106, "Zebstrika"], [112, "Pincurchin"], [116, "Kadabra"], [119, "Slowbro"],
        [136, "Golurk"], [138, "Sandslash"], [142, "Primeape"], [144, "Machoke"], [158, "Kabuto"],
        [163, "Grapploct"], [165, "Arbok"], [180, "Bisharp"], [197, "Persian"], [200, "Dodrio"],
        [204, "Tauros"], [213, "Cinccino"], [219, "Erika"], [221, "Blaine"], [225, "Sabrina"]
    ],
    3: [
        [13, "Vileplume"], [20, "Victreebel"], [22, "Exeggutor"], [35, "Charizard"], [45, "Flareon"],
        [46, "Moltres"], [61, "Poliwrath"], [79, "Lapras"], [89, "Greninja"], [117, "Alakazam"],
        [145, "Machamp"], [159, "Kabutops"], [182, "Melmetal"], [203, "Kangaskhan"]
    ],
    4: [
        [23, "Exeggutor EX"], [36, "Charizard EX"], [47, "Moltres EX"], [76, "Starmie EX"], [146, "Machamp EX"]
    ],
    5: [
        [228, "Gloom"], [229, "Pinsir"], [230, "Charmander"], [231, "Rapidash"], [234, "Lapras"],
        [236, "Alakazam"], [237, "Slowpoke"], [246, "Meowth"]
    ],
    6: [
        [252, "Exeggutor EX"], [253, "Charizard EX"], [255, "Moltres EX"], [257, "Starmie EX"], 
        [263, "Machamp EX"], [266, "Erika"], [268, "Blaine"], [272, "Sabrina"], [274, "Moltres EX"], 
        [278, "Machamp EX"]
    ],
    7: [
        [280, "Charizard EX"]
    ],
    8: [
        [284, "Charizard EX"], [285, "Pikachu EX"], [286, "Mewtwo EX"]
    ],
    9:[[283, "Mew"]]
};

const mewtwoPack = {
    1: [
        [1, "Bulbasaur"], [8, "Weedle"], [9, "Kakuna"], [16, "Venonat"], [25, "Scyther"],
        [27, "Cottonee"], [29, "Petilil"], [42, "Ponyta"], [48, "Heatmor"], [49, "Salandit"],
        [50, "Salazzle"], [51, "Sizzlipede"], [57, "Psyduck"], [62, "Tentacool"], [66, "Shellder"],
        [68, "Krabby"], [92, "Snom"], [105, "Blitzle"], [107, "Tynamo"], [110, "Helioptile"],
        [111, "Heliolisk"], [118, "Slowpoke"], [120, "Gastly"], [127, "Jynx"], [130, "Ralts"],
        [133, "Woobat"], [134, "Swoobat"], [135, "Golett"], [137, "Sandshrew"], [151, "Cubone"],
        [154, "Hitmonlee"], [156, "Rhyhorn"], [162, "Clobbopus"], [164, "Ekans"], [172, "Zubat"],
        [174, "Grimer"], [176, "Koffing"], [179, "Pawniard"], [183, "Dratini"], [186, "Pidgey"],
        [187, "Pidgeotto"], [189, "Rattata"], [190, "Raticate"], [198, "Farfetch'd"], [199, "Doduo"],
        [207, "Eevee"], [212, "Minccino"], [214, "Wooloo"], [215, "Dubwool"], [218, "Old Amber"]
    ],
    2: [
        [2, "Ivysaur"], [17, "Venomoth"], [26, "Pinsir"], [28, "Whimsicott"], [30, "Lilligant"],
        [43, "Rapidash"], [52, "Centiskorch"], [58, "Golduck"], [63, "Tentacruel"], [67, "Cloyster"],
        [69, "Kingler"], [91, "Bruxish"], [93, "Frosmoth"], [106, "Zebstrika"], [108, "Eelektrik"],
        [112, "Pincurchin"], [119, "Slowbro"], [121, "Haunter"], [126, "Mr. Mime"], [131, "Kirlia"],
        [136, "Golurk"], [138, "Sandslash"], [152, "Marowak"], [157, "Rhydon"], [163, "Grapploct"],
        [165, "Arbok"], [173, "Golbat"], [180, "Bisharp"], [184, "Dragonair"], [200, "Dodrio"],
        [201, "Lickitung"], [209, "Porygon"], [213, "Cinccino"], [222, "Koga"], [223, "Giovanni"]
    ],
    3: [
        [3, "Venusaur"], [10, "Beedrill"], [80, "Vaporeon"], [83, "Articuno"], [109, "Eelektross"],
        [122, "Gengar"], [128, "Mewtwo"], [132, "Gardevoir"], [175, "Muk"], [177, "Weezing"],
        [185, "Dragonite"], [188, "Pidgeot"], [205, "Ditto"], [210, "Aerodactyl"]
    ],
    4: [
        [4, "Venusaur EX"], [84, "Articuno EX"], [123, "Gengar EX"], [129, "Mewtwo EX"],
        [153, "Marowak EX"]
    ],
    5: [
        [227, "Bulbasaur"], [239, "Cubone"], [242, "Golbat"], [243, "Weezing"], [244, "Dragonite"],
        [245, "Pidgeot"], [247, "Ditto"], [249, "Porygon"]
    ],
    6: [
        [251, "Venusaur EX"], [258, "Articuno EX"], [261, "Gengar EX"], [262, "Mewtwo EX"],
        [264, "Marowak EX"], [269, "Koga"], [270, "Giovanni"], [275, "Articuno EX"], [277, "Gengar EX"]
    ],
    7: [
        [282, "Mewtwo EX"]
    ],
    8: [
        [284, "Charizard EX"], [285, "Pikachu EX"], [286, "Mewtwo EX"]
    ],
    9:[
        [283,"Mew "]
    ]
};

const pikachuPack = {
    1: [
        [5, "Caterpie"], [6, "Metapod"], [14, "Paras"], [27, "Cottonee"], [29, "Petilil"],
        [39, "Growlithe"], [42, "Ponyta"], [48, "Heatmor"], [51, "Sizzlipede"], [53, "Squirtle"],
        [57, "Psyduck"], [64, "Seel"], [70, "Horsea"], [72, "Goldeen"], [73, "Seaking"],
        [77, "Magikarp"], [92, "Snom"], [94, "Pikachu"], [97, "Magnemite"], [99, "Voltorb"],
        [101, "Electabuzz"], [105, "Blitzle"], [110, "Helioptile"], [111, "Heliolisk"], [113, "Clefairy"],
        [118, "Slowpoke"], [124, "Drowzee"], [133, "Woobat"], [134, "Swoobat"], [135, "Golett"],
        [137, "Sandshrew"], [139, "Diglett"], [147, "Geodude"], [160, "Mienfoo"], [162, "Clobbopus"],
        [164, "Ekans"], [166, "Nidoran♀"], [169, "Nidoran♂"], [179, "Pawniard"], [189, "Rattata"],
        [190, "Raticate"], [193, "Jigglypuff"], [194, "Wigglytuff"], [198, "Farfetch'd"], [199, "Doduo"],
        [208, "Eevee"], [212, "Minccino"], [214, "Wooloo"], [215, "Dubwool"], [216, "Helix Fossil"]
    ],
    2: [
        [15, "Parasect"], [26, "Pinsir"], [28, "Whimsicott"], [30, "Lilligant"], [43, "Rapidash"],
        [52, "Centiskorch"], [54, "Wartortle"], [58, "Golduck"], [65, "Dewgong"], [71, "Seadra"],
        [81, "Omanyte"], [91, "Bruxish"], [93, "Frosmoth"], [100, "Electrode"], [106, "Zebstrika"],
        [112, "Pincurchin"], [114, "Clefable"], [119, "Slowbro"], [136, "Golurk"], [138, "Sandslash"],
        [140, "Dugtrio"], [148, "Graveler"], [150, "Onix"], [161, "Mienshao"], [163, "Grapploct"],
        [165, "Arbok"], [167, "Nidorina"], [170, "Nidorino"], [180, "Bisharp"], [200, "Dodrio"],
        [202, "Chansey"], [213, "Cinccino"], [220, "Misty"], [224, "Brock"], [226, "Lt. Surge"]
    ],
    3: [
        [7, "Butterfree"], [40, "Arcanine"], [55, "Blastoise"], [78, "Gyarados"], [82, "Omastar"],
        [95, "Raichu"], [98, "Magneton"], [102, "Jolteon"], [103, "Zapdos"], [125, "Hypno"], [149, "Golem"],
        [168, "Nidoqueen"], [171, "Nidoking"], [211, "Snorlax"]
    ],
    4: [
        [41, "Arcanine EX"], [56, "Blastoise EX"], [96, "Pikachu EX"], [104, "Zapdos EX"], [195, "Wigglytuff EX"]
    ],
    5: [
        [232, "Squirtle"], [233, "Gyarados"], [235, "Electrode"], [238, "Diglett"], [240, "Nidoqueen"],
        [241, "Nidoking"], [248, "Eevee"], [250, "Snorlax"]
    ],
    6: [
        [254, "Arcanine EX"], [256, "Blastoise EX"], [259, "Pikachu EX"], [260, "Zapdos EX"], [265, "Wigglytuff EX"],
        [267, "Misty"], [271, "Brock"], [273, "Lt. Surge"], [276, "Zapdos EX"], [279, "Wigglytuff EX"]
    ],
    7: [
        [281, "Pikachu EX"]
    ],
    8: [
        [284, "Charizard EX"], [285, "Pikachu EX"], [286, "Mewtwo EX"]
    ],
    9:[[283, "Mew"]]
};

const paPack = {
    1: [
        [287, "PA-04"], [288, "PA-05"],
        [289, "PA-06"], [290, "PA-07"], [291, "PA-08"], [292, "PA-09"], [293, "PA-10"],
    ],
    2: [
        [307, "PA-16"], [297, "PA-17"], [296, "PA-18"]
    ],
    3: [
        [306, "PA-19"], [305, "PA-20"],[302,"PA-21"],[301,"PA-22"],[300,"PA-23"],
    ],
    4:[
        [298,"PA-24"],[299,"PA-25"],[304,"PA-26"]
    ],
    5:[
        [294,"PA-27"],[295,"PA-28"],[303,"PA-29"]
    ]
};

// Rarity distribution
const rarityDistribution = {
    1: [1.0, 0.0, 0.0],
    2: [0.0, 0.9, 0.6],
    3: [0.0, 0.05, 0.2],
    4: [0.0, 0.01666, 0.06664],
    5: [0.0, 0.02572, 0.10288],
    6: [0.0, 0.005, 0.02],
    7: [0.0, 0.00222, 0.00888],
    8: [0.0, 0.0004, 0.0016],
    9: [0.0, 0.0001, 0.0012]
};

// Helper function: Calc est money spent based on packs opened
function calculateMoneySpent(packsOpened) {
    const goldNeeded = packsOpened * 6;

    const prices = [
        { price: 0.99, gold: 5 },
        { price: 4.99, gold: 26 },
        { price: 9.99, gold: 57 },
        { price: 19.99, gold: 120 },
        { price: 39.99, gold: 250 },
        { price: 99.99, gold: 690 },
    ];

    let remainingGold = goldNeeded;
    let totalCost = 0;

    while (remainingGold > 0) {
        let counter = 0;

        for (let bundle of prices) {
            if (bundle.gold < remainingGold) {
                counter += 1;
                continue;
            }

            if (bundle.gold > remainingGold) {
                const i = counter !== 0 ? counter - 1 : counter;
                totalCost += prices[i].price;
                remainingGold -= prices[i].gold;
                break;
            }

            if (bundle.gold === remainingGold) {
                totalCost += prices[counter].price;
                remainingGold -= prices[counter].gold;
                break;
            }
        }
    }

    return totalCost.toFixed(2); // Return the result rounded to two decimal places
}

let packsOpened = 0;  // Initialize the packs opened counter

// Function to update the counter display
function updatePacksOpened() {
    packsOpened += 1;  // Increment the counter
    document.getElementById('packs-opened').innerText = packsOpened;  // Update the display
}

let fourDiamonds = 0;

function updateFourDiamonds() {
    const fourDiamondText = '4♦:'
    fourDiamonds += 1;  // Increment the counter
    const divText = `${fourDiamondText} ${fourDiamonds}`
    document.getElementById('four-diamonds').innerText = divText;
}

let oneStar = 0;

function updateOneStar() {
    const oneStarText = '1★:'
    oneStar += 1;  
    const divText = `${oneStarText} ${oneStar}`
    document.getElementById('one-star').innerText = divText;
}

let twoStar = 0;

function updateTwoStar() {
    const twoStarText = '2★:'
    twoStar += 1;  
    const divText = `${twoStarText} ${twoStar}`
    document.getElementById('two-star').innerText = divText;
}

let threeStar = 0;

function updateThreeStar() {
    const threeStarText = '3★:'
    threeStar += 1;  
    const divText = `${threeStarText} ${threeStar}`
    document.getElementById('three-star').innerText = divText;
}

let crown = 0;

function updateCrown() {
    const crownText = 'Crown:'
    crown += 1;  
    const divText = `${crownText} ${crown}`
    document.getElementById('Crown').innerText = divText;
}

let pokeGold = 0;

function updatePokeGold() {
    const pokeGoldText = 'Poke Gold Used:'
    pokeGold += 6;  
    const divText = `${pokeGoldText} ${pokeGold}`
    document.getElementById('poke-gold').innerText = divText;
}

let moneySpent = 0;

function updateMoneySpent() {

    moneySpent = calculateMoneySpent(packsOpened)

    const moneySpentText = 'Est Money Spent: $' 
    const divText = `${moneySpentText} ${moneySpent}`
    document.getElementById('money-spent').innerText = divText;
}

let packPoints = 0;

function updatePackPoints() {
    const packPointsText = 'Pack Points:'
    packPoints += 5;  
    const divText = `${packPointsText} ${packPoints}`
    document.getElementById('pack-points').innerText = divText;
}

// Helper function: Weighted random choice
function weightedChoice(weights) {
    const total = weights.reduce((sum, w) => sum + w, 0);
    const rand = Math.random() * total;
    let cumulative = 0;

    for (let i = 0; i < weights.length; i++) {
        cumulative += weights[i];
        if (rand < cumulative) return i;
    }
    return weights.length - 1; // Fallback
}

// Determine rarity
function getRarity(slot) {
    const weights = slot <= 3
        ? Array.from({ length: 8 }, (_, i) => rarityDistribution[i + 1][0]) // Slot 1-3: Use the first weight
        : slot === 4
        ? Array.from({ length: 8 }, (_, i) => rarityDistribution[i + 1][1]) // Slot 4: Use the second weight
        : Array.from({ length: 8 }, (_, i) => rarityDistribution[i + 1][2]); // Slot 5: Use the third weight

    return weightedChoice(weights) + 1;
}

// Function to get the selected pack data based on dropdown
function getSelectedPack() {
    const packSelect = document.getElementById('pack-select');
    switch (packSelect.value) {
        case 'charizard':
            return charizardPack;
        case 'mewtwo':
            return mewtwoPack;
        case 'pikachu':
            return pikachuPack;
        case 'pa':
            return paPack;
        default:
            return charizardPack;
    }
}

// Simulate opening a pack
function openPack() {

    const cards = getSelectedPack()

    const pack = [];
    for (let slot = 1; slot <= 5; slot++) {
        const rarity = getRarity(slot);
        const card = cards[rarity][Math.floor(Math.random() * cards[rarity].length)];
        pack.push({ dex: card[0], name: card[1], rarity });
    }
    
    return pack;
}
// Declare a flag outside the event listener to track if the H2 has been added
let h2Added = false;

// Add new function for animated pack opening
function animatePackOpening() {
    return new Promise(resolve => {
        const packContainer = document.getElementById('card-container');
        packContainer.innerHTML = '';

        const packVisual = document.createElement('div');
        packVisual.className = 'pack-visual loading';
        const selectedPack = document.getElementById('pack-select').value;
        packVisual.style.backgroundImage = `url('../src/favicon/pack_${selectedPack}.jpg')`;
        packContainer.appendChild(packVisual);
        setTimeout(() => {
            packVisual.classList.add('opening');
            setTimeout(() => {
                packVisual.remove();
                resolve();
            }, 800);
        }, 500);
    });
}

// Add a function to update the card history
function updateCardHistory(pack) {
    const historyList = document.getElementById('card-history-list');
    pack.forEach(({ dex, name, rarity }) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Dex: ${dex}, Name: ${name}, Rarity: ${rarity}`;
        historyList.appendChild(listItem);
    });
}

// Add after the existing variable declarations
let userCollection = JSON.parse(localStorage.getItem('userCollection')) || {};

// Function to add cards to collection
function addToCollection(card) {
    const cardKey = `${card.dex}-${card.name}`;
    if (!userCollection[cardKey]) {
        userCollection[cardKey] = {
            dex: card.dex,
            name: card.name,
            rarity: card.rarity,
            count: 0
        };
    }
    userCollection[cardKey].count++;
    saveCollection();
}

// Function to save collection to localStorage
function saveCollection() {
    localStorage.setItem('userCollection', JSON.stringify(userCollection));
}

// Modify the openPack event listener to add cards to collection
document.getElementById('open-pack-button').addEventListener('click', async function() {
    // Disable button during animation
    this.disabled = true;

    // Update stats first
    updatePacksOpened();
    updatePokeGold();
    updateMoneySpent();
    updatePackPoints();

    // Animate pack opening
    await animatePackOpening();

    // Get pack contents
    const pack = openPack();
    
    // Add cards to collection
    pack.forEach(card => addToCollection(card));

    // Update card history
    updateCardHistory(pack);

    const packContainer = document.getElementById('card-container');
    const rarePackContainer = document.getElementById('high-rarity-cards');

    // Reveal cards one by one
    for (let i = 0; i < pack.length; i++) {
        const { dex, name, rarity } = pack[i];
        const cardDiv = document.createElement("div");
        cardDiv.className = `card rarity-${rarity}`;
        
        const formattedDex = dex.toString().padStart(3, '0');
        const image = document.createElement("img");
        image.src = `../../src/images/A1_${formattedDex}_EN.jpeg`;
        image.alt = name;
        
        image.onclick = function() {
            const modal = document.getElementById('card-modal');
            const modalImg = document.getElementById('modal-image');
            modalImg.src = this.src;
            modal.style.display = "block";
        };
        
        cardDiv.appendChild(image);
        cardDiv.style.animation = `cardReveal 0.5s ${i * 0.2}s forwards`;
        cardDiv.style.opacity = '0';
        packContainer.appendChild(cardDiv);

        // Handle rare cards
        if (rarity >= 4) {
            const rareCardDiv = cardDiv.cloneNode(true);
            rareCardDiv.querySelector('img').onclick = function() {
                const modal = document.getElementById('card-modal');
                const modalImg = document.getElementById('modal-image');
                modalImg.src = this.src;
                modal.style.display = "block";
            };
            rarePackContainer.appendChild(rareCardDiv);

            if (!h2Added) {
                const h2 = document.createElement("h2");
                h2.textContent = "Rare Cards Obtained";
                rarePackContainer.insertAdjacentElement('beforebegin', h2);
                h2Added = true;
            }

            // Update rarity counters
            switch(rarity) {
                case 4: updateFourDiamonds(); break;
                case 5: updateOneStar(); break;
                case 6: updateTwoStar(); break;
                case 7: updateThreeStar(); break;
                case 8: updateCrown(); break;
            }
        }
    }

    // Re-enable button after animations
    setTimeout(() => {
        this.disabled = false;
    }, pack.length * 200 + 500);
});

// Sorting pack functionality
function sortPack(pack) {
    return pack.sort((a, b) => a.rarity - b.rarity || a.dex - b.dex);
}

// Add sorting feature to the button
document.getElementById("sort-pack-button").addEventListener("click", () => {
    const packContainer = document.getElementById("card-container");
    let pack = Array.from(packContainer.children).map(cardDiv => {
        const rarity = parseInt(cardDiv.className.split("rarity-")[1]);
        const img = cardDiv.querySelector('img');
        const dex = parseInt(img.src.split('A1_')[1].split('_')[0]);
        return { dex, name: img.alt, rarity };
    });
    pack = sortPack(pack);
    packContainer.innerHTML = "";
    pack.forEach(({ dex, name, rarity }) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = `card rarity-${rarity}`;
        const image = document.createElement("img");
        image.src = `../../src/images/A1_${dex.toString().padStart(3, '0')}_EN.jpeg`;
        image.alt = name;
        image.addEventListener("click", () => openModal(image.src));
        cardDiv.appendChild(image);
        packContainer.appendChild(cardDiv);
    });
});

// Function to open the modal with the image
function openModal(imageSrc) {
    const modal = document.getElementById("card-modal");
    const modalImage = document.getElementById("modal-image");

    modal.style.display = "block"; // Show the modal
    modalImage.src = imageSrc; // Set the source of the modal image

    // Add event listener to close the modal when the user clicks on the close button
    const closeBtn = document.querySelector(".close");
    closeBtn.onclick = function () {
        modal.style.display = "none"; // Hide the modal when clicked
    };

    // Close modal when clicking outside the image
    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// Add pack preview functionality
document.querySelectorAll('.pack-preview').forEach(preview => {
    preview.addEventListener('click', () => {
        // Remove active class from all previews
        document.querySelectorAll('.pack-preview').forEach(p => p.classList.remove('active'));
        // Add active class to clicked preview
        preview.classList.add('active');
        // Update pack select value
        document.getElementById('pack-select').value = preview.dataset.pack;
    });
});

// Add navigation active state
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Add reset history functionality
document.getElementById('reset-history').addEventListener('click', function() {
    // Clear the card history list
    const historyList = document.getElementById('card-history-list');
    historyList.innerHTML = '';
    
    // Optional: Add confirmation message
    const confirmMessage = document.createElement('li');
    confirmMessage.textContent = 'History has been cleared';
    confirmMessage.style.color = '#ff6b6b';
    confirmMessage.style.fontStyle = 'italic';
    historyList.appendChild(confirmMessage);
    
    // Remove confirmation message after 2 seconds
    setTimeout(() => {
        confirmMessage.remove();
    }, 2000);
});

// Loading Screen Handler
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// Achievement System
const achievements = {
    FIRST_PACK: { title: 'First Steps', description: 'Open your first pack', icon: '🎉' },
    RARE_PULL: { title: 'Lucky!', description: 'Pull a rare card', icon: '✨' },
    COLLECTION_MILESTONE: { title: 'Collector', description: 'Collect 50 unique cards', icon: '📚' }
};

function showAchievement(achievementId) {
    const achievement = achievements[achievementId];
    const achievementElement = document.createElement('div');
    achievementElement.className = 'achievement';
    achievementElement.innerHTML = `
        <div class="achievement-icon">${achievement.icon}</div>
        <div class="achievement-content">
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        </div>
    `;
    document.body.appendChild(achievementElement);
    setTimeout(() => achievementElement.classList.add('show'), 100);
    setTimeout(() => {
        achievementElement.classList.remove('show');
        setTimeout(() => achievementElement.remove(), 300);
    }, 3000);
}

// Enhanced Card Reveal Animation
function revealCard(cardElement, index) {
    setTimeout(() => {
        cardElement.classList.add('reveal');
        if (cardElement.dataset.rarity >= 4) {
            createParticleEffect(cardElement);
        }
    }, index * 200);
}

// Particle Effect System
function createParticleEffect(element) {
    const colors = ['#FFD700', '#FFA500', '#FF4500'];
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.setProperty('--tx', `${(Math.random() - 0.5) * 200}px`);
        particle.style.setProperty('--ty', `${(Math.random() - 0.5) * 200}px`);
        particle.style.setProperty('--r', `${Math.random() * 360}deg`);
        element.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

// Enhanced Pack Selection
document.querySelectorAll('.pack-preview').forEach(pack => {
    pack.addEventListener('click', () => {
        document.querySelectorAll('.pack-preview').forEach(p => {
            p.style.transform = 'scale(0.95)';
            p.style.opacity = '0.7';
        });
        pack.style.transform = 'scale(1.05)';
        pack.style.opacity = '1';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Settings Modal Controls
    const settingsModal = document.getElementById('settings-modal');
    const settingsBtn = document.getElementById('settings-button');
    const closeSettingsBtn = document.querySelector('.close-settings');
    
    settingsBtn.addEventListener('click', () => {
        settingsModal.style.display = 'flex';
    });

    closeSettingsBtn.addEventListener('click', () => {
        settingsModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            settingsModal.style.display = 'none';
        }
    });

    // Volume Controls
    const bgmVolume = document.getElementById('bgm-volume');
    const toggleBGM = document.getElementById('toggle-bgm');

    bgmVolume.value = localStorage.getItem('bgmVolume') || 0.3;

    bgmVolume.addEventListener('input', (e) => setVolume('bgm', e.target.value));
    toggleBGM.addEventListener('click', () => toggleMute('bgm'));
});

// Add function to open multiple packs
async function openMultiplePacks(count) {
    const packContainer = document.getElementById('card-container');
    const rarePackContainer = document.getElementById('high-rarity-cards');
    let h2Added = false;
    
    // Clear containers
    packContainer.innerHTML = '';
    rarePackContainer.innerHTML = '';
    
    // Disable both buttons during opening
    const openPackButton = document.getElementById('open-pack-button');
    const openTenPacksButton = document.getElementById('open-ten-packs-button');
    openPackButton.disabled = true;
    openTenPacksButton.disabled = true;

    // Update stats first
    for (let i = 0; i < count; i++) {
        updatePacksOpened();
        updatePokeGold();
        updateMoneySpent();
        updatePackPoints();
    }

    // Animate pack opening once
    await animatePackOpening();

    // Open all packs and collect cards
    const allCards = [];
    for (let i = 0; i < count; i++) {
        const pack = openPack(); // This should return 5 cards per pack
        allCards.push(...pack);
        
        // Add cards to collection and update history
        pack.forEach(card => {
            addToCollection(card);
        });
    }
    
    // Update card history once for all cards
    updateCardHistory(allCards);

    // Sort all cards by rarity (highest to lowest)
    allCards.sort((a, b) => b.rarity - a.rarity);

    // Create and append card elements with staggered animation
    allCards.forEach((card, index) => {
        const { dex, name, rarity } = card;
        const cardDiv = document.createElement("div");
        cardDiv.className = `card rarity-${rarity}`;
        
        const formattedDex = dex.toString().padStart(3, '0');
        const image = document.createElement("img");
        image.src = `./src/images/A1_${formattedDex}_EN.jpeg`;
        image.alt = name;
        
        image.onclick = function() {
            const modal = document.getElementById('card-modal');
            const modalImg = document.getElementById('modal-image');
            modalImg.src = this.src;
            modal.style.display = "block";
        };
        
        cardDiv.appendChild(image);
        cardDiv.style.animation = `cardReveal 0.5s ${index * 0.1}s forwards`;
        cardDiv.style.opacity = '0';
        packContainer.appendChild(cardDiv);

        // Handle rare cards (rarity 4 or higher)
        if (rarity >= 4) {
            const rareCardDiv = cardDiv.cloneNode(true);
            rareCardDiv.querySelector('img').onclick = function() {
                const modal = document.getElementById('card-modal');
                const modalImg = document.getElementById('modal-image');
                modalImg.src = this.src;
                modal.style.display = "block";
            };
            rarePackContainer.appendChild(rareCardDiv);

            if (!h2Added) {
                const h2 = document.createElement("h2");
                h2.textContent = "Rare Cards Obtained";
                rarePackContainer.insertAdjacentElement('beforebegin', h2);
                h2Added = true;
            }

            // Update rarity counters
            switch(rarity) {
                case 4: updateFourDiamonds(); break;
                case 5: updateOneStar(); break;
                case 6: updateTwoStar(); break;
                case 7: updateThreeStar(); break;
                case 8: updateCrown(); break;
            }
        }
    });

    // Re-enable buttons after animations
    setTimeout(() => {
        openPackButton.disabled = false;
        openTenPacksButton.disabled = false;
    }, allCards.length * 100 + 500);
}
// Add event listener for the ten packs button
document.getElementById('open-ten-packs-button').addEventListener('click', function() {
    openMultiplePacks(10); // Open 10 packs at once
});


// Update the card creation function to use this
function createCard(cardId, cardName, rarity, selectedPack) {
    const card = document.createElement('div');
    card.className = `card rarity-${rarity}`;
    
    const img = document.createElement('img');
    img.src = getCardImagePath(cardId, cardName, selectedPack);
    img.alt = cardName;
    
    // ... rest of the card creation code ...
}

