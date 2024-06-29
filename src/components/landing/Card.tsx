import clsx from 'clsx';
import React from 'react';


import { useNavigate } from 'react-router';
type CardProps = {
    title: string;
    text: string;
    link: string;
    pageLink:string;

}

export const Card: React.FC<CardProps> = ({ title, text, link, pageLink }) => 
    {
        console.log(pageLink)
        const navigate = useNavigate();
        return (
            <div
                className={clsx(
                    'flex',
                    'flex-col',
                    'gap-4',
                    'p-4',
                    'bg-white',
                    'py-6',
                    'px-4',
                    'rounded-2xl'
                )}
            >
                <h2
                    className={clsx(
                        'text-black',
                        'text-2xl',
                        'leading-normal',
                        'font-medium'
                    )}
                >
                    {title}
                </h2>
                <p className={clsx('text-gray80', 'text-base', 'leading-relaxed')}>
                    {text}
                </p>
                <a
                    // href={link}
                    className={clsx(
                        'mt-auto',
                        'flex',
                        'items-center',
                        'text-primary',
                        'gap-2.5'
                    )}
                    onClick={() => navigate(pageLink)}
                >
                    Read more
                    <img src="/media/landing/arrow-purple.svg" alt="" />
                </a>
            </div>
        )
    };
