import { NewsLine } from "./NewsLine";

export const News = ({ news }) => {
    return (
        <div>
            <ul>
                {news.map((newsLine) => (
                    <li className="newsLine" key={newsLine.id}>
                        <NewsLine>
                            <a href={newsLine.ref}>
                                <img src={newsLine.icon} alt="earth icon"></img>
                                {newsLine.title}
                            </a>
                        </NewsLine>
                    </li>
                ))}
            </ul>
        </div>
    );
};
