import type { SnackbarCloseReason } from '@material-ui/core';
import { useEffect, useState, createContext, useContext } from 'react';
import { MdOutlineCheckCircle, MdErrorOutline } from 'react-icons/md';
import { BiTrash } from 'react-icons/bi';
import { StyledSnackbar } from 'components/styled';
import Alert from 'components/Alert';

const colors: ColorsObject = {
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

export const NotificationContext = createContext<Context | null>(null);

const useNotify = () => {
  const context = useContext(NotificationContext);
  return context;
};

export const NotificationProvider: React.FC = ({ children }) => {
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

  const value: Context = (options): void => {
    const defOptions: Required<Options> = {
      ...{ message: '', color: 'dark', icon: 'check' },
      ...options,
    };

    const { message, color, icon } = defOptions;

    setCurrentNotify({ message, color, icon, key: Date.now() });
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
      <NotificationContext.Provider value={value}>
        {children}
      </NotificationContext.Provider>
    </>
  );
};

interface ColorType {
  bg: React.CSSProperties['backgroundColor'];
  color: React.CSSProperties['color'];
}

type ColorsObject = {
  [P in Colors]: ColorType;
};

export type Colors = 'dark' | 'error';

export type Icons = keyof typeof icons;

interface Notify {
  message: string;
  color: Colors;
  icon: Icons;
  key: number;
}

interface Context {
  (options?: Options): void;
}

export type Options = Partial<Pick<Notify, 'message' | 'color' | 'icon'>>;

export default useNotify;
