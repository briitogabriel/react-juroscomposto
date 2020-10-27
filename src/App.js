import React, { useState, useEffect } from 'react'
import Forms from './Components/Forms';
import Installments from './Components/Installments';

export default function App() {
  const [initialCapital, setInitialCapital] = useState(1000);
  const [mensalTax, setMensalTax] = useState(1);
  const [period, setPeriod] = useState(1);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    calculateInterest(initialCapital, mensalTax, period);
  }, [initialCapital, mensalTax, period])

  const calculateInterest = (initialCapital, mensalTax, period) => {
    const newInstallments = [];

    let currentId = 1;
    let currentCapital = initialCapital;
    let percentage = 0;

    for (let i=1; i<=period; i++) {
      const percentValue = (currentCapital * Math.abs(mensalTax)) / 100;

      currentCapital = mensalTax >= 0 ? currentCapital+percentValue : currentCapital-percentValue;

      percentage = (currentCapital / initialCapital -1) *100;

      newInstallments.push({
        id: currentId++,
        value: currentCapital,
        difference: currentCapital - initialCapital,
        percentage,
        profit: mensalTax >= 0,
      });
    };

    setInstallments(newInstallments);
  }

  const handleChangeData = (newCapital, newMensalTax, newPeriod) => {
    if (newCapital !== null) {
      setInitialCapital(newCapital);
      return;
    }
    if (newMensalTax !== null) {
      setMensalTax(newMensalTax);
      return;
    }
    setPeriod(newPeriod);
  };
  
  return (
    <div className="container">
      <h2 className="center">React - Juros Compostos</h2>
    
        <Forms
          data={{ initialCapital, mensalTax, period }}
          onChangeData={handleChangeData}
        />

      <h5 className="center" style={{marginTop: "2px", marginBottom: "20px"}}>Tabela de Juros Mensal:</h5>
        <Installments data={installments} />

    </div>
  );
};
