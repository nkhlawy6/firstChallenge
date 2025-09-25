
import ButtonTag from "./ButtonTage"
import '../index.css'

export default function SiteMenu(){
    return(
       <div style={{border:'solid teal 5px',display:'flex',flexWrap:'wrap',margin:'10px'}}>
      <ButtonTag/>
      <ButtonTag/>
      <ButtonTag/>
      <ButtonTag/>
      <ButtonTag/>
       </div>
    )
}