import { openDB } from 'idb';

let db;

const dbName = 'BookShelf';
const storeName = 'books';

const getConnection = async () => {
  const version = 1;

  const newDB = await openDB(dbName, version, {
    upgrade(newVersionDB, oldVersion, newVersion, transaction) {
      newVersionDB.createObjectStore(storeName, { autoIncrement: true });
    },
  });

  return newDB;
};

export async function getBook(id) {
  if (!db) db = await getConnection();

  const tx = db.transaction(storeName, 'readwrite');
  const store = await tx.store;

  const book = await store.get(id);
  await tx.done;

  return { ...book, id };
}

export async function createBook(book) {
  if (!db) db = await getConnection();

  const tx = db.transaction(storeName, 'readwrite');
  const store = await tx.store;

  const storedValue = await store.add(book);
  await tx.done;

  return storedValue;
}

export async function deleteBook(id) {
  if (!db) db = await getConnection();

  const tx = db.transaction(storeName, 'readwrite');
  const store = await tx.store;

  await store.delete(id);
  await tx.done;
}

export async function updateBook({ id, ...book }) {
  if (!db) db = await getConnection();

  const tx = db.transaction(storeName, 'readwrite');
  const store = await tx.store;

  await store.put(book, id);
  await tx.done;
}

export async function getAllBooks() {
  if (!db) db = await getConnection();

  const tx = db.transaction(storeName, 'readwrite');
  const store = await tx.store;

  const keys = await store.getAllKeys();
  const books = await store.getAll();
  await tx.done;

  return books.map((book, i) => ({ ...book, id: keys[i] }));
}
