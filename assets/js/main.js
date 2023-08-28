// Pop up newsletter
const popupNewsletter = document.querySelector('#popup-newsletter-block')
const popupNewsletterMain = document.querySelector('#popup-newsletter-block .popup-newsletter-main')
const closePopupNewsletterBtn = document.querySelector('#popup-newsletter-block .close-block')

window.onload = () => {
    if(popupNewsletter) {
        setTimeout(() => {
            popupNewsletter.classList.add('open')
        }, 400)
    }
}

if (closePopupNewsletterBtn) {
    closePopupNewsletterBtn.addEventListener('click', () => {
        popupNewsletter.classList.remove('open')
    })
}

// click outside mobile menu, close mobile menu
if (popupNewsletter) {
    popupNewsletter.addEventListener('click', () => {
        popupNewsletter.classList.remove('open')
    })
}

// prevent default behavior when clicking mobile menu
if (popupNewsletterMain) {
    popupNewsletterMain.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}


// mobile menu
const mobileMenuBtn = document.querySelector('.menu-humburger i')
const menuMobile = document.querySelector('#menu-mobile-block')
const menuMobileMain = document.querySelector('#menu-mobile-block .menu-mobile-main')
const closeMobileBtn = document.querySelector('#menu-mobile-block .close-block')
const subMenuMobile = document.querySelectorAll('#menu-mobile-block .sub-nav-mobile')

// click menu humburger icon, show mobile menu
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        menuMobile.classList.add('open')
    })
}

const itemLinks = document.querySelectorAll('#menu-mobile-block ul li')

itemLinks.forEach(item => {
    item.addEventListener('click', () => {
        item.querySelector('.sub-nav-mobile').classList.toggle('open')
    })

    let backIcon = document.querySelector('.sub-nav-mobile .back-block')
    backIcon.addEventListener('click', () => {
        subMenuMobile.classList.remove('open')
    })
})


// click icon close, close mobile menu
if (closeMobileBtn) {
    closeMobileBtn.addEventListener('click', () => {
        menuMobile.classList.remove('open')
    })
}

// click outside mobile menu, close mobile menu
if (menuMobile) {
    menuMobile.addEventListener('click', () => {
        menuMobile.classList.remove('open')
    })
}

// prevent default behavior when clicking mobile menu
if (menuMobileMain) {
    menuMobileMain.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}


// change type pricing
const chooseType = document.querySelector('.choose-type')
const listPricing = document.querySelectorAll('.list-pricing')

if (chooseType) {
    chooseType.onclick = function (selectedItem) {
        if (selectedItem.target.classList.contains("button")) {
            // add active class
            chooseType.querySelector('.active').classList.remove('active')
            selectedItem.target.classList.add('active')

            //get data-name value
            let filterName = selectedItem.target.getAttribute('data-name')

            listPricing.forEach((item) => {
                if (filterName === item.getAttribute('data-name')) {
                    item.classList.add('show')
                    item.classList.remove('hide')
                } else {
                    item.classList.remove('show')
                    item.classList.add('hide')
                }
            })
        }
    }
}


// open answer faqs
const questionItem = document.querySelectorAll('.question-item')

if (questionItem) {
  questionItem.forEach((item, index) => {
    let titleItem = item.querySelector('.question-item-main')
    let icon = item.querySelector('i')

    titleItem.addEventListener('click', () => {
      item.classList.toggle('open')

      if (item.classList.contains('open')) {
        setTimeout(() => {
          icon.classList.replace('ph-plus', 'ph-minus')
        }, 200)
      } else {
        setTimeout(() => {
          icon.classList.replace('ph-minus', 'ph-plus')
        }, 200)
      }

      removeOpen(index)
    })

    if (item.classList.contains('open')) {
      icon.classList.replace('ph-plus', 'ph-minus')
    } else {
      icon.classList.replace('ph-minus', 'ph-plus')
    }
  })
}

function removeOpen(index1) {
  questionItem.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove('open')
      item2.querySelector('i').classList.replace('ph-minus', 'ph-plus')
    }
  })
}