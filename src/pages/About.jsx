
import countryFact from "../api/countryData.json"
export const About = ()=> {
    return (
        <section className="section-about container">
            <h2 className="container-title">Here are the intrusting facts <br />  we proud of</h2> 

           <div className="gradient-cards">
            {
                countryFact.map((country)=> {
                    const {id, countryName, capital,population,interestingFact} = country

                    return (
                        <div className="card" key={id}>
                        <div className="container-card bg-blue-box">
                            <p className="card-title">{countryName}</p>
                            <p>
                                <span className="card-description">capital:</span>
                                {capital}
                            </p>
        
                            <p>
                                <span className="card-description">population:</span>
                                {population}
                            </p>
        
                            <p>
                                <span className="card-description">intrusing fact:</span>
                                 {interestingFact}
                            </p>
        
                        </div>
                    </div>
                    )
                })
            }
         
           </div>
        </section>
    )
}