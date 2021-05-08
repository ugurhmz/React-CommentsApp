import React from 'react'
import ReactDOM from 'react-dom'
import Comments from './comments'


const App = () => {
    return(
        <div className="ui comments">
              <Comments />
        </div> 
    )
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)