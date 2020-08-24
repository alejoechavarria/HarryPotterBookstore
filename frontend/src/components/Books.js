import React from 'react';
import Main from '../layouts/main';
import BookView from './Book';

function BooksView(props) {

    const { books, addToCart, onChangeInput, message } = props;
    return (
        <Main>
            <div className="center">
                <div id="content" className="peliculas" >

                    <h2 className="subheader">Harry Books - Tienda Online</h2>
                    <h3>Libros Disponibles</h3>
                    <div id="articles" className="peliculas">
                        {
                            books.map((book, i) => {
                                return (
                                    <BookView
                                        key={i}
                                        book={book}
                                        indice={book.id}
                                        addToCart={addToCart}
                                        onChangeInput={onChangeInput}
                                        message={message}
                                    />
                                )
                            }) 
                            
                        }
                    </div>
                </div>
            </div>
        </Main>
    );
    
}

export default BooksView;