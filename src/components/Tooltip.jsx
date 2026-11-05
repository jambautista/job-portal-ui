import { Children, cloneElement, isValidElement, useId } from "react";

/**
 * Site-styled tooltip. Shows on hover and on keyboard focus of the wrapped element.
 * The child should be focusable (e.g. a <button> or <Link>) so keyboard users can reach it.
 */
const Tooltip = ({ text, children, className = "" }) => {
  const id = useId();
  const child = Children.only(children);
  const trigger = isValidElement(child)
    ? cloneElement(child, { "aria-describedby": id })
    : child;

  return (
    <span className={`relative inline-block group/tooltip ${className}`}>
      {trigger}
      <span
        id={id}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20 w-56 sm:w-64 px-4 py-3 rounded-xl bg-gray-900/95 backdrop-blur border border-primary-600/30 shadow-xl text-xs leading-relaxed text-left font-normal text-gray-200 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible group-focus-within/tooltip:opacity-100 group-focus-within/tooltip:visible transition-opacity duration-300"
      >
        <span className="block h-0.5 w-10 mb-2 rounded-full bg-gradient-to-r from-primary-400 to-purple-400"></span>
        {text}
        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 w-3 h-3 rotate-45 bg-gray-900 border-r border-b border-primary-600/30"></span>
      </span>
    </span>
  );
};

export default Tooltip;
