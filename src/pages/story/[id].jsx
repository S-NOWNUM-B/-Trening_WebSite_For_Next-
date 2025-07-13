import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import storiesData from '../../data/stories.json';
import '../../styles/story.css';

export default function Story() {
    const router = useRouter();
    const { id } = router.query;
    const [story, setStory] = useState(null);

    useEffect(() => {
        if (id) {
            const foundStory = storiesData.find((s) => s.id === parseInt(id));
            setStory(foundStory || null);
        }
    }, [id]);

    if (!story) {
        return <div className="container mx-auto p-4 text-gray-700">История не найдена...</div>;
    }

    return (
        <div className="story-page">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">{story.title}</h1>
            <p className="text-gray-700 mb-6">{story.content || 'Содержимое истории отсутствует...'}</p>
            <Link href="/" className="text-accent font-medium hover:underline">
                Вернуться на главную
            </Link>
        </div>
    );
}