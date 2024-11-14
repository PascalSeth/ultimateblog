import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PopoverWallet() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4 px-6 py-2 bg-blue-900 text-white rounded-lg" variant="outline">Wallet Top-up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Wallet Top-up</DialogTitle>
        </DialogHeader>
        <div className="bg-blue-100 p-4 rounded border border-blue-300">
          <h4 className="font-bold text-lg mb-2 text-teal-900">PAYMENT INSTRUCTIONS</h4>
          <ol className="list-decimal list-inside text-sm text-gray-800 space-y-2">
            <li>Please enter the amount you would like to deposit in your wallet.</li>
            <li>Click on Topup Wallet.</li>
            <li>Make payment to our MoMo Agent Number: <span className="font-bold">0547049773</span></li>
            <li>Name: <span className="font-bold">His Presence Enterprise (Edmund Cujoe)</span></li>
            <li>Please use the Deposit ID on the receipt as the reference for your MoMo.</li>
            <li>Your balance will be available immediately after we confirm receipt of the MoMo.</li>
          </ol>
        </div>
        <div className="mt-4">
          <Label htmlFor="amount" className="text-sm font-medium">
            Amount to Deposit:
          </Label>
          <Input
            id="amount"
            placeholder="Enter the Amount to Deposit"
            className="w-full mt-1"
          />
        </div>
        <DialogFooter>
          <Button className="w-full bg-blue-600 text-white">Topup Wallet</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
