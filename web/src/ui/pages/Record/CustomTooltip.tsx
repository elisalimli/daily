import { format, parseISO } from "date-fns";

const CustomTooltip = ({ active, payload, label, unit }) => {
  if (active && payload?.length && label) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "d MMM, yyyy")}</h4>
        {payload?.length ? (
          <p>
            {payload[0]?.value} {unit}
          </p>
        ) : null}
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
