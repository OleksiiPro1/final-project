const courses = [
	{planet: 'HTML planet', price: '100', description: 'Welcome to planet HTML. For all human'},
{planet: 'CSS planet', price: '200', description: 'Welcome to planet CSS. For human who know HTML'},
{planet: 'JAVASCRIPT planet', price: '600', description: 'Welcome to planet JAVASCRIPT. For human who know HTML, CSS'},
{planet: 'REACT planet', price: '500', description: 'Welcome to planet REACT. For human who know HTML, CSS, JAVASCRIPT'}
];

exports.up = async (sql) => {
  await sql`
INSERT INTO courses
${sql(courses, 'planet', 'price', 'description')}
`;
};



exports.down = async (sql) => {
	for (const course of courses) {
  await sql`
	DELETE FROM
	courses
	 WHERE
	 planet = ${course.planet} AND
	 price = ${course.price} AND
	 description = ${course.description}
  `;
	}
}
