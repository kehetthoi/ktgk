import React, { Component } from 'react'
import { useEffect } from 'react'
import { fectchUsers } from './serviecs'

function App() {
  useEffect(()=>{
    async function loadData() {
      const [userData]=await Promise.all([fectchUsers()])
      console.log("=================================")
      console.log(userData)
      console.log("=================================")

    }
    loadData()
  },[])

  async function handleCrateUser(){
    try{
      const newUser ={
        name:'TAO'
      }
      const data = await CreateUser(newUser)
      console.log("=================================")
      console.log(data)
      console.log("=================================")
    }
  catch(error){
    console.error("Error creating user:", error);
  }
}
}
