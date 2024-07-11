import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';

import styles from './styles.module.css';

const Layout = props => {
    const { children } = props;

    return (
        <div className={styles.layout}>
            <Sidebar />
            {children}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;