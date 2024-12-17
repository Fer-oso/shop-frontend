import React from 'react'

export const InputFile = ({ files, error, handleFileChange, resetFiles }) => {

    return (
        <>
            <div>
                <label htmlFor="file">Upload file:</label>
                <input type="file" id="file" multiple onChange={handleFileChange} />
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <div>
                {files.length > 0 && (
                    <ul>
                        {files.map((file, index) => (
                            <li key={index}>
                                {file.name} ({(file.size / 1024).toFixed(2)} KB)
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="btn-group" role="group">
                <button type="button" className='btn btn-warning' onClick={resetFiles}>
                    Reset
                </button>
            </div>
        </>
    )
}
