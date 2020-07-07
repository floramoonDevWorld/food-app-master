import React, {Component, useState, useEffect} from 'react';
import Order from "./Order"
import {Button} from "react-bootstrap";
import menuList1 from "../MenuList.js"

 export default function Menu() {
   

let arr ={arr: []};
    const [menuList, setMenuList] = useState(menuList1);
    const [compare, setCompare] = useState(arr);


   function handleClick(e) {
        let arrnew = compare.arr;
        if(arrnew.length === 0 || arrnew.findIndex((x) => x===parseInt(e.target.id)) === -1)
            arrnew.push(parseInt(e.target.id));


        let tempMenu = [...menuList];
        let tempIte = {...tempMenu[parseInt(e.target.id)]};
        tempIte.count++;
        tempMenu[parseInt(e.target.id)]= tempIte;
        let compTemp = { arr: arrnew };
        setMenuList(tempMenu);
        setCompare(compTemp);

    }


    // render() {

        return(
            <div className="container-fluid">
               <div className="row">
               <div className="col-md-8">
                    <div className="row">
                        {menuList.map((menuList, index) => (
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
                                                <Button className="bg-primary" style={{"color": "white"}} onClick={handleClick} id={menuList.id}>{menuList.price}</Button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            ))}
                    </div>
                </div>
                  <HideShowOrderDisplay isShow= {compare.arr && compare.arr.length >0} compArr={compare.arr} menuList1 = {menuList}/>
                </div>
            </div>
        )
    // }
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

// export default Menu;
