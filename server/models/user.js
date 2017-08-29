{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "phoneNumber": {
      "type": "string",
      "pattern": "^([0-9]{3}-[0-9]{3}-[0-9]{4}$"
    },
    "email": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "firstName",
    "lastName",
    "phoneNumber",
    "email"
  ]
}