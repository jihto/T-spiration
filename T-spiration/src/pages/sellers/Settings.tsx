import BarChart from "../../conponents/charts/BarChart";

  
interface SettingsProps{

}

const Settings:React.FC<SettingsProps> = () =>{ 
    return( 
        <div className="ml-[50%]">
            <BarChart/>
        </div>
    )

}

export default Settings;