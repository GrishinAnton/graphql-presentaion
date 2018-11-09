const {buildSchema} = require('graphql')
const path = require('path')
const fs = require('fs')

const Schema = fs.readFileSync(path.resolve(__dirname, 'schema.gql'), 'utf-8')

module.exports = buildSchema(Schema);