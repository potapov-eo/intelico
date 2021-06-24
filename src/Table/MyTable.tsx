import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getTableParams, tableParamsType } from '../tableJSON';
import styled from 'styled-components';

type MyTablePropsType = {
    dataUrl: string
}
export const MyTable = ({ dataUrl }: MyTablePropsType) => {

    const tableParams: tableParamsType = getTableParams(dataUrl);
    debugger
    return (
        <Table size="small" aria-label="sticky table" style={{ position: 'relative' }}>
            <StickyHeader>
                <TableRow>
                    {tableParams.header.map(headCell => <TableCell align="center">{headCell}</TableCell>)}
                </TableRow>
            </StickyHeader>
            <TableBody>
                {tableParams.row.map((row, i) => (
                    <TableRow key={i}>
                        {row.map(cell => <TableCell align="center">
                            {cell}
                        </TableCell>)}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};


const StickyHeader = styled(TableHead)`
  position: sticky;
  top: 0;
  background: #dbdbdb;
`;
