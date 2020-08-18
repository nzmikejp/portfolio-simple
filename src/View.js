import React, { Component } from 'react'

class View extends Component {

    render(){
        var {className, viewName, activeView, children} = this.props
        var newClassName = 'view ' + className

        return (viewName === activeView) ? (
            <div className={newClassName}>
                {children}
            </div>
        ) : null
    }
}

export default View