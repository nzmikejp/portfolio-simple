import React, { Component } from 'react'

class AddProject extends Component {
    constructor(props){
        super(props)

        this.state = {
            nameInput: '',
            descriptionInput: '',
            imageInput: './images/project.jpg',
            typeInput: 1,
        }

    }

    handleNameInputChange = (e) => {
        this.setState({
            nameInput: e.target.value
        })
    }
    
    handleDesInputChange = (e) => {
        this.setState({
            descriptionInput: e.target.value
        })
    }
    
    handleTypeInputChange = (e) => {
        this.setState({
            typeInput: parseInt(e.target.value)
        })
    }

    handleAddClick = (e) => {
        e.preventDefault()
        var data = {
            name: this.state.nameInput,
            description: this.state.descriptionInput,
            image: this.state.imageInput,
            type: this.state.typeInput,
        }

        this.props.addProject(data)
        this.props.setActiveView('home')
        this.setState({
            nameInput: '',
            descriptionInput: '',
            imageInput: './images/project.jpg',
            typeInput: 1,
        })
    }

    render(){
        return(
            <form>
              <div className="form-group">
                <label htmlFor="name-input">Name</label>
                <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter project name" onChange={this.handleNameInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="name-input">Description</label>
                <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter project description" onChange={this.handleDesInputChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="name-input">Photo</label>
                <input type="text" className="form-control" name="photo-input" id="photo-input" value="project.jpg" />
              </div>

              <div className="form-group">
                <label htmlFor="type-input">Type</label>

                <select className="form-control" name="type-input" id="type-input" onChange={this.handleTypeInputChange}>
                  <option value="1">Painting</option>
                  <option value="2">Sculpture</option>
                  <option value="3">Digital</option>
                </select>

              </div>

              <button type="submit" className="btn btn-primary" onClick={this.handleAddClick}>Add</button>
            </form>
        )
    }
}

export default AddProject