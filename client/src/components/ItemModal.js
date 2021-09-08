import React, { Component } from 'react'
import { connect } from 'react-redux';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Input,
    Label,
    Form
} from 'reactstrap';
import { addItem } from '../redux/reducers/items/itemActions';

class ItemModal extends Component {
    
    state = {
        isOpen : false,
        name : ''
    }

    toggle = () =>{
        this.setState({
            isOpen : !this.state.isOpen
        })
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        const newItem = {
            name : this.state.name
        }

        this.props.addItem(newItem);
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                color="dark"
                style={{marginBottom : '2rem'}}
                onClick={this.toggle}>
                    Add Item
                </Button>

                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add to Shopping List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label>Item name</Label>
                                <Input type="text" value={this.name} name="name" onChange={this.onChange}></Input>
                            </FormGroup>
                            <Button type="submit" style={{marginTop : '2rem'}} block>Add Item</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        // items : state.itemReducer.items
    }
}
export default connect(mapStateToProps, {addItem})(ItemModal);