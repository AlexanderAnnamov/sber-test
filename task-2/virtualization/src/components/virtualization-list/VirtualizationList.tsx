import React from 'react';

import List from '@mui/material/List';

interface IVirtualizationList {
    rowHeight: number;
    allItems: number;
    elements: React.ReactNode[];
    numberVisibleElements: number;
    containerHeight: string | number;
    containerWidth: string | number;
}

const VirtualizationList: React.FC<IVirtualizationList> = ({
    rowHeight,
    allItems,
    elements,
    numberVisibleElements,
    containerHeight,
    containerWidth,
}) => {
    const [scroll, setScroll] = React.useState(0);
    const startNodeElem = Math.ceil(scroll / rowHeight);

    const visibleItems = elements?.slice(
        startNodeElem,
        startNodeElem + numberVisibleElements
    );

    const offsetY = startNodeElem * rowHeight;
    const allHeight = rowHeight * allItems;

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        setScroll(e?.currentTarget?.scrollTop - 50);
    };

    return (
        <div
            style={{
                height: containerHeight,
                overflow: 'auto',
                backgroundColor: '#424242',
                width: containerWidth,
            }}
            onScroll={handleScroll}
        >
            <div style={{ height: allHeight }}>
                <List
                    sx={{
                        width: '100%',
                        transform: `translateY(${offsetY}px)`,
                    }}
                >
                    {visibleItems}
                </List>
            </div>
        </div>
    );
};

export default VirtualizationList;
