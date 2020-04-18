import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const { itemInput, handleChange, handleSubmit, editItem } = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book"></i>
                            </div>
                        </div>
                        <input
                            value={itemInput}
                            onChange={handleChange}
                            type="text" 
                            className="form-control text-capitalize" 
                            placeholder="Add a todo item" 
                        />
                    </div>
                    <button
                        type="submit" 
                        className={ editItem ? 'btn btn-block btn-success mt-3' : 'btn btn-block btn-primary mt-3' }
                    >
                        { editItem ? 'Save item' : 'Add item' }
                    </button>
                </form>
            </div>
        )
    }
}
