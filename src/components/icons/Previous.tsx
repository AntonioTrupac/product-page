const Previous = ({
  width = 13,
  height = 18,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M11 1 3 9l8 8'
        stroke='currentColor'
        strokeWidth='3'
        fill='none'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default Previous;
