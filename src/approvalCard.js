import React from 'react'



const ApprovalCard = ( props ) => {



    return(
        <div className="ui card" style={{
            width:'700px',
            boxShadow:'2px  5px 5px #7bacdd',
            backgroundColor:'lightblue',
            
        }}>
            <div className="content">
                {props.children}
            </div>

            <div className="extra content">
                <span className="left floated like">
                <i className="like icon"></i>
                    Like
                </span>
                <span className="right floated star">
                <i className="star icon"></i>
                    Favorite
                </span>
            </div>
        </div>
    )

}

export default  ApprovalCard