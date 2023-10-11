import styles from "./InlineRadioInput.module.scss";
import React, { useState, useEffect } from "react";

const InlineRadioInput = ({
    color,
    label,
    value,
    name,
    onChange,
    type,
    checked
}) => {

    const id = `${label?.replaceAll(" ", "-")}-${name?.replaceAll(" ", "-")}`;

    return (
        <div className={styles.RadioInput}>
            <input 
                className={styles.Input}
                id={id}
                type={type ?? "radio"}
                name={name}
                value={value}
                style={{ display: "none" }}
                onChange={onChange}
                checked={checked}
            />
            <label
                className={styles.Label}
                htmlFor={id}
                style={
                    checked
                        ? { backgroundColor: color, borderColor: color }
                        : { borderColor: color, backgroundColor: "#eee", color: "#000" }
                }
            >
                {label}
            </label>
        </div>
    )
}

export default InlineRadioInput;