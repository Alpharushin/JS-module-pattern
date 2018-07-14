$(document).ready(function(){

	(function(){
		var openNavigation = {

			init: function(){
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$('#toggleNavigation').on('click', openNavigation.toggleNavigation );
			},

			toggleNavigation: function(event){
	    	event.preventDefault();
				$(".navigation").toggleClass('navigation-open');
				$('html').toggleClass('hide-scroll');
				$('body').toggleClass('hide-scroll');
			}
		};

		openNavigation.init();

	}());

});