//store the products array in localstorage as "products"

let productsArr = JSON.parse(localStorage.getItem("products")) || [];
// document.querySelector("#form").addEventListener("submit",Submitit);

// function Products(t,d,p,i){
//     this.type = t;
//     this.description = d;
//     this.price = p;
//     this.image = i;
// }

function Submitit(event){
    event.preventDefault();
    // console.log("I am here")
  // let type = form.type.value;
  // let Description = form.desc.vlaue;
  // let Price = form.price.vlaue;
  // let Image = form.image.vlaue;

    let obj = {
      Type : form.type.value,
      Description : form.desc.value,
      Price : form.price.value,
      Image : form.image.value
    }
    productsArr.push(obj);
    localStorage.setItem("products",JSON.stringify(productsArr));
    window.location.reload();
    
}
console.log(productsArr);

// addNow();
// Submitit();