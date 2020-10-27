import React from 'react'

export default function Forms({ data, onChangeData }) {
  const {initialCapital, mensalTax, period} = data;

  const MAX_MIN = {    
    minCapital: 100,
    maxCapital: 100000,
    minTax: -12,
    maxTax: 12,
    minPeriod: 1,
    maxPeriod: 36,
  };

  const handleChangeCapital = ({target}) => {
    onChangeData(parseInt(target.value), null, null);
  };
  const handleChangeMensalTax = ({target}) => {
    onChangeData(null, parseFloat(target.value), null);
  };
  const handleChangePeriod = ({target}) => {
    onChangeData(null, null, parseInt(target.value));
  };

  return (
    <div 
    className="center row"
    style={{marginBottom: "0"}}
    >
      <div className="input-field col s4">
        <input 
          id="inputInitialCapital" 
          type="number" 
          value={initialCapital} 
          min={MAX_MIN.minCapital}
          max={MAX_MIN.maxCapital}
          step="100"
          onChange={handleChangeCapital} />
          <label htmlFor="inputInitialCapital" className="active">
            Capital Inicial:
          </label>
      </div>

      <div className="input-field col s4">
        <input 
          id="inputMensalTax" 
          type="number" 
          value={mensalTax} 
          min={MAX_MIN.minTax}
          max={MAX_MIN.maxTax}
          step="0.1"
          onChange={handleChangeMensalTax} />
          <label htmlFor="inputMensalTax" className="active">
            Taxa de juros mensal:
          </label>
      </div>

      <div className="input-field col s4">
      <input 
          id="inputPeriod" 
          type="number" 
          value={period} 
          min={MAX_MIN.minPeriod}
          max={MAX_MIN.maxPeriod}
          step="1"
          onChange={handleChangePeriod} />
          <label htmlFor="inputPeriod" className="active">
            Período (meses):
          </label>
      </div>
    </div>
  )
}
