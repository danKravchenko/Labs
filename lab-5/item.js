class CarrouselCurrentItem {
        static setImage(count) {
                let carrousel = document.getElementById("imgs-carrousel");
                let source = carrousel.children[count].getAttribute("src");
                CarrouselCurrentItem.changeImage(source);
        }

        static changeImage(source) {
                let itemsContainer = document.getElementById("items-container");
                let img = itemsContainer.children[1].children[0];
                img.setAttribute("src", source);
        }
}

class ItemsCards {
        static items = [];
        static sortedItems = [];
        static filteredItems = [];
        static filterValues = [[], [], [], []];
        static maxValue = 0;
        static minValue = 0;

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

        static setMinMaxPriceFilter(firstCall) {
                if (firstCall == true) {
                        let minValueField = document.getElementById('min-value');
                        let maxValueField = document.getElementById('max-value');

                        ItemsCards.minValue = Object.values(ItemsCards.items[0])[1];
                        for (let i = 0; i < ItemsCards.items.length; i++) {
                                if (ItemsCards.maxValue < Object.values(ItemsCards.items[i])[1]) {
                                        ItemsCards.maxValue = Object.values(ItemsCards.items[i])[1];
                                }

                                if (ItemsCards.minValue > Object.values(ItemsCards.items[i])[1]) {
                                        ItemsCards.minValue = Object.values(ItemsCards.items[i])[1];
                                }
                        }

                        maxValueField.value = ItemsCards.maxValue;
                        minValueField.value = ItemsCards.minValue;
                }

                else {
                        let minValueField = document.getElementById('min-value');
                        let maxValueField = document.getElementById('max-value');

                        ItemsCards.maxValue = maxValueField.value;
                        ItemsCards.minValue = minValueField.value;
                }
        }

