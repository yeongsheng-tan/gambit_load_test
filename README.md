## This project uses artillery.io and easygraphql-load-tester to generate simulated endured concurrent queries to GraphQL server

### Ensure updated tooling
```
npm i -g npm yarn prettier eslint tslint
```

### Install artillery.io & verify installation and quick test
```
npm install -g artillery
artillery -V
artillery quick --count 10 -n 20 https://odds-api.sbotest.com/graphql
```

### Install gqltools and introspect CacheServer gql schema
```
npm install -g graphql gql-tools
gqlschema https://odds-api.sbotest.com/graphql -t
```

### Install graphql load testing lib
```
npm i
```

