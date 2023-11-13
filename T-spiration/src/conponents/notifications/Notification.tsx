

interface NotificationProps{
    className?: string;
}

const Notification:React.FC<NotificationProps> = ({
    className = "",
}) => {
    return (
        <div className={`${className} grid justify-start p-4 absolute z-50 top-12 -left-20 w-60 shadow-xl h-40 rounded-lg bg-gray-100`}>
            <p className="font-medium">Notifications:</p>
            <hr/>
            <p className="text-sm"> Nike eyeGlasses was order successfull</p>
        </div>
    )
}


export default Notification;