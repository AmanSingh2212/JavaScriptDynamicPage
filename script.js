
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let clear = document.getElementById("clear");
let score = document.getElementById("number");
let error = document.getElementById("error");

let count = 0;

increment.addEventListener("click",() => {

       if(count >= 0)
        {
            decrement.disabled = false;
            clear.disabled = false;
            error.style.display = "none";
        }
          
       score.innerText = ++count;

});

decrement.addEventListener("click", () => {

      if(count == 0)
      {
         error.style.display = "block";
         count = 0;
         decrement.disabled = true;
      }
       else{
            console.log("hello");
            score.innerText = --count;
        }

});

clear.addEventListener("click", () => {
      
     count = 0;
     score.innerText = 0;

     clear.disabled = true;

})