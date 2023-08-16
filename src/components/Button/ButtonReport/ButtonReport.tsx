import useStyles from './styles';
import Text from '~/components/Text';
import ButtonApp from '../ButtonApp';
import { ReportLightIcon, ReportDarkIcon, ReportDisabledIcon } from '~/assets/icons';
import { IButtonSmallProps } from '~/interfaces/comp-interfaces';

const ButtonReport = ({ children, type = 'light', disabled, onClick, loading }: IButtonSmallProps) => {
  const { classes, cx } = useStyles();
  return (
    <ButtonApp
      className={cx(classes[type])}
      disabled={disabled}
      onClick={onClick}
      loading={loading}
      prefixIcon={disabled ? <ReportDisabledIcon /> : type === 'light' ? <ReportDarkIcon /> : <ReportLightIcon />}
    >
      <Text type="h8" component={'span'}>
        {children}
      </Text>
    </ButtonApp>
  );
};

export default ButtonReport;
