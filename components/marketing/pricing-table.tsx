type PricingRow = {
  cells: readonly string[];
};

type PricingTableProps = {
  columns: readonly string[];
  rows: readonly PricingRow[];
};

export function PricingTable({ columns, rows }: PricingTableProps) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-border-soft bg-white">
      <table className="min-w-full border-collapse text-left text-sm leading-7">
        <thead className="bg-background text-foreground">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-5 py-4 font-medium">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.cells.join("-")} className="border-t border-border-soft">
              {row.cells.map((cell) => (
                <td key={cell} className="px-5 py-4 text-muted-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
