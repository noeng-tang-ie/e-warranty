import React, { useState } from 'react'

const CustomFileInput = ({ name = '', label = '', text = '', error, required, ...props }: { name: string; label: string; text?: string; error?: string; required?: boolean;[key: string]: any }) => {
    const [selectedFile, setSelectedFile] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSelectedFile(file ? file.name : '');
        if (props.onChange) props.onChange(e);
    };

    return (
        <div style={{ marginBottom: '1rem' }}>
            <label htmlFor={name} style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                {label}{required && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
                id={name}
                name={name}
                type="file"
                style={{ display: 'none' }}
                onChange={handleChange}
                {...props}
            />
            <button
                type="button"
                onClick={() => document.getElementById(name)?.click()}
                style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '1rem'
                }}
            >
                Choose File
            </button>
            {selectedFile && <span style={{ marginLeft: '1rem' }}>{selectedFile}</span>}
            {text && <div style={{ fontSize: '0.875rem', color: '#6c757d', marginTop: '0.25rem' }}>{text}</div>}
            {error && <div style={{ fontSize: '0.875rem', color: 'red', marginTop: '0.25rem' }}>{error}</div>}
        </div>
    )
}

export default CustomFileInput
