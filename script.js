const carouselItems = document.querySelectorAll('.carousel-item'),
    prevButton = document.querySelector('.prev_item_btn'),
    nextButton = document.querySelector('.next_item_btn');

let currentItemIndex = 0;

function showCurrentItem() {
    carouselItems.forEach((item, index) => {
        index === currentItemIndex ? item.style.display = 'block' : item.style.display = 'none'
    });
}

function showNextItem() {
    currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
    showCurrentItem();
}

function showPrevItem() {
    currentItemIndex = (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
    showCurrentItem();
}

nextButton.addEventListener('click', showNextItem);
prevButton.addEventListener('click', showPrevItem);

showCurrentItem();

const firstDropDown = document.getElementById("myDropdown"),
    secondDropDown = document.getElementById("myDropdown2"),
    thirdDropDown = document.getElementById("myDropdown3");
function dropDownShifting(dropDown){
    dropDown.classList.toggle("show")
}

function functionForTheFirstInput() {
    firstDropDown.click()
    dropDownShifting(firstDropDown)
}
function functionForTheSecondInput(){
    secondDropDown.click()
    dropDownShifting(secondDropDown)
}
function functionForTheThirdInput(){
    thirdDropDown.click()
    dropDownShifting(thirdDropDown)
}

// Closing the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const hamMenu = document.querySelector('.hamburger_menu'),
    hamMenuItems = document.querySelectorAll('.hamburger_menu_item'),
    navToggle = document.querySelector('.nav_toggle'),
    hamSpan = document.querySelector('.hamburger')

function toggleHamMenu(){
    if (hamMenu.classList.contains('showHamMenu')){
        hamMenu.classList.remove('showHamMenu')
        hamSpan.style.display = 'block'
        hamSpan.style.transform = 'rotate(-180deg)'
        hamSpan.style.transition = 'all 0.5s'
        hamSpan.style.position = 'relative'
    } else {
        hamSpan.style.transform = 'rotate(180deg)'
        hamSpan.style.transition = "all 0.5s";
        hamMenu.classList.add('showHamMenu')
    }
}
navToggle.addEventListener('click', toggleHamMenu)

hamMenuItems.forEach(
    function (hamMenuItem){
        hamMenuItem.addEventListener('click', toggleHamMenu)
    }
)

const bathroomSquare = document.getElementById('bathroom-square'),
    checkboxBtns = document.querySelectorAll('.checkbox_decor'),
    result = document.getElementById('result');

const checkboxes = [
    { name: 'wall hung toilet', price: 4200 },
    { name: 'shower cabin', price: 25900 },
    { name: 'hygienic shower', price: 4500 },
    { name: 'niches and shelves', price: 3000 },
    { name: 'warm floor', price: 2600 },
    { name: 'trapdoor', price: 7600 },
    { name: 'fiber heater', price: 9000 }
]

let currentCheckboxPrice = 0
const takeCheckedCheckbox = currentChecked => {
    const dataCheckboxAttrValue = currentChecked.dataset.name
    const currentCheckboxItem = checkboxes.find(checkbox => checkbox.name === dataCheckboxAttrValue)
    currentCheckboxPrice = currentCheckboxItem.price
    console.log(currentCheckboxPrice)
}

let sum = 0
for (let checkbox of checkboxBtns){
    checkbox.addEventListener('click', () => {
        if (checkbox.checked === true){
            takeCheckedCheckbox(checkbox)
            sum +=currentCheckboxPrice
            resultPrinting()
        }
        else {
            sum -=currentCheckboxPrice
            resultPrinting()
        }
    })
}

const dropdownElements = document.querySelectorAll('.dropdown_content_items')

const dropdownButtons = [
    { name: 'ceramic plate', price: 2800 },
    { name: 'plaster', price: 800 },
    { name: 'mosaic', price: 9800 },
    { name: 'plastic panel', price: 500 },
    { name: 'marble', price: 15000 },
    { name: 'dye', price: 230 },
    { name: 'wallpaper', price: 1690 },
    { name: 'tile', price: 2700 },
    { name: 'porcelain stoneware', price: 660 },
    { name: 'quartz vinyl', price: 1643 },
    { name: 'natural stone', price: 10549 },
    { name: 'moisture resistant laminate', price: 1035 },
    { name: 'self-leveling floor', price: 1250 },
    { name: 'dyeing', price: 300 },
    { name: 'drywall', price: 920 },
    { name: 'plastic panel', price: 1210 },
    { name: 'suspended ceiling', price: 3400 },
    { name: 'slatted ceiling', price: 2600 },
    { name: 'stretched ceiling', price: 3165 },
    { name: 'wooden ceiling', price: 16000 },
    { name: 'plaster', price: 1250 }
]

let currentButtonPrice = 0

const takeClickedButton = currentClicked => {
    const dataButtonAttrValue = currentClicked.dataset.name
    const currentButtonItem = dropdownButtons.find(dropdownButton => dropdownButton.name === dataButtonAttrValue)
    currentButtonPrice = currentButtonItem.price * bathroomSquare.value
    console.log(currentButtonPrice)
}

for (let dropdownButton of dropdownElements){
    dropdownButton.addEventListener('click', () => {
        takeClickedButton(dropdownButton)
        console.log(sum +=currentButtonPrice)
        resultPrinting()
    })
}

function resultPrinting (){
    return result.innerHTML = `Общая стоимость ремонта: ${sum}₽`
}
