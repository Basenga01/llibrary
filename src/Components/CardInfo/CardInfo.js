import {useNavigate, useParams} from "react-router-dom";

export const CardInfo= () => {
    let {cardId} = useParams();
    const navigate=useNavigate()

    return <>Cardnifo {cardId}
    <button onClick={()=>navigate(-1)}>назад</button>
    </>
}