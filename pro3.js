function  displayProducts() {
const products = [
  {id:1, name: "laptop", category:"Electronics", price:85000, stock:5},
  {id:2, name: "Mouse", category:"Accessories", price: 1500, stock:0},
  {id:3, name: "keybord", category:"Accessories", price:3500, stock:10},
  {id:4, name: "Moniter", category:"Electronics", price:25000, stock:3},
  {id:5, name: "us cable",category: "Accessories", price:700, stock:15},
    ]; 
   products.forEach(item => {
    if(item.stock > 0) {
    console.log(`${item.name} is available`)
    } else {
        console.log (`${item.name} is not available`);
    }
});
}  

displayProducts();