import { ToDoList } from './TodoList'

const anyTask = {
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

describe('ToDoList', () => {
  describe('Testing add', () => {
    test('should add a new task to the list', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })

    test('should not add an invalid task', () => {
      const todoInstance = new ToDoList()
      const invalidValue: any = {
        invalidField: 'invalidValue'
      }
      todoInstance.add(invalidValue)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([])
    })
  })

  describe('Testing updateTask', () => {
    test('should update an existing task', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      const updatedTask = {
        description: 'updated_description'
      }
      todoInstance.updateTask(0, updatedTask)
      const tasks = todoInstance.getTasks()
      expect(tasks[0].description).toEqual('updated_description')
    })

    test('should throw an error if index is out of bounds', () => {
      const todoInstance = new ToDoList()
      expect(() => {
        todoInstance.updateTask(1, {})
      }).toThrowError('Index out of bounds')
    })
  })

  describe('Testing removeTask', () => {
    test('should remove an existing task', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      todoInstance.removeTask(0)
      const tasks = todoInstance.getTasks()
      expect(tasks.length).toEqual(0)
    })

    test('should throw an error if index is out of bounds', () => {
      const todoInstance = new ToDoList()
      expect(() => {
        todoInstance.removeTask(1)
      }).toThrowError('Index out of bounds')
    })
  })
})
