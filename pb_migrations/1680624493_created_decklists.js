migrate((db) => {
  const collection = new Collection({
    "id": "xca7k7n5oyhq9mu",
    "created": "2023-04-04 16:08:13.092Z",
    "updated": "2023-04-04 16:08:13.092Z",
    "name": "decklists",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ynwgmxwl",
        "name": "deck",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xca7k7n5oyhq9mu");

  return dao.deleteCollection(collection);
})
