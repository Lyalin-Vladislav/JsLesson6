
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

function makeGETRequest(metod, url) {  

  return promise = new Promise((resolve, reject) =>{

  	var xhr;
  	if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    	let arr = JSON.parse(xhr.response); 
      	resolve(arr);
    }else if(xhr.readyState === xhr.DONE){
    	reject("Error url:");
    }
  }

  xhr.open(metod, url);
  xhr.send();

  })  
}

makeGETRequest('GET', API)
	.then(data => {
	console.log(data)
	})
	.catch(() => {
	console.log('Error URL')
	})
	.finally(()=>{
		console.log('fianlle')
	});


fetch(API)		
	.then(response => response.json())
	.then(json => console.log('Вывод используя fetch() = ', json));

let serchInput = document.querySelector('.serchInput');
let serchButton = document.querySelector('.serchButton');


const productList = new ProductList();
productList.fetchProduct();
productList.render();
const showBasket = new ShowBasket();
showBasket.moveToCard();
// serchButton.addEventListener('click', () => {
// 	productList.filterProducts(serchInput.value)
// });

