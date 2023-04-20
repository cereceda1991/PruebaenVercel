import { FormElements, Course, Module } from '../../types.d';
import { validateForm, validateFormModule } from './validations';

//Esta funcion es para actualizar el estado del form

/* Este handler lo uso en el componente NewCourse  */
export const handleChange = (
  e: React.ChangeEvent<FormElements>,
  state: Course,
  setState: React.Dispatch<React.SetStateAction<Course>>,
  errorState: React.Dispatch<React.SetStateAction<Course>>
) => {
  errorState(validateForm(state));
  let value = e.target.value;
  let name = e.target.name;
  setState({
    ...state,
    [name]: value,
  });
};
/* Este handler lo uso en el componente NewModule */
export const handleChangeModule = (
  e: React.ChangeEvent<FormElements>,
  state: Module,
  setState: React.Dispatch<React.SetStateAction<Module>>,
  errorState: React.Dispatch<React.SetStateAction<Module>>
) => {
  errorState(validateFormModule(state));
  let value = e.target.value;
  let name = e.target.name;
  setState({
    ...state,
    [name]: value,
  });
};
/* Este handler aun no lo uso porque me falta los endpoints */
export const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log();
};

//Esta funcion sirve para eliminar imagenes cuando se clickea sobre ellas
// Es usada en el componente NewCourse
export const deleteImage = (
  state: Course,
  setState: React.Dispatch<React.SetStateAction<Course>>
) => {
  setState({
    ...state,
    image: '',
  });
};
