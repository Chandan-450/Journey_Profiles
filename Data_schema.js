use("Journey_Profiles")

// Create a schema for journey profiles as JSON.

db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["customer_id", "name", "stage"],
      properties: {
        customer_id: {
          bsonType: "string"
        },
        name: {
          bsonType: "string"
        },
        stage: {
          bsonType: "string"
        }
      }
    }
  }
})

// inserting single data at a time
db.journey_profiles.insertOne({
  customer_id: "C001",
  stage: "Awareness",
  last_event: "Website Visit",
  updated_at: new Date()
})


// inserting more than one data at a time
db.journey_profiles.insertMany([
  {
    customer_id: "C002",
    stage: "Awareness",
    last_event: "Website Visit",
    updated_at: new Date()
  },
  {
    customer_id: "C003",
    stage: "Consideration",
    last_event: "Product Demo",
    updated_at: new Date()
  }
])