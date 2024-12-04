// Initialize collection display
document.addEventListener('DOMContentLoaded', () => {
    displayCollection();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('rarity-filter').addEventListener('change', displayCollection);
    document.getElementById('sort-collection').addEventListener('click', displayCollection);
    document.getElementById('reset-collection').addEventListener('click', resetCollection);
}

function resetCollection() {
    if (confirm('Are you sure you want to reset your collection? This cannot be undone.')) {
        localStorage.removeItem('userCollection');
        clearCollectionDisplay();
        resetStats();
        showResetConfirmation();
    }
}

function clearCollectionDisplay() {
    const container = document.getElementById('collection-container');
    container.innerHTML = '';
}

function resetStats() {
    document.getElementById('unique-cards').textContent = '0';
    document.getElementById('total-cards').textContent = '0';
    document.getElementById('completion-rate').textContent = '0%';
}

function showResetConfirmation() {
    const container = document.getElementById('collection-container');
    const message = document.createElement('div');
    message.textContent = 'Collection has been reset';
    message.style.textAlign = 'center';
    message.style.color = '#ff6b6b';
    message.style.padding = '20px';
    container.appendChild(message);
}

function displayCollection() {
    const container = document.getElementById('collection-container');
    const filter = document.getElementById('rarity-filter').value;
    const collection = JSON.parse(localStorage.getItem('userCollection')) || {};
    
    container.innerHTML = '';
    let cards = Object.values(collection);
    cards = applyRarityFilter(cards, filter);
    cards = sortCards(cards);
    createCardElements(cards, container);
}

function applyRarityFilter(cards, filter) {
    return filter !== 'all' ? cards.filter(card => card.rarity === parseInt(filter)) : cards;
}

function sortCards(cards) {
    return cards.sort((a, b) => b.rarity - a.rarity || a.dex - b.dex);
}

function createCardElements(cards, container) {
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = `card rarity-${card.rarity}`;
        cardDiv.innerHTML = `
            <img src="../../src/images/A1_${card.dex.toString().padStart(3, '0')}_EN.jpeg" 
                 alt="${card.name}" 
                 onclick="openModal(this.src)">
            <div class="card-details">
                <span class="card-name">${card.name}</span>
                <span class="card-count">×${card.count}</span>
            </div>
        `;
        container.appendChild(cardDiv);
    });
}