import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Props = {
  id: string;
  name: string;
};

export const SortableItem: React.FC<Props> = ({ id, name }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '12px',
    margin: '8px 0',
    backgroundColor: '#f2f2f2',
    borderRadius: '6px',
    border: '1px solid #ccc',
    cursor: 'grab',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {name}
    </div>
  );
};