
import { Table } from "../ui/Table";

const recentTransactions = [
  {
    date: "2024-03-15",
    description: "Home Depot Purchase",
    amount: "$250.00",
    status: "Completed",
    method: "Virtual Card"
  },
  {
    date: "2024-03-14",
    description: "Lowes Hardware",
    amount: "$175.50",
    status: "Completed",
    method: "Virtual Card"
  },
  {
    date: "2024-03-13",
    description: "Claim Payment",
    amount: "$5,000.00",
    status: "Completed",
    method: "Deposit"
  }
];

interface Transaction {
  date: string;
  description: string;
  amount: string;
  status: string;
  method: string;
}

const headers = [
  { key: "date", label: "Date" },
  { key: "description", label: "Description" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
  { key: "method", label: "Method" }
];



export function RecentTransaction() {
  return (
    <section className="max-w-5xl mx-auto mt-10">
      <div className="max-w-5xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#089dea]">Recent Transactions</h2>
          <div className="overflow-x-auto">
            <Table headers={headers} data={recentTransactions} />
          </div>
        </div>
      </div>
    </section>
  );
}
