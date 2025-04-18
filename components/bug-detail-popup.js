import styles from './bug-detail-popup.module.css'

export default function BugDetailPopup() {
    return (
    <>
        <div id="bug-popup" className={styles.BugDetailPopup}>
            <button className={styles.BugDetailBackground} onClick={CloseBugDetail}></button>
            <div className={styles.BugDetail}>
                {/* <button style={{alignSelf:"flex-end", justifySelf:"flex-start", position:"absolute"}} onClick={CloseBugDetail}>X</button> */}
                <img id="bug-detail-img" style={{width:"100%", height:"auto",  objectFit:"cover"}}/>
                <p id="bug-detail-index" style={{fontWeight:"bold", margin:"10px", alignSelf:"flex-end", justifySelf:"flex-start", position:"absolute"}}>1</p>
                <p className={styles.BugDetailName} id="bug-detail-name">name</p>
                <p className={styles.BugDetailDescription} id="bug-detail-description">description</p>
                <p className={styles.BugDetailLogs} id="bug-detail-logs">logs</p>
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

