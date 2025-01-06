interface IconProps {
  className?: string;
  children: React.ReactNode;
}

function Icon({ className, children }: IconProps) {
  return ( 
    <span className={'material-symbols-outlined ' + className}>{children}</span>
   );
}

export default Icon;