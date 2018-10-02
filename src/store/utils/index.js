export const buildActionCreator = type => {
  return (payload = {}) => ({
    type,
    payload,
  });
};

export const buildRequestActionTypes = (type, namespace) => ({
  [`${type}_REQUEST`]: `${namespace}/${type}_REQUEST`,
  [`${type}_SUCCESS`]: `${namespace}/${type}_SUCCESS`,
  [`${type}_FAILURE`]: `${namespace}/${type}_FAILURE`,
});

export const buildEventActionCreator = type => {
  return (name = '', data = {}) => ({
    type,
    payload: {},
    event: {
      name,
      data,
    },
  });
};

const mapTypeToRequest = type => ({
  request: buildActionCreator(`${type}_REQUEST`),
  success: buildActionCreator(`${type}_SUCCESS`),
  failure: buildActionCreator(`${type}_FAILURE`),
});

export const buildRequestCreator = (type, requestCallback) => {
  const request = mapTypeToRequest(type);
  return (payload = {}) => dispatch => requestCallback({ request, payload, dispatch });
};
