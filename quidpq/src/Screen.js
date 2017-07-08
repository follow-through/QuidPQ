import React, { Component } from 'react';
import './styles/screen.css';

class Screen extends Component {
    
    
    render() {
        let curr = this.props.stateList.toSend;
        let renderList;
        let propertyDisplay;
        if (curr === "users"){
            renderList = this.props.stateList.users;
            propertyDisplay = "userName";
        }
        if (curr === "items"){
            renderList = this.props.stateList.items;
            propertyDisplay = "itemName";
        }
        if (curr === "messages"){
            renderList = this.props.stateList.messages;
            propertyDisplay = "messageContent";
        }

        return (
            <div className="screen-wrapper">
                {renderList.map((ele)=>{
                    return <p>{JSON.stringify(ele[propertyDisplay])}</p>
                })}
            </div>
        )
    }
}

export default Screen;  

