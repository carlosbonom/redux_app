import React,{useEffect} from 'react';
import './List.css';


import {connect} from 'react-redux'
import Item from '../item/Item';
import {fetchData, store_all} from '../../redux/actions/apiActions'


const List = ({list, loading, error, store_all, fetchData}) =>{
    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div className='List'>
            <h1>List</h1>
            { loading ? 'Cargando datos...' : '' }
            {error ? `Recibido error ${error}`: ''}
            {
                list && list.length ?
                    list.map((item, index)=>{
                        
                        return <Item data ={item} key={index} />
                    })
                    :''
            }
        </div>
    )
}


const mapStateToProps = (state) =>{
    
    return{
        list: state.apiState.list,
        loading: state.apiState.loading,
        error: state.apiState.error
    }
}

export default connect(
    mapStateToProps,
    {store_all, fetchData}
)(List);