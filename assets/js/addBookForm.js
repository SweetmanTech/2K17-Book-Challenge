class AddBookForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            book: {
                name: "[ Book Placeholder ]",
                author: null
            }
        }
    }

    render() {
      // Initialize Cloud Firestore through Firebase
      var db = firebase.firestore();
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
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
        } else {
          alert("do not print form, Pat isn't signed in");
        }
      });
      return (
          h('form', {
            className: "alt",
            method: "post",
            action: "#"}, [
            h('div', {className:"field"},[
              h('label', {for: "addBookTitle"}, "Title"),
              h('input', {type: 'text', id:'addBookTitle'}, null)]
            ),
            h('div', {className:"field"},[
              h('label', {for: "addAuthor"}, "Author"),
              h('input', {type: 'text', id:'addAuthor'}, null)]
            ),
            h('div', {className:"field"},[
              h('label', {for: "addRating"}, "Rating"),
              h('input', {type: 'text', id:'addRating'}, null)]
            ),
            h('a', {href:"",
                    className: "button special"}, "add book btn")
          ])
      )
    }
}

// Render our BookTable to our container / wrapper element
render(h(AddBookForm), document.getElementById('add-book-form'));
