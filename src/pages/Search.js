import Navbar from "../components/Navbar"
import React, { useState } from "react"
import List from "../components/List"
import Card from "../components/Card"
import { getGlobalState } from "../state"
import { useLocation, useParams } from "react-router-dom"

export default function Search() {
  let search = useParams().searchItem
  return (
    <div className="App">
      <Navbar />
      <List searchValue={search}/>
    </div>
  )
}