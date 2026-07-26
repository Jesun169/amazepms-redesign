'use client'

import { useState, useCallback } from 'react'

export const useForm = (initialState = {}, validate = null) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        setValues(prev => ({ ...prev, [name]: value }))

        if (validate) {
            const error = validate(name, value)
            setErrors(prev => ({ ...prev, [name]: error }))
        }
    }, [validate])

    const handleSubmit = useCallback(async (callback) => {
        setIsSubmitting(true)

        if (validate) {
            const validationErrors = validate(values)
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors)
                setIsSubmitting(false)
                return
            }
        }

        try {
            await callback(values)
        } catch (error) {
            console.error('Form submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }, [validate, values])

    const reset = useCallback(() => {
        setValues(initialState)
        setErrors({})
        setIsSubmitting(false)
    }, [initialState])

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        reset,
        setValues,
    }
}