class ItemsCards {
        static items = [];
        static sortedItems = [];
        static filteredItems = [];
        static filterValues = [[], []];

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

                this.#deleteItemsCardBySorted();
        }


        showItemsCount() {
                console.log(ItemsCards.items);
                console.log(ItemsCards.filteredItems);
                console.log(ItemsCards.filterValues);
        }

        filterItems() {
                let catalogElements = document.getElementById('catalog').children;
                let brandsElements = document.getElementById('brands').children;

                for (let i = 0; i < catalogElements.length; i++) {
                        if (catalogElements[i].tagName == "INPUT") {
                                if (catalogElements[i].checked == true) {
                                        switch (catalogElements[i].id) {
                                                case "1":
                                                        //console.log("id 1");
                                                        break;

                                                case "2":
                                                        if (!ItemsCards.filterValues[0].includes("#")) {
                                                                ItemsCards.filterValues[0].push("#");
                                                        }
                                                        break;

                                                case "3":
                                                        if (!ItemsCards.filterValues[0].includes("Phone2")) {
                                                                ItemsCards.filterValues[0].push("Phone2");
                                                        }
                                                        break;

                                                case "4":
                                                        if (!ItemsCards.filterValues[0].includes("Laptop")) {
                                                                ItemsCards.filterValues[0].push("Laptop");
                                                        }
                                                        break;
                                        }
                                }


                                else {
                                        switch (catalogElements[i].id) {
                                                case "2":
                                                        let indexToRemove = ItemsCards.filterValues[0].indexOf("#");
                                                        if (indexToRemove !== -1) {
                                                                ItemsCards.filterValues[0].splice(indexToRemove, 1);
                                                        }
                                                        break;

                                                case "3":
                                                        let indexToRemove2 = ItemsCards.filterValues[0].indexOf("Phone2");
                                                        if (indexToRemove2 !== -1) {
                                                                ItemsCards.filterValues[0].splice(indexToRemove2, 1);
                                                        }
                                                        break;

                                                case "4":
                                                        let indexToRemove3 = ItemsCards.filterValues[0].indexOf("Laptop");
                                                        if (indexToRemove3 !== -1) {
                                                                ItemsCards.filterValues[0].splice(indexToRemove3, 1);
                                                        }
                                                        break;
                                        }
                                }
                        }
                }


                for (let i = 0; i < brandsElements.length; i++) {
                        if (brandsElements[i].tagName == "INPUT") {
                                if (brandsElements[i].checked == true) {
                                        switch (brandsElements[i].id) {
                                                case "1":
                                                        //console.log("id 1");
                                                        break;

                                                case "2":
                                                        console.log("id 1")
                                                        if (!ItemsCards.filterValues[1].includes("Lenovo")) {
                                                                ItemsCards.filterValues[1].push("Lenovo");
                                                        }
                                                        
                                                        break;

                                                case "3":
                                                        if (!ItemsCards.filterValues[1].includes("Acer")) {
                                                                ItemsCards.filterValues[1].push("Acer");
                                                        }
                                                        break;

                                                case "4":
                                                        /*if (!ItemsCards.filterValues.includes("Laptop")) {
                                                                ItemsCards.filterValues.push("Laptop");
                                                        }*/
                                                        break;
                                        }
                                }


                                else {
                                        switch (brandsElements[i].id) {
                                                case "2":
                                                        /*let indexToRemove = ItemsCards.filterValues[1].indexOf("Lenovo");
                                                        if (indexToRemove !== -1) {
                                                                ItemsCards.filterValues.splice(indexToRemove, 1);
                                                        }*/

                                                        if (Array.isArray(ItemsCards.filterValues[1])) {
                                                                let indexToRemove = ItemsCards.filterValues[1].indexOf("Lenovo");
                                                                if (indexToRemove !== -1) {
                                                                    ItemsCards.filterValues[1].splice(indexToRemove, 1);
                                                                }
                                                            }
                                                        break;

                                                case "3":
                                                        /*let indexToRemove2 = ItemsCards.filterValues[1].indexOf("Acer");
                                                        if (indexToRemove2 !== -1) {
                                                                ItemsCards.filterValues.splice(indexToRemove2, 1);
                                                        }*/

                                                        if (Array.isArray(ItemsCards.filterValues[1])) {
                                                                let indexToRemove = ItemsCards.filterValues[1].indexOf("Acer");
                                                                if (indexToRemove !== -1) {
                                                                    ItemsCards.filterValues[1].splice(indexToRemove, 1);
                                                                }
                                                            }
                                                        break;

                                                case "4":
                                                        /*let indexToRemove3 = ItemsCards.filterValues.indexOf("Laptop");
                                                        if (indexToRemove3 !== -1) {
                                                                ItemsCards.filterValues.splice(indexToRemove3, 1);
                                                        }*/
                                                        break;
                                        }
                                }
                        }
                }


                if (ItemsCards.filteredItems.length > 0) {
                        ItemsCards.items.push(...ItemsCards.filteredItems);

                        ItemsCards.filteredItems = [];
                }


                if (ItemsCards.filterValues[0].length > 0 || ItemsCards.filterValues[1].length > 0) {
                        ItemsCards.filteredItems = []; 

                        ItemsCards.items = ItemsCards.items.filter(item => {
                                let categories = Object.values(item)[6][0];
                                let brands = Object.values(item)[6][1];
                                let hasSelectedCategory = ItemsCards.filterValues[0].includes(categories);
                                let hasSelectedBrands = ItemsCards.filterValues[1].includes(brands);

                                const matchesCategory = (ItemsCards.filterValues[0].length === 0 || hasSelectedCategory);
                                const matchesBrand = (ItemsCards.filterValues[1].length === 0 || hasSelectedBrands);

                                const itemMatchesFilter = matchesCategory && matchesBrand;

                                if (!itemMatchesFilter) {
                                        ItemsCards.filteredItems.push(item);
                                }

                                return itemMatchesFilter;
                        });
                }


                this.#showFiltredCard();
        }

        #deleteItemsCardBySorted() {
                let productsContainer = document.getElementById('products-container');

                while (productsContainer.children.length > 1) {
                        productsContainer.lastElementChild.remove();
                }

                ItemsCards.items = [];

                for (let i = 0; i < ItemsCards.sortedItems.length; i++) {
                        ItemsCards.sortedItems[i].createItem();
                }
        }


        #showFiltredCard() {
                let productsContainer = document.getElementById('products-container');

                while (productsContainer.children.length > 1) {
                        productsContainer.lastElementChild.remove();
                }

                let a = ItemsCards.items;

                ItemsCards.items = [];

                for (let i = 0; i < a.length; i++) {
                        a[i].createItem();
                }

                a = null;
        }
}

