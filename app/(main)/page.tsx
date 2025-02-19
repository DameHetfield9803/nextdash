import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import Analytics from '@/components/dashboard/Analytics';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';

export default function Home() {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
                <DashboardCard
                    title='Posts'
                    count={100}
                    icon={<Newspaper className='text-slate-500' size={72} />}
                />
                <DashboardCard
                    title='Categories'
                    count={20}
                    icon={<Folder className='text-slate-500' size={72} />}
                />
                <DashboardCard
                    title='Users'
                    count={800}
                    icon={<User className='text-slate-500' size={72} />}
                />
                <DashboardCard
                    title='Comments'
                    count={2000}
                    icon={<MessageCircle className='text-slate-500' size={72} />}
                />
            </div>
            <Analytics />
            <PostsTable title='Latest Posts' limit={5} />
        </>
    );
}