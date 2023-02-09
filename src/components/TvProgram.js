import { ShowLine } from "./ShowLine";

export const TvProgram = ({ tvProgram }) => {
    return (
        <div>
            <ul>
                {tvProgram.map((showLine) => (
                    <li key={showLine.id}>
                        <ShowLine>
                            <a href="##">
                                {showLine.time} {showLine.title}
                                {showLine.channel}
                            </a>
                        </ShowLine>
                    </li>
                ))}
            </ul>
        </div>
    );
};
