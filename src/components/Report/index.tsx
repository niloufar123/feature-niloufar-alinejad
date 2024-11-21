import { ReportReasons } from "../../constants/Reasons";
import { useToast } from "../toast/useToast";

interface ReportListProps {
    setShowReport:()=>void
}

export const ReportList: React.FC<ReportListProps> = ({setShowReport}) => {
    const { showToast } = useToast();

    const handleReason=()=>{
        showToast('Report submitted!', 'success')
        setShowReport()
    }
    return (


        <div className="space-y-4">
            {ReportReasons.map((reason) => (
                <button
                onClick={handleReason}
                    key={reason.id}
                    className="block w-full py-2 px-4 rounded text-gray-700 dark:text-white bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {reason.description}
                </button>
            ))}
        </div>

    );
};


