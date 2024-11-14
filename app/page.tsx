import * as React from "react";
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-blue-800 text-white p-8">
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="text-3xl">💳</div>
              <div>
                <h2 className="text-2xl font-bold">Gh¢0.00</h2>
                <p>Total Available Wallets</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-teal-600 text-white p-8">
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="text-3xl">🛒</div>
              <div>
                <h2 className="text-2xl font-bold">Gh¢0.00</h2>
                <p>Total Bundle Orders Today</p>
                <p className="text-sm">Total Count: 0 Total Amount: Gh¢0.00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-500 text-white p-8">
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="text-3xl">👥</div>
              <div>
                <h2 className="text-2xl font-bold">Gh¢0.00</h2>
                <p>Total Afa Registration Today</p>
                <p className="text-sm">Total Count: 0 Amount: Gh¢0.00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-red-500 text-white p-8">
          <CardHeader>
            <CardTitle>Data Bundle Orders Performance Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end">
              <select className="p-2 bg-white text-black rounded">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            <div className="mt-4 bg-white h-32 rounded"> {/* Chart Placeholder */}
              {/* Insert chart component here */}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-red-500 text-white p-8">
          <CardHeader>
            <CardTitle>Data Bundle Orders Performance Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end">
              <select className="p-2 bg-white text-black rounded">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            <div className="mt-4 bg-white h-32 rounded"> {/* Chart Placeholder */}
              {/* Insert chart component here */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
