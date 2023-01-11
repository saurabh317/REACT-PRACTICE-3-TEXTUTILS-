import { useState } from "react";
import "./form.css";
const FormInput = () => {
    const [text, setText] = useState("");
    const inputHandler = (e) => {
        setText(e.target.value);
    };

    const clickHandlerU = () => {
        setText(text.toUpperCase());
    };

    const clickHandlerL = () => {
        setText(text.toLowerCase());
    };
    const clickHandlerP = () => {
        if (text.includes(" ")) {
            alert("plese enter a word ");
        }
        let condition = false;
        let n = text.length;
        for (let i = 0; i < n / 2; i++) {
            if (text[i] !== text[n - 1]) {
                condition = false;
                break;
            }
            condition = true;
            n--;
        }
        // console.log(condition);
        setText(condition);
    };
    return (
        <div className="main_container">
            <div className="input_container">
                <input type="text" name="" id="" value={text} onChange={inputHandler} />
            </div>
            <div className="btn_container">
                <button onClick={clickHandlerU}>convert to upper case</button>
                <button onClick={clickHandlerL}>convert to lower case</button>
                <button onClick={clickHandlerP}>check palindrome</button>
            </div>
        </div>
    );
};
export default FormInput;
