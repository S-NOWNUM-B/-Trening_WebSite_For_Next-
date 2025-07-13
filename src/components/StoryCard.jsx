import Link from 'next/link';
import { FaBook } from 'react-icons/fa';

export default function StoryCard({ story }) {
    return (
        <div className="card bg-light p-3 shadow-sm">
            <FaBook className="text-4xl mb-2" />
            <h2 className="text-xl font-semibold">{story.title}</h2>
            <p className="text-gray-600">{story.excerpt || 'Краткое описание...'}</p>
            <Link href={`/story/${story.id}`} className="text-blue-500 mt-2 inline-block">
                Читать далее
            </Link>
        </div>
    );
}