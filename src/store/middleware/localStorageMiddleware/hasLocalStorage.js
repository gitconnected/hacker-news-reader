const STORAGE_TYPE = 'localStorage';

const hasLocalStorage = (storageType = STORAGE_TYPE) => {
  if (typeof window === 'undefined' || !(storageType in window)) {
    return false;
  }

  try {
    let storage = window[storageType];
    const testKey = `storage ${storageType} test`;
    storage.setItem(testKey, 'test');
    storage.getItem(testKey);
    storage.removeItem(testKey);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`redux-persist ${storageType} test failed, persistence will be disabled.`);
    }

    return false;
  }

  return true;
};

export default hasLocalStorage;
