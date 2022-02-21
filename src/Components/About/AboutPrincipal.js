import AboutUs from "./AboutUs";

export default function AboutPrincipal(){
    const principalText= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusamus nostrum explicabo recusandae vitae incidunt atque magnam illo modi repellendus, quasi sapiente earum excepturi similique iusto ipsa accusantium ab vero."

    return(
        <div className="aboutPrincipal-container">
            <AboutUs text={principalText}/>
        </div>
    )
}