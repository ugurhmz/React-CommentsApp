import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'


const App = () => {
    return(
        <div>
            <div className="ui comments">
                <div className="comment">
                    <a  className="avatar" href="/">
                        <img alt="avatar" src={faker.image.avatar()} />
                    </a>
                    <div className="content">
                     <a className="author" href="/">Stevie Feliciano</a>
                    <div className="metadata">
                        <div className="date">2 days ago</div>
                        <div className="rating">
                        <i className="star icon"></i>
                        5 Faves
                        </div>
                    </div>
                    <div className="text">
                        Hey guys, I hope this example comment is helping you read this documentation.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)