import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
    return (
        <footer>
            <p>Made with <FontAwesomeIcon icon={faHeart} style={{margin: '0 0.2rem'}} /> by <a href="https://github.com/amaliacicala">Amalia Cicala</a></p>
        </footer>
    )
}