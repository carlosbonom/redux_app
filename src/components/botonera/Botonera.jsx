import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Botonera.css';
import navState from '../../redux/reducers/navReducers';
import {nav_click} from '../../redux/actions/navActions';

import {connect} from 'react-redux'
import Home from '../home/Home';
import List from '../list/List';
import Form from '../form/Form';

const Botonera = ({title, nav_click, match:{params}}) =>{

    const buttonClick = (title) =>{
        nav_click({
            title: title
        });
    }

    useEffect(() => {
        let title = '';
        switch(params.section){
            case 'home':
                title = 'Home'
                break;
            case 'list':
                title = 'List'
                break;
            case 'new':
                title = 'New'
                break;
            default:
                title = 'Home'
        }
        nav_click({
            title: title
        });
       
    }, [])

    const renderSection = () =>{
        switch(params.section){
            case 'home':
                return <Home />
            case 'list':
                return <List />
            case 'new':
                return <Form />
            default:
                return;
        }
    }

    return(
        <div className='Botonera'>
            <header className='App-header'>
                <div>
                    <h1>{title}</h1>
                </div>
                <Link to='home' onClick={()=> buttonClick('Home')}>Home</Link>
                <Link to='list' onClick={()=> buttonClick('List')}>List</Link>
                <Link to='new' onClick={()=> buttonClick('New')}>New</Link>
            </header>
            {renderSection()}
        </div>
    )
}


const mapStateToProps = (state, owmProps) =>{
    
    return{
        title: state.navState.title,
        section: owmProps.section,
    }
}

export default connect(
    mapStateToProps,
    {nav_click}
)(Botonera);