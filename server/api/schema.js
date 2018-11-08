const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type Step {
        title: String!
        completed: Boolean!
    }

    """
    Описание
    """
    type Todo {        
        id: ID
        "Название Задачи"
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

    input StepInput {
        title: String!
        completed: Boolean = false
    }

    input TodoInput {
        title: String!
        complited: Boolean = false
        steps: [StepInput]
    }

    type Mutation {
        createTodo(input: TodoInput!): Todo
        updateTodo(id: ID!, input: TodoInput!): Todo
        deleteTodo(id: ID!): ID
    }
`);