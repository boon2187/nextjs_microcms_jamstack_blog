import { useRouter } from 'next/router'
import React from 'react'

const BackButton = () => {
    const router = useRouter()

    return (
        <div>
            <button alia-label="戻る" type="button" onClick={() => router.back()}>
                戻る
            </button>
        </div>
    )
}

export default BackButton