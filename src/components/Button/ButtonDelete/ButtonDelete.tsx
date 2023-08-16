import useStyles from './styles';
import { IButtonSmallProps } from '~/interfaces/comp-interfaces';
import ButtonApp from '../ButtonApp';
import Text from '~/components/Text';
import { TrashLightIcon, TrashDarkIcon, TrashDisabledIcon } from '~/assets/icons';

const ButtonDelete = ({ children, type = 'light', disabled, onClick, loading }: IButtonSmallProps) => {
  const { classes, cx } = useStyles();
  return (
    <ButtonApp
      className={cx(classes[type])}
      disabled={disabled}
      onClick={onClick}
      loading={loading}
      prefixIcon={disabled ? <TrashDisabledIcon /> : type === 'light' ? <TrashDarkIcon /> : <TrashLightIcon />}
    >
      <Text component={'span'} type="h8">
        {children}
      </Text>
    </ButtonApp>
  );
};

export default ButtonDelete;
