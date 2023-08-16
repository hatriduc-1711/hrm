import { Modal, Stack, Box } from '@mui/material';
import { CloseIcon } from '~/assets/icons';

import useStyles from './styles';
import Text from '~/components/Text';
import ButtonDefault from '~/components/Button/ButtonDefault';
import colors from '~/themes/colors';
import { IModalProps } from '~/interfaces/comp-interfaces';

const ModalApp = ({ title, description, open, onClose, onClickButtonYes, loading }: IModalProps) => {
  const { classes, cx } = useStyles();
  return (
    <Modal open={open} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box className={cx(classes.modal)}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Text type="h4" component={'h6'} color={colors.grey.step12}>
            {title}
          </Text>
          <Box onClick={onClose} sx={{ display: 'flex', cursor: 'pointer' }}>
            <CloseIcon width="24px" height="24px" />
          </Box>
        </Stack>
        <Stack direction={'column'}>
          {description && (
            <Text type="h7" component={'p'} color={colors.grey.step11}>
              {description}
            </Text>
          )}
          <Stack direction={'row'} justifyContent={'space-between'} marginTop={'20px'}>
            <ButtonDefault onClick={onClose} className={cx(classes.button, classes.buttonNo)}>
              No
            </ButtonDefault>
            <ButtonDefault loading={loading} onClick={onClickButtonYes} className={cx(classes.button)}>
              Yes
            </ButtonDefault>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalApp;
