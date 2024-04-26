// updateData
/* eslint-disable */

import { showAlert } from './alerts.js';

//type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,

      data,
    });
    console.log(res);
    if (res.data.status === 'success') {
      showAlert('success', ` ${type.toUpperCase()} updated successfully`);
    }
  } catch (err) {
    showAlert('error', err.message);
  }
};
