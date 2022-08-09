// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "My name is Susan Smith!"
  },
  {
    id: 2,
    name: "anna johnson",
    job: "ux designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "My name is Anna Johnson!"
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "My name is Peter Jones!"
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "My name is Bill Anderson!"
  },
];

// select items

const img = document.getElementById("person-img");
const susan = document.getElementById("susan");
const web = document.getElementById("web");
const paragraph = document.getElementById("paragraph");


const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");
const btn = document.querySelector(".btn");



// set starting item

let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});


// show person based on item

const showPerson = () => {
  const item = reviews[currentItem];
  img.src = item.img;
  susan.textContent = item.name;
  web.textContent = item.job;
  paragraph.textContent = item.text;
}


// show next person 

rightBtn.addEventListener('click', () =>{
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson();
});

leftBtn.addEventListener('click', () =>{
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();
});


// show random person

btn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
})

