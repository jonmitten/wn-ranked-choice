// src/pages/Home.tsx
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="p-4">
        <h2 className="text-2xl font-bold">🏠 Home</h2>
        <p>This is the homepage of the Ranked Choice Voting app.</p>
      </div>
    </Layout>
  );
}