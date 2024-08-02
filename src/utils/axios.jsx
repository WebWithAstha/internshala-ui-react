import axios from 'axios'
import React from 'react'

const instance = axios.create({
    baseURL:'api/'
})

export default instance