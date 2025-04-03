import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function BugButton({title, index, description, url}) {
    return (
    <>
        <div style={{display: "flex", 
            flexDirection : "column", 
            margin: "auto", 
            backgroundColor:"red", 
            width:"calc(100% - 20px)", 
            height:"15vw", 
            margin:"10px", 
            alignItems:"center", 
            borderRadius:"5px"}} >
                <img src={url} style={{width:"100%", height:"10vw", position:"absolute", objectFit:"cover"}}/>
            <p style={{fontWeight:"bold", margin:"10px", alignSelf:"flex-end", justifySelf:"flex-start"}}>{index}</p>
            <p style={{fontWeight:"bold", marginTop:"7vw"}}>{title}</p>
            <p className="white">{description}</p>
        </div>

    </>
  );
}

