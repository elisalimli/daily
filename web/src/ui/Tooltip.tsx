import React from "react";
import ReactTooltip, { TooltipProps } from "react-tooltip";

type Props = TooltipProps & {};

const Tooltip: React.FC<Props> = ({ children, ...props }) => {
  return (
    <ReactTooltip
      backgroundColor="var(--color-primary-700)"
      effect="solid"
      place="bottom"
      {...props}
    >
      {children}
    </ReactTooltip>
  );
};

export default Tooltip;
