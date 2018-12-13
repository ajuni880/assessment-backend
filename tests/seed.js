const clients = [
  {  
    "id":"44e44268-dce8-4902-b662-1b34d2c10b8e",
    "name":"Merrill",
    "email":"merrillblankenship@quotezart.com",
    "role":"user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0ZTQ0MjY4LWRjZTgtNDkwMi1iNjYyLTFiMzRkMmMxMGI4ZSIsImlhdCI6MTU0NDcxNDkyMH0.5WfP6ErauwwZQZLC-a30Q81rbpjRL8M4otzbh3QyLvI"
  },
  {  
    "id":"a0ece5db-cd14-4f21-812f-966633e7be86",
    "name":"Britney",
    "email":"britneyblankenship@quotezart.com",
    "role":"admin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsImlhdCI6MTU0NDcxNDg4NH0.G8Ec4CVMNB1PRAKeADIVUOmPpGbZG6mW07S_iAGM5w8"
  }
];

const policies = [
  {  
    "id":"7b624ed3-00d5-4c1b-9ab8-c265067ef58b",
    "amountInsured":399.89,
    "email":"inesblankenship@quotezart.com",
    "inceptionDate":"2015-07-06T06:55:49Z",
    "installmentPayment":true,
    "clientId":"a0ece5db-cd14-4f21-812f-966633e7be86"
  }
];

module.exports = {
  clients, 
  policies
}