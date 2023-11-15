class ItemsCards {
        static items = [];
        static sortedItems = [];

        sortItems() {
                let selectSortingType = document.getElementById("sort-box");

                switch (selectSortingType.selectedIndex) {
                        case 0:
                                ItemsCards.items.sort((a, b) => a.rating - b.rating);
                                ItemsCards.sortedItems = ItemsCards.items;
                                break;

                        case 1:
                                ItemsCards.items.sort((a, b) => b.price - a.price);
                                ItemsCards.sortedItems = ItemsCards.items;
                                break;

                        case 2:
                                ItemsCards.items.sort((a, b) => a.price - b.price);
                                ItemsCards.sortedItems = ItemsCards.items;
                                break;
                }

                this.#deleteItemsCard();
        }

        #deleteItemsCard() {
                let productsContainer = document.getElementById('products-container');

                while (productsContainer.children.length > 1) {
                        productsContainer.lastElementChild.remove();
                }

                ItemsCards.items = [];

                for (let i = 0; i < ItemsCards.sortedItems.length; i++) {
                        ItemsCards.sortedItems[i].createItem();
                }

        }
}

class Item {
        constructor({ name, price, rating, description, mainImagePath, additionalImagesPath, /*characteristic,*/ id }) {
                this.name = name;
                this.price = price;
                this.rating = rating;
                this.description = description;
                this.mainImagePath = mainImagePath;
                this.additionalImagesPath = additionalImagesPath;
                //this.characteristic = characteristic;
                this.id = id;
        }

        createItem() {
                let productsItemCreate = document.createElement('div');
                let productsContainer = document.getElementById('products-container');
                productsItemCreate.setAttribute('class', "products-item");
                productsItemCreate.setAttribute('id', `${this.id}`);

                //border of text name item
                this.changedNameOfItem = this.name.substring(0, 46);

                //border of text description item
                this.changedDescriptionOfItem = this.description.substring(0, 244);

                //create HTML container with data of object
                productsItemCreate.innerHTML = `
                        <div class="buy-or-add-wishlist">
                <div class="img-wrapper">
                        <img src=${this.mainImagePath} alt="item-${this.id}">
                </div>
                <div class="info-text">
                        <h2>${this.changedNameOfItem}</h2>
                </div>
                <h3 class="price">${this.price} USD</h3>
                <div id="rating">
                        <img src="Images/star_rating.png" alt="rating">
                        <img src="Images/star_rating.png" alt="rating">
                        <img src="Images/star_rating.png" alt="rating">
                        <img src="Images/star_rating.png" alt="rating">
                        <img src="Images/star_rating.png" alt="rating">
                </div>
                <div class="products-btns">
                        <button id="btn-buy">Купити</button>
                        <button><img src="Images/Frame-2.png"></button>
                </div>
                <div class="products-item-hidden">
                        <div class="info-text">
                                <b>Характеристика:</b><br><p>${this.changedDescriptionOfItem}</p></br>
                        </div>
                </div>
                </div>`;

                productsContainer.appendChild(productsItemCreate);

                this.#addToArray();
                this.#setRating();

                //// find item cart
                let productsItem = document.getElementsByClassName("products-item")[this.id];

                //// display none item cart
                productsItem.style.setProperty('--state', "none");

                //// hover make display none
                productsItem.addEventListener("mouseover", () => {
                        productsItem.style.setProperty('--state', "block");
                        let firstNesting = productsItem.children[0];
                        let secondNesting = firstNesting.children[0];
                        secondNesting.children[0].setAttribute("src", this.additionalImagesPath[0]);
                });


                productsItem.addEventListener("mouseout", () => {
                        productsItem.style.setProperty('--state', "none");
                        let firstNesting = productsItem.children[0];
                        let secondNesting = firstNesting.children[0];
                        secondNesting.children[0].setAttribute("src", this.mainImagePath);
                });
        }

        #setRating() {
                let productsItems = document.getElementsByClassName("products-item")[this.id].children[0];
                let ratingContainer = productsItems.children[3];

                for (let i = 0; i < this.rating; i++) {
                        ratingContainer.children[i].style.filter = "grayscale(0)";
                }
        }

        #addToArray() {
                ItemsCards.items.push(this);
        }
}

laptop1 = new Item(
        {
                name: `Ноутбук Lenovo IdeaPad 3 15IAU7 (82RK00S0RA) Arctic Grey / 15.6" IPS Full HD / Intel Core i5-1235U / RAM 8 ГБ / SSD 512 ГБ"`,
                price: 1500,
                rating: 4,
                description: `"Екран 16" IPS(1920x1200) FHD + 165 Гц, матовий / Intel Core i5 - 13450HX(3.4 - 4.6 ГГц)
                        / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 4060, 8 ГБ Bluetooth / веб - камера
                        / без ОС / 2.5 кг / сірий`,
                mainImagePath: "Images/item-1.1.webp",
                additionalImagesPath: [
                        "Images/item-1.2.webp",
                        "Images/item-1.3.webp",
                ],
                id: 0
        });

laptop1.createItem();

laptop2 = new Item(
        {
                name: `Ноутбук Apple MacBook Air 13" M1 8/256GB 2020 (MGN63) Space Gray"`,
                price: 2000,
                rating: 2,
                description: `"Екран 13.3" Retina (2560x1600) WQXGA, глянсовий / Apple M1 / RAM 8 ГБ / 
                                SSD 256 ГБ / Apple M1 Graphics / Wi-Fi / Bluetooth / macOS Big Sur / 1.29 кг / сірий`,
                mainImagePath: "Images/item-2.1.webp",
                additionalImagesPath: [
                        "Images/item-2.2.webp",
                        "Images/item-2.3.webp",
                ],
                id: 1
        });

laptop2.createItem();

laptop3 = new Item(
        {
                name: `Ноутбук Acer Nitro 5 AN517-41-R8F9 (NH.QBHEU.00F) Shale Black / 
                17.3” IPS (2560x1440) 165 Гц / AMD Ryzen 7 5800H / RAM 32 ГБ / SSD 1 ТБ / nVidia GeForce RTX 3080, 8 ГБ / RGB подсветка`,
                price: 100,
                rating: 5,
                description: `"Екран 17.3” IPS (2560x1440) WQHD 165 Гц, матовий / AMD Ryzen 7 5800H (3.2 - 4.4 ГГц) / 
                               RAM 32 ГБ / SSD 1 ТБ / nVidia GeForce RTX 3080, 8 ГБ / веб-камера / без ОС / 2.7 кг / чорний`,
                mainImagePath: "Images/item-3.1.webp",
                additionalImagesPath: [
                        "Images/item-3.2.webp",
                        "Images/item-3.3.webp",
                ],
                id: 2
        });

laptop3.createItem();


