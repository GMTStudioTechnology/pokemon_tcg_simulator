// Initialize collection display
document.addEventListener('DOMContentLoaded', () => {
    displayCollection();
    
    // Add filter functionality
    document.getElementById('rarity-filter').addEventListener('change', displayCollection);
    document.getElementById('sort-collection').addEventListener('click', displayCollection);
});

function displayCollection() {
    const container = document.getElementById('collection-container');
    const filter = document.getElementById('rarity-filter').value;
    const collection = JSON.parse(localStorage.getItem('userCollection')) || {};
    
    container.innerHTML = '';
    
    // Convert collection object to array for sorting
    let cards = Object.values(collection);
    
    // Apply rarity filter
    if (filter !== 'all') {
        cards = cards.filter(card => card.rarity === parseInt(filter));
    }
    
    // Sort cards by rarity and dex number
    cards.sort((a, b) => b.rarity - a.rarity || a.dex - b.dex);
    
    // Create card elements
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = `card rarity-${card.rarity}`;
        
        const cardContent = `
            <img src="./src/images/A1_${card.dex.toString().padStart(3, '0')}_EN.jpeg" 
                 alt="${card.name}" 
                 onclick="openModal(this.src)">
            <div class="card-details">
                <span class="card-name">${card.name}</span>
                <span class="card-count">×${card.count}</span>
            </div>
        `;
        
        cardDiv.innerHTML = cardContent;
        container.appendChild(cardDiv);
    });
} 