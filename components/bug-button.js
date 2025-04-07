import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function BugButton({title, index, description, url}) {
function OpenBugDetail() 
{
    console.log("click button");
    const elem = document.getElementById("bug-popup");
    elem.style.display = "flex";

    const bugImg = document.getElementById("bug-detail-img");
    bugImg.src = url;
    
    const bugDescription = document.getElementById("bug-detail-description");
    bugDescription.textContent = description;
    
    const bugLogs = document.getElementById("bug-detail-logs");
    bugLogs.textContent = index;
}

    return (
    <>
    <button onClick={OpenBugDetail}
    style={{display: "flex", 
            flexDirection : "column", 
            margin: "auto", 
            backgroundColor:"red", 
            width:"calc(100% - 20px)", 
            margin:"10px", 
            alignItems:"center",
            border:"none", 
            borderRadius:"5px",
            overflow:"hidden"}} >
            <img src={url} style={{width:"100%", height:"100%",  objectFit:"cover"}}/>
            <p style={{fontWeight:"bold", margin:"10px", alignSelf:"flex-end", justifySelf:"flex-start", position:"absolute"}}>{index}</p>
            <p style={{fontWeight:"bold", margin:"10px"}}>{title}</p>
            <p>{description}</p>
    </button>
    </>
  );
}
