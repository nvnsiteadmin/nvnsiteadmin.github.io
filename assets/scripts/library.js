// script for storing writings and memories in in-memory database



// IndexedDB
// taken from: https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/
window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
    IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
    dbVersion = 1;


