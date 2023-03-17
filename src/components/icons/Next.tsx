const Next = ({
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
        d='m2 1 8 8-8 8'
        stroke='currentColor'
        strokeWidth='3'
        fill='none'
        fill-rule='evenodd'
      />
    </svg>
  );
};

export default Next;
