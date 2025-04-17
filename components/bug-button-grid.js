import BugButton from "@/components/bug-button";
import Head from 'next/head'
import React from 'react';
import { useEffect, useState } from 'react';
// import JsonFile from "@/pages/api/loadFile";

export default function BugButtonGrid() 
{

    const [files, setFiles] = useState([]);
    
    useEffect(() => {
        const fetchFiles = async () => 
        {
            const response = await fetch('/api/getFiles');  // Appel à l'API côté serveur
            const data = await response.json();
            setFiles(data);

        };
    
        fetchFiles();
    }, []);

    console.log(files);

    return (
    <>
    <div style={{display:"grid", width:"100%", gridTemplateColumns: "20vw 20vw 20vw 20vw"}}>
    {files.length > 0 ? (
        files.map((element, index) => {
            console.log(element);
            return <BugButton key={index} title={element.filename} description={element.content.description} index={index} url={element.content.screenUrl} logs={element.content.logs} />;
        })
        
        // ((fileName, content, index) => {
        //     // var result = JSON.parse(fileName);
        //     console.log(files[index]);
        //     return <BugButton key={files.valueOf(index)} title={fileName} />;
        // } ) // Assure-toi d'ajouter une clé unique
      ) : (
        <div>Aucun fichier trouvé</div>
      )}
    
    </div>

    </>
  );
}
