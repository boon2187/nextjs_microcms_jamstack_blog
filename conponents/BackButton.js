import { useRouter } from 'next/router'
import React from 'react'
import BackIcon from '@mui/icons-material/ArrowBackIosNew'
import Button from '@mui/material/Button'

const BackButton = () => {
    const router = useRouter()

    return (
        <div>
            <Button aria-label="戻る" variant="contained" onClick={() => router.back()}>
                <BackIcon />
            </Button>
        </div>
    )
}

export default BackButton