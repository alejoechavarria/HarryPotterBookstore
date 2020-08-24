import React from 'react';

function BookView(props) {

      
    const { title, price, stock, urlImage } = props.book;
    const { addToCart, indice, onChangeInput } = props;

    let disabled = false;
    if (stock===0) {
        disabled = true;
    }

    return (
        
        <article className="article-item" id="article-template">
            <div className="image-wrap">
                <img src={urlImage} alt={title} />
            </div>

            <h2>{title}</h2>
            {
                stock===0 ? 
                <p>Cantidad disponible: Agotado</p> :
                <p>Cantidad disponible: {stock}</p>
            }
            
            <p>Precio: {price}</p>
            <label>Agregar al carrito </label>
            <input type="number" onChange={e => onChangeInput('quantity', e.target.value)} />
            <button onClick={e => addToCart(indice, title, price)} disabled={disabled} >
                Agregar
            </button>

            <div className="clearfix"></div>
        </article>
        
    )
    
}

export default BookView;