import { Alert, Snackbar } from '@mui/material';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector(({ notification }) => notification);
  if (!notification.msg) return null;

  const { msg, type } = notification;

  return (
    <Snackbar
      open={true}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Alert severity={type}>{msg}</Alert>
    </Snackbar>
  );
};

export default Notification;
