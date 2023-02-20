import { FlexStyle } from './styles';

export type FlexProps = {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: string;
  className?: string;
  children: React.ReactNode;
};

const Flex = ({
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  flexDirection = 'row',
  gap = '0px',
  className,
  children,
}: FlexProps) => {
  return (
    <FlexStyle
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      gap={gap}
      className={className}
    >
      {children}
    </FlexStyle>
  );
};

export default Flex;
