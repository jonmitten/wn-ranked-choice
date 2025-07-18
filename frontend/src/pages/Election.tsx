import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Election() {
  const { id } = useParams();

  return (
    <Layout>
    <div>
      <h2 className="text-3xl font-bold mb-4">Election Details</h2>
      <p>Viewing election with ID: <span className="font-mono">{id}</span></p>
    </div>
      </Layout>
  );
}