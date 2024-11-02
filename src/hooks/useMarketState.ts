import { useState, useEffect } from 'react';

export const useMarketState = () => {
  const [demandIntercept, setDemandIntercept] = useState(100);
  const [supplyIntercept, setSupplyIntercept] = useState(0);
  const [demandSlope, setDemandSlope] = useState(1);
  const [supplySlope, setSupplySlope] = useState(1);
  const [curveData, setCurveData] = useState<Array<any>>([]);
  const [equilibrium, setEquilibrium] = useState({ price: 0, quantity: 0 });

  const generateCurveData = () => {
    const data = [];
    for (let quantity = 0; quantity <= 100; quantity += 5) {
      const demandPrice = (demandIntercept - quantity) / demandSlope;
      const supplyPrice = (quantity - supplyIntercept) / supplySlope;
      data.push({
        quantity,
        demandPrice: Math.max(0, demandPrice),
        supplyPrice: Math.max(0, supplyPrice),
      });
    }
    return data;
  };

  const calculateEquilibrium = () => {
    const equilibriumPrice = (demandIntercept - supplyIntercept) / (demandSlope + supplySlope);
    const equilibriumQuantity = demandIntercept - demandSlope * equilibriumPrice;
    return { price: equilibriumPrice, quantity: equilibriumQuantity };
  };

  useEffect(() => {
    setCurveData(generateCurveData());
    setEquilibrium(calculateEquilibrium());
  }, [demandIntercept, supplyIntercept, demandSlope, supplySlope]);

  return {
    curveData,
    equilibrium,
    demandIntercept,
    supplyIntercept,
    setDemandIntercept,
    setSupplyIntercept,
  };
};