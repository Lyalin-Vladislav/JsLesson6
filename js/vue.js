'use strict';

new Vue({
	el: '.serch_input',
	data: {
		inputText: 'Serch for item...'
	},
	methods: {
		serchProducts(event) {
		productList.filterProducts(event.target.value);
		this.inputText = event.target.value;
		}
		
	}
});


