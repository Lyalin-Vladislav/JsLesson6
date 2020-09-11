'use strict';

class Basket {
	constructor(title, pic, price) {
		this.title = title;
		this.pic = pic;
		this.price = price;
	}

	render(){
		return `
			<div class="basket_drop_menu_card">
				<img src="${this.pic}" height="85px" width="72px" alt="">
				<article>
					<h5>${this.title}</h5>
					<p class="single_star basket_single_star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></p>
					<div class="basket_drop_menu_value">
						<p>1</p>
						<p>x</p>
						<p>${this.price}</p>
					</div>
				</article>
				<a href="#" class="basket_drop_close"><i class="fas fa-times-circle"></i></a>
			</div>`;
	}
};

class ShowBasket {
	constructor(){
				
	}

	addProductBasket(element){		
		let parent = element.currentTarget;
		parent = parent.parentNode;
		parent = parent.parentNode;
		let pic = parent.children[0].children[0].src;
		let title = parent.children[2].innerHTML;
		let price = parent.children[3].innerHTML
		let httpOut = '';
		
		const basket = new Basket(title, pic, price);
		httpOut = basket.render();
		httpOut += document.querySelector('.basket_drop_menu').innerHTML
		document.querySelector('.basket_drop_menu').innerHTML = httpOut;
		let count = document.querySelector('.basket_point').innerHTML;
		document.querySelector('.basket_point').innerHTML = (parseInt(count) + 1);
		document.querySelector('.basket_drop_menu_total').children[1].innerHTML = showBasket.summBasket();
		let serchRemoveCard = document.querySelectorAll('.fas');
		serchRemoveCard.forEach(function (element) {element.addEventListener("click", showBasket.removeProductBasket);
		});
		
	}
	removeProductBasket(element){		
		let parent = element.currentTarget;
		parent = parent.parentNode;
		parent = parent.parentNode;		
		parent.outerHTML = "";			
		let httpOut = '';		
		let count = document.querySelector('.basket_point').innerHTML;
		document.querySelector('.basket_point').innerHTML = (parseInt(count) - 1);
		document.querySelector('.basket_drop_menu_total').children[1].innerHTML = showBasket.summBasket();
		
	}

	summBasket(){
		let products = document.querySelectorAll('.basket_drop_menu_value');
		let totalCount = 0;		
		products.forEach( element => totalCount += element.children[0].innerHTML * element.children[2].innerHTML);
		return `$${totalCount}.00`;
	}

	moveToCard(){
		let serchAddCard = document.querySelectorAll('.Product-pic-card');
		serchAddCard.forEach(function (element) {element.addEventListener("click", showBasket.addProductBasket);		
		});		
	}
}