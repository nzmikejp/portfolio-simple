import React, { Component } from 'react'

class Project extends Component{

    handleRemoveClick = (e) => {
        var id = this.props.id
        this.props.removeProject(id)
    }

    render(){
        return(
            <div className="card project">
                <img className="card-img-top" src={this.props.image} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <p>
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-edit" onClick={() => this.props.setActiveView('update-project')}></i>
                        <i className="fas fa-trash" onClick={this.handleRemoveClick}></i>
                    </p>
                </div>
            </div>
        )
    }
}

export default Project