class Cart {
        static itemsCart = [];
        static count = 0;
        static priceCount = 0;
        static CountingByEveryItems = [];

        addToCart(id) {
                for (let i = 0; i < ItemsCards.items.length; i++) {

                        if (Object.values(ItemsCards.items[i])[7] == id) {
                                let matchElements = Cart.itemsCart.find(findCartById);

                                function findCartById(elem) {
                                        return elem.id == id
                                }

                                if (matchElements == undefined) {
                                        Cart.itemsCart.push(ItemsCards.items[i]);
                                        for (let n = 0; n < Cart.itemsCart.length; n++) {
                                                if (Object.values(Cart.itemsCart[n])[7] == id) {
                                                        Cart.CountingByEveryItems[n] = 1;
                                                        this.creatItemInCart(Cart.count);
                                                        Cart.priceCount += Object.values(Cart.itemsCart[n])[1];
                                                        this.updateFieldEveryCountItems(id);
                                                        Cart.count++;
                                                }
                                        }
                                }

                                else {
                                        for (let n = 0; n < Cart.itemsCart.length; n++) {
                                                if (Object.values(Cart.itemsCart[n])[7] == id) {
                                                        Cart.CountingByEveryItems[n]++;
                                                        Cart.priceCount += Object.values(Cart.itemsCart[n])[1];
                                                        this.updateFieldEveryCountItems(id);
                                                }
                                        }
                                }
                        }
                }

                Cart.checkStateCart();
        }

        updateFieldEveryCountItems(id) {
                for (let i = 0; i < Cart.itemsCart.length; i++) {
                        if (Object.values(Cart.itemsCart[i])[7] == id) {
                                let countField = document.getElementsByClassName("count-field");
                                countField[i].value = Cart.CountingByEveryItems[i];
                        }
                }
        }

