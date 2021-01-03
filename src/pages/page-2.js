import React from "react"
import { Link } from "gatsby"
import UserForm from '../components/userform'
import Layout from "../components/layout"
import SEO from "../components/seo"
import firebase from "../components/firebase"          

const db = firebase.firestore();
// Get Data from Firestore

db.collection('players').get().then((snapshot) =>{
  snapshot.docs.forEach( doc => {
    renderPlayerData(doc);
  })


})
// const dataList = document.querySelector('#build_list');

function renderPlayerData(doc){

  // let dataName =  document.createElement('p');
  // dataName.setAttribute('data-id', doc.id);
  // dataName.textContent = doc.data().name;
  // dataList.appendChild(dataName);
  console.log(doc.data().name);

}

// Submit to Firestore
function handleSubmit (){

let form = document.querySelector('#firebase_submit');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted ' + form.name.value)
    db.collection('players').add({
      name: form.name.value,
    })
  })
}






const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <form id="firebase_submit">
    <input type="text" id="name" name="name"></input>
    <input type="submit" value="Send Request" onClick={handleSubmit}></input>
    </form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)



export default SecondPage
