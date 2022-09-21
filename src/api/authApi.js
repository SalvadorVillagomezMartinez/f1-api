import axios from 'axios'

// Api para autenticacion
const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key: 'AIzaSyBM1coh5uR40YmyY5j348FDqvrb3xegaCg'
    }
})

export default  authApi