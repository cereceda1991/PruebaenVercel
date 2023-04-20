import React, { useCallback, useState } from 'react';
import styles from '@/styles/SideBar.module.css';
import { BiRightArrowAlt, BiHomeAlt, BiUserCircle, BiBookContent, BiPencil, BiLogOut, BiArrowBack } from 'react-icons/bi';
import Avatar from '../assets/Avatar.png';
import VerbifyLogo from '../assets/Verbify-logo.png';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logOutUser } from '@/actions/authActions';
import { useRouter } from 'next/router';

function SideBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
  };

  const dispatch = useAppDispatch();

  const fetchLogOut = useCallback(() => { dispatch(logOutUser()) }, [dispatch]);

  const navigate = useRouter();

  const handleClickLogOut = () => {
    fetchLogOut();
    navigate.push("/");
  };

  const {
    authList,
  } = useAppSelector(rootReducer => rootReducer.auth);

  return (
    <div> {!open ?
      <nav className={styles.nav}>
        <span>
          <div>
            <button onClick={handleClick} className={styles.button_2}><BiRightArrowAlt size={28} /></button>
            <p>Menu</p>
          </div>
          <hr />
          <div>
            <button><Link href="/"><BiHomeAlt size={28} /></Link></button>
            <button><Link href="/profile"><BiUserCircle size={28} /></Link></button>
            <button><Link href="/myprogress"><BiBookContent size={28} /></Link></button>
            <button><Link href="/classroom"><BiPencil size={28} /></Link></button>
          </div>
          <hr />
        </span>
        <div>
          <img src={Avatar.src} />
          <button onClick={handleClickLogOut}><BiLogOut size={28} /></button>
        </div>
      </nav> :
      <nav className={styles.nav_2}>
        <span>
          <div>
            <div>
              <img src={VerbifyLogo.src} />
              <button onClick={handleClick} className={styles.button_3}>
                <BiArrowBack size={28} />
              </button>
            </div>
            <p>Menu</p>
          </div>
          <hr />
          <div>
            <button><Link href="/"><BiHomeAlt size={28} /><p>Home</p></Link></button>
            <button><Link href="/profile"><BiUserCircle size={28} /><p>Perfil</p></Link></button>
            <button><Link href="/myprogress"><BiBookContent size={28} /><p>Cursos</p></Link></button>
            <button><Link href="/classroom"><BiPencil size={28} /><p>Classroom</p></Link></button>
          </div>
          <hr />
        </span>
        <section>
          <div>
            <img src={Avatar.src} />
            <div>
              <h5>{authList?.displayName}</h5>
              <p>{authList?.email}</p>
            </div>
          </div>
          <button onClick={handleClickLogOut}>
            <BiLogOut size={28} />
            <p>Cerrar sesión</p>
          </button>
        </section>
      </nav>}
    </div>
  )
};

export default SideBar;
