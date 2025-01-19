'use client'
import Link from "next/link"
import Image from "next/image"
import logo from '../public/logo.png'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./themeswitch"
import { AvatarImage } from "@radix-ui/react-avatar"
export default function Navbar() {
    return (
        <div className="bg-black p-3 flex justify-between text-[cream]">
            <Link href={"/"}>
                <Image src={logo} alt="Logo" width={42} className="rounded-lg" />
            </Link>
            <div className="flex items-center">
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn"></AvatarImage>
                            <AvatarFallback className="text-violet-600">BT</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}