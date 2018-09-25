import Api from '@/services/Api'

export default {
  fetchUsers () {
    return Api().get('user')
    .catch((error) => {
        if (error.response) {
            console.log(error.response);
            alert(error.response.data)
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });
  },
  signup (params) {
    return Api().post('user/signup', params)
    .catch((error) => {
        if (error.response) {
            console.log(error.response);
            alert(error.response.data)
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });
  },
  login (params) {
    return Api().post('api/login', params)
    .catch((error) => {
        if (error.response) {
            console.log(error.response);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });
  },
  updateUser  (params) {
    return Api().put('user/' + params.id, params)
    .catch((error) => {
        if (error.response) {
            console.log(error.response);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });
  },
  getUser  (params) {
    return Api().get('user/' + params.id)
    .catch((error) => {
        if (error.response) {
            console.log(error.response);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });
  },
  deleteUser (id) {
    return Api().delete('user/' + id)
    .catch((error) => {
        if (error.response) {
            console.log(error.response);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });
  }
}
