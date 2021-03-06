import React from 'react';
import classNames from 'classnames';

import styles from "./Item.module.scss";

export function Item(props) {
    //can add className to this list, the div item might be div className
    var {item,className,...props} = props;
    return (
        
        <div className={classNames(styles.Item, className)}>
            <div className={styles.Rectangle}>
            <div className={styles.image}> { item.image} </div> 
            <div className={styles.name}> { item.name } </div> 
            <div className={styles.price}> { item.price } </div>
            </div>
        </div>
    )
}

export default Item;
