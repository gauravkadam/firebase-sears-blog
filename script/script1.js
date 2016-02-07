var myFirebaseRef = new Firebase("https://gkfirebase.firebaseio.com//");
		myFirebaseRef.child("news1").on("value", function(snapshot) {
		var msg=(snapshot.val());
			document.getElementById('link1').innerHTML=msg;
			
		});	
		myFirebaseRef.child("sub1").on("value", function(snapshot) {
		var msg=(snapshot.val());
			document.getElementById('sublink1').innerHTML=msg;
			
		});
		myFirebaseRef.child("sub2").on("value", function(snapshot) {
		var msg=(snapshot.val());
			document.getElementById('sublink2').innerHTML=msg;
			
		});
		myFirebaseRef.child("sub3").on("value", function(snapshot) {
		var msg=(snapshot.val());
			document.getElementById('sublink3').innerHTML=msg;
			
		});
		myFirebaseRef.child("new2").on("value", function(snapshot) {
		var msg1=(snapshot.val());
			document.getElementById('link2').innerHTML=msg1;
			
		});
			
			myFirebaseRef.child("news3").on("value", function(snapshot) {
		var msg2=(snapshot.val());
			document.getElementById('link3').innerHTML=msg2;
			
		});