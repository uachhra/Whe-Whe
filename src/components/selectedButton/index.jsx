import React from 'react';
import './index.css';

const renderBreak = (value) =>
{
    console.log(value % 5 === 0);
    if(value % 5 === 0)
    {
        return <br />
    }
}

const TokenButton = ({ key, token, onTokenSelected }) => {
    
    const { value, selected } = token;
   
    return (
        <React.Fragment>
        <button style={{textAlign:'center', padding:'5px', height:'50px',width:'50px'}}
            id={value}
            className={selected ? 'btn btn-info' : 'btn btn-default'}
            onClick={() => onTokenSelected(token)}>
            {value}
        </button> 
        {renderBreak(value)}    
        </React.Fragment>
    )
}


export default TokenButton;