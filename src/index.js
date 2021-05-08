import React from 'react'
import ReactDOM from 'react-dom'
import Comments from './comments'
import ApprovalCard from './approvalCard'
import faker from 'faker'

const App = () => {

    const style= {
        marginLeft:'6rem',
        padding:'.6em 1em',
        fontSize:'1.2rem',
        marginTop:'1rem',
        
        
    }

    return(
        <div className="ui comments " style={style}>

               

               <ApprovalCard>
                    <Comments name="Ayşe Yıldız" 
                                timeAgo='3'
                                star='5'
                                comment='React hello'  
                                avatar={faker.image.avatar()}
                                />
             </ApprovalCard>
            
            <ApprovalCard>
                        <Comments name="Selin Uçak"
                                timeAgo='5'
                                star='4'
                                comment='Node js Hello'
                                avatar={faker.image.avatar()}
                                />

            </ApprovalCard>

            <ApprovalCard>
                        <Comments   name={faker.name.firstName()}
                                timeAgo='3'
                                star='3.6'
                                comment={faker.commerce.productDescription()}
                                avatar={faker.image.avatar()}
                                />
               
            </ApprovalCard>
        </div> 
    )
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)