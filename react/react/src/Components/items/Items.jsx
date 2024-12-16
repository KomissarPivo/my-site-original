import React, { Component } from 'react'
import s from "../items/Item.module.css";

const Item = ({ item, className }) => {
    return (
        <div className={className}>
            <div className={s.itemm}>
                <img src={"./img/" + item.img} alt={item.title} className={s.img} />
                <h2>{item.title}</h2>
                <p>{item.category}</p>
                <b>{item.price}$</b>
                <div className={s.add}>+</div>
            </div>
        </div>
    );
};

const items = [  
    { id: 1, title: 'Prey', img: 'Prey.png', category: 'steam', price: 1 },  
    { id: 2, title: 'Dishonored2', img: 'Dishonored2.png', category: 'steam', price: 10 },  
    { id: 3, title: 'DOOM', img: 'DOOM.png', category: 'uplay', price: 20 },  
    { id: 4, title: 'GhostRunner', img: 'GhostRunner.png', category: 'uplay', price: 30 },  
    { id: 5, title: 'HeartsOfIron4', img: 'HeartsOfIron4.png', category: 'origin', price: 100 },  
    { id: 6, title: 'Infamous2', img: 'Infamous2.png', category: 'origin', price: 99 },  
];  

const ItemList = ({ itemClass }) => {
    return (
        <div className={s.itemListContainer}>
            {items.map(item => (
                <Item key={item.id} item={item} className={itemClass} />
            ))}
        </div>
    );
};
export default ItemList;
