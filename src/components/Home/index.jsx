import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./Home.scss"
import {isFixedSideMenu} from "../../redux/actions/sideMenuAction.js";
import {setVideos} from "../../redux/actions/resultDataAction.js";
import DataCard from "../DataCard/index.jsx";

const Home = () => {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const { resultData } = selector;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        dispatch(
            isFixedSideMenu({
                    toggle: screenWidth > 1000 ? true : false,
                    fixed: screenWidth > 1000 ? false : true,
            })
        );

        dispatch(setVideos("", 10));

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        dispatch(
            isFixedSideMenu({
                toggle: screenWidth > 1000 ? true : false,
                fixed: screenWidth > 1000 ? false : true,
            })
        );
    }, [screenWidth])

    return (
        <div className="home">
            {resultData.error && <p>{resultData.error}</p>}
            {resultData.loading && <h1>Loading...</h1>}
            {resultData?.data?.videos?.length > 0 && (
                <div className="data-cards">
                    {resultData.data.videos.map((data, index) => {
                        return <DataCard key={index} data={data}></DataCard>;
                    })}
                </div>
            )}
        </div>
    )

}
export default Home;