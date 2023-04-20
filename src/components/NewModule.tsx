import React, { useEffect, useState } from 'react';
import { handleChangeModule } from '@/utils/formHandlers';
import { Module } from '../../types';
import { validateFormModule } from '@/utils/validations';

function NewModule() {
  const [module, setModule] = useState<Module>({
    title: '',
    number: '',
  });
  const [error, setError] = useState<Module>({
    title: '',
    number: '',
  });

  useEffect(() => {
    setError(validateFormModule(module));
  }, [module]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(validateFormModule(module));
    console.log(module);
  };

  return (
    <div>
      <h2>Creá un módulo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Titulo del módulo</label>
        <input
          type='text'
          name='title'
          id='title'
          onChange={(e) => handleChangeModule(e, module, setModule, setError)}
        />
        {error.title && <span>{error.title}</span>}
        <label htmlFor='number'>Número de módulo</label>
        <input
          type='text'
          name='number'
          id='number'
          onChange={(e) => handleChangeModule(e, module, setModule, setError)}
        />
        {error.number && <span>{error.number}</span>}
        {error.title || error.number ? (
          <button type='button'>Completá los campos</button>
        ) : (
          <button type='submit'>Crear módulo</button>
        )}
      </form>
    </div>
  );
}

export default NewModule;
