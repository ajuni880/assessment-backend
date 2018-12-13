# Project

RESTful API - Manage clients data
This project was an assessment.
[Assessment details](https://www.dropbox.com/sh/gfqisikrhuslbu0/AADUE52toTZKPjM6AHmNrkKMa?dl=0)

## Getting Started

Clone this repo to test or play with the project. 

### Prerequisites

```
nodejs v >= 7.6
```

### Installing

Steps for running up the code

Install all the dependencies

```
npm install
```

Start the server

```
npm start
```
The server will run on http://localhost:4000

## Running the tests

Run automated tests

```
npm test
```

### Endpoints

**For testing you can use [Postman](https://www.getpostman.com/) or any other client.**

Test login. **Send body with email property**
```
POST /users/login
```

Test Get	user	data	filtered	by	user	id	->	Can	be	accessed	by	users	with	role	"users"	
and	"admin". **You must be logged in**.
```
GET /api/users/:id
```

Test Get	user	data	filtered	by	user	name	->	Can	be	accessed	by	users	with	role	
"users"	and	"admin". **You must be logged in. You must send name query param.**
```
GET /api/users/?name=name
```

Test Get	the	list	of	policies	linked	to	a	user	name	->	Can	be	accessed	by	users	with	
role	"admin"". **You must be logged in.**
```
GET /api/users/:name/policies
```

Get	the	user	linked	to	a	policy	number	->	Can	be	accessed	by	users	with	role	
"admin". **You must be logged in.**
```
GET /api/users/policies/:id
```

For further details you can check the tests files.

## Built With

* [Express](https://expressjs.com/) - Web Framework for workign with routing and template engines.
* [npm](https://www.npmjs.com/) - Node Package Manger - For dependencies
* [JWT](https://jwt.io) - Used for authentication
* [axios](https://jwt.io) - Library for handling HTTP requests
* [dotenv](https://www.npmjs.com/package/dotenv) - Used for load environment variables in process.env


