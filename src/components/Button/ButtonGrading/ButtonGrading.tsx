import useStyles from './styles';
import Text from '~/components/Text';
import ButtonApp from '../ButtonApp';
import { StarLightIcon, StarDarkIcon, StarDisabledIcon } from '~/assets/icons';
import { IButtonSmallProps } from '~/interfaces/comp-interfaces';

const ButtonGrading = ({ children, type = 'light', disabled, onClick, loading }: IButtonSmallProps) => {
  const { classes, cx } = useStyles();
  return (
    <ButtonApp
      className={cx(classes[type])}
      disabled={disabled}
      onClick={onClick}
      loading={loading}
      prefixIcon={disabled ? <StarDisabledIcon /> : type === 'light' ? <StarDarkIcon /> : <StarLightIcon />}
    >
      <Text type="h8" component={'span'}>
        {children}
      </Text>
    </ButtonApp>
  );
};

export default ButtonGrading;
