exports.up = async (sql) => {
  await sql`
INSERT INTO courses
(planet, price, description)
VALUES

('HTML planet', '100', 'Welcome to planet HTML. For all human'),
('CSS planet', '200', 'Welcome to planet CSS. For human who know HTML'),
('JAVASCRIPT planet', '600', 'Welcome to planet JAVASCRIPT. For human who know HTML, CSS'),
('REACT planet', '500', 'Welcome to planet REACT. For human who know HTML, CSS, JAVASCRIPT')
 `;
}

exports.down = async (sql) => {
  await sql`

  `;
}
