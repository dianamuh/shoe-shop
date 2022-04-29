let wrapper = document.querySelector(".sliderwrapper");
let menuItems=document.querySelectorAll('.menuItem');
let choosenImg=document.querySelector('.product-img')
let currentProductTitle = document.querySelector(".product-title");
let currentProductPrice = document.querySelector(".product-price");
let currentProductColors = document.querySelectorAll(".color");
let currentProductSizes = document.querySelectorAll(".size");
let close=document.querySelector(".btn-close")
let payment=document.querySelector(".payment")
let Buy=document.querySelector('.product-btn')
let arrivebtn=document.querySelector(".arrive-btn")


const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ]
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 139,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];
let choosenProduct=products[0]
menuItems.forEach((item,index)=>{
  item.onclick=function(){
    wrapper.style.transform=`translateX(${-100*index}vw)`
   choosenProduct=products[index];
   currentProductTitle.textContent=choosenProduct.title
   currentProductPrice.textContent='$'+choosenProduct.price
   choosenImg.src=choosenProduct.colors[0].img
   currentProductColors.forEach((color,index)=>{
     color.style.backgroundColor=choosenProduct.colors[index].code
   })
  }
})

currentProductColors.forEach((color,index)=>{
  color.onclick =function()
  {
    choosenImg.src=choosenProduct.colors[index].img
  }
})

currentProductSizes.forEach((size)=>{
  size.onclick=function(){
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor='#f5f5f5'
      size.style.color='black'
    })
    size.style.backgroundColor='black'
    size.style.color='#f5f5f5'
  }
})
close.onclick=function(){
payment.style.display='none'
}
close.onmouseover=function(){
  close.style.backgroundColor='#f5f5f5'
}
close.onmouseleave=function(){
  close.style.backgroundColor='white'
}
Buy.onclick=function(){
  payment.style.display='flex'
}
arrivebtn.onclick=function(){
window.scroll(0,0)}