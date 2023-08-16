import toast from 'react-hot-toast';
import { ToastErrorIcon, ToastInfoIcon, ToastSuccessIcon, ToastWarningIcon } from '~/assets/icons';
import Toast from '~/components/Toast';

export const showSuccessMessage = (message: string) =>
  toast.custom((t) => (
    <Toast
      onClick={() => toast.dismiss(t.id)}
      type="success"
      icon={<ToastSuccessIcon />}
      message={message}
      visible={t.visible}
    />
  ));

export const showErrorMessage = (message: string) =>
  toast.custom((t) => (
    <Toast
      onClick={() => toast.dismiss(t.id)}
      type="error"
      icon={<ToastErrorIcon />}
      message={message}
      visible={t.visible}
    />
  ));

export const showWarningMessage = (message: string) =>
  toast.custom((t) => (
    <Toast
      onClick={() => toast.dismiss(t.id)}
      type="warning"
      icon={<ToastWarningIcon />}
      message={message}
      visible={t.visible}
    />
  ));

export const showInfoMessage = (message: string) =>
  toast.custom((t) => (
    <Toast
      onClick={() => toast.dismiss(t.id)}
      type="information"
      icon={<ToastInfoIcon />}
      message={message}
      visible={t.visible}
    />
  ));
