import Head from 'next/head';
import StoryCard from '../components/StoryCard';
import storiesData from '../data/stories.json';

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>Истории - Главная</title>
            </Head>
            <h1 className="text-3xl font-bold mb-4">Добро пожаловать в мир историй</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {storiesData.map((story) => (
                    <StoryCard key={story.id} story={story} />
                ))}
            </div>
        </div>
    );
}