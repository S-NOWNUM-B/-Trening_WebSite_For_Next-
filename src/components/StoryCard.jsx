import Link from 'next/link';
import { FaBook } from 'react-icons/fa';

export default function StoryCard({ story }) {
    return (
        <div className="card">
            <FaBook className="text-3xl mb-3 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h2>
            <p className="text-gray-600 mb-4">{story.excerpt || 'Краткое описание...'}</p>
            <Link href={`/story/${story.id}`} className="text-accent font-medium hover:underline">
                Читать далее
            </Link>
        </div>
    );
}