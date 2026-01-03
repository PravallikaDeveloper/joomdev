interface TableHeader {
  key: string;
  label: string;
}

interface TableProps<T> {
  headers: TableHeader[];
  data: T[];
}


export function Table<T extends Record<string, any>>({
  headers,
  data,
}: TableProps<T>) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          {headers.map((header) => (
            <th key={header.key} className="text-left py-4 px-4">
              {header.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
            {headers.map((header) => (
              <td key={header.key} className="py-4 px-4" data-key={header.key}>
                <label data-value={row[header.key]}>{row[header.key]}</label>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