        static checkStateCart() {
                let cartCount = document.getElementById("cart").children[1];
                let cartEmptyMessage = document.getElementById("no-items");
                let mainContainer = document.getElementById("have-items");
                let cartReceipt = document.getElementById("cart-receipt");
                let priceCount = document.getElementById("price-count");
                let sum = 0;
                priceCount.innerHTML = Cart.priceCount + " USD";

                for (let i = 0; i < Cart.CountingByEveryItems.length; i++) {
                        if (Cart.CountingByEveryItems[i] > 0) {
                                sum += Cart.CountingByEveryItems[i];
                        }
                }

                cartCount.innerHTML = sum;

                if (Cart.itemsCart.length == 0) {
                        cartCount.style.display = "none";
                        cartEmptyMessage.style.display = "flex";
                        mainContainer.style.display = "none";
                        cartReceipt.style.marginTop = "0";
                }

                else {
                        cartCount.style.display = "inherit";
                        cartEmptyMessage.style.display = "none";
                        mainContainer.style.display = "inherit";
                        cartReceipt.style.marginTop = "40px";
                }
        }

        openCart() {
                let cart = document.getElementById("cart-container");
                cart.style.display = "block";

                let shadowBg = document.getElementById("shadow-bg");
                shadowBg.style.display = "block";
        }

        closeCart() {
                let cart = document.getElementById("cart-container");
                cart.style.display = "none";

                let shadowBg = document.getElementById("shadow-bg");
                shadowBg.style.display = "none";
        }

        creatItemInCart(element) {
                let itemsCartContainer = document.getElementById("have-items");
                let itemsOfCart = document.createElement('div');
                itemsOfCart.setAttribute('id', 'items-cart');
                itemsOfCart.innerHTML = ` 
                <img src="Images/cross-close.png" alt="bucket" class="cross-close">
                <div class="cart-item-body">
                        <img src="${Object.values(Cart.itemsCart[element])[4]}" alt="item-in-cart">
                        <p>${Object.values(Cart.itemsCart[element])[0]}</p>
                </div>
                <div class="cart-item-footer">
                        <div class="items-count">
                                <button>-</button>
                                <input type="text" class="count-field">
                                <button onClick="new Cart().addItem(${Object.values(Cart.itemsCart[element])[7]})">+</button>
                        </div>
                        <p id="price-this-item">${Object.values(Cart.itemsCart[element])[1]} <b>USD</b></p>
                </div>`;
                itemsCartContainer.appendChild(itemsOfCart);
        }

        addItem(id) {
                for (let i = 0; i < Cart.itemsCart.length; i++) {
                        if (Object.values(Cart.itemsCart[i])[7] == id) {
                                Cart.CountingByEveryItems[i]++;
                                Cart.priceCount += Object.values(Cart.itemsCart[i])[1];
                                Cart.checkStateCart(i);
                        }
                }
        }

        reduceItem() {

        }
}

class Item {
        constructor({ name, price, rating, description, mainImagePath, additionalImagesPath, characteristic, id }) {
                this.name = name;
                this.price = price;
                this.rating = rating;
                this.description = description;
                this.mainImagePath = mainImagePath;
                this.additionalImagesPath = additionalImagesPath;
                this.characteristic = characteristic;
                this.id = id;
        }

        createItem() {
                let productsItemCreate = document.createElement('div');
                let productsContainer = document.getElementById('products-container');
                productsItemCreate.setAttribute('class', 'products-item');
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
                        <button onclick="new Cart().addToCart(${this.id})"><img src="Images/Frame-2.png"></button>
                </div>
                <div class="products-item-hidden">
                        <div class="info-text">
                                <b>Характеристика:</b><br><p>${this.changedDescriptionOfItem}</p></br>
                        </div>
                </div>
                </div>`;

                productsContainer.appendChild(productsItemCreate);

                this.#addToArray();
                Cart.checkStateCart();

                for (let i = 0; i < ItemsCards.items.length; i++) {
                        this.#setRating(i);

                        //// find item card
                        let productsItem = document.getElementsByClassName("products-item")[i];

                        //// display none item card
                        productsItem.style.setProperty('--state', "none");

                        //// hover make display none
                        productsItem.addEventListener("mouseover", () => {
                                productsItem.style.setProperty('--state', "block");
                                let firstNesting = productsItem.children[0];
                                let secondNesting = firstNesting.children[0];
                                secondNesting.children[0].setAttribute("src", Object.values(ItemsCards.items[i])[5][0]);
                        });


                        productsItem.addEventListener("mouseout", () => {
                                productsItem.style.setProperty('--state', "none");
                                let firstNesting = productsItem.children[0];
                                let secondNesting = firstNesting.children[0];
                                secondNesting.children[0].setAttribute("src", Object.values(ItemsCards.items[i])[4]);
                        });
                }
        }

        #setRating(currentElement) {
                let productsItems = document.getElementsByClassName("products-item")[currentElement].children[0];
                let ratingContainer = productsItems.children[3];

                for (let i = 0; i < Object.values(ItemsCards.items[currentElement])[2]; i++) {
                        ratingContainer.children[i].style.filter = "grayscale(0)";
                }
        }

        #addToArray() {
                ItemsCards.items.push(this);
        }

}

laptop1 = new Item(
        {
                name: `Ноутбук Lenovo IdeaPad 3 15IAU7 (82RK00S0RA) Arctic Grey / 15.6" IPS Full HD / Intel Core i5-1235U / RAM 8 ГБ / SSD 512 ГБ`,
                price: 50,
                rating: 2,
                description: `"Екран 16" IPS(1920x1200) FHD + 165 Гц, матовий / Intel Core i5 - 13450HX(3.4 - 4.6 ГГц)
                        / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 4060, 8 ГБ Bluetooth / веб - камера
                        / без ОС / 2.5 кг / сірий`,
                mainImagePath: "Images/item-1.1.webp",
                additionalImagesPath: [
                        "Images/item-1.2.webp",
                        "Images/item-1.3.webp",
                ],
                characteristic: ["Laptop", "Lenovo"],
                id: 0
        });

