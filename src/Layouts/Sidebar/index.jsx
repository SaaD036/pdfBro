import React from 'react';

import styles from './styles.module.css';

const Sidebar = props => {
    return (
        <div className={styles.sidebar}>
            <div>Logo Section</div>
            <div>Items</div>
            <div>Footer</div>
        </div>
    );
}

Sidebar.propTypes = {};

export default Sidebar;