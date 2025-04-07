export default function BugDetailPopup() {
    return (
    <>
        <div id="bug-popup" style={{display: "flex", 
            flexDirection : "column", 
            margin: "auto", 
            backgroundColor:"blue", 
            width:"80%", 
            height:"60vh", 
            margin:"auto", 
            alignItems:"center", 
            borderRadius:"5px",
            overflow:"hidden",
            zIndex:"500",
            position:"fixed",
            display:"none"}} >
            <button style={{alignSelf:"flex-end", justifySelf:"flex-start", position:"absolute"}} onClick={CloseBugDetail}>X</button>
            <h3>POPUP</h3>
            <img id="bug-detail-img" src={""} style={{width:"100%", height:"50%",  objectFit:"cover"}}/>
            <p id="bug-detail-description">description</p>
            <p id="bug-detail-logs">logs</p>
        </div>

    </>
  );
}

function CloseBugDetail() 
{
    const elem = document.getElementById("bug-popup");
    elem.style.display = "none";
}

