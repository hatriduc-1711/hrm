import useStyles from './styles';
import { IButtonSmallProps } from '~/interfaces/comp-interfaces';
import ButtonApp from '../ButtonApp';
import Text from '~/components/Text';
import { EditLightIcon, EditDarkIcon, EditDisabledIcon } from '~/assets/icons';

const ButtonEdit = ({ children, type = 'light', disabled, onClick, loading }: IButtonSmallProps) => {
  const { classes, cx } = useStyles();
  return (
    <ButtonApp
      className={cx(classes[type])}
      disabled={disabled}
      onClick={onClick}
      loading={loading}
      prefixIcon={disabled ? <EditDisabledIcon /> : type === 'light' ? <EditDarkIcon /> : <EditLightIcon />}
    >
      <Text component={'span'} type="h8">
        {children}
      </Text>
    </ButtonApp>
  );
};

export default ButtonEdit;
