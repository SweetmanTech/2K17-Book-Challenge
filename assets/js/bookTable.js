const { createElement, render, Component } = preact; // or React
const h = createElement;

class BookTable extends Component {
    constructor(props) {
        super(props)

        this.books = [
            { name: "Happy", "author": "😀" },
            { name: "Angry", "emoji": "😠" },
            { name: "Really Angry", "emoji": "😡" },
            { name: "Sad", "emoji": "🙁" },
            { name: "Really Sad", "emoji": "☹️" },
            { name: "Poop", "emoji": "💩" }
        ];

        this.state = {
            book: {
                name: "[ Emoji Placeholder ]",
                author: null
            }
        }
    }

    handleButtonClick() {
        const book = this.bookss[Math.floor(Math.random()*this.books.length)];
        this.setState({ book });
    }

    render() {
        return (
            h('h1', null, 'Hello React')
        )
    }
}

// Render our BookTable to our container / wrapper element
render(h(BookTable), document.getElementById('book-container'));
