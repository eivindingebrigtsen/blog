$(function(){
	// News ticker
	$.fn.newsTicker = function(options){
		return this.each(function(){
			$.newsTicker(this, options);
		});
	};
	$.newsTicker = function(el, options){
		var self = this;
		// Elementet vi skal finne nyhetene i
		self.element = $(el).addClass('news-ticker');
		self.newselements = self.element.children();

		// Sette opp et options objekt for innstillinger
		self.defaults = $.extend({},
		{
			start: 0,
			animate: 'fast'
		}, 
			options);
		self.activeNews = (self.defaults.start+1 || 1);

		// Funksjonen som setter dette igang
		self.init 				= function(){			
			self.buildTicker();
			self.addEvents();
		};

		// Funksjonen for å se neste nyhet
		self.nextSlide 		= function(){
			var item = self.newselements.filter(':visible');
			if(item.next(':not(.news-ticker)').length !== 0){
				self.newselements.hide(self.defaults.animate);
				item.next(':not(.news-ticker)').show(self.defaults.animate);
			}else{
				self.newselements.hide(self.defaults.animate).filter(':first').show(self.defaults.animate);
			}
		};
		// Funksjonen for å se forrige nyhet
		self.prevSlide 		= function(){
			var item = self.newselements.filter(':visible');
			if(item.prev(':not(.news-ticker)').length !== 0){
				self.newselements.hide(self.defaults.animate);
				item.prev(':not(.news-ticker)').show(self.defaults.animate);
			}else{
				self.newselements.hide(self.defaults.animate).filter(':last').show(self.defaults.animate);
			}

		};
		// Funksjonen for å bygge elementene til nyhetskarusellen
		self.buildTicker 	= function(){
			self.newselements.hide();
			self.element.find(':nth-child('+self.activeNews+')').show();
			self.previous = $('<a href="#" class="news-ticker-button prev">Previous</a>').prependTo(self.element);
			self.next = $('<a href="#" class="news-ticker-button next">Next</a>').appendTo(self.element);
		};
		// Funksjonen for å legge til events
		self.addEvents 		= function(){
			self.next.click(function(e){self.nextSlide();});
			self.previous.click(function(e){self.prevSlide();});
			$(document).keyup(function(e){
				var code = e.keyCode || e.which;
				if(code === 37){
					self.prevSlide();
				}
				if(code === 39){
					self.nextSlide();
				}
				
			})
		};
		self.init();
	};
});














