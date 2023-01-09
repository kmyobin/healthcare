import React, { useEffect } from 'react'

function ToastNotification(props) {
  useEffect(()=> {
    let timer=setTimeout(() => {
      props.setToastState(false);
    }, 3000);

    return () => {
      clearTimeout(timer)
    }
  }, []);

  return (
    <div>
      <p>{props.toastMessage}</p>
    </div>
  )
}

export default ToastNotification
