##install packages
for installing packages run npm install or yarn install.

for DB used by typeorm. install <font color="lightblue">typeorm</font> as global

##add test data
add test.json file in the root direction in this format

```json
{
  "PreviousFlightState": "string",
  "NewFlightState": "string",
  "passenger": {
    "Name": "string",
    "Email": "string",
    "PhoneNo": "string",
    "Notifications": {
      "Confirmation": "boolean",
      "Cancelled": "boolean",
      "Landed": "boolean"
    }
  }
}
```

PreviousFlightState = <font color="lightblue">SCHEDULED | CANCELLED | ACTIVE | LANDED;</font>
NewFlightState = <font color="lightblue">SCHEDULED | CANCELLED | ACTIVE | LANDED;</font>
##Run project
for developers - node run dev

##Run tests
npm run test