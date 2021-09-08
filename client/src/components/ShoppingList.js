import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../redux/reducers/items/itemActions';
import ItemModal from './ItemModal';

class ShoppingList extends Component{
    componentDidMount(){
        this.props.getItems();
    }

    // onDeleteClick = (item) =>{
    //     this.props.deleteItem(item);
    // }
    
    render(){
        const items = this.props.items;

        return (
            <Container>
                {/* <Button 
                color="dark" 
                style ={{marginBottom : '2rem'}} 
                onClick={() => {
                    const name = prompt('Enter name');
                    
                    this.setState({
                        items : [...items, {id : v4(), name : name}]
                    });
                } }>

                Add Item
                </Button> */}
                <ItemModal/>
                <ListGroup>
                    {items.map(item =>{
                        return <ListGroupItem key={item._id}>
                            <Button color="danger" 
                            size = "sm"
                            style ={{marginRight : '2rem'}}
                            // this.onDeleteClick.bind(this, item)
                            onClick = {() => this.props.deleteItem(item)}>&times;</Button>
                            {item.name}
                            </ListGroupItem>
                    })}
                </ListGroup>
            </Container>
            
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        items : state.itemReducer.items
    };
}

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);
