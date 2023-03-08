import {Route, Routes} from "react-router-dom";
import {CATALOG, MAIN} from "./Paths";
import {Main} from "../Page/Main/Main";
import {Catalog} from "../Page/Catalog/Catalog";
import {CardInfo} from "../Components/CardInfo/CardInfo";

export const RoutersComponents=()=> {
    return <Routes>
        <Route path={MAIN} element={<Main/>}/>
        <Route path={CATALOG} element={<Catalog/>}/>
        <Route path={`${CATALOG}/:cardId`} element={<CardInfo/>}/>
    </Routes>
}