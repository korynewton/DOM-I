const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br/> Is <br/> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br/> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Header:
// Select a tags in Nav
const navSelector = document.querySelectorAll('header nav a')


//Selectors within cta-text class
const ctaTexth1 = document.querySelector('.cta-text h1')
const ctaTextButton = document.querySelector('.cta-text button')
const ctaImage = document.getElementById("cta-img")


//Main Content:
//Selectors within text-content classes
const textContentH4List = document.querySelectorAll('.text-content h4')
const textContentPList = document.querySelectorAll('.text-content p')

//Middle Image within main content:
const middleImage = document.getElementById('middle-img')


//Contact selectors:
const contactH4 = document.querySelector('.contact h4')
const contactPList = document.querySelectorAll('.contact p')


//Footer selectors:
const footerP = document.querySelector('footer p')



// Updating HTML

//Nav update:
navSelector[0].textContent = siteContent['nav']['nav-item-1']
navSelector[1].textContent = siteContent['nav']['nav-item-2']
navSelector[2].textContent = siteContent['nav']['nav-item-3']
navSelector[3].textContent = siteContent['nav']['nav-item-4']
navSelector[4].textContent = siteContent['nav']['nav-item-5']
navSelector[5].textContent = siteContent['nav']['nav-item-6']

//CTA update:
ctaTexth1.innerHTML = siteContent["cta"]["h1"]
ctaTextButton.textContent = siteContent["cta"]["button"]
ctaImage.src = siteContent["cta"]["img-src"]

//Main Content update:
textContentH4List[0].textContent = siteContent["main-content"]["features-h4"]
textContentH4List[1].textContent = siteContent["main-content"]["about-h4"]
textContentH4List[2].textContent = siteContent["main-content"]["services-h4"]
textContentH4List[3].textContent = siteContent["main-content"]["product-h4"]
textContentH4List[4].textContent = siteContent["main-content"]["vision-h4"]

textContentPList[0].textContent = siteContent["main-content"]["features-content"] 
textContentPList[1].textContent = siteContent["main-content"]["about-content"]
textContentPList[2].textContent = siteContent["main-content"]["services-content"]
textContentPList[3].textContent = siteContent["main-content"]["product-content"]
textContentPList[4].textContent = siteContent["main-content"]["vision-content"]

middleImage.src = siteContent["main-content"]["middle-img-src"]

// Contact Update:
contactH4.textContent = siteContent["contact"]["contact-h4"]
contactPList[0].innerHTML = siteContent["contact"]["address"]
contactPList[1].textContent = siteContent["contact"]["phone"]
contactPList[2].textContent = siteContent["contact"]["email"]

footerP.textContent = siteContent["footer"]["copyright"]
