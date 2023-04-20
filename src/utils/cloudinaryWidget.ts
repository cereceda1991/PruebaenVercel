import { Course, CloudinaryResult } from '../../types.d';

declare global {
  interface Window {
    cloudinary: any;
  }
}

//Esta funcion sirve para subir fotos a cloudinary
export const handleOpenWidget = async (
  state: Course,
  setState: React.Dispatch<React.SetStateAction<Course>>
) => {
  var myWidget = await window.cloudinary.createUploadWidget(
    {
      cloudName: 'emme3d',
      uploadPreset: 'igsag6pi',
    },
    (error: unknown, result: CloudinaryResult) => {
      if (!error && result && result.event === 'success') {
        setState({
          ...state,
          image: result.info.url,
        });
      }
    }
  );
  myWidget.open();
};
