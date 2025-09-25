

export default function ButtonTag({text,imoje,children}){
    return(
           <button className="btnTag" style={{ transition:'0.5s',backgroundColor:'teal',padding:'10px',margin:'10px',border:'none',borderRadius:'10px',color:'white',fontSize:'20px'}}>
            <div style={{display:'flex',gap:'5px',textTransform:'capitalize'}}>
            <h3>{text}</h3>
            <span>{imoje}</span>
            </div>
            {children}
            </button>
    )
}