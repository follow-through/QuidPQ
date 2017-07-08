import React, { Component } from 'react';
import './styles/screen.css';

class Screen extends Component {
    
    
    render() {
        let curr = this.props.stateList.toSend;
        let renderList;
        if (curr === "users"){
            renderList = this.props.stateList.users;
        }
        if (curr === "items"){
            renderList = this.props.stateList.items;
        }
        if (curr === "messages"){
            renderList = this.props.stateList.messages;
        }

        return (
            <div className="screen-wrapper">
                {renderList.map((ele)=>{
                    return <p>{JSON.stringify(ele)}</p>
                })}
            </div>
        )
    }
}

export default Screen;  

