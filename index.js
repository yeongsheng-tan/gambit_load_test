'use strict'

const EasyGraphQLLoadTester = require('easygraphql-load-tester')
const fs = require('fs')
const path = require('path')

const cacheQuerySchema = fs.readFileSync(path.join(__dirname, 'schema', 'schema.graphql'), 'utf8')

const loadTester = new EasyGraphQLLoadTester(cacheQuerySchema)

const queries = [
  {
    name: 'events',
    query: `
      query($query:SportMarketQueryInputType!){
        events(query:$query) {
          eventId,
          eventCode,
          awayTeam {
            teamId
          }
        }
      },
      {
        "variables" {
          "query": {
            "sportType": "SOCCER",
            "marketPageType": "Live"
          }
        }
      }
    `
  }
]

const options = {
  selectedQueries: ['events(query: $query)'],
  customQueries: queries,
}

const testCases = loadTester.artillery(options)

module.exports = {
  testCases
}