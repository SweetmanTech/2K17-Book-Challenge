var db = firebase.firestore();
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    alert("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    alert("Error adding document: ", error);
});
