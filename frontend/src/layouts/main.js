import React from 'react';
import HeaderView from '../components/Header';
import FooterView from '../components/Footer';

function Main(props) {

    const { children } = props;

    return(
        
        <div>
            <HeaderView />
            <div className="clearfix"/>
            <div>
                {children}
            </div>
            <div className="clearfix"/>
            <FooterView />
        </div>
    );
}

export default Main;