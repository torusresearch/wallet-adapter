import { Wallet } from '@solana/wallet-adapter-base';
import React, { FC, MouseEventHandler, useEffect, useState } from 'react';
import { Button } from './Button';
import { WalletIcon } from './WalletIcon';

export interface WalletListItemProps {
    handleClick: MouseEventHandler<HTMLButtonElement>;
    tabIndex?: number;
    wallet: Wallet;
}

export const WalletListItem: FC<WalletListItemProps> = ({ handleClick, tabIndex, wallet }) => {
    const [detected, setDetected] = useState<boolean>(false);
    useEffect(()=>{
        wallet.adapter.ready().then(readyState=>setDetected(readyState));
    }, [wallet])
    return (
        <li>
            <Button onClick={handleClick} startIcon={<WalletIcon wallet={wallet}/>} tabIndex={tabIndex} endText={detected?"Detected":" "}>
                {wallet.name}
            </Button>
        </li>
    );
};
