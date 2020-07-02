import React, {Component, useState} from 'react';
import Order from "./Order"
import {Button} from "react-bootstrap";
import menuList1 from "../MenuList.js"

class Menu extends Component{

    
    constructor() {
        super();
    this.state = {
        menuList : menuList1 ,
        
        compare: {
            arr: []
        }
    }
        this.handleClick = this.handleClick.bind(this);


    }

    // const [menuList, setmenuList] = useState(menuList);
    handleClick(e) {
        let arrnew = this.state.compare.arr;
        let menu = this.state.menuList;
        let index1 = menu.findIndex((x) => 
        //x.id === parseInt(e.target.id)
        console.log(x.id)
        );
        let index = menu.findIndex((x) => x.id === parseInt(e.target.id));

        // // if (index !== -1) {
        //     // arrnew.splice(index, 1);
        //   const menuObj = menuList[parseInt(e.target.id)];
        //   menuObj.count = menuObj.count + 1;
        //   menuObj.count = menuObj.count + 1;
        //  this.setState({menuList,[parseInt(e.target.id)]: menuObj});
        if(arrnew.length === 0)
        arrnew.push(parseInt(e.target.id));
            else if(arrnew.findIndex((x) => x===parseInt(e.target.id)) === -1)
            arrnew.push(parseInt(e.target.id));

let tempMenu = [...this.state.menuList];
let tempIte = {...tempMenu[parseInt(e.target.id)]};
tempIte.count++;
tempMenu[parseInt(e.target.id)]= tempIte;
this.setState({menuList: tempMenu});
            // compare
        // }
        // else {
        //     if (arrnew.includes(index) === false)
        //     {
        //         arrnew.push(e.target.id)
        //     }

        // }
        // console.log(event)
        this.setState({ compare: { arr: arrnew } });

        console.log(this.state.compare.arr);
        let output = Object.keys(this.state.menuList).map(
            i => this.state.menuList[i]
        );

    }


    render() {

        return(
            <div className="container-fluid">
               <div className="row">
               <div className="col-md-8">
                    <div className="row">
                        {this.state.menuList.map((menuList, index) => (
                        <div className="col-md-4" key={menuList.id}>
                            <div className="card mb-3" style={{"max-width": "540px"}}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={menuList.img} className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{menuList.name}</h5>
                                            <p className="card-text">{menuList.desc}</p>
                                            <p className="card-text">
                                                <Button className="bg-primary" style={{"color": "white"}} onClick={this.handleClick} id={menuList.id}>{menuList.price}</Button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            ))}
                    </div>
                </div>
                  <HideShowOrderDisplay isShow= {this.state.compare.arr && this.state.compare.arr.length >0} compArr={this.state.compare.arr} menuList1 = {this.state.menuList}/>
                </div>
            </div>
        )
    }
}

function HideShowOrderDisplay(props){
    const isShow = props.isShow;
    const compArr =  props.compArr;
    if(!isShow)
    return '';
    else
    return  <div className="col-md-4"> 
    <h1>Order Summary:</h1>
    {compArr.map((index) => {
        return(<Order name={props.menuList1[index].name}  desc={props.menuList1[index].desc} id={props.menuList1[index].id} count={props.menuList1[index].count}/>)
    })} </div>;
}

export default Menu;
