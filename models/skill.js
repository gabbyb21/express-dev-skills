const skills = [
  {id: 123, skill: 'HTML'},
  {id: 345, skill: 'CSS'},
  {id: 678, skill: 'JavaScript'}
];

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}