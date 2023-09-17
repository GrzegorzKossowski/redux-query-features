import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import App from './App'
import { apiSlice } from '../api/apiSlice'

const AppWrapper = () => {
  return (
    <ApiProvider api={apiSlice}><App/></ApiProvider>
  )
}

export default AppWrapper