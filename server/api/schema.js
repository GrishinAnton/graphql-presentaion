const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type Step {
        title: String!
        completed: Boolean!
    }

    type Todo {
        id: ID
        title: String!
        completed: Boolean!
        steps: [Step]
    }

    enum Status {
        COMPLETED
        UNCOMPLETED
    }    

    type Query {
        todo(id: ID!): Todo!
        todos(status: Status): [Todo]
    }
`);