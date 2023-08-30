// Pop up newsletter
const popupNewsletter = document.querySelector('#popup-newsletter-block')
const popupNewsletterMain = document.querySelector('#popup-newsletter-block .popup-newsletter-main')
const closePopupNewsletterBtn = document.querySelector('#popup-newsletter-block .close-block')

window.onload = () => {
  if (popupNewsletter) {
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


// Like Blog Detail
const comments = document.querySelectorAll('.blog-detail .blog-comment .comment-item .like')

if (comments) {
  comments.forEach(cmt => {
    cmt.addEventListener('click', () => {
      cmt.classList.toggle('liked')
      let heartIcon = cmt.querySelector('i')
      let numberLiked = cmt.querySelector('.text-button-small')
      let number = parseFloat(numberLiked.innerHTML);

      if (cmt.classList.contains('liked')) {
        heartIcon.classList.replace('ph', 'ph-fill')
        number = number + 1
        numberLiked.innerHTML = number.toString()
      }
      else {
        heartIcon.classList.replace('ph-fill', 'ph')
        number = number - 1
        numberLiked.innerHTML = number.toString()
      }
    })
  })
}


// Show, hide reply
// const showReplyBtn = document.querySelectorAll('.blog-detail .blog-comment .comment-item .cmt .text-button-small')
// const replies = document.querySelectorAll('.blog-detail .blog-comment .reply')

// if(showReplyBtn) {
//   showReplyBtn.forEach(btn => {
//     btn.addEventListener('click', () => {

//     })
//   })
// }


// Blogs home1
$(".list-blog .container .list").slick({
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 4,
  touchThreshold: 100,
  swipe: true,
  swipeToSlide: true,
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 500,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

// Change cursor
const listBlog = document.querySelectorAll('.list-blog .slick-list')
const mouseCursor = document.querySelector('.cursor')

if (listBlog) {
  listBlog.forEach(listNew => {
    listNew.addEventListener('mousemove', (e) => {
      mouseCursor.style.top = e.pageY + 'px'
      mouseCursor.style.left = e.pageX + 'px'
      mouseCursor.style.opacity = '1'
    })

    listNew.addEventListener('mouseout', (e) => {
      mouseCursor.style.opacity = '0'
    })

    listNew.addEventListener('mousedown', () => {
      mouseCursor.style.width = '60px'
      mouseCursor.style.height = '60px'
      mouseCursor.style.gap = '4px'
    })

    listNew.addEventListener('mouseup', () => {
      mouseCursor.style.width = '70px'
      mouseCursor.style.height = '70px'
      mouseCursor.style.gap = '12px'
    })
  })
}

// Testimonial Home4
$(".testimonial-block.style-four .container .row .list-testimonial").slick({
  dots: false,
  arrows: true,
  prevArrow: '.prev-btn',
  nextArrow: '.next-btn',
  slidesToShow: 1,
  slidesToScroll: 2,
  touchThreshold: 100,
  swipe: true,
  swipeToSlide: true,
  autoplay: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});