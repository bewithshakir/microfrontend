import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
// mount function to start up the app
const mount = (el)=> {
    ReactDOM.render(
        <App/>,
        el
    )
}

// If application run in development and isolation 
// call mount immediately

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_marketing-dev-root')
    if (devRoot) {
        mount(devRoot)
    }
}
// We are running through container 
// and we should export mount function

export {mount}