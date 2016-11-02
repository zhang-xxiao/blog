import Vue from 'vue';
import Vuex from 'vuex';
import store from './vuex/store';
//import App from './components/App.vue';
import Logo 		from './components/Logo.vue';
import Searchbox 	from './components/SearchBox.vue';
import Navigation 	from './components/Navigation.vue';
import Location 	from './components/Location.vue';
import Ad 			from './components/AD.vue';
import Articlelist 	from './components/ArticleCardList.vue';
import Featurelist 	from './components/FeatureCardList.vue';
import Pagination 	from './components/Pagination.vue';
import Personal 	from './components/Personal.vue';
import Contact 		from './components/ContactMe.vue';
import About 		from './components/AboutMe.vue';
import Footerbar 		from './components/Footer.vue';

//Vue.use(Vuex);
var vm = new Vue({
  store,
  el: '#app',
  components: { 
  	Logo, Searchbox, Navigation, Location, Articlelist, Featurelist, Pagination, Personal, 
  	Contact, About, Footerbar, Ad
  },
  methods:{
  	isArticleShow:function(){
  		return state.parentNavItem.text == '文章';
  	}
  },
  created: function(){
  	console.log('准备好了 ');
	this.$store.dispatch('articleCardListPageChange', this.$store.state.articleCurrentPage);
  }
});