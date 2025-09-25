export default function Post({postTitle,userName,children}){
    return (
  <div style={
        {
        border:'solid 5px teal',
        margin:'10px',
        padding:'10px',
        boxShadow: '0px 15px 13px rgb(0 0 0 / 0.2)',
        textAlign:'center'
        }
        }>
            <h1>{postTitle}</h1>
            <span>{userName}</span>
            <hr />
           {children}
     </div>

    )
}