import React from "react";


const Comments = ({ name, timeAgo, star, comment, avatar }) => {


    

    const styleComment= {
        marginBottom:'1rem',
        padding:'1em 1em',
        
        
    }
  
  return (
    <div className="comment" style={styleComment}>
        <a className="avatar" href="/">
            <img  alt="avatar" src={avatar}  />
        </a>
        <div className="content">
            <a className="author" href="/">
                {name}
            </a>
            <div className="metadata">
            <div className="date">{ timeAgo } days ago </div>
            <div className="rating">
                <i className="star icon"></i> { star } Star
            </div>
            </div>
            <div className="text">
                    { comment }
            </div>
        </div>
    </div>
  );
};

export default Comments

