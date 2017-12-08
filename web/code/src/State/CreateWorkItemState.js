const CREATE_WORK_ITEM_LOADING = 'CREATE_WORK_ITEM_LOADING';
const CREATE_WORK_ITEM_SUCCESS = 'CREATE_WORK_ITEM_SUCCESS';
const CREATE_WORK_ITEM_FAILURE = 'CREATE_WORK_ITEM_FAILURE';

const createWorkItemLoading = requestData => {
  return {
    type: CREATE_WORK_ITEM_LOADING,
    payload: { requestData },
  };
};

const createWorkItemSuccess = responseData => {
  return {
    type: CREATE_WORK_ITEM_SUCCESS,
    payload: { responseData },
  };
};

const createWorkItemFailure = responseError => {
  return {
    type: CREATE_WORK_ITEM_FAILURE,
    payload: { responseError },
  };
};

const initialState = {
  loading: false,
  requestData: null,
  responseData: null,
  responseError: null,
};

export const createWorkItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WORK_ITEM_LOADING:
      return {
        ...state,
        responseError: null,
        loading: true,
        requestData: action.payload.requestData,
        responseData: null,
      };
    case CREATE_WORK_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        responseData: action.payload.responseData,
      };
    case CREATE_WORK_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        responseError: action.payload.responseError,
      };
    default:
  }

  return state;
};

const createWorkItemRequest = async requestData => {
  let url = '/work-items/create-new';

  return fetch(url, {
    body: JSON.stringify(requestData),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });
};

export const createWorkItem = requestData => async dispatch => {
  try {
    await dispatch(createWorkItemLoading(requestData));
    const response = await createWorkItemRequest(requestData);
    const responseData = await response.body.json();
    if (!response.ok) {
      dispatch(createWorkItemFailure(responseData));
    }
    dispatch(createWorkItemSuccess(responseData));
  } catch (responseData) {
    dispatch(createWorkItemFailure(responseData));
  }
};
