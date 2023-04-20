import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import React, { useState } from "react";
import Verbify from "@/assets/Verbify.png";
import styles from "@/styles/ResponsiveLogin.module.css";

function ResponsiveLogin() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
            <button type="submit" className={styles.button}>
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
  );
}

export default ResponsiveLogin;
