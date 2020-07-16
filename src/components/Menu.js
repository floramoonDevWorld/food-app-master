import React, {Component, useState, useEffect} from 'react';
import Order from "./Order"
import {Button} from "react-bootstrap";
import { useDispatch, useSelector} from 'react-redux';

import {getMenuItems, addItem} from "../actions/index";

export default function Menu(){

    const dispatch = useDispatch();
    useEffect(()=> {dispatch(getMenuItems())}, []);
    const menuList = useSelector(state => state.menuList);
    const selectedOrderItems = useSelector(state => state.orderedList);
    const totalCost = useSelector(state => state.totalCost);
 
        return(
            <div className="container-fluid">
               <div className="row">
                  <CheckandShowMenuItems  menuList={menuList} addedItemsList={selectedOrderItems}/>
                  <HideShowOrderDisplay total={totalCost} isShow= {selectedOrderItems && selectedOrderItems.length >0} compArr={selectedOrderItems}/>
                </div>
            </div>
        )
}
function CheckandShowMenuItems(props){
    const menuList = props.menuList;
    const dispatch = useDispatch();
 
    if(menuList && menuList.length>0)
     return  <div className="col-md-8">
                    <div className="row padding-top-20">
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
                                                <Button className="bg-primary" style={{"color": "white"}} onClick={()=>dispatch(addItem(menuList))} id={menuList.id}>{menuList.price}</Button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            ))}
                    </div>
                </div>
    else{
        return  <div className="col-md-8">
                    <div className="row padding-top-20">
                        <h1>Something went wrong, check back in few mins..</h1>
                    </div>
                </div>
    }
}
function HideShowOrderDisplay(props){
    const isShow = props.isShow;
    const itemsList =  props.compArr;
    if(!isShow)
    return '';
    else
    return  <div className="col-md-4"> 
    <h1>Order Summary:</h1>
    <div className="border-1">
    <h4>Your total: <label style={{"color": "forestgreen"}}>${props.total.toFixed(2)} </label></h4>
    <a>Check out here..</a>
    <div className="max-height-400">
    {itemsList.map((index) => {
        return(<Order name={index.name}  desc={index.desc} id={index.id} count={index.count} price={index.itemAmntCost}/>)
    })} 
    </div>
    </div>
    </div>;
}
