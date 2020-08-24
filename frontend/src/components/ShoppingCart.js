import React from 'react';
import Main from '../layouts/main';

function CartView(props) {

    const { books, message, deleteItem, modifyQuantity, cancelPurchase, confirmPurchase } = props;

    let total = 0;

    return (
        <Main>
            <div className="center">
                <div id="content" className="peliculas" >

                    <h2 className="subheader">Harry Books - Tienda Online</h2>
                    <h3>Carrito de compras</h3>
                    
                    {books.length !== 0 ?
                        <div className="center">
                            <table className="products-table">
                                <thead>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Libros</td>
                                        <td>Cantidad</td>
                                        <td>Valor Unitario</td>
                                        <td>Valor Total</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books.map(book => ( 
                                        total += (book.price*book.quantity),
                                        <tr key={book.id}>
                                            <td><button onClick={(e) => deleteItem(e, book) } >Eliminar</button></td>
                                            <td>{book.title}</td>
                                            <td><input type="number" placeholder={book.quantity} 
                                                onChange={e => modifyQuantity(book.id, e.target.value)} 
                                            /></td>
                                            <td>${book.price}</td>
                                            <td>${book.price * book.quantity}.000</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table> 
                            <p>Valor total de la compra: ${total}.000</p>
                            <div className="clearfix"/>
                            <button onClick={cancelPurchase} >Cancelar la compra</button>
                            <button onClick={confirmPurchase}>Confirmar la compra</button>
                        </div> :
                        <div>
                            <p>El carrito está vacío</p>
                            <p>{message}</p>
                        </div>
                    }
                    

                </div>
            </div>
        </Main>
    );
    
}

export default CartView;