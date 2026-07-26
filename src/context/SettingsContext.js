'use client'

import React, { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const SettingsContext = createContext(undefined)

export function SettingsProvider({ children }) {
    const [settings, setSettings] = useLocalStorage('settings', {
        language: 'en',
        notifications: true,
        compactMode: false,
    })

    const updateSettings = (newSettings) => {
        setSettings(prev => ({ ...prev, ...newSettings }))
    }

    return (
        <SettingsContext.Provider value={{
            settings,
            updateSettings,
        }}>
            {children}
        </SettingsContext.Provider>
    )
}

export function useSettings() {
    const context = useContext(SettingsContext)
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider')
    }
    return context
}