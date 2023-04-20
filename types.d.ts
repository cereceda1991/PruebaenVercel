//Este archivo sirve para guardar tipos e interfaces para despues
//importarlas, de esta manera se logra tener un codigo mas limpio

/* 
La interface Course la uso en el componente NewCourse
y en el handler definido en formHandlers
*/
export interface Course {
  title: string;
  description: string;
  image: string;
}

/* 
La interface Course la uso en el componente NewModule
y en el handler definido en formHandlers
*/
export interface Module {
  title: string;
  number: string;
}
/* 
Parametros iniciales para el estado course en el archivo NewCourse
*/
export const initialCourseState: Course = {
  title: '',
  description: '',
  image: '',
};
/* 
Esta union de tipos la uso en el handler de change en los forms
*/
export type FormElements = HTMLInputElement | HTMLTextAreaElement;

/* 
Esta interface la uso para tipar la respuesta de cloudinary
*/
export interface CloudinaryResult {
  event: string;
  info: {
    url: string;
  };
}

//Interface para el componente Layout
export interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}
