type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = {
  type: 'file',
  path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db'; connectionUrl: string };
const dbSource: DBSource = {
  type: 'db',
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function isFile(source: Source) {
  return source.type === 'file';
}

function loadData(source: Source): void {
  // Open + read file OR reach out to database server
  // if ('path' in source)
  if (isFile(source)) {
    console.log(source.path);
    // use that to open the file
    return;
  }
  console.log(source.connectionUrl);
  // connect to database
}
