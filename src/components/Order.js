import React from "react";

function Order (props){
// let name = props.name;
// let img = props.img;
// let desc = props.desc;
// let id = props.id;

        return(
                <div className="card" key={props.id} style={{"width": "18rem"}}>
                    <div className="card-body">
                    <div className="row">
                         <div className="col-md-8">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.desc}</p>
                        </div>
                        <div className="col-md-4">
                             x {props.count}
                        </div>
                    </div>
                    </div>
                    
                </div>

        );

}
export default Order;
