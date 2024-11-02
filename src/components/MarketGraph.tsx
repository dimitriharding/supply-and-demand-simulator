import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot, ResponsiveContainer } from 'recharts';

interface MarketGraphProps {
  curveData: Array<{ quantity: number; demandPrice: number; supplyPrice: number }>;
  equilibrium: { price: number; quantity: number };
}

const MarketGraph = ({ curveData, equilibrium }: MarketGraphProps) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-neutral-200">
          <p className="text-sm font-medium">Quantity: {payload[0].payload.quantity}</p>
          {payload.map((entry: any) => (
            <p key={entry.name} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: ${entry.value.toFixed(2)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[400px] p-4 bg-white rounded-xl shadow-inner">
      <ResponsiveContainer>
        <LineChart data={curveData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis
            dataKey="quantity"
            label={{ value: 'Quantity', position: 'bottom', offset: -10 }}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            label={{ value: 'Price ($)', angle: -90, position: 'left', offset: 0 }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="demandPrice"
            stroke="#3b82f6"
            strokeWidth={3}
            name="Demand"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="supplyPrice"
            stroke="#22c55e"
            strokeWidth={3}
            name="Supply"
            dot={false}
          />
          <ReferenceDot
            x={equilibrium.quantity}
            y={equilibrium.price}
            r={6}
            fill="#ef4444"
            stroke="#fff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketGraph;