import { iNotification, NOTIFICATION_TYPE, Store } from 'react-notifications-component';
import { FaInfoCircle, FaExclamationTriangle, FaExclamationCircle, FaCheckCircle } from "react-icons/fa";

import "./notification.scss";

export enum NotificationType {
    INFO    = 'info',
    WARN    = 'warning',
    ERROR   = 'danger',
    SUCCESS = 'success',
};

const ANIMATION_DURATION: number = 3000 as const;

export function notification(
    type: NotificationType,
    message: string,
): void {
    let icon: any;

    switch(type) {
        case NotificationType.INFO:
            icon = <FaInfoCircle className = 'fa fa-info-circle'/>;
            break;
        case NotificationType.WARN:
            icon = <FaExclamationTriangle className = 'fa fa-exclamation-triangle'/>;
            break;
        case NotificationType.ERROR:
            icon = <FaExclamationCircle className='fa fa-exclamation-circle'/>;
            break;
        case NotificationType.SUCCESS:
            icon = <FaCheckCircle className='fa fa-check-circle'/>;
            break;
        default:
            icon = <FaInfoCircle className='notification__custom--info' />;
    }

    const notif: iNotification = {
        title: type.charAt(0).toUpperCase() + type.slice(1),
        message,
        type: type as NOTIFICATION_TYPE,
        insert: 'bottom',
        container: 'bottom-right',
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: ANIMATION_DURATION,
            onScreen: true,
            showIcon: false,
            click: true,
        },
    };

    function CustomContentRenderer() {
        return (
            <div className={`notification__custom--${type}`}>
                <div className="notification__custom-icon">
                    {icon}
                </div>
                <div className="notification__custom">
                    <p className="rnc__notification-message">{message}</p>
                </div>
            </div>
        );
    }

    const object: Partial<iNotification> = {}

    Store.addNotification(
        Object.assign(object, notif, {
            width: 350,
            content: CustomContentRenderer,
        })
    );
}
