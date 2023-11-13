

interface TextInputProps {
    text: string;
    setText: (searchText: string) => void;
    type?: "text" | "password" | "email" | "phone";
    outline?: boolean;
    title: string;
}

const TextInput: React.FunctionComponent<TextInputProps> = ({
    text,
    outline = true,
    title,
    type = "text",
    setText, 
}) => {
    return (
        <div className="relative w-full text-gray-800"> 
            <input 
                type={type}
                value={text}
                onChange={(e) => setText(e.target.value)} 
                className={`
                    flex flex-wrap peer py-6 h-10 w-full outline-none hover:bg-opacity-80 pointer align-middle
                    ${outline ? "bg-gray-100 rounded-xl ps-6" : "bg-transparent border-b-2 ps-2"}
                `}
            />
            <p className={`
                ${!text ? "top-[25%] left-4" : "-top-1/2 left-2 "}
                absolute  font-bold peer-focus:-top-1/2 peer-focus:left-2 transition-[500ms]
                ${outline ? "text-gray-500 peer-focus:text-black " : "text-white peer-focus:text-white"}
            `}>
                {title}
            </p>
        </div>
    )
}


export default TextInput;