let userName = 'Max';

console.log(typeof userName);

type UserName = typeof userName;

const settings = {
  difficulty: 'easy',
  minLevel: 10,
  didStart: false,
  players: ['John', 'Jane'],
};

type Settings = typeof settings;

function loadData(d: typeof settings) {}

loadData(settings);
