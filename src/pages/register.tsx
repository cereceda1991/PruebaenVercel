import Link from "next/link";
import styles from "@/styles/Register.module.css";
import React, { useCallback, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiLowVision, BiShow } from "react-icons/bi";
import Verbify from "../assets/Verbify.png";
import Image from "next/image";
import img_register from "../assets/img_register.png";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { signUpUser } from "@/actions/authActions";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useRouter();

  const { authList, authToken } = useAppSelector(
    (rootReducer) => rootReducer.auth
  );

  useEffect(() => {
    if (authList && authToken) {
      // TO DO check where this should route...
      navigate.push("/Homesinmembresia");
    }
  });

  const dispatch = useAppDispatch();

  const fetchSignUp = useCallback(
    (data: FormValues) => {
      const user = {
        email: data.email,
        password: data.password,
        displayName: data.email.split("@")[0],
      };
      data.password === data.confirmPassword && dispatch(signUpUser(user));
    },
    [dispatch]
  );

  const handleClickSingUp = (data: FormValues) => {
    if (data.password !== data.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden.",
        confirmButtonColor: "#D39245",
      });
    } else {
      fetchSignUp(data);
      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: "Tu cuenta ha sido creada satisfactoriamente.",
        confirmButtonColor: "#D39245",
      });
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <main className={styles.container_register}>
      <section className={styles.container_img}>
        <Image src={img_register} alt="Imagen de registro" />
      </section>
      <section className={styles.container_form}>
        <section>
          <img src={Verbify.src} />
          <p className={styles.title}>
            Regístrate en nuestra grandiosa comunidad
          </p>
          <form
            onSubmit={handleSubmit(handleClickSingUp)}
            className={styles.form}
          >
            <div className={styles.input_container}>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Correo electrónico"
              />
              {errors.email && (
                <div className={styles.error_message}>
                  Ingresa un email valido
                </div>
              )}
            </div>
            <div className={styles.input_container}>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="Contraseña"
              />
              <button type="button" onClick={handleClickShowPassword}>
                {showPassword ? (
                  <BiLowVision size={28} />
                ) : (
                  <BiShow size={28} />
                )}
              </button>
              {errors.password && (
                <div className={styles.error_message}>
                  Ingresa una contraseña
                </div>
              )}
            </div>
            <div className={styles.input_container}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", { required: true })}
                placeholder="Confirmar contraseña"
              />
              <button type="button" onClick={handleClickShowConfirmPassword}>
                {showConfirmPassword ? (
                  <BiLowVision size={28} />
                ) : (
                  <BiShow size={28} />
                )}
              </button>
              {errors.confirmPassword && (
                <div className={styles.error_message}>
                  Ingresa una contraseña
                </div>
              )}
            </div>
            <button type="submit" className={styles.container_buttonRegister}>
              Crear cuenta
            </button>
          </form>

          <div className={styles.termsandconditions}>
            <p>
              Al hacer clic en "Crear cuenta" certifico que tengo 16 años o más
              y acepto las Condiciones de Uso, la Política de Privacidad, la
              Política de Cookies y recibir novedades y promociones.
            </p>
          </div>
          <section className={styles.init_google}>
            <button className={styles.google_button}>
              <FcGoogle size={24} />
              <p> Registrarme con Google</p>
            </button>
          </section>
          <div className={styles.title}>
            <p>
              ¿Ya tienes una cuenta?
              <Link href="/login" passHref legacyBehavior>
                <a className={styles.link_login}>Iniciar sesión</a>
              </Link>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Register;