laptop1.createItem();

laptop2 = new Item(
        {
                name: `Ноутбук Apple MacBook Air 13" M1 8/256GB 2020 (MGN63) Space Gray`,
                price: 2000,
                rating: 5,
                description: `"Екран 13.3" Retina (2560x1600) WQXGA, глянсовий / Apple M1 / RAM 8 ГБ / 
                                SSD 256 ГБ / Apple M1 Graphics / Wi-Fi / Bluetooth / macOS Big Sur / 1.29 кг / сірий`,
                mainImagePath: "Images/item-2.1.webp",
                additionalImagesPath: [
                        "Images/item-2.2.webp",
                        "Images/item-2.3.webp",
                ],
                characteristic: ["Laptop", "Apple"],
                id: 1
        });

laptop2.createItem();

laptop3 = new Item(
        {
                name: `Ноутбук Acer Nitro 5 AN517-41-R8F9 (NH.QBHEU.00F) Shale Black / 
                17.3” IPS (2560x1440) 165 Гц / AMD Ryzen 7 5800H / RAM 32 ГБ / SSD 1 ТБ / nVidia GeForce RTX 3080, 8 ГБ / RGB подсветка`,
                price: 100,
                rating: 2,
                description: `"Екран 17.3” IPS (2560x1440) WQHD 165 Гц, матовий / AMD Ryzen 7 5800H (3.2 - 4.4 ГГц) / 
                               RAM 32 ГБ / SSD 1 ТБ / nVidia GeForce RTX 3080, 8 ГБ / веб-камера / без ОС / 2.7 кг / чорний`,
                mainImagePath: "Images/item-3.1.webp",
                additionalImagesPath: [
                        "Images/item-3.2.webp",
                        "Images/item-3.3.webp",
                ],
                characteristic: ["Laptop", "Acer"],
                id: 2
        });

laptop3.createItem();

phone = new Item(
        {
                name: `Телефон`,
                price: 1000,
                rating: 3,
                description: `"Екран 17.3” IPS (2560x1440) WQHD 165 Гц, матовий / AMD Ryzen 7 5800H (3.2 - 4.4 ГГц) / 
                               RAM 32 ГБ / SSD 1 ТБ / nVidia GeForce RTX 3080, 8 ГБ / веб-камера / без ОС / 2.7 кг / чорний`,
                mainImagePath: "Images/item-3.1.webp",
                additionalImagesPath: [
                        "Images/item-3.2.webp",
                        "Images/item-3.3.webp",
                ],
                characteristic: ["#", "Acer"],
                id: 3
        });

phone.createItem();



phone2 = new Item(
        {
                name: `Телефон-2`,
                price: 1000,
                rating: 3,
                description: `"Екран 17.3” IPS (2560x1440) WQHD 165 Гц, матовий / AMD Ryzen 7 5800H (3.2 - 4.4 ГГц) / 
                               RAM 32 ГБ / SSD 1 ТБ / nVidia GeForce RTX 3080, 8 ГБ / веб-камера / без ОС / 2.7 кг / чорний`,
                mainImagePath: "Images/item-3.1.webp",
                additionalImagesPath: [
                        "Images/item-3.2.webp",
                        "Images/item-3.3.webp",
                ],
                characteristic: ["Phone2", "Acer"],
                id: 4
        });

phone2.createItem();

