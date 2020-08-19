import React, { Component } from 'react'
import View from './View'
import Project from './Project'
import AddProject from './AddProject'
import UpdatingProject from './UpdatingProject'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeView: 'home',
      projects: [
        {
          id: 1,
          name: 'This is a Sunset in Rangitoto',
          description: 'A photo realistic work of art by mike',
          image: './images/project.jpg',
          type: 1
        },
        {
          id: 2,
          name: 'Sunset over Skycity',
          description: 'This is a Oil Painting of an icon Auckland',
          image: './images/project.jpg',
          type: 1
        },
      ]
    }
  }

  setActiveView = (view) => {
    this.setState({
      activeView: view
    })
  }

  addProject = (data) => {
    var newProject = {
      id: Date.now(),
      ...data
    }

    var newProjectList = [newProject, ...this.state.projects]

    this.setState({
      projects: newProjectList
    })
  }

  removeProject = (id) => {
    var projects = this.state.projects
    var filtered = projects.filter((item) => {
      return item.id !== id
    })

    this.setState({
      projects: filtered
    })
  }


  render() {

    return (
      <div className="app">

        <View viewName="home" activeView={this.state.activeView} className="color-1">
            <div className="header">
              <i className="fas fa-plus" onClick={() => this.setActiveView('add-project')}></i>
              <i className="fas fa-bars" onClick={() => this.setActiveView('nav')}></i>
            </div>
            <div className="main">
              <h3>Projects</h3>
              {
                this.state.projects.map((project) => {
                  var props = {
                    key: project.id,
                    setActiveView: this.setActiveView,
                    removeProject: this.removeProject,
                    ...project
                  }

                  return (
                    <Project {...props}/>
                  )
                })
              }
            </div>
        </View>

        <View  viewName="add-project" activeView={this.state.activeView} className="color-1">
          <div className="header"><i className="fas fa-times" onClick={()=>this.setActiveView('home')}></i></div>
          <div className="main">
            <h3><span>Add</span> Projects</h3>
            <AddProject addProject={this.addProject} setActiveView={this.setActiveView}/>
          </div>
        </View>

        <View viewName="update-project" activeView={this.state.activeView} className="color-1">
          <div className="header"><i className="fas fa-times" onClick={()=>this.setActiveView('home')}></i></div>
          <div className="main">
            <h2><span>Update</span> Projects</h2>
            <UpdatingProject/>
          </div>
        </View>

        <View viewName="nav" activeView={this.state.activeView} className="color-1">
          <div className="header"><i className="fas fa-times" onClick={()=>this.setActiveView('home')}></i></div>
          <div className="main">
            <ul className="menu">
              <li><a className="" href="#" onClick={() => this.setActiveView('home')}>Projects</a></li>
              <li><a className="" href="#" onClick={() => this.setActiveView('add-project')}>Add a project</a></li>
              <li><a className="" href="#" onClick={() => this.setActiveView('update-project')}>Update a project</a></li>
            </ul>
          </div>
        </View>

      </div>
    )
  }
}

export default App
