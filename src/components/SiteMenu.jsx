
import ButtonTag from "./ButtonTage"
import '../index.css'

export default function SiteMenu(){
    return(
       <div style={{border:'solid teal 5px',display:'flex',flexWrap:'wrap',margin:'10px'}}>
      <ButtonTag text='New' imoje='🌟'/>
      <ButtonTag text='most read posts this week' imoje='🌟🌟'><img style={{width:'100px',borderRadius:'10px',margin:'5px'}} src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="img" /></ButtonTag>
      <ButtonTag text='Highlighted posts' imoje='🌟🌟🌟'><img style={{width:'100px',borderRadius:'10px',margin:'5px'}} src="https://images.unsplash.com/photo-1508780709619-79562169bc64" alt="img" /></ButtonTag>

       </div>
    )
}