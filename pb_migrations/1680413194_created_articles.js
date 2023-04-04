migrate((db) => {
  const collection = new Collection({
    "id": "9hgct0dvmpmosir",
    "created": "2023-04-02 05:26:34.483Z",
    "updated": "2023-04-02 05:26:34.483Z",
    "name": "articles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3dutmaa0",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0nmppm7f",
        "name": "image",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "nmaxk3er",
        "name": "summary",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9hgct0dvmpmosir");

  return dao.deleteCollection(collection);
})
