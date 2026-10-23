const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=400&auto=format&fit=crop",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed."
    },
    {
        id: 2,
        title: "Diner Double",
        category: "lunch",
        price: 13.99,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop",
        desc: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats."
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400&auto=format&fit=crop",
        desc: "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        id: 4,
        title: "Country Delight",
        category: "breakfast",
        price: 20.99,
        img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=400&auto=format&fit=crop",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mikshk truffaut."
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "lunch",
        price: 22.99,
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=400&auto=format&fit=crop",
        desc: "Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up."
    },
    {
        id: 6,
        title: "Oreo Dream",
        category: "shakes",
        price: 18.99,
        img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=400&auto=format&fit=crop",
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday."
    }
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");

let activeCategory = "all";

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
    if (menuItems.length === 0) {
        sectionCenter.innerHTML = `<h3 class="not-found">Not Found</h3>`;
        return;
    }

    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
                    <img src="${item.img}" alt="${item.title}" class="photo" />
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function filterMenu() {
    const query = searchInput.value.toLowerCase().trim();

    const filteredMenu = menu.filter(function (item) {
        const matchesCategory = activeCategory === "all" || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    displayMenuItems(filteredMenu);
}

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        filterBtns.forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        activeCategory = e.currentTarget.dataset.id;
        filterMenu();
    });
});

searchInput.addEventListener("keyup", filterMenu);