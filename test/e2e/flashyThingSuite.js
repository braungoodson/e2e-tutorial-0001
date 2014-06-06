describe('app',function(){

	browser.get('http://localhost:3000');

	it('should exist',function(){

		element.all(by.css('.alert')).then(function(items){
			expect(items.length).toBe(4);
		});

	});

	it('should flashy thing',function(){

		element.all(by.css('.btn')).then(function(items){
			items[0].click();
			items[0].click();
			items[0].click();
			element.all(by.css('.alert-success')).then(function(items){
				items[0].getAttribute('class').then(function(cl){
					expect(cl).toBe('alert alert-success ng-binding');
				});
			});
		});

	});

});