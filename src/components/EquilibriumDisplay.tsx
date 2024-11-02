import { Card } from '@/components/ui/card';
import { Scale } from 'lucide-react';

interface EquilibriumDisplayProps {
  equilibrium: {
    price: number;
    quantity: number;
  };
}

const EquilibriumDisplay = ({ equilibrium }: EquilibriumDisplayProps) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-neutral-50 to-neutral-100/50 border-neutral-200/50">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-neutral-700" />
          <h3 className="font-semibold text-neutral-900">Market Equilibrium</h3>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-1">
            <p className="text-sm text-neutral-600">Equilibrium Price</p>
            <p className="text-2xl font-bold text-neutral-900">
              ${equilibrium.price.toFixed(2)}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-neutral-600">Equilibrium Quantity</p>
            <p className="text-2xl font-bold text-neutral-900">
              {equilibrium.quantity.toFixed(0)} units
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EquilibriumDisplay;