import styles from './bug-button.module.css'
import Image from "next/image";

export default function BugButton({title, index, description, url, logs}) {
function OpenBugDetail() 
{
    // document.body.style.position = 'sticky';
    // document.body.style.overflow = 'hidden';

    const elem = document.getElementById("bug-popup");
    elem.style.display = "flex";

    const bugImg = document.getElementById("bug-detail-img");
    bugImg.src = url;
    
    const bugDescription = document.getElementById("bug-detail-description");
    bugDescription.textContent = description;
    
    const bugLogs = document.getElementById("bug-detail-logs");
    bugLogs.textContent = logs;

    const bugIndex = document.getElementById("bug-detail-index");
    bugIndex.textContent = index;

    const bugName = document.getElementById("bug-detail-name");
    bugName.textContent = title;

    document.body.classList.add('overflow-y-hidden');
    document.documentElement.classList.add("overflow-y-hidden");
}

    return (
    <>
    <button onClick={OpenBugDetail} className={styles.BugButton}>
            <img src={url} style={{width:"100%", height:"100%",  objectFit:"cover"}}/>
            <p style={{fontWeight:"bold", margin:"10px", alignSelf:"flex-end", justifySelf:"flex-start", position:"absolute"}}>{index}</p>
            <p className={styles.FileName}>{title}</p>
            <p className={styles.Description}>{description}</p>
    </button>
    </>
  );
}
