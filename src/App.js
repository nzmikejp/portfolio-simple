import React, { Component } from 'react'
import axios from 'axios'
import View from './View'
import Project from './Project'
import AddProject from './AddProject'
import UpdatingProject from './UpdatingProject'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

var urlPrefix = 'http://localhost:4000/api' 

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
          type_id: 1
        },
        {
          id: 2,
          name: 'Sunset over Skycity',
          description: 'This is a Oil Painting of an icon Auckland',
          image: './images/project.jpg',
          type_id: 1
        },
      ],
      projectToUpdate: {}
    }
  }

  setActiveView = (view) => {
    this.setState({
      activeView: view
    })
  }

  setProjectToUpdate = (id) => {
    var foundProject = this.state.projects.find((project) => {
      return project.id === id
    })
    this.setState({projectToUpdate:foundProject})
  }


  getProjects = () => {
    axios.get(urlPrefix+'/projects')
    .then(res => {
      this.setState({projects:res.data})
    })
  }

  addProject = (data) => {
    axios.post(urlPrefix+'/projects',data)
    .then(res => {
      this.getProjects()
    })
  }
 
  deleteProject = (id) => {
    axios.delete(urlPrefix+'/projects/'+id)
    .then(res => {
      this.getProjects();
    })
  }
 
  updateProject = (id,data) => {
    axios.put(urlPrefix+'/projects/'+id,data)
    .then(res => {
      this.getProjects()
    })
  }

  componentDidMount(){
    this.getProjects()
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
              <h3><span>Our</span> Projects</h3>
              {
                this.state.projects.map((project) => {
                  var props = {
                    key: project.id,
                    setActiveView: this.setActiveView,
                    deleteProject: this.deleteProject,
                    setProjectToUpdate: this.setProjectToUpdate,
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
            {
              (() => {
                var props = {
                  addProject: this.addProject,
                  setActiveView: this.setActiveView
                }
                return (
                  <AddProject {...props}/>
                )
              })() //this is called a self invoking function which will run by itself.
            }
          </div>
        </View>

        <View viewName="update-project" activeView={this.state.activeView} className="color-1">
          <div className="header"><i className="fas fa-times" onClick={()=>this.setActiveView('home')}></i></div>
          <div className="main">
            <h2><span>Update</span> Projects</h2>
            <UpdatingProject {...this.state.projectToUpdate} updateProject={this.updateProject} setActiveView={this.setActiveView}/>
          </div>
        </View>

        <View viewName="nav" activeView={this.state.activeView} className="color-1">
          <div className="header"><i className="fas fa-times" onClick={()=>this.setActiveView('home')}></i></div>
          <div className="main">
            <ul className="menu">
              <li><a className="" href="#" onClick={() => this.setActiveView('home')}>Projects</a></li>
              <li><a className="" href="#" onClick={() => this.setActiveView('add-project')}>Add a project</a></li>
            </ul>
          </div>
        </View>

      </div>
    )
  }
}

export default App
