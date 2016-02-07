var v1=window.location.hash.substring(1);
   if(v1=="para3")
   {
	var myFirebaseRef = new Firebase("https://gkfirebase.firebaseio.com//");
		myFirebaseRef.child("news3").on("value", function(snapshot) {
		var msg=(snapshot.val());
			document.getElementById('abc').innerHTML=msg;
			
		});
	}else if(v1=="para2")
   {
	var myFirebaseRef = new Firebase("https://gkfirebase.firebaseio.com//");
		myFirebaseRef.child("new2").on("value", function(snapshot) {
		var msg=(snapshot.val());
			document.getElementById('abc').innerHTML=msg;
			
		});
	}else if(v1=="para1")
   {
	var myFirebaseRef = new Firebase("https://gkfirebase.firebaseio.com//");
		myFirebaseRef.child("news1").on("value", function(snapshot) {
		var msg=(snapshot.val());
			document.getElementById('abc').innerHTML=msg;
			
		});
	}