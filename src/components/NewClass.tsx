import React, { useState } from 'react';

function NewClass() {
  const [newClass, setNewClass] = useState({
    title: '',
    content: '',
    video: '',
    test: '',
  });

  return (
    <div>
      <h2>Creá una clase</h2>
      <form>
        <label htmlFor='title'>Titulo de la clase</label>
        <input type='text' name='title' id='title' />
        <label htmlFor='content'>Contenido de la clase</label>
        <input type='text' name='content' id='content' />
        <label htmlFor='video'>Video de la clase</label>
        <input type='text' name='video' id='video' />
        <label htmlFor='test'>Test de la clase</label>
        <input type='text' name='test' id='test' />
        <button type='submit'>Crear clase</button>
      </form>
    </div>
  );
}

export default NewClass;
