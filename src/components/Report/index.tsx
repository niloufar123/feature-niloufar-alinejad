import { ReportReasons } from "../../constants/Reasons";


const ReportList = () => {
    return (


        <div className="space-y-4">
            {ReportReasons.map((reason) => (
                <button
                    key={reason.id}
                    className="block w-full py-2 px-4 rounded text-gray-700 dark:text-white bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {reason.description}
                </button>
            ))}
        </div>

    );
};

export default ReportList;
