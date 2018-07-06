import {combineReducers} from 'redux';
import {GET_CLIENTES_SUCCESS, SAVE_CLIENTE_SUCCESS, GET_CLIENTES_DATA_SUCCESS, GET_CLSEARCH_SUCCESS, DELETE_CLIENTE_SUCCESS} from "../../actions/clientes/clientesActions";


function list(state=[], action){
    switch(action.type){
        case GET_CLIENTES_SUCCESS:
            return action.clientes;
        case SAVE_CLIENTE_SUCCESS:
            return [action.cliente, ...state ];
        case DELETE_CLIENTE_SUCCESS:
            return state.filter(a=>a.id!==action.clienteId);

        default:
            return state;
    }
}


function allData(state={}, action) {
    switch (action.type){
        case GET_CLIENTES_DATA_SUCCESS:
            return action.dataClient;
        default:
            return state;
    }
}

function clienteSearch(state = {}, action) {
    switch (action.type){
        case GET_CLSEARCH_SUCCESS:
            return action.clienteS;
        default:
            return state;
    }
}


const clientesReducer = combineReducers({
    list:list,
    allData:allData,
    clienteSearch:clienteSearch
});


export default clientesReducer;