migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9hgct0dvmpmosir")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a9ytxqbp",
    "name": "text",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9hgct0dvmpmosir")

  // remove
  collection.schema.removeField("a9ytxqbp")

  return dao.saveCollection(collection)
})
