import styles from "./InputField.module.scss";

const InputField = ({
    width,
    placeholder,
    name,
    helper,
    validIndication,
    type,
    required,
    onChange,
    pattern,
    originalValue,
    onClick,
    helperText
}) => {
    if (type === "submit") {
        return (
            <div
                className={styles.InputFieldSubmit}
                data-testid="InputField"
                style={{ width: width || "300px" }}
            >
                <input
                    id={name || placeholder?.replaceAll(" ", "")}
                    type="submit"
                    onClick={onClick}
                    name={name || placeholder?.replaceAll(" ", "") || "submit"}
                    autoComplete={name || placeholder?.replaceAll(" ", "") || "submit"}
                    value={placeholder || "Submit"}
                />
            </div>
        );
    } else if (type === "textarea") {
        return (
            <div 
                className={`${styles.InputField}`} 
                data-testid="InputField"
                style={{ width: width || "300px" }}
            >
                <textarea
                    className={styles.TextBox}
                    placeholder=" "
                    onChange={onChange}
                ></textarea>
                <label 
                    htmlFor={placeholder}
                    className={styles.TextAreaLabel}
                >
                    {placeholder}
                </label>
            </div>
        )
    } else {
        return (
            <div 
                className={`${styles.InputField}`} 
                data-testid="InputField"
                style={{ width: width || "300px" }}
            >
                {helperText && (
                    <p className={styles.HelperText}>{helperText}</p>
                )}
                <input
                    id={name || placeholder?.replaceAll(" ", "")}
                    className={`${
                        helper !== undefined ? styles._hasHelper : ""} ${
                        validIndication ? styles.validIndicator : ""
                    }`}
                    type={type}
                    placeholder=" "
                    name={name || placeholder?.replaceAll(" ", "")}
                    autoComplete={name || placeholder?.replaceAll(" ", "")}
                    required={required}
                    onChange={onChange}
                    pattern={pattern}
                    data-original-value={originalValue}
                    value={originalValue}
                />
                <label 
                    htmlFor={placeholder}
                    className={styles.InputLabel}
                >
                    {placeholder}
                </label>
            </div>
        )
    }
}

export default InputField;