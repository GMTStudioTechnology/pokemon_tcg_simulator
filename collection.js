// Initialize collection display
document.addEventListener('DOMContentLoaded', () => {
    displayCollection();
    
    // Add filter functionality
    document.getElementById('rarity-filter').addEventListener('change', displayCollection);
    document.getElementById('sort-collection').addEventListener('click', displayCollection);
    
    // Add reset collection functionality
    document.getElementById('reset-collection').addEventListener('click', function() {
        if (confirm('Are you sure you want to reset your collection? This cannot be undone.')) {
            // Clear the collection from localStorage
            localStorage.removeItem('userCollection');
            
            // Clear the display
            const container = document.getElementById('collection-container');
            container.innerHTML = '';
            
            // Reset stats
            document.getElementById('unique-cards').textContent = '0';
            document.getElementById('total-cards').textContent = '0';
            document.getElementById('completion-rate').textContent = '0%';
            
            // Optional: Show confirmation message
            const message = document.createElement('div');
            message.textContent = 'Collection has been reset';
            message.style.textAlign = 'center';
            message.style.color = '#ff6b6b';
            message.style.padding = '20px';
            container.appendChild(message);
        }
    });
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