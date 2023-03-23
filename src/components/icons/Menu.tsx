const Menu = ({
  width = 16,
  height = 15,
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
        d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default Menu;
