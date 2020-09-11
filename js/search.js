"use strict";

Vue.component('search_input', {	
	template: `<input class="serchInput" type="text" v-on:input="serchProducts($event)">`

});
