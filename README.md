# ExpressJS - RESTFul APIs

## Installation

```bash
npm install
```

## Run

```bash
npm start
```

## Run in Development Mode

```bash
npm run dev
```

## Test

```bash
npm test
```

## Port

```bash
3000
```

## List Movies

```bash
GET localhost:3000/movies
```

### Response

```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "year": 1994
  },
  {
    "id": 2,
    "title": "The Godfather",
    "year": 1972
  },
  {
    "id": 3,
    "title": "The Godfather: Part II",
    "year": 1974
  },
  {
    "id": 4,
    "title": "The Dark Knight",
    "year": 2008
  },
  {
    "id": 5,
    "title": "Fight Club",
    "year": 1999
  },
  {
    "id": 6,
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003
  },
  {
    "id": 7,
    "title": "The Good, the Bad and the Ugly",
    "year": 1966
  },
  {
    "id": 8,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001
  },
  {
    "id": 9,
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "year": 1980
  },
  {
    "id": 10,
    "title": "The Lord of the Rings: The Two Towers",
    "year": 2002
  }
]
```

## Get Movie

```bash
GET localhost:3000/movies/:id
```

### Request Params

|id|

### Response

```json
{
  "id": 1,
  "title": "The Shawshank Redemption",
  "year": 1994
}
```

## Create Movie

```bash
POST localhost:3000/movies
```

### Request Body

```json
{
  "title": "The Shawshank Redemption",
  "year": 1994
}
```

### Response

```json
{
  "id": 11,
  "title": "The Shawshank Redemption",
  "year": 1994
}
```

## Update Movie

```bash
PUT localhost:3000/movies/:id
```

### Request Params

|id|

### Request Body

```json
{
  "title": "The Shawshank Redemption",
  "year": 1994
}
```

### Response

```json
{
  "id": 11,
  "title": "The Shawshank Redemption",
  "year": 1994
}
```

## Delete Movie

```bash
DELETE localhost:3000/movies/:id
```

### Request Params

|id|

### Response

```json
{
  "id": 11,
  "title": "The Shawshank Redemption",
  "year": 1994
}
```

## Get by Title

```bash
GET localhost:3000/movies/:title
```

### Request Params

|title|

### Response

```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "year": 1994
  }
]
```

## Get by Year

```bash
GET localhost:3000/movies/:year
```

### Request Params

|year|

### Response

```json
[
  {
    "id": 10,
    "title": "The Lord of the Rings: The Two Towers",
    "year": 2002
  }
]
```

**If you like this repo, please don't forget to give a ⭐.**
