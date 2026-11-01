import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { FiSearch } from 'react-icons/fi'
import { Input } from '../ui/input'

const SearchBox = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [open, setOpen] = useState(false)
    const handleSearch = (e) => {
        e.preventDefault()
        const value = search.trim()
        if (!value) return
        setOpen(false)
        setSearch('')
        router.push(`/products?search=${encodeURIComponent(value)}`)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={<Button className='bg-mauve-600'><FiSearch size={32} />جستجوی محصولات</Button>} />
            <DialogContent className='sm:max-w-lg bg-mauve-300'>
                <DialogHeader>
                    <DialogTitle className='text-right mt-3'>
                        جستجوی محصولات
                    </DialogTitle>
                    <DialogDescription className='text-right'>
                        نام محصول مورد نظر خود را جستجو کنید...
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSearch} className='flex gap-2'>
                    <Input value={search} onChange={e => setSearch(e.target.value)} placeholder='گردنبند مدل قلب'
                        className='text-right'
                        autoFocus
                    />
                    <Button type='submit' className='bg-mauve-500 text-white px-5 rounded-md cursor-pointer'>
                        جستجو
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default SearchBox