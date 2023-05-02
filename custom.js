function getProdcuts(){
    let str = '';
    axios.get('https://fakestoreapi.com/products').then((res)=>{
        //console.log(res.data);
        res.data.forEach((items, index)=>{
            str += `<div class="col-sm-4 mt-3">
            <div class="card">
                <img class="card-img-top pimage" src="${items.image}" alt="Card image">
                <div class="card-body">
                  <h4 class="card-title">Category : ${items.category}</h4>
                  <p class="card-text">Rs: ${items.price}</p>
                  <a href="#" onclick="singleProductDetail(${items.id})" data-toggle="modal" data-target="#myModal"  class="btn btn-primary">View Details</a>
                </div>
              </div>
        </div>`
        })
        document.getElementById("result").innerHTML = str;
    }).catch((error)=>{ console.log(error) })
}
getProdcuts();


async function singleProductDetail(pid){
  //console.log(pid);
  let res = await axios.get(`https://fakestoreapi.com/products/${pid}`);
  console.log(res.data);
  document.getElementById('title').innerHTML = res.data.title;
  document.getElementById('category_ame').innerHTML = res.data.category;
  document.getElementById('productimage').innerHTML = `<img src=${res.data.image} class='img-fluid' />`;
  document.getElementById('price').innerHTML = res.data.price;
  document.getElementById('desc').innerHTML = res.data.description;
  document.getElementById('rating').innerHTML = res.data.rating.rate;
}

async function getAllCategory(){
  let res = await axios.get('https://fakestoreapi.com/products/categories');
  //console.log(res.data);
  let str = '';
  res.data.forEach((items)=>{
    str += `<li class="nav-item">
              <a class="nav-link" href="#" onclick='getCategoryProduct(this.innerText)'>${items}</a>
            </li>`
  });
  document.getElementById('category_data').innerHTML = str;
}
getAllCategory();

async function getCategoryProduct(categoryname){
  let str = '';
  //console.log(categoryname);
 let res =  await axios.get(`https://fakestoreapi.com/products/category/${categoryname}`);
 //console.log(res.data);
 res.data.forEach((items, index)=>{
  str += `<div class="col-sm-4 mt-3">
  <div class="card">
      <img class="card-img-top pimage" src="${items.image}" alt="Card image">
      <div class="card-body">
        <h4 class="card-title">Category : ${items.category}</h4>
        <p class="card-text">Rs: ${items.price}</p>
        <a href="#" onclick="singleProductDetail(${items.id})" data-toggle="modal" data-target="#myModal"  class="btn btn-primary">View Details</a>
      </div>
    </div>
</div>`
 });
 document.getElementById("result").innerHTML = str;
}

