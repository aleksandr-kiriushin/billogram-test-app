import React, { Component } from 'react';


export default class DisplayObject extends Component {
    render() {
        const objectStyle = {
            backgroundColor: '#5f4c7a',
            borderRadius: '6px',
            marginBottom: '15px',
            padding: '4px',
            width: 'fit-content',
            margin: '10px'
        };
        const objectTitleStyle = {
            color: '#fff',
            fontSize: '15px',
            lineHeight: '37px',
            textAlign: 'center',
            textTransform: 'uppercase',
        };
        const objectContentStyle = {
            backgroundColor: '#fff',
            fontFamily: 'Monaco,Courier New,sans-serif',
            fontSize: '14px',
            lineHeight: '21px',
            padding: '25px 40px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all'
        };
        return (
            <div className="displayObject" style={objectStyle}>
                <div className="displayObjectTitle" style={objectTitleStyle}>
                    {this.props.title}
                </div>
                <div className="displayObjectContent" style={objectContentStyle}>
                    {this.props.content}
                </div>
            </div>
        )
    }
}
