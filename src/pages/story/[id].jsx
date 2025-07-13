import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import storiesData from '../../data/stories.json';

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
        return <div className="container mx-auto p-4">История не найдена...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
            <p className="text-gray-700">{story.content || 'Содержимое истории отсутствует...'}</p>
            <a href="/" className="text-blue-500 mt-4 inline-block">
                Вернуться на главную
            </a>
        </div>
    );
}