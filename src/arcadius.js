/** Arcadius version .3001 **/

// Testing Storage

YUI({
    modules: {
        'gallery-storage-lite': {
            fullpath: 'http://yui.yahooapis.com/gallery-2010.02.22-22/build/gallery-storage-lite/gallery-storage-lite-min.js',
            requires: ['event-base','event-custom','event-custom-complex','json'],
            optional: [],
            supersedes: []
      }
 
    }
}).use('gallery-storage-lite','node', function (Y) {
 
    // For full compatibility with IE 6-7 and Safari 3.x, you should listen for
    // the storage-lite:ready event before making storage calls. If you're not
    // targeting those browsers, you can safely ignore this step.
    Y.StorageLite.on('storage-lite:ready', function () {
 
        // To store an item, pass a key and a value (both strings) to setItem().
        Y.StorageLite.setItem('kittens', 'fluffy and cute');
 
        // If you set the optional third parameter to true, you can use any
        // serializable object as the value and it will automatically be stored
        // as a JSON string.
        Y.StorageLite.setItem('pies', ['apple', 'pumpkin', 'pecan'], true);
 
        // To retrieve an item, pass the key to getItem().
        var kittens = Y.StorageLite.getItem('kittens');    // => 'fluffy and cute'
        //console.log(kittens)
 
        // To retrieve and automatically parse a JSON value, set the optional
        // second parameter to true.
        var pies = Y.StorageLite.getItem('pies', true); // => ['apple', 'pumpkin', 'pecan']
        console.log(pies)
 
        // The length() method returns a count of how many items are currently
        // stored.
        Y.StorageLite.length(); // => 2
 
        // To remove a single item, pass its key to removeItem().
        Y.StorageLite.removeItem('kittens');
 
        // To remove all items in storage, call clear().
        Y.StorageLite.clear();
 
 
 	

 
    });
	
	Y.one('#viewgames').on('click', function(e) {
        e.preventDefault();
        alert('event: ' + e.type + ' target: ' + e.target.get('tagName')); 
    });

 
});

arc = {
	init: function(){
		console.log("Arcadius Init Called.");
	}
}

arc.init();
