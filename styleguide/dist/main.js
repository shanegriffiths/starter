
var makeFriendlyName = function(string) {
	return string.replace(/-/g, ' ');
};

var small = "(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)";
var punct = "([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)";

this.titleCaps = function(title){
	var parts = [], split = /[:.;?!] |(?: |^)["Ò]/g, index = 0;

	while (true) {
		var m = split.exec(title);

		parts.push( title.substring(index, m ? m.index : title.length)
			.replace(/\b([A-Za-z][a-z.'Õ]*)\b/g, function(all){
				return /[A-Za-z]\.[A-Za-z]/.test(all) ? all : upper(all);
			})
			.replace(RegExp("\\b" + small + "\\b", "ig"), lower)
			.replace(RegExp("^" + punct + small + "\\b", "ig"), function(all, punct, word){
				return punct + upper(word);
			})
			.replace(RegExp("\\b" + small + punct + "$", "ig"), upper));

		index = split.lastIndex;

		if ( m ) parts.push( m[0] );
		else break;
	}

	return parts.join("").replace(/ V(s?)\. /ig, " v$1. ")
		.replace(/(['Õ])S\b/ig, "$1s")
		.replace(/\b(AT&T|Q&A)\b/ig, function(all){
			return all.toUpperCase();
		});
};

function lower(word){
	return word.toLowerCase();
}

function upper(word){
 	return word.substr(0,1).toUpperCase() + word.substr(1);
}

var doTree = function(data) {

	var items = [];

	$.each(data, function(key, value) {

		var hasChildren = typeof value !== "string",
			item = {
				name: key.replace('.html', ''),
				order: 9999
			};

		// check if the name has a priority
		if ( item.name.match('^[0-9]+[.]') !== null ) {
			item.order = parseInt(item.name.split('.')[0]);
			item.name = item.name.substring(item.name.indexOf('.') + 1);
		}

		if ( hasChildren ) {
			item.children = doTree(value);
		}

		if ( ! hasChildren ) {

			$.get('/styleguide/templates/' + value).done(function(html) {
				item.html = html;
			});

		}

		item.name = titleCaps(makeFriendlyName(item.name));

		items.push(item);

	});

	// sort the items by their order
	items.sort(function(a, b) { return a.order - b.order });

	return items;

};

// define the item component
Vue.component('tree', {
	template: '#item-template',
	props: {
		model: Object
	},
	methods: {
		hasChildren: function(items) {
			return typeof items.children !== "undefined";
		}
	}
});



// boot up the demo
var demo = new Vue({
	el: 'body',
	data: {
		treeData: {children: []}
	}
});

$.getJSON('./paths.json').done(function(data) {

	// apply the file structure to the vue app
	demo.treeData = {children: doTree(data)};


});
