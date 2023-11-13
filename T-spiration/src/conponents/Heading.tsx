import { ReactNode } from "react";

interface HeadingProps{
    children: ReactNode;
    header: string;
}

const Heading:React.FC<HeadingProps> = ({
    children,
    header
}) => {
    return (
        <div className="grid gap-5">
            <p className="text-2xl font-bold">{header}</p>
            <p className="leading-6 text-gray-600">{children}</p>
        </div>
    )
}

export default Heading;