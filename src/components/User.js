import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'
import axios from 'axios'

class User extends Component {
    static defaultProps = {
        name: "bilgi yok",
        salary: "bilgi yok",
        departmant: "bilgi yok"
    }
    state = {
        isVisible: false
    }

    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser = async (dispatch, e) => {
        const { id } = this.props
        const response=await axios.delete("http://localhost:3004/users/"+id)
        dispatch({ type: "DELETE_USER", payload: id }) // Hatalıydı, düzeltildi
    }

    render() {
        const { name, departmant, salary } = this.props
        const { isVisible } = this.state
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value // Doğru şekilde yazıldı
                        return (
                            <div className='col-md-8 mb-4'>
                                <div className="card" style={isVisible ? {backgroundColor:"#62848d"}:null}  >
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="d-inline" onClick={this.onClickEvent}>  
                                            {name}
                                        </h4>
                                        <i onClick={this.onDeleteUser.bind(this, dispatch)} // Düzeltilen yer
                                            className="fa-solid fa-trash"
                                            style={{ cursor: "pointer" }}>++</i>
                                    </div>
                                    {
                                        isVisible ? <div className="card-body">
                                            <p className="card-text">{salary}</p>
                                            <p className="card-text">{departmant}</p>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

User.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    departmant: PropTypes.string.isRequired
}

export default User
