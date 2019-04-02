import React,  {Component} from 'react';

import  Ejercicio from './../components/ejercicio'

class ejerciciocontainer extends Component {

    constructor(props){
        super(props);

        this.state={
            datos:[],
        }
    }

    render(){
        const {datos} = this.state;

        return (<Ejercicio
        datos={datos}
        />
        );
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> {
            return response.json();
        })
        .then((albunDeFotos) => {
            //Aqui estan mis datos
            this.setState({
                datos: albunDeFotos,
            })
        })
    }
}
export default ejerciciocontainer;