import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
interface BackButtonProps {
    text: string;
    link: string;
}

const BackButton = ({ text, link }: BackButtonProps) => {
    return (
        <Link href={link} className="text-gray-600 hover:underline flex items-center gap-1 font-bold mb-3"><ArrowLeftCircle size={18} />{text}</Link>
    )
}
export default BackButton