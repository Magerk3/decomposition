import { News } from "./News";
import { Weather } from "./Weather";
import { Trade } from "../Trade";
import { TvProgram } from "./TvProgram";
import { Top } from "./Top";
import { Live } from "./Live";
import { SearchBar } from "./searchBar";

export const Decomposition = ({
    news,
    weather,
    trade,
    tvProgram,
    live,
    top,
    searchTerm,
    handleChange,
}) => {
    const { now, morning, day } = weather;
    return (
        <div className="decomposition">
            <News news={news} />
            <Trade trade={trade} />
            <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
            <div className="columns">
                <Weather>
                    <div className="weather">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxsu8fGiPvwOIF0aQjvtJP2Q0Vz90jabZ5YJcPCWW1K3oynmoPgq82wQ2xoF4O-EWkj2w&usqp=CAU"
                            alt="cloudy img"
                            style={{ width: 80 }}
                        ></img>
                        <h2>{now}</h2>
                        <p>Утром: {morning}</p>
                        <p>Днем: {day}</p>
                    </div>
                </Weather>
                <TvProgram tvProgram={tvProgram} />
                <Top top={top} />
                <Live live={live} />
            </div>
        </div>
    );
};
