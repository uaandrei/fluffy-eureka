import _ from "lodash";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Icon } from "../../components";

interface NotificationsState {
  showNotification(message: string): void;
}

const defaultState: NotificationsState = {
  showNotification(_) {},
};

const NotificationsContext = createContext(defaultState);

const NotificationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<string[]>([]);

  const showNotification = (notification: string) => {
    setNotifications([notification, ...notifications]);
  };

  const removeNotification = (index: number) => {
    _.pullAt(notifications, index);
    setNotifications([...notifications]);
  };

  const state: NotificationsState = {
    showNotification,
  };

  return (
    <NotificationsContext.Provider value={state}>
      <div className="container mx-auto">
        {notifications &&
          notifications.length > 0 &&
          _.map(notifications, (notification, index) => (
            <div className="border-2 border-black pl-5 mb-2 rounded-full bg-purple-300 flex">
              <span className="flex-grow">{notification}</span>
              <span
                className="text-red-900"
                onClick={() => {
                  removeNotification(index);
                }}
              >
                <Icon type="x" hideHover />
              </span>
            </div>
          ))}
      </div>
      {children}
    </NotificationsContext.Provider>
  );
};

const useNotificationsContext = () => useContext(NotificationsContext);

export { NotificationProvider, useNotificationsContext };
