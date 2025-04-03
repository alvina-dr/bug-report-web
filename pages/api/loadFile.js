import fs from 'fs';
import { promises as fs } from 'fs';

export default async function JsonFile() {
    const folderPath = path.join(process.cwd(), 'reports/');
    const data = await fetch(folderPath)
    const posts = await data.json()
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }