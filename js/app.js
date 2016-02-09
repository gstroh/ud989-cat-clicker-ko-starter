var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.levels = ko.observableArray(["Newborn","Infant","Teen","Old"]);
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('Some web site');
	this.cat = ko.observableArray(["Tabby","Tiger","Black","Grumpy"]);
	this.catNickNames = ko.observableArray([
		{nickName: ["T1", "T2", "T3"]}
		]);

	this.level = ko.computed(function(){
		var l = Math.min(Math.floor(this.clickCount() / 10 ),3);
		return this.levels()[l];
	}, this);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);

	}
}

ko.applyBindings(new ViewModel());