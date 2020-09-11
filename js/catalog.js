'use strict';

const products = [
{ title: 'MANGO PEOPLE Сoat', pic: 'img/1657.png', price: 150 },
{ title: 'MANGO PEOPLE Сoat', pic: 'img/1877.png', price: 350 },
{ title: 'MANGO PEOPLE Jacket', pic: 'img/1907.png', price: 180 },
{ title: 'MANGO PEOPLE T-shirt', pic: 'img/1937.png', price: 20 },
{ title: 'MANGO PEOPLE Hoody', pic: 'img/1967.png', price: 80 },
{ title: 'MANGO PEOPLE Jacket', pic: 'img/1997.png', price: 100 },
{ title: 'MANGO PEOPLE Jacket', pic: 'img/2027.png', price: 90 },
{ title: 'MANGO PEOPLE Jacket', pic: 'img/2057.png', price: 120 },
{ title1: 'MANGO PEOPLE T-shirt', pic: 'img/2087.png', price1: 20 }
];

class ProductItem {
	constructor (title = 'product', pic = 'noVisible.jpg', price = 0){
		this.title = title;
		this.pic = pic;
		this.price = price;
	}
	render() {
		return `
			<div class="Product-pic-version">
				<a href="#" class="Product-pic-pic">
					<img src="${this.pic}" alt="pics">
				</a>
				<div class="Product-pic__shedow">
					<a href="#" class="Product-pic-card">
						<img class="Product-pic-card__img-move" src="img/fetured-pic/1287.png" alt="">
						<p class="Product-pic-card__p-move">Add to Card</p>
					</a>
					<a href="#" class="Product-pic-revers">
						<img src="img/fetured-pic/2075.png" alt="">
					</a>
					<a href="#" class="Product-pic-like">
						<img src="img/fetured-pic/2079.png" alt="" class="Product-pic-like__img">
					</a>
				</div>		
				<a href="#" class="Product-pic-content">${this.title}</a>
				<p class="paragraph">${this.price}</p>
			</div>
		`;
	}
}

class ProductList {
	construcror(){
		this.products = [];
		this.serchProducts = [];
	}

	fetchProduct(){
		this.products = products;
		this.serchProducts = this.products;
	}

	render(){
		let outHtml = '';		
			this.serchProducts.forEach( ({ title, pic, price }) => {
				const productItem = new ProductItem(title, pic, price);				
				outHtml += productItem.render();
			});		 
		document.querySelector(".Product-pic").innerHTML = outHtml;
	
	}

	filterProducts(value) {
		const regexp = new RegExp(value, 'i');
		this.serchProducts = this.products.filter(product => regexp.test(product.title));
		this.render()
	}
	
}