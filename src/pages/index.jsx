import Head from 'next/head';
import StoryCard from '../components/StoryCard';
import storiesData from '../data/stories.json';

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>Истории - Главная</title>
            </Head>
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Добро пожаловать в мир историй</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {storiesData.map((story) => (
                    <StoryCard key={story.id} story={story} />
                ))}
            </div>
        </div>
    );
}