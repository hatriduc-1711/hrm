import useStyles from './styles';
import ButtonApp from '../ButtonApp';
import Text from '~/components/Text';
import { IButtonDefaultProps } from '~/interfaces/comp-interfaces';

const ButtonDefault = ({
  children,
  type = 'darkDefault',
  disabled,
  loading,
  onClick,
  className,
  customButtonStyles,
}: IButtonDefaultProps) => {
  const { classes, cx } = useStyles();
  return (
    <ButtonApp
      className={cx(classes.container, classes[type], className)}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      customButtonStyles={customButtonStyles}
    >
      <Text type="h7" component={'span'}>
        {children}
      </Text>
    </ButtonApp>
  );
};

export default ButtonDefault;
