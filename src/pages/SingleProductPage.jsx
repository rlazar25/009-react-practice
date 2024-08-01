import { useParams } from "react-router-dom";

function SingleProductPage(){

    const {id} = useParams()
    
    console.log(id);

    return(
        <div>
            <h2 className="title">Single Product Page</h2>
        </div>
    )
}

export default SingleProductPage