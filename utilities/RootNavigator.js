import { createNavigationContainerRef } from '@react-navigation/native';

export const navigatorRef = createNavigationContainerRef();

export function navigateTo(name, params) {
    if (navigatorRef.isReady()) {
        navigatorRef.navigate(name, params);
    }
}

export function goBack() {
    if (navigatorRef.isReady()) {
        navigatorRef.goBack();
    }
}

export function canGoBack() {
    if (navigatorRef.isReady()) {
        return navigatorRef.canGoBack();
    }
}
