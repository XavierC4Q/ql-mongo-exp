const { mergeTypes, mergeResolvers } = require('merge-graphql-schemas');
const TestSchema = require('./types/test')
const TestResolver = require('./resolvers/test')

const types = [
  TestSchema
]

const resolvers = [
  TestResolver
]


const mergedTypes = mergeTypes(types)
const mergedResolvers = mergeResolvers(resolvers)


module.exports = {
  mergedTypes,
  mergedResolvers
}
