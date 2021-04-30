import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './Heading'
import Input from './Input'
import Button from './Button'
import TodoList from './TodoList'
import TabBar from './TabBar'

let todoIndex = 0

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }

  inputChange = (inputValue) => {
    console.log('Input Value: ', inputValue);
    this.setState({inputValue});
  }

  submitTodo = () => {
    if(this.state.inputValue.match(/^\s*$/)){
      return //비어있으면 반환x
    }
    const todo = { //비어있지 않으면 todo변수 생성
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++
    const todos = [...this.state.todos, todo] //새로운 todo를 기존 배열에 추가
    this.setState({ todos, inputValue: ''}, () => {
      console.log('State: ', this.state)
    })
  }

  deleteTodo = (todoIndex) => {    
    let { todos } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }

  toggleComplete = (todoIndex) => {    
    let todos = this.state.todos
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }

  setType = (type) => {
    this.setState({ type })
  }

  render() {
    const { inputValue, todos, type } = this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always'
                    style={styles.content}>
          <Heading />
          <Input 
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)} />
          <TodoList
            type={type}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos} />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App