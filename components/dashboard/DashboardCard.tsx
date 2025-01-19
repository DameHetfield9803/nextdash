import { Card, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";
import { LucideIcon } from "lucide-react";
interface DashboardCardProps {
    title: string,
    count: number,
    icon: React.ReactElement<LucideIcon>
}

export default function DashboardCard({ title, count, icon }: DashboardCardProps) {
    return (
        <Card className="bg-slate-50 dark:bg-slate-800 p-4 pb-0">
            <CardContent>
                <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-100">{title}</h3>
                <div className="flex gap-5 justify-center items-center">
                    {icon}
                    <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-100">{count}</h3>
                </div>
            </CardContent>
        </Card>
    );
}