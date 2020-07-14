import React, {Component, useState, useEffect} from 'react';
import Order from "./Order"
import {Button} from "react-bootstrap";
import { useDispatch, useSelector} from 'react-redux';

import {getMenuItems} from "../actions/index";

export default function Menu(){

    const dispatch = useDispatch();
    useEffect(()=> {dispatch(getMenuItems())}, []);
    const menuList = useSelector(state => state.menuList);
   
   
    // const [menuList, setMenuList] = useState(menuList1);
    let arr ={arr: []};
    const [compare, setCompare] = useState(arr);
    const [totalCost, setTotalCost] = useState(0);
    
// useEffect(() =>{
//     console.log("in useEffect>>>>>");
//     props.callforMenuItems();
// },[]);



    // render() {

        return(
            <div className="container-fluid">
               <div className="row">
                  <CheckandShowMenuItems menuList={menuList}/>
                  <HideShowOrderDisplay total={totalCost} isShow= {compare.arr && compare.arr.length >0} compArr={compare.arr} menuList1 = {menuList}/>
                </div>
            </div>
        )
    // }
}
function CheckandShowMenuItems(props){
    const menuList = props.menuList;
    
//    function handleClick(e) {
//     let tempCost = totalCost;
//     let arrnew = compare.arr;
//     let tempMenu = [...menuList];
//     let tempIte = {...tempMenu[parseInt(e.target.id)]};
//     tempIte.count++;
//     tempMenu[parseInt(e.target.id)]= tempIte;
//     tempCost = parseFloat(tempCost) + tempIte.cost;
//     setTotalCost(tempCost.toFixed(2));
//     let itemTotCst = tempIte.cost * tempIte.count;
//     itemTotCst = itemTotCst.toFixed(2);
//     if(arrnew.length === 0 || arrnew.findIndex((x) => x.id===parseInt(e.target.id)) === -1)
//     arrnew.push({id: parseInt(e.target.id), price: itemTotCst});
//     else{
//         arrnew.map((index)=>{
//             if(index.id === parseInt(e.target.id)){
//                 index.price = itemTotCst;
//             }
//         })
//     }
//     let compTemp = { arr: arrnew };
//     setMenuList(tempMenu);
//     setCompare(compTemp);

// }
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
                                                <Button className="bg-primary" style={{"color": "white"}}  id={menuList.id}>{menuList.price}</Button>
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
    const compArr =  props.compArr;
    if(!isShow)
    return '';
    else
    return  <div className="col-md-4"> 
    <h1>Order Summary:</h1>
    <div className="border-1">
    <h4>Your total: <label style={{"color": "forestgreen"}}>${props.total} </label></h4>
    <a>Check out here..</a>
    <div className="max-height-400">
    {compArr.map((index) => {
        return(<Order name={props.menuList1[index.id].name}  desc={props.menuList1[index.id].desc} id={props.menuList1[index.id].id} count={props.menuList1[index.id].count} price={index.price}/>)
    })} 
    </div>
    </div>
    </div>;
}
// const mapStateToProps = (state) => {
// return {menuList : state.menuList }
// }
// export default connect(mapStateToProps,{callforMenuItems: getMenuItems})(Menu);
