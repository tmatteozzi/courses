import { useState } from 'react';

function BookEdit({ book }) {
    // STATE
    const [title, setTitle] = useState(book.title);

    // HANDLERS
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('New title is', title);
    };

    // JSX RETURN
    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input
                className="input"
                value={title}
                onChange={handleChange}
            ></input>
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;
