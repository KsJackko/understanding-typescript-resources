// const mainUserName = 'Jackko';

// const greeting = `Hi there, ${mainUserName}.`;

type ReadPermissions = 'no-read' | 'read';
type WritePremissions = 'no-write' | 'write';

type FilePermissions = `${ReadPermissions}-${WritePremissions}`;

type DataFile = {
  data: string;
  permission: FilePermissions;
};

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
  [key in DataFileEventNames]: () => void;
};
