import "./styles.css";

type Props<T> = {
  columnsName: string[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

export const Table = <T,>({ columnsName, data, renderRow }: Props<T>) => {
  return (
    <table>
      <thead>
        <tr>
          {columnsName.map((columnName) => (
            <th key={columnName}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map(renderRow)}</tbody>
    </table>
  );
};
