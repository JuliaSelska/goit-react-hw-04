import { useState } from 'react';
import styles from './SearchBar.module.css'


const SearchBar = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchQuery);
    };

    return (
        <header className={styles.searchBar}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                />
                <button className={styles.searchBtn} type="submit">Search</button>
            </form>
        </header>
    );
};

export default SearchBar;
