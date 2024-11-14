'use client'
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenuIcon } from "@radix-ui/react-icons";
import { DollarSign, File, Headphones, HomeIcon, Menu, Phone } from "lucide-react";

export default function SideNav() {
  const navItems = [
    { href: "/", icon: <HomeIcon />, label: "Dashboard" },
    { href: "/buy-data", icon: <DollarSign />, label: "Buy Data" },
    { href: "/transactions", icon: <File />, label: "Transactions" },
    { href: "/package-registrations", icon: <DropdownMenuIcon />, label: "Afa Registrations" },
    { href: "/chat-us-live", icon: <Headphones />, label: "Chat Us Live" },
    { href: "/whatsapp-channel", icon: <Phone />, label: "Join Our WhatsApp Channel" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="text-gray-700 hover:text-blue-600 cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="p-4 bg-white">
        <SheetHeader className="flex flex-col items-center">
          <img src="/path/to/logo.png" alt="GeoNet Logo" className="h-32 w-32" /> {/* Replace with your logo path */}
          <SheetTitle className="mt-2 text-lg font-semibold">GeoNet</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-3">
          {navItems.map(({ href, icon, label }) => (
            <Link key={href} href={href} passHref>
              <div className="flex items-center space-x-3 text-gray-700 hover:bg-blue-100 p-4 rounded-lg cursor-pointer">
                <span className="text-lg">{icon}</span>
                <span className="text-sm">{label}</span>
              </div>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
