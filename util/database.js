import fs from 'node:fs';
import camelCase from 'camelcase-keys';
import { config } from 'dotenv-safe';

// import postgres from 'postgres';

console.log(fs);
// #region
/*
config();
const sql = postgres();
export async function getCourses(id) {


 const courses = await sql`
SELECT * FROM courses
WHERE id = ${id}
`;
return courses.map((courses) => camelCase(courses));
}
*/
export const missionReactDatabase = [
  {
    id: '1',
    planet: 'HTML planet',
    price: '100',
    description: 'Welcome to planet HTML. For all human',
  },
  {
    id: '2',
    planet: 'CSS planet',
    price: '200',
    description: 'Welcome to planet CSS. For human who know HTML',
  },
  {
    id: '3',
    planet: 'JAVASCRIPT planet',
    price: '600',
    description: 'Welcome to planet JAVASCRIPT. For human who know HTML, CSS',
  },
  {
    id: '4',
    planet: 'REACT planet',
    price: '500',
    description: 'Welcome to planet REACT. For human who know HTML, CSS, JAVASCRIPT',
  }
];