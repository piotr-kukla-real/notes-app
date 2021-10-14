import type { SnackbarCloseReason } from '@material-ui/core';
import { useEffect, useState, createContext, useContext } from 'react';
import { MdOutlineCheckCircle, MdErrorOutline } from 'react-icons/md';
import { BiTrash } from 'react-icons/bi';
import { StyledSnackbar } from 'components/styled';
import Alert from 'components/Alert';

type colorNames = 'dark' | 'error';

interface colorType {
  bg: React.CSSProperties['backgroundColor'];
  color: React.CSSProperties['color'];
}

type colors = {
  [Property in colorNames]: colorType;
};

const colors: colors = {
  dark: {
    bg: 'hsl(0, 0%, 16%)',
    color: 'var(--light-text)',
  },
  error: {
    bg: 'hsl(4, 70%, 45%)',
    color: 'var(--light-text)',
  },
};

const icons = {
  check: <MdOutlineCheckCircle />,
  error: <MdErrorOutline />,
  trash: <BiTrash />,
};

type icons = keyof typeof icons;

const Context = createContext<null | setNotify>(null);

interface Notify {
  message: string;
  color: colorNames;
  icon: icons;
  key: number;
}

interface setNotify {
  (options?: { message?: string; color?: colorNames; icon?: icons }): void;
}

interface options {
  message: string;
  color: colorNames;
  icon: icons;
}

const NotificationProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [currentNotify, setCurrentNotify] = useState<undefined | Notify>(
    undefined,
  );
  const [displayNotify, setDisplayNotify] = useState<undefined | Notify>(
    undefined,
  );

  useEffect(() => {
    if (currentNotify && !displayNotify) {
      setDisplayNotify(currentNotify);
      setCurrentNotify(undefined);
      setOpen(true);
    } else if (currentNotify && displayNotify && open) {
      setOpen(false);
    }
  }, [open, currentNotify, displayNotify]);

  const setNotify: setNotify = (options): void => {
    const defOptions: options = {
      ...{ message: '', color: 'dark', icon: 'check' },
      ...options,
    };

    const { message, color, icon } = defOptions;

    setCurrentNotify({ message, color, icon, key: new Date().getTime() });
  };

  const handleClose = (
    event: React.SyntheticEvent | MouseEvent,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onExited = (node: HTMLElement) => {
    setDisplayNotify(undefined);
  };

  const icon = displayNotify && icons[displayNotify.icon];

  const style: React.CSSProperties = {
    backgroundColor: displayNotify && colors[displayNotify.color].bg,
    color: displayNotify && colors[displayNotify.color].color,
  };

  return (
    <>
      <StyledSnackbar
        key={displayNotify && displayNotify.key}
        open={open}
        onClose={handleClose}
        TransitionProps={{ onExited }}
        transitionDuration={250}
        autoHideDuration={3000}
      >
        <Alert
          message={displayNotify && displayNotify.message}
          icon={icon}
          style={style}
        />
      </StyledSnackbar>
      <Context.Provider value={setNotify}>{children}</Context.Provider>
    </>
  );
};

const useNotify = () => {
  const context = useContext(Context);
  return context;
};

export { NotificationProvider };
export default useNotify;
