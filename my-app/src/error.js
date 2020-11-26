import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ErrorDisplay = () => {
    const errorMessage = useSelector(storeState => storeState.errorState);
    const dispatch = useDispatch();
    if (errorMessage){
        setTimeout(() => {
            dispatch({ type: "CLEAR_ERROR" });
        }, 5000);
        return (
          <div>
            <div>{errorMessage}</div>
          </div>
        );
    } else {
        return null;
    }
}

export default ErrorDisplay;