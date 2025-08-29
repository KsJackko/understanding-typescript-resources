function getLength(val: string | any[]) {
  if (typeof val === 'string') {
    const numberOfWords = val.split(' ').length;
    return `The length of this string is ${numberOfWords}`;
  }
  return val.length;
}

const numOfWords = getLength('does this work?') as string;
const numItems = getLength(['Sports', 'good']);
