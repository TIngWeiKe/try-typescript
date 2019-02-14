import * as React from 'react'
interface IState {
  currentTask?: any
}
class App extends React.Component<IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      currentTask: 'qq',
      task: []
    }
  }

  public handleSubmit(e: any): void {
    e.preventDefault()
  }

  public renderTask(e: any) {
    return this.state.currentTask.map((data: string) => {
      return <div key='data'>{data}</div>
    })
  }

  public render() {
    return (
      <div>
        
        <h1>React TypeScript!!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Add tasks' />
          <button type='submit' onClick={(e)=>this.renderTask(e)}>
            Add task
          </button>
        </form>
      </div>
    )
  }
}

export default App
