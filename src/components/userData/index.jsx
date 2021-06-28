import React from 'react';
import TokenButton from '../selectedButton';

const UserInputComponent = ({ tokens, toggleTokenSelection, onCashButtonPressed, onClearClicked, onCashSummaryClicked, cashEnabled, onRandomButtonClicked }) => {

    return (
        <>
            <div className="col-md-6">
                <h3>Pick your 5 numbers</h3>
                <div className="button-container">
                    {
                        
                      tokens.map((t, i) => <TokenButton key={i} token={t} onTokenSelected={toggleTokenSelection} />)
                     
                    }
                    <div>
                        <button style={{margin:'5px'}} className="btn btn-primary" onClick={onRandomButtonClicked}>Random</button>
                        <button style={{margin:'5px'}} className="btn btn-danger" onClick={onClearClicked}>Clear</button><br></br>
                        <button style={{margin:'5px'}} disabled={!cashEnabled} onClick={onCashSummaryClicked} className="btn btn-success">Cash</button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <h3>Playing On:</h3>
                {cashOptions.map(c => {
                    return (
                        <React.Fragment>                   <button style={{textAlign:'center', padding:'5px', height:'50px',width:'50px'}} disabled={!cashEnabled}
                     className="btn btn-default cash"
                      onClick={() => onCashButtonPressed(c)} 
                      key={c}>${c}</button>
                      {c === 5 && <br/> }
                      </React.Fragment>
                      )})}
            </div>
        </>
    )

}

const cashOptions = [1, 5, 10, 20];

export default UserInputComponent;
