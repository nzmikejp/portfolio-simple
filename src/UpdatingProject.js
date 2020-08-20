import React, { Component } from 'react'

class UpdatingProject extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.updateForm)
        var data = {
            name:formData.get('name-input'),
            description:formData.get('description-input'),
            type_id: parseInt(formData.get('type-input'))
        }

        var {updateProject, id, setActiveView} = this.props
        updateProject(id, data)
        setActiveView('home')
    }

    render(){
        var {name, description, type_id} = this.props

        return(
            <form onSubmit={this.handleFormSubmit} ref={(el) => {this.updateForm = el}}>
              <div className="form-group">
                <label htmlFor="name-input">Name:</label>
                <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter project name" defaultValue={name}/>
              </div>
              <div className="form-group">
                <label htmlFor="name-input">Description:</label>
                <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter project description" defaultValue={description}/>
              </div>

              <div className="form-group">
                <label htmlFor="name-input">Photo:</label>
                <input type="text" className="form-control" name="photo-input" id="photo-input" value="project.jpg" />
              </div>

              <div className="form-group">
                <label htmlFor="type-input">Type:</label>

                <select className="form-control" name="type-input" id="type-input" defaultValue={type_id}>
                  <option value="1">Painting</option>
                  <option value="2">Sculpture</option>
                  <option value="3">Digital</option>
                </select>

              </div>

              <button type="submit" className="btn btn-color">Update</button>
            </form>
        )
    }
}

export default UpdatingProject