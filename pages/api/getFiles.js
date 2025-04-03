import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const folderPath = path.join(process.cwd(), 'reports/');

  try {
    const files = fs.readdirSync(folderPath); // Récupérer les fichiers du dossier
    const jsonFiles = files.filter(file => file.endsWith('.json')); // Filtrer les fichiers JSON

    // Debug : Affiche la réponse avant de la renvoyer
    console.log(jsonFiles);

        // Lire le contenu de chaque fichier JSON
        const jsonContents = jsonFiles.map(file => {
            const filePath = path.join(folderPath, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8'); // Lire le fichier JSON
            return {
              filename: file,
              content: JSON.parse(fileContent) // Parse le contenu JSON
            };
          });

    res.status(200).json(jsonContents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Impossible de lire le dossier' });
  }
}