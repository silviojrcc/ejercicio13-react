import React from 'react';
import PropTypes from 'prop-types';

const Titulo = ({ content }) => {
    return (
        <section className='text-center p-5 bg-black text-light'>
            <h1>{ content }</h1>
        </section>
    );
};

Titulo.propTypes = {
    content: PropTypes.string.isRequired
}

export default Titulo;