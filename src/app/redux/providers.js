'use client'
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./store"

const { Provider } = require("react-redux")

export function Providers({ children }) {
      return <Provider store={store}>
            <PersistGate persistor={persistor}>
            {children}
            </PersistGate>
      </Provider>
}