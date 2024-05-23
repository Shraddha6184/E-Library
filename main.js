


function buy(){
          username=prompt("Enter your Name")
          surname=prompt("Enter your Surname")
          address=prompt("Enter your Address")
          email=prompt("Enter Email")
          contact=parseInt(prompt("Enter Your Contact Number"))
          alert(`Customer Details\n\nName: ${username+" "+surname}\nAddress: ${address}\nE-mail: ${email}\nContact:${contact}`)
      
    alert("Book Purchased Successfully")
}

async function allBooks(){
    
    const res = await fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=J207UVdXPV6owYzmmIiJS5SusqpDAEXx")
    const data = await res.json()
    book=data.results.books
    console.log(data.results.books)
             
    dataStore="";
    

   book.forEach((i)=> {
    
            dataStore += `
    
            <div class="books" style="width: 18rem;">
            <img src="${i.book_image}" class="card-img-top" alt="...">
            <h5 class="card-title" id="title"><b>${i.title}</b></h5>
            <p id="${i.rank}" class="card-text">  ₹ ${i.price=(Math.floor(Math.random()* 1000))} </p>
            <div class="layer">
                <p class="card-text">${i.description}</p><br>
                <p class="card-text">Author<br><b>${i.author}</b></p>
                
                <p class="buynow"  onclick="buy()" >BUY NOW</p>
            </div>
        </div>`
        // document.getElementById(`${i.rank}`).innerHTML = Math.random();
        
        
        })
        booklist.innerHTML = dataStore;

        const searchBox = document.getElementById("search-box");
         searchBox.addEventListener("input", filterBooks);

         function filterBooks() {
         const query = searchBox.value.toLowerCase();
         const books = document.querySelectorAll(".books");

         books.forEach((book) => {
        const title = book.querySelector("#title").textContent.toLowerCase();
      if (title.includes(query)) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  }


}
allBooks()





// function low(){
//     // book.sort((a, b) => {return a.price - b.price });
//     price((a, b) => a.price - b.price);
    
// }
// console.log(low());


