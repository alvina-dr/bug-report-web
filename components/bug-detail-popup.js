import styles from './bug-detail-popup.module.css'

export default function BugDetailPopup() {
    return (
    <>
        <div id="bug-popup" className={styles.BugDetailPopup}>
            <button className={styles.BugDetailBackground} onClick={CloseBugDetail}></button>
            <div className={styles.BugDetail}>
                <button style={{alignSelf:"flex-end", justifySelf:"flex-start", position:"absolute"}} onClick={CloseBugDetail}>X</button>
                <img id="bug-detail-img" src={""} style={{width:"100%", height:"50%",  objectFit:"cover"}}/>
                <p id="bug-detail-description">description</p>
                <p id="bug-detail-logs">logs</p>
            </div>
        </div>
    </>
  );
}

function CloseBugDetail() 
{
    // document.body.style.position = 'static';
    // document.body.style.overflow = 'auto';
    const elem = document.getElementById("bug-popup");
    elem.style.display = "none";
}

