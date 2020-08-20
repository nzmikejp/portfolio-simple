import React, { Component } from 'react'

class Project extends Component{

    handleUpdateClick = () => {
        var {setActiveView, setProjectToUpdate, id} = this.props
        setActiveView('update-project')
        setProjectToUpdate(id)
    }

    handleDeleteClick = () => {
        var {id, deleteProject} = this.props
        deleteProject(id)  
    }

    render(){
        var {name, description,} = this.props

        return(
            <div className="card project">
                <img className="card-img-top" src="./images/project.jpg" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-edit" onClick={this.handleUpdateClick}></i>
                        <i className="fas fa-trash" onClick={this.handleDeleteClick}></i>
                    </p>
                </div>
            </div>
        )
    }
}

export default Project