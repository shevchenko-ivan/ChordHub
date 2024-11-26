'use client'

import { useCallback } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useForm, FormProvider } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";

export const Search = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const form = useForm({
        defaultValues: {
            query: ''
        }
    });

    const handleSubmitForm = form.handleSubmit((values) => {
        router.push('/search?' + createQueryString('query', values.query))
    });

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmitForm} className={'flex pag-2 max-w-[640px] m-auto'}>
                <Input {...form.register('query')} />
                <Button type={'submit'}>Search</Button>
            </form>
        </FormProvider>
    )
}