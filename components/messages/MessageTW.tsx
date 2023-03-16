import React from 'react'

export interface MessageProps extends React.PropsWithChildren<{}> {
    name?: string;
    avatarUrl?: string;
    date?: string;
    isOwn?: boolean;
}

export default function Message({ name, avatarUrl, date, children, isOwn }: MessageProps) {
    const endOrStart = isOwn ? 'end' : 'start';
    const bgColor = isOwn ? 'bg-primary' : 'bg-gray-800';
    const alignSelf = isOwn ? 'self-end' : 'self-start';

    return (
        <div className={`w-4/5 ${alignSelf}`}>
            <div className={`min-w-[100px] ${bgColor} ${alignSelf} py-4 px-6 rounded-lg inline-flex`}>
                <div className={`flex items-${endOrStart}`}>
                    {!isOwn && (
                        <img
                            alt={name}
                            src={avatarUrl && avatarUrl !== '' ? avatarUrl : undefined}
                            className="w-6 h-6 rounded-full mr-2"
                        />
                    )}
                    <div>
                        <p className="text-xs font-semibold">{name}</p>
                        <p className="text-sm">{children}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}