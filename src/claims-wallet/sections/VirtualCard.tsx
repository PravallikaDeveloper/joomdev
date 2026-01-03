
export function VirtualCard({ onSelect }: { onSelect: () => void }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Virtual Card</h2>
      <p className="text-gray-600 mb-4">Instant access to funds</p>
      <button onClick={onSelect} className="px-4 py-2 bg-blue-600 text-white rounded">
        Get Virtual Card
      </button>
    </div>
  );
}
