import React from 'react'
import Link from 'next/link';
import Layout from '../components/layout';


import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Header from '../components/Header'
import styles from '../styles/Home.module.css';
import Header2 from '../components/Header2'
import { getSortedList } from '../lib/data';
//import Layout from '../components/layout';

export async function getStaticProps(){
  const allData = await getSortedList();
  return{
    props: {
      allData
    },
    revalidate: 60 // seconds before Incremental Static Regeneration
  }
}

export default function Home({ allData }) {
  const AuthUser = useAuthUser()

  return (

    <Layout home>
    <Header2
    email={AuthUser.email} 
    signOut={AuthUser.signOut} />

      <h3>Welcome!</h3>
      <p>
        Sign-in to choose from the options above
      </p>

    <h1>
    Posts
    </h1>
    <div className="list-group col-6">
      {allData.map(({ id, name }) => (
        <Link key={id} href={`/${id}`}>
          {/*<a className="list-group-item list-group-item-action"> {name} </a>*/}
          <a className="btn-group btn btn-primary"> {name} </a>

        </Link>
      ))}
    </div>
  </Layout>



);
}