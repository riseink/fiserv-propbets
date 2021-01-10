import React from "react";
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import firebase from "../components/firebase"

const db = firebase.firestore();

db.collection('players').get().then(snapshot => {
  snapshot.docs.forEach(doc => {
      console.log(doc.data())
    })
})

const HomePage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Fiserv Prop Bets</h1>
    <p>Let's Get started</p>
  </Layout>
)

export default HomePage