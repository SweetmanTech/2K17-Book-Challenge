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
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
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
        } else {
          alert("do not print form, Pat isn't signed in");
        }
      });
    }
}

// Render our BookTable to our container / wrapper element
render(h(AddBookForm), document.getElementById('add-book-form'));
