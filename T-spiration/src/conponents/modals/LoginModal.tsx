import Container from "../Container";
import ButtonIcon from "../buttons/ButtonIcon"
import TextInput from "../inputs/TextInput";
import Modal from "./Modal"
import { MdClose } from 'react-icons/md'; 
import { useState } from 'react';
import Button from "../buttons/Button";

export interface LoginModalProps{
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void ; 
}

const LoginModal: React.FC<LoginModalProps> = ({
    isOpen,
    setIsOpen,
}) =>  {
    const [text, setText] = useState<string>(""); 
    const [isSignUp, setIsSignUp] = useState<boolean>(false);

    return (
        <Modal 
            isOpen={isOpen} 
            size="small" 
            setIsOpen={setIsOpen}
            header={<ButtonIcon icon={MdClose} onClick={()=>setIsOpen(false)}/>}
            content={
                <Container>
                    <div className="flex justify-center mt-2">
                        <p className="text-3xl font-bold">{isSignUp ? "Sign Up" : "Log In"}</p>
                    </div>
                    <div className="grid gap-6 mt-6"> 
                        <TextInput title="Email..." text={text} setText={setText}/> 
                        <TextInput type="password" title="Password..." text={text} setText={setText}/> 
                        <div className={`${isSignUp ? 'w-full' : 'w-0'} transition-[1000ms]`}>
                            {isSignUp?
                                <TextInput type="password" title="Password..." text={text} setText={setText}/> 
                                : null
                            }        
                        </div>
                        <div className="flex justify-between">
                            <p>Forget password?</p>
                            <p className="font-bold underline cursor-pointer" onClick={() => setIsSignUp(!isSignUp)}>Sign Up</p>
                        </div>
                        <Button label={isSignUp ? "Send" : 'Submit'} />
                    </div>
                    {/* Footer */}
                </Container>
            }
        />
    )
}


export default LoginModal;
