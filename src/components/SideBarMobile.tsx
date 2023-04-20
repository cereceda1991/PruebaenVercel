// Importaciones de React y Hooks
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

// Importaciones de estilos
import styles from "@/styles/SideBarMobile.module.css";

// Importaciones de iconos
import {
  BiHomeAlt,
  BiUserCircle,
  BiBookContent,
  BiPencil,
  BiLogOut,
  BiRightArrowAlt,
} from "react-icons/bi";

// Importaciones de imágenes
import Avatar from "../assets/Avatar.png";
import iconV from "../assets/Icon_verbify.png";

// Importaciones de Next.js
import Link from "next/link";
import { LogOutUserAction, logOutUser } from "@/actions/authActions";
function SideBarMobile() {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const fetchLogOut = useCallback(() => {
    dispatch<LogOutUserAction>(logOutUser());
  }, [dispatch]);

  const handleClickLogOut = () => {
    fetchLogOut();
    router.push("/");
  };

  return (
    <nav className={styles.container_sidebarmobile}>
      <div className={`${styles.menu_mobile} ${showMenu ? "" : styles.hidden}`}>
        <img src={iconV.src} onClick={toggleMenu} />
        <p>Menu</p>
        <hr />
        <button>
          <Link href="/">
            <BiHomeAlt size={28} />
          </Link>
        </button>
        <button>
          <Link href="/profile">
            <BiUserCircle size={28} />
          </Link>
        </button>
        <button>
          <Link href="/myprogress">
            <BiBookContent size={28} />
          </Link>
        </button>
        <button>
          <Link href="/classroom">
            <BiPencil size={28} />
          </Link>
        </button>
        <hr />
        <img src={Avatar.src} />
        <button onClick={handleClickLogOut}>
          <BiLogOut size={28} />
        </button>
      </div>
      <div className={styles.icon_RightArrow} onClick={toggleMenu}>
        <BiRightArrowAlt />
      </div>
    </nav>
  );
}

export default SideBarMobile;
