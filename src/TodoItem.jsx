import PropTypes from "prop-types";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
    return (
        <li key={id}>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button onClick={() => deleteTodo(id)} className="btn btn-danger">
                Delete
            </button>
        </li>
    );
};

TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
