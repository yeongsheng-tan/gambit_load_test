'use strict'

const EasyGraphQLLoadTester = require('easygraphql-load-tester')
const fs = require('fs')
const path = require('path')

const cacheQuerySchema = fs.readFileSync(path.join(__dirname, 'schema', 'schema.graphql'), 'utf8')

const loadTester = new EasyGraphQLLoadTester(cacheQuerySchema)

const queries = [
  {
    name: 'events(query: {sportType: SOCCER, marketPageType: Live})',
    query: `
      {
        events(query: {sportType: SOCCER, marketPageType: Live}){
          version
          eventId
          eventCode
          eventDate
          awayTeam{
            teamName {
              translations {
                language
                value
              }
            }
          }
          homeTeam{
            teamName {
              translations {
                language
                value
              }
            }
          }
        }
      }
    `
  }
]

const options = {
  selectedQueries: ['events(query: {sportType: SOCCER, marketPageType: Live})'],
  customQueries: queries,
}

const testCases = loadTester.artillery(options)

module.exports = {
  testCases
}