import React from 'react'
import { isAuthenticated } from '../../helper/helper'
import { Navigate } from 'react-router-dom'

const Auth = ({Child}) => {
  return isAuthenticated() ? <Child /> : <Navigate to='/' />
}

export default Auth