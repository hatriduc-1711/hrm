import useStyles from './styles';
import ButtonApp from '../ButtonApp';
import Text from '~/components/Text';
import { AlertCircleIcon } from '~/assets/icons';
import { IButtonTabProps } from '~/interfaces/comp-interfaces';

const ButtonTab = ({ children, type = 'darkDefault', onClick }: IButtonTabProps) => {
  const { classes, cx } = useStyles();
  return (
    <ButtonApp
      className={cx(classes.container, classes[type])}
      onClick={onClick}
      suffixIcon={type === 'lightError' || type === 'darkError' ? <AlertCircleIcon /> : <></>}
    >
      <Text type="h7" component={'span'}>
        {children}
      </Text>
    </ButtonApp>
  );
};

export default ButtonTab;
