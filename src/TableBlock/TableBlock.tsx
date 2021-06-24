import React from 'react';
import { MyTable } from '../Table/MyTable';
import styled from 'styled-components';

type TableBlockProps = {
    dataUrl: string
}

export const TableBlock = ({ dataUrl }: TableBlockProps) => {

    return (
        <TableBlockContainer >
            <MyTable dataUrl={dataUrl}/>
        </TableBlockContainer>
    );
};

const TableBlockContainer = styled.div`
position: relative;
max-width: 600px;
background: #dbdbdb;
margin: 20px 0;
overflow: auto;
height: 250px;
`
