export const Contact = ()=> {
    const handleFormSubmit = (formData) => {
    console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData);
    
    
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container"> 

           
        <form action={handleFormSubmit}>

            <input className="form-control" type="text" required autoComplete="false" placeholder="enter your name" name="username"/>
            <input className="form-control" type="email" required autoComplete="false" placeholder="enter your email" name="email"/>
            <textarea  className="form-control" rows= "10" placeholder="enter your message" name="message" required autoComplete="false"></textarea>
             <button type="submit" value="send">Send</button>
        </form>
        </div>
        </section>
    )
}