/* 
Este archivo sirve como plantilla para que cada pagina tenga metadatos y otras caracteristicas que se repiten mucho en las diferentes secciones
*/

import React from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import { Props } from '../../types.d';

function Layout({ children, title, description }: Props) {
  return (
    <div className={styles.probando}>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content='' />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='Nombre del autor' />
        <meta property='og:title' content='Título de la página' />
        <meta property='og:description' content='Descripción de la página' />
        <meta property='og:image' content='URL de la imagen' />
        <meta name='twitter:title' content='Título de la página' />
        <meta name='twitter:description' content='Descripción de la página' />
        <meta name='twitter:image' content='URL de la imagen' />

        <title>{title}</title>
      </Head>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Verbify | Animate a ser parte del futuro',
  description:
    'Estudiá en nuestra plataforma e impulsá tu carrera profesional con cursos para todos los niveles.',
};

export default Layout;
