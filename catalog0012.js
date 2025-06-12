// Wreaths data
const wreaths = [
    {
        id: 1,
        name: "Венок-сердце с белыми розами",
        price: 4500,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok3.jpg-hq3REN33KaniqOHW6jh1jFWf73fl2U.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Изысканный венок в форме сердца из белых роз с зеленой атласной лентой"
    },
    {
        id: 2,
        name: "Венок с серебряной лентой",
        price: 3800,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok5.jpg-v8FeXpvIpaXJ1zg1mCuSMug6oamVNJ.jpeg",
        category: "Классические",
        rating: 5,
        description: "Торжественный венок с красными розами, белыми цветами и серебряной лентой"
    },
    {
        id: 3,
        name: "Венок с ирисами и розами",
        price: 4200,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok4.jpg-WsuBwe2bNflUqs7OyXDUcrXMZlXPDD.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Элегантный венок с белыми розами и фиолетовыми ирисами в серебряном обрамлении"
    },
    {
        id: 4,
        name: "Венок с синими гвоздиками",
        price: 2800,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photovenok1.jpg-iK8oehTMGFyCV3ZnuPYTpvhjQqjTsm.jpeg",
        category: "Традиционные",
        rating: 4,
        description: "Классический венок с синими гвоздиками и белой лентой"
    },
    {
        id: 5,
        name: "Венок с красными розами и хризантемами",
        price: 3600,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok2.jpg-xPODORwEClCmYFO64248DBwMih80dV.jpeg",
        category: "Классические",
        rating: 5,
        description: "Яркий венок с красными розами, белыми хризантемами и красной лентой"
    },
    {
        id: 6,
        name: "Венок с желтыми цветами",
        price: 3400,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok7.jpg-5arFdgRO6plXExpwI945VnZ9xWGSjh.jpeg",
        category: "Сезонные",
        rating: 4,
        description: "Солнечный венок с желтыми и красными цветами в красном обрамлении"
    },
    {
        id: 7,
        name: "Венок с фиолетовыми гвоздиками",
        price: 4000,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok9.jpg-PKBmb84cJKHKpogqUP7gkuYuY0zDos.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Роскошный венок с фиолетовыми гвоздиками и белыми лилиями"
    },
    {
        id: 8,
        name: "Венок-сердце с черной лентой",
        price: 5200,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok10.jpg-shCQqaA9o21HqdRZVwhalh0qTUpsQ1.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Траурный венок в форме сердца с красными гвоздиками и черной лентой"
    },
    {
        id: 9,
        name: "Венок-сердце с красными гвоздиками",
        price: 4800,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok8.jpg-M9JpMUMIsv7JfeooIhQZjCcJfSmfrn.jpeg",
        category: "Традиционные",
        rating: 5,
        description: "Классический венок-сердце с белыми розами и красными гвоздиками"
    },
    {
        id: 10,
        name: "Венок-сердце с красными розами",
        price: 5500,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok11.jpg-cdIrZbWawgIMpSH4UfnVoBYmqlLy1O.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Роскошный венок-сердце с красными розами и белыми цветами в красном обрамлении"
    },
    {
        id: 11,
        name: "Классический венок с белыми лилиями",
        price: 3900,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok13.jpg-b5BWJqa2g5qq9sr0OuIQ1JOn5iIR2G.jpeg",
        category: "Классические",
        rating: 5,
        description: "Элегантный венок с белыми лилиями и зеленой листвой"
    },
    {
        id: 12,
        name: "Венок-сердце с белыми гвоздиками",
        price: 4300,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok14.jpg-Pg2TvU0N57EPfTQp7OigR840oYZWAP.jpeg",
        category: "Традиционные",
        rating: 5,
        description: "Нежный венок-сердце с белыми гвоздиками в красном обрамлении"
    },
    {
        id: 13,
        name: "Венок-сердце с лилиями",
        price: 4700,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok12.jpg-cD7jamieeJoCKTPKrqrKrDeA513TsE.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Изысканный венок-сердце с белыми гвоздиками и лилиями в красном обрамлении"
    },
    {
        id: 14,
        name: "Большой элитный венок с белыми розами",
        price: 7500,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok15.jpg-OPlJz0IpVnoddbyuC4GbgHL2Iywc4c.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Роскошный большой венок с белыми розами и лилиями в белом обрамлении с золотой каймой"
    },
    {
        id: 15,
        name: "Венок-сердце с красными гвоздиками",
        price: 4600,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok18.jpg-VJQscMMILsZm24KwvCYZf0BMVKp9Dc.jpeg",
        category: "Традиционные",
        rating: 5,
        description: "Классический венок-сердце с красными гвоздиками и белыми розами в черном обрамлении"
    },
    {
        id: 16,
        name: "Венок-сердце с хризантемами",
        price: 4400,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok19.jpg-wevHUbiUE0DXL4cbvwwZhabwsNutgE.jpeg",
        category: "Классические",
        rating: 5,
        description: "Красивый венок-сердце с красными розами и белыми хризантемами"
    },
    {
        id: 17,
        name: "Большой овальный венок с белыми розами",
        price: 6800,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok17.jpg-S9ISluwWTmVy0OcWvv0JuwDYhWgggc.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Элитный большой овальный венок с белыми розами в серебряном обрамлении"
    },
    {
        id: 18,
        name: "Овальный венок с красными розами",
        price: 5900,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok20.jpg-QSU6GXejyMAsfxrxyNVDDmcmYi4vsG.jpeg",
        category: "Классические",
        rating: 5,
        description: "Торжественный овальный венок с красными розами и белыми лилиями в серебряном обрамлении"
    },
    {
        id: 19,
        name: "Большой венок с желтыми розами",
        price: 6200,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok16.jpg-j0Hdzhfx2sAtKIP1ESLF5gRvLolIER.jpeg",
        category: "Сезонные",
        rating: 5,
        description: "Яркий большой овальный венок с желтыми и белыми розами в черном обрамлении"
    },
    {
        id: 20,
        name: "Овальный венок 'Память'",
        price: 4900,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok22.jpg-tJQKCwBtiQndSbqOtllyIYFutkg4Gz.jpeg",
        category: "Классические",
        rating: 5,
        description: "Элегантный овальный венок с белыми хризантемами и красными цветами в бордовом обрамлении"
    },
    {
        id: 21,
        name: "Овальный венок 'Солнечный'",
        price: 5300,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok24.jpg-6FBWeEHqcD80nPBHxHi7xyrq9tCyQz.jpeg",
        category: "Сезонные",
        rating: 5,
        description: "Яркий овальный венок с желтыми и красными гвоздиками в красном атласном обрамлении"
    },
    {
        id: 22,
        name: "Овальный венок 'Торжественный'",
        price: 6100,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok25.jpg-X575OVACdtCxFOVE3Ru1ZGK09c9SzY.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Роскошный овальный венок с красными гвоздиками и белыми лилиями в золотом обрамлении"
    },
    {
        id: 23,
        name: "Овальный венок 'Классика'",
        price: 5700,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok23.jpg-ZTStU4hVh4uH6J1ls5GiCnbF9Gutwl.jpeg",
        category: "Классические",
        rating: 5,
        description: "Изысканный овальный венок с красными розами и белыми гвоздиками в золотом обрамлении"
    },
    {
        id: 24,
        name: "Овальный венок 'Роскошь'",
        price: 7200,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok21.jpg-19BoHoWTGYFQjsxt47PgTkoDORj9xL.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Премиальный овальный венок с множеством красных роз и белыми цветами в золотом обрамлении"
    },
    {
        id: 25,
        name: "Овальный венок 'Золотой'",
        price: 6500,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok29.jpg-2tcpM6eYIMn4UXYq3kEZnbKafLv9dA.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Роскошный овальный венок с желтыми розами и белыми каллами в золотом обрамлении"
    },
    // Новые венки
    {
        id: 41,
        name: "Овальный венок 'Белоснежная элегантность'",
        price: 6300,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok3333.jpg-o4K9VnI8jOII6fkAj7iw6AIc7jQqRJ.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Роскошный овальный венок с белыми розами и черными траурными лентами в белом обрамлении с золотой каймой"
    },
    {
        id: 42,
        name: "Круглый венок 'Солнечное сияние'",
        price: 5700,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok1111.jpg-CJSzksMwFME93KXXMttw0cgijm2hCt.jpeg",
        category: "Сезонные",
        rating: 5,
        description: "Яркий круглый венок с желтыми розами в центре и черным декоративным обрамлением с золотыми элементами"
    },
    {
        id: 43,
        name: "Овальный венок 'Синяя мечта'",
        price: 6100,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok4444.jpg-t8vttJbpZElYY4Z58tyIVlixaF0WTL.jpeg",
        category: "Элитные",
        rating: 5,
        description: "Изысканный овальный венок с белыми розами по краю и синими розами в центре в белом обрамлении с золотой каймой"
    },
    {
        id: 44,
        name: "Венок-цветок 'Белая нежность'",
        price: 4200,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok2222.jpg-8Qbu8VjxnsgNKqPSle5BOOfaaNkjlc.jpeg",
        category: "Традиционные",
        rating: 5,
        description: "Необычный венок в форме цветка с белыми гвоздиками в центре и зеленым декоративным обрамлением"
    },
    {
        id: 45,
        name: "Венок-подкова 'Красная страсть'",
        price: 4800,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venok5555.jpg-bNXT8dtDHLhdsCbAotE5T6qwCLfdhL.jpeg",
        category: "Классические",
        rating: 5,
        description: "Элегантный венок в форме подковы с красными лилиями и белыми розами в зеленом обрамлении"
    }
];

