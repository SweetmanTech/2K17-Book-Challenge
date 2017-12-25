const { createElement, render, Component } = preact; // or React
const h = createElement;

class BookTable extends Component {
    constructor(props) {
        super(props)

        this.books = [
            { name: "Jab, Jab, Jab, Right Hook", "author": "Gary Vaynerchuk" , "subject":"social media", "rating":"8"},
            { name: "The War of Art: Break Through the Blocks and Win Your Inner Creative Battles", "author": "Steven Pressfield" , "subject":"creativity + discipline", "rating":"9"},
            { name: "Cryptocurrency: 4 Books in 1: Cryptocurrency, Bitcoin, Blockchain & Ethereum for Beginnersy", "author": "FinTech Publishing" , "subject":"Cryptocurrency", "rating":"5"},
            { name: "The Book on Tax Strategies for the Savvy Real Estate Investor", "author": "Amanda Han," , "subject":"real estate", "rating":"7"},
            { name: "Start With Why", "author": "Simon Sinek" , "subject":"entrepreneurship", "rating":"10"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
            { name: "The Internet of Money", "author": "Andreas M. Antonopoulos" , "subject":"cryptocurrency", "rating":"8"},
        ];

        this.state = {
            book: {
                name: "[ Emoji Placeholder ]",
                author: null
            }
        }
    }

    render() {
        return (
            h('table', {className: "alt"}, [
              h('thead', null,
                h('tr', null, [
                  h('th', null, "#"),
                  h('th', null, "Title"),
                  h('th', null, "Author"),
                  h('th', null, "Sweet Rating")
                ])),
              h('tbody', null,
                generateBooks(this.books)
              )
            ])
        )
    }
}

function generateBooks(books) {
  htmlBooks = []
  bookIndex = books.length;
  books.forEach(function(book) {
    htmlBooks.push(
      h('tr', null, [
        h('th', null, bookIndex),
        h('th', null, book.name),
        h('th', null, book.author),
        h('th', null, book.rating)
      ])
    )
    bookIndex --;
  })
  return htmlBooks;
}

// Render our BookTable to our container / wrapper element
render(h(BookTable), document.getElementById('book-container'));
