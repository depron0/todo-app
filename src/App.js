import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import { Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function Todo({ todo, index, markTodo, removeTodo }){
  return (
    <section className='todo'>
      <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>{todo.text}</span>

      <section>
        <Button variant='outline-success' onClick={() => markTodo(index)}>✓</Button>
        <Button variant='outline-danger' onClick={() => removeTodo(index)}>✕</Button>
      </section>
    </section>
  )
}

function FormTodo({ addTodo }){
  const [value, setValue] = React.useState('')

  const handleSubmit = x => {
    x.preventDefault()
    if(!value) return
    addTodo(value)
    setValue('')
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><span>Add Todo</span></Form.Label>
        <Form.Control type='text' className='input' value={value} onChange={x => setValue(x.target.value)} placeholder="Add new todo"/>
      </Form.Group>

      <Button variant='primary mb-3' type='submit'>
        Add
      </Button>
    </Form>
  )
}


function App() {
  const [todos, setTodos] = React.useState(() => {
    const savedTodos = localStorage.getItem('todos')

    if(savedTodos){
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })

  const addTodo = text => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }

  const markTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isDone = true
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <section className='app'>
      <section className='container'>
        <h1 className='text-center mb-4'>Todo List</h1>
        <FormTodo addTodo={addTodo} />

        <section>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo 
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </section>
      </section>
    </section>
  )
}

export default App;
