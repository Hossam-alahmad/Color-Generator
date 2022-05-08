import React, { useState } from "react";
import Values from "values.js";

const Form = ({ setColor }) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const submitHandler = e => {
        e.preventDefault();
        if (!value.trim()) {
            setError(true);
            setTimeout(() => setError(false), 1500);
        } else {
            try {
                setColor(new Values(value).all(10));
            } catch (error) {
                setError(true);
                setTimeout(() => setError(false), 1500);
                console.log(error);
                setValue("");
            }
        }
    };
    return (
        <form
            onSubmit={submitHandler}
            className="d-flex justify-content-center align-items-center mb-4 flex-wrap"
        >
            <div className="form-group d-flex justify-content-center align-items-center ms-2 mb-2 mb-md-0 flex-wrap">
                <label htmlFor="color" className="fw-bolder fs-4 ms-2">
                    Please Enter Color:
                </label>
                <input
                    type="text"
                    className={
                        error ? "form-control border-danger" : "form-control"
                    }
                    id="color"
                    placeholder="Ex.#454545"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Generate"
                />
            </div>
        </form>
    );
};

export default Form;
