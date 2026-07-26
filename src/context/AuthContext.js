'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
    const [user, setUser] = useLocalStorage('user', null)
    const [isAuthenticated, setIsAuthenticated] = useState(!!user)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setIsAuthenticated(!!user)
        setLoading(false)
    }, [user])

    const login = (userData) => {
        setUser(userData)
        setIsAuthenticated(true)
    }

    const logout = () => {
        setUser(null)
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            loading,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}