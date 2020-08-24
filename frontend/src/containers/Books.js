import React, { Component } from 'react';
import axios from 'axios';

import BooksView from '../components/Books';

class Books extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            quantity: 0,
            shoppingCartStore: [],
        }
    }

    componentDidMount() {
        axios.get("http://localhost:9000/books/")
        .then(response => {
            this.setState({books: response.data});
        })
        .catch(err => {
            console.log(err);
        });

        if(!JSON.parse(localStorage.getItem("shoppingCartStore"))) {
            localStorage.setItem("shoppingCartStore", JSON.stringify(this.state.shoppingCartStore));
        }

        if(this.props.location.state!==null && this.props.location.state!==undefined) {
            
                console.log(this.props.location.state);
                localStorage.setItem("shoppingCartStore", JSON.stringify([]));
                      
        }
        
    }

    componentDidUpdate() {
        if(this.props.location.state!=undefined) {
            console.log(this.props.location.state);
            alert(this.props.location.state.message)
        }
    }

    addToCart = (indice, title, price) => {

        let shoppingCartStore = JSON.parse(localStorage.getItem("shoppingCartStore"));
        
        let bookFound = shoppingCartStore.find((book) => {
            if(book.id === indice) {
                //console.log(book);
                return true;

            }
        });

        if(bookFound !== undefined) {
            console.log("Este libro ya está almacenado");
            let bookList = [];
            let updateBook;
            shoppingCartStore.map((book) => {
                if(book.id === indice) {
                    updateBook = {
                        id: indice,
                        title: book.title,
                        price: book.price,
                        quantity: this.state.quantity
                    }
                    bookList.push(updateBook);
                } else {
                    bookList.push(book);
                }
            });
            localStorage.setItem("shoppingCartStore", JSON.stringify(bookList));

        } else {
            console.log("No hay libros guardados");

            let newBook = [
                ...shoppingCartStore,   
                {
                    id: indice,
                    title: title,
                    price: price,
                    quantity: this.state.quantity
                }
                
            ];
            localStorage.setItem("shoppingCartStore", JSON.stringify(newBook));

        }

        
    }

    /*addToCart = (indice, title, price) => {

        let shoppingCartStore = JSON.parse(localStorage.getItem("shoppingCartStore"));

        let newItem = {
            id: indice,
            title: title,
            price: price,
            quantity: this.state.quantity
        }


        let newBook = [
            ...shoppingCartStore,   
            newItem
            
        ];
        localStorage.setItem("shoppingCartStore", JSON.stringify(newBook));

    }*/

    onChangeInput = (input, value) => {
        this.setState({ [input]: value });
    }

    render() {
        const { books } = this.state;
        let show = "null";

        if(this.props.location.state!=undefined) {
            show = this.props.location.state.message;
        }
        return(
            
            <BooksView
                books={books}
                addToCart={this.addToCart}
                onChangeInput={this.onChangeInput}
                message={show}
            />
            
        );
    }
    
}

export default Books;