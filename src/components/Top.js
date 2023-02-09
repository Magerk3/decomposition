import { TopLine } from "./TopLine";

export const Top = ({ top }) => {
    return (
        <div>
            <ul>
                {top.map((topLine) => (
                    <li key={topLine.id}>
                        <TopLine>
                            <a href="##">
                                {topLine.source} -- {topLine.thing}
                            </a>
                        </TopLine>
                    </li>
                ))}
            </ul>
        </div>
    );
};
