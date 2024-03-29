import PropTypes from "prop-types";
import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
    const [item, setItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(item);
        setItem("");
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    type="text"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    id="item"
                />
            </div>
            <button type="submit">Add</button>
        </form>
    );
};

NewTodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default NewTodoForm;
