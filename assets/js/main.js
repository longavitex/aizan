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


// header menu sticky when scroll
window.addEventListener('scroll', () => {
  let headerMenu = document.querySelector('.header-menu')
  if (headerMenu) {
    headerMenu.classList.toggle('sticky', window.scrollY > 700);
  }
})


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


// Testimonial Home1
$(".testimonial-block.style-one .container .row .list-avatar .avatar").slick({
  dots: false,
  arrows: true,
  prevArrow: '.prev-btn',
  nextArrow: '.next-btn',
  slidesToShow: 5,
  slidesToScroll: 5,
  touchThreshold: 100,
  swipe: true,
  swipeToSlide: true,
  autoplay: false,
  centerMode: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
  ]
});


// Change avatar testimonial home1
const prevBtn = document.querySelector('.testimonial-block.style-one .list-avatar .prev-btn')
const nextBtn = document.querySelector('.testimonial-block.style-one .list-avatar .next-btn')
const listCmt = document.querySelector('.testimonial-block.style-one .list-comment')
const commentItems = document.querySelectorAll('.testimonial-block.style-one .list-comment .cmt-item')

// Listen event click prev btn 
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    commentItems.forEach(item => {
      let indexCmt = item.getAttribute('data-name')
      let avatarCurrent = document.querySelector('.testimonial-block.style-one .list-avatar .slick-current')
      let indexAvatar = avatarCurrent.getAttribute('data-name')

      if (indexCmt === indexAvatar) {
        listCmt.querySelector('.active').classList.remove('active')
        item.classList.add('active')
      }
    })
  })
}

// Listen event click next btn 
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    commentItems.forEach(item => {
      let indexCmt = item.getAttribute('data-name')
      let avatarCurrent = document.querySelector('.testimonial-block.style-one .list-avatar .slick-current')
      let indexAvatar = avatarCurrent.getAttribute('data-name')

      if (indexCmt === indexAvatar) {
        listCmt.querySelector('.active').classList.remove('active')
        item.classList.add('active')
      }
    })
  })
}

// Listen event slide list avatar 
const slickList = document.querySelector('.testimonial-block.style-one .list-avatar .slick-list')

if (slickList) {
  slickList.addEventListener('mousemove', (e) => {
    commentItems.forEach(item => {
      let indexCmt = item.getAttribute('data-name')
      let avatarCurrent = document.querySelector('.testimonial-block.style-one .list-avatar .slick-current')
      let indexAvatar = avatarCurrent.getAttribute('data-name')

      if (indexCmt === indexAvatar) {
        listCmt.querySelector('.active').classList.remove('active')
        item.classList.add('active')
      }
    })
  })
}


// change active nav - Projects Home1
const listNav = document.querySelectorAll('.list-nav')
const filterItem = document.querySelectorAll('.item-filter')

if (listNav) {
  listNav.forEach(listNavItem => {
    listNavItem.onclick = function (selectedItem) {
      if (selectedItem.target.classList.contains("nav-item")) {
        // add active class
        listNavItem.querySelector('.active').classList.remove('active')
        selectedItem.target.classList.add('active')

        //get data-name value
        let filterName = selectedItem.target.getAttribute('data-name')

        filterItem.forEach((item) => {
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
  })
}


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


// Testimonial Home2
// const swiper = new Swiper(".list-comment-two", {
//   direction: "vertical",
//   slidesPerView: 1,
//   spaceBetween: 30,
//   mousewheel: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });


// change switch btn pricing Home2
const switchBtn = document.querySelector('.switch')
const listPricingMonth = document.querySelector('.list-pricing')
const listPricingYear = document.querySelector('.list-pricing-year')

if (switchBtn) {
  switchBtn.addEventListener('click', () => {
    switchBtn.classList.toggle('enable')

    let text = switchBtn.parentElement.querySelectorAll('.body3')

    text.forEach(item => {
      if (item.classList.contains('text-secondary')) {
        item.classList.remove('text-secondary')
        item.classList.add('text-on-surface')
      }
      else {
        item.classList.add('text-secondary')
      }
    })

    if (switchBtn.classList.contains('enable')) {
      listPricingMonth.classList.remove('show')
      listPricingMonth.classList.add('hide')
      listPricingYear.classList.remove('hide')
      listPricingYear.classList.add('show')
    } else {
      if (listPricingYear.classList.contains('show')) {
        listPricingYear.classList.remove('show')
      }
      listPricingYear.classList.add('hide')

      if (listPricingMonth.classList.contains('hide')) {
        listPricingMonth.classList.remove('hide')
      }
      listPricingMonth.classList.add('show')
    }
  })
}

// Video modal Home2
const videoModal = document.querySelector('.js-video-modal')
const videoModalContainer = document.querySelector('.js-video-modal-container')
const closeVideo = document.querySelector('.js-modal-close')
const playBtn = document.querySelectorAll('.play-btn')

//Show modal video
function showVideo() {
  if (videoModal) {
    videoModal.classList.add('open')
  }
}

//Close modal video
function removeVideoModal() {
  if (videoModal) {
    videoModal.classList.remove('open')
  }
}

//Listen click
if (playBtn) {
  playBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      videoModal.classList.add('open')
    })
  })
}

//Listen click and close modal video
if (closeVideo) {
  closeVideo.addEventListener('click', removeVideoModal)
}

//Listen click outside modal-container and close modal video
if (videoModal) {
  videoModal.addEventListener('click', removeVideoModal)
}

if (videoModalContainer) {
  videoModalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
  })
}


// Testimonial Home4
$(".instagram-block .list-image").slick({
  dots: false,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  touchThreshold: 100,
  swipe: true,
  swipeToSlide: true,
  autoplay: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  pauseOnDotsHover: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 340,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});


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