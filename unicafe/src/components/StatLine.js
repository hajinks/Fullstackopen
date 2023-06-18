const StatLine = ({ title, stat, format }) => {
  const round = (val) => Math.round(val * 100) / 100;
  return (
    <tr>
      <th scope="row">{title}:</th>
      <td>
        {round(stat)}
        {format}
      </td>
    </tr>
  );
};

export default StatLine;
