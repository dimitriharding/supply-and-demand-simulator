import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import MarketGraph from './MarketGraph';
import MarketControls from './MarketControls';
import EquilibriumDisplay from './EquilibriumDisplay';
import { useMarketState } from '@/hooks/useMarketState';

const SupplyDemandDemo = () => {
  const { curveData, equilibrium, demandIntercept, supplyIntercept, setDemandIntercept, setSupplyIntercept } = useMarketState();

  return (
    <div className="flex items-center justify-center w-full">
    <Card className="w-auto max-w-4xl bg-white/50 backdrop-blur-sm shadow-xl border-neutral-200/50">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Interactive Supply and Demand Simulator
        </CardTitle>
        <CardDescription className="text-neutral-600 max-w-2xl mx-auto">
          Explore how supply and demand interact in a market by adjusting market size and production capacity
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <MarketGraph curveData={curveData} equilibrium={equilibrium} />
        <MarketControls
          demandIntercept={demandIntercept}
          supplyIntercept={supplyIntercept}
          onDemandChange={setDemandIntercept}
          onSupplyChange={setSupplyIntercept}
        />
        <EquilibriumDisplay equilibrium={equilibrium} />
      </CardContent>
    </Card>
    </div>
  );
};

export default SupplyDemandDemo;