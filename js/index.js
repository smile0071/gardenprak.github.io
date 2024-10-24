//BURGER
const burgerIcon = document.querySelector(".burger-icon");
const navLinks = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll(".nav-item");
const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".nav-list");
const body = document.body;

//CLOSE AND OPEN MENU

function menuToggle() {
  body.classList.toggle("lock");
  burgerIcon.classList.toggle("active");
  menu.classList.toggle("active");
}

//CLOSING MENU ON CLICKING LINK OR NAV-LIST

navList.addEventListener("click", menuToggle);
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", menuToggle);
});
navItems.forEach((navItem) => {
  navItem.addEventListener("click", menuToggle);
});
burgerIcon.addEventListener("click", menuToggle);

//SMOOTH SCROLLING

for (let navLink of navLinks) {
  if (navLink) {
    navLink.addEventListener("click", function (e) {
      e.preventDefault();
      navlinkID = this.getAttribute("href");
      document.querySelector(navlinkID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

//SERVICE BTNS
const serviceBtns = document.querySelectorAll(".service-btn");
const serviceItems = document.querySelectorAll(".services-item");
const gardenIMG = document.querySelectorAll(".garden");
const gardenBtn = document.querySelector(".garden-btn");
const plantingIMG = document.querySelectorAll(".planting");
const plantingBtn = document.querySelector(".planting-btn");
const lawnIMG = document.querySelectorAll(".lawn");
const lawnBtn = document.querySelector(".lawn-btn");

function addBlur(e) {
  e.forEach((img) => {
    img.classList.add("blur");
  });
}

function removeBlur(e) {
  e.forEach((img) => {
    img.classList.remove("blur");
  });
}

function isBlur(e) {
  return e.every((item) => item.classList.contains("blur"));
}

for (let serviceBtn of serviceBtns) {
  serviceBtn.addEventListener("click", function () {
    // Если текущая кнопка уже активна, деактивируем её и убираем размытие со всех изображений
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      removeBlur(gardenIMG);
      removeBlur(plantingIMG);
      removeBlur(lawnIMG);
      return;
    }

    // Деактивируем все кнопки
    serviceBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Активируем текущую кнопку
    this.classList.add("active");

    // Добавляем размытие ко всем изображениям
    addBlur(gardenIMG);
    addBlur(plantingIMG);
    addBlur(lawnIMG);

    // Убираем размытие с изображения, соответствующего активной кнопке
    if (this === gardenBtn) {
      removeBlur(gardenIMG);
    } else if (this === plantingBtn) {
      removeBlur(plantingIMG);
    } else if (this === lawnBtn) {
      removeBlur(lawnIMG);
    }
  });
}

//ACCORDION FUNCTIONALITY
const pricesAcc = document.querySelectorAll(".prices-acc");
const accBtns = document.querySelectorAll(".acc-btn");
const accContent = document.querySelectorAll(".acc-content");
const orderBtns = document.querySelectorAll(".order-btn");
const sectionContacts = document.getElementById("contacts");

function accDeactivate() {
  accBtns.forEach((accBtn) => {
    accBtn.classList.remove("active");
  });
  accContent.forEach((acc) => {
    acc.classList.remove("active");
  });
  pricesAcc.forEach((priceAcc) => {
    priceAcc.classList.remove("active");
  });
}

for (let btn of orderBtns) {
  if (btn) {
    btn.addEventListener("click", function () {
      sectionContacts.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

for (let i = 0; i < accBtns.length; i++) {
  accBtns[i].addEventListener("click", function () {
    if (accBtns[i].classList.contains("active")) {
      accDeactivate();
    } else {
      accDeactivate();
      accContent[i].classList.add("active");
      pricesAcc[i].classList.add("active");
      this.classList.add("active");
    }
  });
}

//SELECT FUNCTIONALITY

const contacts = document.querySelector(".contacts");
const contactsContainer = document.querySelector(".contacts-container");
const cityBox = document.querySelector(".city-box");
const cityCard = document.querySelector(".city-card");
const selectBtn = document.querySelector(".select-btn");
const citiesItems = document.querySelectorAll(".city-list-item");
const selected = document.querySelector(".selected-city");
const callBtn = document.querySelector(".call");
const contactsIMG = document.querySelector(".contacts-img");

let selectedValue = selected.dataset.value;
let cityContent = document.querySelector(".address-city");
let phoneContent = document.querySelector(".address-phone");
let addressContent = document.querySelector(".address-address");

function activate(e) {
  e.classList.add("active");
}

function deactivate(e) {
  e.classList.remove("active");
}

function select(e) {
  e.classList.add("selected");
}

const city = {
  canandaigua: "Canandaigua, NY",
  ny: "New York City",
  yonkers: "Yonkers, NY",
  sherill: "Sherrill, NY",
};

const phone = {
  canandaigua: "+1	585	393 0001",
  ny: "+1	212	456 0002",
  yonkers: "+1	914	678 0003",
  sherill: "+1	315	908 0004",
};

const address = {
  canandaigua: "151 Charlotte Street",
  ny: "9 East 91st Street",
  yonkers: "511 Warburton Ave",
  sherill: "14 WEST Noyes BLVD",
};

cityBox.addEventListener("click", function () {
  selectBtn.classList.toggle("active");
  cityBox.classList.toggle("active");
  contactsContainer.classList.toggle("active");
});

citiesItems.forEach((cityItem) => {
  cityItem.addEventListener("click", function (e) {
    selected.textContent = this.textContent;
    if (selected.textContent != "City") {
      deactivate(selectBtn);
      deactivate(cityBox);
      deactivate(contactsContainer);
      select(contactsContainer);
      select(selected);
      select(contacts);
      select(cityBox);
      activate(cityCard);
      contactsIMG.classList.add("unactive");
      cityContent.textContent = city[this.dataset.value];
      phoneContent.textContent = phone[this.dataset.value];
      addressContent.textContent = address[this.dataset.value];
    }
  });
});

callBtn.addEventListener("click", function (e) {
  if (phoneContent) {
    window.location.href = "tel:" + phoneContent;
  }
});

console.log(`
Итого: 125
  При нажатии на кнопки в разделе Service происходит смена фокуса +50
    При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20
    Можно нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом нельзя нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестают быть в блюре если это была единственная нажатая кнопка). +20
    Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10
  Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50
    При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25
    Можно самостоятельно закрыть содержимое нажав на кнопку dropup, но нельзя одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25
  В разделе contacts реализован select с выбором городов +25
    В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15
    При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10  
    `);
