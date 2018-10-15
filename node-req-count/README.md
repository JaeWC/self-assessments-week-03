## Node

Finish implementing the provided HTTP request handler

- [x] POSTing to a route should increment the endpoint's count on `globalCounter`.
- [x] GETting from a route should return the value stored at that property on `globalCounter`.

You can start the server by running `node index.js`, and test it with [Postman](https://www.getpostman.com/) or from Terminal with `curl`

```sh
# GET /prop1
curl 127.0.0.1:8000/prop1

# POST /prop1
curl -X POST 127.0.0.1:8000/prop1
```

### Example

- A POST to `/prop1` should set `globalCounter.prop1 = 1`
- A subsequent GET to `/prop1` should return `1`
- A subsequent POST to `/prop1` should set `globalCounter.prop1 = 2`
- A subsequent GET to `/prop1` should return `2`
- A subsequent GET to `/prop2` should return an empty response, as it has not yet been set.
