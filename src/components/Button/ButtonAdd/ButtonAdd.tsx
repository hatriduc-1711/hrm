import useStyles from './styles';
import Text from '~/components/Text';
import ButtonApp from '../ButtonApp';
import { AddLightIcon, AddDarkIcon, AddDisabledIcon } from '~/assets/icons';
import { IButtonSmallProps } from '~/interfaces/comp-interfaces';

const ButtonAdd = ({ children, type = 'light', disabled, onClick, loading }: IButtonSmallProps) => {
  const { classes, cx } = useStyles();
  return (
    <ButtonApp
      className={cx(classes[type])}
      disabled={disabled}
      onClick={onClick}
      prefixIcon={disabled ? <AddDisabledIcon /> : type === 'light' ? <AddDarkIcon /> : <AddLightIcon />}
      loading={loading}
    >
      <Text type="h8" component={'span'}>
        {children}
      </Text>
    </ButtonApp>
  );
};

export default ButtonAdd;
