import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Todo, TodoInput } from '../schemas/Todo'


@Resolver(Todo)
export class TodoResolver {
    private todos: Todo[] = []

    @Query(_returns => [Todo], { nullable: true })
    async getTodos(): Promise<Todo[]> {
        return await this.todos
    }

    @Mutation(_returns => Todo)
    async addTodo(
        @Arg('todoInput') { title, description }: TodoInput
    ): Promise<Todo> {
        const todo = {
            id: Math.random(),
            title,
            description,
            status: false
        }

        await this.todos.push(todo)
        return todo
    }
}