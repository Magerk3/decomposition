export const SearchBar = ({ searchTerm, handleChange }) => {
    return (
        <div className="search">
            <input
                type="search"
                autoFocus="autofocus"
                value={searchTerm}
                onChange={handleChange}
                placeholder="search here"
            ></input>
            <a href={"https://yandex.com/search/?text=" + searchTerm}>
                <button> Go </button>
            </a>
        </div>
    );
};