let filteredWreaths = [...wreaths];

// DOM elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const catalogGrid = document.getElementById('catalogGrid');
const resultsCount = document.getElementById('resultsCount');

// Initialize catalog
document.addEventListener('DOMContentLoaded', function() {
    renderWreaths(filteredWreaths);
    updateResultsCount();
    
    // Add event listeners
    searchInput.addEventListener('input', filterWreaths);
    categoryFilter.addEventListener('change', filterWreaths);
    priceFilter.addEventListener('change', filterWreaths);
});

// Filter wreaths function
function filterWreaths() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPriceRange = priceFilter.value;
    
    filteredWreaths = wreaths.filter(wreath => {
        const matchesSearch = wreath.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || wreath.category === selectedCategory;
        
        let matchesPrice = true;
        if (selectedPriceRange === 'low') {
            matchesPrice = wreath.price < 3000;
        } else if (selectedPriceRange === 'medium') {
            matchesPrice = wreath.price >= 3000 && wreath.price < 5000;
        } else if (selectedPriceRange === 'high') {
            matchesPrice = wreath.price >= 5000;
        }
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    renderWreaths(filteredWreaths);
    updateResultsCount();
}

// Render wreaths function
function renderWreaths(wreathsToRender) {
    if (wreathsToRender.length === 0) {
        catalogGrid.innerHTML = `
            <div class="no-results">
                <h3>По вашему запросу ничего не найдено</h3>
                <p>Попробуйте изменить параметры поиска</p>
                <button class="btn btn-primary" onclick="resetFilters()">Сбросить фильтры</button>
            </div>
        `;
        return;
    }
    
    catalogGrid.innerHTML = wreathsToRender.map(wreath => `
        <div class="product-card" style="animation-delay: ${Math.random() * 0.5}s">
            <div class="product-image">
                <img src="${wreath.image}" alt="${wreath.name}" loading="lazy">
            </div>
            <div class="product-content">
                <span class="product-category">${wreath.category}</span>
                <h4 class="product-title">${wreath.name}</h4>
                <p class="product-description">${wreath.description}</p>
                <div class="product-rating">
                    ${generateStars(wreath.rating)}
                    <span>(${wreath.rating})</span>
                </div>
                <div class="product-price">${wreath.price} ₽</div>
            </div>
        </div>
    `).join('');
    
    // Re-observe new elements for animation
    const newCards = catalogGrid.querySelectorAll('.product-card');
    newCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Generate stars function
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    return stars;
}

// Update results count
function updateResultsCount() {
    const count = filteredWreaths.length;
    let text = `Найдено ${count}`;
    
    if (count === 1) {
        text += ' венок';
    } else if (count >= 2 && count <= 4) {
        text += ' венка';
    } else {
        text += ' венков';
    }
    
    resultsCount.textContent = text;
}

// Reset filters function
function resetFilters() {
    searchInput.value = '';
    categoryFilter.value = 'all';
    priceFilter.value = 'all';
    filterWreaths();
}

// Add CSS for no results
const style = document.createElement('style');
style.textContent = `
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        background-color: #18181b;
        border: 1px solid #27272a;
        border-radius: 0.5rem;
        animation: fadeInUp 0.6s ease-out;
    }
    
    .no-results h3 {
        color: #f4f4f5;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    
    .no-results p {
        color: #a1a1aa;
        margin-bottom: 1.5rem;
    }
`;
document.head.appendChild(style);