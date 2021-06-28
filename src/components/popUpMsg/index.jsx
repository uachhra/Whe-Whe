import React from 'react';

const SummaryComponent = ({ tokens = [], cash = 0 }) => {

    const dom = tokens.length > 0 ? <ul>
        {tokens.map(t => <li key={t.value}>{t.value}</li>)}
    </ul> : <p>No numbers selected</p>

    return (
        <div className="col-md-3">
            <h3>Numbers selected:</h3>
            {dom}
            Total Cash: ${cash}
        </div>
    );
}

export default SummaryComponent;