        filterItems() {
                let catalogElements = document.getElementById('catalog').children;
                let brandsElements = document.getElementById('brands').children;
                let displayElements = document.getElementById('screen-size').children;
                let memoryElements = document.getElementById('memory-size').children;

                for (let i = 0; i < catalogElements.length; i++) {
                        if (catalogElements[i].tagName == "INPUT") {
                                if (catalogElements[i].checked == true) {
                                        switch (catalogElements[i].id) {
                                                case "1":
                                                        if (!ItemsCards.filterValues[0].includes("Phone")) {
                                                                ItemsCards.filterValues[0].push("Phone");
                                                        }
                                                        break;

                                                case "2":
                                                        if (!ItemsCards.filterValues[0].includes("Tablet")) {
                                                                ItemsCards.filterValues[0].push("Tablet");
                                                        }
                                                        break;

                                                case "3":
                                                        if (!ItemsCards.filterValues[0].includes("TV")) {
                                                                ItemsCards.filterValues[0].push("TV");
                                                        }
                                                        break;

                                                case "4":
                                                        if (!ItemsCards.filterValues[0].includes("Laptop")) {
                                                                ItemsCards.filterValues[0].push("Laptop");
                                                        }
                                                        break;
                                        }
                                } else {
                                        switch (catalogElements[i].id) {
                                                case "1":
                                                        let indexToRemove1 = ItemsCards.filterValues[0].indexOf("Phone");
                                                        if (indexToRemove1 !== -1) {
                                                                ItemsCards.filterValues[0].splice(indexToRemove1, 1);
                                                        }
                                                        break;

                                                case "2":
                                                        let indexToRemove2 = ItemsCards.filterValues[0].indexOf("Tablet");
                                                        if (indexToRemove2 !== -1) {
                                                                ItemsCards.filterValues[0].splice(indexToRemove2, 1);
                                                        }
                                                        break;

                                                case "3":
                                                        let indexToRemove3 = ItemsCards.filterValues[0].indexOf("TV");
                                                        if (indexToRemove3 !== -1) {
                                                                ItemsCards.filterValues[0].splice(indexToRemove3, 1);
                                                        }
                                                        break;

                                                case "4":
                                                        let indexToRemove4 = ItemsCards.filterValues[0].indexOf("Laptop");
                                                        if (indexToRemove4 !== -1) {
                                                                ItemsCards.filterValues[0].splice(indexToRemove4, 1);
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
                                                        if (!ItemsCards.filterValues[1].includes("Asus")) {
                                                                ItemsCards.filterValues[1].push("Asus");
                                                        }
                                                        break;

                                                case "2":
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
                                                        if (!ItemsCards.filterValues[1].includes("Apple")) {
                                                                ItemsCards.filterValues[1].push("Apple");
                                                        }
                                                        break;

                                                case "5":
                                                        if (!ItemsCards.filterValues[1].includes("Samsung")) {
                                                                ItemsCards.filterValues[1].push("Samsung");
                                                        }
                                                        break;
                                        }
                                } else {
                                        switch (brandsElements[i].id) {
                                                case "1":
                                                        if (Array.isArray(ItemsCards.filterValues[1])) {
                                                                let indexToRemove1 = ItemsCards.filterValues[1].indexOf("Asus");
                                                                if (indexToRemove1 !== -1) {
                                                                        ItemsCards.filterValues[1].splice(indexToRemove1, 1);
                                                                }
                                                        }
                                                        break;

                                                case "2":
                                                        if (Array.isArray(ItemsCards.filterValues[1])) {
                                                                let indexToRemove2 = ItemsCards.filterValues[1].indexOf("Lenovo");
                                                                if (indexToRemove2 !== -1) {
                                                                        ItemsCards.filterValues[1].splice(indexToRemove2, 1);
                                                                }
                                                        }
                                                        break;

                                                case "3":
                                                        if (Array.isArray(ItemsCards.filterValues[1])) {
                                                                let indexToRemove3 = ItemsCards.filterValues[1].indexOf("Acer");
                                                                if (indexToRemove3 !== -1) {
                                                                        ItemsCards.filterValues[1].splice(indexToRemove3, 1);
                                                                }
                                                        }
                                                        break;

                                                case "4":
                                                        if (Array.isArray(ItemsCards.filterValues[1])) {
                                                                let indexToRemove4 = ItemsCards.filterValues[1].indexOf("Apple");
                                                                if (indexToRemove4 !== -1) {
                                                                        ItemsCards.filterValues[1].splice(indexToRemove4, 1);
                                                                }
                                                        }
                                                        break;

                                                case "5":
                                                        if (Array.isArray(ItemsCards.filterValues[1])) {
                                                                let indexToRemove5 = ItemsCards.filterValues[1].indexOf("Samsung");
                                                                if (indexToRemove5 !== -1) {
                                                                        ItemsCards.filterValues[1].splice(indexToRemove5, 1);
                                                                }
                                                        }
                                                        break;
                                        }
                                }
                        }
                }

                for (let i = 0; i < displayElements.length; i++) {
                        if (displayElements[i].tagName == "INPUT") {
                                if (displayElements[i].checked == true) {
                                        switch (displayElements[i].id) {
                                                case "1":
                                                        if (!ItemsCards.filterValues[2].includes("Small")) {
                                                                ItemsCards.filterValues[2].push("Small");
                                                        }
                                                        break;

                                                case "2":
                                                        if (!ItemsCards.filterValues[2].includes("Midle")) {
                                                                ItemsCards.filterValues[2].push("Midle");
                                                        }
                                                        break;

                                                case "3":
                                                        if (!ItemsCards.filterValues[2].includes("Large")) {
                                                                ItemsCards.filterValues[2].push("Large");
                                                        }
                                                        break;
                                        }
                                } else {
                                        switch (displayElements[i].id) {
                                                case "1":
                                                        if (Array.isArray(ItemsCards.filterValues[2])) {
                                                                let indexToRemove1 = ItemsCards.filterValues[2].indexOf("Small");
                                                                if (indexToRemove1 !== -1) {
                                                                        ItemsCards.filterValues[2].splice(indexToRemove1, 1);
                                                                }
                                                        }
                                                        break;

                                                case "2":
                                                        if (Array.isArray(ItemsCards.filterValues[2])) {
                                                                let indexToRemove2 = ItemsCards.filterValues[2].indexOf("Midle");
                                                                if (indexToRemove2 !== -1) {
                                                                        ItemsCards.filterValues[2].splice(indexToRemove2, 1);
                                                                }
                                                        }
                                                        break;

                                                case "3":
                                                        if (Array.isArray(ItemsCards.filterValues[2])) {
                                                                let indexToRemove3 = ItemsCards.filterValues[2].indexOf("Large");
                                                                if (indexToRemove3 !== -1) {
                                                                        ItemsCards.filterValues[2].splice(indexToRemove3, 1);
                                                                }
                                                        }
                                                        break;
                                        }
                                }
                        }
                }

                for (let i = 0; i < memoryElements.length; i++) {
                        if (memoryElements[i].tagName == "INPUT") {
                                if (memoryElements[i].checked == true) {
                                        switch (memoryElements[i].id) {
                                                case "1":
                                                        if (!ItemsCards.filterValues[3].includes("Small")) {
                                                                ItemsCards.filterValues[3].push("Small");
                                                        }
                                                        break;

                                                case "2":
                                                        if (!ItemsCards.filterValues[3].includes("Midle")) {
                                                                ItemsCards.filterValues[3].push("Midle");
                                                        }
                                                        break;

                                                case "3":
                                                        if (!ItemsCards.filterValues[3].includes("Large")) {
                                                                ItemsCards.filterValues[3].push("Large");
                                                        }
                                                        break;
                                        }
                                } else {
                                        switch (memoryElements[i].id) {
                                                case "1":
                                                        if (Array.isArray(ItemsCards.filterValues[3])) {
                                                                let indexToRemove1 = ItemsCards.filterValues[3].indexOf("Small");
                                                                if (indexToRemove1 !== -1) {
                                                                        ItemsCards.filterValues[3].splice(indexToRemove1, 1);
                                                                }
                                                        }
                                                        break;

                                                case "2":
                                                        if (Array.isArray(ItemsCards.filterValues[3])) {
                                                                let indexToRemove2 = ItemsCards.filterValues[3].indexOf("Midle");
                                                                if (indexToRemove2 !== -1) {
                                                                        ItemsCards.filterValues[3].splice(indexToRemove2, 1);
                                                                }
                                                        }
                                                        break;

                                                case "3":
                                                        if (Array.isArray(ItemsCards.filterValues[3])) {
                                                                let indexToRemove3 = ItemsCards.filterValues[3].indexOf("Large");
                                                                if (indexToRemove3 !== -1) {
                                                                        ItemsCards.filterValues[3].splice(indexToRemove3, 1);
                                                                }
                                                        }
                                                        break;
                                        }
                                }
                        }
                }

                if (ItemsCards.filteredItems.length > 0) {
                        ItemsCards.items.push(...ItemsCards.filteredItems);

                        ItemsCards.filteredItems = [];
                }

                if (
                        ItemsCards.filterValues[0].length > 0 ||
                        ItemsCards.filterValues[1].length > 0 ||
                        ItemsCards.filterValues[2].length > 0 ||
                        ItemsCards.filterValues[3].length > 0
                ) {
                        ItemsCards.filteredItems = [];
                        ItemsCards.setMinMaxPriceFilter(false);

                        ItemsCards.items = ItemsCards.items.filter(item => {
                                let categories = Object.values(item)[6][0];
                                let brands = Object.values(item)[6][1];
                                let displays = Object.values(item)[6][2];
                                let memory = Object.values(item)[6][3];
                                let price = Object.values(item)[1];

                                let hasSelectedCategory = ItemsCards.filterValues[0].includes(categories);
                                let hasSelectedBrands = ItemsCards.filterValues[1].includes(brands);
                                let priceInRange = (price >= ItemsCards.minValue && price <= ItemsCards.maxValue);
                                let hasSelectedDisplays = ItemsCards.filterValues[2].includes(displays);
                                let hasSelectedMemory = ItemsCards.filterValues[3].includes(memory);

                                const matchesCategory = ItemsCards.filterValues[0].length === 0 || hasSelectedCategory;
                                const matchesBrand = ItemsCards.filterValues[1].length === 0 || hasSelectedBrands;
                                const matchesDisplays = ItemsCards.filterValues[2].length === 0 || hasSelectedDisplays;
                                const matchesMemory = ItemsCards.filterValues[3].length === 0 || hasSelectedMemory;
                                const matchesPrice = priceInRange;

                                const itemMatchesFilter = matchesCategory && matchesPrice && matchesBrand && matchesDisplays && matchesMemory;

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

                let copyArray = ItemsCards.items;

                ItemsCards.items = [];

                for (let i = 0; i < copyArray.length; i++) {
                        copyArray[i].createItem();
                }

                copyArray = null;
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
                <img src="Images/cross-close.png" alt="bucket" class="cross-close" onClick="new Cart().deleteItem(${Object.values(Cart.itemsCart[element])[7]})">
                <div class="cart-item-body">
                        <img src="${Object.values(Cart.itemsCart[element])[4]}" alt="item-in-cart">
                        <p>${Object.values(Cart.itemsCart[element])[0]}</p>
                </div>
                <div class="cart-item-footer">
                        <div class="items-count">
                                <button onClick="new Cart().reduceItem(${Object.values(Cart.itemsCart[element])[7]})">-</button>
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
                                this.updateFieldEveryCountItems(id);
                        }
                }
        }

        reduceItem(id) {
                for (let i = 0; i < Cart.itemsCart.length; i++) {
                        if (Object.values(Cart.itemsCart[i])[7] == id) {
                                if (Cart.CountingByEveryItems[i] > 1) {
                                        Cart.CountingByEveryItems[i]--;
                                        Cart.priceCount -= Object.values(Cart.itemsCart[i])[1];
                                        Cart.checkStateCart(i);
                                        this.updateFieldEveryCountItems(id);
                                }
                        }
                }
        }

        deleteItem(id) {
                for (let i = 0; i < Cart.itemsCart.length; i++) {
                        if (Object.values(Cart.itemsCart[i])[7] == id) {
                                let CartItemsContainer = document.getElementById("have-items");
                                CartItemsContainer.children[i].remove();
                                Cart.priceCount -= Object.values(Cart.itemsCart[i])[1] * Cart.CountingByEveryItems[i];
                                Cart.CountingByEveryItems.splice(i, 1);
                                Cart.itemsCart.splice(i, 1);
                                Cart.count--;
                                Cart.checkStateCart(i);
                                this.updateFieldEveryCountItems(i);
                        }
                }
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
                        <button id="btn-buy" onclick="Item.openDetailedInfo(${this.id})">Купити</button>
                        <button onclick="new Cart().addToCart(${this.id})"><img src="Images/Frame-2.png"></button>
                </div>
                <div class="products-item-hidden">
                        <div class="info-text">
                                <b>Характеристика:</b><br><p>${this.description}</p></br>
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
                let ratingState = document.getElementById("current-product-rating");
                let itemsContainer = document.getElementById("items-container");

                for (let i = 0; i < Object.values(ItemsCards.items[currentElement])[2]; i++) {
                        ratingContainer.children[i].style.filter = "grayscale(0)";

                        if (itemsContainer.style.display == "flex") {
                                console.log(Object.values(ItemsCards.items[currentElement])[2])
                                ratingState.children[i].style.filter = "grayscale(0)";
                        }
                }
        }

        #addToArray() {
                ItemsCards.items.push(this);
        }

        static openDetailedInfo(id) {
                let itemsContainer = document.getElementById("items-container");
                let productsContainer = document.getElementById("products-container");
                let filterContainer = document.getElementById("filter-container");
                let img = itemsContainer.children[1].children[0];
                let price = itemsContainer.children[2].children[2];
                let nameOfItem = document.getElementById("name-of-item");
                let descriptionOfItem = document.getElementById("description-of-item");
                let carrousel = document.getElementById("imgs-carrousel");
                let currentProductBtns = document.getElementById("current-product-btns");

                productsContainer.style.display = "none";
                filterContainer.style.display = "none";
                itemsContainer.style.display = "flex";

                for (let i = 0; i < ItemsCards.items.length; i++) {
                        if (Object.values(ItemsCards.items[i])[7] == id) {
                                img.setAttribute("src", Object.values(ItemsCards.items[i])[4]);
                                nameOfItem.innerHTML = Object.values(ItemsCards.items[i])[0];
                                descriptionOfItem.innerHTML = Object.values(ItemsCards.items[i])[3];
                                price.innerHTML = Object.values(ItemsCards.items[i])[1] + " USD";
                                ItemsCards.items[i].#setRating(i);
                                carrousel.children[0].setAttribute("src", Object.values(ItemsCards.items[i])[4]);
                                carrousel.children[1].setAttribute("src", Object.values(ItemsCards.items[i])[5][0]);
                                carrousel.children[2].setAttribute("src", Object.values(ItemsCards.items[i])[5][1]);
                                currentProductBtns.children[2].setAttribute("onclick", `new Cart().addToCart(${id})`);
                        }
                }
        }

        static goBack() {
                let itemsContainer = document.getElementById("items-container");
                let productsContainer = document.getElementById("products-container");
                let filterContainer = document.getElementById("filter-container");

                productsContainer.style.display = "flex";
                filterContainer.style.display = "inherit";
                itemsContainer.style.display = "none";
        }
}

laptop1 = new Item(
        {
                name: `Ноутбук Lenovo IdeaPad 3 15IAU7 (82RK00S0RA) Arctic Grey / 15.6" IPS Full HD / Intel Core i5-1235U / RAM 4 ГБ / SSD 512 ГБ`,
                price: 50,
                rating: 2,
                description: `"Екран 16" IPS(1920x1200) FHD + 165 Гц, матовий / Intel Core i5 - 13450HX(3.4 - 4.6 ГГц)
                        / RAM 4 ГБ / SSD 512 ГБ / nVidia GeForce RTX 4060, 8 ГБ Bluetooth / веб - камера
                        / без ОС / 2.5 кг / сірий`,
                mainImagePath: "Images/item-1.1.webp",
                additionalImagesPath: [
                        "Images/item-1.2.webp",
                        "Images/item-1.3.webp",
                ],
                characteristic: ["Laptop", "Lenovo", "Midle", "Small"],
                id: 0
        });

laptop1.createItem();

laptop2 = new Item(
        {
                name: `Ноутбук Apple MacBook Air 13" M1 8/256GB 2020 (MGN63) Space Gray`,
                price: 2000,
                rating: 5,
                description: `"Екран 13.3" Retina (2560x1600) WQXGA, глянсовий / Apple M1 / RAM 6 ГБ / 
                                SSD 256 ГБ / Apple M1 Graphics / Wi-Fi / Bluetooth / macOS Big Sur / 1.29 кг / сірий`,
                mainImagePath: "Images/item-2.1.webp",
                additionalImagesPath: [
                        "Images/item-2.2.webp",
                        "Images/item-2.3.webp",
                ],
                characteristic: ["Laptop", "Apple", "Midle", "Midle"],
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
                characteristic: ["Laptop", "Acer", "Midle", "Large"],
                id: 2
        });

laptop3.createItem();

tablet1 = new Item(
        {
                name: `Планшет Lenovo Tab P11 Plus Wi-Fi 128GB Slate Grey (ZA940099UA)`,
                price: 1000,
                rating: 3,
                description: `Екран 11" IPS (2000x1200) MultiTouch / MediaTek Helio G90T (2.05 ГГц + 2.0 ГГц) / RAM 6 ГБ / 128 ГБ вбудованої
                               пам'яті + microSD / Wi-Fi / Bluetooth 5.1 / основна камера 13 Мп, фронтальна - 8 ГЛОНАСС / пило/вологозахищений
                               / Android 12 / 490 г / темно-сірий`,
                mainImagePath: "Images/item-4.1.webp",
                additionalImagesPath: [
                        "Images/item-4.2.webp",
                        "Images/item-4.3.webp",
                ],
                characteristic: ["Tablet", "Lenovo", "Midle", "Midle"],
                id: 3
        });

tablet1.createItem();

tablet2 = new Item(
        {
                name: `Планшет Samsung Galaxy Tab S9 5G 12/256GB Graphite (SM-X716BZAESEK)`,
                price: 1120,
                rating: 4,
                description: `Екран 11" (2560x1600) MultiTouch / Qualcomm Snapdragon 8 Gen 2 (1 х 3.2 ГГц + 2 х 2.8 ГГц + 2 х 2.8 ГГц + 3 х 2.0 ГГц)
                              / RAM 12 ГБ / 236 ГБ / 256 ГБ 5G / Wi-Fi / Bluetooth5.2 / подвійна основна камера: 13 Мп, фронтальна - 12 Мп / Android 13 
                              / 500 г / графітовий`,
                mainImagePath: "Images/item-5.1.webp",
                additionalImagesPath: [
                        "Images/item-5.2.webp",
                        "Images/item-5.3.webp",
                ],
                characteristic: ["Tablet", "Samsung", "Midle", "Large"],
                id: 4
        });

tablet2.createItem();

televisor1 = new Item(
        {
                name: `Телевізор Samsung UE55CU7100UXUA`,
                price: 625,
                rating: 5,
                description: `<b>Діагональ екрану:</b> 43"<br>
                              <b>Розширення:</b> 1920x1080<br>
                              <b>Частота екрану:</b> 60 Гц<br>
                              <b>Операційна система:</b> Tizen<br>
                              <b>Діапазони цифрового тюнера:</b> DVB-C
                                                          DVB-S2
                                                          DVB-T2
                              <br><b>Природна частота поновлення (native):</b> 60 Гц`,
                mainImagePath: "Images/item-6.1.webp",
                additionalImagesPath: [
                        "Images/item-6.2.webp",
                        "Images/item-6.3.webp",
                ],
                characteristic: ["TV", "Samsung", "Large", "Small"],
                id: 5
        });

televisor1.createItem();

televisor2 = new Item(
        {
                name: `LCD панель Acer DV503bmiidv`,
                price: 300,
                rating: 1,
                description: `<b>Діагональ екрану:</b> 50"<br>
                              <b>Розширення:</b> 1920x1080<br>
                              <b>Співвідношення сторін:</b> 16:9<br>
                              <b>Тип матриці:</b> MVA<br>
                              <b>Яскравість:</b> 450 кд/м²<br>
                              <b>Контрастність: 3000 :1`,
                mainImagePath: "Images/item-7.1.webp",
                additionalImagesPath: [
                        "Images/item-7.2.webp",
                        "Images/item-7.3.webp",
                ],
                characteristic: ["TV", "Acer", "Large", "Small"],
                id: 6
        });

televisor2.createItem();

phone1 = new Item(
        {
                name: `Мобільний телефон Apple iPhone 14 256GB Blue (MPWP3RX/A)`,
                price: 1200,
                rating: 5,
                description: `Екран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / подвійна основна камера: 12 Мп + 12 Мп,
                              фронтальна камера: 12 Мп / 256 ГБ вбудованої пам'яті / 3G / LTE / 5G / GPS / Nano SIM/iOS 16`,
                mainImagePath: "Images/item-8.1.webp",
                additionalImagesPath: [
                        "Images/item-8.2.webp",
                        "Images/item-8.3.webp",
                ],
                characteristic: ["Phone", "Apple", "Small", "Small"],
                id: 7
        });

phone1.createItem();

phone2 = new Item(
        {
                name: `Мобільний телефон Samsung Galaxy S22 8/128GB Phantom Black (SM-S901BZKDSEK)`,
                price: 2235,
                rating: 4,
                description: `Екран (6.1", Dynamic AMOLED 2X, 2340x1080) / Samsung Exynos 2200 (2.8 ГГц + 2.5 ГГц + 1.8 ГГц) / потрійна основна камера:
                              50 Мп + 12 Мп + 10 Мп / фронтальна 10 Мп пам'яті / 3G / LTE / 5G / GPS / підтримка 2х SIM-карт (Nano-SIM) / Android 12 / 3700 мА * год`,
                mainImagePath: "Images/item-9.1.webp",
                additionalImagesPath: [
                        "Images/item-9.2.webp",
                        "Images/item-9.3.webp",
                ],
                characteristic: ["Phone", "Samsung", "Small", "Small"],
                id: 8
        });

phone2.createItem();

//// calling of methods
ItemsCards.setMinMaxPriceFilter(true);


