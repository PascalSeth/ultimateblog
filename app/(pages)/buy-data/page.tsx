import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Bundles() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">Bundles</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* MTN-AFA Registration Card */}
        <Link href="/buy-data/id">
          <Card className="h-40 bg-yellow-500 text-black cursor-pointer hover:shadow-lg transition">
            <CardContent className="flex h-full items-center justify-between">
              <p className="text-lg font-semibold">MTN-AFA Registration</p>
              <div className="text-3xl font-bold">MTN</div>
            </CardContent>
          </Card>
        </Link>

        {/* AT Premium Bundles Card */}
        <Link href="/buy-data/id">
          <Card className="h-40 bg-gradient-to-b from-blue-800 to-red-600 text-white cursor-pointer hover:shadow-lg transition">
            <CardContent className="flex h-full items-center justify-between">
              <p className="text-lg font-semibold">AT Premium Bundles</p>
              <div className="text-4xl font-bold">at</div>
            </CardContent>
          </Card>
        </Link>

        {/* AT Big Time Bundles Card */}
        <Link href="/buy-data/id">
          <Card className="h-40 bg-gradient-to-b from-blue-800 to-red-600 text-white cursor-pointer hover:shadow-lg transition">
            <CardContent className="flex h-full items-center justify-between">
              <p className="text-lg font-semibold">AT Big Time Bundles</p>
              <div className="text-4xl font-bold">at</div>
            </CardContent>
          </Card>
        </Link>

        {/* AT Call Minutes Bundles Card */}
        <Link href="/buy-data/id">
          <Card className="h-40 bg-gradient-to-b from-blue-800 to-red-600 text-white cursor-pointer hover:shadow-lg transition">
            <CardContent className="flex h-full items-center justify-between">
              <p className="text-lg font-semibold">AT Call Minutes Bundles</p>
              <div className="text-4xl font-bold">at</div>
            </CardContent>
          </Card>
        </Link>

        {/* Telecel None-Expiry Bundles Card */}
        <Link href="/buy-data/id">
          <Card className="h-40 bg-red-600 text-white cursor-pointer hover:shadow-lg transition">
            <CardContent className="flex h-full items-center justify-between">
              <p className="text-lg font-semibold">Telecel None-Expiry Bundles</p>
              <div className="text-4xl font-bold">Telecel</div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
