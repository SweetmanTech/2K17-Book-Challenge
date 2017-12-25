class AddBookForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            book: {
                name: "[ Emoji Placeholder ]",
                author: null
            }
        }
    }

    // <form method="post" action="#">
    //   <div class="field half first">
    //     <label for="name">Name</label>
    //     <input type="text" name="name" id="name" />
    //   </div>
    //   <div class="field half">
    //     <label for="email">Email</label>
    //     <input type="text" name="email" id="email" />
    //   </div>
    //   <div class="field">
    //     <label for="message">Message</label>
    //     <textarea name="message" id="message" rows="4"></textarea>
    //   </div>
    //   <ul class="actions">
    //     <li><input type="submit" value="Send Message" class="special" /></li>
    //     <li><input type="reset" value="Reset" /></li>
    //   </ul>
    // </form>
    render() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          alert("display add form");
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
              h('input', {type: 'text', id:'bookTitle'}, null)]
            ),
            h('div', null, "author field"),
            h('div', null, "rating field"),
            h('div', null, "add book btn")
          ])
      )
    }
}

// Render our BookTable to our container / wrapper element
render(h(AddBookForm), document.getElementById('add-book-form'));
