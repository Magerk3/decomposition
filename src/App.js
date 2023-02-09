import { Decomposition } from "./components/Decomposition";
import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [news, setNews] = useState([
        {
            title: "Путин упростил получение автомобильных номеров",
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/353/225/small/world-planet-earth-line-style-icon-free-vector.jpg",
            ref: "https://www.interfax.ru/russia/671013",
            id: uuidv4(),
        },
        {
            title: "автомобильных упростил получение Путин номеров",
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/353/225/small/world-planet-earth-line-style-icon-free-vector.jpg",
            ref: "https://www.interfax.ru/russia/671013",
            id: uuidv4(),
        },
        {
            title: "получение Путин номеров упростил  автомобильных",
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/353/225/small/world-planet-earth-line-style-icon-free-vector.jpg",
            ref: "https://www.interfax.ru/russia/671013",
            id: uuidv4(),
        },
    ]);

    const [weather, setWeather] = useState({
        now: "+17",
        morning: "+10",
        day: "+20",
        sky: "cloudy",
    });

    const [trade, setTrade] = useState({
        USD_MOEX: 63.52,
        EUR_MOEX: 70.86,
        oil: 64.9,
    });

    const [tvProgram, setTvProgram] = useState([
        {
            time: "02:00",
            title: "Cчастливы вместе",
            channel: "THT International",
            id: uuidv4(),
        },
        {
            time: "02:00",
            title: "Cчастливы вместе",
            channel: "THT International",
            id: uuidv4(),
        },
        {
            time: "02:00",
            title: "Cчастливы вместе",
            channel: "THT International",
            id: uuidv4(),
        },
    ]);

    const [live, setLive] = useState([
        {
            title: "Управление как искусство",
            source: "Успех",
            id: uuidv4(),
        },
        {
            title: "Ночь. Мир в это время.",
            source: "earthTV",
            id: uuidv4(),
        },
        {
            title: "Андрей Возн...",
            channel: "Совершенно секретно",
            id: uuidv4(),
        },
    ]);

    const [top, setTop] = useState([
        {
            source: "Недвижимость",
            thing: "о сталинках",
            id: uuidv4(),
        },
        {
            source: "Маркет",
            thing: "люстры и светильники",
            id: uuidv4(),
        },
        {
            source: "Авто.ру",
            thing: "привод 4х4 до 500 000",
            id: uuidv4(),
        },
    ]);
    const [searchTerm, setSearchTerm] = useState('')
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    

    

    return (
        <div className="App">
            <Decomposition
                news={news}
                weather={weather}
                trade={trade}
                tvProgram={tvProgram}
                live={live}
                top={top}
                searchTerm={searchTerm}
                handleChange={handleChange}
            />
        </div>
    );
}

export default App;
