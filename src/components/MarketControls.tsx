import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MarketControlsProps {
  demandIntercept: number;
  supplyIntercept: number;
  onDemandChange: (value: number) => void;
  onSupplyChange: (value: number) => void;
}

const MarketControls = ({
  demandIntercept,
  supplyIntercept,
  onDemandChange,
  onSupplyChange,
}: MarketControlsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6 border-blue-100 bg-blue-50/50">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-blue-900">Demand Controls</h3>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-blue-700">Market Size</label>
            <Slider
              value={[demandIntercept]}
              min={50}
              max={150}
              step={5}
              onValueChange={(value) => onDemandChange(value[0])}
              className="py-4"
            />
            <p className="text-xs text-blue-600">Current: {demandIntercept}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-green-100 bg-green-50/50">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-green-900">Supply Controls</h3>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-green-700">Production Capacity</label>
            <Slider
              value={[supplyIntercept]}
              min={-50}
              max={50}
              step={5}
              onValueChange={(value) => onSupplyChange(value[0])}
              className="py-4"
            />
            <p className="text-xs text-green-600">Current: {supplyIntercept}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MarketControls;