import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../components/UI/Loader"
import { CountryCard } from "../components/layouts/CountryCard"
import { SearchFilter } from "../components/UI/SearchFilter"


export const Country = ()=> {

const [isPending , startTransition] = useTransition()
const [counties , setCountries] = useState([])

const [search , setSearch] = useState()
const [filter , setFilter] = useState("all")

useEffect(()=> {
  startTransition (async () => {
          const res =  await getCountryData()
          console.log(res);
          setCountries(res.data)     
  })
}, [])
 if(isPending)  return <Loader/>

//  search functionality use this for search
const searchCountry = (country) => {
    if (search) {
        return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country
}

// filter region
const filterRegion = (country) => {
 if(filter === "all")
    return country
    return country.region === filter 

}
  const filterCountries =  counties.filter((country)=> searchCountry(country) && filterRegion(country) )

// 

    return (
        <section className="country-section">
            <SearchFilter search = {search}  setSearch = {setSearch} filter = {filter} setFilter = {setFilter}/>
            <ul className="grid grid-four-cols">
                   {filterCountries.map((curCountry, index)=>{
                    return <CountryCard country = {curCountry} key={index}/>
                   })}
            </ul>
        </section>
    )
}