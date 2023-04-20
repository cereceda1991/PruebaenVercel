import React, { useEffect, useState } from 'react';
import { handleChange, deleteImage } from '@/utils/formHandlers';
import { Course, initialCourseState } from '../../types.d';
import { handleOpenWidget } from '@/utils/cloudinaryWidget';
import { validateForm } from '@/utils/validations';

function NewCourse() {
  const [course, setCourse] = useState<Course>(initialCourseState);
  const [error, setError] = useState<Course>({
    title: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://upload-widget.cloudinary.com/global/all.js';
    script.async = true;
    document.body.appendChild(script);

    setError(validateForm(course));

    return () => {
      document.body.removeChild(script);
    };
  }, [course.image]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(validateForm(course));
    console.log(course);
  };
  return (
    <>
      <h2>Crear un nuevo curso</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='title'>Título del curso</label>
        <input
          type='text'
          name='title'
          value={course.title}
          id='title'
          onChange={(e) => handleChange(e, course, setCourse, setError)}
        />
        {error.title && <span>{error.title}</span>}
        <label htmlFor='description'>Descripción</label>
        <textarea
          name='description'
          id='description'
          value={course.description}
          cols={30}
          rows={10}
          placeholder='Describí el curso'
          onChange={(e) => handleChange(e, course, setCourse, setError)}
        ></textarea>
        {error.description && <span>{error.description}</span>}
        <div>
          <label htmlFor='image'>Imágen del curso</label>
          {course.image && <img src={course.image} alt={course.image} />}
          {course.image && (
            <button
              type='button'
              onClick={() => deleteImage(course, setCourse)}
            >
              Eliminar imágen
            </button>
          )}

          <button
            type='button'
            onClick={() => handleOpenWidget(course, setCourse)}
          >
            Subir imágen
          </button>
          {error.image && <span>{error.image}</span>}
        </div>
        {error.title || error.description || error.image ? (
          <button type='button'>Completá el formulario para seguir</button>
        ) : (
          <button type='submit'>Crear curso</button>
        )}
      </form>
    </>
  );
}

export default NewCourse;
