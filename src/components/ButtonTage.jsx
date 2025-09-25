export default function ButtonTag({ tags, imoje, children }) {
  return (
    <button
      className="btnTag"
      style={{
        transition: "0.5s",
        backgroundColor: "teal",
        padding: "10px",
        margin: "10px",
        border: "none",
        borderRadius: "10px",
        color: "white",
        fontSize: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "5px", textTransform: "capitalize" }}>
        {tags.map((tag, index) => {
          return (
            <h3
              key={index}
              style={{
                fontSize: "15px",
                border: "1px solid gray",
                textAlign: "center",
                padding: "3px",
                borderRadius: "3px",
              }}
            >
              {tag}
            </h3>
          );
        })}
        <span>{imoje}</span>
      </div>
      {children}
    </button>
  );
}
