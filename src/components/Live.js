import { LiveLine } from "./LiveLine";

export const Live = ({ live }) => {
    return (
        <div>
            <ul>
                {live.map((liveLine) => (
                    <li key={liveLine.id}>
                        <LiveLine>
                            <a href={liveLine.ref}>
                                <img
                                    src={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8MEpjXEhwlM-icPnYg9SNZI2XM_ZVg_wZf1iPfxMOchqu-7wJ6gSzOwEOxef3w6rcq4&usqp=CAU"
                                    }
                                    alt="earth icon"
                                    style={{ width: 15 }}
                                ></img>
                                {liveLine.title + " " + liveLine.source}
                            </a>
                        </LiveLine>
                    </li>
                ))}
            </ul>
        </div>
    );
};
