import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchQuery);
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};

export default SearchBar;
