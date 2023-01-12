const ul = document.querySelector('ul')
const bar = document.querySelector('.bar')
bar.addEventListener('click',()=>{
  if ( ul.style.display=='none') {
    ul.style.display='block'
  } 
  else {
    ul.style.display='none'
  }
})



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


const quote = document.querySelector('.quote');
const author = document.querySelector('.author');


function randomgen() {
    const random = Math.floor(Math.random() * 100)
    return random
}
Object.onload = api()
async function api (){
   await fetch('https://type.fit/api/quotes').then((response) => response.json())
        .then((data) => {
            const num = randomgen()
            for (let i = 0; i < data.length; i++) {

                quote.textContent =  "\""+data[num].text+"\"" 
                author.textContent ='-'+" "+data[num].author

            }

        }
        );
}