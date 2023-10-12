

interface SearchInputProps {
    searchText: string;
    setSearchText: (searchText: string) => void;
    icon?: React.ReactElement;
}

const SearchInput: React.FunctionComponent<SearchInputProps> = ({
    searchText,
    setSearchText,
    icon
}) => {
    return (
        <div className="relative w-full text-gray-500 font-bold drop-shadow-lg ">
            <div className="absolute text-2xl top-[20%] left-2 after:absolute after:w-px after:h-full after:rounded-full after:top-0 after:-right-2 after:bg-gray-500">
                {icon}
            </div>
            <input 
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} 
                className="flex peer bg-gray-100 ps-11 py-4 h-10 w-full outline-none betterhover:hover:bg-opacity-80 pointer rounded-full align-middle"
            />
            <p className={`absolute top-[20%] ${icon ? 'left-14' : 'left-4'} text-gray-500 peer-focus:-top-1/2 peer-focus:left-6 peer-focus:text-black transition-[500ms]`}>
                Search...
            </p>
        </div>
    )
}


export default SearchInput;