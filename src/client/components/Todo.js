import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { updateTodo, deleteTodo } from '../../firebase';

const Todo = ({ item }) => {
  const [checked, setChecked] = useState(item.done);

  const handleCheckbox = () => {
    updateTodo(
      item.id,
      { done: !checked },
    )
      .finally(() => setChecked(!checked));

  };

  const handleDelete = () => {
    deleteTodo(item.id);
  };

  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">To-do item</legend>
      <div className="flex justify-between items-center h-5">
        <label htmlFor="item" className="flex items-center text-sm text-gray-700">
          <input
            id={item.id}
            name="item"
            type="checkbox"
            checked={checked}
            onChange={handleCheckbox}
            className="mr-3 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          {item.name}
        </label>
        <button
          type="button"
          onClick={handleDelete}
          className="inline-flex items-center p-1 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
        >
          <span className="sr-only">Delete Item</span>
          <XIcon className="block h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </fieldset>
  );
};

export default Todo;
