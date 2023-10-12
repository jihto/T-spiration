

interface TextInputProps {
    text: string;
    setText: (searchText: string) => void;
    type?: "text" | "password"
    title: string;
}

const TextInput: React.FunctionComponent<TextInputProps> = ({
    text,
    title,
    type = "text",
    setText, 
}) => {
    return (
        <div className="relative w-full text-gray-500 font-bold drop-shadow-lg "> 
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} 
                className="flex peer bg-gray-100 ps-6 py-4 h-10 w-full outline-none betterhover:hover:bg-opacity-80 pointer rounded-full align-middle"
            />
            <p className={`absolute top-[20%] left-4 text-gray-500 peer-focus:-top-1/2 peer-focus:left-2 peer-focus:text-black transition-[500ms]`}>
                {title}
            </p>
        </div>
    )
}


export default TextInput;