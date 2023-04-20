import SideBarMobile from "./SideBarMobile";
import styles from "@/styles/ResponsiveProfile.module.css";
import Avatar from "@/assets/Avatar.png";
import { useAppSelector } from "@/store/hooks";

function ResponsiveProfile() {
  const { authList } = useAppSelector((rootReducer) => rootReducer.auth);

  return (
    <div className={styles.background}>
      <SideBarMobile />
      <section className={styles.info}>
        <h1 className={styles.title}>Mi perfil</h1>
        <div className={styles.alluserdata}>
          <section className={styles.section}>
            <div className={styles.userdetails}>
              <div className={styles.imagebox}>
                <img
                  className={styles.image}
                  src={Avatar.src}
                  alt="user image"
                />
              </div>
              <div className={styles.shortdescription}>
                <p className={styles.userName}>
                  {authList?.firstName} {authList?.lastName}
                </p>
                <p>{authList?.country}</p>
                <p>{authList?.bio}</p>
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <p className={styles.userName}>Información Personal</p>
              <div className={styles.container}>
                <div className={styles.column}>
                  <div>
                    <p className={styles.label}>Nombre</p>
                    <p>{authList?.firstName}</p>
                  </div>
                  <div>
                    <p className={styles.label}>Correo Electrónico</p>
                    <p>{authList?.email}</p>
                  </div>
                  <div>
                    <p className={styles.label}>Bio</p>
                    <p>{authList?.bio}</p>
                  </div>
                </div>
                <div className={styles.column}>
                  <div>
                    <p className={styles.label}>Apellido</p>
                    <p>{authList?.lastName}</p>
                  </div>
                  <div>
                    <p className={styles.label}>Teléfono</p>
                    <p>{authList?.phone}</p>
                  </div>
                  <div>
                    <p className={styles.label}>País</p>
                    <p>{authList?.country}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <p>Producto y método de pago</p>
              <div className={styles.payment}>
                <div>
                  <p className={styles.label}>Producto</p>
                  <p>{authList?.product && "Es miembro"}</p>
                </div>
                <div>
                  <p className={styles.label}>Vence</p>
                  <p>06/04/2024</p>
                </div>
                <div>
                  <p className={styles.label}>Número de tarjeta</p>
                  <p>**** 0405</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <button className={styles.deletebutton}>Eliminar cuenta</button>
      </section>
    </div>
  );
}

export default ResponsiveProfile;
