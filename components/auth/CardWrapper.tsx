'use client';
import { ICardWrapper } from '@/types/cardWrapper';
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import BackButton from './backButton';
import AuthHeader from './header';
import Social from './social';

const CardWrapper: React.FC<ICardWrapper> = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <AuthHeader label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    );
};

export default CardWrapper;
