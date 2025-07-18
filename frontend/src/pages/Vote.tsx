import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from '../components/SortableItem';
import Layout from '../components/Layout';

import type { DragEndEvent } from '@dnd-kit/core';

type Candidate = { id: string; name: string };

function VotePage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [items, setItems] = useState<string[]>([]);

  const fetchCandidates = useCallback(async () => {
    try {
      const response = await axios.get<Candidate[]>('/api/candidates'); // 👈 Tell Axios to expect Candidate[]
      const data = response.data;

      setCandidates(data); // ✅ Now data is typed
      setItems(data.map((c) => c.id));
    } catch (error) {
      console.error('Failed to fetch candidates', error);
    }
  }, []);

  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

const handleDragEnd = (e: DragEndEvent) => {
  const overId = e.over?.id;
  if (overId && e.active.id !== overId) {
    setItems((old) =>
      arrayMove(
        old,
        old.indexOf(e.active.id as string),
        old.indexOf(overId as string)
      )
    );
  }
};

  return (
    <Layout>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((id) => {
            const candidate = candidates.find((c) => c.id === id);
            return (
              <SortableItem key={id} id={id} name={candidate?.name || ''} />
            );
          })}
        </SortableContext>
        <button onClick={() => console.log(items)}>Submit</button>
      </DndContext>
    </Layout>
  );
}

export default VotePage;