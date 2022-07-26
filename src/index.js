// mandatory executables:
// [] GET request the API
// [] Listen event handlers and updating
//    the DOM




// 

//function fetching(forEach something
//   input the fetched data into:
//   also: name and restaurant name
//   comment:
//   rating:
// )




//fetch setting
ramen = "http://localhost:3000/ramens"
ramenId = "http://localhost:3000/ramens/:id"

 fetch(ramen)
  .then(res => res.json())
  .then(data => Object.key.forEach((ramenImage) => {
    
    //first up: ramen folder
const div = document.createElement('div');
div.setAttribute("id", "ramen-menu");

//ramen images
const img = document.createElement("img");
div.append(img); 
console.log(div);

//ramen photo info
const r = document.getElementById('rating-display');
const c = document.getElementById('comment-display');
r.innerText = " ";
c.innerText = " ";

})
);





