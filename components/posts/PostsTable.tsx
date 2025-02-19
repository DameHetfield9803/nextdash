import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption
} from "@/components/ui/table"
import { Button } from "../ui/button";
import Link from "next/link";
import posts from "@/data/posts"
import { Post } from "@/types/posts"

interface PostsTableProps {
    limit?: number;
    title?: string;
}
export default function PostsTable({ limit, title }: PostsTableProps) {
    const sortedPosts: Post[] = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;
    return (
        <div className="mt-12">
            <h3 className="text-2xl mb-4 font-semibold">
                {title ? title : "Posts"}
            </h3>
            <Table>
                <TableCaption>Recent Posts</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Author</TableHead>
                        <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                        <TableHead>View</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredPosts.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell>{post.title}</TableCell>
                            <TableCell className="hidden md:table-cell">
                                {post.author}
                            </TableCell>
                            <TableCell className="hidden text-right md:table-cell">
                                {post.date}
                            </TableCell>
                            <TableCell>
                                <Link href={`/posts/edit/${post.id}`}>
                                    <Button className="dark:bg-white dark:text-black">Edit</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}