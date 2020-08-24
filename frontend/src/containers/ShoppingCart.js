import React, { Component } from 'react';
import axios from 'axios';

import CartView from '../components/ShoppingCart';
import { Redirect } from 'react-router-dom';

class ShoppingCart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //books: [],
            //message: "",
            Form: (
                <CartView 
                    books={[]}
                    message={""}
                    deleteItem={this.deleteItem}
                    modifyQuantity={this.modifyQuantity}
                    cancelPurchase={this.cancelPurchase}
                    confirmPurchase={this.confirmPurchase}
                />
            )
        }
    }

    componentDidMount() {
        this.setState({
            //books: JSON.parse(localStorage.getItem("shoppingCartStore")),
            Form: (
                <CartView 
                    books={JSON.parse(localStorage.getItem("shoppingCartStore"))}
                    message={""}
                    deleteItem={this.deleteItem}
                    modifyQuantity={this.modifyQuantity}
                    cancelPurchase={this.cancelPurchase}
                    confirmPurchase={this.confirmPurchase}
                />
            )
        }); 
    }

    deleteItem = (e, book) => {
        e.preventDefault();

        let cartStore = JSON.parse(localStorage.getItem("shoppingCartStore"));
        let newList = [];

        cartStore.map((storedBooks) => {
            if(storedBooks.id !== book.id) {
                newList.push(storedBooks);
            }           
        });

        localStorage.setItem("shoppingCartStore", JSON.stringify(newList));

        this.setState({
            //books: newList
            Form: (
                <CartView 
                    books={JSON.parse(localStorage.getItem("shoppingCartStore"))}
                    message={""}
                    deleteItem={this.deleteItem}
                    modifyQuantity={this.modifyQuantity}
                    cancelPurchase={this.cancelPurchase}
                    confirmPurchase={this.confirmPurchase}
                />
            )
        }); 

    }

    modifyQuantity = (id, value) => {
        
        let cartStore = JSON.parse(localStorage.getItem("shoppingCartStore"));
        let newList = [];

        cartStore.map((storedBooks) => {
            
            if(storedBooks.id !== id) { 
                newList.push(storedBooks);
            } else {
                let item = {
                    id: id,
                    title: storedBooks.title,
                    price: storedBooks.price,
                    quantity: value
                }
                newList.push(item);
            }          
        });

        /*this.setState({
            books: newList
        }); */
        localStorage.setItem("shoppingCartStore", JSON.stringify(newList));
        this.setState({
            //books: [],
            //message: "Su compra se ha cancelado",
            Form: (
                <CartView 
                    books={JSON.parse(localStorage.getItem("shoppingCartStore"))}
                    message={"Su compra se ha cancelado"}
                    deleteItem={this.deleteItem}
                    modifyQuantity={this.modifyQuantity}
                    cancelPurchase={this.cancelPurchase}
                    confirmPurchase={this.confirmPurchase}
                />
            )
        });
    }

    cancelPurchase = () => {
        
        let response = window.confirm("¿Desea cancelar la compra?");

        if(response === true) {
            this.setState({
                //books: [],
                //message: "Su compra se ha cancelado",
                Form: (
                    <CartView 
                        books={[]}
                        message={"Su compra se ha cancelado"}
                        deleteItem={this.deleteItem}
                        modifyQuantity={this.modifyQuantity}
                        cancelPurchase={this.cancelPurchase}
                        confirmPurchase={this.confirmPurchase}
                    />
                )
            });
            localStorage.setItem("shoppingCartStore", JSON.stringify([]));
        }
    }

    confirmPurchase = () => {

        const token = localStorage.getItem("token");
        if (!token) {
            alert("Inicie sesión para continuar");
        } else {
            let response = window.confirm("¿Desea continuar con su compra?");

            if(response === true) {
                
                const config = {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
                };

                let cartStore = JSON.parse(localStorage.getItem("shoppingCartStore"));
                let total = 0;
                let description = "Compra de ";
                let bookIds = [];
                let booksInStock = [];

                cartStore.map((book) => {
                    total += (book.price * book.quantity);
                    description = description + book.quantity + " libros de " + book.title + ", ";
                    bookIds.push(book.id);
                    booksInStock.push(parseInt(book.quantity));
                });

                let saleRecord = {
                    invoiceNumber: "RANDOM",
                    description: description,
                    totalPaid: total,
                    username: localStorage.getItem("session"),
                    bookIds: bookIds,
                    booksInStock: booksInStock
                }

                //console.log(saleRecord.bookIds);
                //console.log(saleRecord.booksInStock);
                
                axios.post('http://localhost:9000/sales/', saleRecord, config)
                .then(response => {
                    this.setState({
                        Form: (
                            <Redirect to={{
                                pathname:"/",
                                state: {
                                    from: this.props.location,
                                    salesData: response.data,
                                    message: "Hemos recibido su solicitud y será procesada por nuestros agentes. " +
                                    "Gracias por su compra."
                                }
                            }}/>
                        )
                    });
                })
                .catch(err => {
                    alert(err);
                    console.log(err);
                });

                
            }
        }      
    }

    render() {
        const { books, message, Form } = this.state;
        return(
            /*<CartView 
                books={books}
                message={message}
                deleteItem={this.deleteItem}
                modifyQuantity={this.modifyQuantity}
                cancelPurchase={this.cancelPurchase}
                confirmPurchase={this.confirmPurchase}
            />*/
            Form
            
        );
    }
    
}

export default ShoppingCart;