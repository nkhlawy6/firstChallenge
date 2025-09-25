import ButtonTag from "./ButtonTage";
import "../index.css";

export default function SiteMenu({ postTags, postId }) {
    const str=true;
  return (
<div>
    {str?<div
      style={{
        border: "solid teal 5px",
        display: "flex",
        flexWrap: "wrap",
        margin: "10px",
      }}
    >
      <ButtonTag tags={postTags} imoje="🌟" />
    </div>:'no content'}
</div>
  );
}
