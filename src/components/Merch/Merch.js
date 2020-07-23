import React from 'react';
import tshirt1 from '../../pictures/t-shirt1.png';
import tshirt2 from '../../pictures/t-shirt2.png';
import tshirt3 from '../../pictures/t-shirt3.png';
import tshirt4 from '../../pictures/t-shirt4.png';
import tshirt5 from '../../pictures/t-shirt5.png';
import cassette from '../../pictures/cassette.png';
import socks from '../../pictures/socks.png';
import {MerchItem} from './MerchItem/MerchItem';
import './Merch.css';

const Merch = () =>{
    return (
        <div className = "containerMerch container">
            <MerchItem photo={tshirt1} name={'T-shirt'} price={'15$'} />
            <MerchItem photo={tshirt2} name={'T-shirt'} price={'15$'} />        
            <MerchItem photo={tshirt3} name={'T-shirt'} price={'15$'} />
            <MerchItem photo={tshirt4} name={'T-shirt'} price={'17$'} />
            <MerchItem photo={tshirt5} name={'T-shirt'} price={'17$'} />
            <MerchItem photo={cassette} name={'S/T EP Cassette'} price={'8$'} />
            <MerchItem photo={socks} name={'Socks'} price={'8$'} />
        </div> 
    );
};

export {Merch};