import React, { useState } from 'react';


export default function Home(props) {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {

        setText(e.target.value);

    };


    const handleUppercase = () => {
        setText(text.toUpperCase());
    };

    const handleLowercase = () => {
        setText(text.toLowerCase());
    };

    const handleClear = () => {
        setText('');
    };

    const handlecopy = () => {
        navigator.clipboard.writeText(text);
        alert('Text copied to clipboard!');
    };

    const handleRemoveExtraSpaces = () => {

        const trimmedText = text.replace(/\s+/g, ' ');
        setText(trimmedText);
    };

    const countWords = () => {

        return text.split(" ").filter((element) => { return element.length !== 0 }).length
    };

    const countCharacters = () => {
        return text.length;
    };

    const formatText = () => {
        return text.replace(/\n/g, '<br />'); // Convert newline characters to HTML line breaks
    };
    return (
        <>
            <div className="max-w-7xl mx-auto p-4">
                <h1 className={`pt-12 mb-4  text-2xl font-mono font-normal text-${props.mode === 'white' ? 'black' : 'white'}`}>Enter the text to analyze below</h1>
                <textarea
                    className={` w-full h-60 p-2 mb-4 border-2 border-blue-700 rounded resize-none`}
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Enter the  text..."
                >
                </textarea>
                <div className=" max-w-7xl  mx-auto flex-wrap flex space-x-2">
                    <button
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
                        disabled={text.length === 0}
                        onClick={handleUppercase}

                    >
                        Uppercase
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
                        disabled={text.length === 0}
                        onClick={handleLowercase}

                    >
                        Lowercase
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
                        disabled={text.length === 0}
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
                        disabled={text.length === 0}
                        onClick={handlecopy}

                    >
                        Copy text
                    </button>

                    <button
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
                        disabled={text.length === 0}
                        onClick={handleRemoveExtraSpaces}
                    >
                        Remove spaces
                    </button>
                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
                <h1 className={`pt-12 mb-4  text-2xl font-mono font-normal text-${props.mode === 'white' ? 'black' : 'white'}`}> Text summary :</h1>
                <span className={`font-mono font-normal text-${props.mode === 'white' ? 'black' : 'white'}`}>{countWords()} words and {countCharacters()} characters</span>
                <br />
                <span className={`font-mono font-normal text-${props.mode === 'white' ? 'black' : 'white'}`}>{0.008 * text.split("").length} Minutes read</span>


                <h1 className={`pt-8 mb-4  text-2xl font-mono font-normal text-${props.mode === 'white' ? 'black' : 'white'}`}> Preview:</h1>
                <div
                    className={`border border-gray-300 p-2 rounded text-${props.mode === 'white' ? 'black' : 'white'} `}
                    dangerouslySetInnerHTML={{ __html: formatText() }}
                ></div>

            </div>
        </>
    )
}
