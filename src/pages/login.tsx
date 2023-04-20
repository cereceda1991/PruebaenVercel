import Link from "next/link";
import styles from "@/styles/Login.module.css";
import React, { useCallback, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Verbify from "../assets/Verbify.png";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { signInUser } from "@/actions/authActions";
import { useRouter } from "next/router";

function Login() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useRouter();

  const { authList, authToken } = useAppSelector(rootReducer => rootReducer.auth)

  useEffect(() => {
    if (authList && authToken) {
      // TO DO check where this should route...
      navigate.push('/myprogress');
    }
  });

  const dispatch = useAppDispatch();

  const fetchLogIn = useCallback(() => { dispatch(signInUser(inputs)) }, [dispatch, inputs])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickLogIn = (event: React.MouseEvent) => {
    event.preventDefault();
    fetchLogIn();
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <section>
          <section>
            <img src={Verbify.src} />
            <p>Iniciar sesión para ver más contenido</p>
          </section>
          <form method="post" className={styles.form}>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Correo electrónico"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              placeholder="Contraseña"
            />
            <div>
              <button type="button" onClick={handleClickShowPassword}>
                <span>
                  {showPassword ? (
                    <BsEyeSlash size={28} />
                  ) : (
                    <BsEye size={28} />
                  )}
                </span>
              </button>
            </div>
            <Link className={styles.link} href="/">
              ¿Has olvidado tu contraseña?
            </Link>
            <button onClick={handleClickLogIn} className={styles.button}>
              Iniciar sesión
            </button>
          </form>
          <div className={styles.div}>
            <div>
              <div />
              <span>
                <p>ó</p>
              </span>
              <div />
            </div>
            <button>
              <FcGoogle size={28} />
              <p>Iniciar con Google</p>
            </button>
          </div>
          <span>
            <p className={styles.p}>
              ¿No tienes una cuenta?
              <Link className={styles.link_2} href="/register">
                Registrate aquí
              </Link>
            </p>
          </span>
        </section>
      </section>
    </main>
  )
}

export default Login;
