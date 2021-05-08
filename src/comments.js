import React from "react";


const Comments = ({ name, timeAgo, star, comment, avatar }) => {


    

    const styleComment= {
        marginBottom:'1rem',
        border:'1px solid black',
        borderRadius:'.8em',
        padding:'1em 1em',
        boxShadow:'2px  5px 5px #7bacdd',
        
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

