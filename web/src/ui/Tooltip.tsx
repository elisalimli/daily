import React from "react";
import ReactTooltip, { TooltipProps } from "react-tooltip";

type Props = TooltipProps & {};

const Tooltip: React.FC<Props> = ({ children, ...props }) => {
  return (
    <ReactTooltip
      backgroundColor="var(--color-secondary)"
      effect="solid"
      place="bottom"
      {...props}
    >
      {children}
    </ReactTooltip>
  );
};

export default Tooltip;
