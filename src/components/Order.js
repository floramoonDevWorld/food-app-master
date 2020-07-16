import React from "react";

function Order (props){
        return(
                <div className="card" key={props.id} style={{"width": "18rem"}}>
                    <div className="card-body">
                    <div className="row">
                         <div className="col-md-5">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.desc}</p>
                        </div>
                        <div className="col-md-3">
                             x {props.count}
                        </div>
                        <div className="col-md-4">
                             = ${props.price.toFixed(2)}
                        </div>
                    </div>
                    </div>                    
                </div>
        );

}
export default Order;
