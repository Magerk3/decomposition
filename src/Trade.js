export const Trade = ({ trade }) => {
    const {USD_MOEX, EUR_MOEX, oil} = trade;
    return (
        <div>
            <p>
                USD_MOEX: {USD_MOEX} EUR_MOEX: {EUR_MOEX} oil: {oil}
            </p>
        </div>
    );
};
