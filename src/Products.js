 export function Products_detail()
{
    const products=[
        {
            name:"cranes",
            image:"https://cpimg.tistatic.com/03693810/b/5/Rhino-110C-Pick-Carry-Cranes.jpg",
            heading:"CRANES"
        },
        {
            name:"earthmoving_machinery",
            image:"https://4.imimg.com/data4/FY/QY/MY-993584/heavy-earthmoving-machine-500x500.png",
            heading:"EARTHMOVING MACHINERY"
        },
        {
            name:"road_machinery",
            image:"https://www.schwingstetterindia.com/sites/default/files/Motor-Grader-GR1605_0.jpg",
            heading:"ROAD MACHINERY"
        },
        {
            name:"mixer",
            image:"https://www.heavyequipments.in/uploads/blogimage/Bull%20Concrete%20Mixer%204%20Cum.webp",
            heading:"TRANSIT MIXER"
        },
        {
            name:"concrete_machinery",
            image:"https://www.hawkplant.com/assets/images/pages/Concrete_Batching_Mixer_1.jpg",
            heading:"CONCRETE MACHINERY"
        },
        {
            name:"air_compressor",
            image:"https://static.grainger.com/rp/s/is/image/Grainger/1VAN8_AS01",
            heading:"AIR COMPRESSOR"
        }
    ];
    return(
        <div>
        {products.map((pr)=><Products name={pr.name} image={pr.image} heading={pr.heading}/>)}
        
        </div>
    )
}
    export function Products({name,image,heading}) {
     console.log(name,image,heading);
    return(
        <div className="products_detail">
        <p className="product_heading">PRODUCTS</p>
        <div className="products">
       
       <div className="cranes">
                <img src={image} alt={name}></img>
                <h1>{heading}</h1>
            </div>
            {/* <div className="cranes">
                <img src="https://cpimg.tistatic.com/03693810/b/5/Rhino-110C-Pick-Carry-Cranes.jpg" alt="cranes"></img>
                <h1>CRANES</h1>
            </div>
            <div className="earthmoving_machinery">
                <img src="https://4.imimg.com/data4/FY/QY/MY-993584/heavy-earthmoving-machine-500x500.png" alt="earthmoving"></img>
                <h1>EARTHMOVING MACHINERY</h1>
            </div>
            <div className="road_machinery">
                <img src="https://www.schwingstetterindia.com/sites/default/files/Motor-Grader-GR1605_0.jpg" alt="road"></img>
                <h1>ROAD MACHINERY</h1>
            </div>
            <div className="mixer">
                <img src="https://www.heavyequipments.in/uploads/blogimage/Bull%20Concrete%20Mixer%204%20Cum.webp" alt="mixer"></img>
                <h1>TRANSIT MIXER</h1>
            </div>
            <div className="concrete_machinery">
                <img src="https://www.hawkplant.com/assets/images/pages/Concrete_Batching_Mixer_1.jpg" alt="concrete"></img>
                <h1>CONCRETE MACHINERY</h1>
            </div>
            <div className="air_compressor">
                <img src="https://static.grainger.com/rp/s/is/image/Grainger/1VAN8_AS01" alt="compressor"></img>
                <h1>AIR COMPRESSOR</h1>
            </div> */}
        </div>
        </div>
    )
}