import {Transaction} from "@/backend/types";

export function TransacTable(transactions: Transaction[]) {
    return (
        <table className="w-full border-collapse">
            <thead>
            <tr>
                <th className="border border-gray-300 p-2 bg-gray-100 text-left">Type</th>
                <th className="border border-gray-300 p-2 bg-gray-100 text-left">Amount</th>
                <th className="border border-gray-300 p-2 bg-gray-100 text-left">Date</th>
                <th className="border border-gray-300 p-2 bg-gray-100 text-left">Category</th>
            </tr>
            </thead>
            <tbody>
            {transactions.map((transaction) => (
                <tr key={transaction.id} className={transaction.type === "income" ? "bg-green-100" : "bg-red-100"}>
                    <td className="border border-gray-300 p-2">{transaction.type}</td>
                    <td className="border border-gray-300 p-2">${transaction.amount.toFixed(2)}</td>
                    <td className="border border-gray-300 p-2">{transaction.date.toLocaleDateString()}</td>
                    <td className="border border-gray-300 p-2">{transaction.category}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <button onClick={onClose} className="absolute top-0 right-0 m-4">X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;