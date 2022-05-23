// appending all the data here 

let productsArr = JSON.parse(localStorage.getItem("products")) || [];


function Showthat(){
    productsArr.forEach(function(ele,i){
        console.log(ele,i);
        let small = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("id","avtaar")
        img.src = ele.Image;

        let name = document.createElement("h4");
        name.innerText = ele.Type;

        let course = document.createElement("p");
        course.innerText = ele.Description;

        let unit = document.createElement("p");
        unit.innerText = ele.Price;

        // let batch = document.createElement("p");
        // batch.innerText = ele.Userbatch;

        let remove = document.createElement("button");
        remove.innerText = "Delete Card"
        remove.addEventListener("click", function(){
            Delit(ele,i);
        });
        
        small.append(img,name,course,unit,remove);

        document.querySelector("#all_products").append(small);
    })
}
function Delit(ele,i){
    productsArr.splice(i,1);
    localStorage.setItem("products",JSON.stringify(productsArr));
    window.location.reload();
}
Showthat();