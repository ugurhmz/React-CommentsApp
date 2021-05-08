import React from 'react'
import ReactDOM from 'react-dom'
import Comments from './comments'
import faker from 'faker'

const App = () => {

    const style= {
        marginLeft:'6rem',
        padding:'1em 1em',
        fontSize:'1.5rem',
        marginTop:'1rem',
        
    }


    return(
        <div className="ui comments " style={style}>
              <Comments name="Ayşe Yıldız" 
                        timeAgo='3'
                        star='5'
                        comment='React hello'  
                        avatar={faker.image.avatar()}
                        />

              <Comments name="Selin Uçak"
                        timeAgo='5'
                        star='4'
                        comment='Node js Hello'
                        avatar={faker.image.avatar()}
                        />


            <Comments   name={faker.name.firstName()}
                        timeAgo='3'
                        star='3.6'
                        comment={faker.commerce.productDescription()}
                        avatar={faker.image.avatar()}
                        />

        </div> 
    )
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)