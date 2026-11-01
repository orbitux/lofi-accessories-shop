'use client'
import Link from 'next/link'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { useAuth } from '@/context/AuthContext'
import { Button } from '../ui/button'

const LoginBox = () => {
    const { user, logout } = useAuth()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline">{user && user.name}<IoPersonCircleOutline size={32} /></Button>} />
            <DropdownMenuContent align='end' className='w-64 bg-mauve-300/90'>
                {user ? (
                    <>
                        <DropdownMenuGroup >
                            <DropdownMenuLabel>
                                <div className='text-mauve-900'>
                                    <span>سلام , <span className='text-mauve-900 font-bold text-lg'>{user.name}</span> 👋</span>
                                    <span>{user.email}</span>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href={'/dashboard'}>
                                    حساب کاربری
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href={'/dashboard/my-orders'}>
                                    سفارش های من
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={logout} className={'cursor-pointer'}>
                                خروج از حساب کاربری
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </>
                ) : (
                    <>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>
                                وارد حساب کاربری خود شوید !
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem asChild>
                                <Link href='/login'>
                                    ورود
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <Link href='/signup'>
                                    ثبت نام
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LoginBox