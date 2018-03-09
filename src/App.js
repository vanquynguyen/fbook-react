import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      books: [
        {title: "he", author:'q1', url: 'http://localhost:3000'},
        {title: "hi", author:'q2', url: 'http://localhost:3000'},
        {title: "ha", author:'q3', url: 'http://localhost:3000'},
        {title: "ho", author:'q4', url: 'http://localhost:3000'},
        {title: "hic", author:'q5', url: 'http://localhost:3000'},

      ],
      errors:[],
    }
  }

  addNewBook = () => {
    if(!this.refs.title.value) this.state.errors.push("Name required.");
    if(!this.refs.author.value) this.state.errors.push("Author required.");
    if(!this.refs.url.value) this.state.errors.push("Author required.");
    if(this.state.errors.length === 0) {
        let list = this.state.books;
        list.push ({
            title: this.refs.title.value,
            author: this.refs.author.value,
            url: this.refs.url.value
        })
        this.setState({
            books : list,
            alert : null
        });
        this.refs.title.value = null;
        this.refs.author.value = null;
        this.refs.url.value = null;

        swal("Good job!", "You clicked the button!", "success");
    } else {
        swal("Error job!", "You clicked the button!", "warning");
    }
  }

  updateBook = () => {
    if(!this.refs.title.value) this.state.errors.push("Name required.");
    if(!this.refs.author.value) this.state.errors.push("Author required.");
    if(!this.refs.url.value) this.state.errors.push("Author required.");
    if(this.state.errors.length === 0) {
        let list = this.state.books;
        list.push ({
            title: this.refs.title.value,
            author: this.refs.author.value,
            url: this.refs.url.value
        })
        this.setState({
            books : list,
            alert : null
        });

        swal("Good job!", "You clicked the button!", "success");
    } else {
        swal("Error job!", "You clicked the button!", "warning");
    }
  }

  editBook = (index) => {
    let list = this.state.books; 

    this.setState({
        books : list
    });

    this.refs.title.value = list[0].title;
    this.refs.author.value = list[0].author;
    this.refs.url.value = list[0].url;
    list.splice(index, 1);
  }

  removeBook = (index) => {
    let list = this.state.books; 
    console.log(index)
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
        });
        list.splice(index, 1);
        this.setState({
            books : list
        });
    } else {
        swal("Your imaginary file is safe!");
    }
    });
  }

  render() {
    const data = this.state.books;

    const listBook = data.map((book, index) => 
      <tr key={index}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td><a href={book.url}>{book.url}</a></td>
        <td>
            <a className="btn btn-success" onClick={ this.editBook.bind(this, index)}><i className="fa fa-pencil"></i></a>
            <a className="btn btn-danger" onClick={ this.removeBook.bind(this, index) }><i className="fa fa-trash-o"></i></a>
        </td>
      </tr>
    );

    return (
      <div className="App container">
        <div className="page-header">
            <img src="http://book.framgia.vn/images/icon.jpg" alt="" width="67" height="60" />
            <span> FBook</span>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">Add New Books</h3>
            </div>
            <div className="panel-body">
                <form id="form" className="form-inline">
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" id="bookTitle" className="form-control" ref="title"/>
                    </div>
                    <div className="form-group">
                        <label>Author:</label>
                        <input type="text" id="bookAuthor" className="form-control" ref="author"/>
                    </div>
                    <div className="form-group">
                        <label>Url:</label>
                        <input type="text" id="bookUrl" className="form-control" ref="url"/>
                    </div>
                    <button type="button" className="btn btn-primary" value="Add Book" onClick={ this.addNewBook }>Ok</button>
                </form>
            </div>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">Book List</h3>
            </div>
            <div className="panel-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Url</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listBook }
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
