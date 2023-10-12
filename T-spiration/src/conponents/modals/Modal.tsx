

interface ModalProps{
    size?: "large" | "small";
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void ; 
    header: React.ReactNode;
    content: React.ReactNode;
    action?: React.ReactNode;
}
const Modal: React.FunctionComponent<ModalProps> = ({
    size = "large",
    isOpen,
    setIsOpen, 
    header,
    content, 
    action
}) => { 
    return (
        <div className={`fixed z-50 bg-black overflow-x-hidden overflow-y-auto ${isOpen ? "w-full h-full" : "w-full h-0"} transition-[1000ms] z-50 inset-0 focus:outline-none bg-neutral-800/70 flex items-center justify-center`}>
            <div className={`relative bg-white p-4 rounded-xl ${size==="large" ? 'w-2/3 h-fit':"w-1/3 h-1/2"}`}>
                <div className="absolute right-4"> 
                    {header} 
                </div> 
                <div className="mt-4"> 
                    {content} 
                    {action} 
                </div>
            </div>
        </div>
    )
}


export default Modal;