import { Field, ObjectType, InputType } from 'type-graphql'


// Object type is provided by TypeGraphQL and enables creating new object
// or schema. The class reflects the shape of the schema.
@ObjectType()
export class Todo {
    @Field()
    id: number

    @Field()
    title: string

    @Field()
    description: string

    @Field()
    status: boolean
}


// Input type defines the expected data for adding a new todo
@InputType()
export class TodoInput implements Partial<Todo> {
    @Field()
    title: string

    @Field()
    description: string
}