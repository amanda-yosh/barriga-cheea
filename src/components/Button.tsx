export interface ButtonProps {
  label: string;
  onClickFunction: () => void;
}

export const Button = ({
  label,
  onClickFunction,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={() => onClickFunction()}
      type="button"
      className='bg-amber-600 text-black font-bold py-4 px-10 rounded hover:bg-amber-700 transition-colors duration-300 cursor-pointer'
      {...props}
    >
      {label}
    </button>
  );
};
