/**
 * Imports
 */
import React from 'react';
import { trpc } from '../_trpc/client';

/**
 * Types
 */
export type TodoListProps = React.PropsWithChildren & {};

/**
 * TodoList component
 */
export const TodoList = (props: TodoListProps) => {
  /* Props */
  const {} = props;

  const getTodos = trpc.getTodos.useQuery();

  /* Render */
  return (
    <div>
      <div>{JSON.stringify(getTodos.data)}</div>
    </div>
  );
};
