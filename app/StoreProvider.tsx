'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from '@/app/lib/store'

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore | null>(null) // Initialize with null
    if (!storeRef.current) {
        storeRef.current = makeStore()
    }

    return <Provider store={ storeRef.current }> { children } </Provider>
}
